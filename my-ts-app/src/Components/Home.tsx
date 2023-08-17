import React, { useState } from "react";
import { Employee, dummyEmployeeList, PageEnum } from "./EmployeeDetails";
import EmployeeData from "./EmployeeData";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

const Home = () => {
  const [employeeData, setEmployeeData] = useState(
    dummyEmployeeList as Employee[]
  );

  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as Employee);

  const onAddEmployeeClickHan = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const addEmployee = (data: Employee) => {
    setEmployeeData([...employeeData, data]);
  };

  const deleteEmployee = (data: Employee) => {
    const indexToDelete = employeeData.indexOf(data);
    const tempList = [...employeeData];

    tempList.splice(indexToDelete, 1);
    setEmployeeData(tempList);
  };

  const EditEmployeeData = (data:Employee) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  }

  const updateData = (data: Employee) => {
        const filteredData = employeeData.filter((x) => x.id === data.id)[0];
        const indexOfRecord = employeeData.indexOf(filteredData);
        const tempData = [...employeeData];
        tempData[indexOfRecord] = data;
        setEmployeeData(tempData);
  };
  
  return (
    <>
      <article className="article-header">
        <header>
          <h1>React : Simple Crud Application</h1>
        </header>
      </article>

      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add employee"
              className="addButton"
              onClick={onAddEmployeeClickHan}
            />
            <EmployeeData list={employeeData} handleDelete={deleteEmployee} onEdit={EditEmployeeData}/>
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddEmployee
            onBackButtonClick={showListPage}
            handleSubmit={addEmployee}
          />
        )}

        {shownPage === PageEnum.edit && <EditEmployee data={dataToEdit} onBackButtonClick={showListPage} onUpdateClickHand={updateData}/>}
      </section>
    </>
  );
};

export default Home;
