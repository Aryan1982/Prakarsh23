import React from "react";
import GlimpseCard from "./GlimpseCard";
import "./Glimpse.css";
const Events = [
  {
    EventimageSource: "assests/Glimpse/DSC_2471.jpg",
    key: 1,
    Animation: "fade-right",
  },
  {
    EventimageSource: "assests/Glimpse/DSC_2546.jpg",
    key: 2,
    Animation: "flip-up",
  },
  {
    EventimageSource: "assests/Glimpse/DSC_2757.jpg",
    key: 3,
    Animation: "flip-down",
  },
  {
    EventimageSource: "assests/Glimpse/DSC_2851.jpg",
    key: 4,
    Animation: "fade-left",
  },
  {
    EventimageSource: "assests/Glimpse/DSC_2856.jpg",
    key: 5,
    Animation: "fade-right",
  },
  {
    EventimageSource: "assests/Glimpse/DSC_2944.jpg",
    key: 6,
    Animation: "flip-up",
  },
  {
    EventimageSource: "assests/Glimpse/DSC_3605.jpg",
    key: 7,
    Animation: "flip-down",
  },
  {
    EventimageSource: "assests/Glimpse/DSC_3754.jpg",
    key: 8,
    Animation: "fade-left",
  },
  //   {
  //     EventimageSource: "assests/Glimpse/DSC_3773.jpg",
  //     key: 9,
  //     Animation: "fade-left",
  //   },
  // {
  //   EventimageSource: "assests/Glimpse/DSC_3773.jpg",
  //   key: 10,
  //   Animation: "fade-right",
  // },
  // {
  //   EventimageSource: "assests/Glimpse/DSC_3773.jpg",
  //   key: 11,
  //   Animation: "fade-left",
  // },
];
const Glimpse = () => {
  return (
    <>
      <div className="gdiv">
        <h1 className="heading">GLIMPSE</h1>
        <div className="imagecontainer">
          <div className="h222">
            {Events.map((members) => (
              <GlimpseCard
                item={members}
                src={members.EventimageSource}
                key={members.key}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Glimpse;
