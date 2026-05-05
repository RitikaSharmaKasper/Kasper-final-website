import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "Unified Omnichannel Inventory",
      description:
       "Sync your stock levels in real-time across your website, mobile app, physical stores, and marketplaces like Amazon or Flipkart to prevent overselling.",
      image: icon,
    },
    {
      title: "AI-Powered Product Recommendations",
      description:
        "An Amazon-style engine that suggests products to users based on browsing history, purchase patterns, and seasonal trends.",
      image: icon,
    },
    {
      title: "Dynamic Pricing Engine",
      description:  "Automatically adjust prices based on competitor data, demand spikes, or inventory age to maximize your profit margins.",
      image: icon,
    },
    {
      title: "Multi-Vendor Marketplace Support",
      description:
        "Transform your store into a marketplace by allowing third-party sellers to list products, with automated commission and payout management.",
         image: icon,
    },
    {
      title: "Smart Abandoned Cart Recovery",
      description:
       "Automated WhatsApp and Email sequences with personalized discount codes to bring back window shoppers and complete the sale.",
        image: icon,
    },

    {
      title: "Integrated Logistics & Last-Mile Tracking",
      description:
       "Native integration with global and local couriers for instant shipping label generation and real-time Map-view tracking for customers.",
        image: icon,
    },
    {
      title: "Visual Search & AR Try-On",
      description:
       "Allow customers to find products by uploading photos or  try onitems like glasses or makeup using Augmented Reality directly in the browser.",
        image: icon,
    },
    {
      title: "Advanced Loyalty & Reward Engine",
      description:
       "Create complex loyalty tiers (Silver, Gold, Platinum) with points, referral bonuses, and VIP-only early access to sales.",
        image: icon,
    },
    {
      title: "Hyper-Local SEO & Store Locator",
      description:
       "Drive foot traffic to physical stores with geo-targeted product availability and Click & Collect (BOPIS) functionality.",
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