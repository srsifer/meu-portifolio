import React, { Component } from 'react'

class AboutMe extends Component {
  render() {
    const [apresentations, age, local, stacks] = this.props.info
    return (
      <>
        <h1 className="wellcomeTitle">sobre</h1>
        <div className="mininfo">
          <p>{`${age} anos`}</p>
          <p>{local}</p>
          <p>{stacks}</p>
        </div>
        <div className="wellcomeTextDiv">
          <p className="wellcomeText">{apresentations}</p>
        </div>
      </>
    )
  }
}

export default AboutMe
