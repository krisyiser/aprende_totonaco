"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, Calendar, Phone } from "lucide-react";

const NAV_ITEMS = [
    { label: "Inicio", href: "#inicio" },
    { label: "Convocatoria", href: "#convocatoria" },
    { label: "Bases", href: "#bases" },
    { label: "Calendario", href: "#calendario" },
    { label: "Inscripción", href: "#inscripcion" },
    { label: "Sede", href: "#sede" },
    { label: "Contacto", href: "#contacto" },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    transition: "all 0.3s ease",
                    background: scrolled
                        ? "rgba(255,250,253,0.88)"
                        : "rgba(255,250,253,0.6)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    borderBottom: scrolled
                        ? "1px solid rgba(129,22,70,0.12)"
                        : "1px solid transparent",
                    boxShadow: scrolled
                        ? "0 4px 24px rgba(129,22,70,0.08)"
                        : "none",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        padding: "0 1.5rem",
                        height: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo */}
                    <a
                        href="#inicio"
                        onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
                        style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.625rem" }}
                        aria-label="Ir al inicio"
                    >
                        <div
                            style={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "10px",
                                background: "linear-gradient(135deg, #811646, #622A4E)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 12px rgba(129,22,70,0.3)",
                            }}
                        >
                            <BookOpen size={18} color="white" />
                        </div>
                        <div>
                            <span style={{ fontWeight: 800, fontSize: "0.95rem", color: "#811646", display: "block", lineHeight: 1.1 }}>
                                Papantla
                            </span>
                            <span style={{ fontWeight: 500, fontSize: "0.72rem", color: "#A75976", letterSpacing: "0.05em" }}>
                                Limakxtum–Juntos
                            </span>
                        </div>
                    </a>

                    {/* Nav Desktop */}
                    <nav
                        aria-label="Navegación principal"
                        style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
                        className="hide-mobile"
                    >
                        {NAV_ITEMS.slice(0, 5).map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                                style={{
                                    padding: "0.4rem 0.75rem",
                                    borderRadius: "0.5rem",
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    color: "#4a2035",
                                    textDecoration: "none",
                                    transition: "all 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(129,22,70,0.08)";
                                    (e.currentTarget as HTMLElement).style.color = "#811646";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "transparent";
                                    (e.currentTarget as HTMLElement).style.color = "#4a2035";
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Buttons Desktop */}
                    <div style={{ display: "flex", gap: "0.625rem", alignItems: "center" }} className="hide-mobile">
                        <a
                            href="#calendario"
                            onClick={(e) => { e.preventDefault(); handleNavClick("#calendario"); }}
                            className="btn-secondary"
                            style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
                            aria-label="Ver calendario"
                        >
                            <Calendar size={15} />
                            Ver Calendario
                        </a>
                        <a
                            href="#inscripcion"
                            onClick={(e) => { e.preventDefault(); handleNavClick("#inscripcion"); }}
                            className="btn-primary"
                            style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
                            aria-label="Inscribirme"
                        >
                            Inscribirme
                        </a>
                        <a
                            href="#contacto"
                            onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
                            className="btn-teal"
                            style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
                            aria-label="Contacto"
                        >
                            <Phone size={15} />
                            Contacto
                        </a>
                    </div>

                    {/* Hamburger Mobile */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={menuOpen}
                        className="show-mobile"
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "0.5rem",
                            borderRadius: "0.5rem",
                            color: "#811646",
                            display: "none",
                        }}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                position: "fixed",
                                inset: 0,
                                background: "rgba(0,0,0,0.4)",
                                backdropFilter: "blur(4px)",
                                zIndex: 150,
                            }}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 28, stiffness: 280 }}
                            style={{
                                position: "fixed",
                                top: 0,
                                right: 0,
                                bottom: 0,
                                width: "min(320px, 85vw)",
                                background: "#FAF7F9",
                                zIndex: 200,
                                padding: "2rem 1.5rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                                boxShadow: "-4px 0 32px rgba(129,22,70,0.18)",
                            }}
                            role="dialog"
                            aria-label="Menú de navegación"
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                                <span style={{ fontWeight: 800, color: "#811646", fontSize: "1.1rem" }}>Navegación</span>
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    aria-label="Cerrar menú"
                                    style={{ background: "none", border: "none", cursor: "pointer", color: "#811646" }}
                                >
                                    <X size={22} />
                                </button>
                            </div>
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                                    style={{
                                        padding: "0.875rem 1rem",
                                        borderRadius: "0.75rem",
                                        fontSize: "1rem",
                                        fontWeight: 600,
                                        color: "#4a2035",
                                        textDecoration: "none",
                                        border: "1px solid rgba(129,22,70,0.1)",
                                        transition: "all 0.2s",
                                        background: "rgba(235,225,231,0.5)",
                                    }}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                                <a href="#inscripcion" onClick={(e) => { e.preventDefault(); handleNavClick("#inscripcion"); }} className="btn-primary" style={{ justifyContent: "center" }}>
                                    Inscribirme
                                </a>
                                <a href="#contacto" onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }} className="btn-teal" style={{ justifyContent: "center" }}>
                                    <Phone size={16} /> Contacto
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 900px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
        </>
    );
}
