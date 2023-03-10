import Register from "./register";
import Post from "./post";
import "./community.scss";
import { IMAGES } from "../../themes/images";
import ScrollButton from "../scroll-button/ScrollButton";

const Community = () => {
  return (
    <div className="community">
      {/* <Register /> */}
      <Post />
      <Post />
      <Post />
      <Post />
      {/* <div className="community-actions">
        <div className="btn-create-post">
          <img src={IMAGES.create_post} alt="" />
        </div>
      </div> */}
      <div className="btn-create-post">
        <img src={IMAGES.create_post} alt="" />
      </div>

      <ScrollButton />
    </div>
  );
};

export default Community;
