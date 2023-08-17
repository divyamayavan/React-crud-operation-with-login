import React from 'react';
import { Employee } from './EmployeeDetails';

type Props = {
    onClose: () => void;
    data: Employee;
}

const EmployeeModel = (props: Props) => {

const { onClose, data} = props;

  return (
    <div id="myModal" className="modal">

  <div className="modal-content">
    <span className="close" onClick={onClose}>&times;</span>
    <div>
        <h3>Employee Data</h3>
    </div>
    <div>
        <div>
            <label>First Name : {data.Firstname}</label>
        </div>
        <div>
            <label>Last Name : {data.Lastname}</label>
        </div>
        <div>
            <label>Email Add : {data.email}</label>
        </div>
    </div>
  </div>

</div>

  )
}

export default EmployeeModel;
