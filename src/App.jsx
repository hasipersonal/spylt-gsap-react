import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import gsap from 'gsap';
import MessageSection from './sections/MessageSection';
import FlavourSection from './sections/FlavourSection';
import { useGSAP } from '@gsap/react';
import NutritionSection from './sections/NutritionSection';
import BenifitSection from './sections/BenifitSection';

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

          <BenifitSection />
          <div className='h-dvh border border-red-500'></div>

        </div>
      </div>
    </main>
  )
}

export default App