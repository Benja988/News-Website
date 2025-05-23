import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { categoriesRow1, categoriesRow2 } from "../../data/categories";

function Footer({ SearchText }) {
  const navigation = useNavigate();
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (e) => {
    console.log(e);
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    navigation(`/search/${searchText}`);
  };
  
  return (
    <div className="bg-black p-4">
      <hr className="pb-5" />
      <div className="flex items-center p-2 mt-4">
        <input
          type="text"
          value={SearchText}
          className="h-8 px-2 w-full bg-white border-none rounded-1 outline-none"
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearch}
          className="h-8 bg-white text-black px-2 rounded-r flex items-center font-bold">
          Search <span className="ml-1 font-bold text-2xl pb-1">&#8594;</span>
        </button>
      </div>
      <div className="bg-black text-white p-4">
        <div className="grid grid-cols-7 pb-4">
          {categoriesRow1.map((category, index) => (
            <div key={index} className="border-b-3 border-white">
              <span className="font-bold text-lg">{category.title}</span>
              <div className="flex flex-col flex-wrap mt-2">
                {category.items.map((item, i) => (
                  <NavLink
                    key={i}
                    to={`/${category.title.toLowerCase()}/${item.toLowerCase()}`}
                    className="py-1 text-sm leading-none hover:underline"
                    >
                    {item}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 pb-4">
          {categoriesRow2.map((category, index) => (
            <div key={index} className="border-b-3 border-white">
              <span className="font-bold text-lg">{category.title}</span>
              <div className="flex flex-col flex-wrap mt-2">
                {category.items.map((item, i) => (
                  <NavLink
                    key={i}
                    to={`/${category.title.toLowerCase()}/${item.toLowerCase()}`}
                    className="py-1 text-sm leading-none hover:underline"
                    >
                    {item}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black w-full pt-8 pb-8 px-5 flex flex-col items-start text white border-t border-b border-gray-700">
        <div className=" w-full flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="images/Header/logo.png"
              alt=""
              className="w-auto h-8 mr-4"
            />
            <div className="font-bold text-2xl text-white">US</div>
          </div>
          <div className="flex items-center">
            <NavLink
              to="/Watch"
              className="text-white text-[0.937rem] font-bold ml-7">
              Watch
            </NavLink>
            <NavLink
              to="/Listen"
              className="text-white text-[0.937rem] font-bold ml-7">
              Listen
            </NavLink>
            <NavLink
              to="/live-tv"
              className="text-white text-[0.937rem] font-bold ml-7">
              Live TV
            </NavLink>
            <div className="border-r border-gray-500 w-1 h-6 mx-4"></div>\
            <div className="text-white text-[0.937rem] font-bold ">
              Follow CNN
            </div>
            <NavLink
              to="/facebook"
              className="text-white text-[0.937rem] font-bold mx-4">
              <img
                src="images/Footer/Facebook.png"
                className="h-full w-full"
                alt=""
              />
            </NavLink>
            <NavLink
              to="/x"
              className="text-white text-[0.937rem] font-bold mx-4">
              <img src="images/Footer/X.png" className="h-full w-full" alt="" />
            </NavLink>
            <NavLink
              to="/Instagram"
              className="text-white text-[0.937rem] font-bold mx-4">
              <img
                src="images/Footer/Instagram.png"
                className="h-full w-full"
                alt=""
              />
            </NavLink>
            <NavLink
              to="/Tiktok"
              className="text-white text-[0.937rem] font-bold mx-4">
              <img
                src="images/Footer/Tiktok.png"
                className="h-full w-full"
                alt=""
              />
            </NavLink>
            <NavLink
              to="/LinkedIn"
              className="text-white text-[0.937rem] font-bold mx-4">
              <img
                src="images/Footer/LinkedIn.png"
                className="h-full w-full"
                alt=""
              />
            </NavLink>
            <button className="border border-white rounded-xl px-4 py-2 ml-5 text-white hover:bg-gray-800">
              Log In
            </button>
          </div>
        </div>
      </div>
      <div className="text-white text-sm flex flex-wrap items-center justify-start w-full mt-4 ">
        <NavLink to="/terms-of-use">Terms of Use</NavLink>
        <NavLink to="/privacy-policy" className="ml-4">
          Privacy Policy
        </NavLink>
        <NavLink to="/Cookie-Settings" className="ml-4">
          Cookie Settings
        </NavLink>
        <NavLink to="/Ad-Choices" className="ml-4">
          Ad Choices
        </NavLink>
        <NavLink to="/About" className="ml-4">
          Accessibility & CC
        </NavLink>
        <NavLink to="/privacy-policy" className="ml-4">
          About
        </NavLink>
        <NavLink to="/Newsletters" className="ml-4">
          Newsletters
        </NavLink>
        <NavLink to="/Transcripts" className="ml-4">
          Transcripts
        </NavLink>
      </div>
      <div className="text-white text-sm mt-4">
        © 2024 Cable News Network. A Warner Bros. Discovery Company. All Rights
      </div>
      <div className="text-white text-sm pb-6">
        Reserved. CNN Sans ™ & © 2016 Cable News Network.
      </div>
    </div>
  );
}

export default Footer;
