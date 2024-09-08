import React, { useState } from 'react';
import logo from './assets/logo.svg';

import artistStatement from './assets/artists-statement.png';
import atoll from './assets/atoll.jpg';
import atollCharcoal from './assets/atoll-charcoal.jpg';
import banksStreetKitchen from './assets/banks-street-kitchen.jpg';
import bathroom from './assets/bathroom.jpg';
import blueprint from './assets/blueprint.jpg';
import blueprintFront from './assets/blueprint-front-facing.jpg';
import downTheDrain from './assets/down-the-drain.jpg';
import dragonMap from './assets/dragon-map.jpg';
import exhibition from './assets/exhibition.jpg';
import exhibitionPoster from './assets/exhibition-poster.png';
import familyDinner from './assets/family-dinner.jpg';
import ferrisWheel from './assets/ferris-wheel.jpg';
import flowerPeople from './assets/flower-people.jpg';
import generations from './assets/generations.jpg';
import glassWater from './assets/glass-and-water.jpg';
import home from './assets/home.jpg';
import hongKong from './assets/hong-kong.jpg';
import kitchenTable from './assets/banks-street-kitchen-table.jpg'
import kitchenShelves from './assets/banks-street-kitchen-shelves.jpg'
import kittyLove from './assets/kitty-love.jpg'
import lessOfAStranger from './assets/less-of-a-stranger.jpg'
import lessOfAStrangerBlack from './assets/less-of-a-stranger-black.jpg'
import lessOfAStrangerGold from './assets/less-of-a-stranger-gold.jpg'
import mindPalace from './assets/mind-palace.jpg';
import redacted from './assets/redacted.jpg'
import somp1 from './assets/somp1.jpg'
import somp2 from './assets/somp2.jpg'
import somp3 from './assets/somp3.jpg'
import somp4 from './assets/somp4.jpg'
import threeWiseFools from './assets/three-wise-fools.jpg';
import waterTiles from './assets/water-tiles.jpg'
import './App.css';

function Content({ src, color, name, medium, year, isVideo }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <div className='galleryItem'>
          {
            isVideo ? <video onClick={() => setIsOpen(true)} src={src} className={`defaultPhoto photo${color}`} />
            : <img onClick={() => setIsOpen(true)} src={src} className={`defaultPhoto photo${color}`} />
          }
        </div>
        {isOpen && (
          <div onClick={() => setIsOpen(false)} className={`modal  modal${color}`}>
            <div className='imgContainer'>
              {
                isVideo ? <video src={src} className={`modalPhoto`} />
                : <img src={src} className={`modalPhoto`} />
              }
              <div className='label'>
                <span><i>{name}</i></span>
                <span><i>{medium}</i></span>
                <span><i>{year}</i></span>
              </div>
            </div>
          </div>
        )}
      </>
    )
}

function App() {
  const prints = [
    [downTheDrain, 'Green', 'Down the drain', 'linocut on paper', '2024', false],
    [redacted, 'Red', 'Redacted', 'screenprint on paper', '2022', false],
    [generations, 'Blue', 'Generations', 'screenprint on paper', '2022', false],
    [threeWiseFools, 'Blue', 'Three wise fools', 'collage with screenprints and linocuts', '2022', false],
    [kitchenShelves, 'Green', 'Banks Street kitchen - shelves', 'lithograph on paper', '2023', false],
    [waterTiles, 'Red', 'Water tiles', 'screenprint on paper', '2022', false],
    [hongKong, 'Green', 'Hong Kong map', 'lithograph and screenprint on paper', '2023', false],
    [kitchenTable, 'Red', 'Banks Street kitchen - table', 'lithograph on paper', '2023', false],
    [kittyLove, 'Blue', 'Love', 'lithograph on paper', '2023', false],
    [lessOfAStrangerBlack, 'Blue', 'Less of a stranger (black)', 'linocut on paper', '2023', false],
    [lessOfAStrangerGold, 'Red', 'Less of a stranger (gold)', 'linocut on paper', '2023', false],
  ]

  const paintings = [
    [glassWater, 'Red', 'Glass and water', 'acrylic on canvas', '2024', false],
    [home, 'Green', 'Home', 'oil on canvas', '2021', false],
    [atoll, 'Red', 'Atoll', 'acrylic on paper', '2022', false],
    [flowerPeople, 'Blue', 'Flower people', 'acrylic and wire on paper', '2021', false],
    [bathroom, 'Red', 'Bathroom', 'gouache on paper', '2021', false],
    [ferrisWheel, 'Green', 'Ferris wheel', 'oil on canvas', '2021', false],
    [familyDinner, 'Blue', 'Family dinner', 'oil on canvas', '2021', false],
    [mindPalace, 'Green', 'Mind palace', 'oil on canvas', '2021', false],
  ]

  const homeComingExhibition = [
    [exhibitionPoster, 'Green', 'Exhibition poster', false],
    [artistStatement, 'Red', "Artist's statement", false],
    [exhibition, 'Blue', "Exhibition room", false],
    [somp1, 'Red', 'Shadow of my past (part 1)', 'lasercut on paper', '2023', false],
    [banksStreetKitchen, 'Blue', "Banks street kitchen", 'lithograph on paper and cling wrap', '2023', false],
    [somp2, 'Red', 'Shadow of my past (part 2)', 'lasercut on paper', '2023', false],
    [home, 'Green', 'Home', 'oil on canvas', '2021', false],
    [threeWiseFools, 'Blue', 'Three wise fools', 'collage with screenprints and linocuts', '2022', false],
    [dragonMap, 'Red', 'Dragon map', 'embroidery on canvas bag', '2022', false],
    [lessOfAStranger, 'Blue', 'Less of a stranger', 'linocut on paper', '2023', false],
    [somp3, 'Red', 'Shadow of my past (part 3)', 'lasercut on paper', '2023', false],
    [redacted, 'Green', 'Redacted', 'screenprint on paper', '2022', false],
    [familyDinner, 'Blue', 'Family dinner', 'oil on canvas', '2021', false],
    [somp4, 'Red', 'Shadow of my past (part 4)', 'lasercut on paper', '2023', false],
    [atoll, 'Red', 'Atoll', 'acrylic on paper', '2022', false],
    [atollCharcoal, 'Red', 'Atoll', 'charcoal on paper', '2022', false],
    [blueprint, 'Green', 'Blueprint', 'paper stencil', '2023', false],
    [blueprintFront, 'Green', 'Blueprint', 'paper stencil', '2023', false],
  ]

  const sections = [
    [prints, "PRINTS"],
    [paintings, "PAINTINGS"],
    [homeComingExhibition, "HOME COMING EXHIBITION"]
  ]

  return (
    <div className="app">
      <div className="headerContainer">
        <img src={logo} className="logo"/>
        <div className="header">
          <span className="bio">
            Eva Lau is an artist (and occasional engineer) in nyc.
          </span>
          <i> Mainly, however, she seems to just enjoy making things that make her happy.</i>
        </div>
      </div>
      {/* <div>
       <p className="warning">this site is under construction, but it welcomes all visitors :)</p>
      </div> */}
      <div>
        {sections.map(([section, title]) => (
          <div className='section'>
            <span className='sectionTitle'>{title}</span>  
            <div className='gallery'>
              {section.map(([src,color,pieceName,medium,year,isVideo]) => (
                <Content src={src} color={color} name={pieceName} medium={medium} year={year} isVideo={isVideo}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
