import React from 'react'
import App from './App'
import AboutPage from './pages/AboutPage/AboutPage'
import RoadMap from './pages/RoadMap/RoadMap'
import TeamPage from './pages/TeamPage/TeamPage'
import MarchingOrders from './pages/MarchingOrders/MarchingOrders'
import StoryPage from './pages/StoryPage/StoryPage'
import TermsPage from './pages/TermsPage/TermsPage'
import TraitsPage from './pages/TraitsPage/TraitsPage'
import DonationsPage from './pages/DonationsPage/DonationsPage'
import './HomeStyles.css';

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
    case 'marching':
      Page = MarchingOrders;
      break;
    case 'team':
      Page = TeamPage;
      break;
    case 'story':
      Page = StoryPage;
      break;
    case 'terms':
      Page = TermsPage;
      break;
    case 'traits':
      Page = TraitsPage;
      break;
    case 'donations':
      Page = DonationsPage;
      break;
  }
  return (
    <div className="home-page">
      <Page />
    </div>
  )
}

export default Home
