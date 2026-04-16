import React from "react";
import useFriends from "../../hooks/useFriends";
import FriendCard from "../../components/friend/FriendCard";
import { FadeLoader } from "react-spinners";

const AllFriends = () => {
  const { friends, loading } = useFriends();
  //    console.log(friends,loading);
  return (
    <div className="max-w-[1000px] mx-auto">
      {loading ? (
        <div className="flex justify-center items-center">
          <FadeLoader />
        </div>
      ) : (
        <div>
          <div>
            <h2 className="text-lg font-semibold">Your Friends</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend}></FriendCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllFriends;
