import React from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import deleteTodo from './actionDelete'
import completeTodo from './actionComplete'
import './App.css'

function Element({todo}) {
    
    const dispatch = useDispatch()
    const handleDelete = ()=> {
    dispatch(deleteTodo(todo))
  }
  const handleComplete = () => {
    dispatch(completeTodo(todo))
  }
  
    return (
        <Button 
        className={todo.completed ? 'line-through':''}
        key={Math.random * 10}
        rightIcon={<AiOutlineClose onClick={handleDelete} />}
        leftIcon={ <AiOutlineCheck onClick={handleComplete} />} 
        w={{base : '300px', md: '400px'}} 
        mt={5} 
        p={30}
        ml={{base: '0px', md:'5px'}}   
        colorScheme='blue' >
          {todo.name}
       </Button>
       
    )
}
export default Element