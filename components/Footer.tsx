"use client";

import Image from "next/image";
import { Heart, Star } from "lucide-react";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            aria-label="Pie de página institucional"
            style={{
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(160deg, #1a0d14 0%, #2d1020 50%, #1a0d14 100%)",
                color: "white",
                padding: "3rem 1.5rem 2rem",
            }}
        >
            {/* Decorative lines pattern */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(112,149,162,0.08) 40px,
              rgba(112,149,162,0.08) 41px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(112,149,162,0.06) 40px,
              rgba(112,149,162,0.06) 41px
            )
          `,
                    pointerEvents: "none",
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    width: "400px",
                    height: "250px",
                    background: "rgba(66,179,172,0.08)",
                    borderRadius: "50%",
                    filter: "blur(80px)",
                    right: "0",
                    bottom: "0",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {/* Main row */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.5fr 1fr 1fr",
                        gap: "2.5rem",
                        marginBottom: "2.5rem",
                        paddingBottom: "2.5rem",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                    className="footer-grid"
                >
                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
                            <div
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Image src="/logo.png" alt="Logo Limakxtum" width={48} height={48} style={{ objectFit: "contain" }} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 800, color: "white", lineHeight: 1.1 }}>Papantla</div>
                                <div style={{ fontSize: "0.72rem", color: "#A75976", letterSpacing: "0.05em" }}>
                                    Limakxtum
                                </div>
                            </div>
                        </div>
                        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "1rem" }}>
                            Programa cultural del H. Ayuntamiento de Papantla para la revitalización, difusión, preservación y desarrollo de la lengua y cultura Tutunakú.
                        </p>
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                background: "rgba(241,206,144,0.15)",
                                border: "1px solid rgba(241,206,144,0.4)",
                                borderRadius: "999px",
                                padding: "0.3rem 0.875rem",
                                fontSize: "0.78rem",
                                fontWeight: 700,
                                color: "#F1CE90",
                            }}
                        >
                            <Star size={12} />
                            Totalmente Gratis
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <div style={{ fontWeight: 700, color: "#F1CE90", marginBottom: "1rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                            Secciones
                        </div>
                        {[
                            { label: "Inicio", href: "#inicio" },
                            { label: "Convocatoria", href: "#convocatoria" },
                            { label: "Bases", href: "#bases" },
                            { label: "Calendario", href: "#calendario" },
                            { label: "Inscripción", href: "#inscripcion" },
                            { label: "Sede", href: "#sede" },
                            { label: "Contacto", href: "#contacto" },
                        ].map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                                }}
                                style={{
                                    display: "block",
                                    fontSize: "0.85rem",
                                    color: "rgba(255,255,255,0.55)",
                                    textDecoration: "none",
                                    marginBottom: "0.4rem",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#42B3AC")}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Contact */}
                    <div>
                        <div style={{ fontWeight: 700, color: "#F1CE90", marginBottom: "1rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                            Contacto
                        </div>
                        <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                            <div style={{ fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: "0.25rem" }}>
                                Dir. Prot. Lengua Tutunakú
                            </div>
                            Parque Ecológico Kiwikgolo
                            <br />
                            Papantla, Veracruz
                            <br />
                            <br />
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                                {["7841055959", "7841038561", "7841242795"].map((tel) => (
                                    <a
                                        key={tel}
                                        href={`tel:${tel}`}
                                        style={{ color: "#42B3AC", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem" }}
                                    >
                                        {tel}
                                    </a>
                                ))}
                            </div>
                            <br />
                            <span style={{ fontSize: "0.8rem" }}>Horario: 8:00 — 18:00 hrs</span>
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                    }}
                >
                    <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)" }}>
                        © {year} H. Ayuntamiento de Papantla, Veracruz. Todos los derechos reservados.
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            fontSize: "0.78rem",
                            color: "rgba(255,255,255,0.35)",
                        }}
                    >
                        Hecho con
                        <Heart size={12} color="#811646" fill="#811646" />
                        para preservar la lengua Tutunakú
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
        </footer>
    );
}
