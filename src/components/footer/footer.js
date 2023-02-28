import React from "react";
import { Link } from "react-router-dom";
import { footer, logo } from "../../assets/imgs";
import { styles } from "../../util/style";

const Footer = () => { 
    
    return(
        <footer className="w-full">
            <div className={`${styles.container} border border-searchBgColor rounded-xl mx-auto mb-10`}>
                <div className="flex flex-row justify-between border-b border-searchBgColor my-10 px-10 py-[30px]">
                    <div className="basis-1/5">
                        <Link to='#'>
                            <img src={logo} alt="logo" />
                        </Link>
                        <div className="title text-textColor mb-7 w-[200px] mt-9">Dress.me official address:</div>
                        <p className="font-normal">Uzbekistan, Tashkent city, Chilanzar district, N.hood “Mevazor”, 1A</p>
                    </div>
                    <div className="basis-1/5">
                        <div className="font-medium text-xl mb-[30px]">Menus</div>
                        <ul>
                            <li className="mb-4"><Link to='#' className="font-normal text-base">About us</Link></li>
                            <li className="mb-4"><Link to='#' className="font-normal text-base">Vacancy</Link></li>
                            <li className="mb-4"><Link to='#' className="font-normal text-base">Our Blog</Link></li>
                            <li className="mb-4"><Link to='#' className="font-normal text-base">Stores</Link></li>
                            <li className="mb-4"><Link to='#' className="font-normal text-base">Business</Link></li>
                        </ul>
                    </div>
                    <div className="basis-1/5">
                        <div className="font-medium text-xl mb-[30px]">Categories</div>
                        <ul>
                            <li className="mb-4"><Link to='#' className="font-normal text-base">Men</Link></li>
                            <li className="mb-4"><Link to='#' className="font-normal text-base">Women</Link></li>
                            <li className="mb-4"><Link to='#' className="font-normal text-base">Kids</Link></li>
                            <li className="mb-4"><Link to='#' className="font-normal text-base">Baby</Link></li>
                        </ul>
                    </div>
                    <div className="basis-1/5">
                        <div className="font-medium text-xl mb-[30px]">Social network</div>
                        <ul>
                            <li className="mb-4"><Link to='#' className="font-normal text-base">Instagram</Link></li>
                            <li className="mb-4"><Link to='#' className="font-normal text-base">Facebook</Link></li>
                            <li className="mb-4"><Link to='#' className="font-normal text-base">Telegram</Link></li>
                            <li className="mb-4"><Link to='#' className="font-normal text-base">Youtube</Link></li>
                        </ul>
                    </div>
                    <div className="basis-1/5 text-base">
                        <Link to='#' className="font-medium text-xl border-b-2 text-fullBlue border-fullBlue">Feedback form</Link>
                        <ul className="mt-[30px]">
                            <li className="mb-4"><Link to='#' className="font-normal text-base">Help</Link></li>
                            <li className="mb-4"><Link to='#' className="font-normal text-base">Contacts</Link></li>
                            <li className="mb-4"><Link to='#' className="font-normal text-base">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>  
                <div className="px-10 mb-[30px]">
                    <div className="left">
                        <div className="w-full font-medium text-xl mb-[30px]">Clothing Catalogs</div>
                        <div className="w-full flex items-center flex-wrap">
                            <button className="font-medium text-sm bg-searchBgColor rounded py-[10px] px-4 mr-4 mb-4">Students</button>
                            <button className="font-medium text-sm bg-searchBgColor rounded py-[10px] px-4 mr-4 mb-4">Business</button>
                            <button className="font-medium text-sm bg-searchBgColor rounded py-[10px] px-4 mr-4 mb-4">Classic</button>
                            <button className="font-medium text-sm bg-searchBgColor rounded py-[10px] px-4 mr-4 mb-4">Sport</button>
                            <button className="font-medium text-sm bg-searchBgColor rounded py-[10px] px-4 mr-4 mb-4">Free Style</button>
                            <button className="font-medium text-sm bg-searchBgColor rounded py-[10px] px-4 mr-4 mb-4">Muslim</button>
                            <button className="font-medium text-sm bg-searchBgColor rounded py-[10px] px-4 mr-4 mb-4">Travel</button>
                            <button className="font-medium text-sm bg-searchBgColor rounded py-[10px] px-4 mr-4 mb-4">Military</button>
                            <button className="font-medium text-sm bg-searchBgColor rounded py-[10px] px-4 mr-4 mb-4">Home</button>
                            <button className="font-medium text-sm bg-searchBgColor rounded py-[10px] px-4 mr-4 mb-4">Party</button>
                            <button className="font-medium text-sm bg-searchBgColor rounded py-[10px] px-4 mr-4 mb-4">Sneakers</button>
                            <button className="font-medium text-sm bg-searchBgColor rounded py-[10px] px-4 mr-4 mb-4">T-Shorts</button>
                            <button className="font-medium text-sm bg-searchBgColor rounded py-[10px] px-4 mr-4 mb-4">Shorts</button>
                            <button className="font-medium text-sm bg-searchBgColor rounded py-[10px] px-4 mr-4 mb-4">Jeans</button>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center font-medium">
                                <img src={footer} alt="" />
                                2022 — Dress.me <span className="ml-6">All Rights reserved</span>
                            </div>
                            <div className="font-medium">Designed by <Link to='#' className="text-fullBlue border-b border-fullBlue">Prince.UI</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer