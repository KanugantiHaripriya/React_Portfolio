import profile from "../assets/profile.jpg";

function About() {
  return (
    <section id="about">

      <h2 className="title">About Me</h2>

      <div className="about-container">

        {/* LEFT SIDE IMAGE */}

        <div className="about-image">

          <img
            src={profile}
            alt="Haripriya"
          />

        </div>

        {/* RIGHT SIDE CONTENT */}

        <div className="about-content card">

          

          <p>
  I am a passionate Computer Science Engineering graduate with strong skills
  in Python, Java, JavaScript, HTML, CSS and MySQL. I enjoy building web
  applications and software projects that solve real-world problems.
</p>

<p>
  I have experience working with technologies like TensorFlow, Flask,
  JDBC and Streamlit through various academic and personal projects.
  I am interested in Software Development, AI/ML and Full Stack Web Development.
</p>
          <a
            href="https://github.com/KanugantiHaripriya"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Explore My Work
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;



// function About() {
//   return (
//     <section id="about">

//       <h2 className="title">About Me</h2>

//       <div className="card">

//         <p>
//           B.Tech CSE graduate with strong skills in Python,
//           Java, JavaScript, HTML, CSS and MySQL.
//           Familiar with building projects using AI/ML,
//           Flask, TensorFlow, JDBC and Streamlit.

//           Seeking opportunities as a Software Developer,
//           Python Developer or Java Developer to contribute
//           technical skills and grow professionally.
//         </p>

//       </div>

//     </section>
//   );
// }

// export default About;