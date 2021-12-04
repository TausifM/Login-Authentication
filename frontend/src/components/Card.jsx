import { Link } from "react-router-dom";

const Card = ({ employee }) => {
  return (
    <div className="card">
      <Link className="link" to={`/employee/${employee.id}`}>
        <span className="title">{employee.firstName}</span>
        <span className="title">{employee.lastName}</span>
        <img src={employee.picture} alt="" className="img" />
        <p className="desc">{employee.desc}</p>
        <button className="cardButton">Read More</button>
      </Link>
    </div>
  );
};

export default Card;
