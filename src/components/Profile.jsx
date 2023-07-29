import Name from "./Name";
import Picture from "./Picture";

function Profile({ image_src, name, handle }) {
    return (
        <div>
            <Picture image_src={image_src} />
            <Name name={name} />
            <Name name={"@" + handle} />
        </div>
    );
}

export default Profile;