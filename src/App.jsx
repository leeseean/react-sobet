import React from 'react';
import {Provider} from 'mobx-react';
import stores from './stores/index';
import {BrowserRouter} from 'react-router-dom';
import Home from './pages/home.jsx';
import GlobalHead from './components/globalHead.jsx';
import GlobalFoot from './components/globalFoot.jsx';
import GlobalNav from './components/globalNav.jsx';

class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <BrowserRouter>
                    <div className="App">
                        <GlobalHead/>
                        <GlobalNav/>
                        <Home/>
                        <GlobalFoot/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
