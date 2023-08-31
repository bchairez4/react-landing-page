import Link from "./Link";
import Searchbar from "./Searchbar";

function Asidebar({ trends }) {
    const trending = trends.map((trend, index) => {
        return (
            <li key={index} className="asidebar-trending-link">
                #<Link link_src={trend.src} link_name={trend.name} />
            </li>
        );
    });

    return (
        <div className="asidebar">
            <div className="asidebar-searchbar">
                <Searchbar value={"Search"}/>
            </div>
            <div className="asidebar-trending">
                <span className="trends-label">Trends for you</span>
                <ul>{trending}</ul>
            </div>
        </div>
    );
}

export default Asidebar;
