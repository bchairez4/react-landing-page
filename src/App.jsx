import Asidebar from "./components/Asidebar";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  // Simulating grabbing data from a database
  const NAVLINKS = [
    {src: "", name: "Home"},
    {src: "", name: "Explore"},
    {src: "", name: "Notifications"},
    {src: "", name: "Messages"},
    {src: "", name: "Lists"},
    {src: "", name: "Communities"},
    {src: "", name: "Verfied"},
    {src: "", name: "Profile"},
    {src: "", name: "More"},
  ];

  const POSTS = [
    {profile_image_src: "./src/assets/images/profilepic_1.jpg", name: "John Doe", handle: "jdoe22", message: "Taking a nightly stroll around the park.", uploading_image: true, image_src: "./src/assets/images/image_1.jpg"},
    {profile_image_src: "./src/assets/images/profilepic_2.jpg", name: "Jane Dane", handle: "catlover1", message: "I wonder what Mao-San is up to?", uploading_image: false, image_src: ""},
    {profile_image_src: "./src/assets/images/profilepic_3.jpg", name: "Bob Bobby", handle: "bobbb", message: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.", uploading_image: false, image_src: ""},
    {profile_image_src: "./src/assets/images/profilepic_4.jpg", name: "Billy Bob", handle: "terminator2", message: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", uploading_image: true, image_src: "./src/assets/images/image_2.jpg"},
    {profile_image_src: "./src/assets/images/profilepic_5.jpg", name: "Sue Susan", handle: "sue808", message: "ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt", uploading_image: true, image_src: "./src/assets/images/image_3.jpg"},
    {profile_image_src: "./src/assets/images/profilepic_6.jpg", name: "Linda Phony", handle: "lindz55", message: "dicta sunt explicabo", uploading_image: false, image_src: ""}
  ];

  const TRENDS = [
    {src: "", name: "Maecenas Nec"},
    {src: "", name: "Consectetur"},
    {src: "", name: "Ornare Sapien"},
    {src: "", name: "Laoreet Nunc"},
    {src: "", name: "Consectetur Euismod Bibendum"}
  ];

  return (
    <div className="app">
      <Sidebar links={NAVLINKS} />
      <Content posts={POSTS} />
      <Asidebar trends={TRENDS} />
    </div>
  );
}

export default App;
