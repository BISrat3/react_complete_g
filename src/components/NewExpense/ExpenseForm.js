import './ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // we can use this alternative approach also
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event)=>{    
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);
        // or
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // if the state update depends on the previous state of the variable => or
        // setUserInput((prevState) =>{
        //     return { ...prevState, enteredTitle: event.target.value}
        // })

    };

    const amountChangeHandler = (event)=>{    
        // // console.log(event.target.value);
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    };

    const dateChangeHandler = (event)=>{    
        // console.log(event.target.value);
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData ={
            title : enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        // console.log(expenseData)
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>
                    Title
                </label>
                <input type="text" 
                    onChange={titleChangeHandler} 
                    value={enteredTitle}/>
            </div>
            <div className='new-expense__control'>
                <label>
                    Amount
                </label>
                <input 
                    type="number"
                    min="0.01" 
                    step="0.01" 
                    onChange={amountChangeHandler} 
                    value={enteredAmount}/>
            </div>
            <div className='new-expense__control'>
                <label>
                    Date
                </label>
                <input 
                    type="date" 
                    min="2019-01-12" 
                    max="2023-12-31" 
                    value={enteredDate}
                    onChange={dateChangeHandler} 
                    />
            </div>
        </div>
        <div className='"new-expense__actions'>
            <button type="button" onClick={props.onCancel}>
                Cancel
            </button>
            <button type="submit" >Add Expense</button>
        </div>
    </form>
    )
}

export default ExpenseForm;