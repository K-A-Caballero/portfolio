// "use client"

import Home from './home/page';
import Experience from './experience/page';
import About from './about/page';
import Contact from './contact/page';
import GithubButton from '../components/githubButton';
import Chatbot from '@/components/chatBot';
import NavBar from '@/components/navBar';
import UseSectionObserver from '../hooks/useSectionObserver';

// import { useEffect, useState } from 'react';
// import dynamic from "next/dynamic";

// const Experience = dynamic(() => import("./experience/page"), {ssr: true});

export default function Main() {
  // const [data, setData] = useState<string>("");

  // useEffect(() => {
  //   async function fetchData() {

  //   }
  // }, [])

  // UseSectionObserver();

  return (
    <div className="relative h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
      <NavBar />
      <GithubButton />
      <Chatbot />
      <div className="flex flex-col items-center sm:items-start min-h-screen min-w-screen">
        <section id="home" className="snap-start h-screen">
          <Home />
        </section>
        <section id="experience" className="snap-start h-screen">
          <Experience />
        </section>
        <section id="about" className="snap-start h-screen">
          <About />
        </section>
        <section id="contact" className="snap-start h-screen">
          <Contact />
        </section>
      </div>
    </div>
  );
}
