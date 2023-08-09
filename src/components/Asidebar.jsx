import Link from "./Link";
import Searchbar from "./Searchbar";

function Asidebar({ trends }) {
    const trending = trends.map((trend) => {
        return (
            <div className="asidebar-trending-link">
                <Link link_src={trend.src} link_name={trend.name} />
            </div>
        );
    });

    return (
        <div className="asidebar">
            <div className="asidebar-searchbar">
                <Searchbar value={"Search"}/>
            </div>
            <div className="asidebar-trending">
                Trends for you
                {trending}
            </div>
        </div>
    );
}

export default Asidebar;
