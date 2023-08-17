import React from "react";
import { Employee } from "./EmployeeDetails";
import { useState } from "react";

type Props = {
  data: Employee;
  onBackButtonClick: () => void;
  onUpdateClickHand: (data: Employee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, onBackButtonClick, onUpdateClickHand} = props;

  const [firstname, setFirstname] = useState(data.Firstname);
  const [lastname, setLastname] = useState(data.Lastname);
  const [email, setEmail] = useState(data.email);


  const handleChangeFirstname = (e: any) => {
    setFirstname(e.target.value);
  };

  const handleChangeLastname = (e: any) => {
    setLastname(e.target.value);
  };

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleBtnSubmit = (e: any) => {
    e.preventDefault();
    const updateData: Employee = {
      id: data.id,
      Firstname: firstname,
      Lastname: lastname,
      email: email,
    };
    onUpdateClickHand(updateData)
    onBackButtonClick();
  };

  return (
    <div className="form">
      <div>
        <h3>Add Employee Form </h3>
      </div>
      <form onSubmit={handleBtnSubmit}>
        <div>
          <label>First name : </label>
          <input
            type="text"
            value={firstname}
            onChange={handleChangeFirstname}
          />
        </div>
        <div>
          <label>Last name : </label>
          <input type="text" value={lastname} onChange={handleChangeLastname} />
        </div>
        <div>
          <label>Email Add: </label>
          <input type="text" value={email} onChange={handleChangeEmail} />
        </div>
        <br></br>
        <div>
          <input type="button" value="Back" onClick={onBackButtonClick} />
          <input
            type="button"
            value="Update Employee"
            onClick={handleBtnSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
