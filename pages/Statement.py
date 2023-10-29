import streamlit as st
import perplexity

# perplexity_cli = perplexity.Client(perplexity_headers, perplexity_cookies)
# perplexity_cli.create_account(emailnator_headers, emailnator_cookies)


def text_solver(query):
    return input(f"{query}: ")


st.title("Context Population")
st.write("Enter your Github link, Linkedin link and upload your resume")

github_link = st.text_input("Github link")
linkedin_link = st.text_input("Linkedin link")
resume = st.file_uploader("Upload your resume")


def gh_prompt(github_link):
    return f"""
    Given the GitHub profile link provided below, please extract all available information regarding the user's name, location, education, work experience, programming languages known, repositories contributed to, and any notable projects or achievements. 
    Additionally, summarize the individual's coding activity including frequency of contributions, areas of expertise, and collaboration with other developers. 
    Make sure to organize the information in a well-structured profile format.
    
    GitHub Profile Link: {github_link}
    """


def li_prompt(linkedin_link):
    return f"""
    Given the LinkedIn profile link provided below, please extract all available information regarding the undergraduate education, work experience in the field, publications, certifications, languages spoken, volunteer work, and any notable achievements or awards. 
    Additionally, summarize the individual's professional journey, areas of expertise, and collaborations with other professionals. 
    Ensure to organize the information in a well-structured profile format, highlighting aspects that would be beneficial for a graduate school application.

    LinkedIn Profile Link: {linkedin_link}
    """


submit = st.button("Generate SOP")

if submit:
    result = "hahah"
    st.write(result)
    
    # gh_pull = perplexity_cli.search(
    #     gh_prompt("https://github.com/weichunnn"),
    #     mode="copilot",
    #     focus="internet",
    #     solvers={
    #         "text": text_solver,
    #     },
    # )

    # li_pull = perplexity_cli.search(
    #     li_prompt("https://www.linkedin.com/in/wei-chun/"),
    #     mode="copilot",
    #     focus="internet",
    #     solvers={
    #         "text": text_solver,
    #     },
    # )
