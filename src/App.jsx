import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Splash } from "./pages/Splash/Splash";
import { SelfAwareness } from "./pages/Onboarding/SelfAwareness/SelfAwareness";
import { Welcome } from "./pages/Welcome/Welcome";
import { WelcomeEatEase } from "./pages/Onboarding/WelcomeEatEase/WelcomeEatEase";
import { BuildHealthyHabits } from "./pages/Onboarding/BuildHelathyHabits/BuildHealthyHabits";
import { ProfessionalHelp } from "./pages/Onboarding/ProfessionalHelp/ProfessionalHelp";
import { Registration } from "./pages/Registration/Registration/Registration";
import { SignIn } from "./pages/Registration/SignIn/SignIn";
import { SignUp } from "./pages/Registration/SignUp/SignUp";
import { PrivacyPolicy } from "./pages/Registration/PrivacyPolicy/PrivacyPolicy";
import { TermsOfuse } from "./pages/Registration/TermsOfUse/TermsOfuse";
import { Home } from "./pages/Home/Home";
import { HealthyHabits } from "./pages/HealthyHabits/HealthyHabits";
import { Mood } from "./pages/Mood/Mood";
import { Profile } from "./pages/Profile/Profile";
import { AddDailyLog } from "./pages/DailyLog/AddDailyLog/AddDailyLog";
import { EditDailyLog } from "./pages/DailyLog/EditDailyLog/EditDailyLog";
import { LogSummary } from "./pages/DailyLog/LogSummary/LogSummary";
import { Anxiety } from "./pages/Anxiety/Anxiety";
import { SocialSkills } from "./pages/SocialSkills/SocialSkills";
import { CopingCards } from "./pages/CopingCards/CopingCards";
import { Goals } from "./pages/Goals/Goals";
import { Discover } from "./pages/Discover/Discover";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/splash/*" element={<Splash />} />
          <Route path="/welcomeEatEase" element={<WelcomeEatEase />} />
          <Route path="/awareness" element={<SelfAwareness />} />
          <Route path="/buildhealthyhabits" element={<BuildHealthyHabits />} />
          <Route path="/professionalhelp" element={<ProfessionalHelp />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsofuse" element={<TermsOfuse />} />
          <Route path="/home" element={<Home />} />
          <Route path="/healthyhabits" element={<HealthyHabits />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/anxiety" element={<Anxiety />} />
          <Route path="/socialskills" element={<SocialSkills />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addlog" element={<AddDailyLog />} />
          <Route path="/logsummary" element={<LogSummary />} />
          <Route path="/editlog" element={<EditDailyLog />} />
          <Route path="/copingcards" element={<CopingCards />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
