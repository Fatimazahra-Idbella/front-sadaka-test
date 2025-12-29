import { Card, Col, Row, Table, Tag, Typography, Alert, Divider, Button, Space, Drawer, List } from 'antd';
import { useState } from 'react';
import { FileOutlined, CheckCircleOutlined, TeamOutlined, DatabaseOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function Conformance() {
  const [drawerOpen, setDrawerOpen] = useState<string | null>(null);

  const requirements = [
    {
      category: 'Gestion de Projet',
      icon: <TeamOutlined />,
      status: 'En cours',
      items: [
        'Organisation de l\'équipe avec chef de projet',
        'Attribution des tâches (Mobile, Web, Données)',
        'Présentation d\'avancement hebdomadaire',
        'Suivi des livrables et jalons'
      ]
    },
    {
      category: 'Couche Données',
      icon: <DatabaseOutlined />,
      status: 'Complété',
      items: [
        'Fonds cartographiques Web (OpenStreetMap)',
        'Découpage administratif (12 régions marocaines)',
        'Couches de base géographiques',
        'Persistance localStorage pour démo'
      ]
    },
    {
      category: 'Application Mobile',
      icon: <FileOutlined />,
      status: 'Planifié',
      items: [
        'Création de compte (Nom, Prénom, Téléphone, Email, Photo)',
        'Déclaration de dons (Catégorie, Quantité, Description, Photos, Localisation)',
        'Espace utilisateur avec liste des demandeurs',
        'Géolocalisation sur fond cartographique',
        'Filtres dynamiques (catégorie, distance, date)',
        'Newsletter'
      ]
    },
    {
      category: 'Plateforme Web - Public',
      icon: <FileOutlined />,
      status: 'En cours',
      items: [
        '✅ Accueil: Présentation générale',
        '✅ Tableau: Liste des dons avec filtres',
        '✅ SIG: Géolocalisation des dons',
        '✅ Tableau de bord: Statistiques et catégories',
        '⏳ Synchronisation filtres/carte'
      ]
    },
    {
      category: 'Plateforme Web - Administration',
      icon: <FileOutlined />,
      status: 'En cours',
      items: [
        '✅ Accueil: Présentation générale',
        '✅ Tableau: Liste des dons avec filtres',
        '✅ SIG: Géolocalisation des dons',
        '✅ Gestion des annonces en attente (Validation/Rejet)',
        '✅ Gestion des utilisateurs',
        '✅ Gestion de la newsletter',
        '✅ Export/Import des données',
        '⏳ Statistiques détaillées et rapports'
      ]
    }
  ];

  const userRequirements = [
    {
      title: 'Création de Compte',
      fields: ['Nom **', 'Prénom **', 'Numéro de téléphone **', 'Email (avec confirmation) **', 'Photo personnelle'],
      status: 'Complété'
    },
    {
      title: 'Annonce de Don',
      fields: ['Catégorie (FOOD, CLOTHES, MEDICINE, OTHER) **', 'Quantité (compteur)', 'Description', 'Photo(s) **', 'Localisation **', 'Date/Heure (Automatique)'],
      status: 'Complété'
    },
    {
      title: 'Espace Utilisateur',
      fields: ['Liste des demandeurs', 'Annonces', 'Assigner don comme donné', 'Obtenir coordonnées demandeurs', 'Filtres dynamiques', 'Géolocalisation', 'Newsletter'],
      status: 'Complété'
    }
  ];

  return (
    <div style={{ padding: 24, maxWidth: 1400, margin: '0 auto' }}>
      <Alert
        type="info"
        message="Conformité au Cahier des Charges SADAKA"
        description="Cette page présente la conformité du projet avec les exigences définies."
        showIcon
        style={{ marginBottom: 24 }}
      />

      {/* Vue d'ensemble */}
      <Card style={{ marginBottom: 24 }}>
        <Title level={2}>📋 Vue d'Ensemble du Projet</Title>
        <Paragraph>
          <strong>SADAKA</strong> est une plateforme collaborative axée sur la gestion de dons avec géolocalisation 
          des membres. Le projet comprend trois volets principaux : Gestion de Projet, Données, et Applications 
          (Mobile + Web).
        </Paragraph>
        
        <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
          {requirements.map((req, idx) => (
            <Col xs={24} md={12} lg={12} key={idx}>
              <Card 
                hoverable 
                onClick={() => setDrawerOpen(req.category)}
                style={{ cursor: 'pointer', height: '100%' }}
              >
                <div style={{ marginBottom: 12 }}>
                  <Text style={{ fontSize: 20, marginRight: 8 }}>{req.icon}</Text>
                  <Title level={4} style={{ display: 'inline-block' }}>{req.category}</Title>
                </div>
                <Tag color={
                  req.status === 'Complété' ? 'green' :
                  req.status === 'En cours' ? 'blue' :
                  'gold'
                }>
                  {req.status}
                </Tag>
                <Paragraph style={{ marginTop: 12, marginBottom: 0 }}>
                  {req.items.length} éléments
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      <Divider />

      {/* Exigences Utilisateurs */}
      <Card style={{ marginBottom: 24 }}>
        <Title level={2}>👤 Exigences Utilisateurs</Title>
        <Row gutter={[24, 24]}>
          {userRequirements.map((req, idx) => (
            <Col xs={24} md={8} key={idx}>
              <Card type="inner" hoverable>
                <Title level={4}>{req.title}</Title>
                <Tag color={req.status === 'Complété' ? 'green' : 'blue'}>
                  {req.status}
                </Tag>
                <List
                  style={{ marginTop: 12 }}
                  size="small"
                  dataSource={req.fields}
                  renderItem={(item) => (
                    <List.Item>
                      <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                      <Text style={{ fontSize: 12 }}>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      <Divider />

      {/* Fonctionnalités Web */}
      <Card>
        <Title level={2}>🌐 Fonctionnalités Plateforme Web</Title>
        
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card type="inner" title="📱 Public - Interface Utilisateur">
              <List
                size="small"
                dataSource={[
                  '✅ Accueil avec présentation générale',
                  '✅ Tableau liste des dons',
                  '✅ Filtres par : Catégorie, Localisation, Distance, Date',
                  '✅ SIG avec carte Leaflet',
                  '✅ Marqueurs géolocalisés',
                  '✅ Pop-ups avec détails annonces',
                  '✅ Tableau bord statistiques'
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card type="inner" title="⚙️ Admin - Panel d'Administration">
              <List
                size="small"
                dataSource={[
                  '✅ Même interface que Public',
                  '✅ Gestion annonces en attente',
                  '✅ Validation/Rejet avec motif',
                  '✅ Gestion utilisateurs',
                  '✅ Gestion newsletter',
                  '✅ Export/Import données JSON',
                  '✅ Statistiques détaillées'
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Card>

      {/* WebService */}
      <Card style={{ marginTop: 24 }}>
        <Title level={2}>🔌 Web Service & Architecture</Title>
        <Paragraph>
          <strong>Responsabilités du Web Service :</strong>
        </Paragraph>
        <List
          dataSource={[
            'Communication entre Application Mobile et Base de Données',
            'Traitement identification instances mobiles (Serial Number, IMEI)',
            'Création des inscriptions donateurs et bénéficiaires',
            'Récupération dons selon critères paramétrables',
            'Validation et approbation des annonces',
            'Gestion des utilisateurs et rôles',
            'Persistance des données avec mocks localStorage'
          ]}
          renderItem={(item) => (
            <List.Item>
              <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
              <Text>{item}</Text>
            </List.Item>
          )}
        />
      </Card>

      {/* Tiroir détails */}
      <Drawer
        title={drawerOpen}
        onClose={() => setDrawerOpen(null)}
        open={drawerOpen !== null}
        width={500}
      >
        {drawerOpen && (
          <div>
            {requirements.find(r => r.category === drawerOpen)?.items.map((item, idx) => (
              <div key={idx} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid #f0f0f0' }}>
                <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                <Text>{item}</Text>
              </div>
            ))}
          </div>
        )}
      </Drawer>
    </div>
  );
}
