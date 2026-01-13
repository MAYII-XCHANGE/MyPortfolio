import jsPDF from "jspdf";

export const generateCV = () => {
  const doc = new jsPDF();

  // Set document properties
  doc.setProperties({
    title: "Mayowa Oyeniran - CV",
    subject: "Application Developer Resume",
    author: "Mayowa Oyeniran",
    creator: "Portfolio Website",
  });

  // Header
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("MAYOWA OYENIRAN", 20, 20);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Application Developer", 20, 30);

  // Contact Information
  doc.setFontSize(10);
  doc.text("Victoria Island, Lagos State, Nigeria", 20, 40);
  doc.text("+234 905 977 3535", 20, 45);
  doc.text("oyeniranmayowavictor43@gmail.com", 20, 50);

  // Objective
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("OBJECTIVE", 20, 70);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const objective =
    "I am a dedicated Application Developer committed to creating user-friendly, responsive web applications. With a strong focus on delivering seamless and intuitive user experiences, I combine innovative design with efficient coding practices.";
  const splitObjective = doc.splitTextToSize(objective, 170);
  doc.text(splitObjective, 20, 80);

  // Skills
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("TECHNICAL SKILLS", 20, 105);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  let yPos = 115;
  const skillsData = [
    "Frontend: HTML5, CSS3, SASS, Tailwind CSS, Bootstrap, Material UI, React (Styled Components)",
    "JavaScript: React.js, Vue.js, TypeScript, Java",
    "Tools: Git, React Testing Library, Lighthouse, Web Vitals",
    "APIs: REST, GraphQL",
    "Soft Skills: Goal-oriented, Problem-solving, Team collaboration, Time management",
  ];

  skillsData.forEach((skill) => {
    const splitSkill = doc.splitTextToSize(skill, 170);
    doc.text(splitSkill, 25, yPos);
    yPos += splitSkill.length * 5 + 3;
  });

  // Work Experience
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("WORK EXPERIENCE", 20, yPos + 10);
  yPos += 20;

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
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(exp.title, 20, yPos);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`${exp.company} (${exp.period})`, 20, yPos + 5);

    yPos += 12;
    exp.achievements.forEach((achievement) => {
      const splitAchievement = doc.splitTextToSize(`• ${achievement}`, 170);
      doc.text(splitAchievement, 25, yPos);
      yPos += splitAchievement.length * 4 + 2;
    });
    yPos += 5;
  });

  // Education
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("EDUCATION", 20, yPos + 5);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text(
    "Bachelor of Engineering (B.Eng.) in Computer Engineering",
    20,
    yPos + 15
  );
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Ekiti State University (EKSU)", 20, yPos + 22);
  doc.text("Ado-Ekiti, Ekiti State, Nigeria (2016-2023)", 20, yPos + 27);
  doc.text("Second Class Upper", 20, yPos + 32);

  // Save the PDF
  doc.save("Mayowa_Oyeniran_CV.pdf");
};
