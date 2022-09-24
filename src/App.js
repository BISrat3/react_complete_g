import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 'e1',
       title: 'Toilet Paper', 
       amount: 24.67, 
       date: new Date(2022, 3, 12),
    },
    {
      id: 'e2', 
      title: 'Car Insurance', 
      amount: 294.67, 
      date: new Date(2022, 4, 14),
    }, 
    {
    id: 'e3', 
    title: 'TV', 
    amount: 664, 
    date: new Date(2022, 3,1),
    },
    {
      id:'e4', 
      title:'Monitor', 
      amount:200, 
      date: new Date(2022, 2, 12),
    },
  ]

  const addExpenseHandler = expense =>{
    console.log ("In App.js");
    console.log(expenses)

  }
  // return React.createElement(
  //   'div', {}, React.createElement('h2', {}, "Let's get started!"), 
  //   React.createElement(Expenses, {items: expenses})
  // )

  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
