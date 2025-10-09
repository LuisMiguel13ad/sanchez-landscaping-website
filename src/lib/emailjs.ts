// Webhook configuration for lead connector
export const WEBHOOK_CONFIG = {
  url: 'https://services.leadconnectorhq.com/hooks/xxq6v6nCypumXhCHTeFc/webhook-trigger/11dd5b37-e353-4fc9-ab95-a20b33a4a637',
};

// Send form data to webhook
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
    const payload = {
      // Contact Information
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      
      // Address Information
      address: formData.streetAddress,
      zip: formData.postalCode,
      state: formData.state,
      
      // Service Information
      service_type: formData.servicesRequested,
      budget_range: formData.budget,
      project_description: formData.details,
      
      // Meta Information
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
