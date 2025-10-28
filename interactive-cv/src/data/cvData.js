const EPAM_TOOLTIPS = {
  'Developed responsive UIs for Web, Mobile, and Smart TV (WebOS, Tizen) using Flutter, Angular, and React.': 'Focused on performance optimization, reducing load times by 20% on Tizen platforms.',
  'Applied Prompt Engineering and integrated OpenAI API calls to accelerate development.': 'Utilized custom AI prompts for boilerplate code generation, boosting team velocity by 15%.',
  'Drafted comprehensive technical documentation to ensure project maintainability.': 'Created and maintained detailed documentation on Bitbucket, ensuring zero-downtime during team handovers and quick onboarding.',
};

const OPTIVA_TOOLTIPS = {
  'Gained practical development experience using Flutter, Angular, WebOS, and Tizen.': 'Worked primarily on debugging legacy codebases and refactoring components to TypeScript standards.',
  'Collaborated on projects, utilizing tools like Git, Jira, Bitbucket, Figma, and Swagger.': 'Managed feature development from Figma mockups to production-ready code, tracking progress in Jira.',
};

export const cvData = {
  profile: {
    name: "Judith Vázquez",
    title: "Frontend Developer",
    summary: "Highly motivated Frontend Developer proficient in Flutter, Angular, and React for building responsive Web, Mobile, and TV interfaces. Skilled in continuous improvement, robust technical documentation, code quality, accessibility, and social inclusion.",
    location: "Carral - A Coruña, Spain",
    email: "jud.vazba@gmail.com",
    phone: "622495764",
  },
  experience: [
    {
      company: "Epam",
      position: "Frontend Developer",
      dates: "Dec 2022 – Present",
      description: [
        'Developed responsive UIs for Web, Mobile, and Smart TV (WebOS, Tizen) using Flutter, Angular, and React.',
        'Applied Prompt Engineering and integrated OpenAI API calls to accelerate development.',
        'Drafted comprehensive technical documentation to ensure project maintainability.',
      ],
      tooltips: EPAM_TOOLTIPS
    },
    {
      company: "Optiva Media",
      position: "Junior Developer",
      dates: "Jun 2022 – Dec 2022",
      description: [
        'Gained practical development experience using Flutter, Angular, WebOS, and Tizen.',
        'Collaborated on projects, utilizing tools like Git, Jira, Bitbucket, Figma, and Swagger.',
      ],
      tooltips: OPTIVA_TOOLTIPS
    },
  ],
  skills: [
    { name: "React", level: 90 },
    { name: "Angular", level: 85 },
    { name: "Flutter (Dart)", level: 80 },
    { name: "JavaScript/TS", level: 95 },
    { name: "CSS/Tailwind", level: 90 },
    { name: "A11y/UX", level: 85 },
    { name: "Prompt Eng.", level: 75 },
  ],
  languages: [
    { lang: "Spanish / Galician", level: "Native" },
    { lang: "English", level: "High Level" },
    { lang: "Portuguese", level: "Beginner" },
  ],
};