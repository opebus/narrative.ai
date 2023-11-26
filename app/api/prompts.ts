const introductionPrompt: string = `
Given the information about the user, craft a concise yet impactful introduction for a PhD application SoP. Ensure it encapsulates the candidate's motivation, research interests, and a succinct summary of their past research and future aspirations. Aim for a tone that reflects a smart Ivy League student's writing style.

User Information:
- CV: \${userCV}
- SOP: \${userSOP}

Example Cases:
- Example 1: \${exampleCase1}
- Example 2: \${exampleCase2}
- Example 3: \${exampleCase3}

User Style Snippet:
- \${userStyleSnippet}

<FORMAT>
I am applying to \${university}'s \${program} PhD program to pursue my research interest in \${area}. My background in \${relevantExperience}, coupled with my aspiration to \${futureGoal}, drives my application. In summary, \${briefEncapsulation}.
</FORMAT>
`;

const researchInterestPrompt: string = `
Create a detailed yet focused section on the candidate's research interests for a PhD SoP. Highlight the significance, intellectual merit, and potential impact of their research vision, balancing innovative ideas with practical applications. Ensure the writing matches the style of an insightful Ivy League student.

User Information:
- CV: \${userCV}
- Questions Answered: \${researchInterestData}

Example Cases:
- Example 1: \${exampleCase1}
- Example 2: \${exampleCase2}
- Example 3: \${exampleCase3}

User Style Snippet:
- \${userStyleSnippet}

<FORMAT>
Research Interest: My passion for \${interestArea} is driven by \${reason}. I plan to explore:

1. \${researchFocus1}: This area focuses on \${details1}, aiming to \${objective1}.
2. \${researchFocus2}: Here, I will investigate \${details2}, which is crucial for \${objective2}.
3. \${researchFocus3}: This involves \${details3}, with the goal of \${objective3}.

Each domain is interconnected, forming a cohesive vision that addresses \${broaderImpact}.
</FORMAT>
`;

const researchExperiencePrompt: string = `
Develop a comprehensive yet concise section detailing the candidate's research experience. The focus should be on problem identification, approaches tried, outcomes, and the candidate's specific contributions. Match the style of an accomplished Ivy League scholar.

User Information:
- CV: \${userCV}
- Questions Answered: \${researchExperienceData}

Example Cases:
- Example 1: \${exampleCase1}
- Example 2: \${exampleCase2}
- Example 3: \${exampleCase3}

User Style Snippet:
- \${userStyleSnippet}

<FORMAT>
In my research on \${projectTopic}, I addressed \${problem}. My approach involved \${methodology}, resulting in \${outcome}. My role was \${specificContribution}, which led to \${impactOfWork}.
</FORMAT>
`;

const academicProfessionalSummaryPrompt: string = `
Write a comprehensive summary of the candidate's academic and professional achievements, focusing on experiences relevant to their PhD pursuit. The summary should reflect the depth and breadth of their background, matching the eloquence of an Ivy League student.

User Information:
- CV: \${userCV}
- Questions Answered: \${backgroundData}

Example Cases:
- Example 1: \${exampleCase1}
- Example 2: \${exampleCase2}
- Example 3: \${exampleCase3}

User Style Snippet:
- \${userStyleSnippet}

<FORMAT>
My academic journey at \${university} in \${major} has been marked by \${achievements}. Professionally, my experience at \${companyProject} has honed my skills in \${relevantSkills}, preparing me for the challenges of a PhD. Notable achievements include \${keyAccomplishments}.
</FORMAT>
`;

const whyPhDPrompt: string = `
Formulate a persuasive section explaining the candidate's motivation for pursuing a PhD. Focus on their passion for research, career goals, and how a PhD aligns with these aspirations. The tone should resonate with the ambition of an Ivy League student.

User Information:
- Answers to "Why PhD?" questions: \${whyPhDAnswers}

Example Cases:
- Example 1: \${exampleCase1}
- Example 2: \${exampleCase2}
- Example 3: \${exampleCase3}

User Style Snippet:
- \${userStyleSnippet}

<FORMAT>
My decision to pursue a PhD stems from \${personalMotivation}. This path aligns with my career goal of \${careerObjective}, where I aspire to contribute to \${fieldIndustry} through \${specificContributions}.
</FORMAT>
`;

const whyUniversityPrompt: string = `
Construct a compelling section on why the candidate is applying to a specific university. Highlight the alignment between the candidate's research interests and the university's resources, faculty, and culture. Maintain the articulate and ambitious tone of an Ivy League aspirant.

User Information:
- Data about professors and their research work: \${professorData}
- Other relevant university-specific information: \${universityData}

Example Cases:
- Example 1: \${exampleCase1}
- Example 2: \${exampleCase2}
- Example 3: \${exampleCase3}

User Style Snippet:
- \${userStyleSnippet}

<FORMAT>
My choice of \${university} is influenced by \${reasons}. Working with \${facultyNames} will enable me to \${researchGoals}, aligning perfectly with my academic and professional aspirations.
</FORMAT>
`;
