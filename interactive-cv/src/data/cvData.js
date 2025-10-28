const EPAM_TOOLTIPS_KEYS = [
  'epam_tip_1',
  'epam_tip_2',
  'epam_tip_3',
  'epam_tip_4',
  'epam_tip_5',
  'epam_tip_6',
  'epam_tip_7',
  'epam_tip_8',
  'epam_tip_9',
  'epam_tip_10',
];

const OPTIVA_TOOLTIPS_KEYS = [
  'optiva_tip_1',
  'optiva_tip_2',
];

const EDUCATION_DESCRIPTION_KEYS = [
    { titleKey: "degree_web_mobile", place: "IES EL LAGO, MADRID", dateKey: "date_2020_2022", disciplineKey: "discipline_web_mobile" },
    { titleKey: "degree_english", place: "UNED", dateKey: "date_2014_2018", disciplineKey: null },
    { titleKey: "degree_image_tech", place: "VIRXE DO MAR-NOIA, A CORUÑA.", dateKey: "date_2003_2004", disciplineKey: null },
    { titleKey: "course_vodafone", place: "FUNDACIÓN VODAFONE E INSERTA", dateKey: "date_2020_800h", disciplineKey: "discipline_vodafone" },
];

export const cvData = {
  profile: {
    name: "Judith Vázquez",
    location: "Carral - A Coruña, Spain",
    email: "jud.vazba@gmail.com",
    phone: "622495764",
  },
  experience: [
    {
      company: "Epam",
      dates: "Dec 2022 – Present",
      descriptionKeys: [
        'epam_desc_1',
        'epam_desc_2',
        'epam_desc_3',
        'epam_desc_4', 
        'epam_desc_5', 
        'epam_desc_6', 
        'epam_desc_7', 
        'epam_desc_8', 
        'epam_desc_9',
        'epam_desc_10', 
      ],
      tooltipKeys: EPAM_TOOLTIPS_KEYS
    },
    {
      company: "Optiva_Media",
      dates: "Jun 2022 – Dec 2022",
      descriptionKeys: [
        'optiva_desc_1',
        'optiva_desc_2',
      ],
      tooltipKeys: OPTIVA_TOOLTIPS_KEYS
    },
  ],
  skills: [
    { name: "React", level: 60 },
    { name: "Angular", level: 60 },
    { name: "Flutter (Dart)", level: 60 },
    { name: "JavaScript/TS", level: 70 },
    { name: "CSS/Tailwind", level: 70 },
    { name: "HTML", level: 85 },
    { name: "Prompt Eng.", level: 40 },
    { name: "LowCode", level: 50 },
    { name: "Java", level: 30 },
    { name: "Node js", level: 50 },
    { name: "API Consumption", level: 85 }, 
    { name: "Axios", level: 70 },
    { name: "Hooks", level: 70 },
    { name: "React Testing", level: 50 },
    { name: "Vite", level: 70 },
    { name: "Webpack", level: 70 },
    { name: "Redux", level: 70 },
    { name: "jest", level: 20 },
    { name: "XML", level: 60 },
    { name: "Git", level: 85 },
    { name: "Gradle", level: 50 },
    { name: "Bitbucket", level: 60 },
    { name: "Postman", level: 60 },
    { name: "Swagger", level: 75 },
    { name: "WireMock", level: 40 },
    { name: "Web Component", level: 80 },
    { name: "npm", level: 60 },
    { name: "Langflow", level: 30 },
    { name: "ArcGIS", level: 30 },
    { name: "Jira", level: 90 },
    { name: "Figma", level: 85 },
    { name: "Kanban", level: 85 },
    { name: "Agile", level: 60 },
    { name: "WebOS/Tizen", level: 50 },
  ],
  education: EDUCATION_DESCRIPTION_KEYS,
  languages: [
    { langKey: "language_es_gl", levelKey: "level_native" },
    { langKey: "language_en", levelKey: "level_high" },
    { langKey: "language_pt", levelKey: "level_beginner" },
  ],
};