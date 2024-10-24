"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 gap-4">
        {/* HTML */}
        <div className="flex flex-col items-center">
          <Image src="/images/html.png" alt="HTML" width={50} height={50} />
          <p className="mt-2 text-sm">HTML</p>
        </div>
        {/* CSS */}
        <div className="flex flex-col items-center">
          <Image src="/images/css.png" alt="CSS" width={50} height={50} />
          <p className="mt-2 text-sm">CSS</p>
        </div>
        {/* PHP */}
        <div className="flex flex-col items-center">
          <Image src="/images/php.png" alt="PHP" width={50} height={50} />
          <p className="mt-2 text-sm">PHP</p>
        </div>
        {/* Java */}
        <div className="flex flex-col items-center">
          <Image src="/images/java.png" alt="Java" width={50} height={50} />
          <p className="mt-2 text-sm">Java</p>
        </div>
        {/* C# */}
        <div className="flex flex-col items-center">
          <Image src="/images/csharp.png" alt="C#" width={50} height={50} />
          <p className="mt-2 text-sm">C#</p>
        </div>
        {/* C++ */}
        <div className="flex flex-col items-center">
          <Image src="/images/cpp.png" alt="C++" width={50} height={50} />
          <p className="mt-2 text-sm">C++</p>
        </div>
        {/* JavaScript */}
        <div className="flex flex-col items-center">
          <Image src="/images/javascript.png" alt="JavaScript" width={50} height={50} />
          <p className="mt-2 text-sm">JavaScript</p>
        </div>
        {/* React */}
        <div className="flex flex-col items-center">
          <Image src="/images/react1.png" alt="ReactJS" width={50} height={50} />
          <p className="mt-2 text-sm">ReactJS</p>
        </div>
         {/* Laravel */}
         <div className="flex flex-col items-center">
          <Image src="/images/laravel.png" alt="Laravel" width={50} height={50} />
          <p className="mt-2 text-sm">Laravel</p>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Vocational high school majoring in software engineering and game development at SMKN 21 Jakarta.
        </li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <div className="grid grid-cols-3 gap-4">
        {/* GitHub */}
        <div className="flex flex-col items-center">
          <Image src="/images/github.png" alt="GitHub" width={50} height={50} />
          <p className="mt-2 text-sm">GitHub</p>
        </div>
        {/* xampp */}
        <div className="flex flex-col items-center">
          <Image src="/images/xampp.png" alt="XAMPP" width={50} height={50} />
          <p className="mt-2 text-sm">XAMPP</p>
        </div>
        {/* Next.js */}
        <div className="flex flex-col items-center">
          <Image src="/images/nextjs.png" alt="Next.js" width={50} height={50} />
          <p className="mt-2 text-sm">Next.js</p>
        </div>
        {/* Unity */}
        <div className="flex flex-col items-center">
          <Image src="/images/unity.png" alt="Unity" width={50} height={50} />
          <p className="mt-2 text-sm">Unity</p>
        </div>
        {/* GDevelop */}
        <div className="flex flex-col items-center">
          <Image src="/images/gdevelop.png" alt="GDevelop" width={50} height={50} />
          <p className="mt-2 text-sm">GDevelop</p>
        </div>
        {/* Vercel */}
        <div className="flex flex-col items-center">
          <Image src="/images/vercel.png" alt="Vercel" width={50} height={50} />
          <p className="mt-2 text-sm">Vercel</p>
        </div>
        {/* Netlify */}
        <div className="flex flex-col items-center">
          <Image src="/images/netlify.png" alt="Netlify" width={50} height={50} />
          <p className="mt-2 text-sm">Netlify</p>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/clorindee1.jpeg" width={500} height={500} alt="Profile" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am Zianva, a student at SMKN 21 in Jakarta, majoring in Software Engineering and Game Development. 
          I am currently building my skills in both web and game development. 
          My expertise includes HTML, CSS, Java, JavaScript, Laravel, PHP, C#, C++, ReactJS, and Tailwind. 
          Although I am still a student, I have a strong drive to learn and grow in these fields. 
          I enjoy the challenge of creating interactive and immersive applications, whether for the web or games, 
          and I am always excited to work in teams to bring ideas to life. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("tools")} active={tab === "tools"}>
              Tools
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
