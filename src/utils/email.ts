import { CartItem, ContactInfo } from '../types';

export const sendInvoiceEmail = async (
  contactInfo: ContactInfo,
  cartItems: CartItem[],
  total: number
): Promise<boolean> => {
  // Simulate email sending - in production, this would connect to an email service
  console.log('Sending invoice email to:', contactInfo.email);
  console.log('Invoice details:', {
    customer: contactInfo,
    items: cartItems,
    total: total
  });

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Simulate success (in production, handle actual email service response)
  return Math.random() > 0.1; // 90% success rate simulation
};

export const subscribeToNewsletter = async (email: string): Promise<boolean> => {
  console.log('Newsletter subscription for:', email);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return Math.random() > 0.05; // 95% success rate simulation
};