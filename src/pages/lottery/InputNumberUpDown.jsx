import React from 'react';
import { Input, Icon } from "antd";

class InputNumberUpDown extends React.Component {
    state = {
        value: this.props.value,
    }
    plus = () => {
        if (Number(this.state.value) === Number(this.props.max)) {
            return;
        }
        this.setState(prevState => ({
            value: Number(prevState.value) + 1
        }));
    }
    minus = () => {
        if (Number(this.state.value) === Number(this.props.min)) {
            return;
        }
        this.setState(prevState => ({
            value: Number(prevState.value) - 1
        }));
    }
    changeValue = (e) => {console.log(e.target.value)
        this.setState({ value: e.target.value });
    }
    render() {
        const { className, style, size, addonClassName, addonStyle, ...rest } = this.props;
        return (
            <span className="input-number-updown-wrapper">
                <Input
                    className={`input-number-updown ${className}`}
                    style={style}
                    {...rest}
                    value={this.state.value}
                    onChange={this.changeValue}
                    type="number"
                    size={size}
                    addonAfter={
                        <Icon
                            className={addonClassName}
                            style={addonStyle}
                            size={size}
                            type="plus"
                            theme="outlined"
                            onClick={this.plus}
                        />
                    }
                    addonBefore={
                        <Icon
                            className={addonClassName}
                            style={addonStyle}
                            size={size}
                            type="minus"
                            theme="outlined"
                            onClick={this.minus}
                        />
                    }
                />
            </span>
        );
    }
}

export default InputNumberUpDown;