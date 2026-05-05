import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";

import AboutUs from "./component2/AboutUs.jsx";
import Solutionspopup from "./Soutionpopup/Solutionspopup.jsx";

import Footer from "./components/Footer.jsx";
import Main_SolutionIms from "./Solutions/Ims/Main_SolutionIms.jsx";
import Main_SolutionLms from "./Solutions/Lms/Main_SolutionLms.jsx";
import Main_SolutionHrms from "./Solutions/Hrms/Main_SolutionHrms.jsx";
import Main_SolutionSms from "./Solutions/Sms/Main_SolutionSms.jsx";
import Main_SolutionChatApp from "./Solutions/ChatApp/Main_SolutionChatApp.jsx";
import Main_SolutionHms from "./Solutions/Hms/Main_SolutionHms.jsx";
import Inside_Blogs from "./Insight_Blogs/Inside_Blogs.jsx";
import Main_Services_ApplicationMangedServices from "./Services/Application Managed Services/Main_Services_ApplicationManagedServices.jsx";
import Main_ServicesBusinessCentral from "./Services/Business Central/Main_ServicesBusinessCentral.jsx";
import Main_ServicesBusinessConsultingProjectPlanning from "./Services/Business Consulting & Project Planning/Main_ServicesBusinessConsultingProjectPlanning.jsx";
import Main_ServicesCMSDevelopment from "./Services/CMS Development/Main_ServicesCMSDevelopment.jsx";
import Main_ServicesCRMDevelopment from "./Services/CRM Development/Main_ServicesCRMDevelopment.jsx";
import Main_ServicesCustomerEngagement from "./Services/Customer Engagement/Main_ServicesCustomerEngagement.jsx";
import Main_ServicesD365HPOS from "./Services/D365HPOS/Main_ServicesD365HPOS.jsx";
import Main_ServicesD365OCS from "./Services/D365OCS/Main_ServicesD365OCS.jsx";
import Main_ServicesD365QCS from "./Services/D365QCS/Main_ServicesD365QCS.jsx";
import MainLayout from "./mainLayout.jsx";
import Main_ServicesDigitalMarketing from "./Services/Digital Marketing/Main_ServicesDigitalMarketing.jsx";
import Main_ServicesERPDevelopment from "./Services/ERP Development/Main_ServicesERPDevelopment.jsx";
import Main_ServicesFabric from "./Services/Fabric  & Data Management/Main_ServicesFabric.jsx";
import Main_ServicesFinance from "./Services/Finance & Operations/Main_ServicesFinance.jsx";
import Main_ServicesInterfaceDesign from "./Services/Interface Design & Integration/Main_ServicesInterfaceDesign.jsx";
import Main_ServicesMicrosoft from "./Services/Microsoft Software Licensing/Main_ServicesMicrosoft.jsx";
import Main_ServicesMobileApp from "./Services/Mobile App Development/Main_ServicesMobileApp.jsx";
import Main_ServicesPowerBi from "./Services/Powe BI/Main_ServicesPowerBi.jsx";
import Main_ServicesPowerPlatform from "./Services/Power Platform/Main_ServicesPowerPlatform.jsx";
import Main_ServicesWebApp from "./Services/Web App Development/Main_ServicesWebApp.jsx";
import Main_ServicesUpgradeMigration from "./Services/UpgradeMigrtaionServcies/Main_ServicesUpgradeMmigration.jsx";
import Main_ServicesDevelopmentServices from "./Services/Development Services/Main_ServicesDevelopmentServices.jsx";
import ScrolltopView from "./ScrolltopView.jsx";
import Login from "./Admin/Login.jsx";
import AdminLayouts from "./Admin/AdminSidebar.jsx";
import Profile from "./Admin/Profile.jsx";
import Blogs from "./Admin/Blogs.jsx";
import UserBlogs from "./Admin/UserBlogs.jsx";
import Addcategory from "./Admin/AddCategory.jsx";
import AddBlog from "./Admin/AddBlog.jsx";
import Register from "./Admin/Register.jsx";
import Read_More from "./Read_More/Read_More.jsx";
import { Toaster } from "react-hot-toast";

import Main_ServicesTravelTourism from "./Solutions/Travel & Tourism/Main_ServicesTravelTourism.jsx";
import Main_ServicesHealthcare from "./Solutions/HealthCare & Fitness/Main_ServicesHealthcare.jsx";
import Main_ServicesRealEstate from "./Solutions/Real Estate/Main_ServicesRealEstate.jsx";
import Main_ServicesMediaEntern from "./Solutions/Media & Entertainment/Main_ServicesMediaEntern.jsx";
import Main_ServicesSocialMedia from "./Solutions/Social Media & Networking/Main_ServicesSocialMedia.jsx";
import Main_ServicesECommerce from "./Solutions/E-commerce/Main_ServicesECommerce.jsx";
import Main_ServicesEducationAndElearn from "./Solutions/Education & E-Learning/Main_ServicesEducationAndElearn.jsx";
import Main_ServicesBankingFinance from "./Solutions/Banking & Finance/Main_ServicesBankingFinance.jsx";
import Main_ServicesSports from "./Solutions/Sports and Wellness/Main_ServicesSports.jsx";
import Main_ServicesITAndlTES from "./Solutions/IT & ITES/Main_ServicesITAndlTES.jsx";
import CareersPage from "./Career/CareersPage.jsx";
import PrivacyPolicy from "./TermsAndPrivacy/PrivacyPolicy.jsx";
import ThankYou from "./Pages/ThankYou/ThankYou.jsx";
import DemoRequests from "./Admin/DemoRequests.jsx";
import ContactMessages from "./Admin/ContactMessages.jsx";
function App() {
  return (
    <>
      <ScrolltopView />

      <Routes>
        {/* GROUP 1: Website Pages (WITH Navbar and Footer) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/career" element={<CareersPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* Solutions */}
          <Route path="/solutions/ims" element={<Main_SolutionIms />} />
          /* <Route path="/solutions/lms" element={<Main_SolutionLms />} />
          <Route path="/solutions/hms" element={<Main_SolutionHms />} />
          <Route path="/solutions/hrms" element={<Main_SolutionHrms />} />
          <Route path="/solutions/sms" element={<Main_SolutionSms />} />
          <Route path="/solutions/chatapp" element={<Main_SolutionChatApp />} />
          <Route path="/insightsblogs" element={<Inside_Blogs />} />
          <Route path="/blog/:slug" element={<Read_More />} />
          <Route
            path="/solutions/travel-tourism"
            element={<Main_ServicesTravelTourism />}
          />
          <Route
            path="/solutions/healthcare-fitness"
            element={<Main_ServicesHealthcare />}
          />
          <Route
            path="/solutions/real-estate"
            element={<Main_ServicesRealEstate />}
          />
          <Route
            path="/solutions/media-entertainment"
            element={<Main_ServicesMediaEntern />}
          />
          <Route
            path="/solutions/social-media-networking"
            element={<Main_ServicesSocialMedia />}
          />
          <Route
            path="/solutions/e-commerce"
            element={<Main_ServicesECommerce />}
          />
          <Route
            path="/solutions/education-e-learning"
            element={<Main_ServicesEducationAndElearn />}
          />
          <Route
            path="/solutions/banking-finance"
            element={<Main_ServicesBankingFinance />}
          />
          <Route
            path="/solutions/sports-wellness"
            element={<Main_ServicesSports />}
          />
          <Route
            path="/solutions/it-ites"
            element={<Main_ServicesITAndlTES />}
          />
          <Route
            path="/solutions/business-services"
            element={<Main_ServicesBusinessCentral />}
          />

          {/* Services */}
          <Route
            path="/ApplicationManagedServices"
            element={<Main_Services_ApplicationMangedServices />}
          />
          <Route
            path="/BusinessCentral"
            element={<Main_ServicesBusinessCentral />}
          />
          <Route
            path="/BusinessConsulting"
            element={<Main_ServicesBusinessConsultingProjectPlanning />}
          />
          <Route
            path="/CMSDevelopment"
            element={<Main_ServicesCMSDevelopment />}
          />
          <Route
            path="/CRMDevelopment"
            element={<Main_ServicesCRMDevelopment />}
          />
          <Route
            path="/CustomerEngagement"
            element={<Main_ServicesCustomerEngagement />}
          />
          <Route path="/mainD365HOCS" element={<Main_ServicesD365OCS />} />
          <Route path="/mainD365HQCS" element={<Main_ServicesD365QCS />} />
          <Route path="/mainD365HPOS" element={<Main_ServicesD365HPOS />} />
          <Route
            path="/DigitalMarketing"
            element={<Main_ServicesDigitalMarketing />}
          />
          <Route
            path="/ERPDevelopment"
            element={<Main_ServicesERPDevelopment />}
          /> 
          <Route path="/Fabrics" element={<Main_ServicesFabric />} />
          <Route path="/Finance" element={<Main_ServicesFinance />} />
          <Route
            path="/InterfaceDesign"
            element={<Main_ServicesInterfaceDesign />}
          />
          <Route path="/Microsoft" element={<Main_ServicesMicrosoft />} />
          <Route path="/MobileApp" element={<Main_ServicesMobileApp />} />
          <Route path="/PowerBi" element={<Main_ServicesPowerBi />} />
          <Route
            path="/PowerPlatform"
            element={<Main_ServicesPowerPlatform />}
          />
          <Route path="/WebApp" element={<Main_ServicesWebApp />} />
          <Route
            path="/UpgradeMigration"
            element={<Main_ServicesUpgradeMigration />}
          />
          <Route  path="/privacypolicy"
            element={< PrivacyPolicy/>}/>
          <Route  path="/termsandconditions"
            element={< PrivacyPolicy/>}/>
          <Route
            path="/Development"
            element={<Main_ServicesDevelopmentServices />}
          />
        </Route>

        {/* GROUP 2: Independent Pages (NO Navbar, NO Footer) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog-details/:slugOrId" element={<AddBlog />} />

        {/* Admin Section (NO Navbar, NO Footer - uses its own Sidebar) */}
        <Route path="/adminsidebar" element={<AdminLayouts />}>
          <Route path="profile" element={<Profile />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="demo-requests" element={<DemoRequests />} />
          <Route path="contact-messages" element={<ContactMessages />} />
          <Route path="my-blogs" element={<UserBlogs />} />
          <Route path="addcategory" element={<Addcategory />} />
          <Route path="addblog" element={<AddBlog />} />
          <Route path="blog-details/:slugOrId" element={<AddBlog />} />
        </Route>
      </Routes>
      <Toaster 
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "white",
            color: "black",
            borderRadius: "10px",
            fontSize: "16px",
          },
        }}
      />
    </>
  );
}

export default App;
