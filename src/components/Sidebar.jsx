import Button from "./Button";
import Link from "./Link";
import Picture from "./Picture";
import Profile from "./Profile";

function Sidebar({ logo, links }) {
    const navbarLinks = links.map((link) => {
        return (
            <li className="sidebar-navbar-link">
                <Link link_src={link.src} link_name={link.name}/>
            </li>
        );
    });

    return (
        <div className="sidebar">
            <Picture image_src={logo.image_src} />
            <div className="sidebar-navbar">
                <ul>{navbarLinks}</ul>
            </div>
            <div className="sidebar-tweet-button">
                <Button value={"Tweet"} />
            </div>
            <Profile image_src={"./src/assets/images/default_profilepic.png"} name={"Default"} handle={"Default"} />
        </div>
    );
}

export default Sidebar;
