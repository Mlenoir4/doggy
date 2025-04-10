import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';
import Register from './pages/Register';
import TrainerProfile from './pages/TrainerProfile';
import UserDashboard from './pages/UserDashboard';
import OurValues from './pages/footers/OurValues';
import AboutUs from './pages/footers/AboutUs';
import HowItWorks from './pages/footers/HowItWorks';
import Testimonials from './pages/footers/Testimonials';
import ContactUs from './pages/footers/ContactUs';
import FAQ from './pages/footers/FAQ';
import TermsOfService from './pages/footers/TermsOfService';
import Support from './pages/footers/Support';
import PrivacyPolicy from './pages/footers/PrivacyPolicy';
import LegalInformation from './pages/footers/LegalInformation';
import TrainerBenefits from './pages/footers/TrainerBenefits'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/trainer/:id" element={<TrainerProfile />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/values" element={<OurValues />} />
            <Route path="/benefits" element={<TrainerBenefits />} />
            <Route path="/become-trainer" element={<Register />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/legal" element={<LegalInformation />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App