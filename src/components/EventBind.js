import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: 'hello'
        }

        //   this.chgMsg = this.chgMsg.bind(this)
    }
    // chgMsg(){
    //     this.setState({
    //         msg: 'Goodbye!'
    //     })
    // }
    chgMsg = () => {
        this.setState({
            msg: 'Goodbye!'
        })

    }
    render() {
        return (
            <div>
                <div>{this.state.msg}</div>
                {/* <button onClick={this.chgMsg.bind(this)}>CLick</button> */}
                {/* <button onClick={()=>this.chgMsg()}>CLick</button> */}
                <button onClick={this.chgMsg}>CLick</button>
            </div>
        )
    }
}

export default EventBind