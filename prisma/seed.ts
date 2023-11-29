const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const uni = [
  {
    name: 'Harvard University',
    info: "Harvard University's PhD program in Computer Science requires applicants to have completed a 4-year undergraduate degree with first class in a relevant field from a recognized institution or a master's degree. The program requires students to complete at least 16, four-unit courses or their equivalent prior to graduation. The Graduate School of Arts & Sciences (GSAS) requires all Ph.D. students to complete 16 half-courses to complete their degree. Of those 16 courses, a Ph.D. in Computer Science requires 10 letter-graded courses. The remaining 6 courses are often 300-level research courses or other undergraduate or graduate coursework beyond the 10 required courses. The GRE is not accepted for this program",
    ranking: 4,
    acceptanceRate: 0.05,
    submissionDeadline: '2022-12-15T00:00:00',
    professors: [
      'David Alvarez-Melis',
      'Nada Amin',
      'Demba Ba',
      'Boaz Barak',
      'Sitan Chen',
      'Yiling Chen',
      'Finale Doshi-Velez',
    ],
  },
  {
    name: 'Stanford University',
    info: "Stanford University's PhD program in Computer Science is a top-ranked research-oriented program, typically completed in 5-6 years. The program requires students to take 8-10 units a quarter. The GPA requirement is typically at least 3.6 (on a 4.0 scale) for PhD applicants. The program is completed on average in five to six years, depending on the student's research and progress",
    ranking: 2,
    acceptanceRate: 0.03,
    eligibility:
      "Bachelor's degree from accredited institution. GRE scores are required by your program, you must report your official scores directly to Stanford from ETS. Stanford's ETS institutional code is 4704. The program is typically completed in 5-6 years",
    submissionDeadline: '2022-12-15T00:00:00',
    professors: [
      'Sara Achour',
      'Maneesh Agrawala',
      'Alex Aiken',
      'Nima Anari',
      'Clark Barrett',
      'Michael Bernstein',
    ],
  },
  {
    name: 'UC Berkeley',
    info: "UC Berkeley's PhD program in Computer Science requires applicants to have a Bachelor's degree from an accredited institution. The GRE is not required nor accepted for this program. The TOEFL is required for students who received their bachelor’s degree in a country in which English is not an official language, with minimum scores of 570 for the paper-based test (PBT), 230 for the computer-based test (CBT), and 90 for the internet-based test (iBT). The Statement of Purpose (SoP) is required, but there is no specific length mentioned. Additionally, a satisfactory scholastic average, usually a minimum grade-point average (GPA) of 3.0 (B), is required. The coursework requirement includes a minimum of 24 semester units, including courses to establish a major subject area, 1 minor subject area, and either two courses for an outside minor or two elective courses (one free and one outside EECS). In addition, students will also need to complete prelim breadth courses",
    ranking: 3,
    acceptanceRate: 0.8,
    submissionDeadline: '2022-12-15T00:00:00',
    professors: [
      'Pieter Abbeel',
      'Ahmed Alaa',
      'Krste Asanović',
      'Babak Ayazifar',
      'Ruzena Bajcsy',
    ],
  },
  {
    name: 'Massachusetts Institute of Technology',
    info: "MIT's PhD program in Computer Science is a 5-year program. This program has two years of coursework and approximately three years of research and writing of the dissertation. Information Technology produces frontier research on the economic, business, and organizational implications of digital technologies. PhD students in the IT group are expected to acquire a solid grasp of underlying information technologies and principles of information theory, along with their organizational and economic implications[11].",
    ranking: 1,
    acceptanceRate: null,
    submissionDeadline: '2022-12-01T00:00:00',
    professors: null,
  },
  {
    name: 'California Institute of Technology',
    info: "Caltech's PhD program in Computer Science is oriented principally toward Ph.D. research. The Ph.D. program requires a minimum of three academic years of residence; required coursework is generally completed within the first two years. Students must maintain high academic standards during their graduate residence. A student's Ph.D. research must exhibit originality in the formulation, analysis, and solution of a problem that is significant to the field of study[4][12].",
    ranking: 5,
    acceptanceRate: null,
    submissionDeadline: '2022-12-15T00:00:00',
    professors: null,
  },
  {
    name: 'Carnegie Mellon University',
    info: null,
    ranking: 6,
    acceptanceRate: null,
    submissionDeadline: '2022-12-15T00:00:00',
    professors: null,
  },
  {
    name: 'Princeton University',
    info: null,
    ranking: 7,
    acceptanceRate: null,
    submissionDeadline: '2022-12-15T00:00:00',
    professors: null,
  },
  {
    name: 'University of California, Los Angeles',
    info: null,
    ranking: 8,
    acceptanceRate: null,
    submissionDeadline: '2022-12-15T00:00:00',
    professors: null,
  },
  {
    name: 'University of Chicago',
    info: null,
    ranking: 9,
    acceptanceRate: null,
    submissionDeadline: '2022-12-15T00:00:00',
    professors: null,
  },
  {
    name: 'Yale University',
    info: null,
    ranking: 10,
    acceptanceRate: null,
    submissionDeadline: '2022-12-15T00:00:00',
    professors: null,
  },
];

const professors = [
  {
    name: 'David Alvarez-Melis',
    researchFocus:
      'His research focuses on developing machine learning methods that are interpretable, robust, and fair. He is particularly interested in methods for explaining complex models and for learning with limited supervision. He has also worked on applications of these methods in healthcare and natural language processing.',
    Universities: ['Harvard University'],
  },
  {
    name: 'Nada Amin',
    researchFocus:
      'Her research interests include programming languages and type systems, verification, metaprogramming, and secure multi-party computation. She is also interested in the foundations of deep learning and the design of programming languages for machine learning.',
    Universities: ['Harvard University'],
  },
  {
    name: 'Demba Ba',
    researchFocus:
      'His research focuses on developing machine learning and signal processing algorithms to make sense of data in neuroscience and healthcare. He is particularly interested in understanding how the brain processes information and how to design personalized treatments for patients with neurological disorders.',
    Universities: ['Harvard University'],
  },
  {
    name: 'Boaz Barak',
    researchFocus:
      'His research interests include computational complexity, cryptography, and quantum computing. He is particularly interested in understanding the limits of efficient computation and the role of randomness in computation.',
    Universities: ['Harvard University'],
  },
  {
    name: 'Sitan Chen',
    researchFocus:
      'His research focuses on machine learning and its applications in healthcare. He is particularly interested in developing methods for personalized medicine and understanding the genetic basis of complex diseases.',
    Universities: ['Harvard University'],
  },
  {
    name: 'Yiling Chen',
    researchFocus:
      'Her research interests include market design, social computing, and prediction markets. She is particularly interested in understanding how to design markets and other social computing systems to aggregate information, coordinate behavior, and improve social welfare.',
    Universities: ['Harvard University'],
  },
  {
    name: 'Finale Doshi-Velez',
    researchFocus:
      'Her research focuses on machine learning and its applications in healthcare. She is particularly interested in developing methods for interpretability and fairness in machine learning, and in understanding how these methods can be used to improve patient care.',
    Universities: ['Harvard University'],
  },
  {
    name: 'Sara Achour',
    researchFocus:
      'Her research focuses on programming languages and systems, with a particular interest in making software more reliable and secure. She is also interested in the design and implementation of programming languages, and in developing tools and techniques for software verification.',
    Universities: ['Stanford University'],
  },
  {
    name: 'Maneesh Agrawala',
    researchFocus:
      'His research focuses on computer graphics, human-computer interaction, and visualization. He is particularly interested in developing techniques for visualizing complex data, and in understanding how people perceive and interpret visualizations.',
    Universities: ['Stanford University'],
  },
  {
    name: 'Alex Aiken',
    researchFocus:
      'His research interests include programming languages and systems, with a particular focus on static analysis, software verification, and parallel computing. He is also interested in the design and implementation of programming languages, and in developing tools and techniques for software verification.',
    Universities: ['Stanford University'],
  },
  {
    name: 'Nima Anari',
    researchFocus:
      'His research focuses on theoretical computer science, with a particular interest in combinatorial optimization, spectral graph theory, and algebraic methods in computer science.',
    Universities: ['Stanford University'],
  },
  {
    name: 'Clark Barrett',
    researchFocus:
      'His research interests include formal methods, automated reasoning, and software verification. He is particularly interested in developing techniques for automated reasoning about software and hardware systems, and in applying these techniques to improve the reliability and security of these systems.',
    Universities: ['Stanford University'],
  },
  {
    name: 'Michael Bernstein',
    researchFocus:
      'His research focuses on human-computer interaction, social computing, and crowdsourcing. He is particularly interested in understanding how people work together in large groups, and in designing systems that help people collaborate more effectively.',
    Universities: ['Stanford University'],
  },
  {
    name: 'Pieter Abbeel',
    researchFocus:
      'His research focuses on making robots learn from people (apprenticeship learning), how to make robots learn through their own trial and error (reinforcement learning), and how to speed up skill acquisition through learning-to-learn (meta-learning). His group also studies how AI could be made robust and how it could be aligned with human values.',
    Universities: ['UC Berkeley'],
  },
  {
    name: 'Ahmed Alaa',
    researchFocus:
      'His research focuses on developing machine learning algorithms for healthcare and genomics. He is particularly interested in developing methods for personalized medicine, understanding the genetic basis of complex diseases, and designing algorithms for learning with limited supervision.',
    Universities: ['UC Berkeley'],
  },
  {
    name: 'Krste Asanović',
    researchFocus:
      'His research interests include computer architecture, with a focus on the design of energy-efficient and high-performance microprocessors. He is also interested in the design of hardware and software interfaces that can improve the efficiency and programmability of computer systems.',
    Universities: ['UC Berkeley'],
  },
  {
    name: 'Babak Ayazifar',
    researchFocus:
      'His research focuses on signal processing, with a particular interest in its theoretical foundations and applications in communication, control, and biomedical engineering.',
    Universities: ['UC Berkeley'],
  },
  {
    name: 'Ruzena Bajcsy',
    researchFocus:
      'Her research focuses on artificial intelligence, computer vision, and robotics. She is particularly interested in the development of computational models for perception, learning, and motor control. She is also interested in their application to improve human health and the quality of life.',
    Universities: ['UC Berkeley'],
  },
];

async function main() {
  console.log(`Start seeding ...`);

  // Keep track of university IDs
  const universityIds: Record<string, string> = {};

  for (const u of uni) {
    const university = await prisma.university.create({
      data: {
        name: u.name,
        info: u.info,
        ranking: u.ranking,
        acceptanceRate: u.acceptanceRate,
        eligibility: u.eligibility,
        submissionDeadline: new Date(u.submissionDeadline),
      },
    });
    console.log(`Created university with id: ${university.id}`);
    universityIds[u.name] = university.id;
  }

  for (const professorData of professors) {
    const universityIdsToConnect = professorData.Universities.map((uniName) => {
      return { id: universityIds[uniName] }; // Use the map to get the ID
    });

    await prisma.professor.create({
      data: {
        name: professorData.name,
        researchFocus: professorData.researchFocus,
        Universities: {
          connect: universityIdsToConnect,
        },
      },
    });
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
