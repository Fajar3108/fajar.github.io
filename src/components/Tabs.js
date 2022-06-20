import { NavLink  } from "react-router-dom";
import '../assets/css/Tab.css';

const Tabs = () => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 mb-3 text-center text-sm">
            <NavLink to="/" className="py-2 border">Works</NavLink>
            <NavLink to="/experiences" className="py-2 border">Experiences</NavLink>
            <NavLink to="/archivements" className="py-2 border">Archivements</NavLink>
        </div>
    )
}

export default Tabs;