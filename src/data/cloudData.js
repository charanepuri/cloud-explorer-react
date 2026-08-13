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

export const comparisonData = [];

export const quizQuestions = [];