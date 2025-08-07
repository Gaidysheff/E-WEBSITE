import DarkLogo from "@/assets/images/shared/Kalika-LogoSignNew.png";
import LightLogo from "@/assets/images/shared/Kalika-LogoSign-Gray.png";

const LogoSwitch = ({ id }) => {
  switch (id) {
    case "light-logo":
      return (
        <div className="max-w-[700px] mx-auto">
          <img src={LightLogo} alt="Light Logo" className="w-[90%]auto" />
        </div>
      );
    case "dark-logo":
      return (
        <div className="max-w-[700px] mx-auto">
          <img src={DarkLogo} alt="Dark Logo" className="w-[90%]auto" />
        </div>
      );

    default:
      return null;
  }
};

export default LogoSwitch;
