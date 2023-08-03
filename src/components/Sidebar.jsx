import Button from "./Button";
import Link from "./Link";
import Profile from "./Profile";

function Sidebar({ links }) {
    const navbarLinks = links.map((link) => {
        return (
            <div className="sidebar-links">
                <Link link_src={link.src} link_name={link.name}/>
            </div>
        );
    });

    return (
        <div className="sidebar">
            {navbarLinks}
            <div className="tweet-button">
                <Button value={"Tweet"} />
            </div>
            <Profile image_src={"./src/assets/images/default_profilepic.png"} name={"Default"} handle={"Default"} />
        </div>
    );
}

export default Sidebar;
