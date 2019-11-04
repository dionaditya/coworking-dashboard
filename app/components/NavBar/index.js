/**
 *
 * NavBar
 *
 */

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { styled, makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import 'tabler-react/dist/Tabler.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Dropdown, Avatar } from 'tabler-react';

const StyledAppBar = styled(AppBar)({
  background: 'white',
  color: 'black',
  boxShadow: '0px 1px 1px #ccc',
});

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(0, 2),
  },
}));

function NavBar(props) {
  const classes = useStyles();
  return (
    <div>
      <StyledAppBar elevation={0}>
        <div
          style={{
            display: 'flex',
          }}
        >
          <Typography
            variant="h4"
            noWrap
            style={{
              flexGrow: 1,
              marginLeft: '30px',
            }}
          >
            LOGO
          </Typography>
          <div
            style={{
              flexGrow: '1',
              alignSelf: 'center',
              alignItems: 'center',
              marginLeft: '-300px',
            }}
          >
            <button
              style={{
                padding: '8px',
                background: '#438BF4',
                border: '2px solid transparent',
                borderRadius: '5px',
                width: '200px',
                color: 'white',
                display: 'flex',
              }}
            >
              <div
                style={{
                  flexGrow: 2,
                }}
              >
                Pilih Coworking space
              </div>
              <div
                style={{
                  display: 'flex',
                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    flexGrow: 2,
                  }}
                >
                  |
                </div>
                <div
                  id="arrow-icons"
                  style={{
                    flexGrow: 1,
                  }}
                >
                  <svg
                    width="21"
                    height="12"
                    viewBox="0 0 21 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.95805 11.6817L1.05725 2.88158C0.627971 2.45716 0.627971 1.76907 1.05725 1.34469L2.09539 0.318305C2.52393 -0.105391 3.21848 -0.106207 3.64803 0.316494L10.7353 7.29075L17.8225 0.316494C18.2521 -0.106207 18.9467 -0.105391 19.3752 0.318305L20.4133 1.34469C20.8426 1.76912 20.8426 2.45721 20.4133 2.88158L11.5126 11.6817C11.0833 12.1061 10.3873 12.1061 9.95805 11.6817Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              placeItems: 'center center',
            }}
          />
          <Badge className={classes.margin} badgeContent={4} color="primary">
            <NotificationsIcon />
          </Badge>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              placeItems: 'center center',
            }}
          >
            <div style={{ marginRight: -70 }}>
              <Avatar status="green" imageURL="" />
            </div>
            <div style={{ marginLeft: -10 }}>
              <Dropdown
                type="button"
                color="white"
                arrow
                icon=""
                triggerContent="Admin Coworking"
                itemsObject={[
                  {
                    value: 'Profile',
                    icon: 'user',
                  },
                  {
                    value: 'Notifications',
                    badge: 'New!',
                    badgeType: 'success',
                  },
                  { isDivider: true },
                  { value: 'Logout', onClick: props.logout },
                ]}
              />
            </div>
          </div>
        </div>
      </StyledAppBar>
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;
