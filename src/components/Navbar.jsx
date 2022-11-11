import '../styles/Navbar.scss';
import {
  SearchOutlinedIcon,
  LanguageOutlinedIcon,
  DarkModeOutlinedIcon,
  FullscreenExitOutlinedIcon,
  NotificationsNoneOutlinedIcon,
  ChatBubbleOutlineOutlinedIcon,
  ListOutlinedIcon,
} from '../utils/icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" className="" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
              className="avatar"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
