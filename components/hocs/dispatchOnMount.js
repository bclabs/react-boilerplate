import React from 'react'
import { connect } from 'react-redux'

const dispatchOnMount = action => (ComposedComponent) => connect(null)(class extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const actionToDispatch = typeof action === 'function' ? action(this.props) : action

        this.props.dispatch(actionToDispatch)
    }

    render() {
        return <ComposedComponent {...this.props} />;
    }
})

export default dispatchOnMount
