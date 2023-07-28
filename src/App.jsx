import Content from "./components/Content"

function App() {
  const POSTS = [
    {profile_image_src: "./images/profilepic_1.jpg", name: "John Doe", handle: "jdoe22", message: "Taking a nightly stroll around the park.", uploading_image: true, image_src: "./images/image_1.jpg"},
    {profile_image_src: "./images/profilepic_2.jpg", name: "Jane Dane", handle: "catlover1", message: "I wonder what Mao-San is up to?", uploading_image: false, image_src: ""},
    {profile_image_src: "./images/profilepic_3.jpg", name: "Bob Bobby", handle: "bobbb", message: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.", uploading_image: false, image_src: ""},
    {profile_image_src: "./images/profilepic_4.jpg", name: "Billy Bob", handle: "terminator2", message: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", uploading_image: true, image_src: "./images/image_2.jpg"},
    {profile_image_src: "./images/profilepic_5.jpg", name: "Sue Susan", handle: "sue808", message: "ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt", uploading_image: true, image_src: "./images/image_3.jpg"},
    {profile_image_src: "./images/profilepic_6.jpg", name: "Linda Phony", handle: "lindz55", message: "dicta sunt explicabo", uploading_image: false, image_src: ""}
  ];

  return (
    <div>
      <Content posts={POSTS}/>
    </div>
  );
}

export default App;
