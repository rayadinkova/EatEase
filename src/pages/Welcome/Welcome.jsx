import { Link } from "react-router-dom";
import "../Welcome/Welcome.css";

{
  /* Importing images */
}
import hello from "../Welcome/vectors/hello.svg";

export const Welcome = () => {
  return (
    <>
      {/* Accessibility ✨
      - Using tab index and headings hieararchy to support keyboard navigation 
      - Using alt description for screen readers*/}

      <section tabIndex="1" className="welcome">
        <img
          src={hello}
          alt="hand waving icon"
          tabIndex="2"
          className="hello-icon"
        />

        <h1 tabIndex="3" className="welcome-h1">
          Hello,
        </h1>

        <h2 tabIndex="4" className="welcome-h2">
          Welcome to my 3rd semester Multimedia design project
        </h2>

        <button tabIndex="5" className="get-started-btn">
          <Link to="/splash" tabIndex="6" className="get-started-link">
            Get started
          </Link>
        </button>
      </section>
    </>
  );
};
