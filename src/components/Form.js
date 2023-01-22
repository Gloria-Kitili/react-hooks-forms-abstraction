import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName : "John",
    lastName: "Henry",
  });

 /* function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }*/

  function handleChange (event){
    const name = event.target.name;
    const value = event.target.value;

    if (event.target.type === "checkbox"){
      value = event.target.checked;
    }
    setFormData({
      ...FormData,[name]:value,
    })
  }
  function handleSubmit(event){
    event.preventDefault();
    console.log (formData)
  }

  return (
    <div>
    <form onSubmit = {handleSubmit}>
      
      <input type="text" name = "firstName" 
      onChange = {handleChange}
       value={formData.lastName}/>
      
      <input type="text" name = "lastName"
       onChange={handleLastNameChange} 
       value={formData.lastName} />
      
      <input type="text" name = "admin"
       onChange={handleChange} 
       checked={formData.admin} />
      

      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Form;
