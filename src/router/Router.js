import { Switch, Route } from 'react-router-dom';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import LoadPage from '../components/LoadPage';
import PublicRoute from '../Utils/PublicRoute';

function Router() {

    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Page1} />
                <PublicRoute path="/page2" component={Page2} />
                <PublicRoute path="/page3" component={LoadPage} />
            </Switch>
        </div>
    );
}

export default Router;