'use client'

import { useState } from "react";
import { motion } from "motion/react";

import study from "@/assets/spotlight/study.png"
import freelance from "@/assets/spotlight/freelancer.png"
import work from "@/assets/spotlight/work.png"

// consumer cards
import card1 from "@/assets/consumer/card1.svg"
import card2 from "@/assets/consumer/card2.svg"
import card3 from "@/assets/consumer/card3.svg"
import card4 from "@/assets/consumer/card4.svg"
import card5 from "@/assets/consumer/card5.svg"
import card6 from "@/assets/consumer/card6.svg"

// Animation images for sticky scroll
import imgOneFirst from "@/assets/animation_c/imgone-first.svg";
import imgOneSecond from "@/assets/animation_c/imgone-second.svg";
import imgOneThird from "@/assets/animation_c/imgone-third.svg";
import imgOneFourth from "@/assets/animation_c/imgone-fourth.svg";
import imgTwoFirst from "@/assets/animation_c/imgtwo-first.svg";
import imgTwoSecond from "@/assets/animation_c/imgtwo-second.svg";
import imgTwoThird from "@/assets/animation_c/imgtwo-third.svg";
import imgTwoFourth from "@/assets/animation_c/imgtwo-fourth.svg"
import imgThreeFirst from "@/assets/animation_c/imgthree-first.svg";
import imgThreeSecond from "@/assets/animation_c/imgthree-second.svg";
import imgThreeThird from "@/assets/animation_c/imgthree-third.svg";
import imgThreeFourth from "@/assets/animation_c/imgthree-fourth.svg";

import pfp1 from "@/assets/redditpfp/pfp1.png";
import pfp2 from "@/assets/redditpfp/pfp2.png";
import pfp3 from "@/assets/redditpfp/pfp3.png";
import pfp4 from "@/assets/redditpfp/pfp4.webp";

// Emojis, Logos
import gmailIcon from "@/assets/icons/gmail.png";
import notesIcon from "@/assets/icons/notes.png";
import notionIcon from "@/assets/icons/notion.png";
import whatsappIcon from "@/assets/icons/whatsapp.png";
import angryEmoji from "@/assets/animation/icons/angry.png"
import meditateEmoji from "@/assets/animation/icons/meditation.png"
import coolEmoji from "@/assets/animation/icons/cool.png"
import relievedEmoji from "@/assets/animation/icons/relieved.png"
import waveEmoji from "@/assets/animation/icons/wave.png"

import Image from "next/image";
import aiIcon from "@/assets/ai.svg";
import brainIcon from "@/assets/brain.svg";
import CardSpotlight from "@/components/card-spotlight";
import measure from "@/assets/measure.png"

import { Carousel, Card } from "@/components/ui/consumer-card";
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

import StickyScrollReveal from "@/components/ui/sticky-scroll-reveal";
import { WavyBackground } from "@/components/ui/wavy-background";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import SupportedUser from "@/components/supported-user";
import SpaceSwitch from "@/components/macbook-switch";
import FooterAlt from "@/components/footer-alt";

import {
  Discussion,
  DiscussionActions,
  DiscussionAuthor,
  DiscussionAvatar,
  DiscussionBody,
  DiscussionContent,
  DiscussionItem,
  DiscussionReplies,
} from "@/components/ui/discussion"


export default function Consumer() {

  const cards = [
    {
      category: "Integrations",
      title: "Connect all your knowledge sources ",
      src: card1.src,
      content: (
        <p>
          Plug in Google Drive, Slack, Notion & more — unify scattered knowledge in one place.
        </p>
      ),
    },
    {
      category: "Lightning-Fast Search",
      title: "Find anything across apps, chats, screenshots, PDFs—instantly.",
      src: card2.src,
      content: (
        <p>
          Find anything across apps, chats, PDFs - instantly.
        </p>
      ),
    },
    {
      category: "Your Personal Command Center",
      title: "Switch between study, work, and life with one simple dashboard.",
      src: card3.src,
      content: (
        <p>
          Plug in Google Drive, Slack, Notion & more — unify scattered knowledge in one place.
        </p>
      ),
    },
    {
      category: "AI Answers, Not Just Results",
      title: "Ask anything, Limelight reads your files and gives you clear answers, summaries, and explanations",
      src: card4.src,
      content: (
        <p>
          Your data stays encrypted with zero-trust access controls.
        </p>
      ),
    },
    {
      category: "Find Anything",
      title: "Search by context, even when you don't know the file name",
      src: card6.src,
      content: (
        <p>
          Use Limelight directly from WhatsApp or Slack no downloads, no setup, just start chatting.
        </p>
      ),
    },
    {
      category: "Connect in Seconds",
      title: "Link WhatsApp, Drive, Slack, and more with a single step.",
      src: card5.src,
      content: (
        <p>
          Your data stays encrypted with zero-trust access controls.
        </p>
      ),
    },
  ];

  const defaultData = [
    {
      answer: "Limelight is your personal AI assistant that organizes your files, notes, screenshots, chats, and documents into one smart search bar—so you can find anything instantly.",
      icon: "💡",
      iconPosition: "right",
      id: 1,
      question: "What is Limelight?",
    },
    {
      answer: "No, It automatically sorts your digital mess and answers questions from your files, saving you time every day. don't need a license to browse this website.",
      id: 2,
      icon: "❤️",
      iconPosition: "left",
      question: "How does Limelight help me in daily life?",
    },
    {
      answer: "Our No. Limelight is built for everyday users—just ask your questions in plain English. are digital, not edible. They're used for website functionality.",
      id: 3,
      icon: "⁉️",
      iconPosition: "right",
      question: "What Do I need technical skills to use Limelight?",
    },
    {
      answer: "Not exactly. Google searches the internet; Limelight searches your digital life.",
      icon: "⭐",
      iconPosition: "left",
      id: 4,
      question: "Does Limelight replace Google search?",
    },
    {
      answer: "Absolutely. You can access Limelight from any device—mobile, tablet, or laptop.",
      id: 5,
      icon: "📱",
      iconPosition: "right",
      question: "Will Limelight work on my phone?",
    },
  ];


  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ]

  const items = cards.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));


  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <WavyBackground
          colors={["#E67820", "#ED3658"]}
          speed="fast"
          backgroundFill="#171616"
          blur={25}
          className="flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center z-10 -mt-12 sm:-mt-8 md:mt-0">

            <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full max-w-7xl mx-auto">
              {/* Main Headline */}
              <h1 className="font-light tracking-tight leading-[1.05] text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl bg-linear-to-b from-[#6f6f6f] to-white bg-clip-text text-transparent">
                The future <br />
                of memory is <br />

                {/* Human + AI Row */}
                <span className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-3 lg:gap-4 mt-2 sm:mt-3">
                  <Image
                    src={brainIcon}
                    alt="brain"
                    width={80}
                    height={80}
                    className="inline-block opacity-90 w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 scale-x-[-1]"
                  />
                  <span className="text-white">human</span>
                  <span className="text-white">+</span>
                  <Image
                    src={aiIcon}
                    alt="ai"
                    width={80}
                    height={80}
                    className="inline-block opacity-90 w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
                  />
                  <span className="text-white">AI</span>
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-white/60 text-base sm:text-lg md:text-lg lg:text-xl mt-6 sm:mt-8 max-w-2xl px-2">
                Limelight is <span className="text-white">your personal AI search engine</span> <br className="hidden sm:block" />
                Get instant, accurate answers from all your files, notes, and documents all in one place.
              </p>

              {/* Button */}
              <div className="mt-8 sm:mt-10 flex justify-center w-full">
                <Link href="#waitlist-form">
                  <HoverBorderGradient
                    containerClassName="rounded-2xl"
                    as="button"
                    className="backdrop-blur-sm hover:shadow-[0_0_25px_rgba(237,53,88,0.45)] transition-all duration-400 cursor-pointer"
                  >
                    <span>Join the Waitlist</span>
                  </HoverBorderGradient>
                </Link>
              </div>

            </div>
          </div>
        </WavyBackground>
      </section>

      {/* After Hero Section */}
      <StickyScrollReveal
        slides={[
          {
            title: "Your Files Are Everywhere, But You Still Can't Find Anything",
            images: [
              { src: imgOneFirst, position: "right" },
              { src: imgOneSecond, position: "left" },
              { src: imgOneThird, position: "right" },
              { src: imgOneFourth, position: "left" },
            ],
            emojis: [
              { src: notesIcon, alt: "notes", x: -400, y: -200, size: 120, anger: true, angle: 10 },
              { src: notionIcon, alt: "notion", x: 440, y: -250, size: 160, anger: true, angle: 20 },
              { src: gmailIcon, alt: "gmail", x: -430, y: 240, size: 160, anger: true, angle: -20 },
              { src: whatsappIcon, alt: "whatsapp", x: 450, y: 180, size: 120, anger: true, angle: 10 },
            ],
          },
          {
            title: "Your Knowledge Is Scattered, Your Search Is Broken",
            images: [
              { src: imgTwoFirst, position: "right" },
              { src: imgTwoSecond, position: "left" },
              { src: imgTwoThird, position: "left" },
              { src: imgTwoFourth, position: "right" },
            ],
            emojis: [
              { src: angryEmoji, alt: "angry", x: -400, y: -150, size: 250, anger: true, angle: -42 },
              { src: angryEmoji, alt: "angry", x: 400, y: -300, size: 170, anger: true, angle: 10 },
              { src: angryEmoji, alt: "angry", x: -400, y: 250, size: 190, anger: true, angle: -11 },
              { src: angryEmoji, alt: "angry", x: 400, y: 250, size: 270, anger: true, angle: 30 },
            ],
          },
          {
            title: "what if?",
            images: [
              { src: imgThreeFirst, position: "right" },
              { src: imgThreeSecond, position: "left" },
              { src: imgThreeThird, position: "right" },
              { src: imgThreeFourth, position: "left" },
            ],
            emojis: [
              { src: meditateEmoji, alt: "meditate", x: -400, y: -150, size: 250, anger: false, angle: -12 },
              { src: coolEmoji, alt: "cool guy", x: 400, y: -300, size: 170, anger: false, angle: 11 },
              { src: relievedEmoji, alt: "relieved", x: -400, y: 250, size: 190, anger: false, angle: -18 },
              { src: waveEmoji, alt: "ocean wave", x: 400, y: 250, size: 200, anger: false, angle: 8 },
            ],
          },
        ]}
        revealSection={{
          preTitle: "Introducing",
          title: "LIMELIGHT",
          subtitle: "your personal AI search engine"
        }}
      />

      <section className="z-10 py-20 font-manrope">
        <div className="max-w-5xl mx-auto px-6">
          <SpaceSwitch />
        </div>
      </section>

      <section className="z-10 py-20 font-manrope">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-center max-w-3xl mx-auto px-6 pt-8 z-20">
              <h1 className="text-3xl md:text-4xl font-bold">
                Built for every version of you
              </h1>
              <h2 className="pt-4 text-white/70 text-lg md:text-lg lg:text-xl">
                Stop switching between apps. Limelight connects your emails, files, and chats into one intelligent, searchable timeline.
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardSpotlight
                title="For Students"
                content="Search, summarise lecture notes, PDFs, and group chats instantly."
                imageSrc={study}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardSpotlight
                title="For Freelancers"
                content="Track clients and deliverables across every app you use."
                imageSrc={freelance}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardSpotlight
                title="For Professionals"
                content="Turn scattered emails and files into unified timelines."
                imageSrc={work}
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Features */}
      <section className="z-10 py-20 bg-background font-manrope">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center max-w-3xl mx-auto px-6 pt-8 z-20">
              <h1 className="text-3xl md:text-4xl font-bold">
                Features so good, they feel illegal
              </h1>
              <h2 className="pt-4 text-white/70 text-lg md:text-lg lg:text-xl">
                Find buried files, recall old chats, and organize your chaos without lifting a finger. Limelight handles the remembering so you can handle the living.
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Carousel Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Carousel items={items} />
        </motion.div>
      </section>

      {/* see how it works section here */}


      {/* Supported databases */}
      <section className="z-10 py-20 font-manrope">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center max-w-3xl mx-auto px-6 pt-8 z-20">
              <h1 className="text-3xl md:text-4xl font-bold">
                Connect your digital world
              </h1>
              <h2 className="pt-4 text-white/70 text-lg md:text-lg lg:text-xl">
                Link your apps to search, recall, and organize your life with Limelight.
              </h2>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <SupportedUser />
        </motion.div>
      </section>

      {/* discussion */}
      <section className="z-10 py-20 font-manrope">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-center max-w-3xl mx-auto px-6 pt-8 z-20">
              <h1 className="text-3xl md:text-4xl font-bold">
                Limelight in the wild
              </h1>
              <h2 className="pt-4 text-white/70 text-lg md:text-lg lg:text-xl">
                Okay, these reviews are placeholders… but the experience is real.
              </h2>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Discussion
              defaultValue={["item-1", "item-1.1", "item-1.1.1", "item-1.2"]}
              type="multiple"
              className="w-full max-w-3xl mx-auto"
            >
              <DiscussionItem value="item-1">
                <DiscussionContent>
                  <DiscussionAvatar src={pfp1.src} fallback="AG" className="bg-orange-500" />
                  <div className="flex-1">
                    <DiscussionAuthor>
                      <span className="font-semibold text-foreground hover:underline cursor-pointer">Arnav Gautam</span>
                      <span className="text-blue-500 font-medium text-[10px] bg-blue-500/10 px-1.5 py-0.5 rounded-full">OP</span>
                      <span>•</span>
                      <span>1 hour ago</span>
                    </DiscussionAuthor>
                    <DiscussionBody>
                      bro i actually found that pdf from 3rd semester in like 2 seconds. limelight just saved my thesis. 😭
                    </DiscussionBody>
                    <DiscussionActions votes="4.2k" />
                  </div>
                </DiscussionContent>
                <DiscussionReplies>
                  <DiscussionItem value="item-1.1">
                    <DiscussionContent>
                      <DiscussionAvatar src={pfp2.src} fallback="OJ" className="bg-orange-500" />
                      <div className="flex-1">
                        <DiscussionAuthor>
                          <span className="font-semibold text-foreground hover:underline cursor-pointer">Ojas</span>
                          <span>•</span>
                          <span>34 minutes ago</span>
                        </DiscussionAuthor>
                        <DiscussionBody>
                          100%. Just onboarded the new dev. Being able to search the entire project history instantly is insane. Why didn't we have this sooner?
                        </DiscussionBody>
                        <DiscussionActions votes="856" />
                      </div>
                    </DiscussionContent>
                    <DiscussionReplies>
                      <DiscussionItem value="item-1.1.1">
                        <DiscussionContent>
                          <DiscussionAvatar src={pfp3.src} fallback="DS" />
                          <div className="flex-1">
                            <DiscussionAuthor>
                              <span className="font-semibold text-foreground hover:underline cursor-pointer">Devesh Sharma</span>
                              <span>•</span>
                              <span>26 minutes ago</span>
                            </DiscussionAuthor>
                            <DiscussionBody>
                              Same vibe here. Finally stopped drowning in client revisions. Having all the slack threads and drive links in one timeline is a cheat code.
                            </DiscussionBody>
                            <DiscussionActions votes="234" />
                          </div>
                        </DiscussionContent>
                      </DiscussionItem>
                    </DiscussionReplies>
                  </DiscussionItem>
                  <DiscussionItem value="item-1.2">
                    <DiscussionContent>
                      <DiscussionAvatar src={pfp4.src} fallback="SW" className="bg-orange-500" />
                      <div className="flex-1">
                        <DiscussionAuthor>
                          <span className="font-semibold text-foreground hover:underline cursor-pointer">Sarah Wilson</span>
                          <span>•</span>
                          <span>14 minutes ago</span>
                        </DiscussionAuthor>
                        <DiscussionBody>
                          Legit feels like I have a second brain now. The context search is scary good.
                        </DiscussionBody>
                        <DiscussionActions votes="1.1k" />
                      </div>
                    </DiscussionContent>
                  </DiscussionItem>
                </DiscussionReplies>
              </DiscussionItem>
            </Discussion>
          </motion.div>
        </div>
      </section>

      {/* FQA */}
      <section className="z-10 py-20 font-manrope">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center max-w-3xl mx-auto px-6 z-20">
              <h1 className="text-3xl md:text-4xl font-bold">
                Questions? Answers
              </h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12"
          >
            <FaqAccordion
              data={defaultData as any}
              className="max-w-[700px]"
              timestamp=""
            />
          </motion.div>
        </div>
      </section>


      <section className="pt-24 justify-center items-center flex flex-col">
        <FooterAlt />
      </section>

    </>
  );
}
