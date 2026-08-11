import type { BookingFormData, ContactFormData } from '@/types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '/api';

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE}${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || 'Request failed');
  }

  return res.json();
}

export const api = {
  createBooking: (data: BookingFormData) =>
    request<{ id: string; message: string }>('/bookings', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  createContact: (data: ContactFormData) =>
    request<{ id: string; message: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  getPortfolio: () =>
    request<unknown[]>('/portfolio', { method: 'GET' }),

  getServices: () =>
    request<unknown[]>('/services', { method: 'GET' }),
};
