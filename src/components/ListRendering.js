import React from 'react'
import ListRendering2 from './ListRendering2'


function ListRendering() {
    const names=['anu','mandu','kunju','sfq']
    const friends=['anu','mandu','kunju','sfq','anu']
    const nameList = names.map(name =><h2 key={name}>{name}</h2>)
    const persons=[
        {
            id:1,
            name:'anu',
            age:22,
            skill:'java'
        },
        {
            id:2,
            name:'sfq',
            age:24,
            skill:'vue'
        },
        {
            id:3,
            name:'mandu',
            age:24,
            skill:'snowflake'
        }
    ]
    // const personList = persons.map(person =><h4>I am {person.name},  i am {person.age} year old, i have skilled in {person.skill}</h4>)
    const personList = persons.map(person =><ListRendering2 key={person.id} person={person}/>)
    const friendsList = friends.map((friend,index) =><h4 key={index}>{index} {friend}</h4>)
    return (
        // <div>
        //     <h4>{names[0]}</h4>
        //     <h4>{names[1]}</h4>
        //     <h4>{names[2]}</h4>
        //     <h4>{names[3]}</h4>
        // </div>

        //#####  eganneyum cheyyaaam

        // <div>
        //     {
        //         names.map(name =><h4>{name}</h4>)                                //map method take function as argument
        //     }
        // </div>

        // allekil eganneyum
        
        <div>
            {nameList}
            {personList}
            {friendsList}
        </div>
    )
}

export default ListRendering
