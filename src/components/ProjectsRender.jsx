import React, { Component } from 'react'
import movieCardsThumb from '../textContent/imageProfile/movieCrdsLibraryHomePge.png';
import recipeAppThumb from '../textContent/imageProfile/appDeReceitasHome.png';
import storeManagerThumb from '../textContent/imageProfile/storeManagerModel.png';
import cookMsterThumb from '../textContent/imageProfile/serviceCookMasters.png';
import './ProjectsRender.css';

 class ProjectsRender extends Component {
  render() {
    const [movieCardsLibrabry, recipesApp, storeManager,cookMaster] = this.props.projetos;
    const {incons} = this.props
    return (
      <>
          <div className="projects">
            <div className="projectsCardis">
              <div className="titleCard">
                <h3>{movieCardsLibrabry.name}</h3>
              </div>
                <div className="divButtons">
                  <div className="buttonCard"><a href={movieCardsLibrabry.demo} target="blank">{incons[18]}DEMO</a></div>
                  <div className="buttonCard"><a href={movieCardsLibrabry.code} target="blank">{incons[5]}CODE</a></div>
                </div>
                <img className="thumbNail" src={movieCardsThumb} alt="thubnail do projeto"/>
              <div className="describleText">
                <p>{movieCardsLibrabry.describle}</p>
              </div>
            </div>
            <div className="projectsCardis">
              <div className="titleCard">
                <h3>{recipesApp.name}</h3>
              </div>
                <div className="divButtons">
                  <div className="buttonCard"><a href={recipesApp.demo} target="blank">{incons[18]}DEMO</a></div>
                  <div className="buttonCard"><a href={recipesApp.code} target="blank">{incons[5]}CODE</a></div>
                </div>
                <img className="thumbNail" src={recipeAppThumb} alt="thubnail do projeto"/>
              <div className="describleText">
                <p>{recipesApp.describle}</p>
              </div>
            </div><div className="projectsCardis">
              <div className="titleCard">
                <h3>{storeManager.name}</h3>
              </div>
                <div className="divButtons">
                  <div className="buttonCard"><a href={storeManager.demo} target="blank">{incons[18]}DEMO</a></div>
                  <div className="buttonCard"><a href={storeManager.code} target="blank">{incons[5]}CODE</a></div>
                </div>
                <img className="thumbNail" src={storeManagerThumb} alt="thubnail do projeto"/>
              <div className="describleText">
                <p>{storeManager.describle}</p>
              </div>
            </div><div className="projectsCardis">
              <div className="titleCard">
                <h3>{cookMaster.name}</h3>
              </div>
                <div className="divButtons">
                  <div className="buttonCard"><a href={cookMaster.demo} target="blank">{incons[18]}DEMO</a></div>
                  <div className="buttonCard"><a href={cookMaster.code} target="blank">{incons[5]}CODE</a></div>
                </div>
                <img className="thumbNail" src={cookMsterThumb} alt="thubnail do projeto"/>
              <div className="describleText">
                <p>{cookMaster.describle}</p>
              </div>
            </div>
          </div>
      </>
    )
  }
}

export default ProjectsRender;
