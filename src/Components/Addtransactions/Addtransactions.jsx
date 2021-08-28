import Popup from './Popup/Popup'
import './Addtransactions.css'
import {useState} from 'react'


function Addtransactions(props){

    const [btnPopup, setBtnPopup] = useState(false);

    function submitHandler(event){
        event.preventDefault();
        let obj = {
            text: event.target.text.value,
            type: document.getElementById('income').checked===true?1:2,
            amount: parseInt(event.target.amount.value)
        }
       
       props.setHistory(props.history.splice(0,0,obj));

        localStorage.setItem('history', JSON.stringify(props.history));

        if(document.getElementById('income').checked===true){
            localStorage.setItem("credit",JSON.stringify(props.credit+obj.amount));
            props.setCredit(props.credit+obj.amount);
        }
        else{
            localStorage.setItem("debit",JSON.stringify(props.debit+obj.amount));
            props.setDebit(props.debit+obj.amount);
        }
        setBtnPopup(false);
    }

return(
    <div>
    <button className="add-transaction" onClick= 
    {() => setBtnPopup(true)}>Add Transaction</button>
    <Popup trigger={btnPopup} setTrigger={setBtnPopup}>
        <h2>Add Transaction</h2>
        <form className="transaction-main" onSubmit = {(event) => submitHandler(event)}>
        <label htmlFor="description">Description (Write a short text to remember your Transactions)</label>
        <input type="text" name="text" id="text"/>
        <label htmlFor="type">Type of Transaction</label>
        <div>
            <input type="radio" name="type" id="income" defaultChecked={true}/>Income
            <input type="radio" name="type" id="expense" />Expense
        </div>
        <label htmlFor="amount">Amount (Enter in Rupees)</label>
        <input type="number" name="amount" id="amount" />
        <div className="form-btn">
        <input type="submit" id="submit-btn"/>
        <button type="reset" id="reset-btn">Reset</button>
        </div>
        </form>
    </Popup>
    </div>
);
}

export default Addtransactions;
