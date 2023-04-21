import React from 'react';
import './Header.css';
import HeaderOptions from '../HeaderOptions/HeaderOptions';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
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
        <HeaderOptions title="me" avatar ="https://lh3.googleusercontent.com/NqZWPYAuTNe_Ca5Yp5254RpcX0MQrjkfvdwJf4jFuPSw1p84941dN9Bx7VHgKIf5HOclwQnQRamIJSPlmGv_O29M1WbhhmQVu10dCOXhi1ymDUGUJeoGeVnYSk-3ncn-3O51sTCIBTAB28hWozw5ok3Ue5-ollMTw4pY1OZ3A0p7PqkR8lfdSUM5c7DD4Fua2JtE1aAlA6JuuQlewOzGRNEVPbFXHwJW6gsUh7j9dikttJTyg0NjCA5znWKTtxYl1qnZqhmEvaHlr8tY1OX93DGtDrbc4XK1uR2q6WqDrXmIjYyOEhUHpoKNO17hTHaMLLgRTpoBEFEMVtivO3cl67lUawx6XB_PQoGvHoF0qbvzVv6buH0A7l3RIv9-cWevU_oEODJNb88KhxFt7rxnPFtLweL6np-io_5KGr2OQ3-U1EAhDkO9hESgKKcy-mGlMz9acYad_Z5fClMxLIg0Lo-RBmjV5AAAnrZl3xSFxL7esBBr60a1RmOZfU9jJZ8aNUYB-GHNN5QVtmqSvWBSWB1RkGKkBi3Y4fDVFWogZFeXwd5TXJEsOf5qBn5DT_PiJrPB-Pr6w7_QZo22G11CjIj1ANe1m7CN__wOFqbX0nfhqF4ZByz5RykiKOfm4CWvH_wtu9Na9XjH0N4LvDIn1_QTrV1nzhFPlBRMAJYzkVjIRJU3MxYbwBcF1YMQTvz9wlW9pEbtMvAMytk0mVz7Sz7bXzwb2fXf71C5oEcj4qkkkaRYoVmZS5nmF9255NGtaAHC7txOPPLhBZtjWaMLm6QJ29WAgbwXQ2UG8qmiYNV02RvCMnVlKxYKwgRNny7ugdRjzZmc1Bm8iWwSu0cMukiv-0Pg0r4S_JHsP_bEgRuZSEK2Hkr-xFVuV0VTCOzYI9em5HR4heTWG_W39ZaY44U4Oh4gTitUqRgJ5zwmZfRnTQ=w640-h640-s-no?authuser=0" />
      </div>
    </div>
  );
}

export default Header;
