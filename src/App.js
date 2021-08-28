import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Addtransactions from './Components/Addtransactions/Addtransactions';
import History from './Components/History/History';
import {useState} from 'react'

function App() {

  let [credit, setCredit] = useState(0);
  JSON.parse(localStorage.getItem("credit"))==null?localStorage.setItem("credit", JSON.stringify(credit)):credit=JSON.parse(localStorage.getItem("credit"));
  let [debit,setDebit] = useState(0);
  JSON.parse(localStorage.getItem("debit"))==null?localStorage.setItem("debit", JSON.stringify(debit)):debit=JSON.parse(localStorage.getItem("debit"));
  let [history,setHistory] = useState([]);
  JSON.parse(localStorage.getItem("history"))==null?localStorage.setItem("history", JSON.stringify(history)):history=JSON.parse(localStorage.getItem("history"));


  return (
    <div className="center-div" style={{backgroundColor: "yellow", minHeight: "100vh"}}>
    <div className="main">
      <h1>Expense Tracker</h1>
      <Dashboard credit={credit} debit={debit} ></Dashboard>
      <History history={history}></History>
      <Addtransactions setCredit={setCredit} setDebit={setDebit} setHistory={setHistory} credit={credit} debit={debit} history={history}></Addtransactions>
    </div>
    </div>
  );
}

export default App;
