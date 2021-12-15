import React, { Component } from 'react'

class SideBar extends Component {
  render() {
    const {incons, comunications} = this.props
    return (
      <>
         <section className="sideBar">
          <p className="menuButton">
          {incons[4]}
          </p>
          <div className="sectionButtons">
            <p><a className="contctButtons" href={comunications[0]} target="blank">{incons[2]}</a></p>
            <p><a className="contctButtons" href={comunications[1]} target="blank">{incons[5]}</a></p>
            <p><a className="contctButtons" href={comunications[2]} target="blank">{incons[3]}</a></p>
            <p><a className="contctButtons" href={comunications[3]} target="blank">{incons[0]}</a></p>
          </div>
          <p>{incons[1]}</p>
        </section>
      </>
    )
  }
}

export default SideBar
