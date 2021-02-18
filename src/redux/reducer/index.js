import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // 進行中list
  comList: [],
  // 已完成list
  proList: [],
};

const listSlice = createSlice({
  name: "listSlice",
  initialState,
  reducers: {
    initList: (state, action) => {
      state.proList = [];
      state.comList = [];
      action.payload.map((item) => {
        if (item.status.code === 1 || item.status.code === 2) {
          state.proList.push(item);
        } else {
          state.comList.push(item);
        }
      });
      // 排序
      state.proList.sort(
        (a, b) => Date.parse(b.date).valueOf() - Date.parse(a.date).valueOf()
      );
      state.comList.sort(
        (a, b) => Date.parse(b.date).valueOf() - Date.parse(a.date).valueOf()
      );
    },
  },
});

export const { initList } = listSlice.actions;
export const prolist = (state) => state.proList;
export const comlist = (state) => state.comList;
export default listSlice.reducer;
