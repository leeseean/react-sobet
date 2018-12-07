import React from 'react';
import {Provider} from 'mobx-react';
import stores from './stores/index';
import {BrowserRouter} from 'react-router-dom';
import Index from './routers';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <BrowserRouter forceRefresh={false}>
                    <div className="App">
                        <LocaleProvider locale={zhCN}>
                            <Index/>
                        </LocaleProvider>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
