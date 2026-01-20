import jsPDF from "jspdf";

const PAGE_HEIGHT = 297; // A4 height in mm
const PAGE_WIDTH = 210;  // A4 width in mm
const MARGIN = 12;
const MAX_Y = PAGE_HEIGHT - MARGIN;

const addNewPage = (doc: jsPDF, yPos: number) => {
  if (yPos > MAX_Y) {
    doc.addPage();
    return MARGIN;
  }
  return yPos;
};

export const generateCV = () => {
  const doc = new jsPDF();
  let yPos = MARGIN;

  // Set document properties
  doc.setProperties({
    title: "Mayowa Oyeniran - CV",
    subject: "Application Developer Resume",
    author: "Mayowa Oyeniran",
    creator: "Portfolio Website",
  });

  // Header
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("MAYOWA OYENIRAN", MARGIN, yPos);
  yPos += 8;

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Application Developer", MARGIN, yPos);
  yPos += 7;

  // Contact Information
  doc.setFontSize(9);
  doc.text("Victoria Island, Lagos State, Nigeria | +234 905 977 3535 | oyeniranmayowavictor43@gmail.com", MARGIN, yPos);
  yPos += 8;

  // Objective
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("OBJECTIVE", MARGIN, yPos);
  yPos += 6;
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  const objective =
    "I am a dedicated Application Developer committed to creating user-friendly, responsive web applications. With a strong focus on delivering seamless and intuitive user experiences, I combine innovative design with efficient coding practices.";
  const splitObjective = doc.splitTextToSize(objective, PAGE_WIDTH - 2 * MARGIN);
  doc.text(splitObjective, MARGIN, yPos);
  yPos += splitObjective.length * 4 + 3;
  yPos = addNewPage(doc, yPos);
  yPos += 2;

  // Skills
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("TECHNICAL SKILLS", MARGIN, yPos);
  yPos += 6;
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");

  const skillsData = [
    "Frontend: HTML5, CSS3, SASS, Tailwind CSS, Bootstrap, Material UI, React (Styled Components)",
    "JavaScript: React.js, Vue.js, TypeScript, Java",
    "Tools: Git, React Testing Library, Lighthouse, Web Vitals",
    "APIs: REST, GraphQL",
    "Soft Skills: Goal-oriented, Problem-solving, Team collaboration, Time management",
  ];

  skillsData.forEach((skill) => {
    yPos = addNewPage(doc, yPos);
    const splitSkill = doc.splitTextToSize(skill, PAGE_WIDTH - 2 * MARGIN - 3);
    doc.text(splitSkill, MARGIN + 3, yPos);
    yPos += splitSkill.length * 3.5 + 1.5;
  });
  yPos += 2;

  // Work Experience
  yPos = addNewPage(doc, yPos);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("WORK EXPERIENCE", MARGIN, yPos);
  yPos += 6;

  const experiences = [
    {
      title: "Application Developer",
      company: "Nova Bank, Lagos State",
      period: "January 2025 – Present",
      achievements: [
        "Built the frontend for TMS (Terminal Management System) platform",
        "Contributed to Referral Management Portal and E-Visitor Management Application",
        "Contributed to adding new features on the Lagos State Collection Portal",
        "Built the frontend for Fixed Asset Management System"
      ],
    },
    {
      title: "IT Support Officer",
      company: "Saramo Global Resources Limited, Lagos State",
      period: "July 2023 – June 2024",
      achievements: [
        "Manage day-to-day IT operations, including troubleshooting technical issues",
        "Provided technical support to staff, resolving hardware, software and connectivity issues",
        "Manage System backups and recovery process under the supervision of a senior staff.",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Vnicom Tech Hub, Ogun State",
      period: "July 2023 – January 2025",
      achievements: [
        "Gained experience with Vue.js, React.js and Tailwind CSS",
        "Created responsive interfaces for various applications",
        "Collaborated and contributed to developing a Community Payment Platform application",
        "Documented projects for team collaboration",
      ],
    },
    {
      title: "Industrial Trainee",
      company: "Radio Nigeria (100.5FM), Ekiti State",
      period: "March 2021 – September 2021",
      achievements: [
        "Gained experience and understanding of Radio Broadcasting operations",
        "Assisted in managing technical equipment for live broadcasts",
        "Collaborated with the production team to ensure smooth program delivery",
      ],
    },
  ];

  experiences.forEach((exp) => {
    yPos = addNewPage(doc, yPos);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text(exp.title, MARGIN, yPos);
    yPos += 4;
    
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(`${exp.company} (${exp.period})`, MARGIN, yPos);
    yPos += 4;

    exp.achievements.forEach((achievement) => {
      yPos = addNewPage(doc, yPos);
      const splitAchievement = doc.splitTextToSize(`• ${achievement}`, PAGE_WIDTH - 2 * MARGIN - 3);
      doc.text(splitAchievement, MARGIN + 3, yPos);
      yPos += splitAchievement.length * 3.5 + 1;
    });
    yPos += 2;
  });
  yPos += 2;

  // Education
  yPos = addNewPage(doc, yPos);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("EDUCATION", MARGIN, yPos);
  yPos += 6;
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text(
    "Bachelor of Engineering (B.Eng.) in Computer Engineering",
    MARGIN,
    yPos
  );
  yPos += 5;
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("Ekiti State University (EKSU)", MARGIN, yPos);
  yPos += 4;
  
  doc.text("Ado-Ekiti, Ekiti State, Nigeria (2016-2023)", MARGIN, yPos);
  yPos += 4;
  
  doc.text("Second Class Upper", MARGIN, yPos);

  // Save the PDF
  doc.save("Mayowa_Oyeniran_CV.pdf");
};
