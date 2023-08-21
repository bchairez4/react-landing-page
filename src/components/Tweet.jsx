import Button from "./Button";
import InputMessage from "./InputMessage";
import Picture from "./Picture";

function Tweet({ profile_image_src }) {
    return (
        <div className="content-tweet">
            <Picture image_src={profile_image_src} />
            <InputMessage value={"What's happening?"} />
            <Button value={"Tweet"} />
        </div>
    );
}

export default Tweet;
