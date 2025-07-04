'use client';

import React from 'react';
import { contactInfo } from '@/data/content';

const RefundPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>
      <section>
        <h2 className="text-xl font-semibold mb-2">Refund Conditions</h2>
        <p>Refunds for consulting services are subject to the following conditions based on service type:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Business Clinic:</strong> Refund requests must be made within 7 days of service delivery. A 10% processing fee applies.</li>
          <li><strong>1-on-1 Consultation:</strong> Non-refundable if canceled less than 48 hours before the scheduled session.</li>
          <li><strong>Executive Coaching:</strong> Refund eligible only upon service plan change, within 14 days notice.</li>
          <li><strong>HR Services:</strong> Non-refundable after engagement due to customization.</li>
          <li><strong>Training & Development:</strong> Cancellations 2 weeks prior to scheduled training incur a 25% fee.</li>
          <li><strong>Custom Solutions:</strong> Non-refundable due to tailored service creation.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Cancellation Terms</h2>
        <p>Clients must communicate cancellations at least 48 hours prior to the scheduled service time to be eligible for a refund. Non-refundable items include deposits and customized service fees.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Process for Requesting Refunds</h2>
        <p>To request a refund, please contact us via email with your service details and the reason for the refund request. Our team will review your request and respond within 5 business days.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Contact Information and Business Hours</h2>
        <p>
          <strong>Email:</strong> {contactInfo.email}<br />
          <strong>WhatsApp:</strong> {contactInfo.whatsapp}<br />
          <strong>Book a Consultation:</strong> <a href="https://calendly.com/appointmentrequest/1hour?month=2023-03" className="text-blue-500 underline">Calendly Booking</a><br />
          <strong>Business Hours:</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 10:00 AM - 4:00 PM</li>
            <li>Sunday: Closed</li>
            <li>After Hours: 5:00 PM - 8:00 AM (Special after-hours services available)</li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;

