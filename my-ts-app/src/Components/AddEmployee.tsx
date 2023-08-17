import React, { useState } from "react";
import { Employee } from "./EmployeeDetails";

type Props = {
  onBackButtonClick : () => void;
  handleSubmit : (data: Employee) => void;
};


const AddEmployee = (props: Props) => {

const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [email, setEmail] = useState("");

  const { onBackButtonClick, handleSubmit} = props;

  const handleChangeFirstname = (e:any) => {
        setFirstname(e.target.value);
  }

const handleChangeLastname = (e:any) => {
        setLastname(e.target.value);
}

const handleChangeEmail = (e:any) =>{
        setEmail(e.target.value);
}

const handleBtnSubmit = (e:any) => {
  e.preventDefault();
  const data: Employee = {
    id: new Date().toJSON().toString(),
       Firstname:firstname,
       Lastname:lastname,
       email:email
  }
  handleSubmit(data);
  onBackButtonClick();
}

  return (
    <div className="form">
      <div>
        <h3>Add Employee Form </h3>
      </div>
      <form onSubmit={handleBtnSubmit}>
        <div>
          <label>First name : </label>
          <input type="text" value={firstname} onChange={handleChangeFirstname}/>
        </div>
        <div>
          <label>Last name : </label>
          <input type="text" value={lastname} onChange={handleChangeLastname} />
        </div>
        <div>
          <label>Email Add: </label>
          <input type="text" value={email} onChange={handleChangeEmail}/>
        </div><br></br>
        <div>
          <input type="button" value='Back' onClick={onBackButtonClick } />
          <input type="button" value='Add Employee details' onClick={handleBtnSubmit}/>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
