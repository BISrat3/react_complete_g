import './ExpenseItem.css'

function ExpenseItem(props){
    // const expenseDate = new Date(2022, 3, 28);
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = 294.67
    return(
    <div className='expense-item'>
        <div >
            {props.date.toDateString()}
            {/* {expenseDate.toDateString()} */}
        </div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            {/* <h2>{expenseTitle}</h2> */}
        <div className='expense-item__price'>
           {/* ${expenseAmount} */}
        </div>
             ${props.amount}
        </div>
    </div>
    )
}

export default ExpenseItem;