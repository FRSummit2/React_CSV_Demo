import { Switch, Route } from 'react-router-dom';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import LoadPage from '../components/LoadPage';
import SimpleListDemo from '../components/SimpleListDemo';
import SimpleGridDemo from '../components/SimpleGridDemo';
import CustomWindowDemo from '../components/CustomWindowDemo';
import ChartPlotly from '../components/Chart_Plotly';
import ChartPlotly2 from '../components/Chart_Plotly_2';
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
                <PublicRoute path="/chart-plotly" component={ChartPlotly} />
                <PublicRoute path="/chart-plotly-2" component={ChartPlotly2} />
            </Switch>
        </div>
    );
}

export default Router;