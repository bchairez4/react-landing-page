import Name from "./Name";
import Picture from "./Picture";

function Profile({ image_src, name, handle }) {
    return (
        <div className="sidebar-profile">
            <div className="profile-picture">
                <Picture image_src={image_src} />
            </div>
            <Name name={name} />
            <Name name={"@" + handle} />
        </div>
    );
}

export default Profile;
