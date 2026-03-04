"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, UserCircle, BookOpen } from "lucide-react";

const PHONES = [
    { number: "7841055959", display: "784 105 5959" },
    { number: "7841038561", display: "784 103 8561" },
    { number: "7841242795", display: "784 124 2795" },
];

export function Registration() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="inscripcion"
            ref={ref}
            aria-label="Información de inscripción"
            style={{
                position: "relative",
                overflow: "hidden",
                padding: "6rem 1.5rem",
                background: "linear-gradient(180deg, #FAF7F9 0%, #EBE1E7 100%)",
            }}
        >
            <div className="pattern-overlay" />
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    width: "400px",
                    height: "400px",
                    background: "rgba(241,206,144,0.15)",
                    borderRadius: "50%",
                    filter: "blur(100px)",
                    left: "-100px",
                    bottom: "0px",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65 }}
                    style={{ textAlign: "center", marginBottom: "3rem" }}
                >
                    <div className="section-label" style={{ marginBottom: "0.75rem" }}>
                        ¿Cómo Participar?
                    </div>
                    <h2 className="section-title">
                        Proceso de <span style={{ color: "#811646" }}>Inscripción</span>
                    </h2>
                    <p style={{ color: "#5a3345", marginTop: "0.75rem" }}>
                        ¡Sin costo! Inscríbete presencialmente o por teléfono
                    </p>
                </motion.div>

                <div
                    style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "2rem", alignItems: "start" }}
                    className="reg-grid"
                >
                    {/* Left — Contact Info */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="glass-card"
                            style={{ padding: "1.75rem" }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                                <div
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "10px",
                                        background: "linear-gradient(135deg, #811646, #622A4E)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: "0 4px 12px rgba(129,22,70,0.3)",
                                    }}
                                >
                                    <MapPin size={20} color="white" />
                                </div>
                                <h3 style={{ fontWeight: 700, color: "#1a0d14", fontSize: "1rem" }}>
                                    Lugar de Inscripción
                                </h3>
                            </div>
                            <p style={{ color: "#3a1d2b", lineHeight: 1.7, fontWeight: 500 }}>
                                Dirección de Protección de la Lengua Tutunakú
                                <br />
                                <span style={{ color: "#5a3345", fontWeight: 400, fontSize: "0.9rem" }}>
                                    Ayuntamiento Municipal de Papantla
                                    <br />
                                    Parque Ecológico Kiwikgolo
                                </span>
                            </p>
                        </motion.div>

                        {/* Hours */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass-card"
                            style={{ padding: "1.5rem 1.75rem" }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <Clock size={22} color="#42B3AC" />
                                <div>
                                    <div style={{ fontWeight: 700, color: "#1a0d14", fontSize: "0.95rem" }}>Horario de Atención</div>
                                    <div style={{ fontSize: "1.35rem", fontWeight: 900, color: "#811646", lineHeight: 1.1 }}>
                                        8:00 — 18:00 hrs
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Phone buttons */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="glass-card"
                            style={{ padding: "1.75rem" }}
                        >
                            <h3 style={{ fontWeight: 700, color: "#1a0d14", marginBottom: "1rem", fontSize: "0.95rem" }}>
                                Teléfonos de Contacto
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                {PHONES.map((phone) => (
                                    <div
                                        key={phone.number}
                                        style={{ display: "flex", gap: "0.625rem" }}
                                    >
                                        <a
                                            href={`tel:${phone.number}`}
                                            className="btn-primary"
                                            style={{ flex: 1, justifyContent: "center", padding: "0.625rem 1rem", fontSize: "0.9rem" }}
                                            aria-label={`Llamar al ${phone.display}`}
                                        >
                                            <Phone size={16} />
                                            {phone.display}
                                        </a>
                                        <a
                                            href={`https://wa.me/52${phone.number}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`WhatsApp ${phone.display}`}
                                            className="btn-teal"
                                            style={{ padding: "0.625rem 0.875rem", flexShrink: 0 }}
                                        >
                                            <MessageCircle size={16} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — Visual form (non-functional) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card"
                        style={{ padding: "2rem" }}
                    >
                        <div
                            style={{
                                background: "rgba(129,22,70,0.05)",
                                border: "1px solid rgba(129,22,70,0.15)",
                                borderRadius: "0.875rem",
                                padding: "0.875rem 1rem",
                                marginBottom: "1.5rem",
                                textAlign: "center",
                            }}
                        >
                            <div style={{ fontSize: "0.75rem", color: "#811646", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                Vista previa del formulario
                            </div>
                            <div style={{ fontSize: "0.75rem", color: "#5a3345", marginTop: "0.2rem" }}>
                                La inscripción se realiza presencialmente o por teléfono
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                            {/* Nombre completo */}
                            <div>
                                <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#3a1d2b", marginBottom: "0.4rem" }}>
                                    <UserCircle size={14} color="#811646" />
                                    Nombre completo
                                </label>
                                <div style={{ width: "100%", padding: "0.625rem 0.875rem", border: "1.5px solid rgba(129,22,70,0.2)", borderRadius: "0.625rem", background: "rgba(235,225,231,0.4)", fontSize: "0.875rem", color: "#7a4f62", cursor: "not-allowed", textAlign: "left" }}>
                                    Ej. María López García
                                </div>
                            </div>

                            {/* Dirección */}
                            <div>
                                <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#3a1d2b", marginBottom: "0.4rem" }}>
                                    <MapPin size={14} color="#811646" />
                                    Dirección
                                </label>
                                <div style={{ width: "100%", padding: "0.625rem 0.875rem", border: "1.5px solid rgba(129,22,70,0.2)", borderRadius: "0.625rem", background: "rgba(235,225,231,0.4)", fontSize: "0.875rem", color: "#7a4f62", cursor: "not-allowed", textAlign: "left" }}>
                                    Ej. Calle Principal #123, Col. Centro
                                </div>
                            </div>

                            {/* Cel */}
                            <div>
                                <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#3a1d2b", marginBottom: "0.4rem" }}>
                                    <Phone size={14} color="#811646" />
                                    Cel
                                </label>
                                <div style={{ width: "100%", padding: "0.625rem 0.875rem", border: "1.5px solid rgba(129,22,70,0.2)", borderRadius: "0.625rem", background: "rgba(235,225,231,0.4)", fontSize: "0.875rem", color: "#7a4f62", cursor: "not-allowed", textAlign: "left" }}>
                                    Ej. 784 100 0000
                                </div>
                            </div>

                            {/* Menores de edad & Credencial Notice */}
                            <div style={{ padding: "0.75rem", background: "rgba(66,179,172,0.1)", border: "1px dashed rgba(66,179,172,0.4)", borderRadius: "0.5rem", textAlign: "left" }}>
                                <p style={{ fontSize: "0.75rem", color: "#2B7A75", margin: 0, lineHeight: 1.4 }}>
                                    <strong style={{ display: "block", marginBottom: "0.2rem" }}>Importante:</strong>
                                    En caso de ser menor de edad se atiende a partir de los 10 años. Se debe anexar copia de la credencial de elector.
                                </p>
                            </div>

                            {/* Perspectiva */}
                            <div>
                                <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#3a1d2b", marginBottom: "0.4rem" }}>
                                    <BookOpen size={14} color="#811646" />
                                    ¿Cuál es su perspectiva del curso?
                                </label>
                                <div style={{ width: "100%", minHeight: "60px", padding: "0.625rem 0.875rem", border: "1.5px solid rgba(129,22,70,0.2)", borderRadius: "0.625rem", background: "rgba(235,225,231,0.4)", fontSize: "0.875rem", color: "#7a4f62", cursor: "not-allowed", textAlign: "left" }}>
                                    Escriba su respuesta...
                                </div>
                            </div>

                            {/* Noción */}
                            <div>
                                <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#3a1d2b", marginBottom: "0.4rem", textAlign: "left" }}>
                                    <MessageCircle size={14} color="#811646" />
                                    <span>¿Tiene alguna noción del idioma tutunakú?</span>
                                </label>
                                <div style={{ display: "flex", gap: "0.625rem" }}>
                                    {["Sí", "No", "Un poco"].map((opcion) => (
                                        <div key={opcion} style={{ flex: 1, padding: "0.5rem", border: "1.5px solid rgba(129,22,70,0.2)", borderRadius: "0.5rem", background: "rgba(235,225,231,0.4)", textAlign: "center", fontSize: "0.875rem", color: "#7a4f62", cursor: "not-allowed" }}>
                                            {opcion}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Término */}
                            <div>
                                <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#3a1d2b", marginBottom: "0.4rem", textAlign: "left" }}>
                                    <MessageCircle size={14} color="#811646" />
                                    <span>¿Qué es lo que desea saber al término del curso?</span>
                                </label>
                                <div style={{ width: "100%", minHeight: "60px", padding: "0.625rem 0.875rem", border: "1.5px solid rgba(129,22,70,0.2)", borderRadius: "0.625rem", background: "rgba(235,225,231,0.4)", fontSize: "0.875rem", color: "#7a4f62", cursor: "not-allowed", textAlign: "left" }}>
                                    Escriba su respuesta...
                                </div>
                            </div>

                            {/* Sugerencia */}
                            <div>
                                <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#3a1d2b", marginBottom: "0.4rem", textAlign: "left" }}>
                                    <MessageCircle size={14} color="#811646" />
                                    <span>¿Alguna sugerencia sobre el curso taller?</span>
                                </label>
                                <div style={{ width: "100%", minHeight: "60px", padding: "0.625rem 0.875rem", border: "1.5px solid rgba(129,22,70,0.2)", borderRadius: "0.625rem", background: "rgba(235,225,231,0.4)", fontSize: "0.875rem", color: "#7a4f62", cursor: "not-allowed", textAlign: "left" }}>
                                    Opcional...
                                </div>
                            </div>

                            {/* Disabled button */}
                            <button
                                disabled
                                aria-disabled="true"
                                style={{
                                    width: "100%",
                                    padding: "0.875rem",
                                    borderRadius: "0.75rem",
                                    background: "rgba(129,22,70,0.35)",
                                    color: "rgba(255,255,255,0.7)",
                                    border: "none",
                                    fontWeight: 700,
                                    fontSize: "0.95rem",
                                    cursor: "not-allowed",
                                    letterSpacing: "0.01em",
                                    marginTop: "0.25rem",
                                }}
                            >
                                Inscripción presencial / vía teléfono
                            </button>

                            <p
                                style={{
                                    fontSize: "0.75rem",
                                    color: "#7a4f62",
                                    textAlign: "center",
                                    lineHeight: 1.5,
                                }}
                            >
                                Para inscribirte, acude directamente a la Dirección de Protección de la Lengua Tutunakú o llama a los teléfonos indicados.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .reg-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
