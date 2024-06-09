import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaRegListAlt, FaUser, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../auth";

export const AdminLayout = () => {
    const { user, isLoading } = useAuth();
    console.log("admin layout", user);

    if(isLoading) {
        return <h1>Loading ...</h1>;
    }

    if(!user.isAdmin){
        return <Navigate to="/" />;
    }

    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/admin/users"> <FaUser /> users </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/transactions"> <FaRegListAlt /> Financial Transactions </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/report"> <FaRegListAlt /> Generate Report </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/contacts"> <FaMessage /> contacts </NavLink>
                            </li>
                            <li>
                                <NavLink to="/"> <FaHome /> Home </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>  
            </header> 
            <Outlet />  
        </>
    );
};