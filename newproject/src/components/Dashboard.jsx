import "../style/Dashboard.css";

function Dashboard({ students }) {
  return (
    <table className="dashboard" width={"100%"}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Major</th>
          <th>University</th>
          <th>Average Grade</th>
        </tr>
      </thead>
      <tbody>
        {students.map((item, index) => (
          <tr className="student_row" key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.major}</td>
            <td>{item.university}</td>
            <td>{item.averageGrade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Dashboard;
