import React from "react";


class Counter extends React.Component{
    constructor(props){
    super(props);
    this.state ={
        count: props.count
    }

}

// handleButtonClick = () => {
//     this.setState({
//         count: this.state.count + 1
//     })
// }

render() {
    return (
        <div>
            {/* Counter: {this.state.count} */}
            <button > Color Button </button>
        </div>
    )
}

}

export default Counter;

