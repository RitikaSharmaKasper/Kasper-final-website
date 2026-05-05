import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "AI-Driven Discovery Engine",
      description:
       "Suggest relevant connections, groups, and content based on user interests, professional skills, and behavioral patterns.",
      image: icon,
    },
    {
      title: "Real-Time Multimedia Feed",
      description:
        "A high-speed, dynamic newsfeed supporting 4K video streaming, high-res images, and interactive polls with zero latency.",
      image: icon,
    },
    {
      title: "Encrypted Private Messaging",
      description:  ": End-to-end encrypted one-on-one and group chats with self-destructing message options and voice/video call integration.",
      image: icon,
    },
    {
      title: "Community & Sub-Group Hubs",
      description:
        "Create public or private spaces for specific interests, departments, or regions with dedicated moderation tools",
         image: icon,
    },
    {
      title: "Professional Portfolio/Profile Builder",
      description:
       "Advanced user profiles featuring verified badges, skill endorsements, and integrated portfolios for networking.",
        image: icon,
    },

    {
      title: "Live Streaming & Virtual Events",
      description:
       "Host webinars, town halls, or live Q&A sessions with real-time comments, raised hand features, and virtual gifting.",
        image: icon,
    },
    {
      title: "Monetization & Creator Tools",
      description:
       "Built-in support for subscription models, pay-per-view content, and integrated digital wallets for seamless transactions.",
        image: icon,
    },
    {
      title: "Advanced Content Moderation AI",
      description:
       "Automated filters to detect and flag hate speech, spam, and inappropriate content to maintain a safe community environment.",
        image: icon,
    },
    {
      title: "Deep Engagement Analytics",
      description:
       "Comprehensive dashboards for admins to track viral trends, user retention, and peak activity hours.",
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