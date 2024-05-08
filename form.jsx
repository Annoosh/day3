import React from 'react';
import '../Components/style.css';
import { useNavigate } from 'react-router-dom';

function CourseRegistrationForm() {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.elements.name.value.trim();
    const email = e.target.elements.email.value.trim();
    const gender = e.target.elements.gender.value;
    const address = e.target.elements.address.value.trim();
    // const navigate = useNavigate();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === "") {
      alert("Please enter your name.");
      return;
    } 
    if (email === "") {
      alert("Please enter your email address.");
      return;
    } 
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (address === "") {
      alert("Please enter your address.");
      return;
    } 
    if (gender === "") {
      alert("Please enter your gender");
      return;
    } 

    alert("Your application will be processed");  
    navigate('/home');

    e.target.reset();
  };

  return (
    <div className="form-group">
      <h1>Course Registration</h1>
      <form className="box" onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" />
        </div>
        <br />
        <div className="e-mail">
          <label htmlFor="email">E-mail: </label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="gender">
          <p>Gender</p>
          <input type="radio" id="male" name="gender" value="Male" />
          <label htmlFor="male">Male</label><br />
          <input type="radio" id="female" name="gender" value="Female" />
          <label htmlFor="female">Female</label><br />
        </div>
        <p className="address">Address</p>
        <textarea id="address" name="address" rows="4" cols="25" placeholder="write your address"></textarea>

        <div className="course">
          <p>Course</p>
          <input type="checkbox" id="html" name="courses" value="HTML" />
          <label htmlFor="html">HTML</label>
        </div>
        <div>
          <input type="checkbox" id="css" name="courses" value="CSS" />
          <label htmlFor="css">CSS</label>
        </div>
        <div>
          <input type="checkbox" id="javascript" name="courses" value="JavaScript" />
          <label htmlFor="javascript">JavaScript</label>
        </div>
        <div>
          <input type="checkbox" id="react" name="courses" value="React" />
          <label htmlFor="react">React</label>
        </div>
        <div>
          <label htmlFor="center">Centers</label>
          <select name="center" id="centers">
            <option value="chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div align="center">
          <input type="submit" className="btn btn-success" value="Register" />
        </div>
         
      </form>
    </div>
  );
}

export default CourseRegistrationForm;
