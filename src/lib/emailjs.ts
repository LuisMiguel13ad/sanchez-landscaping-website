import emailjs from '@emailjs/browser';

// EmailJS Configuration
// TODO: Replace these with your actual EmailJS credentials
// Get them from: https://www.emailjs.com/
export const EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
  serviceId: 'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID', // Template for sending to your email
  confirmationTemplateId: 'YOUR_CONFIRMATION_TEMPLATE_ID', // Template for confirmation to client
  companyEmail: 'info@sanchezhardscaping.com', // Your company email
};

// Initialize EmailJS
export const initializeEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    console.log('EmailJS initialized successfully');
  } else {
    console.warn('EmailJS not configured. Please add your credentials to src/lib/emailjs.ts');
  }
};

// Send form data via EmailJS
export const sendFormEmail = async (formData: {
  name: string;
  phone: string;
  email: string;
  streetAddress: string;
  postalCode: string;
  state: string;
  servicesRequested: string;
  budget: string;
  details: string;
}) => {
  try {
    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
      console.error('EmailJS not configured');
      return { 
        success: false, 
        error: 'Email service not configured. Please contact the website administrator.' 
      };
    }

    // Format service type for display
    const formatServiceType = (type: string) => {
      return type.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    };

    // Format budget for display
    const formatBudget = (budget: string) => {
      const budgetMap: { [key: string]: string } = {
        'under-5k': 'Under $5,000',
        '5k-10k': '$5,000 - $10,000',
        '10k-25k': '$10,000 - $25,000',
        '25k-50k': '$25,000 - $50,000',
        '50k-100k': '$50,000 - $100,000',
        'over-100k': 'Over $100,000',
        'not-sure': 'Not Sure'
      };
      return budgetMap[budget] || budget;
    };

    // Prepare template parameters for your email
    const templateParams = {
      to_email: EMAILJS_CONFIG.companyEmail,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      address: formData.streetAddress,
      city_state_zip: `${formData.state} ${formData.postalCode}`,
      service_type: formatServiceType(formData.servicesRequested),
      budget: formatBudget(formData.budget),
      project_details: formData.details,
      submission_date: new Date().toLocaleString('en-US', { 
        dateStyle: 'full', 
        timeStyle: 'short' 
      }),
    };

    // Send email to your company
    console.log('Sending consultation request to company...');
    const emailResult = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('Email sent to company:', emailResult);

    // Prepare confirmation email template parameters
    const confirmationParams = {
      to_name: formData.name,
      to_email: formData.email,
      company_name: 'Sanchez Landscaping & Hardscaping',
      company_phone: '(856) 628-0183',
      company_email: 'info@sanchezhardscaping.com',
      service_type: formatServiceType(formData.servicesRequested),
      submission_date: new Date().toLocaleString('en-US', { 
        dateStyle: 'full', 
        timeStyle: 'short' 
      }),
    };

    // Send confirmation email to client
    console.log('Sending confirmation email to client...');
    const confirmationResult = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.confirmationTemplateId,
      confirmationParams
    );

    console.log('Confirmation email sent:', confirmationResult);

    return { 
      success: true, 
      emailResult: emailResult,
      confirmationResult: confirmationResult 
    };

  } catch (error) {
    console.error('Failed to send emails:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
};
