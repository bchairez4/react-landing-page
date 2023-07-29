import Button from "./Button";
import InputMessage from "./InputMessage";
import Picture from "./Picture";

function Tweet({ profile_image_src }) {
    return (
        <>
            <Picture image_src={profile_image_src} />
            <InputMessage value={"What's on your mind today?"}/>
            <Button value={"Tweet"} />
        </>
    );
}

export default Tweet;