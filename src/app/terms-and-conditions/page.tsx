'use client';

import React from 'react';
import { contactInfo } from '@/data/content';

const TermsAndConditions = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p>The Structure Police provides business consulting services to clients under these terms and conditions. By engaging our services, you agree to comply with the following terms.</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Service Descriptions and Terms</h2>
        <p>The Structure Police provides various business consulting services. Each service type has specific terms detailed as follows:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Business Clinic:</strong> Focuses on diagnostic and problem-solving sessions. Clients must provide accurate business details.</li>
          <li><strong>1-on-1 Consultation:</strong> Involves personalized strategy sessions. Clients should prepare relevant business topics for discussion.</li>
          <li><strong>Executive Coaching:</strong> Dedicated to leadership development. Sessions are tailor-made based on client needs.</li>
          <li><strong>HR Services:</strong> Custom HR solutions tailored for client operations. Requires client collaboration for data provision.</li>
          <li><strong>Training & Development:</strong> Offers staff and management training programs. Scheduled sessions require 2-week notice for rescheduling.</li>
          <li><strong>Custom Solutions:</strong> Bespoke business solutions, fully customized to client requirements. Non-refundable due to tailored service nature.</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Client Responsibilities</h2>
        <p>Clients are responsible for providing accurate and necessary information required for effective service delivery. Cooperation and timely communication are essential for successful outcomes. Clients must:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Provide accurate business information for assessment</li>
          <li>Respond to information requests in a timely manner</li>
          <li>Review and provide feedback on proposed solutions</li>
          <li>Implement recommendations as agreed upon</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Payment Terms</h2>
        <p>All payments must be completed prior to commencement of services. Delayed payments may affect service delivery. We accept various payment methods through our secure payment processor.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Full payment is required before service commencement</li>
          <li>Custom service packages may require deposit payments</li>
          <li>Late payments may result in service delays</li>
          <li>Pricing is subject to change with notice</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Intellectual Property and Confidentiality</h2>
        <p>All client data is confidential and protected under our privacy policy. Service materials are proprietary unless otherwise stated. Both parties agree to:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Maintain confidentiality of all business information shared</li>
          <li>Respect intellectual property rights of all materials</li>
          <li>Not disclose sensitive information to third parties</li>
          <li>Use provided materials only for intended purposes</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Liability Limitations</h2>
        <p>While we strive to provide excellent service, The Structure Police cannot guarantee specific business outcomes. Our liability is limited to:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>The value of services provided</li>
          <li>Direct damages resulting from negligence</li>
          <li>Excludes indirect, consequential, or special damages</li>
          <li>Force majeure events beyond reasonable control</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Dispute Resolution</h2>
        <p>Any disputes arising from our services will be resolved through negotiation and mediation before proceeding to formal legal channels. All legal matters are subject to the laws of Nigeria.</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Termination</h2>
        <p>Either party may terminate services with proper notice. Refund eligibility for terminated services is subject to our Refund Policy. Termination does not release clients from payment obligations for services already rendered.</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Data Protection</h2>
        <p>Client data is handled according to our Privacy Policy. We implement appropriate security measures to protect your business information and comply with relevant data protection regulations.</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Contact Information and Business Hours</h2>
        <p>
          <strong>Email:</strong> {contactInfo.email}<br />
          <strong>WhatsApp:</strong> {contactInfo.whatsapp}<br />
          <strong>Book a Consultation:</strong> <a href="https://calendly.com/appointmentrequest/1hour?month=2023-03" className="text-blue-500 underline">Calendly Booking</a><br />
        </p>
        <p className="mt-2"><strong>Business Hours:</strong></p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday: 10:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
          <li>After Hours: 5:00 PM - 8:00 AM (Special after-hours services available)</li>
        </ul>
      </section>
    </div>
  );
};

export default TermsAndConditions;
