import { connect } from 'react-redux'
import Helmet from 'react-helmet'

const App = ({ children, testDropdownOpen }) => (
    <div className="App">
        <Helmet
            title="Home"
            titleTemplate="Brllnt React Boilerplate - %s"
            meta={[
                {name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no"},
                {name: "apple-mobile-web-app-capable", content: "yes"}
            ]}
        />
        {children}
    </div>
)

function mapStateToProps(state) {
    return {
        testDropdownOpen: state.ui.dropdowns.testDropdown && state.ui.dropdowns.testDropdown === 'open'
    }
}

export default connect(mapStateToProps)(App)
