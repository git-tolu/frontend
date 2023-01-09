import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        // short circut method

       return  this.state.isLoggedIn && <div><h1>Welcome Tolu</h1></div>
        // teneray cond operattor
        
        // return this.state.isLoggedIn ? (
        //     <div><h1>Welcome Tolu</h1></div>
        // ) : (
        //     <div><h1>Welcome Guest</h1></div>
        // )


        // element variable method


        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div><h1>Welcome Tolu</h1></div>
        // } else {
        //     message = <div><h1>Welcome Guest</h1></div>
        // }
        // return (
        //     <div>
        //         {message}
        //     </div>
        // )

        // if else cond


        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <h1>Welcome Tolu</h1>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <h1>welcome Guest</h1>
        //         </div>
        //     )
        // }
    }
}

export default UserGreeting