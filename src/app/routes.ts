import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { CompliancePage } from "./pages/CompliancePage";
import { SectorsPage } from "./pages/SectorsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "compliance", Component: CompliancePage },
      { path: "sectors", Component: SectorsPage },
      { path: "gallery", Component: GalleryPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
