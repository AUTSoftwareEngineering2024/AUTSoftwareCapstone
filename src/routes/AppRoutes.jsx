import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import DashboardPage from '../pages/DashboardPage' 
import AboutPage from '../pages/AboutPage' 
import PageNotFound from '../pages/PageNotFound'
import FormPage from "../pages/FormPage"; 
export default function AppRoutes(props) {

    return (
    <Routes>
    {/* index matches on default/home URL: / */}
    <Route index element={<Homepage {...props} />} />
    
    {/* nested routes, matches on /dash/messages etc */}
    <Route path="dash" element={<DashboardPage {...props} />}>
    </Route>
    <Route path="form" element={<FormPage {...props} />}>
    </Route>
    
    <Route path='/about' element={<AboutPage {...props} />} />
    
    {/* special route to handle if none of the above match */}
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    )
    }
