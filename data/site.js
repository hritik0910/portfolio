
export const site = {
  name: "Hritik Srivastava",
  role: "Software Engineer",
  headline: "I build the tools people decide with.",
  intro:
    "Software engineer working on a large enterprise analytics platform. I turn heavy data into fast, clear interfaces.",
  email: "hritik.s.0910@gmail.com",

  links: [
    {
      label: "GitHub",
      href: "https://github.com/hritik0910",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hritik-srivastava09/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],

  stack: [
    "Angular",
    ".NET",
    "C#",
    "Elasticsearch",
    "TypeScript",
    "Aspose.Slides",
    "SQL",
    "REST APIs",
  ],

  about: [
    "I'm a software engineer with over a year of professional experience, working on an enterprise platform that global brands use to explore their market data.",
    "I like work where the data is big and the interface still has to feel instant. My days mix Angular screens, .NET services and Elasticsearch queries, so I see a feature from the click to the index.",
  ],

  stats: [
    { value: "1+", label: "years of professional experience" },
    { value: "3+", label: "global brands supported" },
    { value: "87%", label: "faster processing in an optimization effort" },
    { value: "3", label: "core technologies: Angular, .NET, Elasticsearch" },
  ],

  skills: [
    {
      group: "Frontend",
      items: ["Angular", "TypeScript", "RxJS", "HTML and CSS"],
    },
    {
      group: "Backend",
      items: [".NET", "C#", "REST APIs", "SQL"],
    },
    {
      group: "Data and search",
      items: ["Elasticsearch", "Aggregations", "Query tuning"],
    },
    {
      group: "Documents and tools",
      items: ["Aspose.Slides", "Git", "GitHub Copilot", "Postman"],
    },
  ],

  projects: [
    {
      title: "Explorer",
      text: "Enterprise analytics platform where global brands explore market data. I build features across the Angular front end and .NET services.",
      tags: ["Angular", ".NET", "Elasticsearch"],
      kind: "bars",
    },
    {
      title: "Report generation",
      text: "Built report export capabilities that turn data into presentation-ready slide decks using Aspose.Slides.",
      tags: ["Aspose.Slides", ".NET"],
      kind: "slides",
    },
    {
      title: "Search and aggregations",
      text: "Optimized Elasticsearch queries and API responses to reduce payload size and improve responsiveness when working with large datasets.",
      tags: ["Elasticsearch", "Performance"],
      kind: "query",
    },
  ],

  experience: [
    {
      title: "Software Engineer",
      org: "Kantar Group",
      meta: "Enterprise analytics platform · Present",
      points: [
        "Build and maintain Angular features used by global brands.",
        "Develop .NET APIs and Elasticsearch queries powering search, dashboards and charts.",
        "Developed report export capabilities that turn live data into presentation-ready slide decks using Aspose.Slides.",
        "Built the report generator module end-to-end using Aspose.Slides, generating 75-slide client reports in under 40 seconds and reusing the existing left panel component to reduce development time by approximately 50%.",
        "Built and maintained dedicated Explorer+ reporting solutions for 16+ enterprise clients, including Kraft Heinz, UOB and Colgate.",
        "Eliminated redundant nested API calls and separated shared configuration from entry-point-specific data, reducing JSON payload size from 6 MB to 1 MB and cutting load time by approximately 50%, measured using Chrome DevTools.",
        "Resolved a DOM bloat issue by replacing CSS-hidden elements with Angular *ngIf directives, reducing DOM nodes from approximately 11,000 to 1,000 and removing a major performance bottleneck.",
        "Translated Figma designs and domain requirements into production-ready dashboard features while coordinating with design, product and QA teams.",
        "Automated Elasticsearch development access by implementing auto-reconnecting SSH tunnel logic in backend startup, reducing manual reconnection after network interruptions.",
      ],
    },
    {
      title: "React Developer Intern",
      org: "Celebal Technologies",
      meta: "Jun 2024 – Aug 2024",
      points: [
        "Built responsive, modular React.js interfaces, contributing to a reported 20% improvement in user retention.",
        "Translated UI/UX designs into interactive web components in collaboration with designers.",
        "Improved component reusability and state management, contributing to a reported 15% reduction in page load time.",
      ],
    },
  ],

  education: [
    {
      title: "Bachelor of Technology",
      org: "Noida Institute of Engineering & Technology",
      meta: "2021 – 2025",
    },
  ],

  services: [
    {
      title: "Interfaces for heavy data",
      text: "Dashboards, filters and charts designed to stay responsive with large datasets.",
    },
    {
      title: "APIs and search",
      text: "Reliable .NET services and Elasticsearch queries built for efficient data retrieval.",
    },
    {
      title: "Reports and exports",
      text: "Presentation and file exports generated directly from enterprise data.",
    },
  ],

  process: [
    {
      title: "Understand",
      text: "Start with who uses the feature and what decision it helps them make.",
    },
    {
      title: "Build",
      text: "Develop and validate components across the frontend, API and data layers.",
    },
    {
      title: "Ship and improve",
      text: "Release, monitor real usage and continuously improve performance and usability.",
    },
  ],
};
