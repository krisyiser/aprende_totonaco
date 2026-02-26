"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Scale, Users, ClipboardList, Layers, CalendarDays, Timer, Lightbulb, MapPin, DollarSign, Package, UserCheck, CalendarClock, FileText } from "lucide-react";

interface AccordionItem {
    id: string;
    title: string;
    icon: React.ReactNode;
    content: React.ReactNode;
}

const BASES: AccordionItem[] = [
    {
        id: "primera",
        title: "PRIMERA: Del Sustento Jurídico",
        icon: <Scale size={18} />,
        content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className="legal-callout">
                    <strong>Constitución de los Estados Unidos Mexicanos — Artículo 2°</strong>
                    <br />
                    Expresa, enriquecer sus lenguas, conocimientos y todos los elementos que constituyan su cultura e identidad.
                </div>
                <div className="legal-callout">
                    <strong>Ley General de los Derechos Lingüísticos — Artículo 5</strong>
                    <br />
                    El Estado, a través de sus tres órdenes de gobierno (Federación, Entidades Federativas y Municipios), en los ámbitos de sus respectivas competencias, reconocerán, protegerán y promoverán la preservación, desarrollo y uso de las lenguas indígenas nacionales.
                </div>
                <div className="legal-callout">
                    <strong>Ley de Derechos y Cultura del Estado de Veracruz — Artículo 9, Fracc. IV</strong>
                    <br />
                    Reconocimiento y validez de las lenguas indígenas en igualdad de circunstancias que el español para la realización de cualquier asunto, trámite de carácter público y para acceder irrestrictamente a la gestión de programas, servicios e información pública.
                </div>
            </div>
        ),
    },
    {
        id: "segunda",
        title: "SEGUNDA: De los Participantes",
        icon: <Users size={18} />,
        content: (
            <p style={{ lineHeight: 1.8, color: "#3a1d2b" }}>
                Podrán participar <strong>adolescentes, jóvenes y adultos</strong> de la ciudad, colonias, comunidades y rancherías,{" "}
                <strong style={{ color: "#811646" }}>no hablantes de la lengua Tutunakú</strong>.
            </p>
        ),
    },
    {
        id: "tercera",
        title: "TERCERA: De la Inscripción",
        icon: <ClipboardList size={18} />,
        content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                <p style={{ lineHeight: 1.8, color: "#3a1d2b" }}>
                    La cédula de inscripción para las personas que deseen inscribirse directamente, podrán acudir a:
                </p>
                <div
                    style={{
                        background: "rgba(129,22,70,0.06)",
                        border: "1px solid rgba(129,22,70,0.2)",
                        borderRadius: "0.75rem",
                        padding: "1rem 1.25rem",
                    }}
                >
                    <strong style={{ color: "#811646", display: "block", marginBottom: "0.25rem" }}>
                        Dirección de Protección de la Lengua Tutunakú
                    </strong>
                    Ayuntamiento Municipal de Papantla — Parque Ecológico Kiwikgolo
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
                    <span style={{ fontSize: "0.875rem", color: "#5a3345", fontWeight: 500 }}>Teléfonos:</span>
                    {["7841055959", "7841038561", "7841242795"].map((tel) => (
                        <a
                            key={tel}
                            href={`tel:${tel}`}
                            style={{
                                background: "rgba(66,179,172,0.12)",
                                border: "1px solid rgba(66,179,172,0.4)",
                                color: "#1a7873",
                                padding: "0.25rem 0.625rem",
                                borderRadius: "0.5rem",
                                fontWeight: 700,
                                fontSize: "0.875rem",
                                textDecoration: "none",
                                transition: "all 0.2s",
                            }}
                        >{tel}</a>
                    ))}
                </div>
                <p style={{ fontSize: "0.875rem", color: "#5a3345" }}>
                    📅 <strong>Horario de atención:</strong> 8:00 a 18:00 horas
                </p>
            </div>
        ),
    },
    {
        id: "cuarta",
        title: "CUARTA: De las Modalidades de Participación",
        icon: <Layers size={18} />,
        content: (
            <div style={{ lineHeight: 1.8 }}>
                <p style={{ color: "#3a1d2b", marginBottom: "0.75rem" }}>
                    El curso–taller de la lengua Tutunakú se desarrollará en la modalidad:
                </p>
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        background: "rgba(129,22,70,0.1)",
                        border: "1.5px solid rgba(129,22,70,0.3)",
                        borderRadius: "0.75rem",
                        padding: "0.625rem 1.25rem",
                        fontWeight: 700,
                        color: "#811646",
                        fontSize: "1rem",
                    }}
                >
                    <MapPin size={16} />
                    Presencial
                </div>
                <p style={{ color: "#5a3345", marginTop: "0.75rem", fontSize: "0.9rem" }}>
                    Dirigido a personas de la ciudad y colonias del municipio de Papantla.
                </p>
            </div>
        ),
    },
    {
        id: "quinta",
        title: "QUINTA: De la Fecha de Inicio",
        icon: <CalendarDays size={18} />,
        content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div
                    style={{
                        background: "linear-gradient(135deg, rgba(129,22,70,0.08), rgba(241,206,144,0.12))",
                        border: "1px solid rgba(129,22,70,0.2)",
                        borderRadius: "0.875rem",
                        padding: "1.25rem",
                    }}
                >
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#811646" }}>9 de marzo de 2026</div>
                    <div style={{ color: "#5a3345", marginTop: "0.25rem" }}>
                        Hora: <strong>16:00 hrs</strong> — Nivel 1 y Nivel 2
                    </div>
                </div>
                <p style={{ color: "#3a1d2b", lineHeight: 1.7, fontSize: "0.9rem" }}>
                    Salón <strong>CRAM</strong> (Centro Regional de Actualización Magisterial) de Papantla.
                    Sesiones los días <strong>Martes y Jueves</strong>, para nivel 1 y nivel 2.
                </p>
            </div>
        ),
    },
    {
        id: "sexta",
        title: "SEXTA: De la Duración del Curso",
        icon: <Timer size={18} />,
        content: (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.875rem" }} className="dur-grid">
                {[
                    { label: "Duración", value: "Cuatrimestral", sub: "por cada nivel" },
                    { label: "Por sesión", value: "2 horas", sub: "duración" },
                    { label: "Frecuencia", value: "2 sesiones", sub: "por semana" },
                ].map((item, i) => (
                    <div
                        key={i}
                        style={{
                            textAlign: "center",
                            background: "rgba(66,179,172,0.08)",
                            border: "1px solid rgba(66,179,172,0.25)",
                            borderRadius: "0.875rem",
                            padding: "1rem",
                        }}
                    >
                        <div style={{ fontSize: "0.68rem", color: "#42B3AC", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>{item.label}</div>
                        <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1a7873" }}>{item.value}</div>
                        <div style={{ fontSize: "0.75rem", color: "#5a3345" }}>{item.sub}</div>
                    </div>
                ))}
                <style>{`.dur-grid { @media (max-width: 600px) { grid-template-columns: 1fr !important; } }`}</style>
            </div>
        ),
    },
    {
        id: "septima",
        title: "SÉPTIMA: De las Habilidades a Desarrollar",
        icon: <Lightbulb size={18} />,
        content: (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
                {[
                    { label: "Comprensión auditiva", color: "#811646" },
                    { label: "Comprensión lectora", color: "#42B3AC" },
                    { label: "Expresión oral", color: "#A75976" },
                    { label: "Expresión escrita", color: "#7095A2" },
                ].map((habilidad) => (
                    <div
                        key={habilidad.label}
                        style={{
                            background: `${habilidad.color}14`,
                            border: `1.5px solid ${habilidad.color}50`,
                            color: habilidad.color,
                            padding: "0.5rem 1rem",
                            borderRadius: "0.625rem",
                            fontWeight: 700,
                            fontSize: "0.9rem",
                        }}
                    >
                        {habilidad.label}
                    </div>
                ))}
            </div>
        ),
    },
    {
        id: "octava",
        title: "OCTAVA: De la Sede del Curso–Taller",
        icon: <MapPin size={18} />,
        content: (
            <div
                style={{
                    background: "rgba(112,149,162,0.08)",
                    border: "1px solid rgba(112,149,162,0.3)",
                    borderRadius: "0.875rem",
                    padding: "1.25rem",
                }}
            >
                <div style={{ fontWeight: 700, color: "#1a0d14", marginBottom: "0.25rem" }}>
                    Centro Regional de Actualización Magisterial (CRAM Papantla)
                </div>
                <div style={{ color: "#5a3345", fontSize: "0.9rem" }}>
                    Calle Obispo de las Casas No. 109 (altos)
                    <br />
                    CP 93400, Papantla, Veracruz
                </div>
            </div>
        ),
    },
    {
        id: "novena",
        title: "NOVENA: Del Costo",
        icon: <DollarSign size={18} />,
        content: (
            <div style={{ textAlign: "center", padding: "0.5rem" }}>
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        background: "rgba(241,206,144,0.2)",
                        border: "2px solid rgba(241,206,144,0.7)",
                        borderRadius: "1rem",
                        padding: "1rem 2rem",
                    }}
                >
                    <span style={{ fontSize: "2rem" }}>🎉</span>
                    <div>
                        <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#8a6520" }}>Totalmente GRATIS</div>
                        <div style={{ fontSize: "0.8rem", color: "#a07830", fontWeight: 500 }}>Sin costo para todos los participantes</div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "decimoprimera",
        title: "DÉCIMO PRIMERA: De los Materiales",
        icon: <Package size={18} />,
        content: (
            <p style={{ lineHeight: 1.8, color: "#3a1d2b" }}>
                Los materiales se irán diseñando por los coordinadores acorde a los{" "}
                <strong>contenidos de aprendizaje de la Etapa Inicial 1 y 2</strong>;
                serán compartidos con los estudiantes sin costo adicional.
            </p>
        ),
    },
    {
        id: "decimosegunda",
        title: "DÉCIMO SEGUNDA: De la Coordinación",
        icon: <UserCheck size={18} />,
        content: (
            <p style={{ lineHeight: 1.8, color: "#3a1d2b" }}>
                Será coordinado por el{" "}
                <strong style={{ color: "#811646" }}>personal de la Dirección de Protección de Lengua Tutunakú</strong>{" "}
                del Ayuntamiento de Papantla.
            </p>
        ),
    },
    {
        id: "decimotercera",
        title: "DÉCIMO TERCERA: Junta Previa",
        icon: <CalendarClock size={18} />,
        content: (
            <div
                style={{
                    background: "linear-gradient(135deg, rgba(66,179,172,0.1), rgba(241,206,144,0.1))",
                    border: "1px solid rgba(66,179,172,0.3)",
                    borderRadius: "0.875rem",
                    padding: "1.25rem",
                }}
            >
                <div style={{ fontWeight: 700, color: "#1a7873", marginBottom: "0.25rem" }}>
                    📅 10 de marzo de 2026 — 16:00 horas
                </div>
                <div style={{ color: "#3a1d2b" }}>
                    Centro Regional de Actualización Magisterial (CRAM Papantla).
                </div>
                <div style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: "#5a3345" }}>
                    Se realizará al día siguiente del inicio del curso–taller.
                </div>
            </div>
        ),
    },
    {
        id: "decimocuarta",
        title: "DÉCIMO CUARTA: Transitorios",
        icon: <FileText size={18} />,
        content: (
            <p style={{ lineHeight: 1.8, color: "#3a1d2b" }}>
                Los casos no previstos en la presente convocatoria serán resueltos por la{" "}
                <strong style={{ color: "#811646" }}>Secretaría de Desarrollo Social</strong>{" "}
                en coordinación con la{" "}
                <strong>Dirección de Lengua Tutunakú</strong>.
            </p>
        ),
    },
];

function AccordionItemComponent({ item, index, isOpen, onToggle }: {
    item: AccordionItem;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="accordion-item">
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`accordion-${item.id}`}
                id={`accordion-btn-${item.id}`}
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    padding: "1.25rem 1.5rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background 0.2s",
                    borderRadius: isOpen ? "0.75rem 0.75rem 0 0" : "0.75rem",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(129,22,70,0.04)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
            >
                {/* Number chip */}
                <span
                    style={{
                        minWidth: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: isOpen ? "linear-gradient(135deg, #811646, #622A4E)" : "rgba(129,22,70,0.1)",
                        color: isOpen ? "white" : "#811646",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        transition: "all 0.3s",
                        boxShadow: isOpen ? "0 4px 12px rgba(129,22,70,0.3)" : "none",
                    }}
                >
                    {index + 1}
                </span>

                {/* Icon */}
                <span style={{ color: isOpen ? "#811646" : "#A75976", transition: "color 0.3s" }}>
                    {item.icon}
                </span>

                {/* Title */}
                <span
                    style={{
                        flex: 1,
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: isOpen ? "#811646" : "#3a1d2b",
                        transition: "color 0.3s",
                        letterSpacing: "0.01em",
                    }}
                >
                    {item.title}
                </span>

                {/* Chevron */}
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: "#A75976", flexShrink: 0 }}
                >
                    <ChevronDown size={18} />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={`accordion-${item.id}`}
                        role="region"
                        aria-labelledby={`accordion-btn-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                    >
                        <div
                            style={{
                                padding: "0 1.5rem 1.5rem 1.5rem",
                                paddingLeft: "calc(1.5rem + 30px + 0.875rem + 18px + 0.875rem)",
                            }}
                            className="accordion-content"
                        >
                            {item.content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function BasesAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="bases"
            ref={ref}
            aria-label="Bases de la convocatoria"
            style={{
                position: "relative",
                overflow: "hidden",
                padding: "6rem 1.5rem",
                background: "linear-gradient(180deg, #EBE1E7 0%, #FAF7F9 100%)",
            }}
        >
            <div className="pattern-overlay" />

            {/* Blob */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    width: "500px",
                    height: "500px",
                    background: "rgba(167,89,118,0.08)",
                    borderRadius: "50%",
                    filter: "blur(100px)",
                    right: "-100px",
                    top: "0",
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
                    <div className="section-label" style={{ marginBottom: "0.75rem" }}>
                        Convocatoria Oficial
                    </div>
                    <h2 className="section-title">
                        Bases del <span style={{ color: "#811646" }}>Curso–Taller</span>
                    </h2>
                    <p style={{ color: "#5a3345", marginTop: "0.75rem", fontSize: "0.95rem" }}>
                        Haz clic en cada base para leer el contenido completo
                    </p>
                </motion.div>

                {/* Accordion container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, delay: 0.15 }}
                    className="glass-card"
                    style={{ overflow: "hidden" }}
                >
                    {BASES.map((item, i) => (
                        <AccordionItemComponent
                            key={item.id}
                            item={item}
                            index={i}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </motion.div>
            </div>

            <style>{`
        .accordion-content { padding-left: 1.5rem !important; }
        @media (max-width: 640px) {
          .accordion-content { padding-left: 1rem !important; }
        }
      `}</style>
        </section>
    );
}
