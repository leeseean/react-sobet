import React from 'react';
import createMarqueeStyle from '../utils/marqueeLeft';
import './marquee.styl';

class Marquee extends React.Component {
  marqueeDom = null
  componentDidUpdate() {
    this.start();
  }
  componentDidMount() {
    this.start();
  }
  start = () => {
    if (this.marqueeDom.offsetWidth < this.marqueeDom.scrollWidth) {
      createMarqueeStyle(this.marqueeDom.scrollWidth/2 + this.marqueeDom.offsetWidth);
    }
  }
  render() {
    return (
      <div className={`marquee-list-wrap ${this.props.className}`} style={this.props.style}>
          <div className="marquee-list marqueeLeft" ref={(ref) => { this.marqueeDom = ref; }} onMouseEnter={() => this.marqueeDom.classList.add('animation-paused')} onMouseLeave={() => this.marqueeDom.classList.remove('animation-paused')}>
              {this.props.children}
              {this.props.children}
          </div>
      </div>
    );
  }
}

export default Marquee;