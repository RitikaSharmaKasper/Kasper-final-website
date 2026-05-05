import React from 'react'
import AboutBanner from './AboutBanner'
import AboutText from './AboutText'
import { Suspense,lazy } from 'react'
import { Helmet } from 'react-helmet-async'
// 2. Lazy load components that appear further down the page
const Leaders = lazy(() => import('./Leaders'));
const Team = lazy(() => import('./Team'));
const AboutUs = () => {
  return (<>
   <Helmet>
        <title>Know More About Us| Kasper Infotech</title>
        <meta
          name="discription"
          content="Learn about us our expert team and comprehensive services in digital marketing and web development."
        />
        <meta name="keywords" content="About us" />

        <link rel="canonical" href="https://kasperinfotech.com/About-us" />
        <meta
          property="og:title"
          content="Know More About us | Kasper Infotech"
        />
        <meta property="og:site_name" content="Kasper Infotech" />
        <meta property="og:url" content="https://kasperinfotech.com/About-us" />
        <meta
          property="og:description"
          Content="Learn about us our expert team and comprehensive services in digital marketing and web development."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://kasperinfotech.com/static/media/CRMMigration.c30b479028a90c971cf38a10328ecf98.svg"
        />
      </Helmet>
 
    <div>

{/* code */}
        <AboutBanner/>
        <AboutText/>
      <Suspense fallback={<div className="py-20 text-center">Loading section...</div>}>
          <Leaders />
          <Team />
        </Suspense>
    </div>
     </>
  )
}

export default AboutUs