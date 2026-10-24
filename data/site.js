// Edit everything here. The page reads from this file.
export const site = {
  name: "Hritik Srivastava",
  role: "Software Engineer",
  headline: "I build the tools people decide with.",
  intro:
    "Software engineer working on a large enterprise analytics platform. I turn heavy data into fast, clear interfaces.",
  email: "you@example.com",
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
  stack: ["Angular", ".NET", "C#", "Elasticsearch", "TypeScript", "Aspose.Slides", "SQL", "REST APIs"],

  about: [
    "I'm a software engineer with over a year of professional experience, working on an enterprise platform that global brands use to explore their market data.",
    "I like work where the data is big and the interface still has to feel instant. My days mix Angular screens, .NET services and Elasticsearch queries, so I see a feature from the click to the index.",
    "Replace this paragraph with what you care about: clean code, performance, learning a new codebase fast, or what you do outside work.",
  ],
  stats: [
    { value: "1+", label: "years in production" },
    { value: "3+", label: "global brands on the platform" },
    { value: "3", label: "core technologies: Angular, .NET, Elasticsearch" },
    { value: "∞", label: "cups of chai, replace me" },
  ],

  skills: [
    { group: "Frontend", items: ["Angular", "TypeScript", "RxJS", "HTML and CSS"] },
    { group: "Backend", items: [".NET", "C#", "REST APIs", "SQL"] },
    { group: "Data and search", items: ["Elasticsearch", "Aggregations", "Query tuning"] },
    { group: "Documents and tools", items: ["Aspose.Slides", "Git", "GitHub Copilot", "Postman"] },
  ],

  projects: [
    {
      title: "Explorer",
      text: "Enterprise platform where global brands explore market data. I build features across the Angular front end and .NET services.",
      tags: ["Angular", ".NET", "Elasticsearch"],
      kind: "bars",
    },
    {
      title: "Report generation",
      text: "Export features that turn live data into ready-to-present slide decks, built with Aspose.Slides.",
      tags: ["Aspose.Slides", ".NET"],
      kind: "slides",
    },
    {
      title: "Search and aggregations",
      text: "Queries and aggregations that keep large datasets responsive. Replace this with your own result, such as cutting load time by a measured amount.",
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
        "Build and maintain Angular features used by global brands every day.",
        "Develop .NET APIs and Elasticsearch queries behind the platform's search and charts.",
        "Created report export that turns live data into slide decks with Aspose.Slides.",
        "Replace these with measurable results, such as load time cut, users reached or bugs fixed.",
        " Independently built the report generator module end-to-end using Aspose.Slides — generating 75-slide client reports in under 40 seconds — while reusing the existing left panel component to cut development time by ~50%.", 
        "Built and maintained dedicated Explorer+ reporting solutions for 16+ enterprise clients, including Kraft Heinz, UOB, and Colgate.",
        "Eliminated redundant nested API calls and restructured API responses to separate shared config from entry-point-specific data, reducing JSON payload size from 6MB to 1MB and cutting load time by ~50% (measured via Chrome DevTools).",
        "Fixed a DOM bloat issue causing tool-wide lag by replacing CSS-hidden elements with Angular *ngIf directives, cutting DOM nodes from ~11,000 to ~1,000 and eliminating the performance bottleneck. ",
        "Translated Figma designs and domain team requirements into production-ready dashboard features, coordinating across design, product, and QA teams.",
        "Automated Elasticsearch access for the dev team by building auto-reconnecting SSH tunneling logic into backend startup, eliminating manual reconnection after network drops. ",
      ],
    },
    {
      title: "React Developer Intern",
      org: "— Celebal Technologies ",
      meta: "jun 2024 - aug 2024",
      points: [
        ' Built responsive and modular web interfaces using React.js, improving user retention by 20%.', 
         'Converted UI/UX designs into interactive, accessible web components in collaboration with designers.', 
         'Optimized component reusability and state management, reducing page load time by 15%.',
      ],
    },
  ],
  education: [
    { title: "Bechelor of Technology", org: "Noida Institute of Engineering & Technology", meta: "2021 - 2025" },
  ],

  services: [
    { title: "Interfaces for heavy data", text: "Dashboards, filters and charts that stay fast with large datasets." },
    { title: "APIs and search", text: "Clean .NET services and Elasticsearch queries that return the right answer quickly." },
    { title: "Reports and exports", text: "Slide, document and file exports generated straight from your data." },
  ],

  process: [
    { title: "Understand", text: "I start with who uses the feature and what decision it helps them make." },
    { title: "Build", text: "Small, tested pieces across the front end, API and data layer." },
    { title: "Ship and improve", text: "Release, watch real usage, then tighten speed and polish." },
  ],
};