import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

{
  /* Importing images */
}

import home from "../Navbar/vectors/home.svg";
import journal from "../Navbar/vectors/journal.svg";
import dailylog from "../Navbar/vectors/dailylog.svg";
import discover from "../Navbar/vectors/discover.svg";
import profile from "../Navbar/vectors/profile.svg";

export const Navbar = () => {
  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag
*/}

      <section tabIndex="1" className="navbar-container">
        <section tabIndex="12" className="navbar-content">
          <Link to="/home" tabIndex="3" className="nav-link">
            <img src={home} alt="home page icon" tabIndex="4" />
            <h1 tabIndex="5" className="nav-h1">
              Home
            </h1>
          </Link>

          <Link tabIndex="6" className="nav-link">
            <img src={journal} alt="journal page icon" tabIndex="7" />
            <h1 tabIndex="8" className="nav-h1">
              Journal
            </h1>
          </Link>

          <div className="navbar-daily-log">
            <Link to="/addlog" tabIndex="9" className="nav-link">
              <img
                src={dailylog}
                alt="daily log page icon"
                tabIndex="10"
                className="nav-log-icon"
              />
              <h1 tabIndex="11" className="nav-h1">
                Daily Log
              </h1>
            </Link>
          </div>

          <Link to="/discover" tabIndex="12" className="nav-link">
            <img src={discover} alt="discover page icon" tabIndex="13" />
            <h1 tabIndex="14" className="nav-h1">
              Discover
            </h1>
          </Link>

          <Link to="/profile" tabIndex="15" className="nav-link">
            <img src={profile} alt="profile page icon" tabIndex="16" />
            <h1 tabIndex="17" className="nav-h1">
              Profile
            </h1>
          </Link>
        </section>
      </section>
    </>
  );
};
