import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FaqItem {
    id: string;
    question: string;
    answer: string;
  }
  
  interface FaqProps {
    items?: FaqItem[];
    supportHeading: string;
    supportDescription: string;
    supportButtonText: string;
    supportButtonUrl: string;
  }
  
  const faqItems = [
    {
      id: "faq-1",
      question: "What exactly is Limelight?",
      answer:
        "Limelight is an AI-powered assistant that unifies all your business knowledge across apps, files, databases, and documents into one simple search bar. Instead of wasting hours searching, you just ask in plain English and get instant, cited answers.",
    },
    {
      id: "faq-2",
      question: "Will Limelight work with the tools my team already uses?",
      answer:
        "Yes. Out of the box, Limelight connects with Microsoft Office, Google Workspace, Notion, Slack, GitHub, and other apps, with more added regularly. You’ll never lose knowledge in silos again.",
    },
    {
      id: "faq-3",
      question: "Can I access Limelight on my phone?",
      answer:
        "Yes. Limelight works on mobile so you can search business data from anywhere.",
    },
    {
      id: "faq-4",
      question: "Do I need technical skills or an IT team to use it?",
      answer:
        "No. Limelight is designed for SMEs. Connect your data and start searching in minutes.",
    },
    {
      id: "faq-5",
      question: "How accurate are the answers? Can I trust them?",
      answer:
        "Every response comes with clear citations and links back to the original source. No more guessing if an AI “made it up”—you can verify results instantly.",
    },
    {
      id: "faq-6",
      question: "Who is Limelight best suited for?",
      answer:
        "Limelight adapts to businesses of any size. Small teams get instant, affordable access with essential connectors. Mid-sized firms benefit from deeper integrations as they scale. Large enterprises can deploy with BYO cloud, self-hosting, and advanced security to fit strict compliance needs.",
    },
    {
      id: "faq-7",
      question: "Is Limelight secure for sensitive company data?",
      answer:
        "Yes. For SMEs, data is encrypted end-to-end with enterprise-grade compliance. For larger firms, Limelight also supports BYO cloud and self-hosting, so your data never leaves your environment.",
    },
    
  ];
  
  const Faq = ({
    items = faqItems,
  }: Partial<FaqProps>) => {
    return (
      <section className="pt-8 pb-8">
        <div className="container">
          <Accordion
            type="single"
            collapsible
            className="mx-auto w-full lg:max-w-3xl"
          >
            {items.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60 cursor-pointer">
                  <div className="font-medium sm:py-1 lg:py-2 lg:text-lg cursor-pointer">
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="sm:mb-1 lg:mb-2">
                  <div className="text-muted-foreground lg:text-lg">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  };
  
  export { Faq };
  