import { useParams } from "react-router-dom";
import { getUsers } from "../data/users";

const User = () => {
  const params = useParams();
  const users = getUsers();
  const selectedUser = users.find(
    (user) => params.userID === user.id.toString()
  );

  const name = selectedUser ? selectedUser.name : "(forgot my name)";
  const picture = selectedUser ? selectedUser.emoji : "🤔";

  return <h2>{`Hi, I'm ${name} ${picture} I came from the future!`}</h2>;
};
export default User;
