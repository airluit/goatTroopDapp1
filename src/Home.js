import React from 'react'
import App from './App'
import AboutPage from './pages/AboutPage/AboutPage'
import RoadMap from './pages/RoadMap/RoadMap'
import TeamPage from './pages/TeamPage/TeamPage'
import BuyPage from './pages/BuyPage/BuyPage'
import PhasePage from './pages/PhasePage/PhasePage'
import TermsPage from './pages/TermsPage/TermsPage'
import GalleryPage from './pages/GalleryPage/GalleryPage'

import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";


function Home() {
  let params = new URLSearchParams( useLocation().search);
  let route = params ? params.get('page') : null;
  
  let Page = App;
  switch (route) {
    case 'about':
      Page = AboutPage;
      break;
    case 'map':
      Page = RoadMap;
      break;
    case 'buy':
      Page = BuyPage;
      break;
    case 'team':
      Page = TeamPage;
      break;
    case 'phase2':
      Page = PhasePage;
      break;
    case 'terms':
      Page = TermsPage;
      break;
    case 'gallery':
      Page = GalleryPage;
      break;
  }
  return (
      <Page />
  )
}

export default Home
