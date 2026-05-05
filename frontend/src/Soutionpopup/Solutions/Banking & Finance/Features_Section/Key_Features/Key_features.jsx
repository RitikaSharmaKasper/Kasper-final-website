import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "Core Banking Engine (CBE)",
      description:
       "A high-performance, real-time ledger system that handles multi-currency transactions, interest accruals, and balance updates with zero latency.",
      image: icon,
    },
    {
      title: "AI-Driven Credit Scoring",
      description:
        "Automate loan approvals by analyzing borrower data, transaction history, and alternative credit signals to predict default risks accurately.",
      image: icon,
    },
    {
      title: "Automated Loan Lifecycle Management",
      description:  "From digital application and document verification to disbursement, EMI scheduling, and final closure—all in one automated workflow.",
      image: icon,
    },
    {
      title: "Anti-Money Laundering (AML) & KYC Suite:",
      description:
        "Integrated biometric verification and AI-based pattern recognition to detect suspicious transactions and ensure global compliance.",
         image: icon,
    },
    {
      title: "Multi-Asset Investment Tracker",
      description:
       "Manage portfolios across stocks, bonds, mutual funds, and digital assets with real-time market data feeds and performance heatmaps.",
        image: icon,
    },

    {
      title: "Smart Fixed Deposit & Recurring Deposit (FD/RD) Manager",
      description:
       "Automate the creation, premature closure, and maturity settlement of deposit schemes with tiered interest rate logic.",
        image: icon,
    },
    {
      title: "Digital Collateral & Document Vault",
      description:
       "An encrypted repository for property papers, gold valuation reports, and legal agreements with automated re-valuation alerts.",
        image: icon,
    },
    {
      title: "Real-Time Cash Flow & Liquidity Analytics",
      description:
       "Advanced dashboards for treasury management, monitoring Cash Reserve Ratios (CRR) and Statutory Liquidity Ratios (SLR) instantly.",
        image: icon,
    },
    {
      title: "SAutomated Recovery & NPA Management",
      description:
       "Identify At-Risk accounts early and trigger automated multi-stage recovery notices via SMS, WhatsApp, and Email.",
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