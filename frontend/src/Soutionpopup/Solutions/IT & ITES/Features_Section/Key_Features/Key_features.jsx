import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "AI-Native Service Desk",
      description:
       "An intelligent ticketing system that uses GenAI to automatically route issues, suggest resolutions, and generate technical documentation in real-time.",
      image: icon,
    },
    {
      title: "SLA & KPI Command Center",
      description:
        "Real-time monitoring of Service Level Agreements with automated at-risk alerts and visual dashboards for uptime, response time, and resolution quality.",
      image: icon,
    },
    {
      title: "Hybrid Cloud Resource Manager",
      description:  "A unified interface to manage workloads across on-premise, public, and private clouds, including automated cost optimization and usage tracking.",
      image: icon,
    },
    {
      title: "Zero-Trust Security & Compliance Vault",
      description:
        "Built-in security protocols for data localization and regulatory compliance (GDPR/HIPAA), featuring automated audits and identity-focused access controls.",
         image: icon,
    },
    {
      title: "Automated Billing & Utilization Tracker",
      description:
       "Track billable hours and resource utilization automatically. Generate multi-currency invoices based on fixed-bid, milestone, or time-and-material models.",
        image: icon,
    },

    {
      title: "Global Delivery Talent Engine",
      description:
       ": Manage a distributed workforce with tools for skill-gap analysis, automated shift scheduling for 24/7 operations, and internal re-skilling pathways.",
        image: icon,
    },
    {
      title: "SD-WAN & Network Health Monitor",
      description:
       "Monitor the connectivity of remote and branch offices to ensure high-performance access to critical client environments and cloud applications.",
        image: icon,
    },
    {
      title: "Automated Provisioning & DevOps Integration",
      description:
       "Speed up project kick-offs with automated environment setup, version control integration, and continuous deployment (CI/CD) pipelines.",
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