import { Link  } from "react-router-dom";

const Tabs = () => {

    return (
        <div className="grid grid-cols-2 mb-3">
            <Link activeClassName="text-white bg-blue-600" to="/" className="py-2 text-center border border-blue-600 text-blue-600">Works</Link>
        </div>
    )
}

export default Tabs;