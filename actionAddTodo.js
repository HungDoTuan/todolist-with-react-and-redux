 const addTodo = (data) => {
    return  {
        type : 'ADD_TODO',
        payload : {
          name : data,
          id : Math.random() * 100,
          completed : false
        } 
    }
}


export default addTodo

