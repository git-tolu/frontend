import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        console.log(`hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <ChildComponent greetHandler={this.greetParent} />
        )
    }
}

export default ParentComponent