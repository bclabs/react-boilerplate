import React from 'react'
import { Link, browserHistory } from 'react-router'
import { fetchRepos } from '../redux/sampleAsync'
import dispatchOnMount from '../components/hocs/dispatchOnMount'
import { connect } from 'react-redux'

const Repos = ({ params: { username }, repos = [] }) => (
    <div className="Repos">
        <h1>{username}'s Repositories</h1>
        <Link to="/">Home</Link>
        {repos.map(r => <p key={r.id}>{r.name}</p>)}
    </div>
)

export default connect((state, props) => ({
    repos: state.repos[props.params.username]
}))(dispatchOnMount(props => fetchRepos(props.params.username))(Repos))
