import ExpenseItem from "./ExpenseItem";

const ExpensesList  = (props) =>{
    // let expensesContent = <p>No Expense Found.</p>

    if (props.items.length === 0){
        return 
        <h2 className="expenses-lsit__fallback">Found no expenses.</h2>
    }
    return 
    <ul className="expenses-list">
        {props.itmes.map((expense)=> (
        <ExpenseItem 
            key = {expense.id}
            title= {expense.title}
             amount = {expense.amount}
             date = {expense.date}  />
      ))}
    </ul>
}

export default ExpensesList;
