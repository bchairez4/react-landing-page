import Message from "./Message";
import Name from "./Name";
import Picture from "./Picture";

function Post({ profile_image_src, handle, message, uploading_image, image_src }) {
    if (!uploading_image) {
        return(
            <div>
                <div className="profile-picture">
                    <Picture image_src={profile_image_src} />
                </div>
                <Name name={"@" + handle} />
                <Message message={message} />
            </div>
        );
    }

    return (
        <div>
            <div className="profile-picture">
                <Picture image_src={profile_image_src} />
            </div>
            <Name name={"@" + handle} />
            <Message message={message} />
            <div className="uploaded-picture">
                <Picture image_src={image_src} />
            </div>
        </div>
    );
}

export default Post;
