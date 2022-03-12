import React, { useEffect, useState } from "react";
import { Button, Flex, Input, Text, Select } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import addTodo from './actionAddTodo'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import TodoElement from './todoElement'

function Todo () {
  const todoList = useSelector(state => state.clickReducer)
  console.log(todoList);

  // const breakpoints = createBreakpoints({
  //   sm: '30em',
  //   md: '48em',
  //   lg: '62em',
  //   xl: '80em',
  //   '2xl': '96em',
  // })

     const [textNameInput, setTextNameInput] = useState()
     const [status, setStatus] = useState()
     const [filteredTodo, setFilteredTodo] = useState([])
    const handleChange = (e) =>{
      setTextNameInput(e.target.value)
     }

    const dispatch = useDispatch()
    const handleClick = () => {
      setTextNameInput('')
      if(textNameInput) {
      dispatch(addTodo(textNameInput))

    }
  }
  const handleClear = () => {
    setTextNameInput('')
  }
  useEffect(() =>{
    filterHandler()
  },[todoList, status])

  const handleOptions = (e) => {
    setStatus(e.target.value)
    
  }
  const filterHandler = () =>{
    switch (status) {
      case 'Done' :
        setFilteredTodo(todoList.filter(todo => todo.completed === true))
        break
      case 'Undone' :
        setFilteredTodo(todoList.filter(todo => todo.completed === false))
        break
    
      default:
        setFilteredTodo(todoList);
        break;
    }
  }

 

    return (
        <div>
            <Text mt={30} fontSize='3xl' textAlign='center'>This is my to do list with REDUX</Text>
            
            <Flex direction={{base: 'column', md:'row'}} alignItems='center' mt={5}>
            <Input onChange={handleChange}  value={textNameInput} w={{base:'90%' , md: '200%'}} variant='filled' placeholder='Enter your plan' />
            <Button w={{base:'90%', md:'50%'}} onClick={handleClick} ml={{base: '0px', md:'10px'}}  colorScheme="green">Add Plan</Button>
            <Button onClick={handleClear} ml={{base: '0px', md:'10px'}}   w={{base:'90%', md:'50%'}} colorScheme="red">Clear Text</Button>
            <Select  w={{base:'80%', md:'80%'}} onChange={handleOptions} value={status}  placeholder='Select option' ml={{base: '0px', md:'10px'}}    >
              <option>All</option>
              <option >Done</option>
              <option >Undone</option>
            </Select>
            </Flex>
            <TodoElement filteredTodo={filteredTodo} />
        </div>
    )
}
export default Todo