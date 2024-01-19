import { ccna, agile, python } from "./Images";

const educationBackground = {
  College: {
    school: "Batangas State University - Alangilan Campus",
    detail: [
      "Bachelor of Science in Computer Engineering",
      "Alangilan, Batangas City, Batangas",
      "August 2020 – June 2024",
    ],
  },
  "High School": {
    school: "Baco National High School",
    detail: [
      "With High Honors",
      "Science, Technology, Engineering and Mathematics Strand (STEM)",
      "Poblacion, Baco, Oriental Mindoro",
      "June 2014 - March 2020",
    ],
  },
  Elementary: {
    school: "Paspasin Elementary School",
    detail: [
      "Valedictorian",
      "Paspasin, Calangatan, San Teodoro, Oriental Mindoro",
      "June 2008 - March 2014",
    ],
  },
};

const certifications = [
  {
    title: "CCNAv7: Introduction to Networks course - 2022",
    detail: ["Mark Rondol P. Abdon, Batangas State University"],
    image: ccna,
  },
  {
    title: "CCNAv7: Switching, Routing, and Wireless Essentials course - 2023",
    detail: ["Mark Rondol P. Abdon, Batangas State University"],
    image: ccna,
  },
  {
    title:
      "CCNAv7: Enterprise Networking, Security, and Automation course - 2023",
    detail: ["Mark Rondol P. Abdon, Batangas State University"],
    image: ccna,
  },
  {
    title: "Project Management: Agile Methodology - February 4, 2023",
    detail: ["CpE-gnite 2023, Amphitheater, Batangas State University"],
    image: agile,
  },
  {
    title: "Jobs and Careers in Computer Engineering - February 4, 2023",
    detail: ["CpE-gnite 2023: Amphitheater, Batangas State University"],
    image: agile,
  },
];

const competitions = [
  {
    title: "Regional Programming Competition - Python (Champion)",
    detail: [
      "Institute of Computer Engineers of the Philippines (ICpEP)",
      "November 2023",
    ],
    image: python,
  },
  {
    title: "Regional Programming Competition – Python (Participant)",
    detail: [
      "Institute of Computer Engineers of the Philippines (ICpEP)",
      "November 2021",
    ],
    image: python,
  },
  {
    title: "CPElympics Programming Competition – Python (1st Place)",
    detail: [
      "Computer Engineering Students' Organization (CURSOR)",
      "April 15, 2023",
    ],
    image: python,
  },
];

const works = [
  {
    title: "Summer Job",
    detail: [
      "Treasurer’s Office of the Municipality of San Teodoro Oriental Mindoro",
      "Delivering vouchers and managing digital documents.",
      "(April 10, 2019- May 10, 2019)",
    ],
    image: python,
  },
  {
    title: "Immersion",
    detail: [
      "Municipality of Baco Oriental Mindoro",
      "Designing property layouts using AUTOCAD.",
      "(January - March 2020)",
    ],
    image: python,
  },
];
export { educationBackground, certifications, competitions, works };
