import { useDispatch, useSelector } from "react-redux";
import getUserInfo from "services/getUserInfo";
import { authActions } from "store/auth";
import jwt_decode from "jwt-decode";

const useAutoLogin = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  const autoLoginFunction = async (token) => {
    try {
      let { data } = await getUserInfo();
      let dataFromToken = jwt_decode(token);
      if (data) {
        dispatch(authActions.login(dataFromToken));
        dispatch(authActions.updateUserInfo(data));

        return true;
      }
    } catch (err) {
      return false;
    }
  };
  return autoLoginFunction;
};

export default useAutoLogin;
