import Post from "./Post";
import Tweet from "./Tweet";

function Content({ posts }) {
    const feed = posts.map((post, index) => {
        return (
            <div key={index} className="content-feed-post">
                <Post
                    profile_image_src={post.profile_image_src} 
                    name={post.name}
                    handle={post.handle} 
                    message={post.message} 
                    uploading_image={post.uploading_image} 
                    image_src={post.image_src} />
            </div>
        );
    });

    return (
        <div className="content">
            <span className="home-label">Home</span>
            <Tweet profile_image_src={"./src/assets/images/default_profilepic.png"} />
            <div className="content-feed">
                {feed}
            </div>
        </div>       
    );
}

export default Content;
