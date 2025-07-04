import { ProfileInfo, ServiceLink, SocialLink, ContactInfo, ServiceCategory } from '@/types';

export const profileInfo: ProfileInfo = {
  name: "The Structure Police👮‍♀️",
  title: "Business Optimization Consultant",
  tagline: "17+ years Biz Optimisation Consultant Structure+Culture=💰 ⛳CEO @samogaconsult",
  bio: "With over 17 years of experience in business optimization, I help organizations build sustainable structures and cultures that drive profitability. As CEO of Samoga Consult, I specialize in transforming businesses through strategic planning, HR optimization, and operational excellence.",
  avatar: "/images/profile-image.jpg",
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
    icon: 'Users',
    image: '/images/profile-image.jpg'
  },
  {
    id: 'business-services',
    name: 'Business Services',
    description: 'HR, payroll, recruitment and operational services',
    icon: 'Briefcase',
    image: '/images/4fc4bd84-b07c-441e-99e1-9d1926d29a46_4q279oac014vsua99o58.jpeg'
  },
  {
    id: 'training',
    name: 'Training & Development',
    description: 'Staff training and professional development programs',
    icon: 'GraduationCap',
    image: '/images/61a9798e-0dce-4f5e-9acb-8f7d0cd09434_image.jpeg'
  },
  {
    id: 'documents',
    name: 'Business Documents',
    description: 'Templates, policies, and business documentation',
    icon: 'FileText',
    image: '/images/ldnHxl4pRcCwcnqBbU5c_image'
  },
  {
    id: 'specialized',
    name: 'Specialized Programs',
    description: 'Niche offerings and specialized business solutions',
    icon: 'Target',
    image: '/images/s4K7nECQT2qVl2ofuRnH_image'
  },
  {
    id: 'communication',
    name: 'Communication',
    description: 'Direct contact and team communication',
    icon: 'MessageCircle',
    image: '/images/profile-image.jpg'
  }
];

export const services: ServiceLink[] = [
  // Consultation & Coaching
  {
    id: 'book-appointment',
    title: 'Book an appointment',
    url: 'https://calendly.com/appointmentrequest/1hour?month=2023-03',
    category: 'consultation',
    featured: true,
    image: '/images/dSpuYAQ1KamVCvosL5w9_image',
    showProfile: true,
    description: 'Schedule a one-on-one consultation session'
  },
  {
    id: 'speaking-event',
    title: 'Yes. I\'ll love to speak at your event',
    url: 'https://paystack.com/buy/speaker',
    category: 'consultation',
    image: '/images/b093e609-e529-491e-8087-8b2ff72a0937_image.jpeg',
    showProfile: true,
    description: 'Book me for your speaking engagement'
  },
  {
    id: 'business-clinic',
    title: 'Busi₦ess Clinic 🩺',
    url: 'https://paystack.com/buy/business-clinic-and-problem-solving-session-ctgaun',
    category: 'consultation',
    featured: true,
    image: '/images/03370f66-7dfc-49f9-9cf9-8b65247b5df3_image.jpeg',
    showProfile: true,
    description: 'Get expert diagnosis and solutions for your business'
  },
  {
    id: 'one-on-one',
    title: '1-on-1 with Me',
    url: 'https://paystack.com/buy/structurepolice',
    category: 'consultation',
    image: '/images/5553b369-4ba3-438e-bb5a-cb500ee58395_mugzo97rr7plyzntvtes.jpeg',
    showProfile: true,
    description: 'Personal consultation session'
  },
  {
    id: 'executive-coaching',
    title: 'Executive Coaching',
    url: 'https://paystack.com/buy/1-on-1coaching',
    category: 'consultation',
    image: '/images/c0818bea-2337-46d3-8530-6cb498ba4950_qkx3c3ug3uxi0hknp7md.jpeg',
    showProfile: true,
    description: 'Leadership and executive development coaching'
  },
  {
    id: 'one-on-one-session',
    title: 'One-on-one Session',
    url: 'https://paystack.com/buy/one-on-one-session-ziuumc',
    category: 'consultation',
    image: '/images/profile-image.jpg',
    showProfile: true,
    description: 'Personal consultation and strategy session'
  },

  // Business Services
  {
    id: 'after-hours',
    title: '5pm- 8am (After Hours Services)',
    url: 'https://paystack.com/buy/after-hours',
    category: 'business-services',
    image: '/images/after-hours-service.jpg',
    showProfile: true,
    description: 'Extended business support outside standard working hours'
  },
  {
    id: 'engagement-fee',
    title: 'All Samoga services start here',
    description: 'Engagement commitment fee',
    url: 'https://paystack.com/buy/engagement-commitment-fee-wbwqbb',
    category: 'business-services',
    image: '/images/engagement-service.jpg',
    showProfile: true
  },
  {
    id: 'recruitment',
    title: 'Recruitment Request',
    url: 'https://paystack.com/buy/recruitment-engagement-tirgnl',
    category: 'business-services',
    image: '/images/recruitment-service.jpg',
    showProfile: true,
    description: 'Professional talent acquisition services for your business'
  },
  {
    id: 'payroll',
    title: 'Payroll Services',
    url: 'https://paystack.com/buy/payroll',
    category: 'business-services',
    image: '/images/4fc4bd84-b07c-441e-99e1-9d1926d29a46_4q279oac014vsua99o58.jpeg',
    showProfile: true,
    description: 'Comprehensive payroll management and processing'
  },
  {
    id: 'pocket-hr',
    title: 'Pocket HR for your small business',
    url: 'https://paystack.com/buy/retainership',
    category: 'business-services',
    image: '/images/TlLIz1CTTe6Q9v4znTgf_image',
    showProfile: true,
    description: 'Affordable HR solutions tailored for small businesses'
  },

  // Training & Development
  {
    id: 'staff-training',
    title: 'Train up to 10 staff at ₦25,000 each',
    url: 'https://paystack.com/buy/launchpad-training-rrydmt',
    category: 'training',
    price: '₦25,000 per staff',
    image: '/images/61a9798e-0dce-4f5e-9acb-8f7d0cd09434_image.jpeg',
    showProfile: true,
    description: 'Staff training and professional development'
  },
  {
    id: 'hr-launchpad',
    title: 'HR LaunchPad',
    url: 'https://paystack.com/buy/hrlaunchpad-yfknss',
    category: 'training',
    image: '/images/yKGAHxNSRuCUcrCXMOYX_image',
    showProfile: true,
    description: 'Comprehensive HR training program'
  },
  {
    id: 'monetize-knowledge',
    title: 'Mo₦etize your knowledge',
    url: 'https://paystack.com/buy/moetize-your-knowledge-fsyfeu',
    category: 'training',
    image: '/images/4zXGEdGOTx6kDc3ZCT9t_image',
    showProfile: true,
    description: 'Turn your expertise into revenue'
  },
  {
    id: 'strategy-academy',
    title: 'Strategy & Business Academy',
    url: 'https://paystack.shop/sbacademy',
    category: 'training',
    image: '/images/rKMLPiRlRyqJItkL6gsA_image',
    showProfile: true,
    description: 'Comprehensive business strategy training'
  },

  // Documents & Tools
  {
    id: 'diy-recruitment',
    title: 'DIY Recruitment Toolkit',
    url: 'https://paystack.com/buy/-diy-recruitment',
    category: 'documents',
    image: '/images/rOtpp7gTnew2skJWh1JO_image',
    showProfile: true,
    description: 'Complete toolkit for managing your own recruitment process'
  },
  {
    id: 'sop',
    title: 'SOP 🔄',
    description: 'Standard Operating Procedures',
    url: 'https://paystack.com/buy/standard-operating-procedures-',
    category: 'documents',
    image: '/images/0eb8f04d-1aac-4eed-aa33-039fa3eec584_image.jpeg',
    showProfile: true
  },
  {
    id: 'new-employee-pack',
    title: 'New Employee Starter Pack',
    url: 'https://paystack.com/buy/10-documents-for-new-employees-dxnnpf',
    category: 'documents',
    image: '/images/YeQUdm7ARlC6HaBOLkkx_image',
    showProfile: true,
    description: 'Essential documents bundle for onboarding new employees'
  },
  {
    id: 'salary-structure',
    title: 'Salary Structure',
    url: 'https://paystack.com/buy/salary-scale',
    category: 'documents',
    image: '/images/SFCkjqzQR4q994ipsHyz_image',
    showProfile: true,
    description: 'Comprehensive salary scale templates for proper compensation management'
  },
  {
    id: 'policies',
    title: 'Policies',
    url: 'https://paystack.shop/policies',
    category: 'documents',
    image: '/images/ldnHxl4pRcCwcnqBbU5c_image',
    showProfile: true,
    description: 'Essential business policy templates for organizational governance'
  },
  {
    id: 'document-review',
    title: 'Document Review',
    url: 'https://paystack.com/buy/document-review-',
    category: 'documents',
    image: '/images/jsQSBKZVTSnMwwWXgNwb_image',
    showProfile: true,
    description: 'Professional assessment and improvement of your business documentation'
  },
  {
    id: 'business-autopilot',
    title: 'Busi₦ess Autopilot',
    url: 'https://paystack.shop/business-autopilot',
    category: 'documents',
    image: '/images/saRvMPBlT4WzDMbj4vQu_image',
    showProfile: true,
    description: 'Comprehensive system for running your business efficiently with minimal supervision'
  },
  {
    id: 'job-descriptions',
    title: 'Job Descriptions',
    url: 'https://paystack.shop/jds',
    category: 'documents',
    image: '/images/FlzzUNfiRuUgoJiFtBay_image',
    showProfile: true,
    description: 'Professionally crafted job descriptions for various roles and positions'
  },
  {
    id: 'staff-autopilot',
    title: 'Staff Autopilot Toolkit',
    url: 'https://paystack.com/buy/employee-management-documents-fnlbin',
    category: 'documents',
    image: '/images/XYMvnCqvSRCHF5C4z1Uu_image',
    showProfile: true,
    description: 'Complete toolkit for efficient staff management and supervision'
  },
  {
    id: 'employment-docs',
    title: 'Employment letter & Docs',
    url: 'https://paystack.com/buy/employment-letter',
    category: 'documents',
    image: '/images/qeKciuNRTseEBey8Jlyc_image',
    showProfile: true,
    description: 'Essential employment documentation templates including offer letters and contracts'
  },

  // Specialized Programs
  {
    id: 'japa-ceo',
    title: '"Japa" CEO bundle',
    url: 'https://www.coachli.co/samoga/meetings/japa/777',
    category: 'specialized',
    image: '/images/9aa15db7-2d1f-4250-a525-4c0f94cec47c_image.jpeg',
    showProfile: true,
    description: 'Strategic business relocation package'
  },
  {
    id: 'business-roundtable',
    title: 'Business Strategy Roundtable (BSRT)',
    url: 'https://paystack.com/buy/business-strategy-roundtable-bsrt-nwydvw',
    category: 'specialized',
    image: '/images/s4K7nECQT2qVl2ofuRnH_image',
    showProfile: true,
    description: 'Strategic business planning and discussion sessions'
  },
  {
    id: 'business-structure',
    title: 'Structure for your Business',
    url: 'https://paystack.com/buy/business-structure-pwcmrv',
    category: 'specialized',
    image: '/images/O6UfqWfxTGGQ8Q0T5hUs_image',
    showProfile: true,
    description: 'Comprehensive business structure optimization'
  },
  {
    id: 'jobseeker-solutions',
    title: 'Jobseeker Solutions',
    url: 'https://paystack.com/buy/jobseeker-services-qluhaw',
    category: 'specialized',
    image: '/images/sfL0RNAXSO6RoBxMhYUJ_image',
    showProfile: true,
    description: 'Career development and job search strategies'
  },
  {
    id: 'social-media-mindset',
    title: 'A Social Media State of Mind',
    url: 'https://paystack.com/buy/a-social-media-state-of-mind-uehzfg',
    category: 'specialized',
    image: '/images/r0bAAdCRkuYqrRsqS1ds_image',
    showProfile: true,
    description: 'Social media strategy and presence optimization'
  },

  // Communication
  {
    id: 'chat-team',
    title: 'Chat with my team',
    url: 'https://wa.me/2348036814141',
    category: 'communication',
    featured: true,
    image: '/images/profile-image.jpg',
    showProfile: true
  },
  {
    id: 'paystack-catalogue',
    title: 'View my Paystack catalogue',
    url: 'https://paystack.shop/h4orhelen',
    category: 'communication',
    image: '/images/Kx3pRTYfRGODqUJNx8IQ_image',
    showProfile: true
  }
];
