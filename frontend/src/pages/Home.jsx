import Card from "../components/Card";
import { employees } from "../data";

const Home = () => {
  return (
    <div className="home">
      {employees.map((employee) => (
        <Card key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default Home;
