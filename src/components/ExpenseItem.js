import "./ExpenseItem.css";

function getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0
    var yyyy = today.getFullYear();
    const expenseDate = dd + "/" + mm + "/" + yyyy;
}

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">DKK {props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
