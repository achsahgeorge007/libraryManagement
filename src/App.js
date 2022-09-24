import React, { Suspense } from "react"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";
import "./App.css"
import Book from "./pages/book";
import Library from "./pages/library";
import LoaderPage from "./pages/loader";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" 
      element={<Layout />}
      >
        <Route path="/home" element={
          <Suspense fallback={<LoaderPage />}>
            <Home />
          </Suspense>
        }/>
        <Route path="/login" element={
          <Suspense fallback={<LoaderPage />}>
            <Login />
          </Suspense>
        }/>
        <Route path="/book" element={
          <Suspense fallback={<LoaderPage />}>
            <Book />
          </Suspense>
        }/>
        <Route path="/library" element={
          <Suspense fallback={<LoaderPage />}>
            <Library />
          </Suspense>
        }/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <Suspense fallback={<LoaderPage />}>
        <Header /> 
        <div className="top">
        <Outlet />
        </div>
      </Suspense>
    </div>
  )
}

export default App;
