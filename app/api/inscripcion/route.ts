import { NextResponse } from "next/server";
import { getGoogleSheets } from "@/lib/google";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const sheetId = process.env.GOOGLE_SHEET_ID;

        if (!sheetId) {
            return NextResponse.json({ error: "Missing GOOGLE_SHEET_ID in environment" }, { status: 500 });
        }

        const sheets = getGoogleSheets();

        // Formatear la fecha y hora de inscripción
        const timestamp = format(new Date(), "dd/MM/yyyy HH:mm:ss", { locale: es });

        // Mapear los datos que vienen del formulario a celdas de Sheets
        // Columnas esperadas en 'Respuestas': Fecha, Nombre, Dirección, Celular, Perspectiva, Noción, Interés (Al término), Sugerencia
        const row = [
            timestamp,
            body.nombre || "",
            body.direccion || "",
            body.celular || "",
            body.perspectiva || "",
            body.nocion || "",
            body.interes || "",
            body.sugerencia || ""
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            range: "Respuestas!A:H", // Nombre de la hoja y rango a escribir
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [row],
            },
        });

        return NextResponse.json({ success: true });
    } catch (e) {
        console.error("Error creating Google Sheet entry", e);
        return NextResponse.json({ error: e instanceof Error ? e.message : "Error al enviar la inscripción" }, { status: 500 });
    }
}
