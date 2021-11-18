import { Switch, Route } from 'react-router-dom';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import LoadPage from '../components/LoadPage';
import SimpleListDemo from '../components/SimpleListDemo';
import SimpleGridDemo from '../components/SimpleGridDemo';
import CustomWindowDemo from '../components/CustomWindowDemo';
import PublicRoute from '../Utils/PublicRoute';

function Router() {

    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Page1} />
                <PublicRoute path="/page2" component={Page2} />
                <PublicRoute path="/page3" component={LoadPage} />
                <PublicRoute path="/simple-list-demo" component={SimpleListDemo} />
                <PublicRoute path="/simple-grid-demo" component={SimpleGridDemo} />
                <PublicRoute path="/custom-window-demo" component={CustomWindowDemo} />
            </Switch>
        </div>
    );
}

export default Router;