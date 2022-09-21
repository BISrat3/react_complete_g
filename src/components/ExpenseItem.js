import './ExpenseItem.css'

function ExpenseItem(props){
    // const expenseDate = new Date(2022, 3, 28);
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = 294.67

    const month = props.date.toLocalString('en-US', {month:'long'});
    const day = props.date.toLocalString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();

    return(
    <div className='expense-item'>
        <div >
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
            
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