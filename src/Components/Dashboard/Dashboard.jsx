import './Dashboard.css'

function Dashboard(props){

    return(
        <div>
        <div className="heading">
            <h3>Your Balance</h3>
            <p>₹{props.credit - props.debit}</p>
            </div>
        <div className="panel-main">
        <div className="panel-left">
            <h5>INCOME</h5>
            <p>{props.credit}</p>
            </div>
        <div className="panel-right">
            <h5>EXPENSE</h5>
            <p>{props.debit}</p>
            </div>
        </div>
        </div>
    );
    }

export default Dashboard;
