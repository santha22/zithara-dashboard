import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import NotFound from './components/NotFound';
import Sample from './components/Sample.jsx'
import LeadMangement from "./components/shared/LeadMangement";



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="lead" element={<LeadMangement />} />
            <Route path="sample" element={<Sample />} />
            <Route path='*' element={ <NotFound />} />
          </Route>

          <Route path='login' element={<div>this is login page</div>} />
        </Routes>

      </Router>
    </>
  )
}

export default App
