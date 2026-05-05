import React from "react";
import "./Contact.css";
import { FaUser, FaEnvelope } from "react-icons/fa";
import {useState,useEffect,useRef} from "react";
import { Toaster } from "react-hot-toast";
import img from "../../../assets/images/img.svg";
import BASE_URL from "@/Pages/Config/Config";

import axios from "axios";
import toast from "react-hot-toast";
const Contact = () => {

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
  const [selectedCountry, setSelectedCountry] = useState({ code: "+91", flag: "https://flagcdn.com/w20/in.png", name: "India" });
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [countries, setCountries] = useState([]);
  const [showProductDropdown, setShowProductDropdown] = useState(false);

  const dropdownRef = useRef(null);
  const productDropdownRef = useRef(null);

 
  const products = [
    { label: "Lead Management", value: "Lead Management" },
    { label: "Inventory Management", value: "Inventory Management" },
    { label: "HRMS Management", value: "HRMS Management" },
  ];


  // 1. CLICK OUTSIDE HANDLER (Moved to top level)
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

  // 2. FETCH COUNTRIES
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all?fields=idd,name,flags");
        const countryList = response.data
          .filter((country) => country.idd && country.idd.root)
          .map((country) => {
            const code = `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ""}`;
            return { name: country.name.common, code, flag: country.flags?.png };
          })
          .sort((a, b) => a.name.localeCompare(b.name));
        setCountries(countryList);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // 3. BODY SCROLL LOCK
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoreData((prev) => ({ ...prev, [name]: value }));
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

    const payload = {
      ...storeData,
      phone: `${countryCode}-${storeData.phone}`,
      WebsiteName: "kasperinfotech.com",
    };

    console.log("Submitting payload:", payload);


    try {
      const response = await axios.post(`${BASE_URL}/api/contact`, payload);
   if (response.data?.success) {
         toast.success(response.data.message || "Thank You! , Our team will connect with you soon!");
        resetForm();
        setTimeout(() => {
          onClose?.();
        }, 1200);
      } else {
        toast.error("Failed to submit contact form.");
      }
    } catch (error) {
      console.error("Backend error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Server error.");
    } finally {
      setLoading(false);
    }
  };








  return (
    
    <div id="contact-section" style={{background:"white"}}>
      <Toaster position="top-center" reverseOrder={false} />
    
             <section className="contact">
                     <div className="contact-left">
                       <h2>Get in Touch</h2>
                       <p>
                         Your business matters to us. Contact our team anytime for support,
                         demos, or partnerships.
                       </p>
           
                       <form onSubmit={handleSubmit}>
                         <div className="form-group">
                           <label>
                             Full Name<span>*</span>
                           </label>
                           <div className="input-with-icon">
                             <FaUser className="input-icon" />
                             <input
                               name="name"
                               value={storeData.name}
                               onChange={(e) => {
                                 if (
                                   /^[a-zA-Z\s]*$/.test(e.target.value) &&
                                   e.target.value.length <= 40
                                 ) {
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
                           <label>
                             Company Name<span>*</span>
                           </label>
                           <div className="input-with-icon">
                             <FaUser className="input-icon" />
                             <input
                               name="company"
                               value={storeData.company}
                               onChange={(e) => {
                                 if (e.target.value.length <= 60) {
                                   handleChange(e);
                                 }
                               }}
                               maxLength={60}
                               type="text"
                               placeholder="Enter Company Name"
                               required
                             />
                           </div>
                         </div>
           
             <div className="form-group">
                           <label>
                             Designation<span>*</span>
                           </label>
                           <div className="input-with-icon">
                             <FaUser className="input-icon" />
                             <input
                               name="designation"
                               value={storeData.designation}
                               onChange={(e) => {
                                 if (
                                   /^[a-zA-Z\s]*$/.test(e.target.value) &&
                                   e.target.value.length <= 40
                                 ) {
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
           
           
           
           
                         <div className="form-row">
                           <div className="form-group">
                             <label>
                               Email Id<span>*</span>
                             </label>
                             <div className="input-with-icon">
                               <FaEnvelope className="input-icon" />
                               <input
                                 name="email"
                                 value={storeData.email}
                                 onChange={(e) => {
                                   if (e.target.value.length <= 60) {
                                     handleChange(e);
                                   }
                                 }}
                                 type="email"
                                 placeholder="Enter Email Id"
                                 maxLength={60}
                                 required
                               />
                             </div>
                           </div>
           
                           <div className="form-group">
                             <label>
                               Phone No.<span>*</span>
                             </label>
                             <div className="phone-input">
                               <div className="custom-country-select" ref={dropdownRef}>
                                 <div
                                   className="country-selected"
                                   onClick={() => setShowDropdown((prev) => !prev)}
                                 >
                                   <img
                                     src={selectedCountry.flag}
                                     alt="flag"
                                     className="country-flag"
                                   />
                                   <span className="country-code-text">
                                     {selectedCountry.code}
                                   </span>
                                   <span className="dropdown-arrow">▾</span>
                                 </div>
           
                                 {showDropdown && (
                                   <div className="country-dropdown-list">
                                     {countries.map((c, i) => (
                                       <div
                                         key={i}
                                         className="country-option"
                                         onClick={() => {
                                           setSelectedCountry({
                                             code: c.code,
                                             flag: c.flag,
                                             name: c.name,
                                           });
                                           setCountryCode(c.code);
                                           setShowDropdown(false);
                                         }}
                                       >
                                         <img
                                           src={c.flag}
                                           alt={c.name}
                                           className="country-flag"
                                         />
                                         <span className="country-option-name">
                                           {c.name}
                                         </span>
                                         <span className="country-option-code">
                                           {c.code}
                                         </span>
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
                                   if (
                                     /^\d*$/.test(e.target.value) &&
                                     e.target.value.length <= 10
                                   ) {
                                     handleChange(e);
                                   }
                                 }}
                                 type="text"
                                 inputMode="numeric"
                                 pattern="[0-9]*"
                                 placeholder="Phone No."
                                 maxLength={10}
                                 minLength={10}
                                 required
                               />
                             </div>
                           </div>
           
           
           
           
           
           
           
                         </div>
           
                         <div className="form-group">
                           <label>
                             Product<span>*</span>
                           </label>
                           <div className="custom-product-select" ref={productDropdownRef}>
                             <div
                               className={`product-selected ${
                                 showProductDropdown ? "open" : ""
                               }`}
                               onClick={() => setShowProductDropdown((prev) => !prev)}
                             >
                               <span className="product-selected-label">
                                 {storeData.queryType ? (
                                   storeData.queryType
                                 ) : (
                                   <span className="product-placeholder">
                                     Select Product
                                   </span>
                                 )}
                               </span>
                               <span
                                 className={`product-arrow ${
                                   showProductDropdown ? "rotated" : ""
                                 }`}
                               >
                                 ▾
                               </span>
                             </div>
           
                             {showProductDropdown && (
                               <div className="product-dropdown-list">
                                 {products.map((p, i) => (
                                   <div
                                     key={i}
                                     className={`product-option ${
                                       storeData.queryType === p.value ? "active" : ""
                                     }`}
                                     onClick={() => {
                                       setStoreData((prev) => ({
                                         ...prev,
                                         queryType: p.value,
                                       }));
                                       setShowProductDropdown(false);
                                     }}
                                   >
                                     <span className="product-name">{p.label}</span>
                                     {storeData.queryType === p.value && (
                                       <span className="product-check">✓</span>
                                     )}
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
                             onChange={(e) => {
                               if (e.target.value.length <= 100) {
                                 handleChange(e);
                               }
                             }}
                             placeholder="How we can help you?"
                             maxLength={100}
                           />
                           <small
                             style={{
                               display: "block",
                               textAlign: "right",
                               fontSize: "11px",
                               color: "#888",
                               marginTop: "4px",
                             }}
                           >
                             {storeData.message.length}/100
                           </small>
                         </div>
           
                         <button type="submit" className="submit-btn" disabled={loading}>
                           {loading ? "Submitting..." : "Submit"}
                         </button>
                       </form>
                     </div>
           
                     <div className="contact-right">
                       <img src={img} alt="contact" />
                     </div>
                   </section>
           </div>
  );
};

export default Contact;