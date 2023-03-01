import React from "react";
import { arrowBottom, clothing, colors, dollarLogo, plus } from "../../assets/imgs";
import { styles } from "../../util/style";


const BottomHeader = () => {
    return(
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
    )
}

export default BottomHeader