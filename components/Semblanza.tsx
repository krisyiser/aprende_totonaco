"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Users, UserCheck, BookOpen, GraduationCap } from "lucide-react";

export function Semblanza() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } }
    };

    return (
        <section
            id="semblanza"
            ref={ref}
            aria-label="Semblanza"
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
                    background: "rgba(129,22,70,0.06)",
                    borderRadius: "50%",
                    filter: "blur(100px)",
                    right: "-100px",
                    top: "100px",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>

                {/* Title */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    variants={fadeUp}
                    style={{ textAlign: "center", marginBottom: "3.5rem" }}
                >
                    <div className="section-label" style={{ marginBottom: "0.75rem" }}>
                        Sobre Nosotros
                    </div>
                    <h2 className="section-title">
                        <span style={{ color: "#811646" }}>Semblanza</span>
                    </h2>
                </motion.div>

                {/* Main Text Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card"
                    style={{ padding: "3rem", marginBottom: "3.5rem", textAlign: "center", borderRadius: "1.5rem" }}
                >
                    <div style={{ display: "inline-flex", padding: "1rem", background: "rgba(129,22,70,0.08)", borderRadius: "1rem", marginBottom: "1.5rem" }}>
                        <Users size={32} color="#811646" />
                    </div>
                    <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#3a1d2b", fontWeight: 500, maxWidth: "800px", margin: "0 auto" }}>
                        La <strong>Dirección de Protección de Lengua Tutunakú</strong> ha sido creada para{" "}
                        <span style={{ color: "#811646" }}>revitalizar y fortalecer el idioma Tutunakú</span> haciendo acciones que fortalezcan y respondan a las demandas de la sociedad en Papantla.
                    </p>
                </motion.div>

                {/* Profiles Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>

                    {/* Director */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="glass-card glow-hover"
                        style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
                    >
                        <div style={{ padding: "0.875rem", background: "rgba(66,179,172,0.1)", borderRadius: "50%", marginBottom: "1.5rem" }}>
                            <UserCheck size={28} color="#42B3AC" />
                        </div>
                        <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "#1a0d14", marginBottom: "0.5rem" }}>
                            Profr. José Pérez Morgado
                        </h3>
                        <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#42B3AC", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>
                            Director
                        </div>
                        <p style={{ fontSize: "0.9rem", color: "#5a3345", lineHeight: 1.6 }}>
                            Maestro en educación indígena, certificado por el Instituto Nacional de Lenguas Indígenas (INALI).
                        </p>
                    </motion.div>

                    {/* Docente 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass-card glow-hover"
                        style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
                    >
                        <div style={{ padding: "0.875rem", background: "rgba(241,206,144,0.15)", borderRadius: "50%", marginBottom: "1.5rem" }}>
                            <BookOpen size={28} color="#A75976" />
                        </div>
                        <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "#1a0d14", marginBottom: "0.5rem" }}>
                            C. Romaldo Santiago Ramirez
                        </h3>
                        <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#A75976", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>
                            Docente
                        </div>
                        <p style={{ fontSize: "0.9rem", color: "#5a3345", lineHeight: 1.6 }}>
                            Certificado por el Instituto Nacional de Lenguas Indígenas (INALI) y AVELI.
                        </p>
                    </motion.div>

                    {/* Docente 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="glass-card glow-hover"
                        style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
                    >
                        <div style={{ padding: "0.875rem", background: "rgba(129,22,70,0.1)", borderRadius: "50%", marginBottom: "1.5rem" }}>
                            <GraduationCap size={28} color="#811646" />
                        </div>
                        <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "#1a0d14", marginBottom: "0.5rem" }}>
                            Dra. Zaira Angelica Pérez Licona
                        </h3>
                        <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#811646", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>
                            Docente
                        </div>
                        <p style={{ fontSize: "0.9rem", color: "#5a3345", lineHeight: 1.6 }}>
                            Doctora en Gestión y Política Educativa por la Universidad Pedagógica Veracruzana.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
