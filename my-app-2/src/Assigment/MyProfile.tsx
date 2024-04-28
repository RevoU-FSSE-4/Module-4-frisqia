import { useNavigate } from "react-router-dom";

function MyProfile() {
  const navigate = useNavigate();
  const handleLogOut = async () => {};
  return (
    <>
      <h1>My email:</h1>
      <h1>My Password:</h1>
      <button onClick={handleLogOut}>Logout</button>
    </>
  );
}
export default MyProfile;
