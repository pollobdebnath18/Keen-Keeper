import { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContextProvider";

import TimeLineCart from "../../components/timeline/TimeLineCart";
import TimeLineEmptyPage from "../../components/timeline/TimeLineEmptyPage";

const TimeLine = () => {
  const { timeline } = useContext(FriendsContext);
  //   console.log(timeline);
  return (
    <div className="max-w-[1000px] mx-auto my-12">
      <div className="mb-5">
        <h2 className="text-3xl font-bold mx-10 md:mx-5 lg:mx-0">TimeLine</h2>
      </div>
      {timeline.length === 0 && <TimeLineEmptyPage></TimeLineEmptyPage>}
      <div>
        {timeline.map((actions, idx) => (
          <TimeLineCart key={idx} actions={actions}></TimeLineCart>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
