// CSS File
import "./assets/css/style.css";

// JSX File
import Header from "./components/Header";
import Content from "./components/Content";
import Media from "./components/Media";
import Comment from "./components/Comment";
import Footer from "./components/Footer";

// Footer image import
import image_2 from "./assets/images/image_2.png";

const App = () => (
  <>
    <Header />
    <Content />
    <Media />
    <Comment />
    <Footer Pic={image_2} />
  </>
);
export default App;
