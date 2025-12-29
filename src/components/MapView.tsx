import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import L from 'leaflet';
import MarkerClusterGroup from 'leaflet.markercluster';
import { Tag, Typography, Button, Spin } from 'antd';
import { GiftOutlined } from '@ant-design/icons';
import { moroccanCommunes } from '../data/moroccanCommunes';

const { Text, Paragraph } = Typography;

// Fix default icon path when bundling
const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Icônes personnalisées par catégorie avec symboles appropriés
const createCategoryIcon = (color: string, emoji: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background-color: ${color};
      width: 40px;
      height: 40px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid white;
      box-shadow: 0 3px 6px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="
        transform: rotate(45deg);
        color: white;
        font-size: 20px;
        line-height: 34px;
        text-align: center;
        font-weight: bold;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
     ">${emoji}</div>
    </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  }) as any;
};

const categoryIcons: Record<string, any> = {
  FOOD: createCategoryIcon('#ff4d4f', '🍽️'),      // Nourriture - assiette
  CLOTHES: createCategoryIcon('#52c41a', '👕'),    // Vêtements - t-shirt
  MEDICINE: createCategoryIcon('#52c41a', '💊'),   // Médicaments - pilule
  OTHER: createCategoryIcon('#faad14', '📦')       // Autres - boîte
};

const categoryLabels: Record<string, string> = {
  FOOD: 'Nourriture',
  CLOTHES: 'Vêtements',
  MEDICINE: 'Médicaments',
  OTHER: 'Autres'
};

const statusColors: Record<string, string> = {
  APPROVED: 'green',
  PENDING: 'orange',
  DONATED: 'blue',
  REJECTED: 'red'
};

type Announcement = {
  id: string;
  title?: string;
  category: string;
  quantity: number;
  commune: string;
  createdAt: string;
  status: string;
  latitude?: number;
  longitude?: number;
  description?: string;
};

// Grouper les dons par centroïde des communes
function groupAnnouncementsByCommune(announcements: Announcement[]): Record<string, { centroid: [number, number], count: number, items: Announcement[] }> {
  const grouped: Record<string, { centroid: [number, number], count: number, items: Announcement[] }> = {};
  
  announcements.forEach((announcement) => {
    const commune = moroccanCommunes.find(c => c.label === announcement.commune);
    if (commune && commune.centroid) {
      const key = `${commune.centroid[0]},${commune.centroid[1]}`;
      if (!grouped[key]) {
        grouped[key] = {
          centroid: commune.centroid,
          count: 0,
          items: []
        };
      }
      grouped[key].count++;
      grouped[key].items.push(announcement);
    }
  });
  
  return grouped;
}

// Composant pour ajuster la vue de la carte selon les marqueurs
function MapBounds({ announcements }: { announcements: Announcement[] }) {
  const map = useMap();

  // Limites du Maroc complet (y compris le Sahara marocain)
  const moroccoBounds = L.latLngBounds(
    [23.0, -17.0], // Sud-Ouest (Dakhla - limite sud du Maroc)
    [35.8, -1.1]   // Nord-Est (Tanger - frontière Est avec l'Algérie)
  );

  useEffect(() => {
    if (announcements.length > 0) {
      const validAnnouncements = announcements.filter(a => a.latitude && a.longitude);
      if (validAnnouncements.length > 0) {
        const bounds = validAnnouncements.map(a => [a.latitude!, a.longitude!] as [number, number]);
        
        // Filtrer les points qui sont dans les limites du Maroc
        const moroccoPoints = bounds.filter(([lat, lng]) => 
          moroccoBounds.contains(L.latLng(lat, lng))
        );
        
        if (moroccoPoints.length === 0) {
          // Si aucun point dans les limites, vue par défaut
          map.setView([32.5, -6.0], 6);
          return;
        }
        
        if (moroccoPoints.length === 1) {
          // Si un seul point, centrer dessus (mais respecter les limites)
          const [lat, lng] = moroccoPoints[0];
          map.setView([lat, lng], 12);
        } else if (moroccoPoints.length > 1) {
          // Si plusieurs points, ajuster les bounds (mais respecter les limites du Maroc)
          const latlngs = moroccoPoints.map(([lat, lng]) => L.latLng(lat, lng));
          const boundsObj = L.latLngBounds(latlngs);
          
          // Intersecter avec les limites du Maroc pour ne pas dépasser
          const constrainedBounds = moroccoBounds.extend(boundsObj);
          map.fitBounds(constrainedBounds as any, { padding: [50, 50], maxZoom: 12 });
        }
      }
      } else {
      // Vue par défaut sur le Maroc complet (y compris le Sahara marocain)
      map.setView([28.5, -8.0], 6);
    }
    
    // S'assurer que la carte reste dans les limites
    if (!moroccoBounds.contains(map.getCenter())) {
      map.setView([28.5, -8.0], 6);
    }
  }, [announcements, map]);

  return null;
}

interface MapViewProps {
  announcements: Announcement[];
  loading?: boolean;
}

export default function MapView({ announcements, loading = false }: MapViewProps) {
  // Centre du Maroc complet (y compris le Sahara marocain)
  const center: [number, number] = [28.5, -8.0]; // Centre géographique du Maroc complet
  
  // Limites du Maroc complet (y compris le Sahara marocain)
  // Nord: Tanger (~35.8°N), Sud: Dakhla (~23.7°N), Ouest: côte atlantique (~17.0°W), Est: frontière Algérie (~1.1°W)
  const moroccoBounds = L.latLngBounds(
    [23.0, -17.0], // Sud-Ouest (Dakhla - limite sud du Maroc)
    [35.8, -1.1]   // Nord-Est (Tanger - frontière Est avec l'Algérie)
  );

  // Grouper par commune (centroïde)
  const groupedByCommune = groupAnnouncementsByCommune(announcements);

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      {loading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
          background: 'white',
          padding: 20,
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}>
          <Spin size="large" />
        </div>
      )}
      <MapContainer 
        center={center} 
        zoom={6} 
        minZoom={5}
        maxZoom={18}
        maxBounds={moroccoBounds}
        maxBoundsViscosity={1.0}
        style={{ height: '100%', width: '100%' }}
      >
        {/* Utiliser ESRI World Street Map qui affiche mieux le Maroc complet */}
        <TileLayer
          attribution='&copy; <a href="https://www.esri.com/">ESRI</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
        />
        
        {/* Alternative: OpenStreetMap (peut afficher le Maroc découpé selon les données) */}
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        
        <MapBounds announcements={announcements} />
        
        {/* Clustering de tous les dons */}
        {Object.entries(groupedByCommune).map(([key, data]) => (
          <Marker
            key={key}
            position={data.centroid}
            icon={L.icon({
              iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-blue.png',
              shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41],
              className: data.count > 1 ? 'cluster-marker' : ''
            })}
          >
            <Popup>
              <div style={{ minWidth: 250 }}>
                <div style={{ marginBottom: 12, padding: '8px 0', borderBottom: '1px solid #e8e8e8' }}>
                  <Text strong style={{ fontSize: 16, color: '#1890ff' }}>
                    {data.count} don{data.count > 1 ? 's' : ''} à {data.items[0].commune}
                  </Text>
                </div>
                
                <div style={{ maxHeight: 300, overflowY: 'auto' }}>
                  {data.items.map((item, idx) => (
                    <div key={item.id} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: idx < data.items.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                      <div style={{ marginBottom: 6 }}>
                        <Text strong style={{ fontSize: 14 }}>
                          {item.title || 'Annonce de don'}
                        </Text>
                      </div>
                      
                      <div style={{ marginBottom: 6 }}>
                        <Tag color={statusColors[item.status] || 'default'} size="small">
                          {item.status === 'APPROVED' ? 'Approuvé' : 
                           item.status === 'PENDING' ? 'En attente' : 
                           item.status === 'DONATED' ? 'Donné' : 
                           item.status}
                        </Tag>
                        <Tag color="green" style={{ marginLeft: 4 }}>
                          {categoryLabels[item.category] || item.category}
                        </Tag>
                      </div>
                      
                      <div style={{ marginBottom: 4, fontSize: 12 }}>
                        <Text type="secondary">Quantité: </Text>
                        <Text strong>{item.quantity}</Text>
                      </div>
                      
                      {item.description && (
                        <div style={{ marginBottom: 6, marginTop: 6 }}>
                          <Paragraph 
                            ellipsis={{ rows: 2 }}
                            style={{ margin: 0, fontSize: 11 }}
                          >
                            {item.description}
                          </Paragraph>
                        </div>
                      )}
                      
                      <Button 
                        type="primary" 
                        size="small" 
                        icon={<GiftOutlined />}
                        block
                        style={{ marginTop: 6 }}
                      >
                        Intéressé(e)
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
