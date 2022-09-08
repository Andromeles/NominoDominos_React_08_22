import React from "react";

export class Form extends React.Component {

    state = {
        count: 1,
        name: 'GeekBrains Class'
    }

    handleChangeName = (ev) => {
        this.setState({ name: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault();

    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            {/* <p>Name: {this.state.name}</p> */}
            <input type='text' onChange={this.handleChangeName} />
            <button>Send form</button>
        </form>
    }
}