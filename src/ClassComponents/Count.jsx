import { Component } from "react";

export class Count extends Component {
    state = {
        count: 1
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        console.log(this.props.hren);
        return <>
            <p>Count: {this.state.count}</p>
            <button type="button" onClick={this.handleClick}>Click</button>
            <p>{this.props.hren}</p>
        </>
    }
}
