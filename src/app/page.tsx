'use client'

import card1 from "@/assets/cards/card 1.svg";
import card2 from "@/assets/cards/card 2.svg";
import card3 from "@/assets/cards/card 3.svg";
import card4 from "@/assets/cards/card 4.svg";
import card5 from "@/assets/cards/card 5.svg";
import card6 from "@/assets/cards/card 6.svg";
import card7 from "@/assets/cards/card 7.svg";
import test from "@/assets/Rectangle 115 (2).png"

// Animation images for sticky scroll
import imgOneFirst from "@/assets/animation/imgone-first.svg";
import imgOneSecond from "@/assets/animation/imgone-second.svg";
import imgOneThird from "@/assets/animation/imgone-third.svg";
import imgOneFourth from "@/assets/animation/imgone-fourth.svg";
import imgOneFifth from "@/assets/animation/imgone-fifth.svg";
import imgTwoFirst from "@/assets/animation/imgtwo-first.svg";
import imgTwoSecond from "@/assets/animation/imgtwo-second.svg";
import imgTwoThird from "@/assets/animation/imgtwo-third.svg";
import imgTwoFourth from "@/assets/animation/imgtwo-fourth.svg"
import imgThreeFirst from "@/assets/animation/imgthree-first.svg";
import imgThreeSecond from "@/assets/animation/imgthree-second.svg";
import imgThreeThird from "@/assets/animation/imgthree-third.svg";
import imgThreeFourth from "@/assets/animation/imgthree-fourth.svg";

// Emojis, Logos
import gmailIcon from "../assets/icons/gmail.png";
import slackIcon from "../assets/icons/slack.png";
import notionIcon from "../assets/icons/notion.png";
import whatsappIcon from "../assets/icons/whatsapp.png";
import angryEmoji from "@/assets/animation/icons/angry.png"
import meditateEmoji from "@/assets/animation/icons/meditation.png"
import coolEmoji from "@/assets/animation/icons/cool.png"
import relievedEmoji from "@/assets/animation/icons/relieved.png"
import waveEmoji from "@/assets/animation/icons/wave.png"


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
import StickyScrollReveal from "@/components/ui/sticky-scroll-reveal";




export default function Home() {

  const cards = [
  {
    category: "Integrations",
    title: "Connect all your knowledge sources",
    src: card1.src,
    content: (
      <p>
        Plug in Google Drive, Slack, Notion & more — unify scattered knowledge in one place.
      </p>
    ),
  },
  {
    category: "Search",
    title: "Lightning fast AI search",
    src: card2.src,
    content: (
      <p>
        Get instant answers from documents, chats, and PDFs with context-aware AI.
      </p>
    ),
  },
  {
    category: "Chat",
    title: "Talk naturally with your data",
    src: card3.src,
    content: (
      <p>
        Your data stays encrypted with zero-trust access controls.
      </p>
    ),
  },
  {
    category: "Search",
    title: "Company-Wide Search",
    src: card4.src,
    content: (
      <p>
        Your data stays encrypted with zero-trust access controls.
      </p>
    ),
  },
  {
    category: "Access",
    title: "Use Anywhere, Instantly",
    src: card5.src,
    content: (
      <p>
        Use Limelight directly from WhatsApp or Slack no downloads, no setup, just start chatting.
      </p>
    ),
  },
  {
    category: "Security",
    title: "Enterprise-grade privacy",
    src: card6.src,
    content: (
      <p>
        Your data stays encrypted with zero-trust access controls.
      </p>
    ),
  },
  {
    category: "Security",
    title: "Bring your own Cloud",
    src: card7.src,
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
      <StickyScrollReveal
            slides={[
            {
                title: "Your company knows everything, yet no one can find anything",
                images: [
                  { src: imgOneFirst, position: "right" },
                  { src: imgOneSecond, position: "left" },
                  { src: imgOneThird, position: "left" },
                  { src: imgOneFourth, position: "left" },
                  { src: imgOneFifth, position: "right" },
                ],
                emojis: [
                  { src: slackIcon, alt: "slack", x: -400, y: -200, size: 120, anger: true, angle: 10  },
                  { src: notionIcon, alt: "notion", x: 440, y: -250, size: 160, anger: true, angle: 20 },
                  { src: gmailIcon, alt: "gmail", x: -430, y: 240, size: 160, anger: true, angle: -20 },
                  { src: whatsappIcon, alt: "whatsapp", x: 450, y: 180, size: 120, anger: true, angle: 10 },
                ],
            },
            {
                title: "Half your day goes into searching, not working",
                images: [
                  { src: imgTwoFirst, position: "right" },
                  { src: imgTwoSecond, position: "left" },
                  { src: imgTwoThird, position: "right" },
                  { src: imgTwoFourth, position: "left" },
                ],
                emojis: [
                  { src: angryEmoji, alt: "angry", x: -400, y: -150, size: 250, anger: true, angle: -42  },
                  { src: angryEmoji, alt: "angry", x: 400, y: -300, size: 170, anger: true, angle: 10  },
                  { src: angryEmoji, alt: "angry", x: -400, y: 250, size: 190, anger: true, angle: -11  },
                  { src: angryEmoji, alt: "angry", x: 400, y: 250, size: 270, anger: true, angle: 30 },
                ],
            },
            {
                title: "what if?",
                images: [
                  { src: imgThreeFirst, position: "right"  },
                  { src: imgThreeSecond, position: "left"  },
                  { src: imgThreeThird, position: "right"  },
                  { src: imgThreeFourth, position: "left"  },
                ],
                emojis: [
                  { src: meditateEmoji, alt: "meditate", x: -400, y: -150, size: 250, anger: false, angle: -12  },
                  { src: coolEmoji, alt: "cool guy", x: 400, y: -300, size: 170, anger: false, angle: 11 },
                  { src: relievedEmoji, alt: "relieved", x: -400, y: 250, size: 190, anger: false, angle: -18 },
                  { src: waveEmoji, alt: "ocean wave", x: 400, y: 250, size: 200, anger: false, angle: 8 },
                ],
            },
            ]}
        />

      <section className=" z-10 py-12">
    
        <div className="max-w-5xl mx-auto px-6">
          <div className=" text-center py-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8">
              <div className="lg:w-1/2">
                <h1 className="text-4xl lg:text-6xl text-left bg-[linear-gradient(to_right,#fb923c_0%,#ED3558_60%,#ED3558_100%)] bg-clip-text text-transparent">
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
              title="For Business Owners"
              content="Limelight finds numbers, reports, and insights buried across your tools in seconds."
              imageSrc={test}
            />
            <CardSpotlight
              title="For Founders"
              content="Know what’s happening, instantly. Get a pulse on every part of your business in seconds."
              imageSrc={test}
            />
            <CardSpotlight
              title="For Teams"
              content="Work smarter together. Find answers and context instantly, across every app you use every day."
              imageSrc={test}
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
                <h1 className="text-4xl lg:text-6xl text-left bg-[linear-gradient(to_right,#fb923c_0%,#ED3558_60%,#ED3558_100%)] bg-clip-text text-transparent">
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
              <Badge className=" text-sm">See it in action</Badge>
          </div>

          <div className=" rounded-4xl my-12">
            <VideoEmbed videoId="bd0msvYyQ6Y" />
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
            <h1 className="text-4xl lg:text-6xl text-left bg-[linear-gradient(to_right,#fb923c_0%,#ED3558_60%,#ED3558_100%)] bg-clip-text text-transparent max-w-xl">
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

    </>
  );
}
