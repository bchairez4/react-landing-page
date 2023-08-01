import Button from "./Button";
import Link from "./Link";
import Profile from "./Profile";

function Sidebar({ links }) {
    const navbarLinks = links.map((link) => {
        return (
            <Link link_src={link.src} link_name={link.name}/>
        );
    });

    return (
        <div className="sidebar">
            {navbarLinks}
            <Button value={"Tweet"} />
            <Profile image_src={"./src/assets/images/default_profilepic.png"} name={"Default"} handle={"Default"} />
        </div>
    );
}

export default Sidebar;
