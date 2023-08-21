import Message from "./Message";
import Name from "./Name";
import Picture from "./Picture";
import Reactions from "./Reactions";

function Post({ profile_image_src, name, handle, message, uploading_image, image_src }) {
    if (!uploading_image) {
        return(
            <div>
                <Picture image_src={profile_image_src} />
                <Name name={name + " @" + handle} />
                <Message message={message} />
                <Reactions />
            </div>
        );
    }

    return (
        <div>
            <Picture image_src={profile_image_src} />
            <Name name={name + " @" + handle} />
            <Message message={message} />
            <Picture image_src={image_src} />
            <Reactions />
        </div>
    );
}

export default Post;
