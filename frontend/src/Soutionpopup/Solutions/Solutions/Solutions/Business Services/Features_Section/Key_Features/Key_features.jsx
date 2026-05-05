import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "AI-Driven Project Scoping",
      description:
       "Use historical data to predict project timelines, resource requirements, and budget estimates with 95% accuracy during the proposal stage.",
      image: icon,
    },
    {
      title: "Unified Client Relationship Management (CRM)",
      description:
        "A 360-degree view of every client interaction, from the first cold email to the final project sign-off and testimonial.",
      image: icon,
    },
    {
      title: "Automated Contract & NDA Lifecycle",
      description:  "Generate, send, and e-sign legally binding contracts and non-disclosure agreements with automated renewal and expiry alerts.",
      image: icon,
    },
    {
      title: "Smart Resource Allocation & Heatmaps",
      description:
        "Visualize team bandwidth in real-time. Identify overloaded vs. underutilized experts to balance workloads across departments..",
         image: icon,
    },
    {
      title: "Time-Tracking & Billable Hour Analytics",
      description:
       "Integrated timers and digital timesheets that sync directly with payroll and client invoicing to ensure zero leakage of billable time.",
        image: icon,
    },

    {
      title: "Time-Tracking & Billable Hour Analytics",
      description:
       "Integrated timers and digital timesheets that sync directly with payroll and client invoicing to ensure zero leakage of billable time.",
        image: icon,
    },
    {
      title: "SClient Collaboration Portal",
      description:
       "A secure, white-labeled space where clients can track project milestones, approve deliverables, and communicate with their dedicated team.",
        image: icon,
    },
    {
      title: "Automated Expense & Reimbursement Tracking",
      description:
       "Allow employees to scan receipts via mobile to automatically categorize expenses against specific client projects.",
        image: icon,
    },
    {
      title: "Advanced Profitability Dashboards",
      description:
       "Real-time visibility into the Gross Margin of every project, service line, and individual consultant within the firm",
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