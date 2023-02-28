import React, { useState } from 'react'
import { discount, bucket, video, delivery, heart, shirt, addBag, cardImg, shortik, kastyum } from '../../assets/imgs'
import StarRatingComponent from 'react-star-rating-component'
export default function CollectionCards() {
    const [productList, setProductList] = useState([
        {
            id: 1,
            discount: "-30%",
            video: "video",
            diliver: true,
            like: true,
            buy: true,
            ProducImg: kastyum,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 2,
            discount: "",
            video: "video",
            diliver: false,
            buy: true,
            like: false,
            ProducImg: shortik,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 3,
            discount: "",
            video: "video",
            diliver: true,
            buy: false,
            like: true,
            ProducImg: "",
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "",
            price: "70.000",
        },
        {
            id: 4,
            discount: "-30%",
            video: "video",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: shortik,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 5,
            discount: "-30%",
            video: "video",
            diliver: false,
            buy: true,
            like: true,
            ProducImg: kastyum,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 6,
            discount: "",
            video: "",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: "",
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 7,
            discount: "-30%",
            video: "video",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: "",
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 8,
            discount: "-30%",
            video: "video",
            diliver: false,
            buy: true,
            like: true,
            ProducImg: kastyum,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 9,
            discount: "",
            video: "",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: "",
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "15.000",
            price: "70.000",
        },
        {
            id: 10,
            discount: "-30%",
            video: "video",
            diliver: false,
            buy: true,
            like: true,
            ProducImg: shortik,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 11,
            discount: "-30%",
            video: "video",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: kastyum,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "",
            price: "75.000",
        },
        {
            id: 12,
            discount: "",
            video: "video",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: "",
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 13,
            discount: "",
            video: "video",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: "",
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 14,
            discount: "",
            video: "",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: shortik,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "",
            price: "140.000",
        },
        {
            id: 15,
            discount: "",
            video: "",
            diliver: true,
            buy: false,
            like: true,
            ProducImg: kastyum,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "",
            price: "70.000",
        },
        {
            id: 16,
            discount: "-40%",
            video: "video",
            diliver: false,
            buy: true,
            like: false,
            ProducImg: "",
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "35.000",
            price: "70.000",
        },

    ])
    const [rating, setRating] = useState(0);

    const onStarClick = (nextValue, prevValue, name) => {

        setRating(nextValue);
    }




    return (
        <div className="flex flex-col mt-3 box-border">

            <div className={`max-w-[1280px] m-auto h-fit py-8`}>

                <div className="w-full flex justify-between">
                    <div className="not-italic font-medium text-2xl leading-9 text-black	">
                        Collections of clothes that suit you
                    </div>
                
                    <div className="rounded w-[308px] h-[52px] flex justify-between bg-slate-50 border border-solid	border-searchBgColor	 ">
                        <button className='w-[152px] h-[50px] text-xs text-black text-center font-normal not-italic focus:bg-white focus:border focus:border-solid	focus:border-inheri focus:rounded'>Cards</button>
                        <button className='w-[152px] h-[50px] text-xs text-black text-center font-normal not-italic focus:bg-white focus:border focus:border-solid	focus:border-inheri focus:rounded'>Sets</button>

                    </div>

                </div>
                <div className="flex justify-between flex-wrap	mt-[50px] p-1 gap-5">
                    {
                        productList.map(data => {
                            return (

                                <div key={data.id} className="w-[298px] h-[470px] border border-solid	border-borderColorCard overflow-hidden rounded-t-lg		">
                                    <div className='relative w-full   h-[340px] bg-white flex flex-wrap content-between items-center overflow-hidden border-b border-solid	border-borderColorCard'>
                                        {
                                            data.ProducImg ?
                                                <img className='w-full h-full m-auto' src={data.ProducImg} alt="ProducImg" />
                                                :
                                                <img className='w-full h-fit' src={data.noProductImg} alt="noProductImg" />
                                        }
                                        <div className='w-full flex justify-between absolute top-px p-2'>
                                            <div>
                                                {data?.discount ? <p className="w-[140px] h-8  bg-white rounded flex items-center justify-around not-italic font-normal text-sm cursor-pointer leading-4  border border-solid	border-borderColorCard text-black"><span><img src={discount} alt="discount" /></span><span>Discount</span><span style={{ color: "#D50000" }}>{data.discount}</span></p> : null}
                                                {data?.video ? <p className="w-[82px] h-8 mt-2 bg-white rounded flex items-center justify-around not-italic font-normal text-sm cursor-pointer leading-4  border border-solid	border-borderColorCard text-black"><span><img src={video} alt="video" /></span><span>{data.video}</span></p> : null}
                                                {data?.diliver ? <p className="w-[94px] h-8 mt-2 bg-white rounded flex items-center justify-around not-italic font-normal text-sm cursor-pointer leading-4  border border-solid	border-borderColorCard text-black"><span><img src={delivery} alt="delivery" /></span><span>Diliver</span></p> : null}
                                            </div>
                                            <div >
                                                {data?.like ? <p className="w-8 h-8 bg-white rounded flex items-center justify-center cursor-pointer p-1 border border-solid	border-borderColorCard"><img src={heart} alt="heart" /></p> : null}
                                                {data.buy ? <p className='w-8  mt-2 h-8 bg-white rounded flex items-center justify-center cursor-pointer p-1 border border-solid	border-borderColorCard'><img src={bucket} alt="bucket" /></p> : null}
                                            </div>
                                        </div>
                                        <div className="absolute w-full h-[48px] flex justify-between items-center px-4 bg-white bottom-0  border-t	 border-solid	border-borderColorCard">
                                            <label className='rounded-full  w-7 h-7 bg-purple-500 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color1">
                                                <input className="hidden" type="radio" id="Color1" name="colors" value="1" />
                                            </label>
                                            <label className='rounded-full  w-7 h-7 bg-black cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color2">
                                                <input className="hidden" type="radio" id="Color2" name="colors" value="1" />
                                            </label>
                                            <label className='rounded-full  w-7 h-7 bg-white cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color3">
                                                <input className="hidden" type="radio" id="Color3" name="colors" value="1" />
                                            </label>
                                            <label className='rounded-full  w-7 h-7 bg-zinc-500 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color4">
                                                <input className="hidden" type="radio" id="Color4" name="colors" value="1" />
                                            </label>
                                            <label className='rounded-full  w-7 h-7 bg-sky-600 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color5">
                                                <input className="hidden" type="radio" id="Color5" name="colors" value="1" />
                                            </label>
                                            <label className='rounded-full  w-7 h-7 bg-amber-400 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color6">
                                                <input className="hidden" type="radio" id="Color6" name="colors" value="1" />
                                            </label>

                                        </div>
                                    </div>
                                    <div className="w-full h-32 rounded-b-1xl bg-white p-4 flex flex-wrap content-between">
                                        <div className="w-full h-[18px] not-italic font-normal text-base leading-4 text-black">
                                            {data?.title || "NoData"}
                                        </div>
                                        <div className="w-full flex justify-between items-center">
                                            <div className='flex items-center justify-between'>
                                                <StarRatingComponent
                                                    name="rate"
                                                    className="text-3xl"
                                                    starCount={5}
                                                    value={rating}
                                                    onStarClick={onStarClick}
                                                    emptyStarColor={"#c1c1c1"}
                                                />
                                                <span className='not-italic font-normal text-base leading-4 text-right text-gray-500 ml-1 flex items-center mt-2'>({data?.starCount || 0})</span>

                                            </div>
                                            <div className="not-italic font-medium text-base leading-4 text-black">
                                                <b><span>{data?.shirtSize || 0}</span></b>

                                            </div>

                                        </div>
                                        <div className="w-full flex items-center justify-between">
                                            <div >
                                                {
                                                    data.sale ?
                                                        <b className='not-italic font-medium text-2xl leading-7 text-red-700'>{data?.sale}
                                                            <span className='not-italic line-through	 font-normal text-sm leading-4 text-gray-500'>{data?.price}</span></b>
                                                        :
                                                        <b style={{ color: "black" }}>{data?.price} </b>
                                                }
                                            </div>
                                            <div className="flex items-center">
                                                {
                                                    data.sale ?
                                                        <>  <span><img src={shirt} alt="user" /></span>
                                                            <span style={{ margin: "0px 5px" }}>+</span></> : null
                                                }
                                                <span><img src={addBag} alt="user" /></span>

                                            </div>

                                        </div>

                                    </div>


                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
