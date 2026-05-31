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
import buttonBag1 from './assets/button_bag_1.JPG';
import buttonBag2 from './assets/button_bag_2.JPG';
import downTheDrain from './assets/down-the-drain.jpg';
import dragonMap from './assets/dragon-map.jpg';
import exhibition from './assets/exhibition.jpg';
import exhibitionPoster from './assets/exhibition-poster.png';
import familyDinner from './assets/family-dinner.jpg';
import ferrisWheel from './assets/ferris-wheel.jpg';
import flowerPeople from './assets/flower-people.jpg';
import generations from './assets/generations.jpg';
import glassWater from './assets/glass-and-water.jpg';
import handBag1 from './assets/hand_bag_1.webp';
import handBag2 from './assets/hand_bag_2.webp';
import handBag3 from './assets/hand_bag_3.webp';
import home from './assets/home.jpg';
import homeShirts1 from './assets/home_shirts_1.webp';
import homeShirts2 from './assets/home_shirts_2.webp';
import homeShirts3 from './assets/home_shirts_3.webp';
import homeShirts4 from './assets/home_shirts_4.webp';
import homeShirts5 from './assets/home_shirts_5.webp';
import homeShirts6 from './assets/home_shirts_6.webp';
import hongKong from './assets/hong-kong.jpg';
import kitchenTable from './assets/banks-street-kitchen-table.jpg';
import kitchenShelves from './assets/banks-street-kitchen-shelves.jpg';
import kittyLove from './assets/kitty-love.jpg';
import lessOfAStranger from './assets/less-of-a-stranger.jpg';
import lessOfAStrangerBlack from './assets/less-of-a-stranger-black.jpg';
import lessOfAStrangerGold from './assets/less-of-a-stranger-gold.jpg';
import meditations1 from './assets/mediatations_1.jpg';
import meditations2 from './assets/meditations_2_hr.webp';
import meditations3 from './assets/meditations_3_hr.webp';
import mindPalace from './assets/mind-palace.jpg';
import patchBag1 from './assets/patch_bag_1.JPG';
import patchBag2 from './assets/patch_bag_2.JPG';
import patchBag3 from './assets/patch_bag_3.JPG';
import redacted from './assets/redacted.jpg';
import somp1 from './assets/somp1.jpg';
import somp2 from './assets/somp2.jpg';
import somp3 from './assets/somp3.jpg';
import somp4 from './assets/somp4.jpg';
import spiralBag1 from './assets/spiral_bag_1.JPG';
import spiralBag2 from './assets/spiral_bag_2.JPG';
import spiralBag3 from './assets/spiral_bag_3.JPG';
import threeWiseFools from './assets/three-wise-fools.jpg';
import travelLog from './assets/travel_log_1.mov';
import waterTiles from './assets/water-tiles.jpg';
import welcome1 from './assets/welcome_1_hr.webp'
import welcome2 from './assets/welcome_2_hr.webp'
import welcome3 from './assets/welcome_3_hr.webp'
import wool1 from './assets/wool_hat_1.jpg';
import wool2 from './assets/wool_hat_2_result.webp';
import wool3 from './assets/wool_hat_3_result.webp';
import wool4 from './assets/wool_hat_4_result.webp';

import bioPic from './assets/biopic.jpg';

/* ---------- DATA ---------- */

const fabric = [
  {
    media: [
      { src: patchBag1, type: 'image' }, 
      { src: patchBag2, type: 'image' },
      { src: patchBag3, type: 'image' },
    ],
    color: 'Blue',
    name: "patch bag",
    medium: 'quilted bag with upholstery fabric, block print on canvas patches, hand embroidery',
    year: '2026',
    details: '',
  },
  {
    media: [
      { src: spiralBag1, type: 'image' }, 
      { src: spiralBag2, type: 'image' },
      { src: spiralBag3, type: 'image' },
    ],
    color: 'Green',
    name: "spiral bag",
    medium: 'quilted bag with upholstery fabric, block print on canvas patches',
    year: '2026',
    details: '',
  },
  {
    media: [
      { src: buttonBag1, type: 'image' }, 
      { src: buttonBag2, type: 'image' },
    ],
    color: 'Blue',
    name: "spiral bag",
    medium: 'patchworked bag with upholstery fabric, block print on canvas patches, machine embroidery',
    year: '2026',
    details: '',
  },
  {
    media: [
      { src: homeShirts1, type: 'image' }, 
      { src: homeShirts2, type: 'image' },
      { src: homeShirts3, type: 'image' },
      { src: homeShirts4, type: 'image' },
      { src: homeShirts5, type: 'image' },
      { src: homeShirts6, type: 'image' },
    ],
    color: 'Red',
    name: "i'll be there to take you home",
    medium: 'embroidery, linocut print, and screenprint on thrifted button up shirts with found materials',
    year: '2025',
    details: '(a collaboration with Sahana Vathsa)',
  },
  {
    media: [
      { src: handBag1, type: 'image' }, 
      { src: handBag2, type: 'image' },
      { src: handBag3, type: 'image' },
    ],
    color: 'Blue',
    name: 'Hand bag',
    medium: 'sewn bag, lino cut patches, hand embroidery',
    year: '2025',
    details: '',
  },
  {
    media: [
      { src: wool1, type: 'image' }, 
      { src: wool2, type: 'image' },
      { src: wool3, type: 'image' },
      { src: wool4, type: 'image' },
    ],
    color: 'Green',
    name: 'Wool chefs hat',
    medium: 'patchworked wool and freehand embroidery',
    year: '2025',
    details: '',
  },
  {
    media: [
      { src: welcome1, type: 'image' }, 
      { src: welcome2, type: 'image' },
      { src: welcome3, type: 'image' },
    ],
    color: 'Blue',
    name: 'welcome',
    medium: 'wax resist indigo dyed cotton noren',
    year: '2024',
    details: '',
  },
  {
    media: [{ src: dragonMap, type: 'image' }],
    color: 'Red',
    name: 'Dragon map',
    medium: 'embroidery on canvas bag',
    year: '2022',
    details: '',
  },
];

const prints = [
  {
    media: [{ src: travelLog, type: 'video' }],
    color: 'Red',
    name: 'Travel Log',
    medium: 'Stop motion video of handbound book (Chinese knotting thread, screenprint on linen, text on rice paper, photographs on matte photo paper)',
    year: '2026',
    details: '',
  },
  {
    media: [{ src: downTheDrain, type: 'image' }],
    color: 'Green',
    name: 'Down the drain',
    medium: 'linocut on paper',
    year: '2024',
    details: '',
  },
  {
    media: [{ src: redacted, type: 'image' }],
    color: 'Red',
    name: 'Redacted',
    medium: 'screenprint on paper',
    year: '2022',
    details: '',
  },
  {
    media: [
      { src: blueprint, type: 'image' },
      { src: blueprintFront, type: 'image' },
    ],
    color: 'Green',
    name: 'Blueprint',
    medium: 'paper stencil, red string, shadow',
    year: '2023',
    details: '',
  },
  {
    media: [{ src: generations, type: 'image' }],
    color: 'Blue',
    name: 'Taxonomy',
    medium: 'screenprint on paper',
    year: '2022',
    details: '',
  },
  {
    media: [{ src: kitchenShelves, type: 'image' }],
    color: 'Green',
    name: 'Banks Street kitchen - shelves',
    medium: 'lithograph on paper',
    year: '2023',
    details: '',
  },
  {
    media: [{ src: kitchenTable, type: 'image' }],
    color: 'Red',
    name: 'Banks Street kitchen - table',
    medium: 'lithograph on paper',
    year: '2023',
    details: '',
  },
  {
    media: [{ src: threeWiseFools, type: 'image' }],
    color: 'Blue',
    name: 'Three wise fools',
    medium: 'collage with screenprints and linocuts',
    year: '2022',
    details: '',
  },
  {
    media: [{ src: waterTiles, type: 'image' }],
    color: 'Red',
    name: 'Water tiles',
    medium: 'screenprint on paper',
    year: '2022',
    details: '',
  },
  {
    media: [{ src: hongKong, type: 'image' }],
    color: 'Green',
    name: 'Hong Kong map',
    medium: 'lithograph and screenprint on paper',
    year: '2023',
    details: '',
  },
  {
    media: [
      { src: lessOfAStrangerGold, type: 'image' },
      { src: lessOfAStrangerBlack, type: 'image' },
    ],
    color: 'Red',
    name: 'Less of a stranger',
    medium: 'linocut on paper',
    year: '2023',
    details: '',
  },
  {
    media: [{ src: kittyLove, type: 'image' }],
    color: 'Blue',
    name: 'Love',
    medium: 'lithograph on paper',
    year: '2023',
    details: '',
  },
];

const paintings = [
  {
    media: [
      { src: meditations1, type: 'image' },
      { src: meditations2, type: 'image' },
      { src: meditations3, type: 'image' },
    ],
    color: 'Blue',
    name: 'Meditations',
    medium: 'acrylic, embroidery, and chinese ornamentation on canvas',
    year: '2025',
    details: '',
  },
  {
    media: [{ src: glassWater, type: 'image' }],
    color: 'Red',
    name: 'Glass and water',
    medium: 'acrylic on canvas',
    year: '2024',
    details: '',
  },
  {
    media: [{ src: home, type: 'image' }],
    color: 'Green',
    name: 'Home',
    medium: 'oil on canvas',
    year: '2021',
    details: '',
  },
  {
    media: [{ src: atoll, type: 'image' }],
    color: 'Red',
    name: 'Atoll',
    medium: 'acrylic on paper',
    year: '2022',
    details: '',
  },
  {
    media: [{ src: flowerPeople, type: 'image' }],
    color: 'Blue',
    name: 'Flower people',
    medium: 'acrylic and wire on paper',
    year: '2021',
    details: '',
  },
  {
    media: [{ src: bathroom, type: 'image' }],
    color: 'Red',
    name: 'Bathroom',
    medium: 'gouache on paper',
    year: '2021',
    details: '',
  },
  {
    media: [{ src: ferrisWheel, type: 'image' }],
    color: 'Green',
    name: 'Ferris wheel',
    medium: 'oil on canvas',
    year: '2021',
    details: '',
  },
  {
    media: [{ src: familyDinner, type: 'image' }],
    color: 'Blue',
    name: 'Family dinner',
    medium: 'oil on canvas',
    year: '2021',
    details: '',
  },
  {
    media: [{ src: mindPalace, type: 'image' }],
    color: 'Green',
    name: 'Mind palace',
    medium: 'oil on canvas',
    year: '2021',
    details: '',
  },
];

const exhibitionWorks = [
  { media: [{ src: exhibitionPoster, type: 'image' }], color: 'Green', name: 'Exhibition poster', year: '', medium: '', details: '' },
  { media: [{ src: artistStatement, type: 'image' }], color: 'Red', name: "Artist's statement", year: '', medium: '', details: '' },
  { media: [{ src: exhibition, type: 'image' }], color: 'Blue', name: 'Exhibition room', year: '', medium: '', details: '' },
  { media: [{ src: somp1, type: 'image' }], color: 'Red', name: 'Shadow of my past (part 1)', medium: 'lasercut on paper, red string', year: '2023', details: '' },
  { media: [{ src: banksStreetKitchen, type: 'image' }], color: 'Blue', name: 'Banks street kitchen', medium: 'lithograph on paper and cling wrap', year: '2023', details: '' },
  { media: [{ src: somp2, type: 'image' }], color: 'Red', name: 'Shadow of my past (part 2)', medium: 'lasercut on paper, red string', year: '2023', details: '' },
  { media: [{ src: home, type: 'image' }], color: 'Green', name: 'Home', medium: 'oil on canvas', year: '2021', details: '' },
  { media: [{ src: threeWiseFools, type: 'image' }], color: 'Blue', name: 'Three wise fools', medium: 'collage with screenprints and linocuts', year: '2022', details: '' },
  { media: [{ src: dragonMap, type: 'image' }], color: 'Red', name: 'Dragon map', medium: 'embroidery on canvas bag', year: '2022', details: '' },
  { media: [{ src: lessOfAStranger, type: 'image' }], color: 'Blue', name: 'Less of a stranger', medium: 'linocut on paper', year: '2023', details: '' },
  { media: [{ src: somp3, type: 'image' }], color: 'Red', name: 'Shadow of my past (part 3)', medium: 'lasercut on paper, red string', year: '2023', details: '' },
  { media: [{ src: redacted, type: 'image' }], color: 'Green', name: 'Redacted', medium: 'screenprint on paper', year: '2022', details: '' },
  { media: [{ src: familyDinner, type: 'image' }], color: 'Blue', name: 'Family dinner', medium: 'oil on canvas', year: '2021', details: '' },
  { media: [{ src: somp4, type: 'image' }], color: 'Red', name: 'Shadow of my past (part 4)', medium: 'lasercut on paper, red string', year: '2023', details: '' },
  {
    media: [
      { src: atoll, type: 'image' },
      { src: atollCharcoal, type: 'image' },
    ],
    color: 'Red',
    name: 'Atoll',
    medium: 'acrylic and charcoal on paper',
    year: '2022',
    details: '',
  },
  {
    media: [
      { src: blueprint, type: 'image' },
      { src: blueprintFront, type: 'image' },
    ],
    color: 'Green',
    name: 'Blueprint',
    medium: 'paper stencil, red string',
    year: '2023',
    details: '',
  },
];


/* ---------- COMPONENTS ---------- */

function BackgroundImage() {
  return <img src={desktopBg} alt="background" className="background" />;
}

function Bio() {
  return (
    <div className="artistStatementContainer">
      <img src={bioPic} alt="Eva" className="biopic" />
      <div className="artistBioText">
        I am an artist based in New York City, and my work is comprised of experiential events as well as material forms.
      </div>
      <div className="artistBioText">
        My experiential work involves event design to understand how to develop and maintain meaningful relationships.
        In creating and hosting these events, I explore how deeper connections with other people provide a feeling of
        fullness and satisfaction in our lives. Often set in a home, I facilitate the experience of collective home
        building by combining food, music, and artistic expression. Through the resulting interactions between my guests, 
        all of our past notions of home and self are brought into the same, present space.
      </div>
      <div className="artistBioText">
        My material work is informed by reflecting on and learning from the past. I create to understand my family, the 
        homes we've inhabited, and the complexities that arise. Through symbolic imagery, repeating patterns, and language, 
        my material works show an understanding that memories are not fixed. It makes physical the way the past becomes an 
        active participant in the present.
      </div>
      <div className="artistBioText">
       Process driven and labor intensive work is at the core of both my experiential and material works. The resulting events, 
       fabric pieces, and prints are time consuming and tedious to create, but it is the most rewarding, fulfilling, and functional 
       to experience. In resisting convenience, efficiency, and productivity in my process, I emphasize the importance of labor in 
       creating fulfilling relationships.
      </div>
    </div>
  );
}

function EmbeddedSite({ src, width = 1000, height = 600, scale = 0.8 }) {
  // Calculate scaled width/height
  const scaledWidth = width * scale;
  const scaledHeight = height * scale;

  return (
    <div
      className="embeddedSiteContainer"
      style={{
        width: `${scaledWidth}px`,
        height: `${scaledHeight}px`,
      }}
    >
      <iframe
        src={src}
        title="Embedded Website"
        className="embeddedSiteIframe"
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  );
}

function Events() {
  return (
    <div className="events">
      <div className="housesittingContainer">
        <span className="sectionTitle">Housesitting</span>
        <div className="artistBioText">
          Housesitting was a one-night exhibition / concert / dinner party on June 7th, 2025. Hosted
          in my apartment and curated with two friends, the event was designed and inspired around the
          exploration of home while in a home-space.
        </div>
        <div className="artistBioText">
          <a href="https://housesitting.site" target="_blank" rel="noopener noreferrer">
            Click here to go to the Housesitting website!
          </a>
        </div>
        <EmbeddedSite src="https://housesitting.site" />
      </div>
    </div>
  );
}

function Carousel({ media, color, index, setIndex }) {
  const item = media[index];

  const next = () => setIndex((index + 1) % media.length);
  const prev = () => setIndex((index - 1 + media.length) % media.length);

  return (
    <div className="imageAndArrows">
      {media.length > 1 && (
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={color}
          onClick={prev}
        />
      )}

      {item.type === 'video'
        ? <video src={item.src} className="modalPhoto" controls />
        : <img src={item.src} alt="art piece" className="modalPhoto" />
      }

      {media.length > 1 && (
        <FontAwesomeIcon
          icon={faArrowRight}
          className={color}
          onClick={next}
        />
      )}
    </div>
  );
}


function Content({ media, color, name, medium, year, details = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    setGalleryIndex(0);
  }, [media]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!media || media.length === 0) return null;

  const first = media[galleryIndex] ?? media[0];
  if (!first) return null;

  const next = (e) => {
    e.stopPropagation();
    setGalleryIndex((galleryIndex + 1) % media.length);
  };

  const prev = (e) => {
    e.stopPropagation();
    setGalleryIndex((galleryIndex - 1 + media.length) % media.length);
  };

  return (
    <>
    <div className="galleryItemWrapper">
      <div className="galleryItem">
        {media.length > 1 && (
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={`galleryArrow ${color}`}
            onClick={prev}
          />
        )}

        <div className="galleryMedia" onClick={() => setIsOpen(true)}>
          {first.type === 'video'
            ? <video src={first.src} className={`defaultPhoto photo${color}`} />
            : <img src={first.src} alt="thumbnail" className="defaultPhoto" />
          }
        </div>

        {media.length > 1 && (
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`galleryArrow ${color}`}
            onClick={next}
          />
        )}
      </div>
      <div className="galleryLabel">
        <span><i>{name}</i></span>
        {(year || medium) && (
          <span>
            <i>
              {year ? year : ''}{year && medium ? ' | ' : ''}{medium ? medium : ''}
            </i>
          </span>
        )}
        {details && <span><i>{details}</i></span>}
      </div>
    </div>

      {isOpen && (
        <div
          className="modalOverlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className={`modal modal${color}`}
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={`xButton ${color}`}
              onClick={() => setIsOpen(false)}
            />

            <div className="imgContainer">
              <Carousel
                media={media}
                color={color}
                index={galleryIndex}
                setIndex={setGalleryIndex}
              />

              <div className="label">
                <span><i>{name}</i></span>
                {medium && <span><i>{medium}</i></span>}
                {year && <span><i>{year}</i></span>}
              </div>
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
      <div className="gallery">
        {works.map((item, i) => <Content key={i} {...item} />)}
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
        <Link to="/fabric" className={active('/fabric') ? 'filterButtonOnBlue photoBlue' : 'filterButtonOffBlue'}><strong>fabric</strong></Link>
        <Link to="/prints" className={active('/prints') ? 'filterButtonOnRed photoRed' : 'filterButtonOffRed'}><strong>prints</strong></Link>
        <Link to="/paintings" className={active('/paintings') ? 'filterButtonOnGreen photoGreen' : 'filterButtonOffGreen'}><strong>paintings</strong></Link>
        <Link to="/events" className={active('/events') ? 'filterButtonOnBlue photoBlue' : 'filterButtonOffBlue'}><strong>events</strong></Link>
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
              <img src={logo} alt="logo" className="logo" />
            </Link>
            <div className='headerContainerRight'>
              <span className="bio">
                <Link to="/bio" className="bioLink"><u>Eva Lau</u></Link>{' '}
                is an artist that likes to make all sorts of things, such as...
              </span>
              <Filters />
            </div>
          </div>

          <Routes>
            <Route path="/bio" element={<Bio />} />
            <Route path="/events" element={<Events />} />
            <Route path="/fabric" element={<GallerySection title="fabric" works={fabric} />} />
            <Route path="/prints" element={<GallerySection title="prints" works={prints} />} />
            <Route path="/paintings" element={<GallerySection title="paintings" works={paintings} />} />
            <Route path="/exhibition" element={<GallerySection title={<><em>Home Coming</em> exhibition</>} works={exhibitionWorks} />} />
          </Routes>

          <div className="contact">
            <span>contact: <a href="mailto:laueva1219@gmail.com">laueva1219@gmail.com</a></span>
            <span>instagram: <a href="https://www.instagram.com/evalau.art/" target="_blank" rel="noopener noreferrer">@evalau.art</a></span>
          </div>
        </div>
      </div>
    </Router>
  );
}
