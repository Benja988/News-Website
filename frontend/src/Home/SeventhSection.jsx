import React from "react";
import ColumnHead from "../Common/ColumnHead/ColumnHead.JSX";
import MidCard from "../components/Cards/MidCard";
import TextOnly from "../components/Cards/TextOnly";

function SeventhSection() {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "images/SeventhSection/11.jpg",
      text: "Christie ramps up Haley criticism as he rejects calls to exit GOP primary",
      tag: "",
    },

    // Add more cards as needed
  ];
  const midCards2 = [
    {
      link: "/your-link-url",
      imageSrc: "images/SeventhSection/21.jpg",
      text: "Are you making one of these common exercising errors? Experts weigh in",
      tag: "",
    },

    // Add more cards as needed
  ];
  const midCards3 = [
    {
      link: "/your-link-url",
      imageSrc: "images/SeventhSection/31.jpg",
      text: "OpenAI had a confusing week. Who came out on top? And who lost out?",
      tag: "",
    },

    // Add more cards as needed
  ];

  const textOnly = [
    {
      link: "/your-link-url",
      text: "Biden administration announces new financial strike force to curb deadly fentanyl trade",
    },
    {
      link: "/your-link-url",
      text: "Sen. Murphy open to placing conditions on aid to Israel, calls civilian death toll in Gaza ‘unacceptable’",
    },
    {
      link: "/your-link-url",
      text: "Defying DeSantis: Florida GOP chair says he won't step down as new details emerge from sexual assault investigation",
    },
    {
      link: "/your-link-url",
      text: "GOP Sen. Lindsey Graham says he’s ‘lost all confidence’ in Defense Secretary Lloyd Austin",
    },
  ];
  const textOnly2 = [
    {
      link: "/your-link-url",
      text: "Could the most magical time of year be so full of loneliness, anger and stress?",
    },
    {
      link: "/your-link-url",
      text: "Meet ‘Turtwig,’ an ancient turtle species once thought to be a plant",
    },
    {
      link: "/your-link-url",
      text: "The dirty truth about taking your shoes off at the door",
    },
    {
      link: "/your-link-url",
      text: "No antibiotics worked, so this woman turned to a natural enemy of bacteria to save her husband’s life",
    },
  ];
  const textOnly3 = [
    {
      link: "/your-link-url",
      text: "Dems accuse X of profiting from Hamas propaganda",
    },
    {
      link: "/your-link-url",
      text: "Spotify to slash royalties for non-music tracks",
    },
    {
      link: "/your-link-url",
      text: "Jack Ma backs off on plans to sell Alibaba shares",
    },
    {
      link: "/your-link-url",
      text: "Solid state batteries promise to radically change EVs. But they may not be the only answer",
    },
    {
      link: "/your-link-url",
      text: "Here are the dozen brands that have paused ads on X amid ongoing crisis for Elon Musk’s platform",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap">
        {/* First Column (2 parts) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <ColumnHead columnHeadTag="US POLITICS" />
          {midCards.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
          {textOnly.map((card, index) => (
            <TextOnly key={index} {...card} />
          ))}
        </div>

        {/* Second Column (1 part) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          {/* Content for the second column */}
          <ColumnHead columnHeadTag="SCIENCE AND HEALTH" />
          {midCards2.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
          {textOnly2.map((card, index) => (
            <TextOnly key={index} {...card} />
          ))}
        </div>

        {/* Third Column (1 part) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          {/* Content for the third column */}
          <ColumnHead columnHeadTag="TECH" />
          {midCards3.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
          {textOnly3.map((card, index) => (
            <TextOnly key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeventhSection;
