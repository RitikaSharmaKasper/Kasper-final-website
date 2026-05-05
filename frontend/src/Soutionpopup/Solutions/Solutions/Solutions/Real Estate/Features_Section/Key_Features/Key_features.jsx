import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "Interactive Visual Inventory",
      description:
       "A digital bird’s-eye view of your projects. Track Available,Booked, and Hold units in real-time with clickable floor plans.",
      image: icon,
    },
    {
      title: "Automated Installment & Payment Plans",
      description:
        "Generate customized payment schedules (Down payment, Construction-linked, or Possession-linked) with automated interest calculations.",
      image: icon,
    },
    {
      title: "Lead-to-Site Visit Tracker",
      description:  "Integrated CRM that tracks the journey from a web inquiry to an actual site visit, including geo-tagged check-ins for sales agents.",
      image: icon,
    },
    {
      title: "Digital Document & KYC Vault",
      description:
        "Securely store all buyer documents, sale deeds, and identity proofs. Auto-generate Allotment Letters and Builder-Buyer Agreements",
         image: icon,
    },
    {
      title: "Channel Partner (Agent) Portal",
      description:
       "A dedicated space for external brokers to check live inventory, submit leads, and track their commission payouts transparently.",
        image: icon,
    },

    {
      title: "Construction Progress Monitoring",
      description:
       "Milestone-based tracking where project managers can upload site photos and updates, automatically triggering payment demands to buyers.",
        image: icon,
    },
    {
      title: "Smart Rental & Lease Management",
      description:
       "For property managers, automate rent collection, maintenance alerts, and lease renewal notifications for commercial or residential assets.",
        image: icon,
    },
    {
      title: "Automated Demand Letters",
      description:
       "The system identifies when a payment is due and sends professional PDF demand letters via WhatsApp and Email with one click..",
        image: icon,
    },
    {
      title: "Expense & Vendor Tracking",
      description:
       
      "Manage your construction costs, labor payments, and raw material inventory to ensure your project stays within budget.",
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