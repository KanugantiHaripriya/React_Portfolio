import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Contacts = () => {
  return (
    <section className="contact-section">

      <div className="contact-container">

        <h1>Find Me On</h1>

        <p>
          Feel free to <span>connect</span> with me
        </p>

        <div className="social-icons">

          <a href="https://github.com/KanugantiHaripriya" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>


          <a href="https://www.linkedin.com/in/kanuganti-haripriya/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>


          <a href="kanugantiharipriya.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contacts;


// function Contact() {
//   return (
//     <section id="contact">

//       <h2 className="title">Contact Me</h2>

//       <div className="card contact-card">

//         <p>
//           📧 Email:
//           <br />
//           kanugantiharipriya@gmail.com
//         </p>

//         <br />

//         <p>
//           📱 Phone:
//           <br />
//           +91 9908420435
//         </p>

//         <br />

//         <p>
//           📍 Location:
//           <br />
//           Hyderabad, India
//         </p>

//         <div className="contact-buttons">

//           <a
//             href="https://github.com/KanugantiHaripriya"
//             target="_blank"
//             rel="noreferrer"
//             className="btn"
//           >
//             GitHub
//           </a>

//           <a
//             href="https://linkedin.com/in/kanuganti-haripriya-4035a8256"
//             target="_blank"
//             rel="noreferrer"
//             className="btn btn-outline"
//           >
//             LinkedIn
//           </a>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Contact;