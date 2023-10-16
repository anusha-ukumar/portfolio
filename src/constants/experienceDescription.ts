export const experienceDescription = [
  {
    key: "default",
    description: "Please click on item in the timeline to see the description.",
  },
  {
    key: "volvo",
    heading: "Volvo Cars",
    timeline: "2018-present",
    location: "Sunnyvale, CA",
    description:
      "Experienced Frontend Engineer with a strong track record of creating reusable components. Proficient in React, JavaScript, and Git version control, I'm passionate about seizing opportunities to apply my skills effectively and deliver exceptional results.",
    projects: [
      {
        name: "User interface to manage orders",
        bullets: [
          "Built an internal web application to streamline order lifecycle management to support the online car purchase process.",
          "Collaborated with the product team to gather requirements, designed the application architecture, and implemented resilient solutions.",
          "Attained 80% test coverage by crafting unit tests using Jest and Enzyme, ensuring high code quality and minimizing bugs.",
          "Employed Agile/Scrum methodologies and CI/CD best practices for streamlined task execution."
        ],
        skills: [
          "React",
          "JavaScript",
          "ES6",
          "HTML",
          "CSS",
          "SASS",
          "Node.js",
          "Next.js",
          "Redux",
          "MobX",
          "React hooks",
          "Webpack",
          "Jest",
          "Enzyme",
          "TypeScript",
        ],
      },
      {
        name: "Design APIs to hel with the management of orders",
        bullets: [
          "Created RESTful APIs within a microservice-oriented framework to manage data and facilitate seamless integration between internal and external systems.",
        ],
        skills: [
          "Java",
          "Spring boot",
          "MongoDB",
          "NoSQL",
          "Docker",
          "Kubernetes",
        ],
      },
      {
        name: "Price calculation for car orders",
        bullets: [
          "Worked on RESTful APIs and GraphQL APIs to calculate product prices in an order.",
          "Set up a PostgreSQL database using the code-first approach with Entity Framework Core."
        ],
        skills: [
          "C#",
          "Graph QL",
          "Apollo",
          ".NET",
          "PostgreSQL",
          "RDBMS"
        ],
      },
    ],
  },
  {
    key: "usc",
    heading: "University of Southern California",
    timeline: "2016-2018",
    location: "Los Angeles, CA",
    description:
      "Degree: Master of Science. Major: Computer Science. Coursework: Web Technology, Operating Systems, Artificial Intelligence, Natural Langugae Processing",
    projects: [
      {
        name: "Named Entity Recognition on Twitter Data, Natural Language Processing",
        bullets: [
          "Designed features to perform NER tagging. Implemented the Viterbi Algorithm to perform Conditional Random Field (CRF) tagging and compared the results with the Logistic Regression tagger.",
        ],
        skills: ["NLP"],
      },
      {
        name: "Game Prediction, Artificial Intelligence",
        bullets: [
          "Designed a method to predict the next steps in the ‘Reversi’ game using Alpha-Beta pruning algorithm.",
        ],
        skills: ["AI"],
      },
    ],
  },
  {
    key: "srib",
    heading: "Samsung Research & Development Institute",
    timeline: "2014-2016",
    location: "Bangalore, India",
    description:
      "Worked with the Bluetooth R&D team to maintain software and work on PoCs.",
    projects: [
      {
        name: "Android messaging application",
        bullets: [
          "Developed an Android messaging application utilizing the ANT+ protocol, enabling communication with mobile accessory devices.",
        ],
        skills: ["Android", "Java", "JUint"],
      },
    ],
  },
  {
    key: "sit",
    heading: "Siddaganga Institute of Technology",
    timeline: "2010-2014",
    location: "Tumkur, India",
    description: "Degree: Bachelor of Science. Major: Computer Science",
  },
  {
    key: "hobbyproject",
    heading: "Hobby Projects",
    description: "Projects I have worked on, in my spare time.",
    projects: [
      {
        name: "News feed",
        bullets: [
          "Web application that displays news headlines for different categories",
        ],
        linkToSite: "https://anusha-ukumar.github.io/ssr/news-feed/general",
        linkToSource: "https://github.com/anusha-ukumar/ssr",
        skills: ["React", "Next.js", "Server side rendering", "REST APIs"],
      },
      {
        name: "Portfolio",
        bullets: ["My personal portfolio"],
        linkToSource: "https://github.com/anusha-ukumar/portfolio",
        skills: ["React", "TypeScript", "Next.js"],
      },
    ],
  },
];
