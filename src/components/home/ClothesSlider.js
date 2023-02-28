import React, { useState } from 'react'
import { next, category, arrowBottomFull, mouse, toBottom } from '../../assets/imgs'
import { discount, bucket, video, delivery, heart, shirt, addBag, cardImg, shortik, kastyum } from '../../assets/imgs'
import StarRatingComponent from 'react-star-rating-component'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

export default function ClothesSlider() {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
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
    const [carosuelData, setCarosuelData] = useState([
        {
            Category: [
                { id: 1, type: "Student", count: 123, img: "" },
                { id: 2, type: "Businiess", count: 223, img: "" },
                { id: 3, type: "Muslim", count: 80, img: "" },
                { id: 4, type: "Travel", count: 453, img: "" },
                { id: 5, type: "Sport", count: 320, img: "" },
                { id: 6, type: "Classic", count: 40, img: "" },
                { id: 7, type: "Relaxed", count: 180, img: "" },
                { id: 8, type: "Dramatic", count: 250, img: "" },
                { id: 9, type: "Creative", count: 190, img: "" },
                { id: 10, type: "Rebellious", count: 310, img: "" },
                { id: 11, type: "Feminine", count: 479, img: "" },

            ],

            campany: [
                { id: 1, type: "All", name: "All" },
                { id: 2, type: "icons", name: "Cotegory 1" },
                { id: 3, type: "icons", name: "Cotegory2" },
                { id: 4, type: "icons", name: "Cotegory3" },
                { id: 5, type: "icons", name: "Cotegory4" },
                { id: 6, type: "icons", name: "Cotegory5" },
                { id: 7, type: "icons", name: "Cotegory6" },
                { id: 8, type: "icons", name: "Cotegory7" },
                { id: 9, type: "icons", name: "Cotegory8" },
                { id: 10, type: "icons", name: "Cotegory9" },
                { id: 11, type: "icons", name: "Cotegory10" },
                { id: 12, type: "icons", name: "Cotegory11" },
                { id: 13, type: "icons", name: "Cotegory12" },
                { id: 14, type: "icons", name: "Cotegory13" },
                { id: 15, type: "icons", name: "Cotegory14" },


            ]
        },

    ])
    return (
        <div className='flex flex-col justify-center mt-12 m-0 p-0 box-border '>
            <div className='max-w-[1280px] m-auto h-fit'>
                <div  className='w-full flex justify-between items-center h-fit py-7'>
                    <div >
                        <p className='flex items-center cursor-pointer select-none'>
                            <span className='not-italic font-normal text-2xl leading-7 text-black'>Deals under:</span>
                            <span className='flex mr-2  not-italic font-bold text-2xl leading-7 text-black'>100$<img className='mt-1' src={arrowBottomFull} alt="next" /></span> </p>
                    </div>
                    <div >
                        <p className='flex items-center cursor-pointer select-none'>
                            <span className='not-italic font-medium mr-2 text-base leading-4 text-right text-black'>Stores closest to you</span>
                            <span><img src={next} alt="next" /></span> </p>
                    </div>

                </div>
                <div className='w-full h-fit py-7'>
                    <Swiper
                        slidesPerView={7}
                        breakpoints={{
                            // when window width is >= 640px
                            480: {
                                width: 480,
                                slidesPerView: 3,
                            },
                            640: {
                                width: 640,
                                slidesPerView: 4,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 5,
                            },
                            1024: {
                                width: 1024,
                                slidesPerView: 7,
                            },
                            1280: {
                                width: 1280,
                                slidesPerView: 8,
                            },
                            1440: {
                                width: 1440,
                                slidesPerView: 9,
                            },
                        }}
                        spaceBetween={30}
                        grabCursor={true}

                    >
                        {
                            carosuelData?.map(data => {
                                return (
                                    data.campany.map(data => {
                                        return (
                                            <SwiperSlide key={data.id} >
                                                <div className='w-40 flex flex-col justify-center items-center h-fit'>
                                                    <div className='w-32 h-32 bg-gray-100 rounded-lg flex justify-center items-center cursor-pointer -ml-5'>
                                                        <p className='not-italic font-medium text-base leading-4 text-center text-black'>{data?.type || "0"}</p>
                                                    </div>
                                                    <div >
                                                        <p className='not-italic font-medium text-base leading-4 text-center mt-5 text-black -ml-5'>{data?.name || "type"}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>

                                        )
                                    })

                                )
                            })
                        }

                    </Swiper>
                </div>
            </div>
            <div className='w-full h-fit my-7 border-y	border-solid	border-borderColorCard'>
                <div className='max-w-[1280px] m-auto h-fit'>
                    <div className='w-full flex items-center h-[560px] py-7'>

                        <Swiper
                            slidesPerView={4}
                           
                            spaceBetween={20}
                            grabCursor={true}
                            className='w-full h-full mt-7'

                            autoplay={{ delay: 8000, disableOnInteraction: false, reverseDirection: true, waitForTransition: true }}
                        >
                            {
                                productList.map(data => {
                                    return (
                                        <SwiperSlide >
                                            <div key={data.id} className="w-[298px] h-[470px] border border-solid	border-borderColorCard overflow-hidden rounded-t-lg		">
                                                <div className='relative w-full   h-[340px] bg-white flex flex-wrap content-between items-center overflow-hidden border-b border-solid	border-borderColorCard'>
                                                    {
                                                        data.ProducImg ?
                                                            <img className='w-full h-full m-auto' src={data.ProducImg} alt="ProducImg" />
                                                            :
                                                            <img className='w-full h-fit' src={data.noProductImg} alt="noProductImg" />
                                                    }
                                                    <div className='w-full flex justify-end absolute top-px p-2'>


                                                        {data?.like ? <p className="w-8 h-8 bg-white rounded flex items-center justify-center cursor-pointer p-1 border border-solid	border-borderColorCard"><img src={heart} alt="heart" /></p> : null}

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
                                                            <b style={{ color: "black" }}>{data?.price} </b>
                                                        </div>
                                                        <div className="flex items-center">

                                                            <span><img src={addBag} alt="user" /></span>

                                                        </div>

                                                    </div>

                                                </div>


                                            </div>
                                        </SwiperSlide>
                                    )
                                })}


                        </Swiper>

                    </div>
                </div>
            </div>
        </div>
    )
}
