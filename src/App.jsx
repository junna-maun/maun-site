import React, { useState } from "react";

// ✅ Maun Advisors – Simple One‑Page Bilingual Site (no backend)
// Font: Garamond (fallback EB Garamond)
// Palette: primary #2d1e5f, text #000000, bg #e0dbcd, muted #999999

export default function MaunAdvisorsSite() {
  const [lang, setLang] = useState("es");

  const palette = {
    primary: "#2d1e5f",
    text: "#000000",
    bg: "#e0dbcd",
    muted: "#999999",
  };

  const copy = {
    en: {
      brand: "MAUN Advisors",
      tagline: "Empowering your decisions through wise solutions.",
      sections: { services: "Services", clients: "Clients", team: "Team", contact: "Contact" },
      ctas: { contact: "Contact us", summary: "Download summary", linkedin: "Visit our LinkedIn" },
      servicesList: [
        {
          title: "Financial Modeling & Valuation",
          items: [
            "3‑statement models (P&L, BS, CF)",
            "Project finance: IRR / NPV / DSCR",
            "Business valuation: DCF, comps, precedents",
            "Cap table, dilution & waterfalls",
            "KPI dashboards and monthly reporting",
          ],
        },
        {
          title: "Strategic Finance & CFO‑as‑a‑Service",
          items: [
            "Budgeting & forecasting",
            "Cash flow and runway management",
            "Working‑capital optimization",
            "Revenue recognition & pricing support",
            "Debt & equity fundraising support",
          ],
        },
        {
          title: "Debt Advisory & Restructuring",
          items: [
            "Bank/fintech credit lines",
            "Leasing and factoring structures",
            "Covenant modeling & scenarios",
            "Refinancing and restructuring plans",
          ],
        },
        {
          title: "Investor Materials & Presentations",
          items: [
            "Investor decks and teasers",
            "One‑pagers & executive summaries",
            "Data room preparation",
            "Board & stakeholder reporting",
          ],
        },
        {
          title: "Business Consulting & BI",
          items: [
            "Process mapping & SOPs",
            "Unit economics & profitability by project/client",
            "Looker Studio / Google Sheets dashboards",
            "Automation & workflow improvements",
          ],
        },
      ],
      clientsList: [
        "SMEs",
        "Investment Funds",
        "Startups",
        "Family Businesses",
        "Private Companies",
        "Individuals",
      ],
      team: [
        { name: "José Pablo Unna", blurb: "Finance professional with experience in corporate strategy, investor relations, and valuations." },
        { name: "Jerónimo Macías", blurb: "Finance professional (ex JP Morgan, BBVA) specialized in modeling, valuations, and investment strategies." },
      ],
    },
    es: {
      brand: "MAUN Advisors",
      tagline: "Empoderamos tus decisiones con soluciones sabias.",
      sections: { services: "Servicios", clients: "Clientes", team: "Equipo", contact: "Contacto" },
      ctas: { contact: "Contáctanos", summary: "Descargar resumen", linkedin: "Visita nuestro LinkedIn" },
      servicesList: [
        {
          title: "Modelaje Financiero y Valuación",
          items: [
            "Modelos 3 estados (ER, BG, Flujo)",
            "Project finance: TIR / VPN / DSCR",
            "Valuación: DCF, comparables, transacciones",
            "Cap table, dilución y waterfalls",
            "KPIs y reportes mensuales",
          ],
        },
        {
          title: "Finanzas Estratégicas y CFO‑as‑a‑Service",
          items: [
            "Presupuestos y proyecciones",
            "Gestión de flujo y runway",
            "Optimización de capital de trabajo",
            "Reconocimiento de ingresos y pricing",
            "Soporte para levantamiento de deuda y/o capital",
          ],
        },
        {
          title: "Asesoría de Deuda y Reestructura",
          items: [
            "Líneas de crédito bancarias/fintech",
            "Esquemas de arrendamiento y factoraje",
            "Modelado de covenants y escenarios",
            "Refinanciamientos y planes de reestructura",
          ],
        },
        {
          title: "Material para Inversionistas y Presentaciones",
          items: [
            "Pitch decks y teasers",
            "One‑pagers y resúmenes ejecutivos",
            "Preparación de data room",
            "Reportes a consejo y stakeholders",
          ],
        },
        {
          title: "Consultoría de Negocio y BI",
          items: [
            "Mapeo de procesos y SOPs",
            "Unit economics y rentabilidad por proyecto/cliente",
            "Dashboards en Looker Studio / Google Sheets",
            "Automatización y mejoras operativas",
          ],
        },
      ],
      clientsList: [
        "PyMEs",
        "Fondos de Inversión",
        "Startups",
        "Empresas Familiares",
        "Empresas Privadas",
        "Personas (Individuos)",
      ],
      team: [
        { name: "José Pablo Unna", blurb: "Profesional de finanzas con experiencia en estrategia corporativa, relaciones con inversionistas y valuaciones." },
        { name: "Jerónimo Macías", blurb: "Profesional de finanzas (ex JP Morgan, BBVA) especializado en modelos, valuaciones y estrategia de inversión." },
      ],
    },
  };

  const t = copy[lang];

  return (
    <div style={{ backgroundColor: palette.bg, color: palette.text, fontFamily: "Garamond, 'EB Garamond', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;700&display=swap');
        .btn{border-radius:1rem;padding:.6rem 1rem;font-weight:600;cursor:pointer}
        .btn-primary{background:${palette.primary};color:#fff}
        .btn-outline{border:1px solid ${palette.primary};color:${palette.primary};background:transparent}
        .card{background:#fff;border-radius:1rem;box-shadow:0 4px 12px rgba(0,0,0,.1);padding:1.5rem}
        .container{max-width:1000px;margin:0 auto;padding:1rem}
        header{background:#fff;position:sticky;top:0;z-index:50;box-shadow:0 2px 6px rgba(0,0,0,.05)}
        .grid2{display:grid;grid-template-columns:1fr;gap:1rem}
        @media(min-width:768px){.grid2{grid-template-columns:1fr 1fr}}
        .grid3{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
        @media(min-width:900px){.grid3{grid-template-columns:1fr 1fr 1fr}}
      `}</style>

      <header>
        <div className="container" style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
            {/* Coloca el archivo en /public y referencia sin importar */}
            <img src="/maun-isotipo.png" alt="Maun Advisors" style={{ height: 40 }} />
            <span style={{ fontSize:'20px', fontWeight:600 }}>{t.brand}</span>
          </div>
          <div>
            <button className="btn btn-outline" onClick={() => setLang(lang === "en" ? "es" : "en")}>{lang === "en" ? "ES" : "EN"}</button>
          </div>
        </div>
      </header>

      <section className="container" style={{ textAlign:'center', padding:'3rem 1rem' }}>
        <h1 style={{ color: palette.primary, fontSize:'40px', fontWeight:600 }}>{t.brand}</h1>
        <p style={{ marginTop:'12px', fontSize:'18px' }}>{t.tagline}</p>
        <div style={{ marginTop:'16px', display:'flex', justifyContent:'center', gap:'10px', flexWrap:'wrap' }}>
          <a href="#contact" className="btn btn-primary">{t.ctas.contact}</a>
          <a href="/maun-executive-summary.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">{t.ctas.summary}</a>
          <a href="https://www.linkedin.com/company/maun-advisors/" target="_blank" rel="noreferrer" className="btn btn-outline">{t.ctas.linkedin}</a>
        </div>
      </section>

      <section className="container" style={{ padding:'2rem 1rem' }}>
        <h2 style={{ color: palette.primary, fontSize:'26px', fontWeight:600, marginBottom:'12px' }}>{t.sections.services}</h2>
        <div className="grid2">
          {t.servicesList.map((g, i) => (
            <div key={i} className="card">
              <h3 style={{ color: palette.primary, fontWeight:600, fontSize:'18px' }}>{g.title}</h3>
              <ul style={{ marginTop:'10px', lineHeight:1.6, fontSize:'15px' }}>
                {g.items.map((it, k) => (
                  <li key={k} style={{ display:'flex', gap:'8px', alignItems:'baseline' }}>
                    <span style={{ width:6, height:6, background: palette.primary, borderRadius:999, display:'inline-block', marginTop:6 }} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{ padding:'2rem 1rem' }}>
        <h2 style={{ color: palette.primary, fontSize:'26px', fontWeight:600, marginBottom:'12px' }}>{t.sections.clients}</h2>
        <div className="grid3">
          {t.clientsList.map((c, i) => (
            <div key={i} className="card" style={{ textAlign:'center' }}>{c}</div>
          ))}
        </div>
      </section>

      <section className="container" style={{ padding:'2rem 1rem' }}>
        <h2 style={{ color: palette.primary, fontSize:'26px', fontWeight:600, marginBottom:'12px' }}>{t.sections.team}</h2>
        <div className="grid2">
          {t.team.map((m, i) => (
            <div key={i} className="card">
              <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                <div style={{ width:48, height:48, borderRadius:14, border:`2px solid ${palette.primary}`, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center', background:'#fff' }}>
                  <img src="/maun-isotipo.png" alt="Maun" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                </div>
                <div style={{ fontWeight:600 }}>{m.name}</div>
              </div>
              <p style={{ marginTop:'10px', fontSize:'15px', lineHeight:1.6 }}>{m.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="container" style={{ padding:'3rem 1rem', textAlign:'center' }}>
        <h2 style={{ color: palette.primary, fontSize:'26px', fontWeight:600, marginBottom:'12px' }}>{t.sections.contact}</h2>
        <p style={{ fontSize:'16px' }}>Email: mgmt@maunadv.com</p>
      </section>

      <footer style={{ textAlign:'center', padding:'1.5rem', color: palette.muted }}>
        © {new Date().getFullYear()} MAUN Advisors
      </footer>
    </div>
  );
}
