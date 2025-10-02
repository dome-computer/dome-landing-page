"use client";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Mission() {
  return (
    <main className="w-[90%] min-h-screen flex flex-col items-center m-auto">
      <header className="w-full flex justify-center py-10">
        <nav className="w-full max-w-[700px] flex justify-between items-center text-sm">
          <Link href="/" className="flex items-center gap-1 hover:underline">
            <IoIosArrowRoundForward
              className="inline-block rotate-180"
              size={18}
            />
            back to home
          </Link>
        </nav>
      </header>

      <article className="w-full max-w-[700px] flex flex-col gap-10">
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

        <section className="flex flex-col gap-5 text-gray-800 leading-relaxed tracking-wide">
          <p className="">
            We are <span className="font-extrabold">DΩME</span>, an AI lab on a
            mission to reinvent the way humans live with artificial
            intelligence.
          </p>

          <p>
            We believe the future of AI should be{" "}
            <span className="font-bold">private</span>,{" "}
            <span className="font-bold">personal</span>, and{" "}
            <span className="font-bold">powerful</span>.
          </p>

          <h2 className="text-xl font-bold mt-6">The problem</h2>
          <p>
            Today’s AI feels like the computers of the past: giant machines
            hidden in distant data centers, controlled by a few corporations.
            Using them means sending your data to the cloud and giving up
            control over your most personal information.
          </p>

          <h2 className="text-xl font-bold mt-6">Our vision</h2>
          <p>
            Just as computers evolved from mainframes to personal laptops, AI
            will evolve from massive centralized models to{" "}
            <span className="font-semibold">small, efficient systems</span> that
            live with you: on devices you own and trust, working only for you.
          </p>

          <h2 className="text-xl font-bold mt-6">Our mission</h2>
          <p>
            Over the next 10 to 15 years we want to build{" "}
            <span className="font-semibold">
              personal computer of the AI era
            </span>
            : advanced AI that matches the performance of todays largest models
            but runs locally, privately, and seamlessly within your life and
            applications.
          </p>

          <h2 className="text-xl font-bold mt-6">Our first step</h2>
          <p>
            <span className="font-semibold">Nōva</span> is where this journey
            begins. For now, it&apos;s a desktop assistant woven directly into
            your workflow. But that&apos;s only the starting point.
          </p>
          <p>
            Our ambition is for Nōva to grow into{" "}
            <span className="font-semibold">your AI operating system</span>: a
            connected, adaptive layer that powers your entire digital life. It
            won&apos;t just help you launch apps or write text — it will be the
            backbone that links together your tools, your data, and even your
            devices into one coherent “life OS.” Always there, always on your
            side, always under your control.
          </p>

          <p className="mt-10">
            <span className="font-extrabold">DΩME</span> exists to push the
            frontier of AI research and engineering; with one goal: make
            advanced AI personal, private, and truly yours.
          </p>
          <p className="my-5">
            Thank you for joining us on this journey.
          </p>
        </section>
      </article>
    </main>
  );
}
