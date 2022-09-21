import ExpenseItem from './components/ExpenseItem'
function App() {
  const expense =[
    {
      id:'e1', title:'Toilet Paper', amount:24.67, date:new Date(2022,03,12)
    },
    {id:'e2', title:'Car Insurance', amount:294.67, date:new Date(2022,04,14)}, 
    {id:'e3', title:'TV', amount:664.67, date:new Date(2022,03,1)},
    {id:'e4', title:'Monitor', amount:200, date:new Date(2022,02,12)}
  ]
  return (
    <div className="App">
      <header className="App-header">
          * Learn React  
      </header> 
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}></ExpenseItem>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}></ExpenseItem>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}></ExpenseItem>
      <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
