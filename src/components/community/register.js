import { useState } from "react";
import { IMAGES } from "../../themes/images";
import "./register.scss";

const Register = () => {
  const [avatar, setAvatar] = useState(null);
  const handleUploadAvatar = (e) => {
    const files = e.target.files;
    if (files) {
      setAvatar(URL.createObjectURL(files[0]));
    }
  };
  return (
    <div className="community-register">
      <div className="register-header">
        <img src={IMAGES.arrow_back_B} alt="" width="19px" height="19px" />
        <h3 className="register-title">커뮤니티 프로필 등록</h3>
        <img src={IMAGES.hamburger} alt="" width="19px" height="15px" />
      </div>
      <div className="register-main">
        <div className="register-avatar">
          <img
            src={avatar || IMAGES.avatar_default}
            alt=""
            className="register-avatar-image"
          />
          <input
            type="file"
            name="avatar"
            id="avatar"
            onChange={handleUploadAvatar}
          />
          <label htmlFor="avatar" className="btn-upload">
            <img src={IMAGES.avatar_default} alt="" width={28} height={28} />
          </label>
        </div>
        <div className="register-nickname">
          <label htmlFor="nickname">닉네임 설정</label>
          <input
            type="text"
            name="nickname"
            placeholder="닉네임을 입력해주세요 (최대 10자)"
          />
        </div>
      </div>
      <div className="register-note">
        <p>※ 커뮤니티에서 이용할 닉네임을 필수로 등록 하셔야 합니다.</p>
      </div>
      <div className="register-footer">
        <button>등록하기</button>
      </div>
    </div>
  );
};

export default Register;
