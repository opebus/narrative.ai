import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  console.log(`Start seeding ...`);

  // Sample Universities
  const university1 = await prisma.university.create({
    data: {
      name: 'University A',
      info: 'Information about University A',
      ranking: 1,
      acceptanceRate: 0.3,
    },
  });

  const university2 = await prisma.university.create({
    data: {
      name: 'University B',
      info: 'Information about University B',
      ranking: 2,
      acceptanceRate: 0.4,
    },
  });

  // Sample Professors
  const professor1 = await prisma.professor.create({
    data: {
      name: 'Professor X',
      researchFocus: 'Research focus of Professor X',
      topPapers: 'Paper1, Paper2, Paper3',
    },
  });

  const professor2 = await prisma.professor.create({
    data: {
      name: 'Professor Y',
      researchFocus: 'Research focus of Professor Y',
      topPapers: 'Paper4, Paper5, Paper6',
    },
  });

  // Sample Users with related data
  const user1 = await prisma.user.create({
    data: {
      username: 'JaneDoe',
      githubUsername: 'JaneGitHub',
      CVText: "Jane's CV content here...",
      GitHubProjects: {
        create: [
          {
            project: "Jane's First Project",
            projectReadme: "Readme for Jane's First Project",
          },
          {
            project: "Jane's Second Project",
            projectReadme: "Readme for Jane's Second Project",
          },
        ],
      },
      QuestionResponses: {
        create: [
          {
            questionNumber: 1,
            answer: "Jane's answer to question 1",
          },
          {
            questionNumber: 2,
            answer: "Jane's answer to question 2",
          },
        ],
      },
      SOPs: {
        create: {
          intro: "Introduction for Jane's SOP",
          researchInt: "Jane's research interests",
          researchExp: "Jane's research experience",
          acadProfSummary: "Jane's academic and professional summary",
          whyPhD: 'Why Jane wants a PhD',
          whyUni: 'Why Jane chose a specific university',
        },
      },
      InterestedUniversities: {
        connect: [{ id: university1.id }, { id: university2.id }],
      },
      InterestedProfessors: {
        connect: [{ id: professor1.id }, { id: professor2.id }],
      },
    },
  });

  console.log(`Created user with id: ${user1.id}`);
  console.log(`Seeding finished.`);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
