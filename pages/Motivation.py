import streamlit as st

OPENAI_KEY = st.secrets["OPENAI_KEY"]

CATEGORIES = {
    "career": "What are your long-term career goals, and how does obtaining a graduate degree align with these?",
    "interest": "Specify your primary area of interest or specialization. Why are you drawn to this area?",
    "impact": "Describe a class or project that profoundly impacted your academic and career choices.",
}


def prompt(question):
    if response := st.chat_input("Give us an honest and descriptive answer!"):
        st.chat_message("user").markdown(response)
        st.session_state.messages.append({"role": "user", "content": response})

    st.chat_message("assistant").markdown(question)
    st.session_state.messages.append({"role": "assistant", "content": question})

    return response


def init_history():
    if "messages" not in st.session_state:
        st.session_state.messages = []

    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])


def app():
    st.title("GradBuddy: Statement of Purpose Generator")
    init_history()

    if "current_question" not in st.session_state:
        st.session_state["current_question"] = 0

    if "responses" not in st.session_state:
        st.session_state["responses"] = {}

    category, question = list(CATEGORIES.items())[st.session_state["current_question"]]
    response = prompt(question)

    st.session_state["current_question"] += 1
    st.session_state["responses"][category] = response


if __name__ == "__main__":
    app()
