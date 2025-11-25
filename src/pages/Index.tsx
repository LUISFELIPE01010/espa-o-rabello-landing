import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Differentials from "@/components/Differentials";
import Quiz from "@/components/Quiz";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Treatments />
      <Results />
      <Testimonials />
      <Differentials />
      <Quiz />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
