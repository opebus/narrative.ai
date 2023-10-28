# load env
from dotenv import load_dotenv
import os

# Import necessary modules
import streamlit as st

load_dotenv()

CLARIFAI_API_KEY = os.getenv("CLARIFAI_API_KEY")


def app():
    st.title("Statement of Purpose Information Collector")

    # Personal Details
    st.subheader("Personal Details")
    full_name = st.text_input("Full Name")
    current_institution = st.text_input("Current Institution or Last Attended")

    # Questions
    st.subheader("Questions")
    career_goals = st.text_area(
        "What are your long-term career goals, and how does obtaining a graduate degree align with these?"
    )
    primary_interest = st.text_area(
        "Specify your primary area of interest or specialization. Why are you drawn to this area?"
    )
    impactful_class = st.text_area(
        "Describe a class or project that profoundly impacted your academic and career choices."
    )
    research_experience = st.text_area(
        "Discuss any research projects you've engaged in, your role, and key findings."
    )
    work_experience = st.text_area(
        "Describe work experiences that shaped your perspective in your field or reinforced your desire for graduate study."
    )
    significant_challenge = st.text_area(
        "Recall a significant academic or professional challenge and how you overcame it."
    )
    faculty_preference = st.text_area(
        "Any specific faculty members or researchers at the graduate program you wish to work with? What appeals to you about their work?"
    )
    preparation = st.text_area(
        "What skills or experiences prepared you for graduate study and advanced research?"
    )
    application_of_grad_education = st.text_area(
        "How do you envision applying your graduate education in your future career?"
    )
    program_choice_reason = st.text_area(
        "Why this specific graduate program? What aspects resonate with your goals?"
    )
    extracurricular_activities = st.text_area(
        "Describe extracurricular activities or community involvement that contributed to your growth."
    )
    reflection_on_resume = st.text_area(
        "Reflect on your resume and past experiences. How do they lead to your decision to pursue graduate studies?"
    )
    commitment_showcase = st.text_area(
        "Share achievements showcasing your commitment to your field."
    )
    intriguing_idea = st.text_area(
        "Is there a particular idea, theory, or concept within your field that intrigues you? Why?"
    )
    previous_sop_experience = st.text_area(
        "Have you written a Statement of Purpose before? Any feedback or elements you felt were lacking?"
    )

    # Resume Upload
    st.subheader("Upload Your Resume")
    uploaded_file = st.file_uploader("Choose a file", type=["pdf", "doc", "docx"])

    # open file and get text
    with open(uploaded_file.name, "r") as f:
        resume_text = f.read()

    # Other Information
    st.subheader("Other Information")
    additional_info = st.text_area("Any other information you want to include?")

    if st.button("Submit"):
        data_dict = {
            "full_name": full_name,
            "current_institution": current_institution,
            "career_goals": career_goals,
            "primary_interest": primary_interest,
            "impactful_class": impactful_class,
            "research_experience": research_experience,
            "work_experience": work_experience,
            "significant_challenge": significant_challenge,
            "faculty_preference": faculty_preference,
            "preparation": preparation,
            "application_of_grad_education": application_of_grad_education,
            "program_choice_reason": program_choice_reason,
            "extracurricular_activities": extracurricular_activities,
            "reflection_on_resume": reflection_on_resume,
            "commitment_showcase": commitment_showcase,
            "intriguing_idea": intriguing_idea,
            "previous_sop_experience": previous_sop_experience,
            "resume_text": resume_text,
            "additional_info": additional_info,
        }
        st.write("Collected Data:", data_dict)


if __name__ == "__main__":
    app()
