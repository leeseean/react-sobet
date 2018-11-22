import React from 'react';
import {Button} from 'antd';
class UndefinedPage extends React.Component {
    handleClick = ()=>{
        window.location.href = '/index'
    }
    render() {
        return (
            <div style={styl.content}>
                <div style={styl.row}>
                    <img src={require('../images/404.png')} alt="" style={styl.img}/>
                    <div style={styl.right}>
                        <h1 style={styl.h1}>404</h1>
                        <p style={styl.p}>抱歉，您访问的页面不存在</p>
                        <Button type="primary" onClick={this.handleClick}>返回首页</Button>
                    </div>
                </div>
            </div>
        );
    }
}
const styl = {
    content:{
        'background':'#fff',
        'position':'absolute',
        'bottom':'0',
        'left':'0',
        'right':'0',
        'top':'0',
        'zIndex':'9999'
    },
    row:{
        'width':'813px',
        'margin':'150px auto 0',
        'overflow':'hidden'
    },
    img:{
        'float':'left',
        'margin':'0 120px 0 0'
    },
    right:{
        'float':'left'
    },
    h1:{
        'color':'#434e59',
        'fontSize':'96px',
        'margin':0
    },
    p:{
        'fontSize':'20px',
        'margin':'0 0 30px 0'
    }
}
export default UndefinedPage;