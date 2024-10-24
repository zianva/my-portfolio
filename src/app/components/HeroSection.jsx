"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/clorinde1.png"
              alt="clorinde"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start ml-20"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-200">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Zianva",
                1000,
                "Software Engineer",
                1000,
                "Web Developer",
                1000,
                "Game Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am an enthusiastic student currently learning software development
            and game development. I am eager to explore the world of technology
            and creativity, focusing on building interactive experiences. With a
            commitment to continuous learning, I am excited to take on new
            challenges and grow my skills in this dynamic field.
          </p>

          {/* Ikon sosial media */}
          <div className="flex space-x-4 mt-4">
            <Link
              href="https://www.instagram.com/shadowacee/profilecard/?igsh=c2Y0aDVkbWFlaDcw"
              target="_blank"
            >
              <Image
                src="/images/instagram.jpeg"
                alt="Instagram"
                className="rounded-full"
                width={40}
                height={40}
              />
            </Link>
            <Link
              href="https://x.com/aaa_oomaga?t=WxWtaiJRUJqr-fL_xiWIMg&s=09"
              target="_blank"
            >
              <Image
                src="/images/twitter.jpeg"
                alt="Twitter"
                className="rounded-full"
                width={40}
                height={40}
              />
            </Link>
            <Link href="https://github.com/zianva" target="_blank">
              <Image
                src="/images/github.jpeg"
                alt="GitHub"
                className="rounded-full"
                width={40}
                height={40}
              />
            </Link>

            <Link href="https://wa.me/62895321016707" target="_blank">
              <Image
                src="/images/whatsapp.jpeg"
                alt="WhatsApp"
                className="rounded-full"
                width={40}
                height={40}
              />
            </Link>
          </div>

          {/* Tambahkan margin-top disini untuk jarak antara icon dan button */}
          <div className="mt-8">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
