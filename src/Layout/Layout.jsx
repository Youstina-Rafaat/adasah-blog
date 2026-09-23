
import Navbar from './../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../Components/Footer/Footer';
export default function Layout() {
return(<>
<Navbar/>
<div className="contianer pt-20">
    <Outlet/>
</div>
<Footer/>

</>)
}
