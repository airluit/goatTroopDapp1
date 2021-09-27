import React from 'react'
import App from './App'
import AboutPage from './pages/AboutPage/AboutPage'
import RoadMap from './pages/RoadMap/RoadMap'
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
  }
  return (
      <Page />
  )
}

export default Home
