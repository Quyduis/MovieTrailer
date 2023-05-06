import Constant from "util/Constants";
import { UserInfoContainerStyled } from "./styled";
import { Text } from "component";
import ButtonCustom from "component/button";

const UserInfo = () => {
  return (
    <UserInfoContainerStyled>
      {/* User Info */}
      <div className="user-info">
        <div className="avatar-container">
          <img
            className="avatar"
            alt="avatar"
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
      {/* User balance */}
      <div className="user-balance flex flex-row justify-between gap-[0.5rem] items-center">
        <div className="flex-1">
          <Text color="var(--txt-main)" size="tiny">
            Balance
          </Text>
          <span className="flex flex-row gap-[0.5rem]">
            <img
              className="small-icon"
              alt="balance"
              src={`${Constant.PUBLIC_URL}/assets/balance_image.svg`}
            />
            <Text color="var(--el-main)" size="large">
              $56,00
            </Text>
          </span>
        </div>
        <ButtonCustom
            className="h-[4rem] !bg-[color:var(--el-main)]"
          icon={
            <img
              className="btn-icon"
              alt="logo"
              src={`${Constant.PUBLIC_URL}/assets/add_image.svg`}
            />
          }
          shape="circle"
        />
      </div>
    </UserInfoContainerStyled>
  );
};

export default UserInfo;
