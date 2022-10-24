import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  /* width: 400px; */
`;

const StyledImgWrapper = styled.div`
  width: 100%;
  /* height: 400px; */
  border-radius: 10px;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
`;
const StyledCardContent = styled.div`
  background-color: #fff;
  width: calc(100% - 40px);
  border-radius: 20px;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`;

const StyledUser = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 300;
    color: #333;
  }
`;

const StyledAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledReaction = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 12px;
  }
`;

const StyledCosmic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
  h3 {
    font-size: 18px;
    font-weight: 600;
  }

  span {
    font-size: 18px;
    font-weight: 700;
    background: linear-gradient(to right, rgb(251 191 36), rgb(220 38 38) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Card = () => {
  return (
    <StyledCard>
      <StyledImgWrapper>
        <StyledImg
          src="https://cdn.dribbble.com/users/2400293/screenshots/19271835/media/68c947aa286ed6573929bc2655acff49.png?compress=1&resize=1000x750&vertical=top"
          alt=""
        />
      </StyledImgWrapper>
      <StyledCardContent>
        <StyledUser>
          <StyledAvatarWrapper>
            <StyledAvatar
              src="https://cdn.dribbble.com/users/2400293/screenshots/15200559/media/b4ad765bcff61ac2587049ca90fa7f72.png?compress=1&resize=1000x750&vertical=top"
              alt=""
            />
            <span>@sao lang thang</span>
          </StyledAvatarWrapper>
          <StyledReaction>
            <img src="/icon-heart.svg" alt="" />
            <span>256</span>
          </StyledReaction>
        </StyledUser>
        <StyledCosmic>
          <h3>Cosmic Perspective </h3>
          <span>12000 PSL</span>
        </StyledCosmic>
      </StyledCardContent>
    </StyledCard>
  );
};

export default Card;
