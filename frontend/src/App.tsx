import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import SignIn from "./components/mycomponents/login";
import SignUp from "./components/mycomponents/signup";
import { ThemeProvider } from "./components/mycomponents/themes/theme-provider";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import Bookmarks from "./pages/Bookmark";
import Profile from "./pages/Profile";



function App() {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route element={
              <AppLayout />
            }>
              <Route path="/home" element={<Home />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/profile/:slug" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
