import React, { Component, PropTypes } from 'react';
import { FlatButton } from 'material-ui';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ToolTip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false,
      gotIt: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleClick() {
    this.setState({ seen: !this.state.seen });
  }

  handleComplete() {
    this.setState({ seen: false, gotIt: true});
  }

  render() {
    const classNames = this.state.seen ? 'tooltip-clicked' : 'tooltip';
    const hidden = this.state.gotIt ? ' hidden' : '';
    let tooltipContent;

    if (this.state.seen) {
      tooltipContent = (
        <div className="tooltip-content">
          This is where the nav bar is!
          <FlatButton
            label="Got It!"
            style={{float: 'right', marginTop: '20px'}}
            onClick={this.handleComplete}
          />
        </div>
      );
    } else {
      tooltipContent = '';
    }

    return (
      <div style={{position: 'relative'}}>
        <div className={classNames + hidden} onClick={this.handleClick}></div>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300} >
          {tooltipContent}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default ToolTip
