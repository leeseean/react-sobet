import React from 'react';
import {Provider} from 'mobx-react';
import stores from './stores/index';
import {BrowserRouter} from 'react-router-dom';
import Index from './routers';
import { LocaleProvider } from 'antd';
import GlobalHead from './components/GlobalHead';
import GlobalFoot from './components/GlobalFoot';
import GlobalNav from './components/GlobalNav';
import zhCN from 'antd/lib/locale-provider/zh_CN';


class App extends React.Component {
    render() {
        return (
            <LocaleProvider locale={zhCN}>
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
            </LocaleProvider>
        );
    }
}

export default App;
