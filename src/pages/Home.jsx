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
         <div className="scroller">
            <div className="mainContent">
              <AboutMe
                id="about"
                info={ [apresentations, age, local, stacks]}
                />
              <hr className="HR"></hr>
              <h2 className="h2Tols">Ferramentas</h2>
              <Mytools
                id ="tools"
                incons={incons} />
              <h2>Projetos</h2>
              <ProjectsRender
                id='projects'
                projetos={projetos}
                incons={incons} 
              />
              </div>
            </div>
         </div>
    )
  }
}

export default Home
