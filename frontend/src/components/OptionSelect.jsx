import React from 'react'

const OptionSelect = () => {
  return (
    <section className="p-8">
    
    <div className="flex space-x-4">
        <select className="border border-gray-300 px-4 py-2 rounded-md w-full">
          <option>College name</option>
          <option>NIT Patna</option>
          <option>IIT Patna</option>
        </select>
        <select className="border border-gray-300 px-4 py-2 rounded-md w-full">
          <option>Department</option>
          <option>CSE</option>
          <option>Electronics</option>
          <option>Electric</option>
          <option>Machanical</option>
          <option>Civil</option>
        </select>
        <select className="border border-gray-300 px-4 py-2 rounded-md w-full">
          <option>Select Semester</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
        
        {/* <select className="border border-gray-300 px-4 py-2 rounded-md w-full">
          <option>Type of Resource</option>
        </select> */}
      </div>
    
  </section>
  )
}

export default OptionSelect