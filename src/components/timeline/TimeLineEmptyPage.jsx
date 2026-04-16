import { FiInbox } from "react-icons/fi";

const TimeLineEmptyPage = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center text-center bg-white shadow-lg rounded-xl p-12 space-y-5">
        <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-md">
          <FiInbox className="text-5xl text-gray-500" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Your Timeline is Empty
        </h2>

        <p className="text-sm text-gray-500 max-w-md leading-relaxed">
          Looks like you haven t interacted with any friends yet. Start texting,
          calling, or video chatting to see your activities appear here.
        </p>
      </div>
    </div>
  );
};

export default TimeLineEmptyPage;
