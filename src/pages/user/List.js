import React from "react";

const List = ({ user }) => {
  return (
    <div>
      <li className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
        <div className="d-flex align-items-center">
          Name: {user.name}
          <br/>
          Email: {user.email}
          <br/>
          Age: {user.age}
        </div>
      </li>
    </div>
  );
};

export default List;
