import React, { Component } from 'react'
import Igor from '../textContent/text'
import myPicture from '../imageProfile/igor2.jpg'
import './Home.css'


class Home extends Component {
  render() {
    const { comunications, incons } = Igor; 
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
         <p> O Naruto pode ser um pouco duro às vezes
Talvez você não saiba disso</p>
<p>
  Mas o Naruto também
  Cresceu sem pai
</p>

<p>Na verdade, ele nunca conheceu nenhum de seus pais</p>
<p>E nunca teve nenhum amigo em nossa aldeia</p>
<p>Mesmo assim, eu nunca vi ele chorar</p>
<p>Ficar zangado ou se dar por vencido</p>

<p>Ele está sempre disposto a melhorar</p>
<p>Ele quer ser respeitado, é o sonho dele</p>
<p>E o Naruto daria a vida por isso sem hesitar</p>
<p>Meu palpite é que ele se cansou de chorar</p>
<p>E decidiu fazer alguma coisa a respeito</p>
<p>E decidiu fazer alguma coisa a respeito</p>
<p>E decidiu fazer alguma coisa a respeito</p>
<p>E decidiu fazer alguma coisa a respeito</p>
<p>E decidiu fazer alguma coisa a respeito</p>
<p>E decidiu fazer alguma coisa a respeito</p>
<p>E decidiu fazer alguma coisa a respeito</p>
<p>E decidiu fazer alguma coisa a respeito</p>
<p>E decidiu fazer alguma coisa a respeito</p>
<p>E decidiu fazer alguma coisa a respeito</p>
<p>E decidiu fazer alguma coisa a respeito</p>
<p>E decidiu fazer alguma coisa a respeito</p>
<p>E decidiu fazer alguma coisa a respeito</p>
<p>E decidiu fazer alguma coisa a respeito</p>
<p>E decidiu fazer alguma coisa a respeito</p>
<p>E decidiu fazer alguma coisa a respeito</p>
         </div>
         </div>
      </div>
    )
  }
}

export default Home
