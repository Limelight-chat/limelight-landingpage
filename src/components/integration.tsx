import React from "react";
import Image from "next/image";

// Import all available icons
import docsIcon from "../assets/icons/docs.png";
import excelIcon from "../assets/icons/excel.png";
import gmailIcon from "../assets/icons/gmail.png";
import pdfIcon from "../assets/icons/pdf.png";
import sheetsIcon from "../assets/icons/sheets.png";
import wordIcon from "../assets/icons/word.png";
import driveIcon from "../assets/icons/google-drive.png";
import dropboxIcon from "../assets/icons/dropbox.png";
import slackIcon from "../assets/icons/slack.png";
import databaseIcon from "../assets/icons/database.png";
import officeIcon from "../assets/icons/office.png";
import notionIcon from "../assets/icons/notion.png";
import whatsappIcon from "../assets/icons/whatsapp.png";

// Icon mapping object
const ICONS = {
  docs: docsIcon.src,
  excel: excelIcon.src,
  gmail: gmailIcon.src,
  pdf: pdfIcon.src,
  sheets: sheetsIcon.src,
  word: wordIcon.src,
  slack: slackIcon.src,
  drive: driveIcon.src,
  drop: dropboxIcon.src,
  data: databaseIcon.src,
  office: officeIcon.src,
  notion: notionIcon.src,
  whatsapp: whatsappIcon.src,
};

const DATA = [
  {
    id: 1,
    icons: ["whatsapp"],
    title: "Whatsapp",
    description:
      "Connect and query WhatsApp chats instantly for actionable insights.",
  },
  {
    id: 2,
    icons: ["drive", "sheets", "docs"],
    title: "Google",
    description:
      "Connect and query Google Sheets and Docs instantly for insights.",
  },
  {
    id: 3,
    icons: ["office", "word", "excel"],
    title: "Microsoft",
    description:
      "Seamlessly work with Word and Excel to find and analyze data.",
  },
  {
    id: 4,
    icons: ["pdf"],
    title: "PDF",
    description:
      "Extract answers and insights from PDFs without manual searching.",
  },
  {
    id: 5,
    icons: ["slack"],
    title: "Slack",
    description:
      "Receive updates and notifications directly in your Slack channels.",
  },
  {
    id: 6,
    icons: ["gmail"],
    title: "Gmail",
    description:
      "Search and retrieve key information from your emails in seconds.",
  },
  {
    id: 7,
    icons: ["notion"],
    title: "Notion",
    description: "Search and analyze your Notion pages with full context preserved.",
  },
  {
    id: 9,
    icons: ["data"],
    title: "And more..",
    description: "More integrations coming soon.",
  },
];

interface Integration9Props {
  title?: string;
  data?: typeof DATA;
  gridCols?: string;
}

const Integration = ({
  title = "",
  data = DATA,
}: Integration9Props) => {
  return (
    <section className="py-4">
      <div className="container">
        <h1 className="mb-8 text-left text-3xl font-semibold bg-[linear-gradient(to_right,#fb923c_0%,#ED3558_60%,#ED3558_100%)] bg-clip-text text-transparent">
          {title}
        </h1>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {data.map(({ id, icons, title, description }) => (
            <div
              key={id}
              className="flex min-h-[140px] flex-col items-start rounded-xl border border-[#202020] bg-background p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex h-10 items-center justify-center gap-2 rounded-md bg-[#202020] px-2">
                {icons.map((iconName, index) => (
                  <Image
                    key={index}
                    src={ICONS[iconName as keyof typeof ICONS]}
                    alt={`${title} icon ${index + 1}`}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                ))}
              </div>
              <div className="mb-1 text-base font-medium">{title}</div>
              <div className="text-xs leading-snug text-muted-foreground text-left">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Integration };
