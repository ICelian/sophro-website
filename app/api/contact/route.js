import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const data = await req.json();
  const { nom, prenom, email, telephone, message } = data;

  try {
    const { data: mailData, error } = await resend.emails.send({
      from: 'Éveil à soi <contact@mailer.xn--eveil--soi-m4a.com>', 
      to: ['maria.lopez3101@laposte.net'],
      subject: `Nouveau message de ${prenom} ${nom}`,
      html: `
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Prénom:</strong> ${prenom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
      reply_to: email,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}