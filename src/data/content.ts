import { ProfileInfo, ServiceLink, SocialLink, ContactInfo, ServiceCategory } from '@/types';

export const profileInfo: ProfileInfo = {
  name: "The Structure Police👮‍♀️",
  title: "Business Optimization Consultant",
  tagline: "17+ years Biz Optimisation Consultant Structure+Culture=💰 ⛳CEO @samogaconsult",
  bio: "With over 17 years of experience in business optimization, I help organizations build sustainable structures and cultures that drive profitability. As CEO of Samoga Consult, I specialize in transforming businesses through strategic planning, HR optimization, and operational excellence.",
  avatar: "/images/helen-avatar.jpg",
  experience: "17+ years"
};

export const contactInfo: ContactInfo = {
  email: "info@samogaconsult.com",
  whatsapp: "+2348036814141"
};

export const socialLinks: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:info@samogaconsult.com",
    icon: "Mail"
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/h4helen",
    icon: "Facebook"
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/H4orHelen",
    icon: "Instagram"
  }
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'consultation',
    name: 'Consultation & Coaching',
    description: 'One-on-one sessions and personalized business guidance',
    icon: 'Users'
  },
  {
    id: 'business-services',
    name: 'Business Services',
    description: 'HR, payroll, recruitment and operational services',
    icon: 'Briefcase'
  },
  {
    id: 'training',
    name: 'Training & Development',
    description: 'Staff training and professional development programs',
    icon: 'GraduationCap'
  },
  {
    id: 'documents',
    name: 'Business Documents',
    description: 'Templates, policies, and business documentation',
    icon: 'FileText'
  },
  {
    id: 'specialized',
    name: 'Specialized Programs',
    description: 'Niche offerings and specialized business solutions',
    icon: 'Target'
  },
  {
    id: 'communication',
    name: 'Communication',
    description: 'Direct contact and team communication',
    icon: 'MessageCircle'
  }
];

export const services: ServiceLink[] = [
  // Consultation & Coaching
  {
    id: 'book-appointment',
    title: 'Book an appointment',
    url: 'https://calendly.com/appointmentrequest/1hour?month=2023-03',
    category: 'consultation',
    featured: true
  },
  {
    id: 'speaking-event',
    title: 'Yes. I\'ll love to speak at your event',
    url: 'https://paystack.com/buy/speaker',
    category: 'consultation'
  },
  {
    id: 'business-clinic',
    title: 'Busi₦ess Clinic 🩺',
    url: 'https://paystack.com/buy/business-clinic-and-problem-solving-session-ctgaun',
    category: 'consultation',
    featured: true
  },
  {
    id: 'one-on-one',
    title: '1-on-1 with Me',
    url: 'https://paystack.com/buy/structurepolice',
    category: 'consultation'
  },
  {
    id: 'executive-coaching',
    title: 'Executive Coaching',
    url: 'https://paystack.com/buy/1-on-1coaching',
    category: 'consultation'
  },
  {
    id: 'one-on-one-session',
    title: 'One-on-one Session',
    url: 'https://paystack.com/buy/one-on-one-session-ziuumc',
    category: 'consultation'
  },

  // Business Services
  {
    id: 'after-hours',
    title: '5pm- 8am (After Hours Services)',
    url: 'https://paystack.com/buy/after-hours',
    category: 'business-services'
  },
  {
    id: 'engagement-fee',
    title: 'All Samoga services start here',
    description: 'Engagement commitment fee',
    url: 'https://paystack.com/buy/engagement-commitment-fee-wbwqbb',
    category: 'business-services'
  },
  {
    id: 'recruitment',
    title: 'Recruitment Request',
    url: 'https://paystack.com/buy/recruitment-engagement-tirgnl',
    category: 'business-services'
  },
  {
    id: 'payroll',
    title: 'Payroll Services',
    url: 'https://paystack.com/buy/payroll',
    category: 'business-services'
  },
  {
    id: 'pocket-hr',
    title: 'Pocket HR for your small business',
    url: 'https://paystack.com/buy/retainership',
    category: 'business-services'
  },

  // Training & Development
  {
    id: 'staff-training',
    title: 'Train up to 10 staff at ₦25,000 each',
    url: 'https://paystack.com/buy/launchpad-training-rrydmt',
    category: 'training',
    price: '₦25,000 per staff'
  },
  {
    id: 'hr-launchpad',
    title: 'HR LaunchPad',
    url: 'https://paystack.com/buy/hrlaunchpad-yfknss',
    category: 'training'
  },
  {
    id: 'monetize-knowledge',
    title: 'Mo₦etize your knowledge',
    url: 'https://paystack.com/buy/moetize-your-knowledge-fsyfeu',
    category: 'training'
  },
  {
    id: 'strategy-academy',
    title: 'Strategy & Business Academy',
    url: 'https://paystack.shop/sbacademy',
    category: 'training'
  },

  // Documents & Tools
  {
    id: 'diy-recruitment',
    title: 'DIY Recruitment Toolkit',
    url: 'https://paystack.com/buy/-diy-recruitment',
    category: 'documents'
  },
  {
    id: 'sop',
    title: 'SOP 🔄',
    description: 'Standard Operating Procedures',
    url: 'https://paystack.com/buy/standard-operating-procedures-',
    category: 'documents'
  },
  {
    id: 'new-employee-pack',
    title: 'New Employee Starter Pack',
    url: 'https://paystack.com/buy/10-documents-for-new-employees-dxnnpf',
    category: 'documents'
  },
  {
    id: 'salary-structure',
    title: 'Salary Structure',
    url: 'https://paystack.com/buy/salary-scale',
    category: 'documents'
  },
  {
    id: 'policies',
    title: 'Policies',
    url: 'https://paystack.shop/policies',
    category: 'documents'
  },
  {
    id: 'document-review',
    title: 'Document Review',
    url: 'https://paystack.com/buy/document-review-',
    category: 'documents'
  },
  {
    id: 'business-autopilot',
    title: 'Busi₦ess Autopilot',
    url: 'https://paystack.shop/business-autopilot',
    category: 'documents'
  },
  {
    id: 'job-descriptions',
    title: 'Job Descriptions',
    url: 'https://paystack.shop/jds',
    category: 'documents'
  },
  {
    id: 'staff-autopilot',
    title: 'Staff Autopilot Toolkit',
    url: 'https://paystack.com/buy/employee-management-documents-fnlbin',
    category: 'documents'
  },
  {
    id: 'employment-docs',
    title: 'Employment letter & Docs',
    url: 'https://paystack.com/buy/employment-letter',
    category: 'documents'
  },

  // Specialized Programs
  {
    id: 'japa-ceo',
    title: '"Japa" CEO bundle',
    url: 'https://www.coachli.co/samoga/meetings/japa/777',
    category: 'specialized'
  },
  {
    id: 'business-roundtable',
    title: 'Business Strategy Roundtable (BSRT)',
    url: 'https://paystack.com/buy/business-strategy-roundtable-bsrt-nwydvw',
    category: 'specialized'
  },
  {
    id: 'business-structure',
    title: 'Structure for your Business',
    url: 'https://paystack.com/buy/business-structure-pwcmrv',
    category: 'specialized'
  },
  {
    id: 'jobseeker-solutions',
    title: 'Jobseeker Solutions',
    url: 'https://paystack.com/buy/jobseeker-services-qluhaw',
    category: 'specialized'
  },
  {
    id: 'social-media-mindset',
    title: 'A Social Media State of Mind',
    url: 'https://paystack.com/buy/a-social-media-state-of-mind-uehzfg',
    category: 'specialized'
  },

  // Communication
  {
    id: 'chat-team',
    title: 'Chat with my team',
    url: 'https://wa.me/2348036814141',
    category: 'communication',
    featured: true
  },
  {
    id: 'paystack-catalogue',
    title: 'View my Paystack catalogue',
    url: 'https://paystack.shop/h4orhelen',
    category: 'communication'
  }
];
