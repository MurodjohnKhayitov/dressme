import React from "react";
import ClothesSlider from "../components/home/ClothesSlider";
import CollectionCards from "../components/home/CollectionCards";
import MainPageSliders from "../components/home/MainPageSliders";
import TypeSection from "../components/home/TypeSection";

const Home = () => {
    return(
        <>
        <MainPageSliders/>
        <CollectionCards/>
        <ClothesSlider/>
        <TypeSection/>
        
        </>
    )
}
export default Home