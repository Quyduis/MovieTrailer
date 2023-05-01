import Constant from "util/Constants";
import { UserInfoContainerStyled } from "./styled";
import { Text } from "component";

const UserInfo = () => {
  return (
    <UserInfoContainerStyled>
      <div className="user-info">
        <div className="avatar-container">
          <img
            className="avatar"
            alt="logo"
            src={`${Constant.PUBLIC_URL}/assets/avatar_image.svg`}
          />
        </div>
        <div>
          <Text color="var(--txt-main)" size="large">
            Quy Pham
          </Text>
          <Text color="var(--txt-main)" size="medium">
            quypham481@gmail.com
          </Text>
        </div>
      </div>

      <div className="user-balance"></div>
    </UserInfoContainerStyled>
  );
};

export default UserInfo;
