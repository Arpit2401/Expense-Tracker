import './Tab.css';

function Tab(props){
    const myStyle=props.type===1?{borderRight: "0.4rem solid rgb(55, 255, 55)"}:{borderRight: "0.4rem solid rgb(255, 65, 65)"}
    return(
        <div className="tab-div" style={myStyle}>
            <p>{props.text}<span>₹{props.amount}</span></p>
            
            
        </div>
    );
}

export default Tab;