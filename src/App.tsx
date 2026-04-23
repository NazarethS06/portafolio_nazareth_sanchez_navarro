import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"

import Portafolio from "./portafolio/views/Portafolio"
import AppDetail from "./pages/AppDetail"
import WebDetail from "./pages/WebDetail"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Portafolio />} />
                <Route path="/app" element={<AppDetail />} />
                <Route path="/web" element={<WebDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App