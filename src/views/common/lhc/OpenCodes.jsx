import React from 'react';

class OpenCodes extends React.PureComponent {
    render() {
        const Items = () => this.props.codes.map((code, index) => {
            if (index === this.props.codes.length - 1) {
                return (
                    <li className="fl opencode-item-tm bounceInDown" code={code} key={Date.now() + index}>{code}</li>
                );
            }
            return (
                <li className="fl opencode-item bounceInDown" code={code} key={Date.now() + index}>{code}</li>
            );
        });
        return (
            <ul className="clearfix opencode-list">
                <Items/>
            </ul>
        );
    }
}

export default OpenCodes;