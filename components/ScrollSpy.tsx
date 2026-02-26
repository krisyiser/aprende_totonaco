"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const SECTIONS = [
    { id: "inicio", label: "Inicio" },
    { id: "convocatoria", label: "Convocatoria" },
    { id: "bases", label: "Bases" },
    { id: "calendario", label: "Calendario" },
    { id: "inscripcion", label: "Inscripción" },
    { id: "sede", label: "Sede" },
    { id: "contacto", label: "Contacto" },
];

export function ScrollSpy() {
    const [active, setActive] = useState("inicio");
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
        );

        SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        const onScroll = () => setShowTop(window.scrollY > 400);
        window.addEventListener("scroll", onScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* Lateral scroll spy */}
            <nav
                aria-label="Indicador de progreso"
                style={{
                    position: "fixed",
                    right: "1.25rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 90,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    alignItems: "center",
                }}
                className="scroll-spy-nav"
            >
                {SECTIONS.map(({ id, label }) => (
                    <div key={id} style={{ position: "relative", display: "flex", alignItems: "center" }}>
                        {/* Tooltip label */}
                        <AnimatePresence>
                            {active === id && (
                                <motion.span
                                    initial={{ opacity: 0, x: 8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 8 }}
                                    style={{
                                        position: "absolute",
                                        right: "calc(100% + 8px)",
                                        whiteSpace: "nowrap",
                                        fontSize: "0.7rem",
                                        fontWeight: 700,
                                        color: "#811646",
                                        background: "rgba(255,250,253,0.9)",
                                        padding: "0.2rem 0.5rem",
                                        borderRadius: "4px",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                        pointerEvents: "none",
                                    }}
                                >
                                    {label}
                                </motion.span>
                            )}
                        </AnimatePresence>
                        <button
                            onClick={() => scrollTo(id)}
                            aria-label={`Ir a ${label}`}
                            style={{
                                width: active === id ? "12px" : "8px",
                                height: active === id ? "12px" : "8px",
                                borderRadius: "50%",
                                border: "2px solid",
                                borderColor: active === id ? "#811646" : "rgba(129,22,70,0.3)",
                                background: active === id ? "#811646" : "transparent",
                                cursor: "pointer",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                padding: 0,
                                boxShadow: active === id ? "0 0 8px rgba(129,22,70,0.4)" : "none",
                            }}
                        />
                    </div>
                ))}
            </nav>

            {/* Back to top */}
            <AnimatePresence>
                {showTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        aria-label="Volver arriba"
                        style={{
                            position: "fixed",
                            bottom: "1.75rem",
                            right: "1.25rem",
                            zIndex: 90,
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #811646, #622A4E)",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 16px rgba(129,22,70,0.4)",
                        }}
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .scroll-spy-nav { display: none !important; }
        }
      `}</style>
        </>
    );
}
