import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

class Game extends React.Component {
    render() {
        return (
            <div>
                <h4>Welcome to the {this.props.name} Game!</h4>
            </div>
        );
    }

}

Game.defaultProps = {

    name: 'Chess'
};

Game.propTypes = {
    name: PropTypes.string
};

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
