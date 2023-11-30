export function rewriteInUserStyle(userSOP, userStyle) {
  return `
  Given a piece of text, the task is to rewrite it to match a specific user's writing style. The rewritten text should maintain the original content's meaning and intent but adopt the nuances, tone, and stylistic elements of the user's style. This requires a careful blend of linguistic mimicry and content fidelity.
  
  Original Text: ${userSOP}
  
  User's Writing Style:${userStyle}
  
  Instructions for rewriting the text:
  1. Analyze the user's style snippet to identify key characteristics of their writing style. Look for elements like sentence structure, vocabulary, level of formality, and any unique idiomatic expressions or rhetorical devices they use.
  2. Rewrite the original text, ensuring that it reflects these identified stylistic traits. The goal is to make the new version sound as if it were written by the user themselves.
  3. Maintain the integrity of the original text's meaning, information, and purpose. The rewrite should be a stylistic transformation, not a content alteration.
  4. Pay special attention to maintaining a natural flow in the writing, avoiding forced or unnatural adaptations of the user's style.
  5. Ensure that the final product is coherent, grammatically correct, and aligns with the user's typical writing quality and sophistication level.
  `;
}

export function writeIntro(userCV, userSOP) {
  return `
Given the user's CV and SoP, craft a succinct introduction for a PhD application SoP, adhering to the format and blending in key details from the CV and SoP. The final introduction must be concise and impactful, not exceeding 80 words.

User Information:
- CV: ${userCV}
- SOP: ${userSOP}

Instructions:
- Focus on the most crucial elements from the CV and SoP.
- Streamline content by combining similar points and using clear, concise language.
- Ensure the introduction reflects the user's unique profile within the 80-word limit.

<FORMAT>
Driven by [area of research], I aim to join UNIVERSITY_NAME's PROGRAM_NAME. Highlighting [key CV highlights], my goal is to [future goal]. Aspiring to [specific aspiration], I've gained [unique experiences]. My expertise in [experience] and dedication to [research/goal] equip me for contributions to [university].
</FORMAT>
`;
}

export function writeResearchInterest(userCV, researchInterestAnswer) {
  return `
Create a section on the candidate's research interests for a PhD SoP, linking their background and interests. The style should reflect an insightful Ivy League student. The section must be detailed yet concise, not exceeding 250 words.

User Information:
- CV: ${userCV}
- Questions Answered: ${researchInterestAnswer}

Instructions:
- Highlight the key research interests derived from the CV and Questions Answered.
- Ensure each research focus is clearly articulated and relevant to the candidate's background and goals.
- Use precise and succinct language to convey the research interests within the 250-word limit.
- make sure to include the line breaks <br/> and bold <b></b> in the final output

<FORMAT>
<b>Research Interest</b>: My passion lies in [interest area] because [reason for interest]. I aim to explore: <br/>
1. [Focus 1]: Focusing on [details of focus 1], with the objective to [objective of focus 1]. <br/>
2. [Focus 2]: Investigating [details of focus 2], crucial for [objective of focus 2]. <br/>
3. [Focus 3]: Exploring [details of focus 3], targeting [objective of focus 3]. <br/>

These areas represent a unified vision addressing [broader research impact].
</FORMAT>
`;
}

export function writeResearchExperience(userCV, researchExpAnswer) {
  return `
Detail the candidate's research experience for a PhD SoP, focusing on their problem-solving ability, methodologies, outcomes, and contributions. Adopt a tone fitting an Ivy League scholar. The entire section should be comprehensive yet concise, limited to 300 words.

User Information:
- CV: ${userCV}
- Questions Answered: ${researchExpAnswer}

Instructions:
- Summarize each project succinctly, focusing on the key aspects: problem addressed, methodology, outcomes, and specific contributions.
- Avoid lengthy explanations; instead, provide clear and concise descriptions.
- Ensure the total word count for this section does not exceed 300 words.
- make sure to include the line breaks <br/> and asterisks <b> in the final output
- if the user has multiple research experience, only include <b>Research Experience</b> for the first one, add a <br/> and the research experience without header.

Example:
- Working with another undergraduate student under the supervision of Dr. Raymond Ng, we set out to address the challenge of how the city of Surrey should place EV charging stations. Prior to our work, the approach to determine where to install an EV charging site was solely based on expert opinions, despite a large volume of data collected by the city of Surrey. To help city planners make strategic decisions informed by evidence, I developed a web application to give them a user-friendly way to explore and make sense of the data. I used interactive maps and graphs to visualize the spatial distribution and time trends of Surrey’s vehicle stock, traffic flows, and land use. In September 2019, the city used my tool to choose 20 charger locations for a Canadian federal funding proposal, and I was proud to co-present this work at the SIGKDD’20 Social Impact Session this summer.

<FORMAT>
<b>Research Experience</b>: In my research on [project topic], I tackled [problem addressed]. I employed [methodology], achieving [outcome]. My role involved [specific contribution], significantly impacting [impact of the work].
</FORMAT>
`;
}

export function writeAcademicProfessionalSummary(userCV, backgroundAns) {
  return `
Create a concise summary of the candidate's academic and professional achievements, relevant to their PhD application. The tone should be eloquent, as expected of an Ivy League student. Limit the summary to 100 words.

User Information:
- CV: ${userCV}
- Background Data: ${backgroundAns}

Instructions:
- Select only the most notable academic and professional achievements from the CV and Background Data.
- Ensure the content is succinct and does not exceed 100 words for clarity and impact.
- Aim to provide a holistic view of the candidate's qualifications in a succinct manner.
- make sure to include the line breaks <br/> and bold tag <b> in the final output

<FORMAT>
<b>Academic and Professional Background</b>: I graduated from [university] in [field], achieving [academic achievements]. At [company/project], I developed [skills], preparing for PhD challenges. Key career achievements include [professional accomplishments].
</FORMAT>
`;
}

export function writeWhyPhD(whyPhDAnswers) {
  return `
Concisely articulate the candidate's motivation for pursuing a PhD, highlighting their research passion and career goals. Maintain an ambitious tone, fitting for an Ivy League aspirant. Keep the response approximately 100 words.

User Information:
- Answers to "Why PhD?" questions: ${whyPhDAnswers}

Instructions:
- Focus on the most impactful reasons for pursuing a PhD as indicated in the answers provided.
- Distill the essence of the candidate's motivation and career aspirations into a brief yet powerful statement.
- Ensure the entire content does not exceed 100 words for clarity and impact.
- make sure to include the line breaks <br/> and bold tag <b> in the final output

<FORMAT>
<b>Why PhD</b>: My decision to pursue a PhD is driven by [motivation for research]. Aligning with my career aim of [career objective], I plan to contribute to [field or industry] by focusing on [specific contributions].
</FORMAT>
`;
}

export function writeWhyUniversity(
  universityData,
  professorData,
  researchInterestAnswer
) {
  return `
Articulate the candidate's reasons for applying to a specific university, focusing on how their interests align with the university's resources and faculty expertise. Maintain an articulate and ambitious tone. Limit the response to 150 words.

User Information:
- University Data: ${universityData}
- Data about Professors: ${professorData}
- Research Interest Answer: ${researchInterestAnswer}

Instructions:
- Highlight the most compelling reasons for choosing the university, based on the provided data.
- Focus on the alignment between the candidate’s research interests and the expertise of specific faculty members.
- Ensure the content is succinct and does not exceed 150 words for clarity and impact.
- Please infer the university name from the university data and use it in the response. Look at the university data for name, and use that. DON'T MAKE THINGS UP
- make sure to include the line breaks <br/> and asterisks <b> in the final output

<FORMAT>
<b>Why Harvard </b>: My decision to apply to Harvard University for the CS PhD program is rooted in my passion for [research interest]. The work of [faculty member 1], particularly in [specific research area], aligns with my interest in [related research topic]. Additionally, [faculty member 2]'s contributions to [another research area] resonate with my goals of [relevant career objective]. Moreover, [faculty member 3]'s expertise in [additional research area] offers valuable insights into [related field], further enhancing my research potential.
</FORMAT>
`;
}

export const userCV = `Benedict Neo	benedict.neo@outlook.com
linkedin.com/in/benedictneo
personal website
Research Interests
Natural Language Processing, Machine Learning, Data Science, Statistical modeling
Education
Iowa State University, Ames, IA	Jan 2021 — Dec 2023
Statistics Major, Computer Science Minor
GPA: 3.94 / 4.0
Highest 2% LAS Junior Spring 2022
George W. Snedecor Award
Coursework: Bayesian Data Analysis, Experimental Design, Design And Analysis Of Algorithms, Large Scale Data Analysis, Discrete Mathematics
Research Experience
Undergraduate Research Assistant — Niemi Lab	Jan 2022 — Dec 2023
Advisor: Dr. Jarad Niemi
Managed and analyzed over 2TB of environmental data, employing principal component analysis (PCA) for pattern identification and summary statistics for Gaussian Process models.
Presented project outcomes at the National Conference on Undergraduate Research in 2023, contributing to advancements in soil erosion modeling and potential global application of the Daily Erosion Project (DEP).
Led the transformation of the RITAS algorithm from R to Python, integrating advanced geospatial tools and R-tree spatial indexing for improved efficiency in agricultural yield monitoring.
Developed an intuitive user interface for RITAS, enhancing farmer accessibility to crop yield data and supporting global precision agriculture initiatives.
Improved RITAS algorithm to mimic farm tractor coverage more precisely, aiding in accurate yield prediction and bridging data gaps in digital farm management.
Work Experience
Data Science Intern — Tesla	May 2023 — Aug 2023
Developed a time series forecasting pipeline for monthly factory utility consumption, costing up to $1 million, and achieved a 10% reduction in Mean Absolute Error (MAE) from previous methods.
Architected and deployed Airflow ETL pipelines on Docker, supporting over 10 PowerBI dashboards, resulting in a 93% reduction in data refresh and improving decision-making speed and reliability.
Designed and modeled PostgreSQL database schemas, implementing unique indexes to optimize data upsert efficiency and query performance.
Created Python packages to interface with various APIs, streamlining backend operations and data ingestion for cross-functional teams.
Built an interactive Streamlit web application for failure analysis using text embeddings and NLP techniques, aiding in predictive maintenance by identifying problematic assets.
Data Science Intern — Tesla	May 2022 — Aug 2022
Leveraged NLP and machine learning algorithms to analyze work order text to categorize failures
Developed 10 PowerBI dashboards, enhancing real-time KPI tracking across operations at the factory
Wrote DAX queries to optimize data models, reducing PowerBI dashboard refresh time by 80%
Analyzed shift hours and badging data to provide insights into optimizing during peak hours
Extracurricular Work
President & Founder — Google Developer Student Club @ ISU	Aug 2022 — Aug 2023
Recruited and led a team of 10 core team officers to organize and host tech workshops and talks to over 150+ students on software engineering and machine learning.
Technical Writer — Writing technical blogs on Medium	Jan 2019 — present
6k followers and 2M+ reads
Writing tutorials and explanations on Python, data science, machine learning, and open-source packages.
Awards
ISU Fall Startup Competition — 2nd place	Sep 2023
Anthropic Claude 2 hackathon SF— Best Social award	July 2023
Hacklytics 2022 (GT) — Best Healthcare Hack 	Oct 2022
HooHacks 2022 (UVa) —  Best Data Science Hack	Oct 2022
DragonHacks 2022 (Drexel) — 3rd place	May 2022
HackPrinceton 2022 — 3rd place	April 2022
HackWashU 2022 — Best use of MasterCard API 	Mar 2022

Skills
Languages: Python, R, SQL, SAS, JavaScript (React), Java, HTML/CSS, Bash
Libraries: Pandas, NumPy, Matplotlib, Plotly, Tidyverse, Scikit-Learn, NLTK, PyTorch, PySpark
Tools: AWS, Google Cloud, Docker, Power BI, Tableau, Git, Linux, Hadoop, Spark, Airflow
`;
export const userSOP = `I am applying to Cornell’s Computer Science PhD program to pursue my research interest in Natural Language Processing (NLP). Over the past two years, my academic and professional journey has encompassed enhancing data quality, developing NLP for predictive maintenance, and engaging in agricultural research, notably addressing soil erosion and optimizing yield monitoring. Initially focused on agriculture, my interests now extend to applying NLP in broader industrial realms.

Research Interest: My research interest lies in the advancement of Large Language Models (LLMs), with a particular focus on three domains:
Secure LLMs: Recent research has highlighted the vulnerability of LLMs to adversarial attacks, such as generalized jailbreak prompts, which can lead to the generation of harmful content. To address this issue, my research will focus on developing secure LLMs by investigating methods to defend against such attacks and enhance their robustness. For instance, I will explore techniques to detect and mitigate jailbreak prompts, as demonstrated by the ReNeLLM framework. 
Instruction Fine-Tuning: Instruction fine-tuning has significantly improved LLM performance across various tasks. My research will delve into recent advancements in fine-tuning methods, such as Low-Rank Adaptation, and explore their potential for enhancing LLMs in specific industrial contexts. I will investigate how we can optimize the fine-tuning process to achieve better performance with fewer training examples.
Open Source LLMs: Open source LLMs, such as Mistral 7B, have demonstrated promising results in various applications. My research will focus on harnessing the potential of open-source LLMs and improving their performance, security, and reliability. I will investigate enhancing their capabilities by incorporating in-context learning and leveraging techniques like LoRA and QLoRA for efficient fine-tuning. Furthermore, I will explore the implications of using open-source LLMs in real-world applications, including their potential impact on privacy, fairness, and robustness against adversarial attacks.
Research Experience: Under Dr. Jarad Niemi's mentorship, I began my research journey addressing a significant environmental challenge — soil erosion in Iowa — which translates into a staggering annual economic loss of around $1 billion, based on figures from 2014. Our team's mission has been to replicate and enhance the Water Erosion Prediction Project (WEPP), an established soil erosion simulation model sponsored by the USDA. Despite its thoroughness, WEPP's computational demands are hefty, consuming about six hours daily to churn through soil and landscape data for Iowa alone, thus impeding timely and economical erosion management strategies. To address this, we've developed WEPPR, an R package that streamlines this process using statistical models. In this interdisciplinary endeavor, my role involved managing more than 2TB of environmental data, uncovering patterns through exploratory analysis with PCA, and engineering summary statistics as features for the Gaussian Process model. Our work, presented at the National Conference on Undergraduate Research in 2023, contributes significantly to more efficient soil erosion modeling and lays the groundwork for scaling the Daily Erosion Project (DEP) from a regional to a national and even global scale. 

My next research focused on improving data accuracy in agricultural yield monitoring. While the RITAS algorithm was implemented in R, some functions were deprecated and were computationally inefficient. I spearheaded the upgrade of the RITAS algorithm to Python, incorporating advanced geospatial tools to enhance efficiency. I integrated cutting-edge software practices, including package management via Poetry and code quality checks with Ruff. A notable innovation was the integration of R-tree spatial indexing, which optimized data processing. Currently, I am creating an intuitive user interface for RITAS, crafted to put actionable insights about crop yields directly into the hands of farmers. I am also honing the algorithm's capability to mimic farm tractor coverage with greater precision — a critical step for bridging data gaps and fine-tuning yield predictions. This project is a significant stride in digitalizing farm management, aligning with global precision agriculture and food security efforts.

Academic and Professional Summary: I'm set to graduate summa cum laude from Iowa State University with a BS in Statistics and a minor in Computer Science. My internships at Tesla's Plant Operations involved data science and engineering roles, developing data pipelines, and training forecasting models. My significant accomplishment was implementing NLP for predictive maintenance, creating a tool that aids stakeholders in identifying problematic assets and guiding decisions on maintenance investments. It's instrumental in prioritizing resources, leading to long-term cost savings. My experience at Tesla underscored the importance of multidisciplinary collaboration, effective communication, and problem-solving skills essential for PhD research

Why PhD: I hadn't always envisioned pursuing a PhD; I was first drawn to the dynamism of the industry. However, my time at Tesla and academic research led to a pivotal realization: my true passion lies in unraveling complex problems and advancing knowledge. The depth and rigor of research align with my curiosity and systematic approach. As I envision my future through the lens of a PhD, I aim to become a research scientist in AI, developing safe and impactful solutions. In this academic quest, I see a vault of knowledge to unlock and a stepping stone to entrepreneurial ventures that can manifest my technological visions.

Why Cornell: My passion for NLP and its transformative impact across various sectors is the primary motivator for my application to Cornell's CS PhD program. I am particularly excited about working with esteemed faculty members such as Alexander Rush, Yoav Artzi, and Lillian Lee. Dr. Rush's groundbreaking work in building and improving generative AI, especially in scaling open language models, resonates deeply with my research interests. Additionally, Dr. Artzi's innovative approach to natural language acquisition and modeling within automated, interactive systems aligns with my ambition to integrate NLP into real-world applications. His work in computational understanding of language in dynamic environments particularly appeals to me. Furthermore, Dr. Lee's research at the intersection of AI, language, and social interaction offers a unique perspective that I am eager to delve into, especially her focus on using NLP to analyze and facilitate socially embedded processes. The combined expertise of these faculty members not only aligns with my research goals but also offers an extraordinary opportunity for me to contribute to cutting-edge research in NLP.
`;
export const researchInterestAnswer = `My research interest focuses on advancing Large Language Models (LLMs) in three areas: developing secure LLMs to counter adversarial attacks, exploring advanced instruction fine-tuning methods like Low-Rank Adaptation, and enhancing the capabilities of open-source LLMs for real-world applications.`;

export const researchExpAnswer = `I have worked on soil erosion modeling at Iowa State University under Dr. Jarad Niemi, where I managed extensive environmental data and enhanced the Daily Erosion Project (DEP). Additionally, I led the transformation of the RITAS algorithm into Python, optimizing it with advanced geospatial tools and R-tree spatial indexing for agricultural yield monitoring.`;

export const backgroundAns = `Graduating with a BS in Statistics and a minor in Computer Science from Iowa State University, I've maintained a GPA of 3.94. My coursework included Bayesian Data Analysis, Experimental Design, and Large Scale Data Analysis. Professionally, at Tesla, I developed NLP tools for predictive maintenance and data engineering solutions, showcasing my ability to contribute to rigorous academic research.`;

export const whyPhDAnswers = `Pursuing a MS/Ph.D. aligns with my career goal of becoming a research scientist in AI. My experiences at Tesla and in academic research have ignited my passion for solving complex problems and advancing knowledge, making a Ph.D. an essential step towards technological entrepreneurship.`;

export const universityData = {
  id: 'a123b456-78cd-90ef-gh12-34ij56kl789m',
  name: 'Harvard University',
  info: "Harvard University's Computer Science PhD program is renowned for its comprehensive curriculum and distinguished faculty. The program emphasizes interdisciplinary research and collaboration across various areas of computer science. Students are encouraged to engage in innovative research projects, contributing to advancements in fields like natural language processing, machine learning, and AI.",
  ranking: 5,
  acceptanceRate: 0.15,
  submissionDeadline: '2023-01-15',
};

export const professorData = [
  {
    id: '00112233-4455-6677-8899-aabbccddeeff',
    name: 'Alexander Rush',
    researchFocus:
      'Dr. Rush is noted for his groundbreaking work in building and improving generative AI, especially in scaling open language models. His research is instrumental in advancing the field of natural language processing.',
  },
  {
    id: '99887766-5544-3322-1100-ffeeccbbaa99',
    name: 'Yoav Artzi',
    researchFocus:
      'Dr. Artzi focuses on natural language acquisition and modeling within automated, interactive systems. His innovative approach is central to integrating natural language processing into dynamic, real-world applications.',
  },
  {
    id: '11223344-5566-7788-99aa-bbccddeeff00',
    name: 'Lillian Lee',
    researchFocus:
      'Dr. Lee specializes in the intersection of AI, language, and social interaction. Her work on using NLP to analyze and facilitate socially embedded processes offers a unique perspective in the field.',
  },
];

export const userStyle = `I am graduating from Iowa State University with a BS in Statistics and a minor in Computer Science. My academic and professional journey has been characterized by a strong foundation in statistical analysis, machine learning, and data science, complemented by practical applications in predictive modeling and NLP.`;
