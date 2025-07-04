'use client';

import React from 'react';
import { contactInfo } from '@/data/content';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <section>
        <h2 className="text-xl font-semibold mb-2">Information Collection and Use</h2>
        <p>The Structure Police collects information necessary to provide our business optimization and consulting services. This information is used solely to understand your business needs, deliver tailored consulting solutions, and improve our services.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Types of Data Collected</h2>
        <p>We collect several types of information, including:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Business contact information (name, email, phone number, company details)</li>
          <li>Business operational data necessary for consultations</li>
          <li>Communication records related to service delivery</li>
          <li>Financial information for billing purposes</li>
          <li>Website usage data to improve our online services</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Use of Data</h2>
        <p>We use your data for the following business purposes:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>To provide customized business consulting services</li>
          <li>To develop business optimization strategies specific to your needs</li>
          <li>To communicate about service delivery and project progress</li>
          <li>To process payments and maintain financial records</li>
          <li>To improve our consulting methodologies and service offerings</li>
          <li>To comply with legal obligations related to business services</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p>The security of your business information is paramount to us. We implement industry-standard security measures to protect your sensitive business data, including:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Secure data storage systems with restricted access</li>
          <li>Confidentiality agreements with all staff and contractors</li>
          <li>Regular security assessments of our data handling procedures</li>
          <li>Encryption for sensitive business information</li>
          <li>Secure communication channels for client interactions</li>
        </ul>
        <p className="mt-2">While we implement these safeguards, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
        <p>In delivering our business consulting services, we may engage trusted third-party service providers for specific functions:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Communication and project management tools</li>
          <li>Financial processing services</li>
          <li>Business analytics platforms</li>
          <li>Document management systems</li>
        </ul>
        <p className="mt-2">These service providers have access to your information only to perform specific tasks on our behalf and are obligated to protect your information and not disclose or use it for any other purpose.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Client Rights</h2>
        <p>As a client of The Structure Police, you have the following rights regarding your business information:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Access to the business data we hold about you</li>
          <li>Correction of inaccurate or incomplete information</li>
          <li>Deletion of your information (subject to legal retention requirements)</li>
          <li>Restriction of processing in certain circumstances</li>
          <li>Data portability for information you've provided to us</li>
          <li>Objection to processing based on legitimate interests</li>
        </ul>
        <p className="mt-2">To exercise any of these rights, please contact us using the information provided in the Contact section.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Cookie Policy</h2>
        <p>Our website uses cookies to enhance your browsing experience and help us understand how you interact with our business services online. We use:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Essential cookies necessary for website functionality</li>
          <li>Analytical cookies to understand visitor behavior and improve our service</li>
          <li>Preference cookies to remember your settings and provide personalized features</li>
        </ul>
        <p className="mt-2">You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of our website.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Business Consultation Data Handling</h2>
        <p>As a business optimization consultancy, we handle sensitive business information with the utmost care:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Business operational data is used only for the purpose of providing consulting services</li>
          <li>Client business information is compartmentalized and accessed only by team members directly involved in your project</li>
          <li>We maintain strict confidentiality protocols for all client business data</li>
          <li>Business analytics are anonymized when used for service improvement</li>
          <li>We retain business information only for the period necessary to fulfill our services and legal obligations</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Contact Information and Business Hours</h2>
        <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
        <p className="mt-2">
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

export default PrivacyPolicy;
