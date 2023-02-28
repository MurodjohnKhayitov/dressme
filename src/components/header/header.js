import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../util/style";

import {arrowBottom, arrowBottomBlack, arrowBottomRight, brush, bucket, business, catalog, clothing, colors, dollar, dollarLogo, eng, female, glasses, heart, help, location, logo, male, map, menu, order, plus, search, shop, topBrands, user, voice, winter} from "../../assets/imgs";

const Header = () => {
  // const [hamburgerMenu, setHamburgerMenu] = useState(false)
  const [isActive, setIsActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  const activeHandler = () => setIsActive((val) => !val);

  return (
    <header className="border border-searchBgColor">
      <div className="top bg-bgColor hidden sm:block">
        <div className={`${styles.container} mx-auto  text-[15px]`}>
          <div className={`${styles.flexBetween} py-[2px]`}>
            <div className="left flex items-center">
              <Link to="/" className="flex items-center">
                <img src={location} alt="location" className="mr-2" />
                <span className="text-textColor mr-[6px] font-medium">Location:</span>
                <span className="font-medium border-b border-slate-900 text-black mr-[45px]">Tashkent</span>
              </Link>
              <div className="flex items-center bg-white rounded px-3 py-[6px] cursor-pointer mr-3">
                <img src={eng} alt="eng" className="mr-[6px]" />
                <span className="font-medium">English</span>
              </div>
              <div className="flex items-center bg-white rounded px-3 py-[6px] cursor-pointer mr-3">
                <img src={glasses} alt="glasses" className="mr-2" />
                <span className="font-medium">Accessibility</span>
              </div>
            </div>
            <div className="right flex items-center">
              <Link to="#" className="flex items-center mr-[25.5px]">
                <img src={help} alt="help" className="mr-2" />
                <span className="text-textColor font-medium">Help</span>
              </Link>
              <Link to="#" className="flex items-center">
                <img src={business} alt="business" className="mr-2" />
                <span className="text-textColor font-medium">Business</span>
              </Link>
              <div className="line h-5 border text-textColor ml-6"></div>
              <Link to="#" className="flex items-center ml-[26.25px]">
                <img src={order} alt="my orders" className="mr-2" />
                <span className="text-textColor font-medium">My orders</span>
              </Link>
              <button className="flex items-center bg-white rounded px-3 py-[6px] cursor-pointer ml-6">
                <img src={shop} alt="shop" className="mr-2" />
                <span className="font-medium">Shop</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`main ${styles.container} py-2 mx-auto`}>
        <div className="flex items-center justify-between mx-3 my-2 flex-wrap md:mx-0 ">
          {/* Menu section */}
          <button className={`${styles.flexCenter} bg-bgColor border border-searchBgColor mr-2 px-4 h-12 rounded cursor-pointer block lg:hidden`}>
            <img src={menu} alt="voice" />
          </button>

          {/* Logo section */}
          <Link to="#" className="logo flex justify-center items-center rounded bg-bgColor px-4 py-4 w-[228px] h-12 mr-2 ss:w-[160px] md:mr-[43px] md:px-0 md:py-0 md:w-auto md:bg-transparent">
            <img src={logo} alt="logo" />
          </Link>

          {/* Voice section */}
          <div className={`${styles.flexCenter} bg-bgColor border border-searchBgColor mr-2 px-4 h-12 rounded cursor-pointer hidden md:flex`}>
            <img src={voice} alt="voice" />
          </div>

          {/* Weather section */}
          <div className={`${styles.flexCenter} flex items-center justify-center bg-bgColor border border-searchBgColor mr-0 px-4 h-12 rounded cursor-pointer md:mr-2`}>
            <img src={winter} alt="weather" className="mr-0 md:mr-[10px]" />
            <span className="font-medium hidden md:block">Winter</span>
          </div>

          {/* Catalog section */}
          <button className="items-center bg-catalogBg px-4 h-12 rounded-l cursor-pointer hidden md:flex">
            <img src={catalog} alt="catalog" />
            <span className="text-fullBlue ml-[9.5px] font-medium">Catalog</span>
          </button>

          {/* Searching section */}
          <div className="search flex items-center justify-between rounded font-medium h-10 mt-3 w-[256px] border border-searchBgColor ss:w-[216px] md:border-transparent md:h-12 md:w-[510px] md:mt-0">
            <img src={search} alt="search" className="pl-[11.65px] flex ss:pl-[3.5px] md:hidden"/>
            <input type="text" placeholder="Search products or brands" className="bg-transparent w-full px-3 h-12 text-[14px] border border-transparent md:border-searchBgColor ss:px-[4px] ss:mx-[6px] md:ml-0 md:px-3 md:h-12"/>
            <button className="bg-searchBgColor w-[76px] items-center justify-center h-12 rounded-r border border-bgColor hidden md:flex">
              <img src={search} alt="search" />
            </button>
          </div>

          {/* Line border */}
          <div className="line h-5 border text-textColor mx-3 hidden md:flex"></div>

          {/* Map section */}
          <Link to="#" className="flex items-center justify-center bg-bgColor border border-searchBgColor rounded px-4 w-[98px] h-10 mt-3 md:h-12 ss:w-[72px] ss:text-sm md:w-[94-px] md:mt-0">
            <img src={map} alt="map" className="mr-[6px]" />
            <span className="font-medium">Map</span>
          </Link>

          {/* Gender selection for Mobile */}
          <div className="flex items-center mt-6 border border-gray-300 rounded md:hidden w-[362px] h-11 mb-4">
            <button className="left w-1/2 px-10 py-[7.5px] flex items-center justify-center font-medium rouded border border-gray-100 rounded drob-shadow-md">
              <img src={female} alt="female" />
              <span className="ml-[10px]">Female</span>
            </button>
            <div className="line h-10 border border-gray-200"></div>
            <button className="right w-1/2 px-10 py-[9px] rounded flex items-center justify-center font-medium bg-bgColor">
              <img src={male} alt="male" />
              <span className="ml-[10px]">Male</span>
            </button>
          </div>

          {/* Params for Mobile */}
            <button 
                onClick={() => {setToggle(!toggle)}} 
                className="flex items-center bg-btnBgColor font-medium w-[362px] h-12 border rounded border-gray-300 px-5 md:hidden"
                >
                <div className="flex items-center ml-auto">
                    <img src={clothing} alt="" />
                    <span className="ml-[11.67px]">Clothing options</span>
                </div>
                <img src={arrowBottomBlack} alt="" className="arrowRotate ml-auto" />
            </button>
       
          <div className={`${toggle ? "closeFile" : "openFile" }`}>
            <ul className="my-4 md:hidden">
              <li>
                <button className="flex items-center bg-btnBgColor font-medium w-[362px] h-12 border rounded border-gray-300 px-5 mb-3 ss:w-[296px] md:hidden">
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
                <button className="flex items-center bg-btnBgColor font-medium w-[362px] h-12 border rounded border-gray-300 px-5 mb-3 ss:w-[296px] md:hidden">
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
                <button className="flex items-center bg-btnBgColor font-medium w-[362px] h-12 border rounded border-gray-300 px-5 mb-3 ss:w-[296px] md:hidden">
                  <div className="flex items-center overflow-x-scroll">
                    <span className="border-r border-gray-300 py-3 pr-5 w-30px">
                      <img src={brush} alt="" />
                    </span>
                    <div className="ml-[11.67px] flex items-center">
                      <div className=" w-full h-[48px] flex justify-between items-center px-4   border-t	 border-solid	border-borderColorCard">
                        <label className="rounded-full  w-7 h-7 bg-purple-500 cursor-pointer  border	 border-solid	border-borderColorCard" htmlFor="Color1">
                            <input className="hidden" type="checkbox" id="Color1" name="colors" value="1"/>
                        </label>
                        <label className="rounded-full  w-7 h-7 bg-green-600 cursor-pointer  border	 border-solid	border-borderColorCard" htmlFor="Color2">
                            <input className="hidden" type="checkbox" id="Color2" name="colors" value="1"/>
                        </label>
                        <label className="rounded-full  w-7 h-7 bg-red-700 cursor-pointer  border	 border-solid	border-borderColorCard" htmlFor="Color3">
                            <input className="hidden" type="radio" id="Color3" name="colors" value="1"/>
                        </label>
                        <label  className="rounded-full  w-7 h-7 bg-yellow-500 cursor-pointer  border	 border-solid	border-borderColorCard" htmlFor="Color4">
                          <input className="hidden" type="radio" id="Color4" name="colors" value="1"/>
                        </label>
                      </div>
                    </div>
                  </div>
                  <img
                    src={arrowBottomRight}
                    alt=""
                    className="arrowRotate ml-auto"
                  />
                </button>
              </li>
              <li>
                <button className="flex items-center bg-btnBgColor font-medium w-[362px] h-12 border rounded border-gray-300 px-5 mb-3 ss:w-[296px] md:hidden">
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
          <div className=" items-center bg-bgColor border border-searchBgColor rounded px-4 w-12 h-12 cursor-pointer relative hidden md:flex">
            <img src={bucket} alt="bucket" />
            <span className="count bg-red-700 w-4 h-4 text-white text-[10px] rounded flex items-center justify-center absolute top-0 right-0 font-medium">
              4
            </span>
          </div>
        </div>
      </div>
      <div className={`bottom ${styles.container} py-3 mx-auto`}>
        <div className="flex items-center justify-between">
            <button className="flex items-center bg-bgColor px-3 w-[190px] h-12 rounded mr-2 border-searchBgColor border">
                <img src={clothing} alt="clothing" className="mr-3" />
                <span className="font-medium mr-[12.38px]">Clothing type</span>
                <img src={arrowBottom} alt="arrow bottom" />
            </button>
            <button className="w-[210px] h-12 flex items-center bg-bgColor rounded mr-2 border-searchBgColor border">
                <img src={dollarLogo} alt="dollar full" className="px-[18px] py-3 border-r h-full"/>
                <span className="font-medium text-base pl-4 pr-6 py-3">Under 100$</span>
                <img src={arrowBottom} alt="arrow bottom" />
            </button>
            <div className="flex items-center justify-between bg-bgColor rounded border-searchBgColor border h-12">
                <img src={colors} alt="" className="px-[18px] py-[14px] border-r h-full mr-4" />
                <label className="rounded-full w-7 h-7 bg-black cursor-pointer border border-solid mr-3 border-borderColorCard" htmlFor="Color1">
                    <input className="hidden" type="checkbox" id="Color1" name="colors" value="1"/>
                </label>
                <label className="rounded-full w-7 h-7 bg-white cursor-pointer border border-solid mr-3	border-borderColorCard" htmlFor="Color2">
                    <input className="hidden" type="checkbox" id="Color2" name="colors" value="1"/>
                </label>
                <label className="rounded-full w-7 h-7 bg-zinc-500 cursor-pointer  border border-solid mr-3	border-borderColorCard" htmlFor="Color3">
                    <input className="hidden" type="radio" id="Color3" name="colors" value="1"/>
                </label>
                <label  className="rounded-full w-7 h-7 bg-purple-500 cursor-pointer border border-solid mr-3 border-borderColorCard" htmlFor="Color4">
                    <input className="hidden" type="radio" id="Color4" name="colors" value="1"/>
                </label>
                <label className="rounded-full w-7 h-7 bg-sky-600 cursor-pointer border border-solid mr-3 border-borderColorCard" htmlFor="Color1">
                    <input className="hidden" type="checkbox" id="Color1" name="colors" value="1"/>
                </label>
                <label className="rounded-full w-7 h-7 bg-amber-400 cursor-pointer border border-solid mr-3	border-borderColorCard" htmlFor="Color2">
                    <input className="hidden" type="checkbox" id="Color2" name="colors" value="1"/>
                </label>
                <label className="rounded-full w-7 h-7 bg-green-700 cursor-pointer border border-solid mr-3	border-borderColorCard" htmlFor="Color3">
                    <input className="hidden" type="radio" id="Color3" name="colors" value="1"/>
                </label>
                <label  className="rounded-full w-7 h-7 bg-amber-600 cursor-pointer border border-solid mr-3 border-borderColorCard" htmlFor="Color4">
                    <input className="hidden" type="radio" id="Color4" name="colors" value="1"/>
                </label>
                <label className="rounded-full w-7 h-7 bg-red-700 cursor-pointer border border-solid mr-3 border-borderColorCard" htmlFor="Color1">
                    <input className="hidden" type="checkbox" id="Color1" name="colors" value="1"/>
                </label>
                <label className="rounded-full w-7 h-7 bg-purple-800 cursor-pointer border border-solid mr-3 border-borderColorCard" htmlFor="Color2">
                    <input className="hidden" type="checkbox" id="Color2" name="colors" value="1"/>
                </label>
                <label className="rounded-full  w-7 h-7 bg-blue-900 cursor-pointer border border-solid mr-3 border-borderColorCard" htmlFor="Color3">
                    <input className="hidden" type="radio" id="Color3" name="colors" value="1"/>
                </label>
                <label  className="rounded-full w-7 h-7 bg-yellow-900 cursor-pointer border border-solid mr-4	border-borderColorCard" htmlFor="Color4">
                    <input className="hidden" type="radio" id="Color4" name="colors" value="1"/>
                </label>
            </div>
            <div className="line h-5 border text-textColor mx-3"></div>
            <button className="mr-1 bg-bgColor font-medium w-[111px] h-12 border border-searchBgColor rounded">
                Women
            </button>
            <button className="bg-catalogBg font-medium text-fullBlue w-[111px] h-12 border border-fullBlue mr-1 rounded">
                Men
            </button>
            <button className="bg-bgColor font-medium text-fullBlue w-12 h-12 flex items-center justify-center border border-searchBgColor rounded">
                <img src={plus} alt="" />
            </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
