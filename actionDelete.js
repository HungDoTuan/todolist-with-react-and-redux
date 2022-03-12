 const deleteTodo = (data) => {
    return {
      type :'DELETE_TODO',
      payload : data
    }
   
  }
  export default deleteTodo