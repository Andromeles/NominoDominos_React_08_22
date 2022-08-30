import React from "react";

export class Form extends React.Component {

    state = {
        cout: 1,
        name: 'GeekBrains Class'
    }

    handleClick = () => {
        this.setState({ cout: this.state.cout + 1 })
    }

    handleChangeName = (ev) => {
        this.setState({ name: ev.target.value })
    }

    render() {
        return <form>
            <p>Cout: {this.state.cout}</p>
            <button type="button" onClick={this.handleClick}>Click</button>

            <p>Name: {this.state.name}</p>
            <input type='text' onChange={this.handleChangeName} />
        </form>
    }
}