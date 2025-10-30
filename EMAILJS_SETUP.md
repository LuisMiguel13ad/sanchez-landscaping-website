# EmailJS Setup Guide for Sanchez Landscaping

## Overview
This website uses EmailJS to send consultation requests to your email and confirmation emails to clients.

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (or log in if you already have one)
3. The free tier includes 200 emails per month

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. **Save your Service ID** (you'll need this later)

## Step 3: Create Template for Consultation Requests
1. Go to **Email Templates**
2. Click **Create New Template**
3. Name it: "Consultation Request"
4. Use this template code:

```
Subject: New Consultation Request from {{from_name}}

Hi Team,

You have received a new consultation request from the Sanchez Landscaping website:

Contact Information:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}

Location:
- Address: {{address}}
- City/State/Zip: {{city_state_zip}}

Project Details:
- Service Requested: {{service_type}}
- Budget: {{budget}}
- Submission Date: {{submission_date}}

Project Description:
{{project_details}}

Please follow up with this potential client within 24 hours.

Best regards,
Sanchez Landscaping Website
```

5. In **EmailJS template variables**, make sure these are listed:
   - `to_email` (system variable - auto-filled)
   - `from_name`
   - `from_email`
   - `phone`
   - `address`
   - `city_state_zip`
   - `service_type`
   - `budget`
   - `project_details`
   - `submission_date`

6. **Save your Template ID** (you'll need this later)

## Step 4: Create Template for Client Confirmation
1. Click **Create New Template** again
2. Name it: "Client Confirmation"
3. Use this template code:

```
Subject: Thank You for Your Consultation Request - {{company_name}}

Hello {{to_name}},

Thank you for your interest in our landscaping and hardscaping services! We have received your consultation request for {{service_type}}.

We're excited to help transform your outdoor space!

What's Next?
Our team will review your request and get back to you within 24 hours to discuss your project in more detail.

Project Details:
- Service: {{service_type}}
- Submitted: {{submission_date}}

In the meantime, if you have any questions, please don't hesitate to reach out:

Phone: {{company_phone}}
Email: {{company_email}}

We look forward to working with you!

Best regards,
{{company_name}}
```

4. In **EmailJS template variables**, make sure these are listed:
   - `to_name` (system variable - auto-filled)
   - `to_email` (system variable - auto-filled)
   - `company_name`
   - `company_phone`
   - `company_email`
   - `service_type`
   - `submission_date`

5. **Save your Confirmation Template ID** (you'll need this later)

## Step 5: Get Your Public Key
1. Go to **Account** > **General**
2. Find your **Public Key** in the API Keys section
3. **Copy your Public Key**

## Step 6: Update Configuration
1. Open `src/lib/emailjs.ts` in your project
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  publicKey: 'your-actual-public-key',           // From Step 5
  serviceId: 'your-actual-service-id',           // From Step 2
  templateId: 'your-consultation-template-id',   // From Step 3
  confirmationTemplateId: 'your-confirmation-template-id', // From Step 4
  companyEmail: 'info@sanchezhardscaping.com',   // Already set
};
```

## Step 7: Test the Form
1. Run your development server: `npm run dev`
2. Go to your website's contact form
3. Fill out and submit a test form
4. Check that you receive:
   - Email at info@sanchezhardscaping.com with the consultation request
   - Email at the test email you entered with the confirmation

## Troubleshooting

### Emails not sending?
- Check browser console for error messages
- Verify all IDs and keys are correct in `emailjs.ts`
- Make sure your EmailJS service is properly connected
- Check EmailJS dashboard for delivery logs

### Want to use a different email address?
- Change `companyEmail` in `EMAILJS_CONFIG`
- Or update the `to_email` field in your EmailJS template settings

### Need to customize email templates?
- Log into EmailJS dashboard
- Edit your templates there
- Changes apply immediately

## Important Notes
- EmailJS free tier: 200 emails/month
- Paid plans start at $15/month for 1,000 emails
- All form data is sent securely through EmailJS
- Client confirmation is sent automatically after submission

## Support
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Support section in your dashboard

