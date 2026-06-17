import AboutSection from "./component/AboutSection";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import GallerySection from "./component/GallerySection";
import JourneySection from "./component/JourneySection";
import ProjectSection from "./component/ProjectSection";
import ContactSection from "./component/ContactSection";

function App() {
  return (
    <div>
      <Navbar />
     <HeroSection />
     <AboutSection/>
     <GallerySection/>
     <JourneySection/>
     <ProjectSection/>
     <ContactSection/>

    </div>
  );
}

export default App;