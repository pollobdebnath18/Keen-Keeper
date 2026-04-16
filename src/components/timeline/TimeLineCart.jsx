import React from "react";
import TextImg from "../../assets/text.png";
import CallImg from "../../assets/call.png";
import Video from "../../assets/video.png";
const TimeLineCart = ({ actions }) => {
  //   console.log(actions);
  return (
    <div>
      <div className="flex justify-start items-center gap-5 py-3 shadow-sm rounded-xl px-4 mb-6 mx-10 md:mx-5 lg:mx-0">
        <div>
          <img
            src={
              actions.type === "text"
                ? TextImg
                : actions.type === "call"
                  ? CallImg
                  : Video
            }
            alt="icon"
          />
        </div>
        <div className="space-y-2">
          <h2>
            <span className="text-lg font-bold capitalize">{actions.type}</span>{" "}
            <span className="text-[14px] ">with {actions.name}</span>
          </h2>
          <p className="text-[14px]">
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeLineCart;
