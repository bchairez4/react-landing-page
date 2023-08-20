function Reactions() {
    return (
        <div className="content-feed-post-reactions">
            <input type="checkbox" value={"comment"} />
            <label>Comment</label>
            <input type="checkbox" value={"retweet"} />
            <label>Retweet</label>
            <input type="checkbox" value={"like"} />
            <label>Like</label>
            <input type="checkbox" value={"share"} />
            <label>Share</label>
        </div>
    );
}

export default Reactions;
