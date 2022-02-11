import Layout, { Footer, Header } from "antd/lib/layout/layout";
import "./App.css";
import Navigation from "./components/Navigation";
import logo from "./assets/images/logo.png";
import { Image } from "antd";
import PickupOptions from "./components/PickupOptions";
import { Route, Routes } from "react-router-dom";
import SchedulePickup from "./components/SchedulePickup";
import ScheduleConfirmation from "./components/ScheduleConfirmation";
import FooterDetails from "./components/FooterDetails";

function App() {
  return (
    <div className="container">
      <Layout>
        <Header
          style={{
            zIndex: 1,
            width: "100%",
            background: "#fff",
          }}
        >
          <div className="logo">
            <Image
              width="190px"
              height="50px"
              src={logo}
            />
          </div>
          <Navigation />
        </Header>
        <Routes>
          <Route path="/" element={<PickupOptions />}/>
          <Route path="/schedule" element={<SchedulePickup />}/>
          <Route path="/confirmation" element={<ScheduleConfirmation />}/>
        </Routes>
        <Footer style={{
            zIndex: 1,
            width: "100%",
            background: "#fff",
          }}>
          <FooterDetails />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
