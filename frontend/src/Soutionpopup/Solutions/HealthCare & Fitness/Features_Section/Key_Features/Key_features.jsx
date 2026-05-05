import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "AI-Driven Electronic Health Records",
      description:
       "A centralized, encrypted vault for patient history, prescriptions, and lab results with AI that flags potential drug interactions or recurring symptoms.",
      image: icon,
    },
    {
      title: "Smart Telemedicine & Virtual Consults",
      description:
        "High-definition video integration with real-time vitals sharing, digital prescriptions, and automated follow-up scheduling.",
      image: icon,
    },
    {
      title: "Preventative Wellness Engine",
      description:  "Uses AI to analyze blood-work and fitness data to suggest proactive lifestyle changes, nutrition plans, and early-warning health screenings.",
      image: icon,
    },
    {
      title: "Integrated Pharmacy & Lab Management",
      description:
        "Real-time sync between doctors and the in-house pharmacy/lab for instant order fulfillment and digital report delivery to the patient app.",
         image: icon,
    },
    {
      title: "Biometric & Wearable Data Sync",
      description:
       "Seamlessly pull data from CGMs (Continuous Glucose Monitors), heart rate monitors, and smart scales to track patient health outside the clinic.",
        image: icon,
    },

    {
      title: "Automated Appointment & OT Scheduling",
      description:
       "Intelligent booking for OPD visits and Operation Theater (OT) management, optimizing surgeon availability and reducing patient wait times..",
        image: icon,
    },
    {
      title: "nsurance & TPA Claims Processing",
      description:
       "Automated billing that handles multiple insurance providers (TPAs) and government health schemes with instant eligibility checks.",
        image: icon,
    },
    {
      title: "Patient Engagement & Recovery App",
      description:
       "A dedicated mobile portal for patients to view recovery milestones, set medication reminders, and chat with their care team.",
        image: icon,
    },
    {
      title: "Advanced Radiology (PACS) Integration",
      description:
       "View and share X-rays, MRIs, and CT scans directly within the patient profile using high-speed cloud imaging standards.",
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