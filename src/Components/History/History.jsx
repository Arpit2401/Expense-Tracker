import './History.css'
import Tab from  './Tab/Tab'

function History(props){

    return(
        <div>
        <div className="heading">
            <h3>History</h3>
        </div>
        
        <div className="panel-history">
            {props.history!==[] &&
            props.history.map((element, index)=>{
                return <Tab key={index} text= {element.text} amount={element.amount} type={element.type} />
            })
            }
        
        </div>
        </div>
    );
}

export default History;