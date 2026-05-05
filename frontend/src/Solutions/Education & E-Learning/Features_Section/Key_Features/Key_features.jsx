import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "AI-Personalized Learning Paths",
      description:
       "An adaptive engine that analyzes student performance to suggest custom lessons, quizzes, and resources tailored to their individual learning speed.",
      image: icon,
    },
    {
      title:"Hybrid Virtual Classroom",
      description:
        "High-definition interactive classrooms with integrated digital whiteboards, real-time polling, and automated Hand Raise queue management.",
      image: icon,
    },
    {
      title: "Business Operations",
      description:  "Manage sales, purchasing, inventory, and daily operations in one platform, improving coordination between different business functions.",
      image: icon,
    },
    {
      title: "Gamified Assessment Engine",
      description:
        "Transform exams into engaging challenges with leaderboards, digital badges, and instant AI-generated feedback for every answer.",
         image: icon,
    },
    {
      title: "Secure Online Proctoring",
      description:
       "AI-monitored examinations with browser lockdown, facial recognition, and anomaly detection to ensure academic integrity during remote testing.",
        image: icon,
    },

    {
      title: "Multi-Format Content Library",
      description:
       "Support for SCORM, xAPI, 4K video, interactive PDFs, and VR/AR modules, all organized in a searchable, Netflix-style student dashboard.",
        image: icon,
    },
    {
      title: "Automated Grading & Feedback",
      description:
       "Save hours for educators with AI that grades objective tests instantly and provides Smart Suggestions for grading subjective essays.",
        image: icon,
    },
    {
      title: "Parent-Teacher-Student Sync",
      description:
       "A unified communication hub for real-time progress alerts, attendance notifications, and digital permission slips.",
        image: icon,
    },
    {
      title: "Corporate LMS & Skill Tracking",
      description:
       "Specialized tools for employee onboarding, compliance certification, and tracking professional development credits (CPE/CEU).",
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