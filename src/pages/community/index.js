import PostItem from "../../components/post-item";
import "./community.scss";
import { IMAGES } from "../../themes/images";
import ScrollButton from "../../components/scroll-button/ScrollButton";

const Community = () => {
  return (
    <div className="community">
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <div className="btn-create-post">
        <img src={IMAGES.create_post} alt="" />
      </div>

      <ScrollButton />
    </div>
  );
};

export default Community;
