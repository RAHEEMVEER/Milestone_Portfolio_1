import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface Form{
  name: string,
  email: string,
  mobile: number,
  address: string,
  message: string
}

export async function POST(req: NextRequest) {
  try {
    const { name, email ,mobile, address, message, }:Form = await req.json();
    const gmailAddress = "abdulraheem77557@gmail.com";
    const appPassword = "hnrs xffm nnbo lgbz";

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailAddress, 
        pass: appPassword,
      },
    });

    const mailOptions = {
      from:gmailAddress,
      to: gmailAddress,
      subject: `New Contact Form Submission from ${name}`,
      text: `Hey RAHEEM!\nYou Have Received A New Message From Your Website.\n\n\nName => ${name}\n\nEmail => ${email}\n\nMobile => ${mobile}\n\nAddress => ${address}'\n\nMessage => ${message}`,
      replyTo: email, 
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
