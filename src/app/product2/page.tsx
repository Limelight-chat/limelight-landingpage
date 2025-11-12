
import ScrollLines from "@/components/scroll-lines";
import StickyScrollReveal from "@/components/ui/sticky-scroll-reveal";

export default function product2() {
    return (
        <div>
            {/* section 2 */}
        <section>
            <div className="text-center max-w-3xl mx-auto px-6 z-20 py-24">
                <h1 className="text-5xl md:text-6xl font-bold">
                    Seamlessly connect your data and start searching it in minutes.
                </h1>
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



        <StickyScrollReveal
        slides={[
          {
            title: "Blazing-fast Search",
            description: "Retrieve results instantly with our vector index.",
            image: "/images/slide-1.png",
          },
          {
            title: "Grounded Answers",
            description: "Citations you can trust. No fluff.",
            image: "/images/slide-2.png",
          },
          {
            title: "Ship in Minutes",
            description: "SDKs, templates, and a CLI to go live today.",
            image: "/images/slide-3.png",
          },
        ]}
        className="bg-black"
      />



        {/* section 2 */}
        <section>
            <div className="text-center max-w-3xl mx-auto px-6 z-20 py-24">
                <h1 className="text-5xl md:text-6xl font-bold">
                    Seamlessly connect your data and start searching it in minutes.
                </h1>
            </div>
        </section>

        <ScrollLines />

        {/* section 3 */}
        <section>
            <div className="text-center max-w-3xl mx-auto px-6 z-20 py-24">
                <h1 className="text-5xl md:text-6xl font-bold">
                    Seamlessly connect your data and start searching it in minutes.
                </h1>
            </div>
        </section>

        <StickyScrollReveal
        
        slides={[
            {
                title: "Blazing-fast Search",
                description: "Retrieve results instantly with our vector index.",
                image: "/images/slide-1.png",
            },
            {
                title: "Grounded Answers",
                description: "Citations you can trust. No fluff.",
                image: "/images/slide-2.png",
            },
            {
                title: "Ship in Minutes",
                description: "SDKs, templates, and a CLI to go live today.",
                image: "/images/slide-3.png",
            },
            ]}
            
            />

        </div>
    )
}