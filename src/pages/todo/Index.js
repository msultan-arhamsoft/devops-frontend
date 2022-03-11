import React, { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import tasks from "../../services/Tasks";

const initialForm = {
  description: "",
  title: "",
  complete: false,
};

const Index = () => {
  const [tasksData, setTasksData] = useState({});
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      title: e.target.value,
    });
  };

  const handleNewTask = async (e) => {
    e.preventDefault();

    await tasks.create(form);
    getTasks();
    setForm(initialForm);
  };

  const getTasks = async () => {
    const res = await tasks.all();
    setTasksData(res.data);
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
                    <h3 className="mb-3">Create Todo</h3>
                  </div>
                  <br />

                  <Form
                    handleChange={handleChange}
                    handleNewTask={handleNewTask}
                    form={form}
                  />
                  <br />
                  <div className="d-flex justify-content-between">
                    <h3 className="mb-3">Todo List</h3>
                  </div>
                  <ul className="list-group mb-0">
                    {tasksData != null && tasksData.length > 0
                      ? tasksData.map((el, index) => (
                          <List
                            key={index}
                            description={el.description}
                          />
                        ))
                      : tasksData != null
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
