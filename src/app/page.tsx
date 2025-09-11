import Link from "next/link";
import Image from "next/image";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <main className="w-[90%] min-h-screen flex flex-col items-center m-auto">
      <header className="w-full flex justify-center py-10">
        <nav className="w-full max-w-[650px] flex justify-between items-center text-sm">
          <Link href="/" className="flex items-center gap-1">
          See the mission
          <IoIosArrowRoundForward className="inline-block" size={18}/>
          </Link>
          <div className="flex gap-4">
            <Link className="bg-black p-3 rounded-[4px] text-white text-xs font-bold" href="/about">Pricing</Link>
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
          <h2 className="font-extrabold text-xl">Introducing Novaa: Your AI Desktop Assitant</h2>
          <p className="text-left text-sm word-spacing-wide">
            <span className="bg-[#ffc700] text-black font-bold italic p-1">ChatGPT kinda sucks.</span> It has no real context over your work. Novaa lives on your computer. 
            It gives you direct access to powerful AI models but it can also see your screen in real time and work with your local files. 
          </p>
          <button className="bg-black p-3 rounded-[4px] text-white text-xs font-bold word-spacing-wider flex items-center justify-center">
            Download Novaa
            <LiaDownloadSolid className="inline-block ml-2" size={14} />
          </button>
      </section>
      <section className="mt-20 w-full max-w-[1200px] flex justify-center">
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
        </section>
    </main>
  );
}
