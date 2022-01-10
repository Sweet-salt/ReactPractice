import React from 'react';

export default function withHasMounted(Component) {
    class NewComponent extends React.Component{
        state = {
            hasMounted: false
        };
        
        render() {
            const {hasMounted} = this.state
            return <Component hasMounted={hasMounted} />
        }
        componentDidMount() {
            this.setState({hasMounted : true});
        }
    }
    
    return NewComponent;
}