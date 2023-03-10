import { IMAGES } from "../../themes/images";
import "./post.scss";
import ShowMoreText from "react-show-more-text";

const Post = () => {
  const executeOnClick = () => {
    console.log("hihi");
  };
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-category">굿거래</div>
        <div className="post-user">
          <img src={IMAGES.avatar_default} alt="" className="post-avatar" />
          <div>
            <h5 className="post-name">산토끼</h5>
            <p className="post-date">5분전</p>
          </div>
        </div>
      </div>
      <div className="post-body">
        <h4 className="post-title">굿거래 사칭 주의 하세요</h4>
        <div className="post-content">
          {/* <p className="post-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            totam nemo magnam aliquam voluptatum quaerat iste repellendus,
            dolorem beatae, quasi autem aliquid vitae possimus aut! Quam iusto
            hic molestiae. Eos!
          </p> */}
          {/* <span className="read-more">...더보기</span> */}
          <ShowMoreText
            /* Default options */
            lines={2}
            more="...더보기"
            less="Show less"
            className="post-desc"
            anchorClass="show-more"
            onClick={executeOnClick}
            expanded={false}
            expandByClick={false}
            // width={"100%"}
            truncatedEndingComponent={""}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              ullam exercitationem laboriosam quod? Nam ad magnam, facere labore
              sit id voluptate ex temporibus vel quisquam cumque omnis aperiam
              pariatur quidem?
            </p>
          </ShowMoreText>
        </div>

        <div className="post-image">
          <img src={IMAGES.post1} alt="" />
        </div>
        <ul className="post-hashtag hashtag">
          <li className="hashtag-item">#굿거래</li>
          <li className="hashtag-item">#굿거래</li>
          <li className="hashtag-item">#굿거래</li>
        </ul>
      </div>

      <div className="post-action">
        <div className="action-view">
          <img src={IMAGES.view} alt="" />
          <span>23</span>
        </div>
        <div className="action-like">
          <img src={IMAGES.like} alt="" />
          <span>3</span>
        </div>
        <div className="action-comment">
          <img src={IMAGES.comment} alt="" />
          <span>2</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
