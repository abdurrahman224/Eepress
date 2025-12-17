import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const age = from.age.value;

    const newUser = { name, email, age };

    console.log(newUser);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser)



       
    })
     .then((res) => res.json())
        .then((data) => {
          const newUsers = [...users, data];
          setUsers(newUsers);
          from.reset();
        })
  };

  return (
    <>
      <div>
        <h1>Users Managment System</h1>
        <h3>Total Users: {users.length}</h3>

        <form onSubmit={handleSubmit}>
          <input type="name" name="name" id="name" placeholder="name" /><br/>
          <input type="email" name="email" id="email" placeholder="email" /> <br/>
          <input type="age" name="age" id="age" placeholder="age" /> <br/>
          <input type="submit" value="Add User" />
        </form>

        {users.map((user) => (
          <p key={user.id}>
            {user.id} :{user.name} : {user.email} : {user.age}{" "}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
