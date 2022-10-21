import React, { useState } from 'react'
import { Button, Input } from '../component/Input';

const Home = () => {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);
  
    let add = () => {
      if (!text) {
        alert("Text is Required")      
        return;
        
      }
      setList([...list, text]);
      setText(' ');
      // console.log(list)
      
    };
  
    let del = (i) =>{
      const newList = list.filter((element,index)=> index!==i)
    //   console.log(newList)
    setList(newList)
    }
  
    let edit = (i) => {
      let a = prompt("Enter Text" , list[i])
      list[i] = a;
      setList([...list])
    }
  return (
    <>
    <div className="App">
      <div className='nam'>
      <h1>Todo App</h1>
      <div className="inp">
    
        <Input
          lable="Add Task"
          // type="text"
          className='input'
         
          onChange={(e) => setText(e.target.value)} value={text}/>
         
        
        <Button className='button' onClick={add}  lable="Add Task"/>
      </div>
      <div className="list">
        <ul>
          {list.map((e, i) => {
            return <li  key={i}> <span className='li'>{e}</span> 
            <Button className='button' onClick={()=> edit(i)} lable="Edit"/>
            <Button className='button' onClick={()=>del(i)} lable="Delete"/>
            </li>
          })}
        </ul>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home