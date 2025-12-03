function AddStudents({ students, setStudents }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const studentData = {
      name: formData.get("name"),
      age: formData.get("age"),
      major: formData.get("major"),
      university: formData.get("university"),
      averageGrade: formData.get("averageGrade"),
    };
    setStudents([...students, studentData]);
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <input id="name" name="name" />
        <input id="age" name="age" />
        <input id="major" name="major" />
        <input id="university" name="university" />
        <input id="average-grade" name="averageGrade" />

        <button className="add-student" type="submit">
          Add student
        </button>
      </form>
    </div>
  );
}

export default AddStudents;