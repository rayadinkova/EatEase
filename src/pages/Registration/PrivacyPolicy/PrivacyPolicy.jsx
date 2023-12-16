import "../PrivacyPolicy/PrivacyPolicy.css";
import { Link } from "react-router-dom";

{
  /* Importing images */
}

import backarrow from "../PrivacyPolicy/vectors/backarrow.svg";

export const PrivacyPolicy = () => {
  return (
    <>
      {/* Accessibility ✨
  - Using tab index to support keyboard navigation
  - Using alt description for screen readers;
  for bacground images I am using an empty alt tag
  -Using proper input types */}

      <section tabIndex="1" className="privacy-header">
        <header tabIndex="2" className="privacy-header-content">
          <Link to="/signup" tabIndex="3">
            <img
              src={backarrow}
              alt="arrow that takes you on the previous page"
              tabIndex="4"
              className="privacy-arrow-img"
            />
          </Link>
          <h1 tabIndex="5" className="privacy-h1">
            Privacy Policy
          </h1>
          <div></div>
        </header>
      </section>

      <section tabIndex="6" className="privacy-content">
        <p tabIndex="7" className="privacy-p">
          EatEase OOD operates the EatEase mobile application, also described as
          the Service. <br />
          This page informs you of our policies regarding the collection, use,
          and disclosure of personal data when you use our Service and the
          choices you have associated with that data. <br />
          We use your data to provide and improve the Service. By using the
          Service, you agree to the collection and use of information in
          accordance with this policy. <br />
        </p>

        <h1 tabIndex="8">Information Collection and Use</h1>

        <p tabIndex="9" className="privacy-p">
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>
        <p tabIndex="10" className="privacy-p-types">
          Types of Data Collected:
        </p>
        <h2 tabIndex="11">Personal Data</h2>
        <p tabIndex="12" className="privacy-p">
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you, also known as Personal Data. Personally identifiable
          information may include, but is not limited to:
        </p>

        <ul tabIndex="13">
          <li tabIndex="14">Email address</li>
          <li tabIndex="15">Name</li>
          <li tabIndex="16">Age</li>
          <li tabIndex="17">Cookies ad Usage Data</li>
        </ul>
        <h2 tabIndex="18">Usage Data</h2>
        <p tabIndex="19" className="privacy-p">
          We may also collect information on how the Service is accessed and
          used. also Usage Data. This Usage Data may include information such as
          your computers Internet Protocol address, browser type, browser
          version, the pages of our Service that you visit, the time and date of
          your visit, the time spent on those pages, unique device identifiers,
          and other diagnostic data.
        </p>

        <h2 tabIndex="20">Use of Data</h2>
        <p tabIndex="21" className="privacy-p">
          We use the collected data for various purposes:
        </p>
        <ul tabIndex="22">
          <li tabIndex="23">To provide and maintain the Service</li>
          <li tabIndex="24">To notify you about changes to our Service</li>
          <li tabIndex="25">To provide customer care and support</li>
          <li tabIndex="26">To monitor the usage of the Service</li>
          <li tabIndex="27">
            To detect, prevent, and address technical issues
          </li>
        </ul>

        <h2 tabIndex="28">Security of Data</h2>
        <p tabIndex="29" className="privacy-p">
          The security of your data is important to us, but remember that no
          method of transmission over the Internet, or method of electronic
          storage is 100% secure. While we strive to use commercially acceptable
          means to protect your Personal Data, we cannot guarantee its absolute
          security.
        </p>
      </section>
    </>
  );
};
