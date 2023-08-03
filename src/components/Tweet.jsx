import Button from "./Button";
import InputMessage from "./InputMessage";
import Picture from "./Picture";

function Tweet({ profile_image_src }) {
    return (
        <div className="content-tweet">
            <div className="profile-picture">
                <Picture image_src={profile_image_src} />
            </div>
            <InputMessage value={"What's on your mind today?"} />
            <Button value={"Tweet"} />
        </div>
    );
}

export default Tweet;
