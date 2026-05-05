import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
   {
      title: "Business Integration",
      description:
       "Our ERP systems connect different departments like sales, finance, HR, and inventory in one platform, helping businesses manage operations smoothly and avoid manual work or scattered data.",
      image: icon,
    },
    {
      title: "Real-Time Reports",
      description:
        "Get real-time reports and dashboards that show sales, expenses, stock levels, and performance. This helps business owners make faster and smarter decisions.",
      image: icon,
    },
    {
      title: "Inventory Control",
      description:  "Track inventory levels, stock movement, and supplier data easily. Our ERP system reduces stock errors and helps businesses manage products and warehouses efficiently.",
      image: icon,
    },
    {
      title: "Financial Management",
      description:
        "Manage accounting, invoices, expenses, and financial reports in one system. This helps businesses keep accurate financial records and understand their cash flow clearly.",
         image: icon,
    },
    {
      title: "HR Management",
      description:
       "Our ERP software includes HR features like employee records, attendance, payroll, and leave management, helping organizations manage their workforce efficiently.",
        image: icon,
    },

    {
      title: "Customer Management",
      description:
       "Manage customer details, orders, and communication from a centralized dashboard. This improves customer service and helps businesses build stronger client relationships.",
        image: icon,
    },
    {
      title: "Custom Modules",
      description:
       "Every business has different needs. We develop custom ERP modules that match your workflow, business model, and operational requirements.",
        image: icon,
    },
    {
      title: "Cloud Access",
      description:
       "Access your ERP system securely from anywhere using cloud technology. This helps teams collaborate easily and manage operations remotely.",
        image: icon,
    },
    {
      title: "Data Security",
      description:
       "Our ERP solutions follow strong security practices to protect business data and prevent unauthorized access, ensuring safety and reliability for sensitive information.",
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