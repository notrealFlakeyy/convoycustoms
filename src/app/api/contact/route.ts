import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  locale?: "sv" | "fi";
};

function missingSmtpConfig() {
  return (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_PORT ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  );
}

export async function POST(request: Request) {
  try {
    if (missingSmtpConfig()) {
      return NextResponse.json(
        { error: "SMTP settings are missing" },
        { status: 500 },
      );
    }

    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const locale = body.locale === "fi" ? "fi" : "sv";

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const port = Number(process.env.SMTP_PORT);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject =
      locale === "fi"
        ? `Uusi yhteydenottopyynto: ${name}`
        : `Ny kontaktforfragan: ${name}`;

    const text = [
      `Namn: ${name}`,
      `E-post: ${email}`,
      "",
      "Meddelande:",
      message,
    ].join("\n");

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to: "info@convoycustoms.fi",
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Mail send failed" }, { status: 500 });
  }
}
