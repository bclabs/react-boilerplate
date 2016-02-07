import { Provider } from 'react-redux'
import { Router } from 'react-router'

const Root = ({ store, history, routes }) =>
    <div>
        <Provider store={store}>
            <div>
                <Router routes={routes} history={history} />
            </div>
        </Provider>
    </div>;

export default Root
