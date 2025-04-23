
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const formattedAmount = props.amount.toLocaleString('fa-IR', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      });      

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div 
                    className="expense-item__price"
                    style={{ direction: 'rtl' }} 
                >
                    {`${formattedAmount} تومان`}
                </div>
            </div>
        </Card>
        
    );
}
export default ExpenseItem;