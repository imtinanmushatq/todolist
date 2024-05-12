import { useState } from 'react';
import ToDoLists from './todoslist';



import './App.css'
import React from 'react'



  const App = () =>{
    const[inputList,setInputList] = useState("");
    const [items,setItems] = useState([]);;

   const itemEvent = (event) =>{
    setInputList(event.target.value)
   }
   
   const listOfItems = () =>{
      setItems((oldItems) =>{
        return [...oldItems, inputList];
      });
   };
 
  return (
    <>
      <div className='main_div'>
       <div className='center_div'>
        <br />
        <h1>    Todo list</h1>
        <br />
        <input type='text' placeholder='Add a items' 
        value={inputList}
        onChange={itemEvent}></input>
        <button onClick={listOfItems}> + </button>

        <ol>
          {/* <li>{inputList}</li> */}
         { items.map( (itemVal) =>{
            return<ToDoLists  Text = {itemVal}/>
          } )}
        </ol>

        </div>        
      </div>
    </>
  )
}

export default App
