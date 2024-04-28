import react, { useState } from "react";
import './App.css';

export default function DisplayName() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [formError, setFormError] = useState('');


  
  const handleSubmit = (event) => {

    event.preventDefault();

    if(firstName.trim() !== '' && lastName.trim() !== '') {

      setFullName(`Full Name: ${firstName} ${lastName}`);
      setFormError('');
    }

    else {
      setFullName('');
      setFormError('Please fill out this field');
    }

  };




  return (
    <div className="display">
      
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>

        <div className="firstName">

          <label htmlFor="firstName">First Name: </label>
          <input type="text" name="firstName" id="firstName" value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

        </div>

        <div className="lastName">

          <label htmlFor="lastName">Last Name: </label>
          <input type="text" name="lastName" id="lastName" value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

        </div>

        <button type="submit" className="submit"> Submit </button>

        {formError && (
          <div>{formError}</div>
        )}

      </form>



      {fullName && (
        <div>{fullName}</div>
      )}



    </div>
  );
}
