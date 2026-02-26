"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, Clock, Repeat, AlertCircle } from "lucide-react";

interface CalendarEvent {
    date: string;
    time: string;
    title: string;
    subtitle: string;
    type: "inicio" | "junta" | "sesion" | "info";
    icon: React.ReactNode;
}

const EVENTS: CalendarEvent[] = [
    {
        date: "Domingo, 9 de marzo de 2026",
        time: "16:00 hrs",
        title: "Inicio del Curso–Taller",
        subtitle: "Nivel 1 y 2 — CRAM Papantla",
        type: "inicio",
        icon: <Calendar size={20} />,
    },
    {
        date: "Lunes, 10 de marzo de 2026",
        time: "16:00 hrs",
        title: "Junta Previa",
        subtitle: "CRAM Papantla — Asistencia obligatoria",
        type: "junta",
        icon: <AlertCircle size={20} />,
    },
    {
        date: "Todos los Martes",
        time: "16:00 hrs (aprox.)",
        title: "Sesión Regular — Martes",
        subtitle: "Nivel 1 y Nivel 2 — 2 horas por sesión",
        type: "sesion",
        icon: <Repeat size={20} />,
    },
    {
        date: "Todos los Jueves",
        time: "16:00 hrs (aprox.)",
        title: "Sesión Regular — Jueves",
        subtitle: "Nivel 1 y Nivel 2 — 2 horas por sesión",
        type: "sesion",
        icon: <Repeat size={20} />,
    },
];

const TYPE_STYLES: Record<CalendarEvent["type"], { bg: string; border: string; chip: string; chipText: string; chipLabel: string }> = {
    inicio: {
        bg: "rgba(129,22,70,0.08)",
        border: "#811646",
        chip: "rgba(129,22,70,0.12)",
        chipText: "#811646",
        chipLabel: "Inicio",
    },
    junta: {
        bg: "rgba(167,89,118,0.08)",
        border: "#A75976",
        chip: "rgba(167,89,118,0.12)",
        chipText: "#A75976",
        chipLabel: "Junta",
    },
    sesion: {
        bg: "rgba(66,179,172,0.08)",
        border: "#42B3AC",
        chip: "rgba(66,179,172,0.12)",
        chipText: "#1a7873",
        chipLabel: "Sesión",
    },
    info: {
        bg: "rgba(241,206,144,0.15)",
        border: "#F1CE90",
        chip: "rgba(241,206,144,0.3)",
        chipText: "#8a6520",
        chipLabel: "Info",
    },
};

const INFO_CARDS = [
    { icon: <Clock size={22} color="#811646" />, label: "Duración Total", value: "Cuatrimestral", sub: "por nivel" },
    { icon: <Repeat size={22} color="#42B3AC" />, label: "Frecuencia", value: "2 veces/semana", sub: "Mar y Jue" },
    { icon: <Clock size={22} color="#A75976" />, label: "Por Sesión", value: "2 horas", sub: "de clase" },
    { icon: <MapPin size={22} color="#7095A2" />, label: "Sede", value: "CRAM Papantla", sub: "Obispo de las Casas 109" },
];

export function CalendarSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="calendario"
            ref={ref}
            aria-label="Calendario de fechas importantes"
            style={{
                position: "relative",
                overflow: "hidden",
                padding: "6rem 1.5rem",
                background: "linear-gradient(160deg, #811646 0%, #622A4E 50%, #4a1b3a 100%)",
                color: "white",
            }}
        >
            {/* Decorative */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.025) 30px, rgba(255,255,255,0.025) 31px)",
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    width: "500px",
                    height: "500px",
                    background: "rgba(66,179,172,0.15)",
                    borderRadius: "50%",
                    filter: "blur(120px)",
                    right: "-100px",
                    bottom: "-100px",
                    pointerEvents: "none",
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    background: "rgba(241,206,144,0.1)",
                    borderRadius: "50%",
                    filter: "blur(80px)",
                    left: "10%",
                    top: "10%",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65 }}
                    style={{ textAlign: "center", marginBottom: "3.5rem" }}
                >
                    <div
                        className="section-label"
                        style={{ color: "#F1CE90", marginBottom: "0.75rem" }}
                    >
                        Fechas Señaladas
                    </div>
                    <h2 className="section-title-light">
                        Calendario{" "}
                        <span style={{ color: "#F1CE90" }}>Oficial</span>
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "0.75rem", fontSize: "0.95rem" }}>
                        Todas las fechas del programa de la Etapa Inicial I y II
                    </p>
                </motion.div>

                {/* Info cards row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, delay: 0.1 }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "1rem",
                        marginBottom: "3rem",
                    }}
                    className="info-cards-grid"
                >
                    {INFO_CARDS.map((card, i) => (
                        <div
                            key={i}
                            className="glass-card-dark"
                            style={{
                                padding: "1.25rem",
                                textAlign: "center",
                                borderRadius: "1rem",
                            }}
                        >
                            <div style={{ marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
                                {card.icon}
                            </div>
                            <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>
                                {card.label}
                            </div>
                            <div style={{ fontSize: "1rem", fontWeight: 800, color: "white" }}>
                                {card.value}
                            </div>
                            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>{card.sub}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Timeline */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0", position: "relative" }}>
                    {/* Vertical line */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            left: "29px",
                            top: "40px",
                            bottom: "40px",
                            width: "2px",
                            background: "linear-gradient(to bottom, rgba(241,206,144,0.6), rgba(66,179,172,0.3), transparent)",
                        }}
                    />

                    {EVENTS.map((event, i) => {
                        const styles = TYPE_STYLES[event.type];
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -40 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.55, delay: 0.2 + i * 0.12 }}
                                style={{
                                    display: "flex",
                                    gap: "1.25rem",
                                    alignItems: "flex-start",
                                    paddingBottom: i < EVENTS.length - 1 ? "1.5rem" : 0,
                                }}
                            >
                                {/* Timeline dot */}
                                <div
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "50%",
                                        background: styles.bg,
                                        border: `2px solid ${styles.border}`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                        color: styles.chipText,
                                        backdropFilter: "blur(8px)",
                                        zIndex: 1,
                                        position: "relative",
                                    }}
                                >
                                    {event.icon}
                                </div>

                                {/* Content */}
                                <div
                                    className="glass-card-dark"
                                    style={{
                                        flex: 1,
                                        padding: "1.25rem 1.5rem",
                                        borderRadius: "1rem",
                                        border: `1px solid ${styles.border}40`,
                                    }}
                                >
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center", marginBottom: "0.5rem" }}>
                                        <span
                                            style={{
                                                background: styles.chip,
                                                color: styles.chipText,
                                                border: `1px solid ${styles.border}50`,
                                                padding: "0.15rem 0.6rem",
                                                borderRadius: "999px",
                                                fontSize: "0.7rem",
                                                fontWeight: 700,
                                                letterSpacing: "0.05em",
                                            }}
                                        >
                                            {styles.chipLabel}
                                        </span>
                                        <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
                                            {event.time}
                                        </span>
                                        {event.type === "sesion" && (
                                            <span className="chip-dorado" style={{ fontSize: "0.68rem" }}>Gratis</span>
                                        )}
                                    </div>
                                    <h3 style={{ fontWeight: 700, color: "white", fontSize: "1rem", marginBottom: "0.25rem" }}>
                                        {event.title}
                                    </h3>
                                    <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", marginBottom: "0.25rem" }}>
                                        {event.subtitle}
                                    </div>
                                    <div style={{ fontSize: "0.8rem", color: "rgba(66,179,172,0.9)", fontWeight: 500 }}>
                                        📅 {event.date}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Legend chips */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", marginTop: "2.5rem", justifyContent: "center" }}
                >
                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)" }}>Leyenda:</span>
                    {[
                        { label: "Inicio del curso", color: "#811646" },
                        { label: "Junta previa", color: "#A75976" },
                        { label: "Sesiones regulares", color: "#42B3AC" },
                    ].map((leg) => (
                        <span
                            key={leg.label}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.375rem",
                                fontSize: "0.78rem",
                                color: "rgba(255,255,255,0.7)",
                            }}
                        >
                            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: leg.color, display: "inline-block" }} />
                            {leg.label}
                        </span>
                    ))}
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .info-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .info-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
