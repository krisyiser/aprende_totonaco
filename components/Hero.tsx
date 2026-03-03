"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, Clock, BookOpen, Star, ChevronDown } from "lucide-react";
import Image from "next/image";


/* ─── Floating blobs ─── */
function Blob({ style }: { style: React.CSSProperties }) {
    return (
        <div
            aria-hidden="true"
            style={{
                position: "absolute",
                borderRadius: "50%",
                filter: "blur(80px)",
                pointerEvents: "none",
                ...style,
            }}
        />
    );
}

export function Hero() {
    const { scrollY } = useScroll();
    const yParallax = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityFade = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section
            id="inicio"
            aria-label="Sección de inicio"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                paddingTop: "70px",
                background: "linear-gradient(160deg, #FAF7F9 0%, #EBE1E7 45%, #f5e8f0 75%, #FAF7F9 100%)",
            }}
        >
            {/* Pattern overlay */}
            <div className="pattern-overlay" />

            {/* Background blobs */}
            <Blob style={{ width: 500, height: 500, background: "rgba(129,22,70,0.08)", top: "-100px", right: "-150px" }} />
            <Blob style={{ width: 350, height: 350, background: "rgba(66,179,172,0.1)", bottom: "0px", left: "-80px" }} />
            <Blob style={{ width: 250, height: 250, background: "rgba(241,206,144,0.15)", top: "40%", right: "30%" }} />

            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    padding: "4rem 1.5rem 3rem",
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "3rem",
                    alignItems: "center",
                }}
                className="hero-grid"
            >
                {/* LEFT — Content */}
                <div>
                    {/* Badge institucional */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem", alignItems: "center" }}
                    >
                        <span className="chip-vino" style={{ fontSize: "0.72rem" }}>
                            H. Ayuntamiento de Papantla
                        </span>
                        <span className="chip-teal">
                            Sec. Desarrollo Social
                        </span>
                        <span className="chip-dorado" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                            <Star size={11} />
                            Totalmente Gratis
                        </span>
                    </motion.div>

                    {/* Main title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            fontSize: "clamp(2rem, 5vw, 3.5rem)",
                            fontWeight: 900,
                            color: "#1a0d14",
                            lineHeight: 1.1,
                            letterSpacing: "-0.03em",
                            marginBottom: "1rem",
                        }}
                    >
                        Convocatoria:{" "}
                        <span style={{ color: "#811646" }}>
                            Curso–Taller
                        </span>
                        <br />
                        <span
                            style={{
                                background: "linear-gradient(90deg, #811646, #A75976)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            de Lengua Tutunakú
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            color: "#5a3345",
                            marginBottom: "2rem",
                            fontWeight: 500,
                            lineHeight: 1.5,
                        }}
                    >
                        Etapa Inicial I y II — Modalidad Presencial
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "2.5rem" }}
                    >
                        <a
                            href="#inscripcion"
                            onClick={(e) => { e.preventDefault(); document.getElementById("inscripcion")?.scrollIntoView({ behavior: "smooth" }); }}
                            className="btn-primary"
                            aria-label="Inscribirme ahora"
                        >
                            <BookOpen size={18} />
                            Inscribirme ahora
                        </a>
                        <a
                            href="#bases"
                            onClick={(e) => { e.preventDefault(); document.getElementById("bases")?.scrollIntoView({ behavior: "smooth" }); }}
                            className="btn-secondary"
                            aria-label="Ver bases completas"
                        >
                            Ver bases completas
                        </a>
                    </motion.div>

                    {/* Quick cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "0.875rem",
                        }}
                        className="hero-cards"
                    >
                        {[
                            { icon: <Calendar size={18} color="#811646" />, label: "Inicio", value: "9 marzo 2026", sub: "16:00 hrs" },
                            { icon: <MapPin size={18} color="#42B3AC" />, label: "Sede", value: "CRAM Papantla", sub: "C. Obispo de las Casas 109" },
                            { icon: <Clock size={18} color="#A75976" />, label: "Horario", value: "Mar y Jue", sub: "2 hrs por sesión" },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="glass-card glow-hover"
                                style={{ padding: "1rem", textAlign: "center" }}
                            >
                                <div style={{ marginBottom: "0.4rem", display: "flex", justifyContent: "center" }}>{card.icon}</div>
                                <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "#7095A2", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.2rem" }}>
                                    {card.label}
                                </div>
                                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a0d14", lineHeight: 1.2 }}>
                                    {card.value}
                                </div>
                                <div style={{ fontSize: "0.72rem", color: "#7a4f62", marginTop: "0.15rem" }}>{card.sub}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* RIGHT — Ornament */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
                >
                    {/* Glow behind ornament */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            width: "320px",
                            height: "320px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(129,22,70,0.12), rgba(66,179,172,0.08), transparent 70%)",
                            filter: "blur(30px)",
                        }}
                    />
                    <motion.div
                        style={{ width: "min(420px, 90vw)", height: "auto", y: yParallax, opacity: opacityFade, position: "relative", zIndex: 10 }}
                    >
                        <Image
                            src="/flyer.jpeg"
                            alt="Flyer del Curso-Taller"
                            width={420}
                            height={420}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "20px",
                                boxShadow: "0 20px 50px rgba(129,22,70,0.25)",
                                border: "4px solid rgba(255,255,255,0.7)"
                            }}
                            priority
                        />
                    </motion.div>
                    {/* Floating badge */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="glass-card"
                        style={{
                            position: "absolute",
                            bottom: "5%",
                            right: "0",
                            padding: "0.75rem 1rem",
                            background: "rgba(241,206,144,0.25)",
                            border: "1px solid rgba(241,206,144,0.6)",
                            borderRadius: "1rem",
                        }}
                    >
                        <div style={{ fontSize: "0.72rem", color: "#8a6520", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Sin costo</div>
                        <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#811646" }}>100% Gratis</div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: "absolute",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.4rem",
                    opacity: 0.6,
                }}
                aria-hidden="true"
            >
                <span style={{ fontSize: "0.7rem", color: "#811646", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Desplázate
                </span>
                <ChevronDown size={20} color="#811646" />
            </motion.div>

            <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-cards { grid-template-columns: 1fr !important; gap: 0.625rem !important; }
          .hero-grid > div:last-child { display: none; }
        }
      `}</style>
        </section>
    );
}
