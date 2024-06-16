import Builder from "./Components/Builder";
import { useDispatch, useSelector } from "react-redux";
import { addCampaign } from "./features/campaigns/campaignSlice";
import { RootState } from "./store/Store";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import GradualAnimation from "./GradualAnimation";

function App() {
  const [currentCampaignId, setCurrentCampaignId] = useState<string>("");

  const dispatch = useDispatch();

  const addCampHandler = () => {
    const newID = nanoid();
    dispatch(addCampaign({ id: newID, campaignName: "Camp" }));
    setCurrentCampaignId(newID);
  };

  const camps = useSelector((state: RootState) => state.campaigns);
  console.log(camps);

  return (
    <div className="app h-screen">
      <div className="navbar w-full flex flex-row " style={{ height: "7%" }}>
        <button
          className="hover:cursor-pointer m-3 p-2 shadow-md hover:bg-slate-400 rounded-xl transition duration-300 transform hover:scale-110"
          onClick={addCampHandler}
        >
          New Campaign
        </button>
      </div>
      {currentCampaignId ? (
        <Builder />
      ) : (
        <div
          className="w-full bg-blue-50 grid place-items-center"
          style={{ height: "93%" }}
        >
          <GradualAnimation text="Create new campaign to get started!" />
        </div>
      )}
    </div>
  );
}

export default App;
