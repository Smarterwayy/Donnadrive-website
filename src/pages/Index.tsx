import Header from "../components/Header";
import Hero from "../components/Hero";
import MeetDonna from "../components/MeetDonna";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import ScrollProgress from "../components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <MeetDonna />
      <Features />
      <HowItWorks />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Index;
