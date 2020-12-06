import React from 'react';

export class Footer extends React.Component {
    render() {
        const styles = this.props.expandFooter
        return (
            <div className="footer" style={styles}>
                <p>Footer component</p>
            </div>
        )
    }
}