import '../styles/Widget.scss';
import {
  PersonOutlineOutlinedIcon,
  KeyboardArrowUpOutlinedIcon,
  ShoppingCartOutlinedIcon,
  AccountBalanceWalletOutlinedIcon,
  MonetizationOnOutlinedIcon,
} from '../utils/icons';

const Widget = ({ type }) => {
  let data;

  // temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'users':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0,0,0.2)',
            }}
          />
        ),
      };
      break;
    case 'orders':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'See all orders',
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218, 165,32,0.2)',
            }}
          />
        ),
        color: 'crimson',
      };
      break;
    case 'earnings':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'See all earnings',
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              color: 'green',
              backgroundColor: 'rgba(0, 128,0,0.2)',
            }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See all balance',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              color: 'purple',
              backgroundColor: 'rgba(218, 0,128,0.2)',
            }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && '$'} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon /> {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
