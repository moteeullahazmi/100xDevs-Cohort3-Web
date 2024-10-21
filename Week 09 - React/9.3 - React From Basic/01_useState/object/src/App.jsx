import React from 'react'
import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });
    function firstNameChange(e){
      setForm({...form,
        firstName:e.target.value
    })
    }

    function lastNameChange(e) {
      setForm({ ...form, lastName: e.target.value });
    }

    

    function emailChange(e) {
      setForm({ ...form, email: e.target.value });
    }
  
  return (
    <>
      <p>First Name:</p>
      <input value={form.firstName} type="text" onChange={firstNameChange} />

      <p>Last Name:</p>
      <input value={form.lastName} type="text" onChange={lastNameChange} />
      
      <p>email:</p> <input value={form.email} onChange={emailChange} type="text"></input>
      <h1>{form.firstName} {form.lastName} {form.email}</h1>
    </>
  );
}

export default App