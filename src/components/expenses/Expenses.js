import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021");
    const handleYearSelect = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p className="white">No expenses found</p>
    if (filteredExpenses.length > 0){
        expensesContent = filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onFilterYear={handleYearSelect}
            />
            {expensesContent}
        </Card>
    );
};

export default Expenses;
