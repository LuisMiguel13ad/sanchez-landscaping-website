// Webhook configuration for lead connector
export const WEBHOOK_CONFIG = {
  url: 'https://services.leadconnectorhq.com/hooks/xxq6v6nCypumXhCHTeFc/webhook-trigger/8fefa634-2b4f-43fa-a2a3-cf2d57efcc86',
};

// Send form data to webhook
export const sendFormEmail = async (formData: {
  name: string;
  phone: string;
  email: string;
  streetAddress: string;
  postalCode: string;
  state: string;
  projectType: string;
  budget: string;
  details: string;
}) => {
  try {
    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      streetAddress: formData.streetAddress,
      postalCode: formData.postalCode,
      state: formData.state,
      projectType: formData.projectType,
      budget: formData.budget,
      details: formData.details,
      source: 'Sanchez Landscaping Website',
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(WEBHOOK_CONFIG.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log('Form submitted successfully:', response);
      return { success: true, result: response };
    } else {
      console.error('Webhook request failed:', response.status, response.statusText);
      return { success: false, error: `HTTP ${response.status}: ${response.statusText}` };
    }
  } catch (error) {
    console.error('Failed to send form data:', error);
    return { success: false, error: error };
  }
};

// Initialize function (kept for compatibility)
export const initializeEmailJS = () => {
  // No initialization needed for webhook
  console.log('Webhook integration ready');
};
