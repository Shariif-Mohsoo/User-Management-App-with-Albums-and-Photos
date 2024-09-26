// import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store/index";
import { useThunk } from "../hooks/use-thunk";
import Skeleton from "./Skeleton";
import Button from "./Button";
import UsersListItem from "./UsersListItem";
const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  const { data } = useSelector((state) => {
    return state.users;
  });
  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleClick = () => {
    doCreateUser();
  };

  let content;
  if (isLoadingUsers) content = <Skeleton className="h-10 w-full" times={6} />;
  else if (loadingUsersError) content = <div>Error Fetching Data....</div>;
  else {
    content = data?.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleClick} secondary>
          + Add User
        </Button>
        {creatingUserError && "Error Creating User....."}
      </div>
      {content}
    </div>
  );
};

export default UsersList;
