import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";

const FacebookAuthComponent = ({ handleFacebookLogin }) => {
  return (
    <LoginSocialFacebook
      appId={import.meta.env.VITE_FACEBOOK_ID}
      onResolve={handleFacebookLogin}
      onReject={(err) => console.log("facebook login failed:", err)}
    >
      <FacebookLoginButton />
    </LoginSocialFacebook>
  );
};

export default FacebookAuthComponent;
