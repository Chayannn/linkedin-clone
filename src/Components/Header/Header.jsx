import React from 'react';
import './Header.css';
import HeaderOptions from '../HeaderOptions/HeaderOptions';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055"
          alt="linkedIn logo"
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions
          title="me"
          avatar="https://lh3.googleusercontent.com/cLkyQKKyfNxKYDceid7mGs44shse8SUXwf93P70GaTwp_ptEJMOd9xbtpXyhGMH1ln0RBnVbKrx9ys63v_TFbrUKFQXhIKwkYB6JbgSMXRXiGaZqyxZRQVP0I8IwRbWyx5xOuPOYvi9-APIL5kPOVbTf4ufOngV2G6QZrNfzQboSkHSdh4NUXh4xD-y9iHKjr_f6dxTge0qcrSUG1CD_QyNSX2-HHpc9Re0_bbLwi1RQr-g5Ecft_FH9vXx0iyAGxXRf0TCfl5LhZqp96WnC8wv4CITxqBf8tIWMoN0REAOeTuH-91yuhi8nCJHRUK9b1q2CQYxaVaqfg2F4TKtYL0hwwxBvVShHUrzp2p20FJSkW6t4w8_9rHq79Ucvas1fvddhLj6HxxlTLcsT3lKvA4QGFS64y0EsCaVgp0y-Y2SxJugqbBS3J4BK9buOqXlpeOkqQisbCVSBXiPX7IHv1WuormR7CilIzH891-wBSdww0Dm__R4MsagxZibtIWZfxJNwKLzS5_hfvv4gyO1dJTt0fnCMpI0zN7BW4lhdfLFigZDvflQ_1_k2ObBrykSgNfEsi1vxeaLYOVOvQh7qorCRWb7-bXqUdbsFJnUoVdF6wDjXcdRYiCnAMK2IeVNf4bfDyfzkkK8gh0tlBz75Oj9VYUsajPWVjLt_OMfm_IJePP720D7LXz2pHa-4GZyn2F5SJ59FBZp_azC7UxQ8fdSeQ5xLF9Zkvd0cWjkwe_3KXq_P-TB6S5rn6009RTC2Urg7WHxu02A3nE3Ts4egqS9ys-DgpUY8JLJIvJzF-i5G-6VT-Zfm4pXcN80jNc7E2tFfWUTswzWXvBIhLZ46v9cwgK53TCbUG52_gmv-09ECnzJGODcLpKPqZXrh-drK84BTZfeLaATOojGljnrmsVbi1piHP8k0Zp5c82YxNcCicg=w640-h640-s-no?authuser=0"
        />
      </div>
    </div>
  );
}

export default Header;
