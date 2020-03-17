import React, { Component } from 'react'

class Like extends Component {
    constructor(){
        super()
        this.state = {
            liked:false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            liked:!this.state.liked
        })
    }
    render() {
        const label = this.state.liked? 'Unlike':'like'
        return (
        
            <div>
                <button onClick={this.handleClick} >{label} </button>
            </div>
        )
    }
}

export default Like
