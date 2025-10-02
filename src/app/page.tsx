"use client";
import Link from "next/link";
import Image from "next/image";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiWindowsFill } from "react-icons/ri";
/* import { useState } from "react";
 */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { handle_get_session } from "@/shared/server-functions";

export default function Home() {
  const get_session = React.useCallback(async () => {
    const session = await handle_get_session();
    console.log("session", session);
  }, []);

  React.useLayoutEffect(() => {
    get_session();
  }, [get_session]);

  /* const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    // Optional: hide the message after a few seconds
    setTimeout(() => setShowMessage(false), 3000);
  }; */

  return (
    <main className="w-[90%] min-h-screen flex flex-col items-center m-auto">
      <header className="w-full flex justify-center py-10">
        <nav className="w-full max-w-[650px] flex justify-between items-center text-sm">
          <Link href="/mission" className="flex items-center gap-1">
            read our mission
            <IoIosArrowRoundForward className="inline-block" size={18} />
          </Link>
          <div className="flex gap-2 md:gap-4">
            <Link
              className="bg-black p-3 rounded-[4px] text-white text-xs font-bold"
              href="#pricing"
            >
              Pricing
            </Link>

            <Link
              href="https://drive.google.com/uc?export=download&id=10zvsRbx7FJ8KIxMNBHojv1CurgijdC0D"
              className="bg-black cursor-pointer p-3 rounded-[4px] text-white text-xs font-bold word-spacing-wider flex items-center justify-center"
            >
              Download Nōva
              <LiaDownloadSolid className="inline-block ml-2" size={14} />
            </Link>
          </div>
        </nav>
      </header>
      <section className="w-full max-w-[650px] flex flex-col gap-4 items-start">
        <h1 className="text-left font-press-start-2p text-7xl">
          {"DΩME".split("").map((letter, index) => (
            <span
              key={index}
              className="animate-letter"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <h2 className="font-extrabold text-xl">
          introducing Nōva: your ai desktop assitant
        </h2>
        <p className="text-left text-sm word-spacing-wide">
          <span className="bg-[#ffc700] inline-block text-black font-bold italic p-1 -rotate-2 rounded-[4px]">
            ChatGPT kinda sucks.
          </span>{" "}
          It has no real context over your work. Nōva lives on your computer. It
          gives you direct access to powerful AI models but it can also see your
          screen in real time and work with your local files and more coming
          soon.
        </p>
        <div>
          <Link
            href="https://drive.google.com/uc?export=download&id=10zvsRbx7FJ8KIxMNBHojv1CurgijdC0D"
            className="bg-black p-3 cursor-pointer rounded-[4px] text-white text-xs font-bold flex gap-2 items-center justify-center"
          >
            <RiWindowsFill />
            Download for Windows
            {/*           <LiaDownloadSolid className="inline-block ml-2" size={14} />
             */}{" "}
          </Link>
          {/* {showMessage && (
            <p className="text-xs text-[#ffc700] font-bold mt-2">
              Launching in few days
            </p>
          )} */}
        </div>
      </section>
      <section className="mt-20 w-full max-w-[1200px] flex flex-col items-center gap-20">
        <video
          src="/novaMain.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-5xl rounded-lg shadow-2xl"
        />

        <ul className="flex justify-center items-center gap-4 max-w-[1000px]">
          <li>
            <Image
              src="https://storage.googleapis.com/eleven-public-cdn/images/elevenlabs-grants-logo.png"
              alt="Novaa"
              width={260}
              height={30}
            />
          </li>
          <li>
            <Image
              src="/microsoft-startup-hub_logo.webp"
              alt="Novaa"
              width={260}
              height={30}
            />
          </li>
          <li>
            <Image
              src="/aws-startup-programs_logo.webp"
              alt="Novaa"
              width={260}
              height={30}
            />
          </li>
          <li>
            <Image
              src="/Google_for_Startups_logo.svg.png"
              alt="Novaa"
              width={260}
              height={30}
            />
          </li>
        </ul>
      </section>

      <section className="mt-20 w-full max-w-[1200px]">
        <h2 className="text-center my-10 font-bold text-4xl">
          all the good stuff
        </h2>
        <div className="flex flex-col gap-10">
          <article className="p-8 bg-[#f5f5f5] rounded-md flex flex-col md:flex-row gap-20">
            <div className=" flex flex-col gap-4 pl-6">
              <h3 className="font-bold text-2xl">
                see and understand your screen
              </h3>
              <p className="">
                Nōva can follow what&apos;s happening on your screen in real
                time. Whether you’re reading a document, browsing the web, or
                working in an app, it can summarize, explain, or take action
                without you having to switch context.
              </p>
            </div>

            <video
              src="/novaScreen.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full md:w-[40%] max-w-5xl rounded-lg shadow-2xl"
            />
          </article>
          <article className="p-8 bg-[#f5f5f5] rounded-md flex flex-col md:flex-row-reverse gap-20">
            <div className=" flex flex-col gap-4 pl-6">
              <h3 className="font-bold text-2xl">
                work seamlessly with your files
              </h3>
              <p className="">
                From opening documents to organizing folders, Nōva interacts
                directly with your file system. You decide what it can access,
                and it helps you edit, create, or manage files just by asking.
              </p>
            </div>
            <video
              src="/novaFiles.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full md:w-[40%] max-w-5xl rounded-lg shadow-2xl"
            />
          </article>
          <article className="p-8 bg-[#f5f5f5] rounded-md flex flex-col md:flex-row gap-20">
            <div className=" flex flex-col gap-4 pl-6">
              <h3 className="font-bold text-2xl">
                choose from multiple ai odels
              </h3>
              <p className="">
                Not all tasks need the same kind of intelligence. Nōva lets you
                switch between leading AI models so you always get the right mix
                of speed, accuracy, and creativity for the job.
              </p>
            </div>
            <video
              src="/novaaModels.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full md:w-[40%] max-w-5xl rounded-lg shadow-2xl"
            />
          </article>
        </div>
      </section>

      <section className="my-20 flex flex-col w-full max-w-[700px] items-center">
        <h2 className="text-center my-10 font-bold text-4xl">
          frequently asked question
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">
              What is Nōva?
            </AccordionTrigger>
            <AccordionContent>
              Nōva is an AI desktop assistant that helps you interact with your
              computer using natural language. You can ask it to perform tasks,
              summarize what&apos;s on your screen, or manage files directly
              from your desktop.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold">
              How is Nōva different from ChatGPT?
            </AccordionTrigger>
            <AccordionContent>
              Unlike ChatGPT, Nōva doesn&apos;t just answer questions; it can
              also see your screen in real time, access your file system, and
              connect to multiple AI models so you can choose the right one for
              each task.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold">
              Can Nōva see everything on my screen?
            </AccordionTrigger>
            <AccordionContent>
              Yes, but only if you allow it. You&apos;re always in control. You
              can decide what parts of your screen Nōva is able to process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold">
              Is my data safe with Nōva?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. All interactions are permission-based. Your files and
              screen data are only processed when you authorize it, and Nōva
              never shares your data without your consent.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="font-bold">
              What can Nōva do with my files?
            </AccordionTrigger>
            <AccordionContent>
              With your approval, Nōva can open, organize, edit, or summarize
              your files. For example, it can draft a report from your notes,
              clean up folders, or generate presentations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="font-bold">
              Can I customize Nōva?
            </AccordionTrigger>
            <AccordionContent>
              Yes. You can choose which models it uses, limit what it can access
              (screen, files, apps), and adjust its behavior to fit your
              workflow.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section id="pricing" className="mb-20 w-full max-w-[1200px]">
        <h2 className="text-center my-10 font-bold text-4xl mb-16">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 relative">
            <h3 className="text-3xl font-bold mb-4">Free</h3>
            <p className="text-gray-600 mb-6">
              The perfect starting place for your AI assistant.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-600">/month</span>
            </div>
            <Link
              href="https://drive.google.com/uc?export=download&id=10zvsRbx7FJ8KIxMNBHojv1CurgijdC0D"
              className="w-full cursor-pointer py-3 px-6 border border-[#ffc700] text-[#ffc700] rounded-md font-semibold hover:bg-teal-50 transition-colors mb-8"
            >
              Download Nōva
              <LiaDownloadSolid className="inline-block ml-2" size={14} />
            </Link>
            <div>
              <h4 className="font-semibold mb-4">Get Started with:</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-sm">
                    5K Workflow executions / month
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-sm">1K Concurrent executions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-sm">Session monitoring & metrics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-sm">Chat with AI assistants</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-sm">Basic file access</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-sm">Screen sharing assistance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 relative">
            <h3 className="text-3xl font-bold mb-4">Pro</h3>
            <p className="text-gray-600 mb-6">
              Everything you need to build and scale your workflow
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold">From $17</span>
              <span className="text-gray-600">/month</span>
              <p className="mt-2 text-yellow-600 font-extralight">
                <span className="font-bold">$12</span> for the first 100
                customers
              </p>
            </div>
            <Link
              href="https://drive.google.com/uc?export=download&id=10zvsRbx7FJ8KIxMNBHojv1CurgijdC0D"
              className="w-full cursor-pointer py-3 px-6 bg-[#ffc700] text-black rounded-md font-semibold hover:bg-black hover:text-white transition-colors mb-8"
            >
              Download Nōva
              <LiaDownloadSolid className="inline-block ml-2" size={14} />
            </Link>
            <div className="text-sm text-gray-600 mb-6">
              <p>25k Workflow executions</p>
              <a href="#" className="text-teal-600 hover:underline">
                Need more compute?
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                Everything in the free plan plus:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-sm">
                    Unlimited monitoring and retention
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-sm">
                    Unlimited knowledge and memories
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-sm">5K concurrent executions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-sm">Workflow history</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-sm">Execution search</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-4">
        <h2 className="text-center font-bold text-4xl">get started for free</h2>
        <p className="text-center">chatGPT on steroids</p>
        <Link
          href="https://drive.google.com/uc?export=download&id=10zvsRbx7FJ8KIxMNBHojv1CurgijdC0D"
          className="bg-[#ffc700] cursor-pointer p-3 rounded-[4px] text-black text-xs font-bold word-spacing-wider flex items-center justify-center"
        >
          Download Nōva
          <LiaDownloadSolid className="inline-block ml-2" size={14} />
        </Link>
      </section>

      <footer className="my-10 w-full max-w-[1200px]">
        <hr className="bg-black" />
        <div className="my-5 flex justify-between">
          <div className="flex items-center gap-1">
            <Image
              src="/favicon.ico"
              alt="Dome Logo"
              width={35}
              height={35}
              className="mb-1"
            ></Image>
            <h1 className="text-left font-press-start-2p text-sm">
              {"DΩME".split("").map((letter, index) => (
                <span
                  key={index}
                  className="animate-letter"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>
          <p className="text-xs font-semibold">&copy; 2025 dome computer</p>
        </div>
      </footer>
    </main>
  );
}
