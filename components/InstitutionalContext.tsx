"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Scale, Globe, BookOpen } from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    }),
};

export function InstitutionalContext() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="convocatoria"
            ref={ref}
            aria-label="Marco institucional y convocatoria"
            style={{
                position: "relative",
                overflow: "hidden",
                padding: "6rem 1.5rem",
                background: "linear-gradient(180deg, #FAF7F9 0%, #EBE1E7 100%)",
            }}
        >
            {/* Pattern */}
            <div className="pattern-overlay" />

            {/* Decorative blob */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    width: "600px",
                    height: "400px",
                    background: "rgba(66,179,172,0.07)",
                    borderRadius: "50%",
                    filter: "blur(100px)",
                    top: "0",
                    left: "-200px",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                {/* Section heading */}
                <motion.div
                    custom={0}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    style={{ textAlign: "center", marginBottom: "3rem" }}
                >
                    <div className="section-label" style={{ marginBottom: "0.75rem" }}>
                        Marco Institucional
                    </div>
                    <h2 className="section-title">
                        Una iniciativa del{" "}
                        <span style={{ color: "#811646" }}>H. Ayuntamiento</span>
                        <br />
                        de Papantla
                    </h2>
                </motion.div>

                {/* Legal pillars */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1.25rem",
                        marginBottom: "3rem",
                    }}
                    className="pillars-grid"
                >
                    {[
                        {
                            icon: <Scale size={24} color="white" />,
                            bg: "#811646",
                            title: "Plan Veracruzano de Desarrollo",
                            text: "PVD 2024–2030. Fundamento legal que sustenta el programa de revitalización de lenguas indígenas.",
                        },
                        {
                            icon: <BookOpen size={24} color="white" />,
                            bg: "#42B3AC",
                            title: "Programa Sectorial Veracruzano de Educación",
                            text: "PSVE 2024–2030. Marco educativo para la preservación y desarrollo de la cultura Tutunakú.",
                        },
                        {
                            icon: <Globe size={24} color="white" />,
                            bg: "#A75976",
                            title: "Secretaría de Desarrollo Social",
                            text: "Dirección de Protección de la Lengua Tutunakú. Órgano coordinador de la iniciativa.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            custom={i + 1}
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "show" : "hidden"}
                            className="glass-card glow-hover"
                            style={{ padding: "1.75rem" }}
                        >
                            <div
                                style={{
                                    width: "46px",
                                    height: "46px",
                                    borderRadius: "12px",
                                    background: item.bg,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "1rem",
                                    boxShadow: `0 4px 12px ${item.bg}55`,
                                }}
                            >
                                {item.icon}
                            </div>
                            <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a0d14", marginBottom: "0.5rem", lineHeight: 1.3 }}>
                                {item.title}
                            </h3>
                            <p style={{ fontSize: "0.85rem", color: "#5a3345", lineHeight: 1.6 }}>
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Main institutional text */}
                <motion.div
                    custom={4}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="glass-card"
                    style={{ padding: "2.5rem 3rem", marginBottom: "2.5rem" }}
                >
                    <p
                        style={{
                            fontSize: "1rem",
                            lineHeight: 1.8,
                            color: "#3a1d2b",
                            textAlign: "justify",
                            fontWeight: 400,
                        }}
                    >
                        <strong style={{ color: "#811646" }}>El Honorable Ayuntamiento de Papantla</strong>, la Secretaría de Desarrollo Social,
                        a través de la Dirección de Protección de la Lengua Tutunakú y con fundamento en el{" "}
                        <em>Plan Veracruzano de Desarrollo (PVD 2024–2030)</em>, y el{" "}
                        <em>Programa Sectorial Veracruzano de Educación (PSVE 2024–2030)</em>. Con el propósito de{" "}
                        <strong>revitalizar, difundir, recuperar, preservar y desarrollar</strong> la lengua y la cultura Tutunakú.
                    </p>
                </motion.div>

                {/* CONVOCA block */}
                <motion.div
                    custom={5}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    style={{
                        background: "linear-gradient(135deg, #811646 0%, #622A4E 60%, #4a1b3a 100%)",
                        borderRadius: "1.5rem",
                        padding: "3rem 3rem",
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: "0 20px 60px rgba(129,22,70,0.3)",
                    }}
                >
                    {/* Pattern on dark bg */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 31px)",
                            borderRadius: "inherit",
                        }}
                    />
                    <div
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            width: "300px",
                            height: "300px",
                            borderRadius: "50%",
                            background: "rgba(66,179,172,0.15)",
                            filter: "blur(60px)",
                            right: "-50px",
                            top: "50%",
                            transform: "translateY(-50%)",
                        }}
                    />

                    <span
                        style={{
                            display: "block",
                            fontSize: "clamp(3rem, 8vw, 5.5rem)",
                            fontWeight: 900,
                            color: "#F1CE90",
                            letterSpacing: "0.1em",
                            lineHeight: 1,
                            marginBottom: "1.5rem",
                            textShadow: "0 4px 24px rgba(241,206,144,0.3)",
                        }}
                    >
                        CONVOCA
                    </span>
                    <p
                        style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            color: "rgba(255,255,255,0.9)",
                            lineHeight: 1.8,
                            maxWidth: "700px",
                            margin: "0 auto",
                            position: "relative",
                            zIndex: 1,
                            fontWeight: 400,
                        }}
                    >
                        A la ciudadanía, colonias y comunidades del municipio de{" "}
                        <strong style={{ color: "#F1CE90" }}>Papantla</strong>, a inscribirse al{" "}
                        <strong style={{ color: "#F1CE90" }}>Curso–Taller de Lengua Tutunakú</strong> en su{" "}
                        <strong style={{ color: "#F1CE90" }}>Etapa Inicial I y II</strong>.
                    </p>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
          section[id="convocatoria"] .glass-card { padding: 1.5rem !important; }
          section[id="convocatoria"] [style*="padding: 3rem 3rem"] { padding: 2rem 1.5rem !important; }
        }
      `}</style>
        </section>
    );
}
