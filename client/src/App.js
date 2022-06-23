import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route exact path="/" element={currentUser? <Homepage/> : <Login/>}>
        </Route>
        <Route path="/posts"element={<Homepage/>}>
        </Route>
        <Route path="/register" element={currentUser?<Homepage/>: <Register/>}>
          {/* {currentUser ? <Homepage /> : <Register />} */}
        </Route>
        <Route path="/login" element={currentUser?<Homepage/>: <Login/>}>
          {/* {currentUser ? <Homepage /> : <Login />} */}
          </Route>
        <Route path="/post/:id" element={<Single />}>
        </Route>
        <Route path="/write" element={currentUser?<Write/>:<Login/>}>
          {/* {currentUser ? <Write /> : <Login />} */}
          </Route>
        <Route path="/settings" element={currentUser?<Settings/>:<Login/>}>
          {/* {currentUser ? <Settings /> : <Login />} */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;