"use client"
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Mission() {
  return (
    <main className="w-[90%] min-h-screen flex flex-col items-center m-auto">
      <header className="w-full flex justify-center py-10">
        <nav className="w-full max-w-[650px] flex justify-between items-center text-sm">
          <Link href="/" className="flex items-center gap-1">
            <IoIosArrowRoundForward className="inline-block rotate-180" size={18} />
            back to home
          </Link>
        </nav>
      </header>

      <article className="w-full max-w-[650px] flex flex-col gap-8">
{/*         <h1 className="text-4xl font-bold">Our Mission</h1>
 */}
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
        
        <section className="flex flex-col gap-6">
          <p className="text-lg font-medium">
            At DΩME, we believe the future of AI should be private, personal, and powerful.
          </p>

          <p className="text-gray-800">
            Today's AI feels like the computers of the past: giant machines locked away in distant rooms, 
            controlled by a few. To use them, you have to send your data to the cloud and trust corporations 
            with your most personal information.
          </p>

          <p className="text-gray-800">
            We see a different future. Just as computers evolved from mainframes to personal laptops, 
            we believe AI will evolve from massive, centralized models into small, efficient systems that 
            live with you on your own devices, in your own hands, working for you and only you.
          </p>

          <p className="text-gray-800">
            Our mission is to build the personal computer of the AI era: private AI that matches the 
            performance of today's largest models, but runs locally on devices you own and trust. 
            This means new architectures, new hardware, and a new kind of AI operating system that 
            connects seamlessly with your life and your applications.
          </p>

          <p className="text-gray-800">
            Nōva, our first product, is the beginning of this journey. It is an AI desktop assistant 
            that shows how AI can integrate directly into your workflow, empowering you without 
            compromising your privacy.
          </p>

          <p className="text-lg font-medium">
            DΩME exists to push the frontier of AI research and engineering, with one goal: make 
            advanced AI personal, private, and truly yours.
          </p>
        </section>
      </article>
    </main>
  );
}