import React from "react"; 
import HomeMainSlider from "../../module/components/home/HomeMainSlider";
import HomeNewSlider from "../../module/components/home/HomeNewSlider";
import Recommend from "../../module/components/home/Recommend";
import NewNovel from "../../module/components/home/NewNovel";
import FinishedNovel from "../../module/components/home/FinishedNovel";

export default function HomePage() {
  return (
    <>
      <HomeMainSlider />
      <HomeNewSlider/>
      <Recommend />
      <NewNovel />
      <FinishedNovel />
    </>
  );
}
