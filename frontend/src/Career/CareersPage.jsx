import React, { useEffect, useMemo, useState ,useRef} from "react";
import "./CareersPage.css";
import { Helmet } from "react-helmet-async";


const jobsData = [
  // {
  //   id: 1,
  //   title: "UI/UX",
  //   department: "Design",
  //   tags: ["Noida +1", "Hybrid", "Full Time +2"],
  //   seoPosition: {
  //     primaryKeyword: "UI/UX job in Noida",
  //     secondaryKeywords: [
  //       "UI UX Designer jobs Noida",
  //       "Product design jobs India",
  //       "UX designer hiring",
  //     ],
  //     searchIntent: "Job Search",
  //     rankingGoal: "Top 10 Google",
  //   },
  //   description:
  //     "We are looking for a UI/UX who can design intuitive, modern, and user-focused digital products.",
  // },
  // {
  //   id: 2,
  //   title: "Backend Developer",
  //   department: "Development",
  //   tags: ["Noida", "Remote", "Full Time"],
  //   seoPosition: {
  //     primaryKeyword: "Backend Developer job in Noida",
  //     secondaryKeywords: [
  //       "Node.js developer jobs",
  //       "API developer hiring",
  //       "Backend jobs India",
  //     ],
  //     searchIntent: "Job Search",
  //     rankingGoal: "Top 10 Google",
  //   },
  //   description:
  //     "We are looking for a Backend Developer to build scalable APIs and optimize server-side logic.",
  // },

  // {
  //   id: 3,
  //   title: "Frontend Developer",
  //   department: "Development",
  //   tags: ["Noida", "Remote", "Full Time"],
  //   seoPosition: {
  //     primaryKeyword: "Frontend Developer job in Noida",
  //     secondaryKeywords: [
  //       "React developer jobs",
  //       "Frontend developer hiring",
  //       "JavaScript jobs India",
  //     ],
  //     searchIntent: "Job Search",
  //     rankingGoal: "Top 10 Google",
  //   },
  //   description:
  //     "We are looking for a Frontend Developer who can build responsive and modern interfaces.",
  // },
  // {
  //   id: 5,
  //   title: "Digital Marketing Executive",
  //   department: "Marketing",
  //   tags: ["Noida", "Hybrid", "Full Time"],
  //   seoPosition: {
  //     primaryKeyword: "Digital Marketing job in Noida",
  //     secondaryKeywords: [
  //       "Digital marketing executive jobs",
  //       "Google ads jobs",
  //       "Social media marketing jobs",
  //       "Performance marketing jobs",
  //     ],
  //     searchIntent: "Job Search",
  //     rankingGoal: "Top 10 Google",
  //   },
  //   description:
  //     "We are looking for a Digital Marketing Executive to manage online campaigns, social media, paid ads, and lead generation strategies.",
  // },
  // {
  //   id: 6,
  //   title: "Sales and Marketing Executive",
  //   department: "Sales",
  //   tags: ["Noida", "On-site", "Full Time"],
  //   seoPosition: {
  //     primaryKeyword: "Sales and Marketing job in Noida",
  //     secondaryKeywords: [
  //       "Sales executive jobs",
  //       "Marketing executive jobs",
  //       "B2B sales jobs",
  //       "Business development jobs",
  //     ],
  //     searchIntent: "Job Search",
  //     rankingGoal: "Top 10 Google",
  //   },
  //   description:
  //     "We are looking for a Sales and Marketing Executive to drive business growth through client acquisition, lead conversion, and market outreach.",
  // },
  // {
  //   id: 7,
  //   title: "Mobile App Developer",
  //   department: "Development",
  //   tags: ["Noida", "Remote", "Full Time"],
  //   seoPosition: {
  //     primaryKeyword: "Mobile App Developer job in Noida",
  //     secondaryKeywords: [
  //       "Android developer jobs",
  //       "iOS developer jobs",
  //       "React Native developer jobs",
  //       "Flutter developer jobs",
  //     ],
  //     searchIntent: "Job Search",
  //     rankingGoal: "Top 10 Google",
  //   },
  //   description:
  //     "We are looking for a Mobile App Developer to build high-performance Android and iOS applications using modern frameworks.",
  // },
];

export default function CareersPage() {

  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); // Toggle state
  const dropdownRef = useRef(null); // Ref for outside click
// Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

const departments = [
    { label: "All Departments" },
    { label: "Frontend Developer"},
    { label: "Backend Developer"},
    { label: "UI/UX"},
    { label: "Sales" }
  ];

 const filteredJobs = useMemo(() => {
  return jobsData.filter((job) => {
    // This checks if 'All' is selected OR if the selection matches the title or department
    const matchesDepartment =
      selectedDepartment === "All Departments" ||
      job.department === selectedDepartment ||
      job.title === selectedDepartment;

    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesDepartment && matchesSearch;
  });
}, [selectedDepartment, searchTerm]);



  return (
    <>
      <Helmet>
        <title>IT Careers at Kasper Infotech Pvt. Ltd</title>
        <meta
          name="discription"
          content="Explore IT Careers at Kasper Infotech Pvt. Ltd Join work with us to invent, develop, and change the way that technological solutions are used in the future."
        />
        <meta name="keywords" content="IT Careers" />

        <meta
          property="og:title"
          content="IT Careers at Kasper Infotech Pvt. Ltd"
        />
        <meta property="og:site_name" content="Kasper Infotech" />
        <meta property="og:url" content="https://kasperinfotech.com/Career" />
        <meta
          property="og:description"
          content="Explore IT Careers at Kasper Infotech Pvt. Ltd Join work with us to invent, develop, and change the way that technological solutions are used in the future."
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://kasperinfotech.com/static/media/career.031731f84a1947fc2f24.webp "
        />
        <link rel="canonical" href="https://kasperinfotech.com/Career" />
      </Helmet>
      <div className="careers-page">
        <div className="careers-container">
          <section className="careers-hero">
            <h1 className="careers-title">Work. Learn. Build.</h1>
            <p className="careers-subtitle">
              Work on real products that solve real business problems.
            </p>

            <div className="careers-filters">
             <div className="careers-filters">
  
  {/* Custom Dropdown Start */}
  <div className="custom-product-select" ref={dropdownRef}>
    <div
      className={`product-selected ${showDropdown ? "open" : ""}`}
      onClick={() => setShowDropdown((prev) => !prev)}
    >
      <span className="product-selected-label">
       {selectedDepartment !== "All Departments" 
    ? selectedDepartment 
    : <span className="product-placeholder">Select Department</span>
  }
      </span>
      <span className={`product-arrow ${showDropdown ? "rotated" : ""}`}>▾</span>
    </div>

    {showDropdown && (
      <div className="product-dropdown-list">
        {departments.map((dept, i) => (
          <div
            key={i}
            className={`product-option ${selectedDepartment === dept.label ? "active" : ""}`}
            onClick={() => {
              setSelectedDepartment(dept.label);
              setShowDropdown(false);
            }}
          >
           
            <span className="product-name">{dept.label}</span>
            {selectedDepartment === dept.label && (
              <span className="product-check">✓</span>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
  {/* Custom Dropdown End */}

  {/* Search Box */}
  <div className="search-box">
    <input
      type="text"
      placeholder="Search Jobs"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button type="button" className="search-btn">🔍</button>
  </div>
</div>

              

              <a target="#" href="https://kasperinfotech.co/register">
                <button className="assessment-btn">Online Assessment</button>
              </a>
            </div>
          </section>

          <section className="jobs-section">
            <p className="jobs-count">Showing {filteredJobs.length} Jobs</p>

            <div className="jobs-list">
              {filteredJobs && filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div className="job-card" key={job.id}>
                    <div className="job-card-left">
                      <h3 className="job-title">{job.title}</h3>

                      <div className="job-tags">
                        {job.tags.map((tag, index) => (
                          <span className="job-tag" key={index}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="job-description">{job.description}</p>

                      <a target="#" href="https://kasperinfotech.co/register">
                        {" "}
                        <button className="apply-btn">Apply Now</button>
                      </a>
                    </div>

                    <div className="job-card-right">
                      <button
                        className="external-btn"
                        aria-label="Open job details"
                      >
                        ↗
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-jobs">
                  <h2>No Open Positions</h2>
                  <p>
                    We don’t have any openings at the moment. Please check back
                    later or stay connected with us for future opportunities.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
