"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, UserCircle, BookOpen, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const PHONES = [
    { number: "7841055959", display: "784 105 5959" },
    { number: "7841038561", display: "784 103 8561" },
    { number: "7841242795", display: "784 124 2795" },
];

const formSchema = z.object({
    nombre: z.string().min(3, "El nombre completo es requerido"),
    direccion: z.string().min(5, "La dirección es requerida"),
    celular: z.string().min(10, "Ingrese un celular válido (ej. 7841000000)"),
    perspectiva: z.string().min(5, "Por favor, indique su perspectiva"),
    nocion: z.enum(["Sí", "No", "Un poco"] as const, { error: "Por favor indique una opción" }),
    interes: z.string().min(5, "Por favor, indique qué desea saber"),
    sugerencia: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function Registration() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nombre: "",
            direccion: "",
            celular: "",
            perspectiva: "",
            nocion: undefined,
            interes: "",
            sugerencia: "",
        },
    });

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/inscripcion", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            if (!res.ok) throw new Error(result.error || "Ocurrió un error");

            toast.success("¡Inscripción recibida correctamente!", {
                description: "Nos pondremos en contacto contigo pronto.",
            });
            form.reset();
        } catch (error) {
            toast.error("Error al enviar", {
                description: error instanceof Error ? error.message : "Revisa tu conexión o intenta más tarde.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

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

                    {/* Right — Functional Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card"
                        style={{ padding: "2rem" }}
                    >
                        <div style={{ background: "rgba(129,22,70,0.05)", border: "1px solid rgba(129,22,70,0.15)", borderRadius: "0.875rem", padding: "0.875rem 1rem", marginBottom: "1.5rem", textAlign: "center" }}>
                            <div style={{ fontSize: "0.75rem", color: "#811646", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                Formulario de Pre-registro en Línea
                            </div>
                            <div style={{ fontSize: "0.75rem", color: "#5a3345", marginTop: "0.2rem" }}>
                                Llena los datos y recibirás confirmación para llevar tus copias
                            </div>
                        </div>

                        <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

                            {/* Nombre completo */}
                            <div>
                                <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#3a1d2b", marginBottom: "0.4rem" }}>
                                    <UserCircle size={14} color="#811646" /> Nombre completo*
                                </label>
                                <input
                                    {...form.register("nombre")}
                                    placeholder="Ej. María López García"
                                    style={{ width: "100%", padding: "0.625rem 0.875rem", border: "1.5px solid rgba(129,22,70,0.2)", borderRadius: "0.625rem", background: "white", fontSize: "0.875rem", color: "#4a2035", outline: "none" }}
                                />
                                {form.formState.errors.nombre && <span style={{ fontSize: "0.7rem", color: "#d93025", marginTop: "0.2rem", display: "block" }}>{form.formState.errors.nombre.message}</span>}
                            </div>

                            {/* Dirección */}
                            <div>
                                <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#3a1d2b", marginBottom: "0.4rem" }}>
                                    <MapPin size={14} color="#811646" /> Dirección*
                                </label>
                                <input
                                    {...form.register("direccion")}
                                    placeholder="Ej. Calle Principal #123, Col. Centro"
                                    style={{ width: "100%", padding: "0.625rem 0.875rem", border: "1.5px solid rgba(129,22,70,0.2)", borderRadius: "0.625rem", background: "white", fontSize: "0.875rem", color: "#4a2035", outline: "none" }}
                                />
                                {form.formState.errors.direccion && <span style={{ fontSize: "0.7rem", color: "#d93025", marginTop: "0.2rem", display: "block" }}>{form.formState.errors.direccion.message}</span>}
                            </div>

                            {/* Cel */}
                            <div>
                                <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#3a1d2b", marginBottom: "0.4rem" }}>
                                    <Phone size={14} color="#811646" /> Celular*
                                </label>
                                <input
                                    {...form.register("celular")}
                                    placeholder="Ej. 784 100 0000"
                                    style={{ width: "100%", padding: "0.625rem 0.875rem", border: "1.5px solid rgba(129,22,70,0.2)", borderRadius: "0.625rem", background: "white", fontSize: "0.875rem", color: "#4a2035", outline: "none" }}
                                />
                                {form.formState.errors.celular && <span style={{ fontSize: "0.7rem", color: "#d93025", marginTop: "0.2rem", display: "block" }}>{form.formState.errors.celular.message}</span>}
                            </div>

                            {/* Menores de edad Notice */}
                            <div style={{ padding: "0.75rem", background: "rgba(66,179,172,0.1)", border: "1px dashed rgba(66,179,172,0.4)", borderRadius: "0.5rem", textAlign: "left" }}>
                                <p style={{ fontSize: "0.75rem", color: "#2B7A75", margin: 0, lineHeight: 1.4 }}>
                                    <strong style={{ display: "block", marginBottom: "0.2rem" }}>Importante:</strong>
                                    En caso de ser menor de edad se atiende a partir de los 10 años. Se debe anexar copia de la credencial de elector del tutor al momento del registro físico.
                                </p>
                            </div>

                            {/* Perspectiva */}
                            <div>
                                <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#3a1d2b", marginBottom: "0.4rem" }}>
                                    <BookOpen size={14} color="#811646" /> ¿Cuál es su perspectiva del curso?*
                                </label>
                                <textarea
                                    {...form.register("perspectiva")}
                                    placeholder="Escriba su respuesta..."
                                    rows={2}
                                    style={{ width: "100%", padding: "0.625rem 0.875rem", border: "1.5px solid rgba(129,22,70,0.2)", borderRadius: "0.625rem", background: "white", fontSize: "0.875rem", color: "#4a2035", outline: "none", resize: "none" }}
                                />
                                {form.formState.errors.perspectiva && <span style={{ fontSize: "0.7rem", color: "#d93025", marginTop: "0.2rem", display: "block" }}>{form.formState.errors.perspectiva.message}</span>}
                            </div>

                            {/* Noción */}
                            <div>
                                <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#3a1d2b", marginBottom: "0.4rem", textAlign: "left" }}>
                                    <MessageCircle size={14} color="#811646" /> <span>¿Tiene alguna noción del idioma tutunakú?*</span>
                                </label>
                                <div style={{ display: "flex", gap: "0.625rem" }}>
                                    {(["Sí", "No", "Un poco"] as const).map((opcion) => (
                                        <button
                                            key={opcion}
                                            type="button"
                                            onClick={() => form.setValue("nocion", opcion, { shouldValidate: true })}
                                            style={{
                                                flex: 1, padding: "0.5rem",
                                                border: form.watch("nocion") === opcion ? "2px solid #811646" : "1.5px solid rgba(129,22,70,0.2)",
                                                borderRadius: "0.5rem",
                                                background: form.watch("nocion") === opcion ? "rgba(129,22,70,0.08)" : "white",
                                                textAlign: "center", fontSize: "0.875rem",
                                                fontWeight: form.watch("nocion") === opcion ? 700 : 500,
                                                color: form.watch("nocion") === opcion ? "#811646" : "#7a4f62",
                                                cursor: "pointer"
                                            }}
                                        >
                                            {opcion}
                                        </button>
                                    ))}
                                </div>
                                {form.formState.errors.nocion && <span style={{ fontSize: "0.7rem", color: "#d93025", marginTop: "0.2rem", display: "block" }}>{form.formState.errors.nocion.message}</span>}
                            </div>

                            {/* Interés al término */}
                            <div>
                                <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#3a1d2b", marginBottom: "0.4rem", textAlign: "left" }}>
                                    <MessageCircle size={14} color="#811646" /> <span>¿Qué es lo que desea saber al término del curso?*</span>
                                </label>
                                <textarea
                                    {...form.register("interes")}
                                    placeholder="Escriba su respuesta..."
                                    rows={2}
                                    style={{ width: "100%", padding: "0.625rem 0.875rem", border: "1.5px solid rgba(129,22,70,0.2)", borderRadius: "0.625rem", background: "white", fontSize: "0.875rem", color: "#4a2035", outline: "none", resize: "none" }}
                                />
                                {form.formState.errors.interes && <span style={{ fontSize: "0.7rem", color: "#d93025", marginTop: "0.2rem", display: "block" }}>{form.formState.errors.interes.message}</span>}
                            </div>

                            {/* Sugerencia */}
                            <div>
                                <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#3a1d2b", marginBottom: "0.4rem", textAlign: "left" }}>
                                    <MessageCircle size={14} color="#811646" /> <span>¿Alguna sugerencia sobre el curso taller? (Opcional)</span>
                                </label>
                                <textarea
                                    {...form.register("sugerencia")}
                                    placeholder="Opcional..."
                                    rows={2}
                                    style={{ width: "100%", padding: "0.625rem 0.875rem", border: "1.5px solid rgba(129,22,70,0.2)", borderRadius: "0.625rem", background: "white", fontSize: "0.875rem", color: "#4a2035", outline: "none", resize: "none" }}
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    width: "100%",
                                    padding: "0.875rem",
                                    borderRadius: "0.75rem",
                                    background: isSubmitting ? "gray" : "#811646",
                                    color: "white",
                                    border: "none",
                                    fontWeight: 700,
                                    fontSize: "0.95rem",
                                    cursor: isSubmitting ? "not-allowed" : "pointer",
                                    letterSpacing: "0.01em",
                                    marginTop: "0.25rem",
                                }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" /> Procesando...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} /> Enviar pre-registro
                                    </>
                                )}
                            </button>

                            <p style={{ fontSize: "0.75rem", color: "#7a4f62", textAlign: "center", lineHeight: 1.5 }}>
                                Al enviar asumes la responsabilidad de acudir a las instalaciones con tus copias para formalizar la inscripción.
                            </p>
                        </form>
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
