import type { EmailRecipient } from '@resend/node'

const RESEND_API_URL = 'https://api.resend.com/emails'

async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string | EmailRecipient | (string | EmailRecipient)[]
  subject: string
  html: string
}) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.EMAIL_FROM

  if (!apiKey || !from) {
    console.warn('Email not sent: RESEND_API_KEY or EMAIL_FROM not configured')
    return
  }

  try {
    await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        html,
      }),
    })
  } catch (error) {
    console.error('Error sending email:', error)
  }
}

export async function sendCandidateApplicationNotification(args: {
  fullName: string
  email: string
  phone: string
  country: string
  profession: string
  cvUrl: string
  certificatesUrl?: string | null
  jobId?: string | null
}) {
  const {
    fullName,
    email,
    phone,
    country,
    profession,
    cvUrl,
    certificatesUrl,
    jobId,
  } = args

  const subject = `New candidate application from ${fullName}`
  const html = `
    <h2>New Candidate Application</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Country of residence:</strong> ${country}</p>
    <p><strong>Profession:</strong> ${profession}</p>
    ${jobId ? `<p><strong>Applied for Job ID:</strong> ${jobId}</p>` : ''}
    <p><strong>CV:</strong> <a href="${cvUrl}">${cvUrl}</a></p>
    ${
      certificatesUrl
        ? `<p><strong>Certificates:</strong> <a href="${certificatesUrl}">${certificatesUrl}</a></p>`
        : ''
    }
  `

  await sendEmail({
    to: process.env.CONTACT_RECIPIENT_EMAIL || process.env.EMAIL_FROM!,
    subject,
    html,
  })
}

export async function sendEmployerRequestNotification(args: {
  companyName: string
  contactPerson: string
  email: string
  phone: string
  jobRole: string
  numberOfStaff: number
  location: string
  additionalInfo?: string | null
}) {
  const {
    companyName,
    contactPerson,
    email,
    phone,
    jobRole,
    numberOfStaff,
    location,
    additionalInfo,
  } = args

  const subject = `New employer staffing request from ${companyName}`
  const html = `
    <h2>New Employer Request</h2>
    <p><strong>Company:</strong> ${companyName}</p>
    <p><strong>Contact person:</strong> ${contactPerson}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Job role needed:</strong> ${jobRole}</p>
    <p><strong>Number of staff:</strong> ${numberOfStaff}</p>
    <p><strong>Location:</strong> ${location}</p>
    ${
      additionalInfo
        ? `<p><strong>Additional information:</strong><br />${additionalInfo.replace(/\n/g, '<br />')}</p>`
        : ''
    }
  `

  await sendEmail({
    to: process.env.CONTACT_RECIPIENT_EMAIL || process.env.EMAIL_FROM!,
    subject,
    html,
  })
}

export async function sendContactSubmissionNotification(args: {
  name: string
  email: string
  phone?: string | null
  subject: string
  message: string
}) {
  const { name, email, phone, subject, message } = args

  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong><br />${message.replace(/\n/g, '<br />')}</p>
  `

  await sendEmail({
    to: process.env.CONTACT_RECIPIENT_EMAIL || process.env.EMAIL_FROM!,
    subject: `Contact form: ${subject}`,
    html,
  })
}

