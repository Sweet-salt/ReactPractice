import React from "react";

class UncontrolledComponent extends React.Component {
    inputRef = React.createRef();
    render() {
        console.log("initial render", this.inputRef)
        return (
            <div>
                <input ref={this.inputRef} />
                <button onClick={this.click}>send</button>
            </div>
        );
    }

    click = () => {
        //인풋 엘리먼트의 현재 상태 값 꺼내서 전송
    //    const input =  document.querySelector('#my-input');
    //    console.log(input);
    console.log(this.inputRef.current.value);
    }
}

export default UncontrolledComponent;