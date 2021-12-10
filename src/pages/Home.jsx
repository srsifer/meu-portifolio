import React, { Component } from 'react'
import Igor from '../textContent/text'
import './Home.css'


class Home extends Component {
  render() {
    const { comunications, incons } = Igor; 
    return (
      <div className="home">
        <section className="sideBar">
          <button>{incons[4]}</button>
          <div className="sectionButtons">
            <p><a className="contctButtons" href={comunications[0]} target="blank">{incons[2]}</a></p>
            <p><a className="contctButtons" href={comunications[1]} target="blank">{incons[5]}</a></p>
            <p><a className="contctButtons" href={comunications[2]} target="blank">{incons[3]}</a></p>
            <p><a className="contctButtons" href={comunications[3]} target="blank">{incons[0]}</a></p>
          </div>
          <button>{incons[1]}</button>
        </section>
        <div className="picture">
          <h3>{Igor.name}</h3>
        </div>
        <div className="mainContent">
          main content 
        </div>
      </div>
    )
  }
}

export default Home
