import { Link  } from "react-router-dom";

const Tabs = () => {

    return (
        <div className="grid md:grid-cols-3 grid-cols-1 mb-3">
            <Link to="/" className="py-2 text-center border text-sm">Works</Link>
            <Link to="/experinces" className="py-2 text-center border text-sm">Experiences</Link>
            <Link to="/archivements" className="py-2 text-center border text-sm">Archivements</Link>
        </div>
    )
}

export default Tabs;