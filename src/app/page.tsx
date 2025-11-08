'use client'

import Image from "next/image";

import { Button } from "@/components/ui/button";
import backgroundimg from "@/assets/bg-main-a.png";
import { Badge } from "@/components/ui/badge";
import CardSpotlight from "@/components/card-spotlight";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Integration } from "@/components/integration";
import { Faq } from "@/components/faq";
import UseCaseSwitcher from "@/components/UseCaseSwitcher";
import ParallaxEffect from "@/components/parallaxeffect";
import VideoEmbed from "@/components/VideoEmbed";



export default function Home() {

  const cards = [
  {
    category: "Integrations",
    title: "Connect all your knowledge sources",
    src: "/images/integrations.png",
    content: (
      <p>
        Plug in Google Drive, Slack, Notion & more — unify scattered knowledge in one place.
      </p>
    ),
  },
  {
    category: "Search",
    title: "Lightning fast AI search",
    src: "/images/search.png",
    content: (
      <p>
        Get instant answers from documents, chats, and PDFs with context-aware AI.
      </p>
    ),
  },
  {
    category: "Security",
    title: "Enterprise-grade privacy",
    src: "/images/security.png",
    content: (
      <p>
        Your data stays encrypted with zero-trust access controls.
      </p>
    ),
  },
  {
    category: "Security",
    title: "Enterprise-grade privacy",
    src: "/images/security.png",
    content: (
      <p>
        Your data stays encrypted with zero-trust access controls.
      </p>
    ),
  },
  {
    category: "Security",
    title: "Enterprise-grade privacy",
    src: "/images/security.png",
    content: (
      <p>
        Your data stays encrypted with zero-trust access controls.
      </p>
    ),
  },
  {
    category: "Security",
    title: "Enterprise-grade privacy",
    src: "/images/security.png",
    content: (
      <p>
        Your data stays encrypted with zero-trust access controls.
      </p>
    ),
  },
];

const items = cards.map((card, index) => (
  <Card key={index} card={card} index={index} />
));


  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundimg.src})` }}
      >

        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="default"
            className="px-8 py-6 text-base"
          >
            Try Limelight
          </Button>
        </div>

        <div
          className=" absolute left-1/2 -translate-x-1/2 w-full max-w-xl px-4 text-center bottom-[calc(50%+84px)] md:bottom-[calc(50%+146px)] flex flex-col items-center gap-4"
        >
          <h1 className="text-4xl md:text-5xl leading-tight">
            Search engine for your business data.
          </h1>

          <p className="text-lg md:text-xl max-w-[400px] -mt-2">
            Instant, accurate answers from your company's files, documents, and knowledge on web or phone.
          </p>
        </div>
      </section>
      {/* After Hero Section */}

      {/* See it in action */}
      <section className=" z-10 py-12">
        
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <Badge className=" text-sm">See it in action</Badge>
          </div>
          {/* Video Section  */}
          <div className=" rounded-4xl my-12">
            <VideoEmbed videoId="dQw4w9WgXcQ" />
          </div>

          <div className=" text-center py-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8">
              <div className="lg:w-1/2">
                <h1 className="text-4xl lg:text-6xl text-left bg-linear-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  Built for modern business teams
                </h1>
              </div>
              <div className="mt-6 lg:mt-0 lg:w-1/2">
                <p className="text-left text-xl text-white">
                  Limelight makes business knowledge instantly searchable for fast-moving teams. No more digging through files, chats, and drives find what you need, when and where you need it.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <CardSpotlight
              title="Cut search time to seconds."
              content="Limelight delivers answers in seconds, instantly and effortlessly."
            />
            <CardSpotlight
              title="Cut search time to seconds."
              content="Limelight delivers answers in seconds, instantly and effortlessly."
            />
            <CardSpotlight
              title="Cut search time to seconds."
              content="Limelight delivers answers in seconds, instantly and effortlessly."
            />
          </div>
        </div>
      </section>

      <section className=" z-10 py-32 lg:py-42 bg-background">
        <ParallaxEffect />
      </section>


      {/* Features */}
      <section className=" z-10 py-12 bg-background">
        
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <Badge className=" text-sm">Features</Badge>
          </div>

          <div className=" text-center py-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8">
              <div className="lg:w-1/2">
                <h1 className="text-4xl lg:text-6xl text-left bg-linear-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  Unify knowledge across tools and teams
                </h1>
              </div>
              <div className="mt-6 lg:mt-0 lg:w-1/2">
                <p className="text-left text-xl text-white">
                  Limelight makes business knowledge instantly searchable for fast-moving teams. No more digging through files, chats, and drives find what you need, when and where you need it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Cards */}
        <div>
          <Carousel items={items} />
        </div>
      </section>

      {/* see how it works section here */}
      <section className=" z-10 py-12">
        <div>
          <div className="text-center">
              <Badge className=" text-sm">How it works</Badge>
          </div>

          <div>
            {/* animations since they would leak */}
          </div>

          {/* text which wont leak + image */}
          <div className="max-w-5xl mx-auto px-6">

          </div>
        </div>
      </section>
      {/* See how it actually works */}

      {/* Supported databases */}
      <section className=" z-10 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
              <Badge className=" text-sm">Supported databases</Badge>
          </div>

          <Integration />
        </div>
      </section>

      {/* Testimonials */}
      <section className=" z-10 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
              <Badge className=" text-sm">Client Testimonials</Badge>
          </div>
          <div className="text-center py-12">
            <h1 className="text-4xl lg:text-6xl text-left bg-linear-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent max-w-xl">
              Built for real-world applications
            </h1>
            <UseCaseSwitcher />
          </div>
        </div>
      </section>

      {/* FQA */}
      <section className=" z-10 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
              <Badge className=" text-sm">Questions? Answers</Badge>
          </div>
          <Faq />
        </div>
      </section>

      {/* FORM SECTION */}

      {/* FOOTER */}
      <footer className="w-full bg-[#0A0A0A] border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center">
          
          {/* Big Title */}
          <h1 className="font-bold text-center bg-linear-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent tracking-tight text-[clamp(3rem,12vw,12rem)] leading-none">
            LIMELIGHT
          </h1>

          <div className="w-full h-px bg-white/10 my-12" />

          {/* Top Section: Email / Socials / Phone */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between text-sm text-white/70 gap-10">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-xs uppercase text-white/50">Email</span>
              <a href="mailto:example@limelight.ai" className="hover:text-white transition">
                team@limelight.chat
              </a>
            </div>

            <div className="flex flex-col items-center gap-1">
              <span className="text-xs uppercase text-white/50">Follow Us</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition">X</a>
                <a href="#" className="hover:text-white transition">Instagram</a>
                <a href="#" className="hover:text-white transition">Discord</a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-1">
              <span className="text-xs uppercase text-white/50">Phone</span>
              <a href="tel:+911234567890" className="hover:text-white transition">
                +91 12345 67890
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Navigation + Made in India */}
        <div className="border-t border-white/10 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-4">
          
          {/* Navigation */}
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Photos</a>
            <a href="#" className="hover:text-white transition">Videos</a>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
          </div>

          {/* Made in India */}
          <span className="flex items-center gap-1">
            Made in <b>India</b>
          </span>
        </div>
      </footer>


    </>
  );
}
