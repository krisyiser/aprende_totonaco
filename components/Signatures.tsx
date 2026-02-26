"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, User, Phone } from "lucide-react";

interface Signer {
    name: string;
    title: string;
    position: string;
    color: string;
}

const SIGNERS: Signer[] = [
    {
        name: "Lic. Elianay González López",
        title: "Secretaria de Desarrollo Social",
        position: "H. Ayuntamiento de Papantla, Veracruz",
        color: "#811646",
    },
    {
        name: "Profr. José Pérez Morgado",
        title: "Dirección de Protección de Lengua Tutunakú",
        position: "H. Ayuntamiento de Papantla, Veracruz",
        color: "#42B3AC",
    },
];

export function Signatures() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="contacto"
            ref={ref}
            aria-label="Firmas institucionales y contacto"
            style={{
                position: "relative",
                overflow: "hidden",
                padding: "6rem 1.5rem",
                background: "linear-gradient(160deg, #EBE1E7 0%, #f5e8f0 50%, #EBE1E7 100%)",
            }}
        >
            <div className="pattern-overlay" />
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    width: "500px",
                    height: "300px",
                    background: "rgba(129,22,70,0.07)",
                    borderRadius: "50%",
                    filter: "blur(100px)",
                    left: "50%",
                    top: "0",
                    transform: "translateX(-50%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65 }}
                    style={{ textAlign: "center", marginBottom: "3rem" }}
                >
                    <div className="section-label" style={{ marginBottom: "0.75rem" }}>Firmas</div>
                    <h2 className="section-title">
                        <span style={{ color: "#811646" }}>Atentamente</span>
                    </h2>
                    <p style={{ color: "#5a3345", marginTop: "0.75rem", fontSize: "0.95rem" }}>
                        Las autoridades responsables de la presente convocatoria
                    </p>
                </motion.div>

                {/* Divider line with ornament */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    style={{
                        height: "2px",
                        background: "linear-gradient(90deg, transparent, #811646, #42B3AC, #F1CE90, transparent)",
                        borderRadius: "1px",
                        marginBottom: "3rem",
                        transformOrigin: "center",
                    }}
                />

                {/* Signers */}
                <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
                    className="signers-grid"
                >
                    {SIGNERS.map((signer, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                            className="glass-card glow-hover"
                            style={{ padding: "2rem", textAlign: "center" }}
                        >
                            {/* Avatar */}
                            <div
                                style={{
                                    width: "70px",
                                    height: "70px",
                                    borderRadius: "50%",
                                    background: `linear-gradient(135deg, ${signer.color}22, ${signer.color}44)`,
                                    border: `2px solid ${signer.color}55`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto 1.25rem",
                                }}
                            >
                                <User size={32} color={signer.color} />
                            </div>

                            {/* Name */}
                            <h3
                                style={{
                                    fontWeight: 800,
                                    fontSize: "1.05rem",
                                    color: "#1a0d14",
                                    marginBottom: "0.5rem",
                                    lineHeight: 1.3,
                                }}
                            >
                                {signer.name}
                            </h3>

                            {/* Title */}
                            <div
                                style={{
                                    fontWeight: 600,
                                    fontSize: "0.88rem",
                                    color: signer.color,
                                    marginBottom: "0.375rem",
                                    lineHeight: 1.4,
                                }}
                            >
                                {signer.title}
                            </div>

                            {/* Position */}
                            <div style={{ fontSize: "0.8rem", color: "#7a4f62", lineHeight: 1.4 }}>
                                {signer.position}
                            </div>

                            {/* Seal badge */}
                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.35rem",
                                    marginTop: "1.25rem",
                                    background: `${signer.color}10`,
                                    border: `1px solid ${signer.color}35`,
                                    borderRadius: "999px",
                                    padding: "0.25rem 0.75rem",
                                    fontSize: "0.72rem",
                                    fontWeight: 700,
                                    color: signer.color,
                                }}
                            >
                                <Award size={12} />
                                Firma Oficial
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{
                        textAlign: "center",
                        marginTop: "3rem",
                        padding: "2.5rem",
                        background: "linear-gradient(135deg, rgba(129,22,70,0.06), rgba(66,179,172,0.06))",
                        borderRadius: "1.25rem",
                        border: "1px solid rgba(129,22,70,0.12)",
                    }}
                >
                    <p style={{ fontSize: "1rem", color: "#3a1d2b", marginBottom: "1.25rem", lineHeight: 1.7 }}>
                        ¿Tienes alguna duda sobre la convocatoria?{" "}
                        <strong style={{ color: "#811646" }}>Comunícate con nosotros</strong>
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.875rem" }}>
                        <a href="tel:7841055959" className="btn-primary" aria-label="Llamar 784 105 5959">
                            <Phone size={17} />
                            784 105 5959
                        </a>
                        <a href="tel:7841038561" className="btn-secondary" aria-label="Llamar 784 103 8561">
                            <Phone size={17} />
                            784 103 8561
                        </a>
                        <a href="tel:7841242795" className="btn-teal" aria-label="Llamar 784 124 2795">
                            <Phone size={17} />
                            784 124 2795
                        </a>
                    </div>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 640px) {
          .signers-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
