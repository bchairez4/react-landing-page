import Message from "./Message";
import Name from "./Name";
import Picture from "./Picture";

function Post({ profile_image_src, handle, message, uploading_image, image_src }) {
    if (!uploading_image) {
        return(
            <>
                <Picture image_src={profile_image_src} />
                <Name name={handle} />
                <Message message={message} />
            </>
        );
    }

    return (
        <>
            <Picture image_src={profile_image_src} />
            <Name name={handle} />
            <Message message={message} />
            <Picture image_src={image_src} />
        </>
    );
}

export default Post;
