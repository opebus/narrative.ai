"use client";

import Nav from "@/components/Navbar";

import { Card, Chip } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

import NextImage from "next/image";

export default function University() {
  const universityData = {
    name: "Harvard University",
    facts:
      "Aliqua officia esse veniam ut ullamco fugiat eu nulla in occaecat cillum duis. Ut elit dolore occaecat aute esse velit. Quis deserunt adipisicing aute. Deserunt elit officia esse anim eu magna quis quis. Ipsum proident est ad elit est magna ipsum labore proident aliqua excepteur. Aliquip eiusmod deserunt proident nisi eiusmod. Consequat culpa quis labore duis pariatur eu laborum ex amet cillum tempor occaecat magna est duis.",
    ranking: "Ranked #15 globally.",
    acceptanceRate: "25%",
    eligibility: "Minimum GPA of 3.5, TOEFL score of 100.",
    professors: ["Prof. John Doe", "Prof. Jane Smith"],
    papers: ["Paper Title 1", "Paper Title 2"],
    phdStudents: ["Student A", "Student B"],
    alumni: ["Famous Alumnus 1", "Famous Alumnus 2"],
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-bold text-xl">{universityData.name}</h1>
        <Image
          as={NextImage}
          width={1000}
          height={100}
          src="/images/wave.jpeg"
          alt="NextUI hero Image"
          className="mt-4"
        />
        <p className="mt-4">{universityData.facts}</p>
        <>
          <h1 className="text-bold text-lg mt-6">Ranking</h1>
          Global Ranking: <Chip>{universityData.ranking}</Chip>
          CS ranking: <Chip> {universityData.ranking}</Chip>
        </>
        <Card>
          <h2></h2>

          <p>Eligibility Criteria: {universityData.eligibility}</p>

          <h3>Related Professors</h3>
          <ul>
            {universityData.professors.map((prof) => (
              <li key={prof}>{prof}</li>
            ))}
          </ul>

          <h3>Published Papers</h3>
          <ul>
            {universityData.papers.map((paper) => (
              <li key={paper}>{paper}</li>
            ))}
          </ul>

          <p>PhD Students to Connect To</p>
          <ul>
            {universityData.phdStudents.map((student) => (
              <li key={student}>{student}</li>
            ))}
          </ul>

          <h3>Famous Alumni</h3>
          <ul>
            {universityData.alumni.map((alumnus) => (
              <li key={alumnus}>{alumnus}</li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
