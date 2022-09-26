const ExpensesList  = props =>{
    let expensesContent = <p>No Expense Found.</p>

    if (filteredExpenses.length > 0){
      expensesContent = filteredExpenses.map((expense)=> (
    <ExpenseItem 
      key = {expense.id}
      title= {expense.title}
      amount = {expense.amount}
    date = {expense.date}  />
      ))}
}

export default ExpensesList;
