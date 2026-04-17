import { useContext, useState } from "react";
import { FriendsContext } from "../../context/FriendsContextProvider";
import TimeLineCart from "../../components/timeline/TimeLineCart";
import TimeLineEmptyPage from "../../components/timeline/TimeLineEmptyPage";

const TimeLine = () => {
  const { timeline } = useContext(FriendsContext);
  const [filterType, setFilterType] = useState("all");
  const [sortType, setSortType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filterTimeLine = [...timeline]
    .filter((item) => {
      if (filterType === "all") {
        return true;
      } else return item.type === filterType;
    })
    // .sort((a, b) => {
    //   if (sortType === "new") {
    //     return new Date(b.date) - new Date(a.date);
    //   } else {
    //     return new Date(a.date) - new Date(b.date);
    //   }
    // })
    .sort((a, b) => {
      if (a.type === sortType) return -1;
      else if (b.type === sortType) return 1;
      else return 0;
    })
    .filter((searchItem) => {
      return searchItem.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

  //   console.log(timeline);
  return (
    <div className="max-w-[1000px] mx-auto my-12">
      <div className="mb-5">
        <h2 className="text-3xl font-bold mx-10 md:mx-5 lg:mx-0">TimeLine</h2>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <select
            className="select select-primary w-[200px]"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Timeline</option>
            <option value="text">Text</option>
            <option value="call">Call</option>
            <option value="video">Video</option>
          </select>
        </div>
        <div className="flex justify-between items-center gap-5">
          {/* sort functionality */}
          <div className="w-[150px]">
            <select
              className="select select-primary "
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option className="text-gray-400" >Sort by Item</option>
              {/* <option value="new">Newest</option>
              <option value="old">Oldest</option> */}
              <option value="text">Text</option>
              <option value="call">Call</option>
              <option value="video">Video</option>
            </select>
          </div>
          {/* search functionality */}
          <div className="w-[150px]">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                type="search"
                value={searchQuery}
                placeholder="search friend"
              />
            </label>
          </div>
        </div>
      </div>
      {timeline.length === 0 && <TimeLineEmptyPage></TimeLineEmptyPage>}
      <div>
        {filterTimeLine.map((actions, idx) => (
          <TimeLineCart key={idx} actions={actions}></TimeLineCart>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
