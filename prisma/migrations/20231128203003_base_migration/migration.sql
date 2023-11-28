-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "CVText" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GitHub" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "project" TEXT NOT NULL,
    "readme" TEXT NOT NULL,

    CONSTRAINT "GitHub_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "questionNumber" INTEGER NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "University" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT,
    "ranking" INTEGER,
    "acceptanceRate" DOUBLE PRECISION,
    "eligibility" TEXT,
    "submissionDeadline" TIMESTAMP(3),
    "alumnis" TEXT,

    CONSTRAINT "University_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "researchFocus" TEXT,
    "topPapers" TEXT,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SOP" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "intro" TEXT,
    "researchInt" TEXT,
    "researchExp" TEXT,
    "acadProfSummary" TEXT,
    "whyPhD" TEXT,
    "whyUni" TEXT,

    CONSTRAINT "SOP_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserUniversity" (
    "userId" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,

    CONSTRAINT "UserUniversity_pkey" PRIMARY KEY ("userId","universityId")
);

-- CreateTable
CREATE TABLE "UserProfessor" (
    "userId" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,

    CONSTRAINT "UserProfessor_pkey" PRIMARY KEY ("userId","professorId")
);

-- CreateTable
CREATE TABLE "_UserUniversities" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UserProfessors" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UniversityProfessors" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserUniversities_AB_unique" ON "_UserUniversities"("A", "B");

-- CreateIndex
CREATE INDEX "_UserUniversities_B_index" ON "_UserUniversities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserProfessors_AB_unique" ON "_UserProfessors"("A", "B");

-- CreateIndex
CREATE INDEX "_UserProfessors_B_index" ON "_UserProfessors"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UniversityProfessors_AB_unique" ON "_UniversityProfessors"("A", "B");

-- CreateIndex
CREATE INDEX "_UniversityProfessors_B_index" ON "_UniversityProfessors"("B");

-- AddForeignKey
ALTER TABLE "GitHub" ADD CONSTRAINT "GitHub_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SOP" ADD CONSTRAINT "SOP_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserUniversity" ADD CONSTRAINT "UserUniversity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserUniversity" ADD CONSTRAINT "UserUniversity_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfessor" ADD CONSTRAINT "UserProfessor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfessor" ADD CONSTRAINT "UserProfessor_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserUniversities" ADD CONSTRAINT "_UserUniversities_A_fkey" FOREIGN KEY ("A") REFERENCES "University"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserUniversities" ADD CONSTRAINT "_UserUniversities_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserProfessors" ADD CONSTRAINT "_UserProfessors_A_fkey" FOREIGN KEY ("A") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserProfessors" ADD CONSTRAINT "_UserProfessors_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UniversityProfessors" ADD CONSTRAINT "_UniversityProfessors_A_fkey" FOREIGN KEY ("A") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UniversityProfessors" ADD CONSTRAINT "_UniversityProfessors_B_fkey" FOREIGN KEY ("B") REFERENCES "University"("id") ON DELETE CASCADE ON UPDATE CASCADE;
