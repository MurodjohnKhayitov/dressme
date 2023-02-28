import React, { useState } from 'react'
import { next } from '../../assets/imgs'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
export default function TypeSection() {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const [typeSectionData, setTypeSectionData] = useState([
        {
            id: 1,
            type: "Sport Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 2,
            type: "Business Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 3,
            type: "Classic Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 4,
            type: "Muslim Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 5,
            type: "Student Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 6,
            type: "Travel Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 7,
            type: "Relaxed Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },

    ])

    return (
        <div className='flex flex-col my-24 box-border'>
            <div className='max-w-[1280px] m-auto h-fit '>
                <div className='w-full h-full flex justify-between'>
                    <Swiper
                        slidesPerView={3}

                        spaceBetween={20}
                        grabCursor={true}
                        className='w-full h-full '

                        autoplay={{ delay: 8000, disableOnInteraction: false, reverseDirection: false, waitForTransition: true }}
                    >

                        {
                            typeSectionData?.map(data => {
                                return (
                                    <SwiperSlide >
                                        <div key={data.id} className='w-[406px] h-[426px] bg-white border border-solid	border-borderColorCard rounded-lg p-8 flex flex-wrap content-between'>
                                            <div className='w-full flex items-center justify-between h-1/10'>
                                                <p className='not-italic font-medium text-2xl leading-7 text-black'>{data?.type || "type"}</p>
                                                <p className='flex items-center'><span className='not-italic font-medium text-base leading-4 text-right mr-2 text-black'>See more</span><img src={next} alt="next" /></p>

                                            </div>
                                            {/* ------------------- */}
                                            <div className='w-full flex flex-wrap rounded h-4/5'>
                                                {
                                                    data?.group?.map(data => {
                                                        return (
                                                            // -----------------
                                                            <div className='w-6/12 h-1/2 p-2  border border-solid	border-borderColorCard  bg-white flex flex-wrap content-between'>
                                                                <div className='w-full h-3/4 bg-bgColor'>
                                                                    {data.img ? <img src={data?.img} alt="data" /> : null}

                                                                </div>
                                                                <div className='w-full h-1/5 flex items-center not-italic font-medium text-base leading-4 text-black justify-start'>
                                                                    {data?.title || "title"}
                                                                </div>

                                                            </div>

                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>






                </div>
            </div>
        </div>
    )
}
