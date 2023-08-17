import React from "react";
import { useState } from "react";
import { Employee } from "./EmployeeDetails";
import EmployeeModel from "./EmployeeModel";

type Props = {
  list: Employee[];
  handleDelete: (data: Employee) => void;
  onEdit: (data: Employee) => void;
};

const EmployeeData = (props: Props) => {
  const { list, handleDelete, onEdit } = props;
  const [showModel, setShowModel] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as Employee | null);

  const viewEmployee = (data:Employee) => {
    setDataToShow(data);
    setShowModel(true);
  }

  const onCloseModel = () => {
    setShowModel(false);
  }

  return (
    <div>
      <article>
        <h3 className="list">Employee List</h3>
      </article>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {list.map((employee) => {
          console.log(employee);
          return (
            <tr key={employee.id}>
              <td>{`${employee.Firstname} ${employee.Lastname}`}</td>
              <td>{employee.email}</td>
              <td>
                <div>
                  <input type="button" value="View" onClick={()=>viewEmployee(employee)}/>
                  <input type="button" value="Edit" onClick={()=>onEdit(employee)}/>
                  <input type="button" value="Delete" onClick={() => handleDelete(employee)}/>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      {showModel && dataToShow !== null && (<EmployeeModel onClose={onCloseModel} data={dataToShow}/>)}
    </div>
  );
};

export default EmployeeData;
