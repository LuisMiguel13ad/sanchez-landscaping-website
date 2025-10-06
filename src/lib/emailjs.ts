import emailjs from '@emailjs/browser';

// EmailJS configuration
// You'll need to get these from your EmailJS account
export const EMAILJS_CONFIG = {
  // These are placeholder values - you'll need to replace with your actual EmailJS credentials
  serviceId: 'service_xxxxxxx', // Your EmailJS service ID
  templateId: 'template_xxxxxxx', // Your EmailJS template ID  
  publicKey: 'xxxxxxxxxxxxxxx', // Your EmailJS public key
  toEmail: 'dcsanchez75@gmail.com', // Your business email
};

// Initialize EmailJS
export const initializeEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};

// Send form email
export const sendFormEmail = async (formData: {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  budget: string;
  details: string;
}) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      project_type: formData.projectType,
      budget: formData.budget,
      details: formData.details,
      to_email: EMAILJS_CONFIG.toEmail,
    };

    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('Email sent successfully:', result);
    return { success: true, result };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
};
