import React from "react";

const FriendDetailsCart = ({details}) => {
  return (
    <div className=" bg-gray-200">
      <div className="card bg-base-100  shadow-lg ">
        <figure className="px-10 pt-3">
          <img
            src={details.picture}
            alt="friend-img"
            className="rounded-full w-[80px] h-[80px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{details.name}</h2>
          <div>
            {
              <p
                className={`px-2 py-1 text-white  rounded-2xl
                        ${details.status === "overdue" ? "bg-[#EF4444]" : `${details.status === "on-track" ? "bg-[#244D3F]" : "bg-[#EFAD44]"}`}`}
              >
                {details.status}
              </p>
            }
          </div>

          <div className="flex justify-center items-center gap-2">
            {details.tags.map((tag, idx) => {
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
              {details.bio.split(" ").slice(0, 4).join(" ") +
                (details.bio.split(" ").length > 4 ? "..." : "")}
            </p>
            <p className="text-[#64748B]">Preferred:{details.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsCart;
