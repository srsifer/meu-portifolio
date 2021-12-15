import React, { Component } from 'react'
import './Mytools.css';

 class Mytools extends Component {
  render() {
    const { incons } = this.props
    return (
      <div className="divTools">
        <p className="tolsIcon">{incons[6]}</p>
        <p className="tolsIcon">{incons[7]}</p>
        <p className="tolsIcon">{incons[8]}</p>
        <p className="tolsIcon">{incons[9]}</p>
        <p className="tolsIcon">{incons[10]}</p>
        <p className="tolsIcon">{incons[11]}</p>
        <p className="tolsIcon">{incons[12]}</p>
        <p className="tolsIcon">{incons[13]}</p>
        <p className="tolsIcon">{incons[14]}</p>
        <p className="tolsIcon">{incons[15]}</p>
        <p className="tolsIcon">{incons[16]}</p>
      </div>
    )
  }
}

export default Mytools
