import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center   bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <div className="flex-1 py-4 w-[100%] h-full rounded-2xl bg-[#1E1E1E] text-center">
        <sapn className="text-[#569CD6]">{"<h1"} </sapn> <span className="text-[#9CDCFE]">className</span>
        <span className="text-[#D4D4D4]">=</span><span className="text-[#CE9178]">"</span>
        <span className="text-[#CE9178]">text-bold</span><span className="text-[#CE9178]">"</span>
        <sapn className="text-[#569CD6]">{">"}</sapn> <span className="text-[#D4D4D4]">scroll down</span>
        <sapn className="text-[#569CD6]">{"</h1>"}</sapn>
      </div>
    </div>
  );
};

export default Notification;