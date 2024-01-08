import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import AppsHome from "../pages/AppsHome";
import AppsLayout from "../components/layouts/AppsLayout";
import Contact from "../pages/Contact";
import Decidio from "../pages/Decidio";
import AppTests from "../pages/AppTests";
import Indeed from "../pages/Indeed";
import Showcase from "../pages/Showcase";
import EasySend from "../pages/EasySend";
import FileHosting from "../pages/FileHosting";
import ContactMe from "../pages/ContactMe";
import LinkBio from "../pages/LinkBio";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="jobs/decidio" element={<Decidio />} />
          <Route path="apptest" element={<AppTests />} />
          <Route path="apps" element={<AppsHome />} />
          <Route path="apps/indeed" element={<Indeed />} />
          <Route path="apps/showcase" element={<Showcase />} />
          <Route path="apps/easysend" element={<EasySend />} />
          <Route path="apps/filehosting" element={<FileHosting />} />
          <Route path="apps/contactme" element={<ContactMe />} />
          <Route path="apps/linkbio" element={<LinkBio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
