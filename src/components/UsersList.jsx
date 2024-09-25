// import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/index";
const UsersList = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  if (isLoading) return <div>Loading.....</div>;
  if (error) return <div>Error Fetching Data....</div>;

  return <div>{data.length}</div>;
};

export default UsersList;
