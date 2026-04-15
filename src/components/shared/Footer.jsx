import React from "react";
import Insta from "../../assets/instagram.png";
import Fb from "../../assets/facebook.png";
import Twiter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] mt-10 py-10">
      <div className="max-w-[1000px] mx-auto text-white space-y-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold pb-2 ">KeenKeeper</h2>
          <p className="text-sm font-normal mx-4 md:mx-0">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold">Social Links</h4>
          <div className="flex justify-center items-center gap-4 py-2 ">
            <img className="w-8 h-8" src={Insta} alt="insta-icon" />
            <img className="w-8 h-8" src={Fb} alt="fb-icon" />
            <img className="w-8 h-8" src={Twiter} alt="twitter-icon" />
          </div>
        </div>
        <div className="border-t mx-4 md:mx-2 lg:mx-0 pt-6  flex flex-col md:flex-row justify-between items-center opacity-50">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex justify-center items-center gap-4">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies</p>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
