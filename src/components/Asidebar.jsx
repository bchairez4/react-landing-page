import Link from "./Link";
import Searchbar from "./Searchbar";

function Asidebar({ trends }) {
    const trending = trends.map((trend) => {
        return (
            <div className="trending">
                <Link link_src={trend.src} link_name={trend.name} />
            </div>
        );
    });

    return (
        <div className="asidebar">
            <Searchbar />
            {trending}
        </div>
    );
}

export default Asidebar;
