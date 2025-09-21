import Link from "next/link";
import Image from "next/image";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className="w-[90%] min-h-screen flex flex-col items-center m-auto">
      <header className="w-full flex justify-center py-10">
        <nav className="w-full max-w-[650px] flex justify-between items-center text-sm">
          <Link href="/" className="flex items-center gap-1">
            See the mission
            <IoIosArrowRoundForward className="inline-block" size={18} />
          </Link>
          <div className="flex gap-4">
            <Link
              className="bg-black p-3 rounded-[4px] text-white text-xs font-bold"
              href="/about"
            >
              Pricing
            </Link>
            <Link
              className="bg-black p-3 rounded-[4px] text-white text-xs font-bold"
              href="/contact"
            >
              Sign in
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
          Introducing Novaa: Your AI Desktop Assitant
        </h2>
        <p className="text-left text-sm word-spacing-wide">
          <span className="bg-[#ffc700] text-black font-bold italic p-1">
            ChatGPT kinda sucks.
          </span>{" "}
          It has no real context over your work. Novaa lives on your computer.
          It gives you direct access to powerful AI models but it can also see
          your screen in real time and work with your local files.
        </p>
        <button className="bg-black p-3 rounded-[4px] text-white text-xs font-bold word-spacing-wider flex items-center justify-center">
          Download Novaa
          <LiaDownloadSolid className="inline-block ml-2" size={14} />
        </button>
      </section>
      <section className="mt-20 w-full max-w-[1200px] flex flex-col items-center gap-12">
        <Image
          priority
          loading="eager"
          width={800}
          height={450}
          src="/novaa.png"
          alt="App Demo"
          placeholder="blur"
          blurDataURL="/novaa.png"
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
          <article className="p-8 bg-[#f5f5f5] rounded-md flex gap-20">
            <div className=" flex flex-col gap-4 pl-6">
              <h3 className="font-bold text-2xl">realtime screen assitance</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, velit voluptates ab repellendus perferendis quis
                voluptatum asperiores neque! Non iure commodi suscipit ipsa
                dolorum aspernatur tempora ducimus, expedita necessitatibus
                quos?
              </p>
            </div>
            <Image
              priority
              loading="eager"
              width={200}
              height={112}
              src="/novaa.png"
              alt="App Demo"
              placeholder="blur"
              blurDataURL="/novaa.png"
              className="w-full max-w-5xl rounded-lg shadow-2xl"
            />
          </article>
          <article className="p-8 bg-[#f5f5f5] rounded-md flex flex-row-reverse gap-20">
            <div className=" flex flex-col gap-4 pl-6">
              <h3 className="font-bold text-2xl">complete filesystem access</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, velit voluptates ab repellendus perferendis quis
                voluptatum asperiores neque! Non iure commodi suscipit ipsa
                dolorum aspernatur tempora ducimus, expedita necessitatibus
                quos?
              </p>
            </div>
            <Image
              priority
              loading="eager"
              width={200}
              height={112}
              src="/novaa.png"
              alt="App Demo"
              placeholder="blur"
              blurDataURL="/novaa.png"
              className="w-full max-w-5xl rounded-lg shadow-2xl"
            />
          </article>
          <article className="p-8 bg-[#f5f5f5] rounded-md flex gap-20">
            <div className=" flex flex-col gap-4 pl-6">
              <h3 className="font-bold text-2xl">access to many ai models</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, velit voluptates ab repellendus perferendis quis
                voluptatum asperiores neque! Non iure commodi suscipit ipsa
                dolorum aspernatur tempora ducimus, expedita necessitatibus
                quos?
              </p>
            </div>
            <Image
              priority
              loading="eager"
              width={200}
              height={112}
              src="/novaa.png"
              alt="App Demo"
              placeholder="blur"
              blurDataURL="/novaa.png"
              className="w-full max-w-5xl rounded-lg shadow-2xl"
            />
          </article>
        </div>
      </section>

      <section className="my-20">
        <h2 className="text-center my-10 font-bold text-4xl">
          frequently asked question
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mb-20 w-full max-w-[1200px]">
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
            <button className="w-full py-3 px-6 border border-teal-500 text-teal-500 rounded-md font-semibold hover:bg-teal-50 transition-colors mb-8">
              Start for Free
            </button>
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
              <span className="text-4xl font-bold">From $20</span>
              <span className="text-gray-600">/month</span>
            </div>
            <button className="w-full py-3 px-6 bg-[#ffc700] text-black rounded-md font-semibold hover:bg-teal-700 transition-colors mb-8">
              Get Started
            </button>
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
        <button className="bg-[#ffc700] p-3 rounded-[4px] text-black text-xs font-bold word-spacing-wider flex items-center justify-center">
          Download Novaa
          <LiaDownloadSolid className="inline-block ml-2" size={14} />
        </button>
      </section>

      <footer className="my-10 w-full max-w-[1200px]">
        <hr className="bg-black" />
        <div className="my-10 flex justify-between">
          <h1>dome</h1>
          <p>&copy; 2025 dome computer</p>
        </div>
      </footer>
    </main>
  );
}

"use client"
import Link from "next/link";
import Image from "next/image";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoIosArrowRoundForward } from "react-icons/io";
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
    const session = await handle_get_session()
    console.log("session", session)
  }, [])

  React.useLayoutEffect(() => {
    get_session()
  }, [])

  return (
    <main className="w-[90%] min-h-screen flex flex-col items-center m-auto">
      <header className="w-full flex justify-center py-10">
        <nav className="w-full max-w-[650px] flex justify-between items-center text-sm">
          <Link href="/" className="flex items-center gap-1">
            See the mission
            <IoIosArrowRoundForward className="inline-block" size={18} />
          </Link>
          <div className="flex gap-4">
            <Link
              className="bg-black p-3 rounded-[4px] text-white text-xs font-bold"
              href="/about"
            >
              Pricing
            </Link>
            <Link
              className="bg-black p-3 rounded-[4px] text-white text-xs font-bold"
              href="/contact"
            >
              Sign in
            </Link>
            <Link className="bg-black p-3 rounded-[4px] text-white text-xs font-bold" href="/about">Pricing</Link>
            <Link className="bg-black p-3 rounded-[4px] text-white text-xs font-bold" href="/signup">Sign Up</Link>
            <Link className="bg-black p-3 rounded-[4px] text-white text-xs font-bold" href="/contact">Sign in</Link>
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
          Introducing Novaa: Your AI Desktop Assitant
        </h2>
        <p className="text-left text-sm word-spacing-wide">
          <span className="bg-[#ffc700] text-black font-bold italic p-1">
            ChatGPT kinda sucks.
          </span>{" "}
          It has no real context over your work. Novaa lives on your computer.
          It gives you direct access to powerful AI models but it can also see
          your screen in real time and work with your local files.
        </p>
        <button className="bg-black p-3 rounded-[4px] text-white text-xs font-bold word-spacing-wider flex items-center justify-center">
          Download Novaa
          <LiaDownloadSolid className="inline-block ml-2" size={14} />
        </button>
      </section>
      <section className="mt-20 w-full max-w-[1200px] flex flex-col items-center gap-12">
        <Image
          priority
          loading="eager"
          width={800}
          height={450}
          src="/novaa.png"
          alt="App Demo"
          placeholder="blur"
          blurDataURL="/novaa.png"
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
          <article className="p-8 bg-[#f5f5f5] rounded-md flex gap-20">
            <div className=" flex flex-col gap-4 pl-6">
              <h3 className="font-bold text-2xl">realtime screen assitance</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, velit voluptates ab repellendus perferendis quis
                voluptatum asperiores neque! Non iure commodi suscipit ipsa
                dolorum aspernatur tempora ducimus, expedita necessitatibus
                quos?
              </p>
            </div>
            <Image
              priority
              loading="eager"
              width={200}
              height={112}
              src="/novaa.png"
              alt="App Demo"
              placeholder="blur"
              blurDataURL="/novaa.png"
              className="w-full max-w-5xl rounded-lg shadow-2xl"
            />
          </article>
          <article className="p-8 bg-[#f5f5f5] rounded-md flex flex-row-reverse gap-20">
            <div className=" flex flex-col gap-4 pl-6">
              <h3 className="font-bold text-2xl">complete filesystem access</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, velit voluptates ab repellendus perferendis quis
                voluptatum asperiores neque! Non iure commodi suscipit ipsa
                dolorum aspernatur tempora ducimus, expedita necessitatibus
                quos?
              </p>
            </div>
            <Image
              priority
              loading="eager"
              width={200}
              height={112}
              src="/novaa.png"
              alt="App Demo"
              placeholder="blur"
              blurDataURL="/novaa.png"
              className="w-full max-w-5xl rounded-lg shadow-2xl"
            />
          </article>
          <article className="p-8 bg-[#f5f5f5] rounded-md flex gap-20">
            <div className=" flex flex-col gap-4 pl-6">
              <h3 className="font-bold text-2xl">access to many ai models</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, velit voluptates ab repellendus perferendis quis
                voluptatum asperiores neque! Non iure commodi suscipit ipsa
                dolorum aspernatur tempora ducimus, expedita necessitatibus
                quos?
              </p>
            </div>
            <Image
              priority
              loading="eager"
              width={200}
              height={112}
              src="/novaa.png"
              alt="App Demo"
              placeholder="blur"
              blurDataURL="/novaa.png"
              className="w-full max-w-5xl rounded-lg shadow-2xl"
            />
          </article>
        </div>
      </section>

      <section className="my-20">
        <h2 className="text-center my-10 font-bold text-4xl">
          frequently asked question
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mb-20 w-full max-w-[1200px]">
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
            <button className="w-full py-3 px-6 border border-teal-500 text-teal-500 rounded-md font-semibold hover:bg-teal-50 transition-colors mb-8">
              Start for Free
            </button>
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
              <span className="text-4xl font-bold">From $20</span>
              <span className="text-gray-600">/month</span>
            </div>
            <button className="w-full py-3 px-6 bg-[#ffc700] text-black rounded-md font-semibold hover:bg-teal-700 transition-colors mb-8">
              Get Started
            </button>
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
        <button className="bg-[#ffc700] p-3 rounded-[4px] text-black text-xs font-bold word-spacing-wider flex items-center justify-center">
          Download Novaa
          <LiaDownloadSolid className="inline-block ml-2" size={14} />
        </button>
      </section>

      <footer className="my-10 w-full max-w-[1200px]">
        <hr className="bg-black" />
        <div className="my-10 flex justify-between">
          <h1>dome</h1>
          <p>&copy; 2025 dome computer</p>
        </div>
      </footer>
    </main>
  );
}
