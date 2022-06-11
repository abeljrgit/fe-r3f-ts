import ChatIcon from "../Svg/ChatIcon";
import HomeIcon from "../Svg/HomeIcon";
import TerminalIcon from "../Svg/TerminalIcon";

function Link(props: any) {
  const typeOfImage = () => {
    if (props.imageType === "home") {
      return <HomeIcon />;
    } else if (props.imageType === "chat") {
      return <ChatIcon />;
    } else if (props.imageType === "terminal") {
      return <TerminalIcon />;
    }
  };

  return (
    <a
      href={props.url}
      className="link"
      data-label={props.label}
      onClick={props.onLinkClick}
    >
      <div className="link__wrapper">
        <div className="link__image">{typeOfImage()}</div>
        <span className="link__text">{props.label}</span>
      </div>
    </a>
  );
}

export default Link;
