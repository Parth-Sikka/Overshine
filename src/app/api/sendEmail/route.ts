import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const { firstName, lastName, email, phoneNumber, message, ...data } =
            await request.json();
        const selectedServices = Object.keys(data);
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SENDING_MAILING_USERNAME,
                pass: process.env.SENDING_MAILING_PASSWORD,
            },
        });
        const mailOptions = {
            from: process.env.MAILING_USERNAME,
            to: process.env.RECEIVING_MAIL,
            subject: "New Message Recevied!",
            html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* General styles for the email */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border: 1px solid #dddddd;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #333333;
        }
        p {
            color: #666666;
            line-height: 1.5;
        }
        .details {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
        }
        .detail-item {
            margin-bottom: 10px;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #999999;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>New Contact Form Submission</h2>
        <p>Hello,</p>
        <p>You have received a new submission from the contact form on your website. Here are the details:</p>
        
        <div class="details">
            <div class="detail-item"><strong>First Name:</strong> ${firstName}</div>
            <div class="detail-item"><strong>Last Name:</strong> ${lastName}</div>
            <div class="detail-item"><strong>Email:</strong> ${email}</div>
            <div class="detail-item"><strong>Phone Number:</strong> ${phoneNumber}</div>
            <div class="detail-item"><strong>Message:</strong></div>
            <p>${message}</p>
            <div class="detail-item"><strong>Selected Services:</strong> ${selectedServices.join(", ")}</div>
        </div>
        
        <p>Please reach out to the user as soon as possible to follow up on their request.</p>

        <div class="footer">
            <p>Thank you!</p>
        </div>
    </div>
</body>
</html>
        `,
        };
        await transport.sendMail(mailOptions);
        return NextResponse.json(
            { message: "Mail sent successfully" },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { message: "Error in sending mail", error },
            { status: 500 }
        );
    }
}
