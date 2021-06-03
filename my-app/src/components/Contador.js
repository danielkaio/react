import react from "react"


class Contador extends react.Component {

    state = {
        numero: this.props.inicial

    }

    inc =()=>{
        this.setState({
            numero:this.state.numero+1
        })
    }
 

    render(){
        return(
            <div>
                <h2>Contador</h2>
                 <p>valor inicial {this.state.numero}</p>
                 <button onClick={this.inc}>+</button>
            </div>
        )
    }

}


export default Contador