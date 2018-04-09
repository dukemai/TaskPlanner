import React from 'react';
import PropTypes from 'prop-types';
import Resizable from 're-resizable';

const propTypes = {

};
const defaultProps = {

};

const style = {
  marginBottom: '10px',
};

class Item extends React.Component {
  state = {
    height: 80,
  }
  onResizeStop = (e, direction, ref, d) => {
    this.setState({
      height: this.state.height + d.height,
    });
  }
  render() {
    const { isOver } = this.props;
    return (
      <Resizable
        style={style}
        size={{ height: this.state.height }}
        onResizeStop={this.onResizeStop}
      >
        <div className="capacityTaskItem">
          <div className="capacityTaskItem__left">
            <h4 className="capacityTaskItem__title">
              Visit Paris
            </h4>
            <div className="capacityTaskItem__timeInfo">
              <p>
                Estimate: 1 hour
              </p>
              <p>
                Priority: high
              </p>
              <p>
                Done: 1 hour
              </p>
            </div>
          </div>
          <div className="capacityTaskItem__right">
            <button className="capacityTaskItem__button">Remove</button>
            <button className="capacityTaskItem__button">Done</button>
          </div>
        </div>
      </Resizable>
    );
  }
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
