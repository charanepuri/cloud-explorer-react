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




export const comparisonData = [
  {
    feature: "Infrastructure",
    iaas: "Provider",
    paas: "Provider",
    saas: "Provider",
  },
  {
    feature: "Operating System",
    iaas: "You Manage",
    paas: "Provider",
    saas: "Provider",
  },
  {
    feature: "Runtime",
    iaas: "You Manage",
    paas: "Provider",
    saas: "Provider",
  },
  {
    feature: "Middleware",
    iaas: "You Manage",
    paas: "Provider",
    saas: "Provider",
  },
  {
    feature: "Applications",
    iaas: "You Manage",
    paas: "You Manage",
    saas: "Provider",
  },
  {
    feature: "Data",
    iaas: "You Manage",
    paas: "You Manage",
    saas: "Provider",
  },
  {
    feature: "Management Level",
    iaas: "High",
    paas: "Medium",
    saas: "Low",
  },
  {
    feature: "Best For",
    iaas: "DevOps & IT Teams",
    paas: "Developers",
    saas: "End Users",
  },
];

export const analogyData = [
  {
    id: "iaas",
    model: "IaaS",
    title: "Empty Apartment",
    description:
      "The provider gives you the basic space and infrastructure. You are responsible for setting up and managing everything you need inside.",
    cloudDescription:
      "You manage the operating system, applications, data, and other software while the provider manages the physical infrastructure.",
    color: "iaas",
    points: [
      "Maximum control",
      "Set up your own environment",
      "Manage the operating system",
      "Manage your applications",
    ],
  },

  {
    id: "paas",
    model: "PaaS",
    title: "Furnished Apartment",
    description:
      "The apartment is already equipped with essential furniture. You can focus on living there instead of setting everything up yourself.",
    cloudDescription:
      "The provider manages the infrastructure and platform while you focus mainly on building and managing your applications.",
    color: "paas",
    points: [
      "Focus on development",
      "Platform is ready",
      "Less infrastructure management",
      "Faster application delivery",
    ],
  },

  {
    id: "saas",
    model: "SaaS",
    title: "Hotel Room",
    description:
      "Everything is ready for you. You simply check in and use the room without worrying about maintenance or setup.",
    cloudDescription:
      "The provider manages almost everything and you simply use the complete software application.",
    color: "saas",
    points: [
      "Ready to use",
      "No infrastructure management",
      "No software installation",
      "Access from anywhere",
    ],
  },
];

export const quizQuestions = [
  {
    id: 1,
    question:
      "Which cloud service model provides virtualized computing resources such as servers, storage, and networking?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "DaaS",
    ],
    answer: "IaaS",
    explanation:
      "IaaS provides virtualized infrastructure resources such as compute, storage, and networking.",
  },

  {
    id: 2,
    question:
      "Which cloud service model allows developers to build and deploy applications without managing the underlying infrastructure?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-Premises",
    ],
    answer: "PaaS",
    explanation:
      "PaaS provides a managed platform where developers can focus on application development while the provider manages the underlying infrastructure.",
  },

  {
    id: 3,
    question:
      "Which cloud service model provides complete software applications to end users?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "FaaS",
    ],
    answer: "SaaS",
    explanation:
      "SaaS provides complete software applications that users can access through the internet.",
  },

  {
    id: 4,
    question:
      "Which cloud service model gives the customer the highest level of control over the operating system?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "All models",
    ],
    answer: "IaaS",
    explanation:
      "With IaaS, customers typically manage the operating system and applications running on the infrastructure.",
  },

  {
    id: 5,
    question:
      "Which service model is generally most suitable for developers who want to focus primarily on writing application code?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "Colocation",
    ],
    answer: "PaaS",
    explanation:
      "PaaS reduces infrastructure management so developers can concentrate on application development and deployment.",
  },

  {
    id: 6,
    question:
      "Which cloud service model usually requires the least infrastructure management from the end user?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "Bare Metal",
    ],
    answer: "SaaS",
    explanation:
      "SaaS provides a complete application, so the provider handles most infrastructure and software management.",
  },

  {
    id: 7,
    question:
      "Amazon EC2 is commonly classified under which cloud service model?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "BPaaS",
    ],
    answer: "IaaS",
    explanation:
      "Amazon EC2 provides virtual computing infrastructure that customers can configure and manage.",
  },

  {
    id: 8,
    question:
      "Which model is represented by the real-life analogy of a furnished apartment?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "Traditional Hosting",
    ],
    answer: "PaaS",
    explanation:
      "PaaS is compared to a furnished apartment because the platform is prepared for development while the user focuses on their application.",
  },

  {
    id: 9,
    question:
      "Which model is represented by the real-life analogy of a hotel room?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "Private Cloud",
    ],
    answer: "SaaS",
    explanation:
      "SaaS is compared to a hotel room because the environment is ready to use and the provider handles the underlying management.",
  },

  {
    id: 10,
    question:
      "Which model is represented by an empty apartment that the customer must set up?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "FaaS",
    ],
    answer: "IaaS",
    explanation:
      "IaaS is represented by an empty apartment because the customer receives the basic infrastructure and manages much of the environment.",
  },

  {
    id: 11,
    question:
      "In which cloud service model does the provider manage the physical infrastructure while the customer manages the operating system?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "All three equally",
    ],
    answer: "IaaS",
    explanation:
      "In IaaS, the provider manages the physical infrastructure while the customer typically manages the operating system and software above it.",
  },

  {
    id: 12,
    question:
      "Which service model is most closely associated with ready-to-use applications accessed over the internet?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "Infrastructure Hosting",
    ],
    answer: "SaaS",
    explanation:
      "SaaS delivers complete applications over the internet and is designed for direct end-user consumption.",
  },

  {
    id: 13,
    question:
      "Which cloud model generally provides the greatest flexibility for configuring virtual infrastructure?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "SaaS and PaaS equally",
    ],
    answer: "IaaS",
    explanation:
      "IaaS provides customers with significant control over virtual machines, operating systems, storage, and networking.",
  },

  {
    id: 14,
    question:
      "Which cloud model shifts more infrastructure management responsibility from the customer to the provider compared with IaaS?",
    options: [
      "PaaS",
      "Bare Metal",
      "Colocation",
      "On-Premises",
    ],
    answer: "PaaS",
    explanation:
      "PaaS manages more of the infrastructure and platform stack for the customer than IaaS.",
  },

  {
    id: 15,
    question:
      "Which cloud service model is primarily focused on delivering finished applications rather than development platforms?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "Infrastructure as Code",
    ],
    answer: "SaaS",
    explanation:
      "SaaS delivers finished applications directly to users rather than providing infrastructure or a development platform.",
  },

  {
    id: 16,
    question:
      "As you move from IaaS toward SaaS, what generally happens to the customer's infrastructure management responsibility?",
    options: [
      "It decreases",
      "It increases",
      "It remains exactly the same",
      "It becomes the only responsibility",
    ],
    answer: "It decreases",
    explanation:
      "Moving from IaaS to PaaS and then SaaS generally transfers more management responsibility to the cloud provider.",
  },

  {
    id: 17,
    question:
      "Which service model is most appropriate when a company wants a managed environment for developing and deploying applications?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "Physical Hosting",
    ],
    answer: "PaaS",
    explanation:
      "PaaS provides managed development and deployment capabilities while reducing infrastructure management.",
  },

  {
    id: 18,
    question:
      "Which cloud service model is generally the most convenient for an end user who simply wants to use an application?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "Bare Metal",
    ],
    answer: "SaaS",
    explanation:
      "SaaS is designed to provide ready-to-use applications without requiring users to manage the underlying infrastructure.",
  },

  {
    id: 19,
    question:
      "Which statement best describes the main advantage of IaaS?",
    options: [
      "Greater infrastructure control",
      "Complete application management by the provider",
      "No infrastructure configuration",
      "Only end-user software access",
    ],
    answer: "Greater infrastructure control",
    explanation:
      "A major advantage of IaaS is the level of control customers have over virtual infrastructure and operating environments.",
  },

  {
    id: 20,
    question:
      "Which statement best summarizes the relationship between IaaS, PaaS, and SaaS?",
    options: [
      "They provide different levels of management and control",
      "They are identical services with different names",
      "They are all physical hosting models",
      "They only differ in storage capacity",
    ],
    answer: "They provide different levels of management and control",
    explanation:
      "IaaS, PaaS, and SaaS represent different cloud service models with different divisions of responsibility between the provider and customer.",
  },
];