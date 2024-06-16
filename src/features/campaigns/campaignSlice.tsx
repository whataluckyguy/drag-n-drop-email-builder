import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Campaign {
  id: string;
  campaignName: string; // Replace any with the appropriate type
}

interface CampaignState {
  campaigns: Campaign[];
}

const initialState: CampaignState = {
  campaigns: [],
};

const campaignSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    addCampaign: (state, action: PayloadAction<any>) => {
      const campaign: Campaign = {
        id: action.payload.id,
        campaignName: action.payload.campaignName,
      };
      state.campaigns.push(campaign);
    },
  },
});

export const { addCampaign } = campaignSlice.actions;

export default campaignSlice.reducer;
