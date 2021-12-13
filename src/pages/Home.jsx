import React, { Component } from 'react';
import Igor from '../textContent/text';
import myPicture from '../textContent/imageProfile/igor2.jpg';
import movieCardsThumb from '../textContent/imageProfile/movieCrdsLibraryHomePge.png';
import recipeAppThumb from '../textContent/imageProfile/appDeReceitasHome.png';
import storeManagerThumb from '../textContent/imageProfile/storeManagerModel.png';
import cookMsterThumb from '../textContent/imageProfile/serviceCookMasters.png';
import './Home.css'


class Home extends Component {
  render() {
    const { comunications, incons, apresentations, age, local, stacks, projetos} = Igor; 
    const [movieCardsLibrabry, recipesApp, storeManager,cookMaster] = projetos
    return (
      <div className="home">
        <section className="sideBar">
          <p type="button" className="menuButton">
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
        <div className="picture">
          <img className="myPicture" src={myPicture} alt="imgem de igor"/>
        </div>
        <div className="mainContent">
         <div className="scroller">
            <div className="wellcomeDiv">
              <h1 className="wellcomeTitle">sobre</h1>
               <div className="mininfo">
                <p>{`${age} anos`}</p>
                <p>{local}</p>
                <p>{stacks}</p>
               </div>
              <div className="wellcomeTextDiv">
                <p className="wellcomeText">{apresentations}</p>
              </div>
              <hr className="HR"></hr>
              <h2 className="h2Tols">Ferramentas</h2>
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
              <h2>Projetos</h2>
              <div className="projects">
                <div className="projectsCardis">
                  <div className="titleCard">
                    <h3>{movieCardsLibrabry.name}</h3>
                  </div>
                   <div className="divButtons">
                     <div className="buttonCard"><a href={movieCardsLibrabry.demo} target="blank">demo</a></div>
                     <div className="buttonCard"><a href={movieCardsLibrabry.code} target="blank">code</a></div>
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
                     <div className="buttonCard"><a href={recipesApp.demo} target="blank">demo</a></div>
                     <div className="buttonCard"><a href={recipesApp.code} target="blank">code</a></div>
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
                     <div className="buttonCard"><a href={storeManager.demo} target="blank">demo</a></div>
                     <div className="buttonCard"><a href={storeManager.code} target="blank">code</a></div>
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
                     <div className="buttonCard"><a href={cookMaster.demo} target="blank">demo</a></div>
                     <div className="buttonCard"><a href={cookMaster.code} target="blank">code</a></div>
                   </div>
                   <img className="thumbNail" src={cookMsterThumb} alt="thubnail do projeto"/>
                  <div className="describleText">
                    <p>{cookMaster.describle}</p>
                  </div>
                </div>
              </div>
            </div>
         </div>
        </div>
      </div>
    )
  }
}

export default Home
