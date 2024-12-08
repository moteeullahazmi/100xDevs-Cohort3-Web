import React from 'react'

const PetAdoptionForm = () => {
  return (
    <div>
    
      <form style={{backgroundColor: "#D0A888", margin:"20px 0px ", padding:"10px" }} >
        <label htmlFor=""> Pet Name</label>
        <input type="text" name="" id="" />

        <label htmlFor=""> Pet Type</label>
        <input type="text" name="" id="" />
        
        <label htmlFor=""> Breed</label>
        <input type="text" name="" id="" />

        <label htmlFor=""> Your Name</label>
        <input type="text" name="" id="" />
        
        <label htmlFor=""> Email</label>
        <input type="email" name="" id="" />
        
        <label htmlFor=""> Phone</label>
        <input type="number" name="" id="" />
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default PetAdoptionForm