import React, { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import users from "../../services/Users";

const initialForm = {
  description: "",
  title: "",
  complete: false,
};

const Index = () => {
  const [usersData, setUsersData] = useState({});
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      title: e.target.value,
    });
  };

  const handleNewUser = async (e) => {
    e.preventDefault();

    await users.create(form);
    getTasks();
    setForm(initialForm);
  };

  const getTasks = async () => {
    const res = await users.all();
    setUsersData(res.data);
  };

  useEffect(()=>{
    getTasks();
  }, [])

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <div className="d-flex justify-content-between">
                    <h3 className="mb-3">Create User</h3>
                  </div>
                  <br />

                  <Form
                    handleChange={handleChange}
                    handleNewUser={handleNewUser}
                    form={form}
                  />
                  <br />
                  <div className="d-flex justify-content-between">
                    <h3 className="mb-3">Users List</h3>
                  </div>
                  
                  <ul className="list-group mb-0">
                    {usersData != null && usersData.length > 0
                      ? usersData.map((user) => (
                          <List
                            user={user}
                          />
                        ))
                      : usersData != null
                      ? "No hay tareas"
                      : "Problemas de conexión"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
