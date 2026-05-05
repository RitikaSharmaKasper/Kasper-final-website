import React from 'react'
import "./ValuedClient.css"
import client0 from "../assets/images2/client0.svg"

import client01 from "../assets/images2/client01.svg"
import client1 from "../assets/images2/client1.svg"
import client2 from "../assets/images2/client2.svg"
import client3 from "../assets/images2/client3.svg"
import client4 from "../assets/images2/client4.svg"
import client5 from "../assets/images2/client5.svg"
import client6 from "../assets/images2/client6.svg"
import client7 from "../assets/images2/client7.svg"
const ValuedClients = () => {
  return (
    <div className="valued-clients">
  <p>Our Valued Clients</p>

  <div className="clients-slider">

  {/* Left fixed logo */}
  <img className="fixed-logo left" src={client0} alt="" />

  {/* Scroll area */}
  <div className="scroll-wrapper">
    <div className="clients-track">
      <img src={client1} alt="" />
      <img src={client2}  alt="" />
      <img src={client3}  alt="" />
     <img src={client4}  alt="" />
     <img src={client5}  alt="" />
     <img src={client6}  alt="" />
     <img src={client7}  alt="" />
       <img src={client1} alt="" />
      <img src={client2}  alt="" />
      <img src={client3}  alt="" />
     <img src={client4}  alt="" />
     <img src={client5}  alt="" />
     <img src={client6}  alt="" />
     <img src={client7}  alt="" />
    </div>
  </div>

  <img className="fixed-logo right" src={client01} alt="" />

</div>
</div>

  )
}

export default ValuedClients