import React from 'react';

export class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const styles = this.props.expandContent
        return (
            <div className="content" style={styles}>
                <p>Content component</p>
            </div>
        )
    }
}