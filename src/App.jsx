import React from 'react';
import {Provider} from 'mobx-react';
import stores from './stores/index';
import {BrowserRouter} from 'react-router-dom';
import Index from './routers';
import GlobalHead from './components/GlobalHead';
import GlobalFoot from './components/GlobalFoot';
import GlobalNav from './components/GlobalNav';


class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <BrowserRouter forceRefresh={false}>
                    <div className="App">
                        <GlobalHead/>
                        <GlobalNav/>
                        <Index/>
                        <GlobalFoot/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
