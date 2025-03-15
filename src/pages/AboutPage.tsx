
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechStackCarousel from "@/components/TechStackCarousel";
import MyPersona from "@/components/MyPersona";
import Career from "@/components/Career";
import Future from "@/components/Future";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <MyPersona />
        <div className="py-16 px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <TechStackCarousel />
          </div>
        </div>
        <Career />
        <Future />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
