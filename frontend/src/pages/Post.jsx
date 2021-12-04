import { useLocation } from "react-router";
import { employees } from "../data";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; // link /employee/id is a 2nd index position
  const employee = employees.find((e) => e.id.toString() === path);
  return (
    <div className="post">
      <img src={employee.picture} alt="" className="posting" />
      <h1 className="postTitle">{employee.firstName}</h1>
      <p className="postDesc">{employee.desc}</p>
      <p className="postPhone">{employee.phone}</p>
    </div>
  );
};

export default Post;
