import React, { ChangeEvent, useState } from "react";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submit, setSubmit] = useState<Array<({firstname: string, lastname: string, email: string, phone: string})>>([]);
  


  const handleFirstname = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
    console.log(firstname);
  };

  const handleLastname = (e: ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
    console.log(lastname);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handlePhoneno = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    console.log(phone);
  };
 const handleSubmit = () => {
   const data = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone
   };
   setSubmit([...submit, data]);
    setFirstname("");
    setLastname("");
    setEmail("");
    setPhone("");
  };
  
 const handleReset = () => {
    setFirstname(""); 
    setLastname("");
    setEmail("");
    setPhone("");
  };

  const handleDelete = (index: number) => {
        const deletedData = ([...submit]);
        deletedData.splice(index,1);
        setSubmit(deletedData);
  }

  return (
    <div className="main">
      <div>
        <form className="form">
          <div>
            <label>First name :</label>
            <input type="text" value={firstname} onChange={handleFirstname} />
          </div>
          <br />
          <div>
            <label>Last name :</label>
            <input type="text" value={lastname} onChange={handleLastname} />
          </div>
          <br />
          <div>
            <label>Email Add :</label>
            <input type="text" value={email} onChange={handleEmail} />
          </div>
          <br />
          <div>
            <label>Phone No :</label>
            <input type="text" value={phone} onChange={handlePhoneno} />
          </div>
          <br />
          <div>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
      <div>
        <table>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone no</th>
            <th>Action</th>
          </tr>
          {submit.map((item,index) => (
            <tr key={index}>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
          </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Form;
