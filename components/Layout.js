import Navbar from "./Navbar"
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return ( 
        <>
            <Navbar />
            <Sidebar />
            {children}
        </>
    );
}
 
export default Layout;