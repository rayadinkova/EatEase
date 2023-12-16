import "../TermsOfUse/TermsOfUse.css";
import { Link } from "react-router-dom";

{
  /* Importing images */
}

import backarrow from "../TermsofUse/vectors/backarrow.svg";

export const TermsOfuse = () => {
  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag
-Using proper input types */}

      <section tabIndex="1" className="terms-header">
        <header tabIndex="2" className="terms-header-content">
          <Link to="/signup" tabIndex="3">
            <img
              src={backarrow}
              alt="arrow that takes you on the previous page"
              tabIndex="4"
              className="terms-arrow-img"
            />
          </Link>
          <h1 tabIndex="5" className="terms-h1">
            Terms of Use
          </h1>
          <div></div>
        </header>
      </section>

      <section tabIndex="6" className="terms-content">
        <p tabIndex="7" className="terms-p">
          Welcome to EatEase! This mobile application, also described as App is
          designed to provide support and resources for individuals dealing with
          eating disorders. Please carefully read the following Terms of Use
          before using the App. By accessing or using the App, you agree to be
          bound by these Terms. If you do not agree with these Terms, please do
          not use the App.
        </p>

        <h1 tabIndex="8">Acceptance of Terms</h1>

        <p tabIndex="9" className="terms-p">
          By using the App, you acknowledge that you have read, understood, and
          agree to be bound by these Terms. We may update these Terms from time
          to time, and your continued use of the App constitutes acceptance of
          any changes.
        </p>
        <h1 tabIndex="10">App Purpose</h1>
        <p tabIndex="11" className="terms-p">
          EatEase is intended to provide information, support, and resources for
          individuals dealing with eating disorders. It is not a substitute for
          professional medical advice, diagnosis, or treatment. Consult with a
          qualified healthcare professional for medical advice.
        </p>
        <h1 tabIndex="12">User Eligibility</h1>
        <p tabIndex="13" className="terms-p">
          The App is intended for use by individuals who are at least 13 years
          old. If you are under 13, you may not use the App. If you are between
          13 and 18, you must have the permission of a parent or legal guardian.
        </p>

        <h1 tabIndex="14">User Content</h1>
        <p tabIndex="15" className="terms-p">
          Users may contribute content, such as comments and posts. By
          submitting content, you grant EatEase a non-exclusive, worldwide,
          royalty-free, sublicensable, transferable license to use, reproduce,
          distribute, prepare derivative works of, display, and perform the
          content.
        </p>
        <h1 tabIndex="16">Prohibited Activities</h1>

        <ul tabIndex="17">
          <li tabIndex="18">
            Posting harmful, discriminatory, or abusive content
          </li>
          <li tabIndex="19">Violating any applicable laws or regulations</li>
        </ul>
        <h1 tabIndex="20">Termination</h1>
        <p tabIndex="21" className="terms-p">
          EatEase reserves the right to terminate or suspend your access to the
          App at any time, without notice, for conduct that we believe violates
          these Terms or is harmful to other users of the App, us, or third
          parties.
        </p>
      </section>
    </>
  );
};
