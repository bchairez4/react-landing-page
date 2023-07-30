import Link from "./Link";
import Searchbar from "./Searchbar";

function Asidebar({ trends }) {
    const trending = trends.map((trend) => {
        return (
            <Link link_src={trend.src} link_name={trend.name} />
        );
    });

    return (
        <div>
            <Searchbar />
            {trending}
        </div>
    );
}

export default Asidebar;