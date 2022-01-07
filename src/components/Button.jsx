import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class Button extends React.Component {
    state = {
        loading: false,
    };

    render() {
        
        const {loading} = this.state;
        return(
            <button 
                onClick={this.startLoading}
                className={
                    cx("button", {loading})
                }
                {...this.props}
            />
        );
    }

    startLoading = () => {
        this.setState({
            loading: true,
        })
    }
}