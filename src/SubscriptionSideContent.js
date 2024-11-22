import React from "react";
import netflix from "./netflix.png";
import amazon from "./amazon.png";
import youtube from "./youtube.png";
import spotify from "./spotify.png";
import apple from "./apple.png";

const SubscriptionSideContent = () => {
  return (
    <section className="subscribe-plans-section">
      <div className="">
        <h1 className="font-bold text-2xl">Subscription Plans</h1>
      </div>
      <ul className="grid grid-cols-3 gap-5">
        <li className="">
          <div className="flex gap-2 items-center">
            <img src={netflix} alt="" className="" />
            <h3 className="font-bold text-xl">Netflix</h3>{" "}
          </div>
          <div className="flex gap-1 items-center">
            <h1>$23</h1> <span>/ Per Month</span>
          </div>
        </li>

        <li className="">
          <div className="flex gap-2 items-center">
            <img src={amazon} alt="" className="" />
            <h3 className="font-bold text-xl">Amazon</h3>{" "}
          </div>
          <div className="flex gap-1 items-center">
            <h1>$23</h1> <span>/ Per Month</span>
          </div>
        </li>

        <li className="">
          <div className="flex gap-2 items-center">
            <img src={youtube} alt="" className="" />
            <h3 className="font-bold text-xl">Youtube</h3>{" "}
          </div>
          <div className="flex gap-1 items-center">
            <h1>$23</h1> <span>/ Per Month</span>
          </div>
        </li>

        <li className="">
          <div className="flex gap-2 items-center">
            <img src={spotify} alt="" className="" />
            <h3 className="font-bold text-xl">Spotify</h3>{" "}
          </div>
          <div className="flex gap-1 items-center">
            <h1>$23</h1> <span>/ Per Month</span>
          </div>
        </li>

        <li className="">
          <div className="flex gap-2 items-center">
            <img src={apple} alt="" className="" />
            <h3 className="font-bold text-xl">Apple</h3>{" "}
          </div>
          <div className="flex gap-1 items-center">
            <h1>$23</h1> <span>/ Per Month</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default SubscriptionSideContent;
