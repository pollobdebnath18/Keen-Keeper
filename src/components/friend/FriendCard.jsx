import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  //   console.log(friend);
  return (
    <div className="max-w-[1000px] mx-auto">
      <Link to={`/allfriends/${friend.id}`} className="card bg-base-100  shadow-lg ">
        <figure className="px-10 pt-5">
          <img
            src={friend.picture}
            alt="friend-img"
            className="rounded-full w-[100px] h-[100px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{friend.name}</h2>
          <p>{friend.days_since_contact}d ago</p>
          <div className="flex justify-center items-center gap-2">
            {friend.tags.map((tag, idx) => {
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
            {
              <p
                className={`px-2 py-1 text-white  rounded-2xl
                ${friend.status === "overdue" ? "bg-[#EF4444]" : `${friend.status === "on-track" ? "bg-[#244D3F]" : "bg-[#EFAD44]"}`}`}
              >
                {friend.status}
              </p>
            }
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FriendCard;
