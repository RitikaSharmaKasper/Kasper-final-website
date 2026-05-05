import React from "react";
import "./Services.css";
import Build from "./Build";
import Design from "./Design";
import Grow from "./Grow";
import Pie from "../assets/images2/Pie.svg";
import Web from "../assets/images2/Web.svg";
import Message1 from "../assets/images2/Message1.png";

import Message2 from "../assets/images2/Message2.png";
import second from "../assets/images2/second.svg";
import DotArrow from "../assets/images2/Dot Arrow.svg";
import sketch from "../assets/images2/sketch.svg";
import Message3 from "../assets/images2/Message3.png";
import colouredarrow from "../assets/images2/coloured-arrow.svg";
import colouredsecond from "../assets/images2/colouredsecond.svg";
import coloureddesign from "../assets/images2/coloured-design.svg";
import colouredsketch from "../assets/images2/coloured-sketch.svg";
import Group2 from "../assets/images2/Group2.svg";
import Group from "../assets/images2/Group.svg";

import groupback from "../assets/images2/groupback.png";
const Services = () => {
  const services = [
    {
      index: "1",
      category: "Build",
      title: "Software & SaaS Development",
      desc: "Build scalable web, mobile, and custom software solutions.",
      img: [Pie],
      bgImg: Web,
      // Adding unique messages for this card
      messages: [Message1, Message2, Message3],
      cardType: "type-build",
    },
    {
      index: "2",
      category: "Design",
      title: "UI/UX Design",
      desc: "Design experiences that boost engagement and conversions.",
      img: [second, DotArrow, sketch],
      bgImg: "",
      // Maybe this card only has 2 messages or different ones
      messages: [colouredarrow, colouredsecond, coloureddesign, colouredsketch],
      cardType: "type-design",
    },
    {
      index: "3",
      category: "Grow",
      title: "Growth & Digital Marketing",
      desc: "Data-driven marketing strategies focused on measurable business growth.",
      img: [Group2, Group, groupback],
      bgImg: "",
      // Different functionality: No messages, just background decor
      messages: [
        "./linkedin.png",
        "./instagram.png",
        "./facebook.png",
        "./youtube.png",
      ],
      cardType: "type-grow",
    },
  ];

  return (
    <section className="py-20 bg-white text-center relative overflow-visible service-section">
      <h2 className=" text-[#002D2D] mb-40 services-we-offer">
        Services We Offer
      </h2>

      <div className="services-line"></div>

      <div className="service-grid-conatiner">
        {/* Card 1: Design */}
        <Build service={services[0]} />

        {/* Card 2: Design */}
        <Design service={services[1]} />

        {/* Card 3: Grow */}
        <Grow service={services[2]} />
      </div>
    </section>
  );
};

export default Services;
