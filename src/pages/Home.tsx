"use client"

import { useEffect, useState } from "react"
import { Card, Col, Row, Statistic, Typography, Button, Space } from "antd"
import { Link } from "react-router-dom"
import {
  GlobalOutlined,
  BarChartOutlined,
  GiftOutlined,
  UserOutlined,
  CheckCircleOutlined,
  TeamOutlined,
  LockOutlined,
} from "@ant-design/icons"

const { Title, Paragraph, Text } = Typography

export default function Home() {
  const [stats, setStats] = useState({
    totalDonations: 62,
    activeDonations: 28,
    users: 156,
    categories: 4,
  })

  useEffect(() => {
    // Récupérer les statistiques (optionnel)
    // api.get('/statistics').then((res) => { setStats(res.data); });
  }, [])

  return (
    <div style={{ backgroundColor: "#f5f7fa", minHeight: "100vh", paddingBottom: 0 }}>
      {/* ===================== HERO SECTION ===================== */}
      <div
        style={{
          background: "linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1a7dd7 100%)",
          color: "white",
          paddingTop: 80,
          paddingBottom: 80,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-100px",
            width: 400,
            height: 400,
            background: "rgba(255,255,255,0.05)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-50px",
            width: 350,
            height: 350,
            background: "rgba(255,255,255,0.03)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <Title
            level={1}
            style={{
              color: "white",
              marginBottom: 16,
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            SADAKA
          </Title>
          <Text
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.95)",
              display: "block",
              marginBottom: 20,
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
          >
            La Plateforme de Dons Collaborative
          </Text>
          <Paragraph
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.85)",
              margin: "0 auto 40px",
              lineHeight: 1.7,
              maxWidth: 600,
            }}
          >
            Connectez les donateurs généreux avec les personnes dans le besoin via la géolocalisation. Créez un impact
            social durable dans votre communauté marocaine.
          </Paragraph>

          <Space size="large" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/register">
              <Button
                type="primary"
                size="large"
                style={{
                  background: "white",
                  color: "#0d47a1",
                  height: 48,
                  fontSize: 15,
                  fontWeight: 600,
                  border: "none",
                  borderRadius: 6,
                  paddingInline: 32,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
                icon={<UserOutlined />}
              >
                Créer un Compte
              </Button>
            </Link>
            <Link to="/login">
              <Button
                size="large"
                style={{
                  height: 48,
                  fontSize: 15,
                  fontWeight: 600,
                  border: "2px solid white",
                  background: "transparent",
                  color: "white",
                  borderRadius: 6,
                  paddingInline: 32,
                }}
                icon={<LockOutlined />}
              >
                Se Connecter
              </Button>
            </Link>
          </Space>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px" }}>
        {/* ===================== STATS SECTION ===================== */}
        <div style={{ marginTop: -50, marginBottom: 80, position: "relative", zIndex: 10 }}>
          <Row gutter={[20, 20]}>
            {[
              { label: "Total Annonces", value: stats.totalDonations, icon: GiftOutlined, color: "#0d47a1" },
              { label: "Dons Actifs", value: stats.activeDonations, icon: CheckCircleOutlined, color: "#1976d2" },
              { label: "Utilisateurs", value: stats.users, icon: TeamOutlined, color: "#42a5f5" },
              { label: "Catégories", value: stats.categories, icon: BarChartOutlined, color: "#64b5f6" },
            ].map((stat, idx) => (
              <Col xs={24} sm={12} md={6} key={idx}>
                <Card
                  style={{
                    borderRadius: 12,
                    border: "none",
                    boxShadow: "0 4px 16px rgba(13,71,161,0.12)",
                    background: "white",
                    height: "100%",
                  }}
                  hoverable
                >
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 32, color: stat.color, marginBottom: 12 }}>
                      <stat.icon />
                    </div>
                    <Statistic value={stat.value} valueStyle={{ color: stat.color, fontSize: 28, fontWeight: 700 }} />
                    <Text style={{ color: "#666", fontSize: 13, fontWeight: 500 }}>{stat.label}</Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* ===================== SERVICES SECTION ===================== */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Title level={2} style={{ color: "#0d47a1", marginBottom: 12 }}>
              Nos Services Principaux
            </Title>
            <Text style={{ fontSize: 15, color: "#666" }}>
              Une solution complète pour la gestion collaborative des dons
            </Text>
          </div>

          <Row gutter={[24, 24]}>
            {[
              {
                icon: "📱",
                title: "Application Mobile",
                desc: "Déclarez vos dons et accédez aux besoins du terrain. Gérez votre compte directement.",
              },
              {
                icon: "🌐",
                title: "Plateforme Web Publique",
                desc: "Explorez les dons disponibles, visualisez-les sur une carte et consultez les statistiques.",
              },
              {
                icon: "⚙️",
                title: "Panneau Administration",
                desc: "Validez les annonces, gérez les utilisateurs et générez des rapports détaillés.",
              },
            ].map((service, idx) => (
              <Col xs={24} md={8} key={idx}>
                <Card
                  style={{
                    borderRadius: 12,
                    border: "1px solid #e3f2fd",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    height: "100%",
                    transition: "all 0.3s ease",
                  }}
                  hoverable
                >
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 48, marginBottom: 20 }}>{service.icon}</div>
                    <Title level={4} style={{ color: "#0d47a1", marginBottom: 12 }}>
                      {service.title}
                    </Title>
                    <Paragraph style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>{service.desc}</Paragraph>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* ===================== HOW IT WORKS SECTION ===================== */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Title level={2} style={{ color: "#0d47a1", marginBottom: 12 }}>
              Comment ça Fonctionne ?
            </Title>
            <Text style={{ fontSize: 15, color: "#666" }}>4 étapes simples pour contribuer ou recevoir de l'aide</Text>
          </div>

          <Row gutter={[24, 24]}>
            {[
              {
                step: "1",
                icon: "📝",
                title: "Créer un Compte",
                desc: "Remplissez un formulaire avec vos infos",
                bg: "#e3f2fd",
              },
              {
                step: "2",
                icon: "🎁",
                title: "Déclarer un Don",
                desc: "Catégorie, Quantité, Description et Localisation",
                bg: "#e8f5e9",
              },
              {
                step: "3",
                icon: "✅",
                title: "Validation",
                desc: "Les administrateurs valident l'annonce",
                bg: "#fff3e0",
              },
              {
                step: "4",
                icon: "🤝",
                title: "Mise en Relation",
                desc: "Les demandeurs vous contactent",
                bg: "#fce7f3",
              },
            ].map((item, idx) => (
              <Col xs={24} sm={12} md={6} key={idx}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: item.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      fontSize: 40,
                      border: "3px solid #0d47a1",
                    }}
                  >
                    {item.icon}
                  </div>
                  <Text style={{ fontSize: 24, fontWeight: 700, color: "#0d47a1", display: "block", marginBottom: 8 }}>
                    {item.step}
                  </Text>
                  <Title level={5} style={{ color: "#0d47a1", marginBottom: 8 }}>
                    {item.title}
                  </Title>
                  <Paragraph style={{ fontSize: 13, color: "#666", margin: 0 }}>{item.desc}</Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* ===================== REGIONS SECTION ===================== */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <Title level={2} style={{ color: "#0d47a1", marginBottom: 12 }}>
              Couverture Géographique
            </Title>
            <Text style={{ fontSize: 15, color: "#666" }}>
              SADAKA couvre 12 régions du Maroc avec données de géolocalisation précises
            </Text>
          </div>

          <Row gutter={[12, 12]}>
            {[
              "Casablanca-Settat",
              "Rabat-Salé-Kénitra",
              "Fès-Meknès",
              "Marrakech-Safi",
              "Tanger-Tétouan-Al Hoceïma",
              "Oriental",
              "Souss-Massa",
              "Béni Mellal-Khénifra",
              "Drâa-Tafilalet",
              "Guelmim-Oued Noun",
              "Laâyoune-Sakia El Hamra",
              "Dakhla-Oued Ed-Dahab",
            ].map((region) => (
              <Col xs={12} sm={8} md={4} key={region}>
                <div
                  style={{
                    padding: 12,
                    border: "1px solid #e3f2fd",
                    borderRadius: 8,
                    textAlign: "center",
                    background: "#f5f7fa",
                    fontSize: 13,
                    color: "#0d47a1",
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#e3f2fd"
                    e.currentTarget.style.borderColor = "#0d47a1"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f5f7fa"
                    e.currentTarget.style.borderColor = "#e3f2fd"
                  }}
                >
                  📍 {region}
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* ===================== CTA SECTION ===================== */}
        <div style={{ marginBottom: 80 }}>
          <Card
            style={{
              borderRadius: 16,
              border: "none",
              boxShadow: "0 8px 24px rgba(13,71,161,0.15)",
              background: "linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)",
              padding: 60,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Title level={2} style={{ color: "white", marginBottom: 16 }}>
                Prêt à Explorer SADAKA ?
              </Title>
              <Paragraph
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.9)",
                  margin: "0 auto 32px",
                  maxWidth: 500,
                  lineHeight: 1.7,
                }}
              >
                Découvrez les dons disponibles ou contribuez à votre communauté en partageant vos ressources.
              </Paragraph>

              <Space size="large" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                <Link to="/announcements">
                  <Button
                    type="primary"
                    size="large"
                    icon={<GiftOutlined />}
                    style={{
                      background: "white",
                      color: "#0d47a1",
                      height: 44,
                      fontSize: 14,
                      fontWeight: 600,
                      border: "none",
                      borderRadius: 6,
                    }}
                  >
                    Voir les Annonces
                  </Button>
                </Link>
                <Link to="/map">
                  <Button
                    size="large"
                    icon={<GlobalOutlined />}
                    style={{
                      height: 44,
                      fontSize: 14,
                      fontWeight: 600,
                      border: "2px solid white",
                      background: "transparent",
                      color: "white",
                      borderRadius: 6,
                    }}
                  >
                    Visualiser sur la Carte
                  </Button>
                </Link>
              </Space>
            </div>
          </Card>
        </div>

        {/* ===================== FEATURES SECTION ===================== */}
        <div style={{ marginBottom: 80 }}>
          <Row gutter={[32, 32]}>
            {[
              {
                icon: "📊",
                title: "Résilience Économique",
                desc: "S'inscrit dans un modèle d'entrepreneuriat social durable, créant des ponts entre donateurs et communautés.",
              },
              {
                icon: "🔐",
                title: "Sécurité des Données",
                desc: "Tous les données sont sécurisées avec authentification JWT et respect strict de la vie privée.",
              },
              {
                icon: "🌱",
                title: "Impact Social",
                desc: "Chaque don contribue à améliorer les conditions de vie et renforce la solidarité communautaire.",
              },
            ].map((feature, idx) => (
              <Col xs={24} md={8} key={idx}>
                <Card
                  style={{
                    borderRadius: 12,
                    border: "1px solid #e3f2fd",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    height: "100%",
                  }}
                  hoverable
                >
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 40, marginBottom: 16 }}>{feature.icon}</div>
                    <Title level={4} style={{ color: "#0d47a1", marginBottom: 12 }}>
                      {feature.title}
                    </Title>
                    <Paragraph style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>{feature.desc}</Paragraph>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* ===================== FOOTER CTA ===================== */}
        <div
          style={{
            textAlign: "center",
            paddingTop: 40,
            paddingBottom: 60,
            borderTop: "1px solid #e3f2fd",
          }}
        >
          <Title level={3} style={{ color: "#0d47a1", marginBottom: 12 }}>
            Vous avez des questions ?
          </Title>
          <Paragraph style={{ fontSize: 14, color: "#666", marginBottom: 24 }}>
            Consultez notre documentation ou contactez notre support
          </Paragraph>
          <Space>
            <Button
              type="default"
              style={{
                borderColor: "#0d47a1",
                color: "#0d47a1",
                height: 40,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Documentation
            </Button>
            <Button
              type="primary"
              style={{
                background: "#0d47a1",
                borderColor: "#0d47a1",
                height: 40,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Nous Contacter
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
