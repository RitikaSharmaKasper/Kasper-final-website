import React from 'react'
import "./IndustriesServe.css"
import { useNavigate } from 'react-router-dom'
import { 
  Plane, HeartPulse, Building2, Tv, Users, ShoppingCart, 
  GraduationCap, Landmark, Volleyball, Code2, Briefcase 
} from 'lucide-react'

const industries = [
    { icon: Plane, label: "Travel & Tourism", path: "/solutions/travel-tourism", color: "#4F8EF7" },
  { icon: HeartPulse, label: "Healthcare & Fitness", path: "/solutions/healthcare-fitness", color: "#F0506E" },
  { icon: Building2, label: "Real Estate", path: "/solutions/real-estate", color: "#0EA5E9" },
  { icon: Tv, label: "Media & Entertainment", path: "/solutions/media-entertainment", color: "#4F46E5" },
    { icon: GraduationCap, label: "Education & E-learning", path: "/solutions/education-e-learning", color: "#06B6D4" },
  { icon: Users, label: "Social Media & Networking", path: "/solutions/social-media-networking", color: "#2563EB" },
  { icon: ShoppingCart, label: "E-commerce", path: "/solutions/e-commerce", color: "#6366F1" },
    { icon: Landmark, label: "Banking & Finance", path: "/solutions/banking-finance", color: "#06B6D4" },


  { icon: Volleyball, label: "Sports & Wellness", path: "/solutions/sports-wellness", color: "#3B82F6" },
  { icon: Code2, label: "IT & ITES", path: "/solutions/it-ites", color: "#2563EB" },
  { icon: Briefcase, label: "Business Services", path: "/solutions/business-services", color: "#6366F1" },
]

const Industries = () => {
  const navigate = useNavigate()

  return (
    <div className="Industries-main-div">
      <p >Industries we serve</p>

      <div className="industry-imagediv">
        {industries.map(({ icon: Icon, label, path, color }) => (
          <div
            key={label}
            className="industry-card"
            onClick={() => navigate(path)}
          >
            <Icon className="industry-icon" style={{ color }} strokeWidth={1.5} />
            <span className="industry-label">{label}</span>
            <svg className="industry-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Industries;