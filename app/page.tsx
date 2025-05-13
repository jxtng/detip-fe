import Navbar from "@/components/navbar";
import HeroSection from "@/components/home/hero-section";
import LogosSection from "@/components/home/logos-section";
import OurGoalSection from "@/components/home/our-goal-section";
import ProgramDynamics from "@/components/home/program-dynamics";
import OurCoursesSection from "@/components/home/our-courses-section";
import ApplicationProcessSection from "@/components/home/application-process-section";
import AboutSection from "@/components/home/about-section";
import ContactSection from "@/components/home/contact-section";
import Newsletter from "@/components/home/newsletter";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LogosSection />
      <OurGoalSection />
      <ProgramDynamics />
      <OurCoursesSection />
      <ApplicationProcessSection />
      <AboutSection />
      <ContactSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
