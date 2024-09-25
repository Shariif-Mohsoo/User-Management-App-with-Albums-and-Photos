import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const { data } = await axios.get("http://localhost:3005/users");
  // console.log(data);
  //DEV ONLY
  await pause(1000);
  return data;
});
//DEV ONLY
const pause = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
