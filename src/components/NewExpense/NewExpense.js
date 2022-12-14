import React , {useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditng] = useState(false);
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        // console.log(expenseData)
        props.onAddExpense(expenseData)
        setIsEditng(false)
    }

    const startEditingHandler = () =>{
        setIsEditng(true);
    }

    const stopEditingHandler =()=>{
        setIsEditng(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>
                    Add New Expense
                </button>
            )}
            {isEditing && (
                <ExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
            />
            )}
        </div>
    )
}

export default NewExpense;