import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <>
      <h2>This is the Users page!</h2>
      <Outlet />
    </>
  );
};

export default Users;
