import "../Discover/Discover.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";

{
  /* Importing images */
}

import backarrow from "../Mood/vectors/backarrow.svg";
import { DiscoverFilter } from "../../components/DiscoverFilter/DiscoverFilter";

export const Discover = () => {
  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag*/}

      <section tabIndex="1" className="discover-header">
        <header tabIndex="2" className="discover-header-content">
          <Link to="/home" tabIndex="3">
            <img
              src={backarrow}
              alt="arrow that takes you on home page"
              tabIndex="4"
              className="discover-arrow-img"
            />
          </Link>
          <h1 tabIndex="5" className="discover-h1">
            Discover
          </h1>

          <div></div>
        </header>
      </section>

      <DiscoverFilter tabIndex="6" />
      <Navbar tabIndex="7" />
    </>
  );
};
