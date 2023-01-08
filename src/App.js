import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import ArtBoardzDetailsPage from "./pages/ArtBoardzDetailsPage";
import ArtBoardzPage from "./pages/ArtBoardzPage";
import Home from "./pages/Home";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import MyProfilePage from "./pages/MyProfilePage";
import NewRelease from "./pages/NewRelease";
import NewReleaseDetailsPage from "./pages/NewReleaseDetailsPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-releases" element={<NewRelease />} />
          <Route
            path="/new-releases/:releaseItemId"
            element={<NewReleaseDetailsPage />}
          />
          <Route path="/artboardz" element={<ArtBoardzPage />} />
          <Route
            path="/artboardz/:artboardId"
            element={<ArtBoardzDetailsPage />}
          />
          <Route path="/Leaderboardz" element={<LeaderBoardPage />} />
          <Route path="/profile" element={<MyProfilePage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
