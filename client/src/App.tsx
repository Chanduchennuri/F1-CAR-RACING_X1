import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import AppLayout from "./components/Layout/AppLayout";
import Schedule from "./pages/Schedule";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Scoreboard from "./pages/Scorebaord";
import Profile from "./pages/Profile";
import News from "./pages/News";
import Results from "./pages/Results";
import Standings from "./pages/Standings";
import Teams from "./pages/Teams";
import Videos from "./pages/Videos";

export default function App() {
  return (
    <Router>

      <Routes>

        <Route element={<AppLayout />}>

          <Route path="/" element={<Scoreboard />} />

          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />

          <Route path="/scoreboard" element={<Scoreboard />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/news" element={<News />} />
          <Route path="/results" element={<Results />} />
           <Route path="/standings" element={<Standings />} />
           <Route path="/teams" element={<Teams />} />
          
           <Route path="/videos" element={<Videos />} />
          

        </Route>

      </Routes>

    </Router>
  );
}