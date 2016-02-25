import React from 'react'
import { browserHistory } from 'react-router'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }
    onSubmit = e => {
        e.preventDefault()
        browserHistory.push('/repos/' + this.state.username)
    };
    render() {
        return (
            <div className="Home">
                <h1>Home</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text" onChange={e => this.setState({ username: e.target.value})} />
                    <button type="submit">{this.state.username}'s Repositories</button>
                </form>
                <br />
            </div>
        )
    }
}

export default Home
