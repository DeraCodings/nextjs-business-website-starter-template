// import ContactForm from "./components/contactForm";
import AboutMe from "./components/homepage components/AboutMe";
import HeroSection from "./components/homepage components/HeroSection";
import QuoteSection from "./components/homepage components/Quote";
import Services from "./components/homepage components/Services";
import Testimonials from "./components/homepage components/Testimonials";
import WhatYouGet from "./components/homepage components/WhatYouGet";

export default function Home() {
  return (
    <div className="">
      {/* <h2 className="font-bold mb-4 text-xl text-blue-500">Contact Form</h2> */}
      {/* <ContactForm /> */}
      <main className="min-h-screen max-h-full">
        <HeroSection />
        <WhatYouGet />
        <div>
          <AboutMe />
          <Services />
          <Testimonials />
          <QuoteSection />
        </div>
      </main>
    </div>
  );
}
