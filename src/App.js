import React from 'react';
import Counter from './component/Counter'; 
import Toggle from './component/Toggle';
import ParentComponent from './component/ParentComponent';
import GrandParent from './component/GrandParent';
import NameList from './component/NameList';//doubt
import CheckBoxMessage from './component/CheckBoxMessage';
import ItemList from './component/ItemList';
import ControlledInput from './component/ControlledInput';
import LoginForm from './component/LoginForm';
import ExampleForm from './component/exampleForm';
import TodoApp from './component/todo';


function App() {
  return (
    <div>
      <h1>My App</h1>
      <Counter />
      <Toggle/>
      <ParentComponent/>
      <GrandParent/>
      <NameList/>
      <h2>checkbox</h2>
      <CheckBoxMessage/>

      <ItemList/>
      <h2>controlled input</h2>
      <ControlledInput/>

      <LoginForm/>
      
      <ExampleForm/>
      <TodoApp/>
    </div>
  );
}

export default App;