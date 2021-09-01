import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title); //Always returns two variables. First the current value, second a a function to update it
    console.log("Evaluated by React")
    const clickHandler = () => {
        setTitle("Updated")
        console.log(title)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">DKK {props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
        
    );
}

export default ExpenseItem;
