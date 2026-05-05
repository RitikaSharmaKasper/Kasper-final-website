import React from 'react'

import { BrowserRouter } from 'react-router-dom';

import { useRef } from 'react';
import BackgroundBeamsWithCollisionDemo from './background-beams-with-collision-demo.jsx';
import Services from './Services.jsx';
import ValuedClients from './ValuedClients.jsx';
import MovingCards from './MovingCards.jsx';
import Wavestru from './Wavestru.jsx';
import IndustriesServe from './IndustriesServe.jsx';
import Blogs from './Blogs.jsx';
import Reviews from './Reviews.jsx';
import { Helmet } from "react-helmet-async";

const Home = () => {
  
  return (
    <>

     <Helmet>
        <title>
          Expert Software Development Company for Growing Businesses
        </title>

        <meta
          name="google-site-verification"
          content="KxPql2-o-DlKWK3WTiUFvCosrRkP_lgOKxx7No7niwo"
        />
        <meta
          name="discription"
          content="Kasper Infotech is innovative software development company they provide best solution that boost business productivity."
        />
        <meta name="keywords" content="software development company" />

        <link rel="canonical" href="https://kasperinfotech.com/" />

        <meta
          property="og:title"
          content="Expert Software Development Company for Growing Businesses"
        />
        <meta property="og:site_name" content="Kasper Infotech" />
        <meta property="og:url" content="https://kasperinfotech.com" />
        <meta
          property="og:description"
          content="Kasper Infotech is innovative software development company they provide best solution that boost business productivity."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/p/AF1QipMJKy79j1ZJ80lWsI-Ld1_ddDCAfZfWnplN-tIV=s680-w680-h510"
        />
      </Helmet>

<BackgroundBeamsWithCollisionDemo/>
<Services/>
<ValuedClients/>
<MovingCards/>
<Wavestru/>
<IndustriesServe/>
<Blogs/>
<Reviews/>

  
      </>
  )
}

export default Home;
 