import Layout from "antd/lib/layout/layout";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./components/Details";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="container">
      <Layout
        style={{
          height: "90%",
          backgroundColor: "transparent",
          width: "80%",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile">
            <Route path=":userId" element={<Details />}></Route>
            <Route index element={<Profile />}></Route>
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
