import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import MessageSection from './sections/MessageSection';
import FlavourSection from './sections/FlavourSection';
import NutritionSection from './sections/NutritionSection';
import BenifitSection from './sections/BenifitSection';
import TestimonialSection from './sections/TestimonialSection';
import FooterSection from './sections/FooterSection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />
      
      <div id='smooth-wrapper'>
        <div id='smooth-content'>

          <HeroSection />
          <MessageSection />
          <FlavourSection />
          <NutritionSection />

          <div>
            <BenifitSection />
            <TestimonialSection />
          </div>
          
          <FooterSection />

        </div>
      </div>
    </main>
  )
}

export default App