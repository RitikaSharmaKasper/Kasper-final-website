import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "AI-Powered Workout & Diet Planner",
      description:
       " Generate personalized fitness and nutrition regimes based on a member’s BMI, fitness goals, and medical history.",
      image: icon,
    },
    {
      title: "Biometric Attendance & Access Control",
      description:
        "Seamlessly manage entry and exit for members and staff using facial recognition or fingerprint scanning integrated with their membership status.",
      image: icon,
    },
    {
      title: "Automated Subscription & Billing",
      description:  "Manage monthly memberships, personal training packages, and pay-as-you-go sessions with automated recurring payments and GST-compliant invoicing.",
      image: icon,
    },
    {
      title: "Mobile Member App & Virtual Locker",
      description:
        "Provide members with a dedicated app to track their progress, book classes, and access a digital locker for their health records.",
         image: icon,
    },
    {
      title: "Inventory & Supplement Store POS",
      description:
       "Integrated Point of Sale (POS) to manage the sale of gym equipment, supplements, and merchandise with real-time stock alerts.",
        image: icon,
    },

    {
      title: "Advanced Performance Analytics",
      description:
       "Track student or athlete progress over time using visual charts for strength gains, stamina, and body composition changes.",
        image: icon,
    },
    {
      title: "Smart Slot & Court Booking",
      description:
       "Real-time scheduling for badminton courts, swimming lanes, or yoga studios to prevent overbooking and maximize facility utilization.",
        image: icon,
    },
    {
      title: "Trainer & Staff Payroll Management",
      description:
       "Track trainer sessions, calculate commissions based on PT (Personal Training) hours, and manage staff shifts from one dashboard.",
        image: icon,
    },
    {
      title: "Automated Renewal & We Miss You Alerts",
      description:
       "Boost retention with automated WhatsApp/SMS reminders for expiring memberships and special re-engagement offers for inactive members.",
        image: icon,
    },
  ];

  return (
    <section className="features-section">
      <div className="features_content">

        <h2 className="features-heading">Key Features</h2>

        <div className="features-wrapper">
          {featuresList.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Key_features;