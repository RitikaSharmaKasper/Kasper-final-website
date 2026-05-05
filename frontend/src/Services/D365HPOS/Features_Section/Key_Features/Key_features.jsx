import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg";
const Key_features = () => {
  const featuresList = [
    {
      title: "Bill Splitting",
      description:
        "Easily split bills using equal, category, or item-wise options, helping customers pay conveniently and improving billing flexibility.",
      image: icon,
    },
    {
      title: "E-Menu Management",
      description:
        "Create and manage menus, submenus, combos, and pricing in one system, making menu updates simple and quick.",
      image: icon,
    },
    {
      title: "Table Management",
      description:
        "Manage table layouts, seating capacity, and transfers. Combine or move tables easily to handle customer flow efficiently.",
      image: icon,
    },
    {
      title: "Kitchen Orders",
      description:
        "Generate kitchen order tickets based on item categories and send orders directly to the kitchen for faster processing.",
      image: icon,
    },
    {
      title: "Pre-Receipt",
      description:
        "Provide customers with a detailed order summary before final billing, improving transparency and customer experience.",
      image: icon,
    },
    {
      title: "Promotions",
      description:
        "Manage offers like BOGO, discounts, and special deals to attract customers and increase sales.",
      image: icon,
    },
    {
      title: "Recipe Management",
      description:
        "Control food costs by managing recipes and ingredients with user-based access and tracking.",
      image: icon,
    },
    {
      title: "Reports",
      description:
        "Access reports such as sales summary, order analysis, and table performance to understand business operations better.",
      image: icon,
    },
    {
      title: "Item Modifiers",
      description:
        "Add custom instructions or preferences to orders, ensuring customer requests are clearly communicated to the kitchen.",
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
