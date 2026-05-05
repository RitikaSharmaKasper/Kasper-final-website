import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import "./Demopopup.css";
import { FaUser, FaEnvelope, FaTimes } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import demo from "../assets/images2/demo.png";
import BASE_URL from "../Pages/Config/Config.js";

const Demopopup = ({ isOpen, onClose }) => {
  // 1. Initialize State
  const navigate = useNavigate();
  const [storeData, setStoreData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    designation: "",
    queryType: "",
    message: "",
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+91",
    flag: "https://flagcdn.com/w20/in.png",
    name: "India",
  });

  const dropdownRef = useRef(null);
  const productDropdownRef = useRef(null);

  const products = [
    { label: "Lead Management (LMS)", value: "LMS" },
    { label: "Inventory Management (IMS)", value: "IMS" },
    { label: "HRMS Management", value: "HRMS" },
  ];

  // Handle outside clicks for custom dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
      if (productDropdownRef.current && !productDropdownRef.current.contains(e.target)) {
        setShowProductDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch Countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all?fields=idd,name,flags");
        const countryList = response.data
          .filter((country) => country.idd && country.idd.root)
          .map((country) => {
            const code = `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ""}`;
            return {
              name: country.name.common,
              code,
              flag: country.flags?.png,
            };
          })
          .sort((a, b) => a.name.localeCompare(b.name));
        setCountries(countryList);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoreData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setStoreData({
      name: "",
      company: "",
      email: "",
      phone: "",
      designation: "",
      queryType: "",
      message: "",
    });
    setCountryCode("+91");
    setSelectedCountry({
      code: "+91",
      flag: "https://flagcdn.com/w20/in.png",
      name: "India",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Ensure these keys match what the Backend destructures
 // MAPPING FRONTEND STATE TO BACKEND EXPECTATIONS
    const payload = {
      name: storeData.name.trim(),
      companyName: storeData.company.trim(), // Backend needs 'companyName'
      email: storeData.email.trim(),
      phone: `${countryCode}-${storeData.phone.trim()}`,
      designation: storeData.designation.trim(),
      product: storeData.queryType,          // Backend needs 'product'
      message: storeData.message.trim(),
    };
    try {
      const response = await axios.post(`${BASE_URL}/api/demo`, payload);
      if (response.data?.success) {
        if (response.data.duplicate) {
          toast.error(response.data.message || "Please take our services");
          const slug = storeData.queryType.toLowerCase();
          setTimeout(() => {
            onClose?.();
            navigate("/thank-you", { state: { title: "Notice", message: response.data.message || "Please take our services", productLink: `/solutions/${slug}`, duplicate: true } });
          }, 1500);
        } else {
          toast.success(response.data.message || "Demo credentials sent to your email!");
          resetForm();
          setTimeout(() => {
            onClose?.();
            navigate("/thank-you", { state: { title: "Thank You!", message: "Our team will connect with you soon." } });
          }, 1500);
        }
      } else {
        toast.error(response.data.error || "Failed to submit request.");
      }
    } catch (error) {
      console.error("Submission error:", error.response?.data || error.message);
      toast.error(error.response?.data?.error || "Server error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="popup-overlay" onClick={onClose}>
      <div className="contact-popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-btn" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>

        <section className="contact">
          <div className="contact-left">
            <h2>Get a Demo</h2>
            <p>Your business matters to us. Contact our team anytime for support, demos, or partnerships.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name<span>*</span></label>
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <input
                    name="name"
                    value={storeData.name}
                    onChange={(e) => {
                      if (/^[a-zA-Z\s]*$/.test(e.target.value) && e.target.value.length <= 40) {
                        handleChange(e);
                      }
                    }}
                    maxLength={40}
                    type="text"
                    placeholder="Enter Full Name"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Designation<span>*</span></label>
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <input
                    name="designation"
                    value={storeData.designation}
                    onChange={(e) => {
                      if (/^[a-zA-Z\s]*$/.test(e.target.value) && e.target.value.length <= 40) {
                        handleChange(e);
                      }
                    }}
                    maxLength={40}
                    type="text"
                    placeholder="Enter Designation"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Company Name<span>*</span></label>
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <input
                    name="company"
                    value={storeData.company}
                    onChange={(e) => { if (e.target.value.length <= 60) handleChange(e); }}
                    maxLength={60}
                    type="text"
                    placeholder="Enter Company Name"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Id<span>*</span></label>
                  <div className="input-with-icon">
                    <FaEnvelope className="input-icon" />
                    <input
                      name="email"
                      value={storeData.email}
                      onChange={(e) => { if (e.target.value.length <= 60) handleChange(e); }}
                      type="email"
                      placeholder="Enter Email Id"
                      maxLength={60}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Phone No.<span>*</span></label>
                  <div className="phone-input">
                    <div className="custom-country-select" ref={dropdownRef}>
                      <div className="country-selected" onClick={() => setShowDropdown(!showDropdown)}>
                        <img src={selectedCountry.flag} alt="flag" className="country-flag" />
                        <span className="country-code-text">{selectedCountry.code}</span>
                        <span className="dropdown-arrow">▾</span>
                      </div>
                      {showDropdown && (
                        <div className="country-dropdown-list">
                          {countries.map((c, i) => (
                            <div key={i} className="country-option" onClick={() => {
                              setSelectedCountry({ code: c.code, flag: c.flag, name: c.name });
                              setCountryCode(c.code);
                              setShowDropdown(false);
                            }}>
                              <img src={c.flag} alt={c.name} className="country-flag" />
                              <span className="country-option-name">{c.name}</span>
                              <span className="country-option-code">{c.code}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="divider">|</span>
                    <input
                      name="phone"
                      value={storeData.phone}
                      onChange={(e) => {
                        if (/^\d*$/.test(e.target.value) && e.target.value.length <= 10) {
                          handleChange(e);
                        }
                      }}
                      type="text"
                      placeholder="Phone No."
                      maxLength={10}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Product<span>*</span></label>
                <div className="custom-product-select" ref={productDropdownRef}>
                  <div className={`product-selected ${showProductDropdown ? "open" : ""}`} onClick={() => setShowProductDropdown(!showProductDropdown)}>
                    <span className="product-selected-label">
                      {storeData.queryType || <span className="product-placeholder">Select Product</span>}
                    </span>
                    <span className={`product-arrow ${showProductDropdown ? "rotated" : ""}`}>▾</span>
                  </div>
                  {showProductDropdown && (
                    <div className="product-dropdown-list">
                      {products.map((p, i) => (
                        <div key={i} className={`product-option ${storeData.queryType === p.value ? "active" : ""}`} onClick={() => {
                          setStoreData(prev => ({ ...prev, queryType: p.value }));
                          setShowProductDropdown(false);
                        }}>
                          <span className="product-name">{p.label}</span>
                          {storeData.queryType === p.value && <span className="product-check">✓</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group full">
                <label>Message</label>
                <textarea
                  name="message"
                  value={storeData.message}
                  onChange={(e) => { if (e.target.value.length <= 100) handleChange(e); }}
                  placeholder="How we can help you?"
                  maxLength={100}
                />
                <small style={{ display: "block", textAlign: "right", fontSize: "11px", color: "#888", marginTop: "4px" }}>
                  {storeData.message.length}/100
                </small>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          <div className="contact-right">
            <img src={demo} alt="contact" />
          </div>
        </section>
      </div>
    </div>,
    document.body
  );
};

export default Demopopup;