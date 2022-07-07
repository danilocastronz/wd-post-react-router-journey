import { Link } from "react-router-dom";

import { getUsers, User } from "../data/users";

const Home = () => {
  const users = getUsers();

  return (
    <>
      <h2>Who are you, traveler? 🛸</h2>
      <p>My name is:</p>
      {users.map((user: User) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          {user.name}
        </Link>
      ))}
      <p>and I come in peace 🖖</p>
    </>
  );
};
export default Home;
