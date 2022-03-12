import React from "react";
import { Flex } from '@chakra-ui/react'
import Element from './element'



function TodoElement({ filteredTodo }) {
    return  <Flex  direction='column'>
    { filteredTodo.map(todo => <Element filteredTodo={filteredTodo} todo={todo} />)}
            </Flex>   
}
export default TodoElement