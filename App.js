import './App.css';
import Todo from './todo'
import {Flex} from  '@chakra-ui/react'



function App() {
 
  return (
    <div className="App">
      <Flex direction='column'>
      <Todo />
      </Flex>
    </div>
  );
}

export default App;
