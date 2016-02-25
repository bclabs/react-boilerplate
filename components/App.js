import Helmet from 'react-helmet'

const App = ({ children }) => (
    <div className="App">
        <Helmet
            title="Home"
            titleTemplate="Brllnt - %s"
            meta={[
                {name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no"},
                {name: "apple-mobile-web-app-capable", content: "yes"}
            ]}
        />
        {children}
    </div>
)

export default App
