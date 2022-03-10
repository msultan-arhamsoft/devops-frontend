import React from "react";

const Form = ({ handleNewTask, handleChange, form }) => {
  return (
    <>
      <form
        className="d-flex justify-content-center align-items-start mb-2"
        onSubmit={handleNewTask}
      >
        <div className="form-outline flex-fill">
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={form.description}
            className="form-control form-control-lg"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg ms-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
