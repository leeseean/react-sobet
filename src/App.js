import React from 'react';
import {Provider} from 'mobx-react';
import stores from './stores/index';
import {BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import GlobalHead from './components/globalHead';
import GlobalFoot from './components/globalFoot';
import GlobalNav from './components/globalNav';

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
