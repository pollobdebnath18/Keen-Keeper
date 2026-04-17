import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip, Cell } from "recharts";
import { FriendsContext } from "../../context/FriendsContextProvider";

const Stats = () => {
  const { timeline } = useContext(FriendsContext);

  const totalText = timeline.filter((i) => i.type === "text").length;
  const totalCall = timeline.filter((i) => i.type === "call").length;
  const totalVideo = timeline.filter((i) => i.type === "video").length;

  const isEmpty = totalText === 0 && totalCall === 0 && totalVideo === 0;

  const data = isEmpty
    ? [
        { name: "Text", value: 1, realValue: 0 },
        { name: "Call", value: 1, realValue: 0 },
        { name: "Video", value: 1, realValue: 0 },
      ]
    : [
        { name: "Text", value: totalText, realValue: totalText },
        { name: "Call", value: totalCall, realValue: totalCall },
        { name: "Video", value: totalVideo, realValue: totalVideo },
      ];

  const COLORS = ["#3B82F6", "#10B981", "#F59E0B"];

  return (
    <div className="max-w-[1000px] mx-auto">
      <div>
        <h2 className="text-4xl font-bold my-5">Friendship Analytics</h2>
      </div>
      <div className="flex flex-col justify-center items-center my-5 space-y-4 bg-gray-50 shadow-sm">
        <h2 className="self-start text-xl font-semibold  py-4 px-4">By Interaction Type</h2>
        <PieChart width={400} height={400}>
          
          <Pie
            data={data}
            dataKey="value"
            innerRadius="70%"
            outerRadius="100%"
            paddingAngle={5}
            cornerRadius={50}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          {/* Show real 0 values */}
          <Tooltip
            formatter={(value, name, props) => props.payload.realValue}
          />

          <Legend
            formatter={(value, entry, index) =>
              `${value} ${data[index].realValue}`
            }
          />
        </PieChart>

        {isEmpty && (
          <p className="text-gray-500 text-sm">No interactions yet</p>
        )}
      </div>
    
    </div>
  );
};

export default Stats;
