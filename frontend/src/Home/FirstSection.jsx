import React from 'react';
import { Link } from 'react-router-dom';
import MidCard from '../components/Cards/MidCard';
import TextOnly from '../components/Cards/TextOnly';

// Sample list data (could come from props or API)
const listItems = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum maxime, molestiae facere reprehenderit nobis velit atque corrupti unde odio fugiat!",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum maxime, molestiae facere reprehenderit nobis velit atque corrupti unde odio fugiat!",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum maxime, molestiae facere reprehenderit nobis velit atque corrupti unde odio fugiat!",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum maxime, molestiae facere reprehenderit nobis velit atque corrupti unde odio fugiat!",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum maxime, molestiae facere reprehenderit nobis velit atque corrupti unde odio fugiat!",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum maxime, molestiae facere reprehenderit nobis velit atque corrupti unde odio fugiat!"
];

const MidCards = [
  {
    link: "/live/Israel-hamas-war",
    imageSrc: "images/FirstSection/analysis.jpg",
    text: "Rishi Sunak is picking a fight on the migration issue that he probably cannot win",
    tag: "Analysis",
  },
  {
    link: "/your-link-url",
    imageSrc: "images/FirstSection/news3.jpg",
    text: "Harvard president apologizes for her disastrous testimony at antisemitism hearing",
    tag: " News",
  },
  {
    link: "/your-link-url",
    imageSrc: "images/FirstSection/news2.jpg",
    text: "Harvard president apologizes for her disastrous testimony at antisemitism hearing",
    tag: "News",
  },
  // Add more cards as needed
];

const textOnly = [
  {
    link: "/your-link-url",
    text: "iMichigan school shooter sentenced to life in prison without parole",
  },
  {
    link: "/your-link-url",
    text: "Six French teenagers convicted in connection with 2020 beheading of teacher Paty",
  },
  {
    link: "/your-link-url",
    text: "Appeals court maintains most of Trump gag order in federal election subversion case",
  },
  {
    link: "/your-link-url",
    text: "Ryan O’Neal, star of ‘Love Story’ and ‘Peyton Place,’ dead",
  },
  {
    link: "/your-link-url",
    text: "Wartime spread of drug-resistant infections in Ukraine is an ‘urgent crisis,’ CDC report says",
  },
  {
    link: "/your-link-url",
    text: "European Union agrees to regulate potentially harmful effects of artificial intelligence",
  },
];

const FirstSection = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4'>
      {/* Main Content */}
      <div className='w-full md:w-2/3 p-4 bg-white rounded-md shadow-sm'>
        <div className='max-w-screen-md mx-auto p-4'>
          <Link to='/new-link'>
            <h1 className='text-3xl font-bold mb-4 text-black text-center hover:underline'>
              Five Key Takeaways from the 2023 State of JavaScript Survey
            </h1>
          </Link>
        </div>

        {/* Video Section */}
        <div className='max-w-screen-md mx-auto mb-4'>
          <div className='relative aspect-video rounded-md overflow-hidden'>
            <video
              className='w-full h-full object-cover'
              autoPlay
              muted
              loop
              aria-label="JavaScript Survey Highlights"
            >
              <source src="/videos/FirstSection/breaking.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Description and List */}
        <div className='max-w-screen-md mx-auto p-4'>
          <h4 className='text-lg font-semibold text-gray-700 mt-4 mb-2 underline'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, repudiandae soluta! Deserunt, perspiciatis assumenda ea modi ipsum quaerat a et?
          </h4>
          <ul className='list-disc pl-5 space-y-2'>
            {listItems.map((item, index) => (
              <li key={index} className='text-gray-800'>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Placeholder Sections */}
      <div className='w-full md:w-1/3 p-4 rounded-md shadow-sm'>
        {MidCards.map((card, index) => (
          <MidCard key={index} {...card} />
        ))}
      </div>

      <div className='w-full md:w-1/3 p-4 rounded-md shadow-sm'>
        <Link to='/news-link' className='block relative group rounded-md overflow-hidden shadow-lg'>
          <div className='relative aspect-video'>
            <video
              className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
              autoPlay
              muted
              controls
              loop
              aria-label="JavaScript Survey Highlights"
            >
              <source src="/videos/FirstSection/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-2 text-sm'>
            Breaking News
          </div>

        </Link>

        <div>
          <div className='mb-2 mt-2 font-bold text-xl hover:underline'>
            Catch up on todays global news
          </div>
          <div>
            {
              textOnly.map((card, index) => (
                <TextOnly key={index} {...card} />
              ))
            }
          </div>
        </div>

      </div>

    </div>
  );
};

export default FirstSection;
