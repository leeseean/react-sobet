import React from "react";
import { Input, Icon } from "antd";

class InputNumberUpDown extends React.Component {
    inputRef = null;
    plus = () => {
        if (Number(this.inputRef.input.value) === Number(this.props.max)) {
            return;
        }
        this.inputRef.input.value = Number(this.inputRef.input.value) + 1;
        this.props.onChange(this.inputRef.input.value);
    };
    minus = () => {
        if (Number(this.inputRef.input.value) === Number(this.props.min)) {
            return;
        }
        this.inputRef.input.value = Number(this.inputRef.input.value) - 1;
        this.props.onChange(this.inputRef.input.value);
    };
    changeValue = e => {
        this.props.onChange(e.target.value);
    };
    render() {
        const {
            className,
            style,
            size,
            addonClassName,
            addonStyle,
            ...rest
        } = this.props;
        return (
            <span className="input-number-updown-wrapper">
                <Input
                    ref={ref => (this.inputRef = ref)}
                    className={`input-number-updown ${className}`}
                    style={style}
                    {...rest}
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
