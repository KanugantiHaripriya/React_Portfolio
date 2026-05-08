function Projects() {

  const projects = [

    {
      title: "Image Classification using CNN",
      description:
        "Developed multi-class image classification CNN using TensorFlow with high accuracy and deployed using Streamlit UI.",

      github:
        "https://github.com/KanugantiHaripriya/ML_Model_for_ImageClassification.git"
    },

    {
      title: "Student Login System",

      description:
        "Built authentication system using Java Servlets, JDBC and MySQL with CRUD operations.",

      github:
        "https://github.com/KanugantiHaripriya/StudentTrack-FullStack-DynamicWebProject.git"
    },

    {
      title: "NRCM Homepage",

      description:
        "Created college homepage using Flask backend with MySQL and responsive frontend UI.",

      github:
        "https://github.com/KanugantiHaripriya/Nrcm-Website-.git"
    },

    {
      title: "Chatbot using NLP",

      description:
        "Developed conversational chatbot using TensorFlow and NLTK with Streamlit interface.",

      github:
        "https://github.com/KanugantiHaripriya/Resume_skill-matching_using-Nlp-based-automation.git"
    }

  ];

  return (
    <section id="projects">

      <h2 className="title">Projects</h2>

      <div className="project-grid">

        {
          projects.map((project, index) => (

            <div className="card project-card" key={index}>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                View GitHub
              </a>

            </div>

          ))
        }

      </div>

    </section>
  );
}

export default Projects;