import React from 'react';

class OpenCodes extends React.PureComponent {
    render() {
        const Items = () => this.props.codes.map((code, index) => {
            if (index === this.props.codes.length - 1) {
                return (
                    <li className="fl opencode-item-tm" code={code} key={index}>{code}</li>
                );
            }
            return (
                <li className="fl opencode-item" code={code} key={index}>{code}</li>
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