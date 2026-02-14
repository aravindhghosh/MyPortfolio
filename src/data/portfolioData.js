// ========================================
// PORTFOLIO DATA FILE
// ========================================
// This file contains all your portfolio content.
// Simply edit the values below to update your portfolio!
// No need to touch any other files.

import profilePhoto from '../assets/images/myprofile.jpg';

export const personalInfo = {
  name: "Aravindhghosh P",
  title: "Automation Developer | DevOps Specialist",
  tagline: "Building scalable automation solutions for cloud infrastructure",
  email: "aravindhghosh@outlook.com",
  phone: "+91 90427 59427",
  location: "Madurai, India",
  linkedin: "https://linkedin.com/in/aravindhghosh",
  github: "https://github.com/aravindhghosh",
  twitter: "https://twitter.com/yourusername", // Update with your Twitter
  instagram: "https://instagram.com/yourusername", // Update with your Instagram
  youtube: "https://youtube.com/@yourusername", // Update with your YouTube
  facebook: "https://facebook.com/yourusername", // Update with your Facebook
  profileImage: profilePhoto //"https://images.unsplash.com/photo-1573497620166-aef748c8c792?w=400"
};

export const about = {
  summary: "Results-driven Automation Developer with 5+ years of experience in cloud infrastructure, CI/CD, and database automation. Proficient in Python, Ansible, GitHub Actions, and Azure, with a strong track record of building automation for monitoring, incident management, and self-service workflows to improve efficiency and delivery.",
  highlights: [
    "5+ years of experience in automation and cloud infrastructure",
    "Led teams managing automated ticketing with ServiceNow and Ansible",
    "Reduced manual effort by 70% through DR automation in Azure",
    "Generated $5M+ in cost savings through licensing optimization"
  ],
  interests: [
    {
      id: 1,
      name: "Development",
      description: "Building scalable automation solutions",
      icon: "Code2",
      image: "https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?w=400"
    },
    {
      id: 2,
      name: "Photography",
      description: "Capturing moments and creating visual stories",
      icon: "Camera",
      image: "https://images.unsplash.com/photo-1662367532494-7b0e4e664491?w=400"
    },
    {
      id: 3,
      name: "Gaming",
      description: "Exploring virtual worlds and competitive gaming",
      icon: "Gamepad2",
      image: "https://images.unsplash.com/photo-1617507171089-6cb9aa5add36?w=400"
    },
    {
      id: 4,
      name: "Stock Trading",
      description: "Analyzing markets and financial investments",
      icon: "TrendingUp",
      image: "https://images.unsplash.com/photo-1651341050677-24dba59ce0fd?w=400"
    }
  ]
};

export const experience = [
  {
    id: 1,
    company: "HCL Tech",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/HCL_Technologies_logo.svg/320px-HCL_Technologies_logo.svg.png",
    currentRole: "Specialist",
    duration: "August 2020 - Present",
    location: "Madurai, India",
    description: "Leading automation initiatives and DevOps transformation for Fortune 500 client, driving $5M+ cost savings through innovative cloud automation and infrastructure optimization solutions.",
    roleProgression: [
      {
        title: "Specialist",
        duration: "January 2024 - Present",
        responsibilities: [
          "Led team of 4 automation engineers",
          "Served as code reviewer and approver for production deployments",
          "Designed and implemented CI/CD pipelines with GitHub Actions"
        ]
      },
      {
        title: "Senior Analyst",
        duration: "January 2022 - December 2023",
        responsibilities: [
          "Automated SQL Server downgrade saving $5 million in licensing costs",
          "Developed end-to-end Disaster Recovery automation in Azure using PowerShell",
          "Managed 500+ server infrastructure automation"
        ]
      },
      {
        title: "Analyst",
        duration: "August 2020 - December 2021",
        responsibilities: [
          "Automated MS-SQL database refresh processes using Commvault",
          "Led team to manage and automate ticketing processes using ServiceNow, AWX, Ansible",
          "Eliminated 100% manual efforts from SQL DBA Team"
        ]
      }
    ],
    responsibilities: [
      "Led team to manage and automate ticketing processes using ServiceNow, AWX, Ansible, and iAutomate",
      "Developed end-to-end Disaster Recovery automation in Azure using PowerShell, reducing manual effort by 70%",
      "Automated MS-SQL database refresh processes using Commvault, eliminating 100% manual efforts from SQL DBA Team",
      "Automated SQL Server downgrade saving $5 million in licensing costs",
      "Designed and implemented CI/CD pipelines with GitHub Actions",
      "Served as code reviewer and approver for production deployments"
    ],
    details: {
      overview: "Leading automation initiatives and managing critical infrastructure operations for a Fortune 500 client, driving efficiency through innovative DevOps practices and cloud automation solutions.",
      keyProjects: [
        "Azure Disaster Recovery Automation - Reduced DR execution time by 70%",
        "Database Refresh Automation - Eliminated 100% manual DBA effort",
        "SQL Server License Optimization - Saved $5M annually",
        "CI/CD Pipeline Implementation - Streamlined deployment processes"
      ],
      achievements: [
        "HCL Value Creation 2024 award for SQL Server optimization project",
        "Promoted twice: Analyst → Senior Analyst → Specialist",
        "Led team of 4 automation engineers",
        "Managed 500+ server infrastructure automation",
        "Reduced incident response time by 60%"
      ],
      technologies: ["Python", "PowerShell", "Ansible", "Azure", "GitHub Actions", "ServiceNow", "SQL Server", "AWX", "Commvault"],
      teamSize: "4 members",
      impact: "Generated $5M+ in cost savings and improved operational efficiency by 70%"
    }
  },
  {
    id: 2,
    company: "Blue Yonder India Pvt Ltd",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Blue_Yonder_logo.svg/320px-Blue_Yonder_logo.svg.png",
    currentRole: "Associate Technical Consultant",
    duration: "January 2020 - August 2020",
    location: "Bengaluru, India",
    description: "Developed innovative monitoring solutions and automation for enterprise job scheduling infrastructure, progressing from intern to full-time consultant through exceptional performance.",
    roleProgression: [
      {
        title: "Associate Technical Consultant",
        duration: "July 2020 - August 2020",
        responsibilities: [
          "Automated Control-M job dashboard to generate SLA runtime reports",
          "Tracked job execution status for performance optimization",
          "Enabled proactive job failure prevention"
        ]
      },
      {
        title: "Intern",
        duration: "January 2020 - June 2020",
        responsibilities: [
          "Developed solutions to monitor ESXi incidents using Zabbix API, Python, and Grafana",
          "Designed POC chatbot for Self-Service Portal for Control-M Job Dashboard Q&A",
          "Successfully deployed monitoring solution for 100+ ESXi hosts"
        ]
      }
    ],
    responsibilities: [
      "Automated Control-M job dashboard to generate SLA runtime reports",
      "Tracked job execution status for performance optimization",
      "Developed solutions to monitor ESXi incidents using Zabbix API, Python, and Grafana",
      "Designed POC chatbot for Self-Service Portal for Control-M Job Dashboard Q&A"
    ],
    details: {
      overview: "Contributed to monitoring and automation initiatives for enterprise job scheduling infrastructure, developing innovative solutions that led to a full-time offer.",
      keyProjects: [
        "Control-M Dashboard Automation - Real-time SLA monitoring",
        "Job Performance Tracking - Automated reporting system",
        "ESXi Monitoring Solution - Proactive incident detection",
        "Control-M Chatbot POC - AI-powered self-service portal"
      ],
      achievements: [
        "Promoted from Intern to Associate Technical Consultant",
        "Reduced manual reporting time by 80%",
        "Successfully deployed monitoring solution for 100+ ESXi hosts",
        "Developed functional chatbot prototype with 95% query accuracy",
        "Improved SLA visibility across teams",
        "Reduced incident detection time by 50%"
      ],
      technologies: ["Control-M", "Python", "API Integration", "Zabbix API", "Grafana", "NLP", "Dashboard Development"],
      teamSize: "Solo projects with team collaboration",
      impact: "Enhanced operational visibility, reduced manual monitoring efforts by 80%, and enabled 24/7 automated support"
    }
  }
];

export const skills = {
  "Programming & Scripting": {
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Shell Scripting", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "PowerShell", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg" }
    ],
    image: "https://images.unsplash.com/photo-1770734360042-676ef707d022?w=400",
    icon: "Code2"
  },
  "DevOps & CI/CD Tools": {
    skills: [
      { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
      { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ],
    image: "https://images.unsplash.com/photo-1762163516269-3c143e04175c?w=400",
    icon: "GitBranch"
  },
  "Containerization": {
    skills: [
      { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
    ],
    image: "https://images.unsplash.com/photo-1770734360042-676ef707d022?w=400",
    icon: "Box"
  },
  "Cloud Technologies": {
    skills: [
      { name: "Microsoft Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" }
    ],
    image: "https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?w=400",
    icon: "Cloud"
  },
  "Disaster Recovery & Resilience": {
    skills: [
      { name: "Azure DR", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" }
    ],
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=400",
    icon: "Shield"
  },
  "Database Management": {
    skills: [
      { name: "MS SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" }
    ],
    image: "https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?w=400",
    icon: "Database"
  },
  "Automation Tools": {
    skills: [
      { name: "AWX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" }
    ],
    image: "https://images.unsplash.com/photo-1762163516269-3c143e04175c?w=400",
    icon: "Zap"
  },
  "Version Control Systems": {
    skills: [
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ],
    image: "https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?w=400",
    icon: "GitCommit"
  },
  "Project Management & Methodologies": {
    skills: [
      { name: "Agile", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Scrum", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" }
    ],
    image: "https://images.unsplash.com/photo-1770734360042-676ef707d022?w=400",
    icon: "Clipboard"
  }
};

export const projects = [
  {
    id: 1,
    title: "Azure DR Automation",
    description: "End-to-end Disaster Recovery automation in Azure using PowerShell, orchestrating all infrastructure tasks for real and mock DR events. Reduced manual effort by over 70%.",
    technologies: ["PowerShell", "Azure", "Automation"],
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=600",
    details: {
      overview: "Comprehensive disaster recovery automation solution that orchestrates failover and failback activities across Azure infrastructure.",
      challenges: [
        "Manual DR processes taking 8+ hours per event",
        "High error rate in manual failover procedures",
        "Limited DR testing due to resource constraints"
      ],
      solutions: [
        "Developed automated PowerShell scripts for infrastructure orchestration",
        "Created real-time monitoring and validation checks",
        "Implemented automated rollback mechanisms"
      ],
      results: [
        "Reduced DR execution time from 8 hours to 2.5 hours",
        "Decreased manual effort by 70%",
        "Achieved 100% DR test success rate",
        "Enabled monthly DR testing instead of quarterly"
      ],
      duration: "6 months",
      team: "4 members",
      role: "Lead Developer & Architect"
    }
  },
  {
    id: 2,
    title: "Database Refresh Automation",
    description: "Automated MS-SQL database refresh processes using Commvault and migrated to SaaS platform. Eliminated 100% manual efforts from SQL DBA Team.",
    technologies: ["Python", "SQL", "GitHub Actions", "Commvault"],
    image: "https://images.unsplash.com/photo-1650473395434-8674d953ef2f?w=600",
    details: {
      overview: "Streamlined database refresh operations by automating the entire workflow from backup to restore, validation, and deployment.",
      challenges: [
        "20+ hours weekly spent on manual database refresh",
        "Inconsistent refresh procedures across environments",
        "Frequent database corruption during manual operations"
      ],
      solutions: [
        "Built Python-based automation framework with Commvault integration",
        "Implemented CI/CD pipeline using GitHub Actions",
        "Created automated validation and health checks"
      ],
      results: [
        "100% elimination of manual DBA effort for refreshes",
        "Reduced refresh time from 4 hours to 30 minutes",
        "Zero database corruption incidents post-automation",
        "Improved database availability by 25%"
      ],
      duration: "4 months",
      team: "3 members",
      role: "Lead Automation Engineer"
    }
  },
  {
    id: 3,
    title: "SQL Server License Optimization",
    description: "Automated SQL Server downgrade from Enterprise Edition to Developer Edition using PowerShell and BigFix, reducing licensing costs by $5 million.",
    technologies: ["PowerShell", "BigFix", "Automation"],
    image: "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?w=600",
    details: {
      overview: "Strategic cost optimization initiative that automated the downgrade of SQL Server licenses across 500+ non-production servers.",
      challenges: [
        "Manual license downgrade taking 2 hours per server",
        "$5M annual licensing costs for non-prod environments",
        "Risk of production environment disruption"
      ],
      solutions: [
        "Developed automated downgrade scripts with validation",
        "Integrated with BigFix for centralized deployment",
        "Implemented pre and post-downgrade health checks"
      ],
      results: [
        "Saved $5 million in annual licensing costs",
        "Automated downgrade across 500+ servers in 2 weeks",
        "Zero production impact or service disruption",
        "Recognized at HCL Value Creation 2024 event"
      ],
      duration: "3 months",
      team: "2 members",
      role: "Automation Lead & Solution Architect"
    }
  },
  {
    id: 4,
    title: "Control-M Chatbot POC",
    description: "Designed and developed a Proof of Concept chatbot for Self-Service Portal for Control-M Job Dashboard Q&A, enabling automated user-friendly job status queries.",
    technologies: ["Python", "NLP", "Control-M"],
    image: "https://images.unsplash.com/photo-1633195281926-59c0bf267653?w=600",
    details: {
      overview: "AI-powered chatbot to provide instant answers to Control-M job status queries, reducing helpdesk load and improving response times.",
      challenges: [
        "High volume of repetitive job status queries",
        "Average 15-minute response time for job status",
        "Limited after-hours support availability"
      ],
      solutions: [
        "Built NLP-powered chatbot using Python",
        "Integrated with Control-M API for real-time data",
        "Implemented natural language understanding for queries"
      ],
      results: [
        "Reduced helpdesk queries by 60%",
        "Instant response to job status queries (< 5 seconds)",
        "24/7 automated support availability",
        "95% user satisfaction rate in pilot"
      ],
      duration: "2 months",
      team: "Solo project with guidance",
      role: "Developer & POC Lead"
    }
  }
];

export const certifications = [
  {
    id: 1,
    name: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    icon: "Award",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
    credentialUrl: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/"
  },
  {
    id: 2,
    name: "Microsoft Certified: Azure AI Fundamentals",
    code: "AI-900",
    issuer: "Microsoft",
    icon: "Brain",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
    credentialUrl: "https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/"
  },
  {
    id: 3,
    name: "IBM Applied Data Science with Python",
    code: "Level 2",
    issuer: "IBM",
    icon: "Database",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    credentialUrl: "https://www.ibm.com/training/badge/applied-data-science-with-python-level-2"
  },
  {
    id: 4,
    name: "Certified Scrum Master",
    code: "CSM",
    issuer: "Scrum Alliance",
    icon: "Target",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
    credentialUrl: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster"
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Thiagarajar College of Engineering",
    location: "Madurai",
    years: "2017 - 2020",
    cgpa: "8.46",
    logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=200"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "The American College",
    location: "Madurai",
    years: "2014 - 2017",
    cgpa: "8.7",
    logo: "https://images.unsplash.com/photo-1622604647545-0cada2f34470?w=200"
  }
];

export const achievements = [
  {
    id: 1,
    title: "HCL Value Creation 2024",
    description: "Recognised for leading SQL Server Enterprise-to-Developer Edition downgrade automation, generating $5 million in business value"
  },
  {
    id: 2,
    title: "HCL Achievers League",
    description: "Earned 2Good and 4Ward awards based on consecutive years of Distinguished Performance ratings"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Senior Manager",
    role: "Project Lead",
    company: "HCL Tech",
    text: "Aravindhghosh's automation solutions have transformed our operations, reducing manual effort by 70% and saving millions in costs.",
    image: "https://images.unsplash.com/photo-1573497620166-aef748c8c792?w=100"
  },
  {
    id: 2,
    name: "Team Lead",
    role: "DevOps Manager",
    company: "Blue Yonder",
    text: "An exceptional developer who consistently delivers high-quality automation solutions. His CI/CD expertise is outstanding.",
    image: "https://images.unsplash.com/photo-1573497620166-aef748c8c792?w=100"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Automating Azure Disaster Recovery: A Complete Guide",
    excerpt: "Learn how to build end-to-end DR automation in Azure using PowerShell and reduce manual effort by 70%.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "DevOps"
  },
  {
    id: 2,
    title: "Cost Optimization in Cloud: Saving $5M Through Automation",
    excerpt: "A case study on how we automated SQL Server licensing optimization to achieve massive cost savings.",
    date: "2023-11-20",
    readTime: "6 min read",
    category: "Cloud"
  },
  {
    id: 3,
    title: "CI/CD Best Practices with GitHub Actions",
    excerpt: "Discover the best practices for building robust CI/CD pipelines using GitHub Actions and Ansible.",
    date: "2023-09-10",
    readTime: "10 min read",
    category: "Automation"
  }
];
