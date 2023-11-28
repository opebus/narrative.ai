/*
  Warnings:

  - A unique constraint covering the columns `[projectId]` on the table `GitHub` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "GitHub_projectId_key" ON "GitHub"("projectId");
