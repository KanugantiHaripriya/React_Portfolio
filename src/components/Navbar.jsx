// function Navbar({ setTheme }) {
//   return (
//     <nav className="navbar">

//       <h2 className="logo">Haripriya</h2>

//       <ul>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>

//     </nav>
//   );
// }

// export default Navbar;

import { FaSun, FaLeaf, FaHeart, FaUndo } from "react-icons/fa";

function Navbar({ setTheme }) {
  return (
    <nav className="navbar">

      {/* Left */}
      <h2 className="logo">Haripriya</h2>

      {/* Center */}
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Right */}
      <div className="theme-buttons">

        <button onClick={() => setTheme("light")}>
          <FaSun />
        </button>

        <button onClick={() => setTheme("green")}>
          <FaLeaf />
        </button>

        <button onClick={() => setTheme("red")}>
          <FaHeart />
        </button>

        {/* Reset */}
        <button onClick={() => setTheme("default")}>
          <FaUndo />
        </button>
        
      </div>

    </nav>
  );
}

export default Navbar;