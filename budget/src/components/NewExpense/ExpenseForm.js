import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [hasIndicated, setIndication] = useState(false);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const toggleIndication = () => {
        setIndication(!hasIndicated);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    if (!hasIndicated) {
        return <button onClick={toggleIndication}>Add new expense</button>;
    } else {
        return (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input
                            type="text"
                            value={enteredTitle}
                            onChange={titleChangeHandler}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            value={enteredAmount}
                            onChange={amountChangeHandler}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>date</label>
                        <input
                            type="date"
                            min="2021-09-01"
                            value={enteredDate}
                            onChange={dateChangeHandler}
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="reset" onClick={toggleIndication}>
                        Cancel
                    </button>
                    <button type="submit">Add expense</button>
                </div>
            </form>
        );
    }
};

export default ExpenseForm;
