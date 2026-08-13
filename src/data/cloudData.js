export const cloudServices = [
  {
    id: "iaas",
    name: "IaaS",
    fullName: "Infrastructure as a Service",
    description:
      "Infrastructure as a Service provides virtualized computing resources over the internet, including servers, storage, and networking.",
    color: "iaas",
  },
  {
    id: "paas",
    name: "PaaS",
    fullName: "Platform as a Service",
    description:
      "Platform as a Service provides a managed environment for building, deploying, and managing applications.",
    color: "paas",
  },
  {
    id: "saas",
    name: "SaaS",
    fullName: "Software as a Service",
    description:
      "Software as a Service delivers ready-to-use applications over the internet.",
    color: "saas",
  },
];

export const iaasData = {
  title: "Infrastructure as a Service",
  shortName: "IaaS",

  description:
    "IaaS gives you virtualized infrastructure such as servers, storage, and networking resources without requiring you to purchase and maintain physical hardware.",

  resources: [
    "Virtual Machines",
    "Storage",
    "Networking",
    "Virtual Data Centers",
    "Operating Systems",
  ],

  managedByYou: [
    "Applications",
    "Data",
    "Runtime",
    "Middleware",
    "Operating System",
  ],

  managedByProvider: [
    "Virtualization",
    "Servers",
    "Storage",
    "Networking",
    "Physical Data Center",
  ],

  examples: [
    {
      name: "Amazon EC2",
      provider: "Amazon Web Services",
      description:
        "Scalable virtual servers that provide configurable computing capacity.",
    },
    {
      name: "Microsoft Azure Virtual Machines",
      provider: "Microsoft Azure",
      description:
        "On-demand virtual machines running Windows or Linux workloads.",
    },
    {
      name: "Google Compute Engine",
      provider: "Google Cloud",
      description:
        "Flexible virtual machine infrastructure for cloud workloads.",
    },
  ],

  bestFor: [
    "Developers who need complete control over infrastructure",
    "Applications requiring custom operating systems",
    "Migrating existing applications to the cloud",
    "Development and testing environments",
    "Businesses that need scalable infrastructure",
  ],
};

export const paasData = {
  title: "Platform as a Service",
  shortName: "PaaS",

  description:
    "PaaS provides developers with a managed platform and development environment for building, deploying, and managing applications without having to manage the underlying infrastructure.",

  resources: [
    "Development Environment",
    "Runtime",
    "Databases",
    "Development Tools",
    "Application Hosting",
  ],

  managedByYou: [
    "Applications",
    "Application Data",
    "Application Configuration",
  ],

  managedByProvider: [
    "Runtime",
    "Middleware",
    "Operating System",
    "Servers",
    "Storage",
    "Networking",
    "Physical Data Center",
  ],

  examples: [
    {
      name: "Heroku",
      provider: "Salesforce",
      description:
        "A cloud platform that simplifies application deployment and management for developers.",
    },
    {
      name: "Google App Engine",
      provider: "Google Cloud",
      description:
        "A fully managed platform for building and deploying scalable web applications.",
    },
    {
      name: "Azure App Service",
      provider: "Microsoft Azure",
      description:
        "A managed platform for hosting web applications, APIs, and backend services.",
    },
  ],

  bestFor: [
    "Developers who want to focus on application development",
    "Rapid application development",
    "Application deployment without infrastructure management",
    "Development and testing environments",
    "Teams looking for faster application delivery",
  ],
};

export const saasData = {
  title: "Software as a Service",
  shortName: "SaaS",

  description:
    "SaaS delivers complete software applications over the internet. Users simply access the application while the provider manages the infrastructure, platform, and software.",

  resources: [
    "Ready-to-use Applications",
    "Web Applications",
    "Mobile Applications",
    "Cloud Storage",
    "Collaboration Tools",
  ],

  managedByYou: [
    "Application Usage",
    "Your Data",
    "User Settings",
  ],

  managedByProvider: [
    "Application",
    "Data Infrastructure",
    "Runtime",
    "Middleware",
    "Operating System",
    "Servers",
    "Storage",
    "Networking",
    "Physical Data Center",
  ],

  examples: [
    {
      name: "Gmail",
      provider: "Google",
      description:
        "A cloud-based email service that lets users send, receive, and manage email through the internet.",
    },
    {
      name: "Google Docs",
      provider: "Google",
      description:
        "An online document editor that allows users to create, edit, and collaborate on documents.",
    },
    {
      name: "Microsoft 365",
      provider: "Microsoft",
      description:
        "A collection of cloud-based productivity applications including Word, Excel, and PowerPoint.",
    },
    {
      name: "Canva",
      provider: "Canva",
      description:
        "An online design platform for creating presentations, graphics, social media content, and more.",
    },
    {
      name: "ChatGPT",
      provider: "OpenAI",
      description:
        "An AI-powered conversational application accessed directly through the internet.",
    },
  ],

  bestFor: [
    "End users who want ready-to-use software",
    "Teams that need collaboration tools",
    "Businesses looking to avoid software maintenance",
    "Users who want access from anywhere",
    "Organizations that prefer subscription-based software",
  ],
};




export const comparisonData = [];

export const quizQuestions = [];