import React from 'react'
import  "./IndustriesServe.css"

import realState from "../../../../assets/images/realState.jpg"

import media from  "../../../../assets/images/media.jpg"
import Banking from  "../../../../assets/images/Banking.jpg"

  import Bussiness from  "../../../../assets/images/Bussiness.jpg"

    import ECommerce from  "../../../../assets/images/ECommerce.jpg"
      import education from  "../../../../assets/images/education.jpg"
        import fitness from  "../../../../assets/images/fitness.jpg"
          import Social_Media from  "../../../../assets/images/Social_Media.jpg"
            import travel from  "../../../../assets/images/travel.jpg"
              import Sports from  "../../../../assets/images/Sports.jpg"
                     import it from  "../../../../assets/images/it.jpg"



const IndustriesServe = () => {
  return (
<div className='Industries-main-div'>
  <p>Industries we serve</p>

  <div className="industry-imagediv">

    <div className="industry-card">
      <img src={travel}alt="" />
      <p>Travel and Tourism</p>
    </div>

    <div className="industry-card">
      <img src={fitness} alt="" />
      <p>Healthcare & Fitness</p>
    </div>

    <div className="industry-card">
      <img src={realState }alt="" />
      <p>Real Estate</p>
    </div>

    <div className="industry-card">
      <img src={ media} alt="" />
      <p>Media & Entertainment</p>
    </div>

    <div className="industry-card">
      <img src={Social_Media } alt="" />
      <p>Social Media & Networking</p>
    </div>
    <div className="industry-card">
      <img src={ECommerce} alt="" />
      <p>E-commerce</p>
    </div>
    <div className="industry-card">
      <img src={education} alt="" />
      <p>Education & E-learning</p>
    </div>
    <div className="industry-card">
      <img src={Banking} alt="" />
      <p>Banking & Finance</p>
    </div>
    <div className="industry-card">
      <img src={Sports} alt="" />
      <p>Sports & Wellness</p>
    </div>
     <div className="industry-card">
      <img src={it}alt="" />
      <p>IT & ITES</p>
    </div>
     <div className="industry-card">
      <img src={Bussiness} alt="" />
      <p>Business Services</p>
    </div>


  </div>
</div>
  )
}

export default IndustriesServe;