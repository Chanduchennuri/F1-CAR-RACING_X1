import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import AppLayout from "./components/Layout/AppLayout";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Scoreboard from "./pages/Scorebaord";
import Profile from "./pages/Profile";

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

        </Route>

      </Routes>

    </Router>
  );
}