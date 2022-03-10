import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Index = () => {


  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <div className="d-flex justify-content-between">
                    <h3 className="mb-3">Front End Application</h3>
                  </div>
                  <br />
                  <ul className="list-group mb-0">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/todos">Todos</Link>
                    </li>
                    <li>
                      <Link to="/users">Users</Link>
                    </li>
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
