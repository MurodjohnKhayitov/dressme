import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { next, category, arrowBottomFull, mouse, toBottom } from '../../assets/imgs'


// import required modules``
export default function MainPageSliders() {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const [clothesToggle, setClothesToggle] = useState(true)
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
                { id: 1, type: "Adidas", },
                { id: 2, type: "Nike", },
                { id: 3, type: "Puma", },
                { id: 4, type: "Reebok", },
                { id: 5, type: "Lotto", },
                { id: 6, type: "Prince", },
                { id: 7, type: "H&M", },
                { id: 8, type: "Zara", },
                { id: 9, type: "Channel", },
                { id: 10, type: "LV", },
                { id: 11, type: "Channel", },

            ]
        },

    ])

    return (
        <div className='box-border flex justify-between'>
            <div className="max-w-[1280px] m-auto h-fit py-8">
                <div className='w-full m-auto pb-7	'>
                    <Swiper
                        slidesPerView={7}
                        breakpoints={{
                            // when window width is >= 640px
                            480: {
                                width: 480,
                                slidesPerView: 1,
                            },
                            640: {
                                width: 640,
                                slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 3,
                            },
                            1024: {
                                width: 1024,
                                slidesPerView: 5,
                            },
                            1280: {
                                width: 1280,
                                slidesPerView: 6,
                            },
                            1440: {
                                width: 1440,
                                slidesPerView: 7,
                            },
                        }}
                        spaceBetween={30}
                        grabCursor={true}

                        autoplay={{ delay: 10000, disableOnInteraction: false, reverseDirection: true, waitForTransition: true }}

                        className='w-full h-[290px]'

                    >
                        {
                            carosuelData?.map(data => {
                                return (
                                    data.Category.map(data => {
                                        return (


                                            <SwiperSlide key={data.id} className='w-[184px] h-[260px] rounded'>
                                                <div className='w-full h-[230px] bg-bgColor border border-solid	border-borderColorCard '>
                                                    {data?.img ? <img src={data?.img} alt="student" /> : null}
                                                </div>
                                                <div className='h-12.5 flex items-center justify-start'>
                                                    <p className='not-italic mt-3 font-medium text-xl leading-6 text-black'>{data?.type || "type"}
                                                        <span className='not-italic font-normal text-base leading-4 text-gray-500'>({data?.count || "0"})</span></p>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })

                                )
                            })
                        }

                    </Swiper>
                </div>
                <div className='w-full m-auto py-7'>
                    <Swiper
                        slidesPerView={7}
                        breakpoints={{
                            // when window width is >= 640px
                            480: {
                                width: 480,
                                slidesPerView: 1,
                            },
                            640: {
                                width: 640,
                                slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 3,
                            },
                            1024: {
                                width: 1024,
                                slidesPerView: 5,
                            },
                            1280: {
                                width: 1280,
                                slidesPerView: 6,
                            },
                            1440: {
                                width: 1440,
                                slidesPerView: 7,
                            },
                        }}
                        spaceBetween={30}
                        grabCursor={true}

                        autoplay={{ delay: 8000, disableOnInteraction: false, reverseDirection: true, waitForTransition: true }}
                    >
                        {
                            carosuelData?.map(data => {
                                return (
                                    data.campany.map(data => {
                                        return (
                                            <SwiperSlide key={data.id} className='flex flex-col'>
                                                <div className='w-50 h-[100px] rounded-lg bg-gray-100 flex items-center justify-center select-none'>
                                                    <p className='not-italic font-medium text-xl leading-6 text-center text-black'>{data?.type || "0"}</p>
                                                </div>
                                            </SwiperSlide>

                                        )
                                    })

                                )
                            })
                        }

                    </Swiper>
                </div>
                <div className='w-full flex justify-between items-center h-fit py-7'>
                    <div >
                        <p className='flex items-center cursor-pointer select-none' onClick={() => setClothesToggle(!clothesToggle)}>
                            <span className='not-italic font-medium text-base leading-4 mr-2 text-black'>Recommendations for you</span>
                            <span>{clothesToggle ? <img src={toBottom} alt="next" /> : <img src={next} alt="next" />}</span></p>
                    </div>
                    <div >
                        <p className='flex items-center cursor-pointer select-none'>
                            <span className='not-italic font-medium text-base leading-4 mr-2 text-black'>Stores closest to you</span>
                            <span><img src={next} alt="next" /></span> </p>
                    </div>

                </div>
                {
                    clothesToggle ?

                        <div className='flex justify-between items-center mt-12 py-7'>
                            <div className='w-[400px] h-32 bg-bgColor rounded-lg p-6 flex flex-wrap content-between cursor-pointer select-none border border-solid	border-borderColorCard'>
                                <div className='w-full'>
                                    <p className='not-italic font-normal text-base leading-4 text-black'>Strengthen Health</p>
                                </div>
                                <div className='w-full flex justify-between items-center'>
                                    <p className='not-italic font-semibold text-2xl leading-7 text-black'>Sports clothes</p>
                                    <p><img src={category} alt="next" /></p>
                                </div>
                            </div>

                            <div className='w-[400px] h-32 bg-bgColor rounded-lg p-6 flex flex-wrap content-between cursor-pointer select-none border border-solid	border-borderColorCard'>
                                <div className='w-full'>
                                    <p className='not-italic font-normal text-base leading-4 text-black'>Based on your Interests</p>
                                </div>
                                <div className='w-full flex justify-between items-center'>
                                    <p className='not-italic font-semibold text-2xl leading-7 text-black'>Muslim clothes</p>
                                    <p><img src={category} alt="next" /></p>
                                </div>


                            </div>
                            <div className='w-[400px] h-32 bg-bgColor rounded-lg p-6 flex flex-wrap content-between cursor-pointer select-none border border-solid	border-borderColorCard'>

                                <div className='w-full'>
                                    <p className='not-italic font-normal text-base leading-4 text-black'>Sort by your Money</p>
                                </div>
                                <div className='w-full flex justify-between items-center'>
                                    <b className='flex items-end'><span>40$</span><span><img src={arrowBottomFull} alt="arrowBottomFull" /></span><span className='not-italic font-normal text-base leading-4 text-gray-500'>Under price</span></b>

                                    <img src={category} alt="next" />

                                </div>


                            </div>
                        </div>
                        : null
                }
                <div className='w-full flex justify-center items-center py-12'>
                    <p className='flex cursor-pointer select-none'><img src={mouse} alt="mouse" /><span className='not-italic font-medium text-base leading-4 ml-2 text-black'>Scroll down</span></p>

                </div>
            </div>
        </div>
    )
}
