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
        { name: "No Data", value: 1 },
      ]
    : [
        { name: "Text", value: totalText },
        { name: "Call", value: totalCall },
        { name: "Video", value: totalVideo },
      ];

  const COLORS = isEmpty
    ? ["#E5E7EB"] 
    : ["#3B82F6", "#10B981", "#F59E0B"];

  return (
    <div className="flex flex-col justify-center items-center my-5 space-y-4">
      
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

        <Tooltip />
        <Legend />
      </PieChart>

      {isEmpty && (
        <p className="text-gray-500 text-sm">
          No interactions yet
        </p>
      )}

    </div>
  );
};

export default Stats;