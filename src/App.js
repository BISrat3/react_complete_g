import Expenses from "./components/Expenses";

function App() {
  const expense =[
    {
      id:'e1',
       title:'Toilet Paper', 
       amount:24.67, 
       date:new Date(2022, 3, 12),
    },
    {
      id:'e2', 
      title:'Car Insurance', 
      amount:294.67, 
      date:new Date(2022, 4, 14),
    }, 
    {
    id:'e3', 
    title:'TV', 
    amount:664, 
    date:new Date(2022, 3,1),
    },
    {
      id:'e4', 
      title:'Monitor', 
      amount:200, 
      date:new Date(2022, 2, 12),
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
          * Learn React  
      </header> 
      <Expenses items={expense}/>
    </div>
  );
}

export default App;
