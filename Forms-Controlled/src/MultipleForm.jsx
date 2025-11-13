import React from "react";
import { useState} from "react";

const MultipleForm = () => {
//   const [formData, setFromData] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });
  const [isChecked , setIsChecked] = useState(false)
  const [selectoption,setSelectOption] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isChecked){
        alert("Please check the box")
        return
    }
    if(selectoption == ""){
        alert("Please Select an option")
        return
    }
    console.log(isChecked);
    console.log(selectoption);

  };
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFromData((prevData) => ({ ...prevData, [name]: value }));
//   };
  const handleCheckboxChange = (e)=>{
    setIsChecked(e.target.checked)
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* <input
        type="text"
        name="username"
        placeholder="Enter username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        placeholder="Enter PassWord"
        value={formData.password}
        onChange={handleChange}
      /> */}
      <label>CheckBox</label>
      <input type="checkbox" checked={isChecked}
        onChange={handleCheckboxChange}
       />
       <select value={selectoption} onChange={(e)=> setSelectOption(e.target.value)}>
        <option value="">Select Option</option>
        <option value="option 1">Option 1</option>
        <option value="option 2">Option 2</option>
       </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MultipleForm;
