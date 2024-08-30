import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailToPerformatti } from '@/app/(email-templates)/email-to-performatti';
import EmailToUser from '@/app/(email-templates)/email-to-user';
import { google } from 'googleapis';
import { format } from 'date-fns';

const resend = new Resend(process.env.EMAIL_API_KEY as string);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!process.env.NEXT_TO_EMAIL_PERFORMATTI) throw new Error("Endereço de e-mail da Performatti não informado");
    // Envio dos e-mails
    await resend.emails.send({
      from: `${process.env.NEXT_FROM_NAME} <${process.env.NEXT_FROM_EMAIL}>`,
      to: [process.env.NEXT_TO_EMAIL_PERFORMATTI],
      subject: 'Novo Contato Recebido - Performatti',
      react: EmailToPerformatti({
        name: data.name,
        phone: data.phone,
        message: data.message,
        company: data.company,
        corporativeEmail: data.email,
        userFirstName: data.name.split(' ')[0],
        fieldActivity: data.fieldActivity,
        collaboratorsNumber: data.collaboratorsNumber,
      }),
    });

    await resend.emails.send({
      from: `${process.env.NEXT_FROM_NAME} <${process.env.NEXT_FROM_EMAIL}>`,
      to: [data.email],
      subject: 'Obrigado por Entrar em Contato - Performatti',
      react: EmailToUser({
        userFirstName: data.name.split(' ')[0],
      }),
    });

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_CLIENT_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets'
      ]
    })

    const sheets = google.sheets({
      auth,
      version: 'v4'
    })

    const newDateFormatted = format(new Date(), 'dd-MM-yyyy');

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:H1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            data.name,
            data.email,
            data.phone,
            data.company,
            data.fieldActivity,
            data.collaboratorsNumber,
            data.message,
            newDateFormatted
          ]
        ]
      }
    })

    return NextResponse.json({ message: 'E-mail enviado com sucesso e planilha atualizada!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail ou atualizar a planilha:', error);
    return NextResponse.json({ error: 'Erro ao enviar o e-mail ou atualizar a planilha.' }, { status: 500 });
  }
}
