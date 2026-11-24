/*
  EDIT YOUR PORTFOLIO HERE.
  Add, remove or update items in these arrays. Keep quotation marks and commas.
  For links, use a full https:// URL. Leave a URL blank ("") if it is not available yet.
*/
const portfolioData = {
  name: "Aashish Jain",
  headline: "Computer Science Educator | Developer | AI & Educational Technology Enthusiast",
  eyebrow: "EDUCATION · RESEARCH · TECHNOLOGY",
  intro: "Computer Science educator and software development professional with experience across teaching, application development, data science and technology-enabled learning.",
  aboutLead: "Connecting computer science, practical software development and meaningful learning experiences.",
  about: "I work at the intersection of computer science education and technology. My professional journey includes teaching and mentoring learners, developing software solutions, working with data-driven projects and exploring the role of artificial intelligence in education. I am interested in building practical tools that support teaching, learning, research and institutional workflows.",
  location: "Delhi, India",
  email: "aitoolsbyaj@gmail.com",
  linkedin: "https://www.linkedin.com/in/learneraj",
  github: "https://github.com/aitoolsbyaj",
  cvUrl: "", // Optional: upload a public CV PDF to assets/documents/ and enter its path, e.g. "assets/documents/Aashish_Jain_CV.pdf"
  streamlitUrl: "", // Add your live DOE Examination Result Analysis app URL here.
  skills: ["Computer Science Education", "Python", "Java", "HTML", "Data Science", "Machine Learning", "Generative AI", "e-Learning", "Software Development", "Content Writing", "MS Office"],
  experience: [
    { role: "Freelance Developer", organisation: "Freelance", period: "July 2018 – Present", place: "Delhi, India", description: "Working with users and project teams to understand requirements, develop applications and deliver software solutions." },
    { role: "Computer Science Educator", organisation: "Freelance", period: "July 2018 – Present", place: "Delhi, India", description: "Teaching computer science concepts, supporting student training and developing programming skills in Python, Java and other web technologies." },
    { role: "Volunteer", organisation: "Robin Hood Army", period: "2018 – Present", place: "Meerut, India", description: "Helping the learners from unprivileged areas and feeding the hungry citizens." },
    { role: "Associate Technical Consultant", organisation: "KPIT Technologies Ltd.", period: "June 2015 – July 2018", place: "Noida, Uttar Pradesh, India", description: "Contributed to B2B and B2C e-commerce solutions, coordinated with project teams and trained colleagues on SAP Hybris technologies." },
    { role: "Assistant Professor | Software Developer", organisation: "Vidya College of Engineering", period: "August 2011 – June 2015", place: "Meerut, Uttar Pradesh, India", description: "Taught and mentored students, guided computer science projects and developed/monitored an ERP system serving 3,000+ students and 150+ faculty members." }
  ],
  education: [
    { qualification: "Master’s in Computer Science", institution: "Kurukshetra University, Kurukshetra, India", period: "2024-26", detail: "First Division" },
    { qualification: "Master’s in Education", institution: "Subharti University, Meerut, India", period: "2022-24", detail: "First Division" },
    { qualification: "Post Graduate Diploma in Data Science and Statistics", institution: "Symbiosis Centre for Distance Learning", period: "2019 – 2021", detail: "Hons." },
    { qualification: "Post Graduate Diploma in Computer Applications", institution: "Swami Vivekanand Subharti University", period: "2019 – 2020", detail: "First Division" },
    { qualification: "B.Tech in Computer Science and Engineering", institution: "Uttar Pradesh Technical University", period: "2007 – 2011", detail: "First Division" }
  ],
  publications: [
    { title: "Predictive Health with AI: A Comparative Evaluation of ChatGPT and Google Gemini for Diagnostic Decision-Making Using Patient Test Data", journal: "Nova Publishers", date: "June 2026", doi: "https://novapublishers.com/shop/the-10th-international-conference-on-research-innovations-trends-in-computational-science/" },
    { title: "Interpretable Deep Learning for Fabric Defect Detection and Quality Assurance", journal: "IEEE Xplore", date: "April 2026", doi: "https://ieeexplore.ieee.org/document/11468933" },
    { title: "Transformation of the Traditional Classroom to Artificial Intelligence-Enabled 21st Century Classrooms in India: A Comprehensive Review", journal: "IGI Global", date: "Mar 2026", doi: "https://www.igi-global.com/chapter/transformation-of-the-traditional-classroom-to-artificial-intelligence-enabled-21st-century-classrooms-in-india/406152" },
    { title: "Prompt Engineering based Biometric Identification using Different Biometric Traits", journal: "AIP", date: "Oct 2025", doi: "https://pubs.aip.org/aip/acp/article-abstract/3335/1/030014/3366332/Prompt-engineering-based-biometric-identification" },
    { title: "Predictive Trend Analysis in Fashion: Leveraging Machine Learning for Forecasting Styles and Consumer Preferences", journal: "IEEE Xplore", date: "May 2025", doi: "https://ieeexplore.ieee.org/document/10991057" },
    { title: "Technologies for Quality and Sustainable Online Education in Rural India: A Comprehensive Review", journal: "IEEE Xplore", date: "Oct 2024", doi: "https://ieeexplore.ieee.org/document/10772876" },
    { title: "Machine Learning based Comprehensive Analysis of COVID-19 and its Vaccination in India", journal: "Indian Journal of Natural Sciences", date: "June 2023", doi: "https://www.tnsroindia.org.in/JOURNAL/issue78/ISSUE%2078%20JUNE%202023%20-%20FULL%20TEXT%20PART%2002.pdf" },
    { title: "Impact of Mindfulness: A Perspective of Teachers of DoE", journal: "Malaysian Mental Health Journal", date: "January 2023", doi: "https://mmhj.com.my/archives/1mmhj2023/1mmhj2023-16-25.pdf" },
    { title: "Forecasting of COVID-19 Cases using SARIMA Model in India", journal: "Solid State Technology", date: "September 2020", doi: "https://solidstatetechnology.us/index.php/JSST/article/view/2445" },
    { title: "Verification of Biometric Traits Using Deep Learning", journal: "International Journal of Innovative Technology and Exploring Engineering (IJITEE)", date: "January 2019", doi: "https://www.ijitee.org/wp-content/uploads/papers/v8i10S/J108308810S19.pdf" },
    { title: "A Comparative Study of B2C and B2B e-Commerce Development Platforms", journal: "IJCA", date: "April 2018", doi: "https://www.ijcaonline.org/proceedings/icrdsthm2017/number1/29312-7012/" }
  ],
  featuredProject: {
    title: "DOE Examination Result Analysis",
    description: "A web-based application for analysing school examination result workbooks and generating structured performance reports. Users can upload supported Excel workbooks and download an analysis workbook when the relevant analysis workflow is available.",
    url: "https://doe-exam-analysis.streamlit.app/" // Paste your Streamlit app URL here before publishing.
  },
 
projects: [
  {
    title: "COVID-19 Analysis — India",
    category: "Data Science",
    period: "March 2021 – June 2021",
    description: "A Python GUI-based desktop application developed to explore COVID-19 case information and visualize trends.",
    technologies: ["Python", "Tkinter", "Pandas", "NumPy", "Matplotlib", "Plotly"],
    url: "",
    github: ""
  },
  {
    title: "Rainfall Trend Analysis — Indian Monsoon",
    category: "Machine Learning",
    period: "January 2021 – March 2021",
    description: "Analysed rainfall patterns over 116 years (1901–2016) and used a Decision Tree algorithm to classify years as drought, flood or normal.",
    technologies: ["Python", "Pandas", "Decision Tree", "Data Visualization"],
    url: "",
    github: ""
  },
  {
    title: "Academic ERP — VidyaOne",
    category: "Enterprise Software",
    period: "July 2013 – June 2015",
    description: "Worked as software developer and team lead on an ERP solution supporting academic activities and performance monitoring for 3,000+ students and 150+ faculty.",
    technologies: ["Software Development", "ERP"],
    url: "",
    github: ""
  },
  {
    title: "E-commerce Development Projects",
    category: "Enterprise Development",
    period: "2015 – 2018",
    description: "Contributed to B2B/B2C e-commerce solutions for Flexsteel, Spectrum Brands, Karma US Motors and Ivoclar Vivadent using SAP Hybris.",
    technologies: ["SAP Hybris", "Java", "E-commerce"],
    url: "",
    github: ""
  },
  {
    title: "My New Project",
    category: "Artificial Intelligence",
    period: "2026",
    description: "Write your project description here.",
    technologies: ["Python", "AI", "Machine Learning"],
    url: "https://example.com",
    github: "https://github.com/your-repository"
  }
],
  certifications: [
    { title: "Generative AI for Educator Certificate", provider: "Google" },
    { title: "AI for Educators", provider: "IITM Pravartak — SWAYAM Plus" },
    { title: "Constructive Teaching and Learning with Technology (CTLT) — Part 1", provider: "TISS — Centre of Excellence in Teacher Education" },
    { title: "Computer Science Teacher", provider: "Centre for Teacher Accreditation (CENTA)" },
    { title: "Teaching Programming to Young Learners", provider: "OpenSAP — SAP" },
    { title: "SEL for Teachers", provider: "UNESCO MGIEP" },
    { title: "SEL for Classrooms", provider: "UNESCO MGIEP" },
    { title: "Facilitator for SEL for Schools", provider: "UNESCO MGIEP" },
    { title: "Python, Data Science and Machine Learning courses", provider: "Udemy — add individual course details if desired" }
  ],
  skillGroups: [
    { title: "Programming & development", items: "Python · Java · HTML · Software development · SAP Hybris" },
    { title: "AI & data", items: "Data science · Machine learning · Generative AI · Data analysis" },
    { title: "Education & learning", items: "Computer science teaching · e-Learning · Student mentoring · Digital tools" }
  ]
};
