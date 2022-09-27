import {useState} from "react"
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear =>{
    // console.log ("Expenses.js")
    // console.log(selectedYear)
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter((expense) =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  // another approach is that to render the filter components 
 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected ={filteredYear}
          onChangeFilter={filterChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items = {filteredExpenses}/>
          {/* The second approach */}
          {/* {
            filteredExpenses.length === 0 ? (<p>No Expense Found.</p> )
          : (
          filteredExpenses.map((expense)=> (
          <ExpenseItem 
          key = {expense.id}
          title= {expense.title}
          amount = {expense.amount}
          date = {expense.date}
          />     
        ))
          )} */}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
}
export default Expenses;
