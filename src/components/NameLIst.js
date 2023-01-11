import React from 'react'
import Person from './Person';
export const NameList = () => {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'CLark',
            age: 35,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 50,
            skill: 'Vue'
        }
    ];
    // const names = ['Bruce', 'David', 'bode'];
    // const nameList = names.map((name)=><h2>{name}</h2>)
    const personList = persons.map((persons)=> (<Person persons={persons}></Person>)) 
  return (
    <div>
        {personList}
    </div>
  )
}
