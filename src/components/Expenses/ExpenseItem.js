import React,  {useState} from 'react'

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

// const expenseDate = new Date(2022, 3, 28);
// const expenseTitle = 'Car Insurance'
// const expenseAmount = 294.67

// const [title, setTitle] = useState(props.title);
// // let title= props.title;
// console.log("ExpenseItem evaluated by React");

// const clickHandler = () => {
//     // title= 'Updated';
//     // console.log(title + 'Clicked!!!')
//     setTitle('Updated');
//     console.log(title);
// };
function ExpenseItem(props){

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                    <div className='expense-item__description'>
                            <h2>{props.title}</h2>
                        <div className='expense-item__price'>
                            ${props.amount}
                        </div>
                    </div>
            </Card>
            {/* <button  onClick={clickHandler}>Change Title</button> */}
        </li>
    );
}

export default ExpenseItem;
