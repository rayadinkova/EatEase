import "../Profile/Profile.css";
import { Link } from "react-router-dom";

{
  /* Importing images */
}

import backarrow from "../Profile/vectors/backarrow.svg";
import nextarrow from "../Profile/vectors/nextarrow.svg";
import { Navbar } from "../../components/Navbar/Navbar";
import { ToggleButton } from "../../components/ToggleButton/ToggleButton";

export const Profile = () => {
  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag */}

      <section tabIndex="1" className="profile-header">
        <header tabIndex="2" className="profile-header-content">
          <Link to="/home" tabIndex="3">
            <img
              src={backarrow}
              alt="arrow that takes you on the previous page"
              tabIndex="4"
              className="profile-arrow-img"
            />
          </Link>
          <h1 className="profile-h1" tabIndex="5">
            Account
          </h1>

          <div></div>
        </header>
      </section>

      <section tabIndex="6" className="profile-content">
        <h2 className="profile-h2" tabIndex="7">
          Basic Information
        </h2>
        <div className="basic-info">
          <p tabIndex="8" className="subtext">
            Name
          </p>
          <h3 tabIndex="9" className="profile-basicinfo-h3">
            Raya
          </h3>
          <p tabIndex="10" className="subtext">
            Email
          </p>
          <h3 tabIndex="11" className="profile-basicinfo-h3">
            rayadinkovadesignss@gmail.com
          </h3>
        </div>

        <h3 tabIndex="12" className="profile-section-title-h3">
          Notifications
        </h3>
        <section tabIndex="13" className="profile-notifications">
          <div className="notifications-text">
            <h3 tabIndex="14" className="profile-h3">
              Daily Log Reminders
            </h3>
            <ToggleButton tabIndex="15" />
          </div>

          <div className="notifications-settings">
            <h4 tabIndex="16" className="profile-h4">
              Notifications settings
            </h4>
            <Link to="/" tabIndex="17" className="notifications-settings-links">
              <img
                src={nextarrow}
                alt="visit noification settings page"
                tabIndex="18"
                className="notifications-settings-icon"
              />
            </Link>
          </div>

          <p tabIndex="19" className="profile-p-notifications">
            Get regular reminders to keep your motivation going.
          </p>
        </section>

        <h3 tabIndex="20" className="profile-section-title-h3">
          Privacy
        </h3>
        <section tabIndex="21" className="profile-privacy">
          <div className="privacy">
            <h3 tabIndex="22" className="profile-h3">
              Privacy Policy
            </h3>
            <Link to="/privacypolicy" tabIndex="23" className="profile-links">
              <img
                src={nextarrow}
                alt="visit privacy policy page"
                tabIndex="24"
                className="privacy-icon"
              />
            </Link>
          </div>

          <div className="terms">
            <h3 className="profile-h3" tabIndex="25">
              Terms of Use
            </h3>
            <Link to="terms" tabIndex="26" className="profile-links">
              <img
                src={nextarrow}
                alt="visit terms of use page"
                tabIndex="28"
                className="terms-icon"
              />
            </Link>
          </div>
        </section>

        <h3 tabIndex="29" className="profile-section-title-h3">
          Account Settings
        </h3>

        <div className="profile-settings">
          <h3 tabIndex="30" className="profile-h3">
            Sign Out
          </h3>
          <h3 tabIndex="31" className="delete-profile-h3">
            Delete Account
          </h3>
        </div>
      </section>

      <Navbar tabIndex="32" />
    </>
  );
};
