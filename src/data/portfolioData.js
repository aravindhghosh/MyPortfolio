// ========================================
// PORTFOLIO DATA FILE
// ========================================
// This file contains all your portfolio content.
// Simply edit the values below to update your portfolio!
// No need to touch any other files.

import profilePhoto from '../assets/images/myprofile.jpg';
import eduTCEPhoto from '../assets/images/tce.png';
import eduACPhoto from '../assets/images/americancollege.png';
import orghcltech from '../assets/images/hcltech.png';
import orgblueyonder from '../assets/images/blueyonder.png';
import certIBMDSPython from '../assets/images/IBMAppliedDatascienceL2.png';
import certMSAzureFundamentals from '../assets/images/MicrosoftAzFundamentals.png';
import certScrumAllianceCSM from '../assets/images/ScrumAllianceCSM.png';
import project_azure_dr from '../assets/images/project_az_dr.png';
import project_azure_refresh from '../assets/images/project_azure_refresh.png';
import project_commvaultrefresh from '../assets/images/project_commvaultrefresh.png';
import project_sql_downgrade from '../assets/images/project_sql_downgrade.png';

export const personalInfo = {
  name: "Aravindhghosh P",
  title: "Automation Developer | DevOps Specialist",
  tagline: "Building scalable automation solutions for cloud infrastructure",
  resumeUrl: "https://customer-assets.emergentagent.com/job_74d47219-9912-4f53-8f48-15d368f5e967/artifacts/um6wlbjr_Aravindhghosh%20P%20-%20Resume%20-%20HCLTech.pdf",
  email: "aravindhghosh@outlook.com",
  phone: "Not provided for Privacy reasons",
  location: "Madurai, India",
  linkedin: "https://linkedin.com/in/aravindhghosh",
  github: "https://github.com/aravindhghosh",
  twitter: "https://x.com/aravindhghosh", // Update with your Twitter
  instagram: "https://instagram.com/aravindhghosh", // Update with your Instagram
  youtube: "https://youtube.com/@ARAVINDHGHOSH", // Update with your YouTube
  facebook: "https://facebook.com/aravindhghosh", // Update with your Facebook
  profileImage: profilePhoto //"https://images.unsplash.com/photo-1573497620166-aef748c8c792?w=400"
};

export const about = {
  summary: "Results-driven Automation Developer with 5+ years of experience in cloud infrastructure, CI/CD, and database automation. Proficient in Python, Ansible, GitHub Actions, and Azure, with a strong track record of building automation for monitoring, incident management, and self-service workflows to improve efficiency and delivery.",
  highlights: [
    "Led teams managing automated ticketing with ServiceNow and Ansible",
    "Reduced manual effort by 70% through DR automation in Azure",
    "Generated $5M+ in cost savings through licensing optimization",
    "Actively contributed to Sprint Planning, Retrospectives, Effort Estimation, and conducted Daily Standups as part of Agile delivery."
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
    companyLogo: orghcltech, //"https://en.wikipedia.org/wiki/HCLTech#/media/File:HCLTech-new-logo.svg",
    currentRole: "Specialist",
    duration: "August 2020 - Present",
    location: "Madurai, India",
    description: "Leading automation initiatives and DevOps transformation, driving through cloud automation and infrastructure optimization solutions. Responsible for leading automation initiatives, driving DevOps transformation, and delivering solutions that improve operational efficiency and reduce costs.",
    roleProgression: [
      {
        title: "Specialist",
        duration: "October 2024 - Present",
        responsibilities: [
          "Led a team of automation engineers managing ServiceNow ticket orchestration using AWX, Ansible, and iAutomate",
          "Actively participated in Sprint Planning, Retrospectives, Estimation, and Daily Standups within Agile delivery model",
          "Designed and maintained detailed technical documentation, SOPs, and workflow diagrams for operational excellence",
          "Developed end-to-end Azure Disaster Recovery automation using PowerShell for real and mock DR scenarios",
          "Reduced DR failover and failback manual effort by over 70% through orchestration automation",
          "Spearheaded ServiceNow workflow automation improving service efficiency and ticket throughput",
          "Mentored and trained team members to build a high-performance automation culture",
          "Served as code reviewer and production deployment approver ensuring quality and compliance"
        ]
      },
      {
        title: "Senior Analyst",
        duration: "July 2022 - September 2024",
        responsibilities: [
          "Coordinated with cross-functional teams to ensure timely ticket resolution through automated execution",
          "Automated MS-SQL database refresh using Commvault and migrated workflows to Commvault SaaS platform",
          "Eliminated 100% manual SQL DBA efforts using GitHub Actions, Python, and SQL-based automation",
          "Designed and implemented CI/CD pipelines using GitHub Actions for automated deployments",
          "Developed reusable Ansible playbooks for infrastructure provisioning and ticket execution",
          "Automated SQL Server downgrade from Enterprise to Developer Edition saving $5M in licensing",
          "Implemented backup lifecycle automation deleting Azure Recovery Vault backups older than 30 days"
        ]
      },
      {
        title: "Analyst",
        duration: "August 2020 - June 2022",
        responsibilities: [
          "Built backend automation for centralized monitoring dashboard using Python, Zabbix API, and MS-SQL",
          "Automated Unix server build validation using Python and Shell scripting",
          "Automated SLA metric collection across infrastructure components for performance tracking",
          "Developed infrastructure validation test suites using Ruby and Chef InSpec framework"
        ]
      }
    ],
    // responsibilities: [
    //   "Led team to manage and automate ticketing processes using ServiceNow, AWX, Ansible, and iAutomate",
    //   "Developed end-to-end Disaster Recovery automation in Azure using PowerShell, reducing manual effort by 70%",
    //   "Automated MS-SQL database refresh processes using Commvault, eliminating 100% manual efforts from SQL DBA Team",
    //   "Automated SQL Server downgrade saving $5 million in licensing costs",
    //   "Designed and implemented CI/CD pipelines with GitHub Actions",
    //   "Served as code reviewer and approver for production deployments"
    // ],
    details: {
      overview: "Strategic partnership with Blue Yonder (former employer and current client) to build an offshore ODC for scalable public and private cloud infrastructure operations and maintenance.",
      keyProjects: [
        "Azure Disaster Recovery Automation - Reduced DR execution time by 70%",
        "Database Refresh Automation - Eliminated 100% manual DBA effort",
        "SQL Server License Optimization - Saved $5M annually",
        "CI/CD Pipeline Implementation - Streamlined deployment processes"
      ],
      achievements: [
        "HCL Value Creation 2024 award for SQL Server optimization project",
        "Promoted twice: Analyst → Senior Analyst → Specialist",
        "Led team of 5 automation engineers",
        "Managed 500+ server infrastructure automation",
        "Reduced incident response time by 60%"
      ],
      technologies: ["Python", "PowerShell", "Shell Scripting", "Ansible", "Azure", "GitHub Actions", "ServiceNow", "SQL Server", "AWX", "Commvault", "Terraform", "Docker"],
      teamSize: "6 members",
      impact: "Generated $5M+ in cost savings and improved operational efficiency by 70%"
    }
  },
  {
    id: 2,
    company: "Blue Yonder India Pvt Ltd",
    companyLogo: orgblueyonder, //"https://upload.wikimedia.org/wikipedia/en/d/dd/Blue_Yonder_Logo.png",
    currentRole: "Associate Technical Consultant",
    duration: "January 2020 - August 2020",
    location: "Bengaluru, India",
    description: "Developed monitoring solutions and automation for enterprise job scheduling infrastructure, progressing from intern to full-time consultant through exceptional performance.",
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
        duration: "January 2020 - July 2020",
        responsibilities: [
          "Developed solutions to monitor ESXi incidents using Zabbix API, Python, and Grafana",
          "Designed POC chatbot for Self-Service Portal for Control-M Job Dashboard Q&A",
          "Successfully deployed monitoring solution for 100+ ESXi hosts"
        ]
      }
    ],
    // responsibilities: [
    //   "Automated Control-M job dashboard to generate SLA runtime reports",
    //   "Tracked job execution status for performance optimization",
    //   "Developed solutions to monitor ESXi incidents using Zabbix API, Python, and Grafana",
    //   "Designed POC chatbot for Self-Service Portal for Control-M Job Dashboard Q&A"
    // ],
    details: {
      overview: "Joined as an intern and quickly transitioned to a full-time role by delivering impactful automation solutions for Control-M job monitoring and ESXi incident management.",
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
      { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ],
    image: "https://images.unsplash.com/photo-1762163516269-3c143e04175c?w=400",
    icon: "GitBranch"
  },
  "Containerization": {
    skills: [
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
    technologies: ["PowerShell", "Azure", "Shell Scripting", "GitHub Actions", "ServiceNow", "Azure Functions", "Logic Apps"],
    image: project_azure_dr, // "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=600",
    details: {
      overview: "Comprehensive disaster recovery automation solution that orchestrates failover and failback activities across Azure infrastructure.",
      challenges: [
        "Manual DR processes taking 8 to 16+ hours per event",
        "High error rate in manual failover procedures",
        "Limited DR testing due to resource constraints"
      ],
      solutions: [
        "Developed automated PowerShell, Shell scripts for infrastructure orchestration using GitHub Actions, Azure Functions and Logic Apps",
        "Created real-time monitoring and validation checks",
        "Integrated with ServiceNow for incident management and ticketing during DR events"
      ],
      results: [
        "Reduced DR execution time from 8 hours to 2.5 hours",
        "Decreased manual effort by 70%",
        "Achieved 90% DR test success rate",
        "Automated failover and failback processes with zero manual intervention, improving reliability and consistency of DR execution",
        "Improved DR readiness and reduced risk of downtime during actual disaster events",
        "Received positive feedback from stakeholders for improved DR processes and reliability",
        "Implemented both real and mock DR automation solutions to ensure comprehensive DR preparedness and testing capabilities across the organization",
        "Implemented Pre and Post DR validation checks to ensure data integrity and application availability after failover and failback operations, reducing risk of issues during DR events"
      ],
      duration: "6 months",
      team: "2 members",
      role: "Lead Developer & Architect"
    }
  },
  {
    id: 2,
    title: "Microsoft SQLServer Database Refresh Automation - Commvault",
    description: "Automated MS-SQL database refresh processes using Commvault (As migrated to SaaS Commvault platform from Azure Recovery Services Vault). Eliminated 100% manual efforts from SQL DBA Team.",
    technologies: ["Python", "SQL", "GitHub Actions", "Commvault", "ServiceNow", "AWX", "Ansible"],
    image: project_commvaultrefresh, // "https://images.unsplash.com/photo-1650473395434-8674d953ef2f?w=600",
    details: {
      overview: "Streamlined database refresh operations by automating the entire workflow from backup to restore, validation, and deployment. Refresh will be triggered through GitHub Actions and executed using Python scripts integrated with Commvault APIs which restores Source Server Database Backups to Target Server and performs pre and post refresh validation checks to ensure data integrity and availability.",
      challenges: [
        "20+ hours spent on manual database refresh per request",
        "Inconsistent refresh procedures across environments since multiple teams were involved",
        "SPOC can only perform 1 refresh at a time leading to delays and bottlenecks",
        "Validate SQL Server one by one which is time consuming and error prone for both pre and post refresh validation",
        "Modification of Existing Azure Recovery Services Vault based refresh automation to integrate with Commvault SaaS platform and update existing workflows to leverage Commvault APIs for backup and restore operations and rebuilt PowerShell based automation to Python for better maintainability and scalability."
      ],
      solutions: [
        "Built Python-based automation framework with Commvault integration",
        "Implemented CI/CD pipeline using GitHub Actions",
        "Created automated validation and health checks",
        "Integrate with Service-Now for ticket orchestration and status updates",
        "Rebuilt PowerShell based automation to Python for better maintainability and scalability. This involved re-architecting the automation framework to leverage Python's capabilities and Commvault APIs for backup and restore operations, ensuring seamless integration with the new Commvault SaaS platform while maintaining existing functionality and improving overall performance.",
        "Create APP Validation for BlueYonder Prodcuts deployed on SQL Server as part of pre and post refresh validation to ensure application compatibility and functionality after database refresh operations."
      ],
      results: [
        "100% elimination of manual DBA effort for refreshes",
        "Reduced refresh time depends on database size but on average 70% reduction in execution time, for example a refresh which used to take 20 hours now takes around 4 hours",
        "Pre and Post Validation automation reduced validation time by 80%",
        "Enabled concurrent refreshes improving throughput and reducing wait times",
        "Enabled Centralised Token Management system for Commvault API authentication and authorization for secure and seamless automation execution"
      ],
      duration: "4 months - 6 Months",
      team: "2 member",
      role: "Lead Automation Engineer"
    }
  },
  {
    id: 3,
    title: "Microsoft SQLServer Database Refresh Automation - Azure Recovery Services Vault",
    description: "Automated MS-SQL database refresh processes using Azure Recovery Services Vault. Eliminated 100% manual efforts from SQL DBA Team.",
    technologies: ["Azure PowerShell", "Azure Recovery Services Vault", "Ansible", "Kusto Query Language", "GitHub Actions"],
    image: project_azure_refresh, // "https://images.unsplash.com/photo-1650473395434-8674d953ef2f?w=600",
    details: {
      overview: "Streamlined database refresh operations by automating the entire workflow from backup to restore, validation, and deployment. Refresh will be triggered through GitHub Actions and executed using Python scripts integrated with Commvault APIs which restores Source Server Database Backups to Target Server and performs pre and post refresh validation checks to ensure data integrity and availability.",
      challenges: [
        "20+ hours spent on manual database refresh per request",
        "Inconsistent refresh procedures across environments since multiple teams were involved",
        "SPOC can only perform 1 refresh at a time leading to delays and bottlenecks",
        "Validate SQL Server one by one which is time consuming and error prone for both pre and post refresh validation"
      ],
      solutions: [
        "Built using Azure PowerShell and Recovery Services Vault for restore operations.",
        "Implemented CI/CD pipeline using GitHub Actions",
        "Created automated validation and health checks",
        "Create APP Validation for BlueYonder Prodcuts deployed on SQL Server as part of pre and post refresh validation to ensure application compatibility and functionality after database refresh operations."
      ],
      results: [
        "90% elimination of manual DBA effort for refreshes",
        "Reduced refresh time depends on database size but on average 70% reduction in execution time, for example a refresh which used to take 20 hours now takes around 4 hours",
        "Pre and Post Validation automation reduced validation time by 80%",
        "Enabled concurrent refreshes improving throughput and reducing wait times"
      ],
      duration: "1 Year",
      team: "1 member",
      role: "Lead Automation Engineer"
    }
  },
  {
    id: 4,
    title: "SQL Server License Optimization",
    description: "Automated SQL Server downgrade from Enterprise Edition to Developer Edition using PowerShell and BigFix, reducing licensing costs by $5 million.",
    technologies: ["PowerShell", "BigFix", "Automation", "Microsoft SQL Server"],
    image: project_sql_downgrade, // "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?w=600",
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
      team: "3 members",
      role: "Automation Engineer"
    }
  } //,
  // {
  //   id: 4,
  //   title: "Control-M Chatbot POC",
  //   description: "Designed and developed a Proof of Concept chatbot for Self-Service Portal for Control-M Job Dashboard Q&A, enabling automated user-friendly job status queries.",
  //   technologies: ["Python", "NLP", "Control-M"],
  //   image: "https://images.unsplash.com/photo-1633195281926-59c0bf267653?w=600",
  //   details: {
  //     overview: "AI-powered chatbot to provide instant answers to Control-M job status queries, reducing helpdesk load and improving response times.",
  //     challenges: [
  //       "High volume of repetitive job status queries",
  //       "Average 15-minute response time for job status",
  //       "Limited after-hours support availability"
  //     ],
  //     solutions: [
  //       "Built NLP-powered chatbot using Python",
  //       "Integrated with Control-M API for real-time data",
  //       "Implemented natural language understanding for queries"
  //     ],
  //     results: [
  //       "Reduced helpdesk queries by 60%",
  //       "Instant response to job status queries (< 5 seconds)",
  //       "24/7 automated support availability",
  //       "95% user satisfaction rate in pilot"
  //     ],
  //     duration: "2 months",
  //     team: "Solo project with guidance",
  //     role: "Developer & POC Lead"
  //   }
  // }
];

export const certifications = [
  {
    id: 1,
    name: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    icon: "Award",
    image: certMSAzureFundamentals, //"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-gb/aravindhghosh/8D06B53F4724E71E?sharingId=89F5D240924212F" //"https://learn.microsoft.com/en-us/certifications/azure-fundamentals/"
  },
  {
    id: 2,
    name: "Microsoft Certified: Azure AI Fundamentals",
    code: "AI-900",
    issuer: "Microsoft",
    icon: "Brain",
    image: certMSAzureFundamentals, //"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-gb/aravindhghosh/885D6048A3D06685?sharingId=89F5D240924212F" //"https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/"
  },
  {
    id: 3,
    name: "IBM Applied Data Science with Python",
    code: "Level 2",
    issuer: "IBM",
    icon: "Database",
    image: certIBMDSPython, //"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    credentialUrl: "https://www.credly.com/badges/c151b4b9-1ad5-472a-995f-e29ddd186b07/public_url"
  },
  {
    id: 4,
    name: "Certified Scrum Master (April 2025 - April 2027)",
    code: "CSM",
    issuer: "Scrum Alliance",
    icon: "Target",
    image: certScrumAllianceCSM, //"https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
    credentialUrl: "https://bcert.me/bc/html/show-badge.html?b=grmtmejg" //"https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster"
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
    logo: eduTCEPhoto //"https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=200"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "The American College",
    location: "Madurai",
    years: "2014 - 2017",
    cgpa: "8.7",
    logo: eduACPhoto //"https://images.unsplash.com/photo-1622604647545-0cada2f34470?w=200"
  }
];

export const achievements = [
  {
    id: 1,
    title: "HCL Value Creation 2024",
    description: "Recognised for SQL Server Enterprise-to-Developer Edition downgrade automation, generating $5 million in business value"
  },
  {
    id: 2,
    title: "2Good Award - HCL Achievers League 2024",
    description: "Earned 2Good award based on 2 consecutive years of Distinguished Performance ratings"
  },
  {
    id: 3,
    title: "4Ward Award - HCL Achievers League 2025",
    description: "Earned 4Ward award based on 4 consecutive years of Distinguished Performance ratings"
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
