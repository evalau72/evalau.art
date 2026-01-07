import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import logo from './assets/logo.svg';
import desktopBg from './assets/background_result.webp';
import './App.css';

/* ---------- ASSETS ---------- */
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
import kitchenTable from './assets/banks-street-kitchen-table.jpg';
import kitchenShelves from './assets/banks-street-kitchen-shelves.jpg';
import kittyLove from './assets/kitty-love.jpg';
import lessOfAStranger from './assets/less-of-a-stranger.jpg';
import lessOfAStrangerBlack from './assets/less-of-a-stranger-black.jpg';
import lessOfAStrangerGold from './assets/less-of-a-stranger-gold.jpg';
import mindPalace from './assets/mind-palace.jpg';
import redacted from './assets/redacted.jpg';
import somp1 from './assets/somp1.jpg';
import somp2 from './assets/somp2.jpg';
import somp3 from './assets/somp3.jpg';
import somp4 from './assets/somp4.jpg';
import threeWiseFools from './assets/three-wise-fools.jpg';
import waterTiles from './assets/water-tiles.jpg';

import bioPic from './assets/biopic.jpg'

/* ---------- DATA ---------- */

const bioOptions = [
  ' is an artist that likes to make all sorts of things.',
  ' is based in nyc, and is inspired by home - boston, hong kong, providence.',
  ' graduated from Brown University in 2023 with a BA in visual art and BS in computer science.',
  ' loves to stare at patterns and indulge in textures, both manufactured and natural.',
  ' appreciates the written language, and the unwritten language, and artisans of both.',
  ' made this website, with love.',
];

const prints = [
  [downTheDrain, 'Green', '"Down the drain"', 'linocut on paper', '2024', false],
  [redacted, 'Red', '"Redacted"', 'screenprint on paper', '2022', false],
  [generations, 'Blue', '"Taxonomy"', 'screenprint on paper', '2022', false],
  [threeWiseFools, 'Blue', '"Three wise fools"', 'collage with screenprints and linocuts', '2022', false],
  [kitchenShelves, 'Green', '"Banks Street kitchen - shelves"', 'lithograph on paper', '2023', false],
  [kitchenTable, 'Red', '"Banks Street kitchen - table"', 'lithograph on paper', '2023', false],
  [waterTiles, 'Red', '"Water tiles"', 'screenprint on paper', '2022', false],
  [hongKong, 'Green', '"Hong Kong map"', 'lithograph and screenprint on paper', '2023', false],
  [kittyLove, 'Blue', '"Love"', 'lithograph on paper', '2023', false],
  [lessOfAStrangerBlack, 'Blue', '"Less of a stranger (black)"', 'linocut on paper', '2023', false],
  [lessOfAStrangerGold, 'Red', '"Less of a stranger (gold)"', 'linocut on paper', '2023', false],
];

const paintings = [
  [glassWater, 'Red', '"Glass and water"', 'acrylic on canvas', '2024', false],
  [home, 'Green', '"Home"', 'oil on canvas', '2021', false],
  [atoll, 'Red', '"Atoll"', 'acrylic on paper', '2022', false],
  [flowerPeople, 'Blue', '"Flower people"', 'acrylic and wire on paper', '2021', false],
  [bathroom, 'Red', '"Bathroom"', 'gouache on paper', '2021', false],
  [ferrisWheel, 'Green', '"Ferris wheel"', 'oil on canvas', '2021', false],
  [familyDinner, 'Blue', '"Family dinner"', 'oil on canvas', '2021', false],
  [mindPalace, 'Green', '"Mind palace"', 'oil on canvas', '2021', false],
];

const mixedMedia = [
  [banksStreetKitchen, 'Blue', '"Banks street kitchen"', 'lithograph on paper and cling wrap', '2023', false],
  [threeWiseFools, 'Blue', '"Three wise fools"', 'collage with screenprints and linocuts', '2022', false],
  [flowerPeople, 'Blue', '"Flower people"', 'acrylic and wire on paper', '2021', false],
  [blueprint, 'Green', '"Blueprint"', 'paper stencil, red string', '2023', false],
  [dragonMap, 'Red', '"Dragon map"', 'embroidery on canvas bag', '2022', false],
];

const exhibitionWorks = [
  [exhibitionPoster, 'Green', 'Exhibition poster', '', '', false],
  [artistStatement, 'Red', "Artist's statement", '', '', false],
  [exhibition, 'Blue', 'Exhibition room', '', '', false],
  [somp1, 'Red', '"Shadow of my past (part 1)"', 'lasercut on paper, red string', '2023', false],
  [banksStreetKitchen, 'Blue', '"Banks street kitchen"', 'lithograph on paper and cling wrap', '2023', false],
  [somp2, 'Red', '"Shadow of my past (part 2)"', 'lasercut on paper, red string', '2023', false],
  [home, 'Green', '"Home"', 'oil on canvas', '2021', false],
  [threeWiseFools, 'Blue', '"Three wise fools"', 'collage with screenprints and linocuts', '2022', false],
  [dragonMap, 'Red', '"Dragon map"', 'embroidery on canvas bag', '2022', false],
  [lessOfAStranger, 'Blue', '"Less of a stranger"', 'linocut on paper', '2023', false],
  [somp3, 'Red', '"Shadow of my past (part 3)"', 'lasercut on paper, red string', '2023', false],
  [redacted, 'Green', '"Redacted"', 'screenprint on paper', '2022', false],
  [familyDinner, 'Blue', '"Family dinner"', 'oil on canvas', '2021', false],
  [somp4, 'Red', '"Shadow of my past (part 4)"', 'lasercut on paper, red string', '2023', false],
  [atoll, 'Red', '"Atoll"', 'acrylic on paper', '2022', false],
  [atollCharcoal, 'Red', '"Atoll"', 'charcoal on paper', '2022', false],
  [blueprint, 'Green', '"Blueprint"', 'paper stencil, red string', '2023', false],
  [blueprintFront, 'Green', '"Blueprint"', 'paper stencil, red string', '2023', false],
];

/* ---------- COMPONENTS ---------- */

function BackgroundImage() {
  return <img src={desktopBg} alt="background" className="background desktop" />;
}

function Bio() {
  return (
    <div className="artistStatementContainer">
      <img src={bioPic} className="biopic"/>
      <div className="artistBioText">
        Eva Lau is based in NYC and is inspired by home. She enjoys exploring, through her work,
        home as a physical and conceptual space, as a collection of memories, as a result of care
        and labor, as experiences with people. Patterns, colors, and textures are informed by 
        observations and reflections from complex dynamics within and surrounding the home. Feelings
        arise from trying to understand what often cannot be understood. The resulting textiles, prints,
        and paintings attempt to parse through those feelings regardless.
      </div>
      <div className="artistBioText">
        Eva is medium agnostic and considers every meal she makes a part of her artistic ritual and practice.
      </div>
    </div>
  );
}

function Home() {
  return null;
}

function Content({ src, color, name, medium, year, isVideo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="galleryItem">
        {isVideo ? (
          <video src={src} className={`defaultPhoto photo${color}`} onClick={() => setIsOpen(true)} />
        ) : (
          <img src={src} className="defaultPhoto" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {isOpen && (
        <div className={`modal modal${color}`}>
          <FontAwesomeIcon icon={faCircleXmark} className={`xButton ${color}`} onClick={() => setIsOpen(false)} />
          <div className="imgContainer">
            <div className="imageAndArrows">
              {/* <FontAwesomeIcon icon={faArrowLeft} className={color} /> */}
              {isVideo ? <video src={src} className="modalPhoto" /> : <img src={src} className="modalPhoto" />}
              {/* <FontAwesomeIcon icon={faArrowRight} className={color} /> */}
            </div>
            <div className="label">
              <span><i>{name}</i></span>
              {medium && <span><i>{medium}</i></span>}
              {year && <span><i>{year}</i></span>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function GallerySection({ title, works }) {
  return (
    <div className="section">
      <span className="sectionTitle">{title}</span>
      <div className="gallery">
        {works.map((item, i) => (
          <Content key={i} {...{
            src: item[0],
            color: item[1],
            name: item[2],
            medium: item[3],
            year: item[4],
            isVideo: item[5],
          }} />
        ))}
      </div>
    </div>
  );
}

function Filters() {
  const { pathname } = useLocation();
  const active = (path) => pathname === path;

  return (
    <div className="filterSection">
      <div className="filters">
        <Link to="/prints" className={active('/prints') ? 'filterButtonOnRed photoRed' : 'filterButtonOffRed'}><strong>prints</strong></Link>
        <Link to="/paintings" className={active('/paintings') ? 'filterButtonOnGreen photoGreen' : 'filterButtonOffGreen'}><strong>paintings</strong></Link>
        <Link to="/mixed-media" className={active('/mixed-media') ? 'filterButtonOnBlue photoBlue' : 'filterButtonOffBlue'}><strong>mixed media works</strong></Link>
        <Link to="/exhibition" className={active('/exhibition') ? 'filterButtonOnRed photoRed' : 'filterButtonOffRed'}><strong><i>Home Coming</i> exhibition</strong></Link>
      </div>
    </div>
  );
}

/* ---------- APP ---------- */

export default function App() {
  return (
    <Router>
      <div className="appContainer">
        <BackgroundImage />

        <div className="app">
          <div className="headerContainer">
            <Link to="/">
              <img src={logo} className="logo" />
            </Link>
            <span className="bio">
              <Link to="/bio" className="bioLink">
                <u>Eva Lau</u>
              </Link>
              {' '}is an artist that likes to make all sorts of things, such as...
            </span>
          </div>

          <Filters />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/prints" element={<GallerySection title="prints" works={prints} />} />
            <Route path="/paintings" element={<GallerySection title="paintings" works={paintings} />} />
            <Route path="/mixed-media" element={<GallerySection title="mixed media works" works={mixedMedia} />} />
            <Route path="/exhibition" element={<GallerySection title={<><em>Home Coming</em> exhibition</>} works={exhibitionWorks} />} />
          </Routes>

          <div className="contact">
            <span>contact: <a href="mailto:laueva1219@gmail.com">laueva1219@gmail.com</a></span>
            <span>instagram: <a
              href="https://www.instagram.com/evalau.art/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @evalau.art
            </a></span>
          </div>
        </div>
      </div>
    </Router>
  );
}
