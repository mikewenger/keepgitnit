import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, business, businessType, message } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  await resend.emails.send({
    from: "KeepGitnIt <noreply@keepgitnit.com>",
    to: "mike@mikewenger.us",
    replyTo: email,
    subject: `New inquiry from ${name}${business ? ` — ${business}` : ""}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${business ? `<p><strong>Business:</strong> ${business}</p>` : ""}
      ${businessType ? `<p><strong>Industry:</strong> ${businessType}</p>` : ""}
      ${message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>` : ""}
    `,
  });

  return NextResponse.json({ ok: true });
}
