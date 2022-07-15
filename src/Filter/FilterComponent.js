import React from 'react'
import {employees} from '../Filter/data'
import {useLocation} from 'react-router-dom';


const FilterComponent = () => {
    const {state} =useLocation()
    const employee = employees
    console.log("hiii", state)

    // const employees = [
    //     {id: 1, name: 'Alice', country: 'Canada'},
    //     {id: 2, name: 'Bob', country: 'Belgium'},
    //     {id: 3, name: 'Carl', country: 'Canada'},
    //     {id: 4, name: 'Dean', country: 'Germany'},
    // ];

    const filtered = employee.filter(employee => {
        return employee.country === state.country;
    });
    
  return (
    <div>
        
      {filtered.map(employee => {
        return (
          <div key={employee.id}>
            <h2>name: {employee.name}</h2>
            <h2>country: {employee.country}</h2>

            <hr />
          </div>
        );
      })}
    </div>
  )
}

export default FilterComponent