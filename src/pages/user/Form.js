import React from "react";

const Form = ({ handleNewUser, handleChange, form }) => {
  return (
    <>
      <form
        className="d-flex justify-content-center align-items-start mb-2"
        onSubmit={handleNewUser}
      >
        <div className="form-outline flex-fill">
          <label className="form-label" htmlFor="form1">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
            className="form-control form-control-lg"
          />
          <br/>
          <label className="form-label" htmlFor="form1">
            Email
          </label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={form.email}
            className="form-control form-control-lg"
          />
          <br/>
          <label className="form-label" htmlFor="form1">
            Age
          </label>
          <input
            type="text"
            name="age"
            onChange={handleChange}
            value={form.age}
            className="form-control form-control-lg"
          />
          <br/>
          <button type="submit" className="btn btn-primary btn-lg">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
