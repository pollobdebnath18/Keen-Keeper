import React from "react";
import { FaPlus } from "react-icons/fa";
import useFriends from "../../hooks/useFriends";

const Banner = () => {
  const { friends } = useFriends();
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const Overdue = friends.filter((f) => f.status === "overdue").length;
  // console.log(friends);
  return (
    <div className="max-w-[1000px] mx-auto my-12 space-y-6">
      <div className="text-center pt-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1F2937] font-bold mx-4 md:mx-2 lg:mx-0">
          Friends to keep close in your life
        </h2>
      </div>
      <div className="text-center">
        <p className="text-[16px] text-[#64748B] mx-4  md:w-[60%] md:mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>
      <div className="flex justify-center">
        <button className="btn text-white bg-[#244D3F] mx-auto">
          <FaPlus></FaPlus> Add a Friend
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-4 md:mx-2">
        <div className="flex flex-col justify-center items-center bg-white shadow-sm rounded-lg py-4 space-y-1.5">
          <span className="text-xl font-bold text-[#244D3F]">
            {friends.length}
          </span>
          <span className="text-[#64748B] text-[14px]">Your Friends</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-white shadow-sm rounded-lg py-4 space-y-1.5">
          <span className="text-xl font-bold text-[#244D3F]">{onTrack}</span>
          <span className="text-[#64748B] text-[14px]">On Track</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-white shadow-sm rounded-lg py-4 space-y-1.5">
          <span className="text-xl font-bold text-[#244D3F]">{Overdue}</span>
          <span className="text-[#64748B] text-[14px]">Need Attention</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-white shadow-sm rounded-lg py-4 space-y-1.5">
          <span className="text-xl font-bold text-[#244D3F]">10</span>
          <span className="text-[#64748B] text-[14px]">
            Interactions This Month
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
