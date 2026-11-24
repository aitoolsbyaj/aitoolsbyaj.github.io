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
    { role: "Freelance Developer", organisation: "Freelance", period: "July 2018 – Present (as listed in CV)", place: "Delhi, India", description: "Works with users and project teams to understand requirements, develop applications and deliver software solutions." },
    { role: "Computer Science Educator", organisation: "Freelance", period: "July 2018 – Present (as listed in CV)", place: "Delhi, India", description: "Taught computer science concepts, supported student training and developed programming skills in Python, Java and HTML." },
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
    { title: "Machine Learning based Comprehensive Analysis of COVID-19 and its Vaccination in India", journal: "Indian Journal of Natural Sciences", date: "June 2023", doi: "" },
    { title: "Impact of Mindfulness: A Perspective of Teachers of DoE", journal: "Malaysian Mental Health Journal", date: "January 2023", doi: "" },
    { title: "Forecasting of COVID-19 Cases using SARIMA Model in India", journal: "Solid State Technology", date: "September 2020", doi: "" },
    { title: "Verification of Biometric Traits Using Deep Learning", journal: "International Journal of Innovative Technology and Exploring Engineering (IJITEE)", date: "January 2019", doi: "" },
    { title: "A Comparative Study of B2C and B2B e-Commerce Development Platforms", journal: "IJCA", date: "April 2018", doi: "" }
  ],
  featuredProject: {
    title: "DOE Examination Result Analysis",
    description: "A web-based application for analysing school examination result workbooks and generating structured performance reports. Users can upload supported Excel workbooks and download an analysis workbook when the relevant analysis workflow is available.",
    url: "https://doe-exam-analysis.streamlit.app/" // Paste your Streamlit app URL here before publishing.
  },
  projects: [
    { title: "COVID-19 Analysis — India", period: "March 2021 – June 2021", description: "A Python GUI-based desktop application developed with Tkinter, Pandas, NumPy, Matplotlib, Seaborn and Plotly to explore COVID-19 case information." },
    { title: "Rainfall Trend Analysis — Indian Monsoon", period: "January 2021 – March 2021", description: "Analysed rainfall patterns over 116 years (1901–2016) and used a Decision Tree algorithm to classify years as drought, flood or normal." },
    { title: "Academic ERP — VidyaOne", period: "July 2013 – June 2015", description: "Worked as software developer and team lead on an ERP solution supporting academic activities and performance monitoring for 3,000+ students and 150+ faculty." },
    { title: "E-commerce development projects", period: "2015 – 2018", description: "Contributed to B2B/B2C e-commerce solutions for clients including Flexsteel, Spectrum Brands, Karma US Motors and Ivoclar Vivadent using SAP Hybris." }
  ],
  certifications: [
    { title: "SEL for Teachers", provider: "UNESCO MGIEP" },
    { title: "SEL for Classrooms", provider: "UNESCO MGIEP" },
    { title: "Facilitator for SEL for Schools", provider: "UNESCO MGIEP" },
    { title: "Constructive Teaching and Learning with Technology (CTLT) — Part 1", provider: "TISS — Centre of Excellence in Teacher Education" },
    { title: "Computer Science Teacher", provider: "Centre for Teacher Accreditation (CENTA)" },
    { title: "Teaching Programming to Young Learners", provider: "OpenSAP — SAP" },
    { title: "AI for Educators", provider: "IITM Pravartak — SWAYAM Plus (add completion date/details)" },
    { title: "Python, Data Science and Machine Learning courses", provider: "Udemy — add individual course details if desired" }
  ],
  skillGroups: [
    { title: "Programming & development", items: "Python · Java · HTML · Software development · SAP Hybris" },
    { title: "AI & data", items: "Data science · Machine learning · Generative AI · Data analysis" },
    { title: "Education & learning", items: "Computer science teaching · e-Learning · Student mentoring · Digital tools" }
  ]
};
