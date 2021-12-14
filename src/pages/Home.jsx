import React, { Component } from 'react';
import Igor from '../textContent/text';
import myPicture from '../textContent/imageProfile/igor2.jpg';
import ProjectsRender from '../components/ProjectsRender';
import Mytools from '../components/Mytools';
import AboutMe from '../components/AboutMe';
import SideBar from '../components/SideBar';
import './Home.css'


class Home extends Component {
  render() {
    const { comunications, incons, apresentations, age, local, stacks, projetos} = Igor; 
    return (
      <div className="home">
        <SideBar comunications={comunications} incons={incons} />
        <div className="picture">
          <img className="myPicture" src={myPicture} alt="imgem de igor"/>
        </div>
        <div className="mainContent">
         <div className="scroller">
            <div className="wellcomeDiv">
              <AboutMe
                info={ [apresentations, age, local, stacks]}/>
              <hr className="HR"></hr>
              <h2 className="h2Tols">Ferramentas</h2>
              <Mytools incons={incons} />
              <h2>Projetos</h2>
              <ProjectsRender projetos={projetos} />
              </div>
            </div>
         </div>
        </div>
    )
  }
}

export default Home
