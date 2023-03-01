import React, { useState } from "react";
import { Link } from "react-router-dom";
import { arrowBottomBlack, arrowBottomRight, blog, booking, brush, bucket, business, businessBlack, catalog, close, clothing, contact, dashboard, dollar, eng, female, heart, help, helpBlack, location, logo, male, map, menu, search, shop, topBrands, user, voice, winter,} from "../../assets/imgs";
import { styles } from "../../util/style";

const MediumHeader = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(true);
  const [toggle, setToggle] = useState(false);
  // const [changeGenderColor, setChangeGenderColor] = useState(false)


  const toggleHamburger = () => setHamburgerMenu((val) => !val);

  return (
      <div className={`flex flex-col  border border-solid border-gray-900	`}>
        <h1>test</h1>
      <div className="w-full ss:px-4 md:px-[130px]  border border-solid border-gray-900">
        {/* Starting Full Screen page section */}
        <div className="fullScreen w-full flex items-center justify-between  border border-solid border-gray-900">
          <div className="ss:w-full md:w-fit flex items-center ss:justify-between md:justify-start  border-solid border-gray-900">
            {/* Menu section */}
            <div
              onClick={toggleHamburger}
              className={`flex items-center justify-center ss:w-fit bg-bgColor border border-searchBgColor mr-2 px-4 h-12 rounded cursor-pointer  md:hidden`}
            >
              <div className="w-full">
                <img src={!hamburgerMenu ? close : menu} alt="voice" />
              </div>

              {/*Starting of Opened Hamburger menu section */}
              <div
                className={`${
                  !hamburgerMenu ? "flex flex-col " : "hidden h-0"
                } absolute top-16 right-0 left-[12px]`}
              >
                {/* Searching section */}
                <div className="search flex items-center justify-between rounded font-medium h-10 mt-6 mb-6 border border-searchBg ss:w-[296px]  md:hidden ls:w-[334px]">
                  <img
                    src={search}
                    alt="search"
                    className=" flex ss:pl-[11.65px] md:hidden"
                  />
                  <input
                    type="text"
                    placeholder="Search products or brands"
                    className="bg-transparent w-full px-3 h-12 text-[14px] border border-transparent md:border-searchBgColor md:mx-0 md:-ml-[3px] md:px-3 md:h-12"
                  />
                </div>
                {/* Music and Map selection for Mobile */}
                <div className="flex items-center justify-between h-11 mb-4 ss:w-[296px] ls:w-[334px]">
                  <button className="left py-[9px] rounded flex items-center justify-center font-medium rouded border border-gray-300 bg-bgColor w-[144px] ls:w-[162px]">
                    <img src={voice} alt="misic" />
                    <span className="ml-[10px]">Music</span>
                  </button>
                  <Link
                    to="#"
                    className="right px-10 py-[9px] rounded flex items-center justify-center font-medium border border-gray-300 bg-bgColor w-[144px] ls:w-[162px]"
                  >
                    <img src={map} alt="map" />
                    <span className="ml-[10px]">Map</span>
                  </Link>
                </div>

                {/* Categories */}
                <ul className="categories">
                  <li>
                    <button className="flex items-center bg-btnBgColor font-medium w-[362px] h-12 border rounded border-gray-300 px-5 mb-3 ss:w-[296px] md:hidden ls:w-[334px]">
                      <div className="flex items-center">
                        <span className="border-r border-gray-300 py-3 pr-5">
                          <img src={dashboard} alt="" />
                        </span>
                        <span className="ml-[11.67px]">Dashboard (demo)</span>
                      </div>
                      <img
                        src={arrowBottomRight}
                        alt=""
                        className="arrowRotate ml-auto"
                      />
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center bg-btnBgColor font-medium w-[362px] h-12 border rounded border-gray-300 px-5 mb-3 ss:w-[296px] md:hidden ls:w-[334px]">
                      <div className="flex items-center">
                        <span className="border-r border-gray-300 py-3 pr-5">
                          <img src={businessBlack} alt="" />
                        </span>
                        <span className="ml-[11.67px]">Business</span>
                      </div>
                      <img
                        src={arrowBottomRight}
                        alt=""
                        className="arrowRotate ml-auto"
                      />
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center bg-btnBgColor font-medium w-[362px] h-12 border rounded border-gray-300 px-5 mb-3 ss:w-[296px] md:hidden ls:w-[334px]">
                      <div className="flex items-center">
                        <span className="border-r border-gray-300 py-3 pr-5">
                          <img src={booking} alt="" />
                        </span>
                        <span className="ml-[11.67px]">My orders</span>
                      </div>
                      <img
                        src={arrowBottomRight}
                        alt=""
                        className="arrowRotate ml-auto"
                      />
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center bg-btnBgColor font-medium w-[362px] h-12 border rounded border-gray-300 px-5 mb-3 ss:w-[296px] md:hidden ls:w-[334px]">
                      <div className="flex items-center">
                        <span className="border-r border-gray-300 py-3 pr-5">
                          <img src={shop} alt="" />
                        </span>
                        <span className="ml-[11.67px]">Shop</span>
                      </div>
                      <img
                        src={arrowBottomRight}
                        alt=""
                        className="arrowRotate ml-auto"
                      />
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center bg-btnBgColor font-medium w-[362px] h-12 border rounded border-gray-300 px-5 mb-3 ss:w-[296px] md:hidden ls:w-[334px]">
                      <div className="flex items-center">
                        <span className="border-r border-gray-300 py-3 pr-5">
                          <img src={blog} alt="" />
                        </span>
                        <span className="ml-[11.67px]">My blog</span>
                      </div>
                      <img
                        src={arrowBottomRight}
                        alt=""
                        className="arrowRotate ml-auto"
                      />
                    </button>
                  </li>
                </ul>

                {/*Help and Contact selection for Mobile */}
                <div className="flex items-center justify-between h-11 mb-4 ss:w-[296px] ls:w-[334px]">
                  <button className="left py-[9px] rounded flex items-center justify-center font-medium rouded border border-gray-300 bg-bgColor  w-[144px] ls:w-[162px]">
                    <img src={helpBlack} alt="misic" />
                    <span className="ml-[10px]">Help</span>
                  </button>
                  <Link
                    to="#"
                    className="right px-10 py-[9px] rounded flex items-center justify-center font-medium border border-gray-300 bg-bgColor w-[144px] ls:w-[162px]"
                  >
                    <img src={contact} alt="map" />
                    <span className="ml-[10px]">Contact</span>
                  </Link>
                </div>

                {/* Location and Language */}
                <div className="line border-b w-[300px] border-gray-300 mb-4 ls:w-full"></div>
                <div className="flex items-center justify-between h-11 mb-4 ss:w-[296px] ls:w-[334px]">
                  <button className="left py-[9px] rounded flex items-center justify-center font-medium rouded border border-gray-300 bg-bgColor w-[144px] p-3 ls:w-[162px]">
                    <img src={location} alt="music" />
                    <span className="ml-[10px] mr-5">Tashkent</span>
                    <img src={arrowBottomBlack} alt="" />
                  </button>
                  <Link
                    to="#"
                    className="right px-10 py-[9px] rounded flex items-center justify-center font-medium border border-gray-300 bg-bgColor w-[144px] p-3 ls:w-[162px]"
                  >
                    <img src={eng} alt="map" />
                    <span className="ml-[10px] mr-5">English</span>
                    <img src={arrowBottomBlack} alt="map" />
                  </Link>
                </div>
              </div>
              {/*Ending of Opened Hamburger menu section */}
            </div>

            {/* Logo section */}
            <div className="ss:w-fit logo flex justify-center items-center  border border-solid border-gray-900 rounded bg-bgColor h-12">
              <img src={logo} alt="logo" />
            </div>

            {/* Weather section */}
            <div
              className={`${styles.flexCenter} ss:w-fit flex items-center justify-en bg-bgColor  border border-solid border-gray-900 h-12 rounded cursor-pointer`}
            >
              <img src={winter} alt="weather" className="mr-0 md:mr-[10px]" />
              <span className="font-medium hidden md:block">Winter</span>
            </div>
          </div>

          {/* Logo section */}
          <Link
            to="#"
            className="logo flex justify-center items-center rounded bg-bgColor px-4 py-4 w-[228px] h-12 mr-2 ss:w-[172px] md:mr-[43px] md:px-0 md:py-0 md:w-auto md:bg-transparent ss:hidden"
          >
            <img src={logo} alt="logo" />
          </Link>

          {/* Voice section */}
          <div
            className={`${styles.flexCenter} bg-bgColor border border-searchBgColor mr-2 px-4 h-12 rounded cursor-pointer hidden md:flex`}
          >
            <img src={voice} alt="voice" />
          </div>

          {/* Catalog section */}
          <button className="items-center bg-catalogBg px-4 h-12 rounded-l cursor-pointer hidden md:flex">
            <img src={catalog} alt="catalog" />
            <span className="text-fullBlue ml-[9.5px] font-medium">
              Catalog
            </span>
          </button>

          {/* Searching section */}
          <div className="search flex items-center justify-between rounded font-medium h-10 mt-3 w-[256px] border border-searchBgColor md:border-transparent md:h-12 md:w-[528px] md:mt-0 ss:hidden md:flex">
            <img
              src={search}
              alt="search"
              className="pl-[11.65px] flex ss:pl-[3.5px] md:hidden"
            />
            <input
              type="text"
              placeholder="Search products or brands"
              className="bg-transparent w-full px-3 h-12 text-[14px] border border-transparent md:border-searchBgColor md:mx-0 md:-ml-[3px] md:px-3 md:h-12"
            />
            <button className="bg-searchBgColor w-[76px] h-12 items-center justify-center rounded-r border border-bgColor hidden md:flex">
              <img src={search} alt="search" />
            </button>
          </div>

          {/* Line border */}
          <div className="line h-5 border text-textColor mx-3 hidden md:flex"></div>

          {/* Map section */}
          <Link
            to="#"
            className="flex items-center justify-center bg-bgColor border border-searchBgColor rounded px-4 h-10 mt-3 md:h-12 ss:text-sm md:w-[98-px] md:mt-0 ss:hidden md:flex"
          >
            <img src={map} alt="map" className="mr-[6px]" />
            <span className="font-medium">Map</span>
          </Link>

          {/* Line border */}
          <div className="line h-5 border text-textColor mx-3 hidden md:flex"></div>

          {/* User section */}
          <div className=" items-center bg-bgColor border border-searchBgColor rounded px-4 w-12 h-12 mr-2 cursor-pointer hidden md:flex">
            <img src={user} alt="" />
          </div>

          {/* Heart section */}
          <div className="items-center bg-bgColor border border-searchBgColor rounded px-4 w-12 h-12 mr-2 cursor-pointer hidden md:flex">
            <img src={heart} alt="heart" />
          </div>

          {/* Bucket section */}
          <div className=" items-center bg-bgColor border border-searchBgColor rounded px-4 w-12 h-12 cursor-pointer relative md:flex ss:hidden">
            <img src={bucket} alt="bucket" />
            <span className="count bg-red-700 w-4 h-4 text-white text-[10px] rounded flex items-center justify-center absolute top-0 right-0 font-medium">
              4
            </span>
          </div>
        </div>
        {/* Ending of Full Screen page sesction */}

        {/*Starting of Blocked  Hamburger Menu section */}
        <div className={`${!hamburgerMenu ? "hidden h-0" : "block"} md:hidden`}>
          <div className="flex items-center justify-between w-full   border border-solid border-gray-900  ">
            {/* Searching section */}
            <div className="search flex items-center rounded font-medium h-10 mt-3 border border-solid border-gray-900 ss:w-[80%]">
              <img src={search} alt="search" className="pl-[11.65px]" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent h-12 text-[14px] border border-transparent ss:px-[4px] ss:mx-[8px] ss:w-[170px] ls:w-[190px]"
              />
            </div>
            {/* Map section */}
            <Link
              to="#"
              className="flex items-center justify-center bg-bgColor border border-searchBgColor rounded px-4 h-10 mt-3 ss:w-[15%]"
            >
              <img src={map} alt="map" className="mr-[6px]" />
              <span className="font-medium">Map</span>
            </Link>
          </div>

          {/* Gender selection for Mobile */}
          <div className="flex flex-wrap items-center justify-between  mt-6 border border-solid border-gray-900 rounded  mb-4 ss:w-full">
            <button
              className={` left px-10 py-[7.5px] ss:w-[45%] sm:w-[30%] flex items-center justify-center font-medium rouded border  border-solid border-gray-900rounded drob-shadow-md`}
            >
              <img src={female} alt="female" />
              <span className="ml-[10px]">Female</span>
            </button>
            <button
              className={` right px-10 py-[9px]  ss:w-[45%] sm:w-[30%]  rounded flex items-center justify-center font-medium border border-solid border-gray-900 `}
            >
              <img src={male} alt="male" />
              <span className="ml-[10px]">Male</span>
            </button>
            <button
              onClick={() => {
                setToggle(!toggle);
              }}
              className="flex items-center bg-btnBgColor font-medium  ss:w-full  sm:w-[30%] ss:mt-4 sm:m-0  h-12  rounded border border-solid border-gray-900 px-5"
            >
              <div className="flex items-center ml-auto">
                <img src={clothing} alt="" />
                <span className="ml-[11.67px]">Clothing options</span>
              </div>
              <img
                src={arrowBottomBlack}
                alt=""
                className="arrowRotate ml-auto"
              />
            </button>
          </div>

          {/* Params for Mobile */}

          <div
            className={`${
              toggle ? "closeFile" : "openFile h-0 mb-0"
            } md:hidden`}
          >
            <ul className="ss:w-full my-4 bg-white border border-solid border-gray-900">
              <li>
                <button className="ss:w-full flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 md:hidden">
                  <div className="flex items-center">
                    <span className="border-r border-gray-300 py-3 pr-5">
                      <img src={clothing} alt="" />
                    </span>
                    <span className="ml-[11.67px]">Clothing options</span>
                  </div>
                  <img
                    src={arrowBottomRight}
                    alt=""
                    className="arrowRotate ml-auto"
                  />
                </button>
              </li>
              <li>
                <button className="flex items-center w-full bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 md:hidden">
                  <div className="flex items-center">
                    <span className="border-r border-gray-300 py-3 pr-5">
                      <img src={dollar} alt="" />
                    </span>
                    <span className="ml-[11.67px]">Up to 500.000 sum</span>
                  </div>
                  <img
                    src={arrowBottomRight}
                    alt=""
                    className="arrowRotate ml-auto"
                  />
                </button>
              </li>
              <li>
                <button className="w-full flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 md:hidden">
                  <span className="border-r w-[60px] border-gray-300 py-3 pr-5">
                    <img src={brush} alt="" />
                  </span>
                  <div className="flex items-center overflow-x-scroll">
                    <div className="ml-[11.67px] flex items-center">
                      <div className=" w-full h-[48px] flex justify-between items-center px-4   border-t	 border-solid	border-borderColorCard">
                        <label
                          className="rounded-full mr-1 w-7 h-7 bg-purple-500 cursor-pointer  border	 border-solid	border-borderColorCard"
                          htmlFor="Color1"
                        >
                          <input
                            className="hidden"
                            type="checkbox"
                            id="Color1"
                            name="colors"
                            value="1"
                          />
                        </label>
                        <span className="mr-2">purple,</span>
                        <label
                          className="rounded-full mr-2 w-7 h-7 bg-green-600 cursor-pointer  border	 border-solid	border-borderColorCard"
                          htmlFor="Color2"
                        >
                          <input
                            className="hidden"
                            type="checkbox"
                            id="Color2"
                            name="colors"
                            value="1"
                          />
                        </label>
                        <span className="mr-2">green,</span>
                        <label
                          className="rounded-full mr-1 w-7 h-7 bg-red-700 cursor-pointer  border	 border-solid	border-borderColorCard"
                          htmlFor="Color3"
                        >
                          <input
                            className="hidden"
                            type="radio"
                            id="Color3"
                            name="colors"
                            value="1"
                          />
                        </label>
                        <span className="mr-2">red,</span>
                        <label
                          className="rounded-full mr-1 w-7 h-7 bg-yellow-500 cursor-pointer  border	 border-solid	border-borderColorCard"
                          htmlFor="Color4"
                        >
                          <input
                            className="hidden"
                            type="radio"
                            id="Color4"
                            name="colors"
                            value="1"
                          />
                        </label>
                        <span className="mr-2">yellow,</span>
                      </div>
                    </div>
                  </div>
                  <span className="w-[20px]">
                    <img
                      src={arrowBottomRight}
                      alt=""
                      className="arrowRotate ml-auto"
                    />
                  </span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center bg-btnBgColor font-medium h-12 border rounded border-gray-300 px-5 mb-3 md:hidden">
                  <div className="flex items-center">
                    <span className="border-r border-gray-300 py-3 pr-5">
                      <img src={topBrands} alt="" />
                    </span>
                    <span className="ml-[11.67px]">Top Brands</span>
                  </div>
                  <img
                    src={arrowBottomRight}
                    alt=""
                    className="arrowRotate ml-auto"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Ending of Blocked  Hamburger Menu section  */}
      </div>
    </div>
  );
};
export default MediumHeader;
