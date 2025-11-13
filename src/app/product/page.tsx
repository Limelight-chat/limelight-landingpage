import Image from "next/image";
import ScrollVelocity from "@/components/ScrollVelocity";
import StickyScrollPast from "@/components/ui/sticky-scroll-past";

import gradient from "@/assets/gradient.svg"
import cpu from "@/assets/cpu.svg";
import refimg from '@/assets/ref-image.png'
import step1 from '@/assets/product/step1.svg'
import step2 from '@/assets/product/step2.svg'
import step3 from '@/assets/product/step3.svg'
import step4 from '@/assets/product/step4.svg'
import { Badge } from "@/components/ui/badge";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

export default function Product() {

    const steps = [
        { text: "Buying a condo" },
        { text: "Travelling in a flight" },
        { text: "Meeting Tyler Durden" },
        { text: "He makes soap" },
        { text: "Project Mayhem?" },
      ];

      const phase = [
        {
          image: step1.src,
        },
        {
          image: step2.src,
        },
        {
          image: step3.src,
        },
        {
          image: step4.src,
        },
      ];



  return (
    <div className="relative w-full py-24">


      <ScrollVelocity
        texts={["RETRIEVAL AUGMENTED GENERATION"]}
        className="
          text-7xl
          sm:text-8xl
          md:text-[12rem]
          lg:text-[16rem]
          xl:text-[19rem]
          bg-linear-to-b from-[#2E2E2E] from-42% to-[#222222]
          text-transparent bg-clip-text font-bold "/>

        <div className=" absolute z-20 left-1/2 -translate-x-1/2 top-16 md:left-auto md:translate-x-0 md:top-24 md:right-20 lg:top-28 lg:right-30 xl:top-25 xl:right-40">
        <Image
            src={cpu}
            alt="Limelight Engine"
            className="
            w-[140px]
            sm:w-[180px]
            md:w-[200px]
            lg:w-[230px]
            xl:w-[300px]
            h-auto"
        />
        </div>

        <section className="pt-52">
            <div className="text-center max-w-3xl mx-auto px-6 z-20">
                <h1 className="text-5xl md:text-6xl font-bold">
                    Seamlessly connect your data and start searching it in minutes.
                </h1>
            </div>
        </section>


        <section className="w-full">
            <div className="max-w-5xl mx-auto px-6">
                <StickyScrollPast steps={phase} className="text-white" />
            </div>
        </section>
        {/* Features */}
        <section className="w-full pt-24">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                
                {/* left image */}
                <div className="w-full md:w-auto shrink-0 px-0 md:px-8">
                    <Image
                    src={refimg}
                    alt="Feature preview"
                    width={360}
                    height={360}
                    className="rounded-2xl object-cover w-full max-w-[360px] mx-auto md:mx-0"
                    />
                </div>

                {/* right text */}
                <div className="flex-1 w-full md:w-auto text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                    Seamlessly connect your data and start searching.
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
                    Limelight makes business knowledge instantly searchable for fast-moving
                    teams. No more digging through files, chats, and drives — find what you need,
                    when and where you need it.
                    </p>
                </div>
                </div>
            </div>
        </section>

        <section className="w-full py-24">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">

                {/* left text */}
                <div className="flex-1 w-full md:w-auto order-2 md:order-1 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                    Seamlessly connect your data and start searching.
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
                    Limelight makes business knowledge instantly searchable for fast-moving
                    teams. No more digging through files, chats, and drives — find what you need,
                    when and where you need it.
                    </p>
                </div>

                {/* right image */}
                <div className="w-full md:w-auto shrink-0 px-0 md:px-8 order-1 md:order-2">
                    <Image
                    src={refimg}
                    alt="Feature preview"
                    width={360}
                    height={360}
                    className="rounded-2xl object-cover w-full max-w-[360px] mx-auto md:mx-0"
                    />
                </div>

                </div>
            </div>
        </section>


        {/* section 3 */}
        <section>
            <div className="text-center max-w-3xl mx-auto px-6 z-20 py-24">
                <h1 className="text-5xl md:text-6xl font-bold">
                    Seamlessly connect your data and start searching it in minutes.
                </h1>
            </div>
        </section>


        <section>
            <div className="text-center max-w-3xl mx-auto px-6 z-20 py-24">
                <h1 className="text-5xl md:text-6xl font-bold">
                    Seamlessly connect your data and start searching it in minutes.
                </h1>
            </div>

            {/* Gemini effect goes here */}
        </section>

        <section className="z-10 py-12">
            <div className="max-w-5xl mx-auto px-6">
                
                <div className="text-center">
                    <Badge className="text-sm">How it works ~ the technical jargon</Badge>
                </div>

                {/* 2 Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
                {/* Left: Loader */}
                <div className="flex justify-center">
                    <MultiStepLoader loadingStates={steps} duration={1500} />
                </div>

                    {/* Right: First Paragraph */}
                    <p className="text-lg leading-relaxed text-center md:text-left">
                        Limelight makes business knowledge instantly searchable for fast-moving teams. 
                        No more digging through files, chats, and drives. Limelight makes business knowledge instantly searchable for fast-moving teams. 
                        No more digging through files, chats, and drives.
                    </p>
                </div>

                {/* Remaining Paragraphs - Full Width */}
                <div className="space-y-4 max-w-3xl mx-auto text-center">
                    <p>
                        Limelight makes business knowledge instantly searchable for fast-moving teams. 
                        No more digging through files, chats, and drives.
                    </p>
                    <p>
                        Limelight makes business knowledge instantly searchable for fast-moving teams. 
                        No more digging through files, chats, and drives.
                    </p>
                </div>

                </div>
            </section>

            <section>
                <div>

                </div>
                <div>

                </div>
            </section>
    </div>
  );
}
