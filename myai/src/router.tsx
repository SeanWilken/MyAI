import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import CouncilPage from "./pages/apps/CouncilPage";
import AIDEPage from "./pages/apps/AIDEPage";
import KnowLedgerPage from "./pages/apps/KnowLedgerPage";
import IlluminatePage from "./pages/apps/IlluminatePage";
import ConjurePage from "./pages/apps/ConjurePage";
import InstructscriptionPage from "./pages/apps/InstructscriptionPage";
import IBAPage from "./pages/apps/IBAPage";
import CorePage from "./pages/platform/CorePage";
import StudioPage from "./pages/platform/StudioPage";
import UXCraftPage from "./pages/platform/UXCraftPage";
import DocsHub from "./pages/docs/DocsHub";
import APIDocsPage from "./pages/docs/APIDocsPage";
import AppDocsPage from "./pages/docs/AppDocsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "get-started", element: <GetStarted /> },
      // Documentation routes
      { path: "docs", element: <DocsHub /> },
      { path: "docs/api", element: <APIDocsPage /> },
      { path: "docs/apps", element: <AppDocsPage /> },
      // Application routes
      { path: "apps/council", element: <CouncilPage /> },
      { path: "apps/aide", element: <AIDEPage /> },
      { path: "apps/knowledger", element: <KnowLedgerPage /> },
      { path: "apps/illuminate", element: <IlluminatePage /> },
      { path: "apps/conjure", element: <ConjurePage /> },
      { path: "apps/instructscription", element: <InstructscriptionPage /> },
      { path: "apps/iba", element: <IBAPage /> },
      // Platform routes
      { path: "platform/core", element: <CorePage /> },
      { path: "platform/studio", element: <StudioPage /> },
      { path: "platform/ux-craft", element: <UXCraftPage /> },
    ],
  },
]);
