import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layouts/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<h1 className="text-5xl text-white">Hell0</h1>}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
