"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ExternalLink, Navigation, Building2 } from "lucide-react";

export function Venue() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    const mapsUrl =
        "https://www.google.com/maps/search/CRAM+Papantla+Veracruz+Calle+Obispo+de+las+Casas+109/@20.4419,-97.3219,15z";

    return (
        <section
            id="sede"
            ref={ref}
            aria-label="Sede del curso-taller"
            style={{
                position: "relative",
                overflow: "hidden",
                padding: "6rem 1.5rem",
                background: "linear-gradient(180deg, #EBE1E7 0%, #FAF7F9 100%)",
            }}
        >
            <div className="pattern-overlay" />
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    width: "400px",
                    height: "400px",
                    background: "rgba(112,149,162,0.1)",
                    borderRadius: "50%",
                    filter: "blur(100px)",
                    right: "-100px",
                    top: "-50px",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65 }}
                    style={{ textAlign: "center", marginBottom: "3rem" }}
                >
                    <div className="section-label" style={{ marginBottom: "0.75rem" }}>Dónde Encontrarnos</div>
                    <h2 className="section-title">
                        Sede del <span style={{ color: "#811646" }}>Curso–Taller</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, delay: 0.15 }}
                    className="glass-card"
                    style={{ overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1.2fr", minHeight: "380px" }}
                    aria-label="Tarjeta de sede"
                >
                    {/* Left: info */}
                    <div
                        style={{
                            padding: "2.5rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            background: "linear-gradient(160deg, rgba(129,22,70,0.04), rgba(112,149,162,0.06))",
                            borderRight: "1px solid rgba(129,22,70,0.1)",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    width: "52px",
                                    height: "52px",
                                    borderRadius: "14px",
                                    background: "linear-gradient(135deg, #7095A2, #42B3AC)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "1.25rem",
                                    boxShadow: "0 4px 16px rgba(112,149,162,0.4)",
                                }}
                            >
                                <Building2 size={26} color="white" />
                            </div>

                            <h3 style={{ fontWeight: 800, fontSize: "1.15rem", color: "#1a0d14", marginBottom: "0.4rem", lineHeight: 1.3 }}>
                                Centro Regional de Actualización Magisterial
                            </h3>
                            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#811646", marginBottom: "1rem" }}>
                                CRAM PAPANTLA
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "0.5rem",
                                    background: "rgba(112,149,162,0.1)",
                                    border: "1px solid rgba(112,149,162,0.3)",
                                    borderRadius: "0.75rem",
                                    padding: "0.875rem",
                                    marginBottom: "1rem",
                                }}
                            >
                                <MapPin size={18} color="#7095A2" style={{ flexShrink: 0, marginTop: "2px" }} />
                                <div>
                                    <div style={{ fontWeight: 600, color: "#3a1d2b", fontSize: "0.9rem", lineHeight: 1.5 }}>
                                        Calle Obispo de las Casas No. 109 (altos)
                                    </div>
                                    <div style={{ color: "#5a3345", fontSize: "0.83rem" }}>
                                        CP 93400, Papantla, Veracruz
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                            style={{ justifyContent: "center" }}
                            aria-label="Ver en Google Maps"
                        >
                            <Navigation size={16} />
                            Ver en Google Maps
                            <ExternalLink size={14} />
                        </a>
                    </div>

                    {/* Right: Map embed placeholder */}
                    <div style={{ position: "relative", minHeight: "280px", overflow: "hidden" }}>
                        <iframe
                            title="Mapa de CRAM Papantla"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.0!2d-97.3219!3d20.4419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d5cbac700017e3%3A0x90d7f0d0b6f7e6e1!2sCRAM%20Papantla!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                display: "block",
                                minHeight: "280px",
                                filter: "saturate(1.1) contrast(1.05)",
                            }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        {/* Fallback if map fails */}
                        <noscript>
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "rgba(235,225,231,0.9)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "1rem",
                                }}
                            >
                                <MapPin size={48} color="#7095A2" />
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontWeight: 700, color: "#3a1d2b" }}>CRAM Papantla</div>
                                    <div style={{ fontSize: "0.85rem", color: "#7a4f62" }}>Obispo de las Casas 109, Papantla</div>
                                </div>
                            </div>
                        </noscript>
                    </div>
                </motion.div>

                {/* Horario badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.35 }}
                    style={{ display: "flex", justifyContent: "center", marginTop: "1.75rem" }}
                >
                    <div
                        className="glass-card"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "1rem",
                            padding: "1rem 2rem",
                            borderRadius: "1rem",
                        }}
                    >
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "0.72rem", color: "#7095A2", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                Sesiones
                            </div>
                            <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#811646" }}>Martes y Jueves</div>
                        </div>
                        <div style={{ width: "1px", height: "36px", background: "rgba(129,22,70,0.15)" }} />
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "0.72rem", color: "#7095A2", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                Hora de Inicio
                            </div>
                            <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#811646" }}>16:00 hrs</div>
                        </div>
                        <div style={{ width: "1px", height: "36px", background: "rgba(129,22,70,0.15)" }} />
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "0.72rem", color: "#7095A2", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                Duración
                            </div>
                            <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#811646" }}>2 hrs/sesión</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 700px) {
          section[id="sede"] .glass-card[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
