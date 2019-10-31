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
            <Avatar status="green" imageURL="" />
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
      </StyledAppBar>
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;
