import Button from "./Button";
import Link from "./Link";
import Picture from "./Picture";
import Profile from "./Profile";

function Sidebar({ logo, links }) {
    const navbarLinks = links.map((link) => {
        return (
            <div className="sidebar-navbar-link">
                <Link link_src={link.src} link_name={link.name}/>
            </div>
        );
    });

    return (
        <div className="sidebar">
            <div className="sidebar-navbar">
                {navbarLinks}
            </div>
            <div className="sidebar-tweet-button">
                <Button value={"Tweet"} />
            </div>
            <Profile image_src={"./src/assets/images/default_profilepic.png"} name={"Default"} handle={"Default"} />
        </div>
    );
}

export default Sidebar;
