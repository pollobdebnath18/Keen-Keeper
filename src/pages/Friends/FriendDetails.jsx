import React, { useContext } from "react";
import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import { FadeLoader } from "react-spinners";
import Call from "../../assets/call.png";
import Text from "../../assets/text.png";
import Video from "../../assets/video.png";
import { HiBellSnooze } from "react-icons/hi2";
import { LuArchive } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FriendsContext } from "../../context/FriendsContextProvider";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useFriends();
  const { timeline, setTimeLine } = useContext(FriendsContext);
  const expectedFreiend = friends.find((ef) => ef.id == id);
  const handleThreeCard = (type) => {
    const newExpectedFriend = { ...expectedFreiend, type: type };
    // console.log(newExpectedFriend);
    setTimeLine([...timeline, newExpectedFriend]);
    if (type === "text") {
      toast.success("Text Added in Timeline Successfully");
    } else if (type === "call") {
      toast.success("Call Added in Timeline Successfully");
    } else {
      toast.success("Video Added in TimeLine Successfully");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <FadeLoader />
      </div>
    );
  }

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = expectedFreiend;

  return (
    <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row my-10 gap-5 md:gap-2 lg:gap-2">
      {/* left side */}
      <div className="w-full md:w-[35%] px-10 md:px-2">
        <div className=" bg-gray-200">
          <div className="card bg-base-100  shadow-lg ">
            <figure className="px-10 pt-3">
              <img
                src={picture}
                alt="friend-img"
                className="rounded-full w-[80px] h-[80px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <div>
                {
                  <p
                    className={`px-2 py-1 text-white  rounded-2xl
                ${status === "overdue" ? "bg-[#EF4444]" : `${status === "on-track" ? "bg-[#244D3F]" : "bg-[#EFAD44]"}`}`}
                  >
                    {status}
                  </p>
                }
              </div>

              <div className="flex justify-center items-center gap-2">
                {tags.map((tag, idx) => {
                  return (
                    <p
                      key={idx}
                      className="text-[#244D3F] bg-[#CBFADB] px-2 py-1 rounded-lg"
                    >
                      {tag}
                    </p>
                  );
                })}
              </div>
              <div>
                <p className="text-[#64748B] truncate">
                  {bio.split(" ").slice(0, 4).join(" ") +
                    (bio.split(" ").length > 4 ? "..." : "")}
                </p>
                <p className="text-[#64748B]">Preferred:{email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <button className="btn bg-white text-[#1F2937]">
            <HiBellSnooze />
            Snooze 2 weeks
          </button>
          <button className="btn bg-white text-[#1F2937]">
            {" "}
            <LuArchive />
            Archive
          </button>
          <button className="btn border-white text-red-400">
            <RiDeleteBin6Line />
            Delete
          </button>
        </div>
      </div>
      {/* right side */}
      <div className=" w-full md:w-[65%]  space-y-6 pt-4 pb-5 px-4">
        {/* first div */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white shadow-sm rounded-lg px-4 py-5 text-center space-y-2">
            <p className="text-[#244D3F] text-2xl font-semibold">
              {days_since_contact}
            </p>
            <span className="text-[#64748B]">Days Since Contact</span>
          </div>
          <div className="bg-white shadow-sm rounded-lg px-4 py-5 text-center space-y-2">
            <p className="text-[#244D3F] text-2xl font-semibold">{goal}</p>
            <span className="text-[#64748B]"> Goal (Days)</span>
          </div>
          <div className="bg-white shadow-sm rounded-lg px-4 py-5 text-center space-y-2">
            <p className="text-[#244D3F] text-2xl font-semibold">
              {next_due_date}
            </p>
            <span className="text-[#64748B]">Next Due</span>
          </div>
        </div>
        {/* middle div */}
        <div className="bg-white shadow-sm rounded-lg p-5 space-y-3">
          <div className="flex justify-between items-center ">
            <h2 className="text-[#1F2937] font-semibold">Relationship Goal</h2>
            <button className="btn">Edit</button>
          </div>
          <div>
            <p>
              <span className="text-[#64748B]">Connect every</span>{" "}
              <span className="text-[#1F2937] font-semibold">30 days</span>
            </p>
          </div>
        </div>
        {/* bottom div */}
        <div className="bg-white shadow-sm rounded-lg py-5 space-y-5">
          <div className="">
            <p className=" text-[#1F2937] px-5">Quick Check-In</p>
          </div>
          <div className="grid grid-cols-3 gap-4 px-6">
            <div
              onClick={() => handleThreeCard("call")}
              className="bg-gray-100 shadow-sm space-y-3 rounded-lg py-3 text-center cursor-pointer"
            >
              <img className="mx-auto w-7 h-7" src={Call} alt="call" />
              <p>Call</p>
            </div>
            <div
              onClick={() => handleThreeCard("text")}
              className="bg-gray-100 shadow-sm space-y-3 rounded-lg py-3 text-center cursor-pointer"
            >
              <img className="mx-auto w-7 h-7" src={Text} alt="text" />
              <p>Text</p>
            </div>
            <div
              onClick={() => handleThreeCard("video")}
              className="bg-gray-100 shadow-sm space-y-3 rounded-lg py-3 text-center cursor-pointer"
            >
              <img className="mx-auto w-7 h-7" src={Video} alt="video" />
              <p>Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
