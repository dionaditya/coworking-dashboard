/**
 *
 * SideBar
 *
 */

//@flow

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    height: '100%',
    zIndex: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    overflowY: 'none',
  },
  drawerPaper: {
    width: drawerWidth,
    position: 'static',
    height: '100%',
    background: 'white',
  },
}));

function SideBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <Link to="/dashboard">
            <ListItem
              button
              key="dashboard"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.3fr 1fr',
                fontSize: '13',
                fontWeight: '100',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 9.00001C19.5523 9.00001 20.0058 8.55056 19.9453 8.00161C19.4847 3.82871 16.1713 0.515296 11.9984 0.0547587C11.4494 -0.0058244 11 0.447722 11 1.00001V8.00001C11 8.55229 11.4477 9.00001 12 9.00001H19ZM17.9453 11.9984C18.0058 11.4494 17.5523 11 17 11H10C9.44772 11 9 10.5523 9 10V3C9 2.44772 8.55055 1.99417 8.0016 2.05475C3.50088 2.55147 0 6.3669 0 11C0 15.9706 4.02943 20 9 20C13.6331 20 17.4485 16.4991 17.9453 11.9984Z"
                  fill="#404040"
                />
              </svg>
              <ListItemText secondary="Dashboard" />
            </ListItem>
          </Link>
          <Link to="/point-of-sales">
            <ListItem
              button
              key="point-of-sales"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.3fr 1fr',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 9.40041V10.5363C20 11.041 19.5586 11.3566 19.1164 11.4199L17.0345 11.8613C16.8455 12.4925 16.5931 13.1229 16.2775 13.6276L17.4759 15.3939C17.7282 15.8353 17.7915 16.34 17.4759 16.6556L16.6556 17.4759C16.34 17.7915 15.8353 17.7282 15.3939 17.4759L13.6276 16.2775C13.1229 16.5931 12.4917 16.8454 11.8613 17.0345L11.4199 19.1164C11.3566 19.5578 11.041 20 10.5363 20H9.40041C8.95903 20 8.6434 19.5586 8.58012 19.1164L8.13874 17.0345C7.50752 16.8455 6.87707 16.5931 6.30913 16.2775L4.54279 17.4759C4.16391 17.7282 3.65922 17.7915 3.3444 17.4759L2.52411 16.6556C2.2085 16.34 2.27178 15.8353 2.52411 15.3939L3.7225 13.6276C3.34362 13.1229 3.09129 12.4917 2.96549 11.8613L0.883567 11.4199C0.378906 11.3566 0 11.041 0 10.5363V9.40041C0 8.95903 0.378886 8.6434 0.883567 8.58012L2.96549 8.13874C3.09205 7.50752 3.34438 6.87707 3.7225 6.30913L2.52411 4.54279C2.27178 4.16391 2.2085 3.65922 2.52411 3.3444L3.3444 2.52411C3.66 2.2085 4.16469 2.27178 4.54279 2.52411L6.30913 3.7225C6.87707 3.34362 7.50752 3.09129 8.13874 2.96549L8.58012 0.883567C8.6434 0.378906 8.95901 0 9.40041 0H10.5363C11.041 0 11.3566 0.378886 11.4199 0.883567L11.8613 2.96549C12.4925 3.09205 13.1229 3.34438 13.6276 3.7225L15.3939 2.52411C15.8353 2.27178 16.34 2.2085 16.6556 2.52411L17.4759 3.3444C17.7915 3.66 17.7282 4.16469 17.4759 4.54279L16.2775 6.30913C16.5931 6.87707 16.8454 7.50752 17.0345 8.13874L19.1164 8.58012C19.5578 8.6434 20 8.95901 20 9.40041ZM9.96917 5.61535C7.57166 5.61535 5.61613 7.57074 5.61613 9.96839C5.61613 12.4293 7.57152 14.3846 9.96917 14.3846C12.4301 14.3846 14.3854 12.4292 14.3854 9.96839C14.3854 7.57088 12.43 5.61535 9.96917 5.61535Z"
                  fill="#404040"
                />
              </svg>
              <ListItemText secondary="Point of Sales" />
            </ListItem>
          </Link>
          <Link to="/event">
            <ListItem
              button
              key="event"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.3fr 1fr',
              }}
            >
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 0C0.895432 0 0 0.895432 0 2V14C0 15.1046 0.895432 16 2 16H18C19.1046 16 20 15.1046 20 14V2C20 0.895432 19.1046 0 18 0H2ZM2 4C2 3.44772 2.44772 3 3 3H6C6.55228 3 7 3.44772 7 4C7 4.55228 6.55228 5 6 5H3C2.44772 5 2 4.55228 2 4ZM17.6094 6.73774L15.0545 6.39659L13.9148 4.23881C13.8321 4.08529 13.6667 4 13.5013 4C13.3358 4 13.1796 4.07676 13.0877 4.23881L11.9481 6.38806L9.39308 6.72921C9.01627 6.78038 8.86922 7.20683 9.13574 7.45415L10.983 9.1258L10.5511 11.4968C10.4959 11.7697 10.7349 11.9915 11.0014 11.9915C11.075 11.9915 11.1485 11.9744 11.2128 11.9403L13.5013 10.8316L15.7897 11.9488C15.8632 11.9829 15.9367 12 16.0011 12C16.2676 12 16.5066 11.7783 16.4514 11.5053L16.0103 9.14286L17.8576 7.47121C18.1333 7.21535 17.9862 6.78891 17.6094 6.73774ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9H6C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7H3ZM2 12C2 11.4477 2.44772 11 3 11H6C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13H3C2.44772 13 2 12.5523 2 12Z"
                  fill="#404040"
                />
              </svg>
              <ListItemText secondary="Event / Program" />
            </ListItem>
          </Link>
          <Link to="event-space">
            <ListItem
              button
              key="event-space"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.3fr 1fr',
              }}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4179 0.000732585C10.3636 0.00854532 10.3113 0.0241708 10.2621 0.047609L0.287179 4.79875C0.112865 4.88274 -0.00301162 5.06634 5.96047e-05 5.25189V15.512C5.96047e-05 15.7522 0.142588 15.8586 0.352804 15.9807L10.2539 20.9429C10.4047 21.019 10.5954 21.019 10.7461 20.9429C14.0746 19.2856 17.3936 17.5913 20.721 15.9417C20.9128 15.8402 20.9999 15.6966 20.9999 15.5042V5.25189C21.003 5.06634 20.8871 4.88273 20.7128 4.79875L10.7379 0.047609C10.7246 0.0417493 10.7113 0.0368664 10.6969 0.0319835H10.6887C10.6754 0.0261239 10.662 0.021241 10.6477 0.0163581H10.6395C10.6231 0.0134282 10.6067 0.0104984 10.5903 0.00854532C10.5739 0.00561548 10.5574 0.00268564 10.541 0.000732585C10.5246 -0.000244195 10.5082 -0.000244195 10.4918 0.000732585C10.4723 -0.000244195 10.4539 -0.000244195 10.4344 0.000732585H10.4262H10.418H10.4179ZM9.97498 1.31425V10.1993C9.27876 10.5401 8.51176 10.9376 7.875 11.2462V5.00273C7.87705 4.71855 7.58071 4.46757 7.28438 4.50272C7.23106 4.5076 7.17774 4.52127 7.12852 4.54178L3.71605 6.04183C3.53354 6.12289 3.40946 6.31039 3.41255 6.50279V13.4893L1.05008 14.6768V5.56526L9.97498 1.31425ZM11.025 1.31425L19.9499 5.56538V14.6769L11.025 10.1993V1.31425ZM12.5425 4.00283C12.2872 4.0292 12.0739 4.25869 12.075 4.50284V7.75394C12.077 7.93266 12.1878 8.10748 12.3539 8.19146L17.3413 10.6925C17.6581 10.8527 18.1093 10.5968 18.1124 10.255V7.00392C18.1134 6.82228 18.0017 6.64356 17.8335 6.55861L12.846 4.05753C12.7538 4.01065 12.6461 3.9921 12.5425 4.00284L12.5425 4.00283ZM13.1249 5.32219L14.4374 5.97846V8.10353L13.1249 7.44726V5.32219ZM6.82501 5.78316V11.7766L4.46253 12.9641V6.82244L6.82501 5.78316ZM15.4874 6.50973L17.0624 7.2988V9.42387L15.4874 8.6348V6.50973ZM5.19254 8.24416C4.93414 8.2715 4.71983 8.50492 4.72498 8.75197V9.752C4.72087 10.0167 4.97209 10.2588 5.24997 10.2588C5.52785 10.2588 5.77906 10.0157 5.77497 9.752V8.75197C5.78112 8.46779 5.4889 8.21291 5.19254 8.24416ZM10.5 11.0665L11.8125 11.7228L10.3687 12.465L9.06443 11.7853L10.5 11.0665ZM12.9281 12.2853L14.1175 12.879L12.6656 13.6447L11.4761 13.0353L12.9281 12.2853ZM7.94062 12.3478L9.2613 13.0353L8.07187 13.6447L6.75119 12.9494C7.14596 12.7453 7.54381 12.547 7.94062 12.3478V12.3478ZM15.2249 13.4338C15.7089 13.6691 16.1939 13.9172 16.6769 14.1603L15.1921 14.9494L13.7566 14.215C14.2457 13.9552 14.7389 13.6964 15.2249 13.4337V13.4338ZM5.63563 13.5041L6.98093 14.2151L5.5536 14.9494L4.20011 14.2229L5.63563 13.5041ZM10.3687 13.6056L11.5746 14.2229L10.3687 14.8635L9.16286 14.2229L10.3687 13.6056ZM17.7924 14.7229C18.3154 14.9778 18.8321 15.2434 19.351 15.5042L17.7924 16.2854L16.2912 15.512L17.7924 14.7229ZM3.07628 14.7854L4.4462 15.512L3.07628 16.2229L1.64895 15.5042L3.07628 14.7854ZM8.07187 14.7854L9.29411 15.4339L7.875 16.1839L6.63632 15.5276L8.07187 14.7854ZM12.6656 14.7854L14.1011 15.5276L12.8625 16.1839L11.4433 15.4339L12.6656 14.7854ZM10.3687 16.0042L11.7878 16.7542L10.3687 17.5042L8.94961 16.7542L10.3687 16.0042ZM5.5372 16.0901L6.79225 16.7542L5.51257 17.4339L4.20009 16.7776L5.5372 16.0901ZM15.2003 16.0901L16.6686 16.8479L15.3561 17.5042C14.8927 17.2571 14.4138 17.0032 13.9452 16.7542L15.2003 16.0901ZM7.8666 17.3245L9.28571 18.0745L8.07166 18.7152L6.61152 17.9886L7.8666 17.3245ZM12.8622 17.3245L14.2485 18.0589L12.7966 18.7855L11.4513 18.0745L12.8622 17.3245ZM10.3685 18.6449L11.681 19.3402L10.4997 19.934L9.17903 19.2777L10.3685 18.6449Z"
                  fill="#404040"
                />
              </svg>
              <ListItemText secondary="Event Space" />
            </ListItem>
          </Link>
          <Link to="meeting-rooms">
            <ListItem
              button
              key="meeting-rooms"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.3fr 1fr',
              }}
            >
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.87565 5.98864C9.87565 5.7154 10.1194 5.70862 10.1194 5.98864V7.20919H13.7278V5.82154C14.145 6.33526 14.8547 7.20352 14.8603 7.20919H15.7453C15.7669 7.18774 16.7897 5.95817 17.3456 5.2875C17.8575 4.67102 17.1656 3.85808 16.5656 4.5807C16.3762 4.8099 15.6159 5.72332 15.48 5.88704C15.345 6.04963 15.2484 6.0214 15.1538 5.90736C14.8284 5.49637 14.2556 4.80876 13.5038 3.93148C13.29 3.68082 13.0791 3.42677 12.5428 3.42677H10.6622C9.45188 3.42677 8.92969 4.21601 8.92969 5.24348V7.21035H9.87469C9.87563 6.63 9.87563 6.19531 9.87563 5.98867L9.87565 5.98864Z"
                  fill="#404040"
                />
                <path
                  d="M13.0789 1.36082C13.0789 3.17411 10.8195 3.17411 10.8195 1.36082C10.8195 -0.453606 13.0789 -0.453606 13.0789 1.36082Z"
                  fill="#404040"
                />
                <path
                  d="M10.8281 11.0652C10.4363 11.0652 10.1194 11.4479 10.1194 11.9199V15.9405C10.1194 16.4124 10.4372 16.7952 10.8281 16.7952C11.22 16.7952 11.5378 16.4124 11.5378 15.9405C11.5378 15.9394 11.5369 15.9382 11.5369 15.9382L11.5378 11.9199C11.5387 11.448 11.22 11.0652 10.8281 11.0652V11.0652Z"
                  fill="#404040"
                />
                <path
                  d="M13.0208 11.0652C12.6289 11.0652 12.3102 11.4479 12.3102 11.9199V15.9405C12.3102 16.4124 12.628 16.7952 13.0208 16.7952C13.4127 16.7952 13.7295 16.4124 13.7295 15.9405V15.9382L13.7305 11.9199C13.7305 11.448 13.4127 11.0652 13.0208 11.0652L13.0208 11.0652Z"
                  fill="#404040"
                />
                <path
                  d="M5.07275 9.28235L4.77368 9.81075V10.679L19.1737 10.6779V9.81075L18.8793 9.29475L18.4012 9.59622L18.6112 9.97672V10.0275H5.32501V9.97672L5.54157 9.58492L5.07275 9.28235Z"
                  fill="#404040"
                />
                <path
                  d="M6.6909 7.09639L6.75934 7.22059L6.80434 7.30188L7.07153 7.78739H7.47279H7.48122L7.10061 7.0964L6.91592 6.76333L6.79779 6.54994L6.76405 6.48784L6.76311 6.48897L6.47998 6.71478L6.6909 7.09639Z"
                  fill="#404040"
                />
                <path
                  d="M6.28863 6.37502L6.32425 6.44051L6.61019 6.21244L6.57363 6.14582L6.538 6.08146L6.49675 6.00581L6.21082 6.23389L6.25207 6.31066L6.28863 6.37502Z"
                  fill="#404040"
                />
                <path
                  d="M0.28968 7.60329C0.196867 7.60329 0.0974928 7.62587 0 7.65974L0.453744 12.701V17.9038H1.17374V12.701C0.971244 10.5467 0.78 8.48381 0.693744 7.9644C0.649682 7.69906 0.484682 7.60309 0.28968 7.60309V7.60329Z"
                  fill="#404040"
                />
                <path
                  d="M6.27762 11.5529C6.1248 11.1509 6.05168 10.9838 5.46481 10.9838C5.46481 10.9838 4.86762 10.9861 4.65013 10.9861C4.43264 10.9861 4.25919 10.8732 4.27513 10.4294C4.29107 9.96875 4.20857 9.05534 4.23482 8.38016L5.59701 9.271L7.45607 9.26987C7.56576 9.26987 7.65482 9.24051 7.72888 9.19422C7.77201 9.16712 7.80951 9.13663 7.84044 9.09825C7.87232 9.05986 7.89763 9.01808 7.91825 8.97179C7.92482 8.95711 7.93044 8.9413 7.93607 8.9255C7.97919 8.80243 7.98575 8.66355 7.95857 8.53257C7.94732 8.48063 7.93044 8.43095 7.90982 8.38353C7.90325 8.36885 7.89763 8.3553 7.89013 8.34175C7.86482 8.29546 7.832 8.25256 7.7945 8.2153C7.757 8.17691 7.71294 8.14304 7.66325 8.11933C7.60232 8.08997 7.53388 8.07303 7.45607 8.07303L5.85013 8.0719L4.00607 6.41891C3.79607 6.236 3.52513 6.14342 3.24951 6.14342C2.62232 6.14342 1.96796 6.62213 1.93045 7.6022C1.93045 7.6022 1.77858 11.5451 1.75701 12.1943C1.73545 12.8469 2.1592 13.1032 2.74514 13.1032H4.94359C5.18733 13.1032 5.27546 13.1483 5.38797 13.5074C5.50047 13.8653 6.42016 16.7964 6.61797 17.4297C6.75485 17.8328 7.02672 17.9999 7.29672 17.9999C7.73827 17.9999 8.17233 17.5539 7.99046 16.9769C7.65484 15.9179 6.43046 11.9559 6.27765 11.5527L6.27762 11.5529Z"
                  fill="#404040"
                />
                <path
                  d="M4.67341 4.26258C4.67341 6.07701 2.41309 6.07701 2.41309 4.26258C2.41309 2.44816 4.67341 2.44816 4.67341 4.26258Z"
                  fill="#404040"
                />
                <path
                  d="M21.5334 4.26258C21.5334 6.07701 19.274 6.07701 19.274 4.26258C19.274 2.44816 21.5334 2.44816 21.5334 4.26258Z"
                  fill="#404040"
                />
                <path
                  d="M20.6972 6.14452C20.4216 6.14452 20.1516 6.2371 19.9407 6.42001L18.0975 8.073L16.4916 8.07413C15.8279 8.07187 15.8091 9.23257 16.5338 9.23257H18.3929L19.711 8.38124C19.7382 9.05755 19.6557 9.96986 19.6716 10.4305C19.6876 10.8743 19.5151 10.9872 19.2966 10.9872C19.0801 10.9872 18.4829 10.9849 18.4829 10.9849C17.8969 10.9849 17.8238 11.152 17.6701 11.554C17.5172 11.957 16.2929 15.918 15.9563 16.977C15.7735 17.554 16.2094 18 16.651 18C16.9201 18 17.1929 17.834 17.3288 17.4298C17.5266 16.7964 18.4463 13.8653 18.5588 13.5075C18.6713 13.1484 18.7604 13.1033 19.0041 13.1033H21.2026C21.7885 13.1033 22.2123 12.847 22.1898 12.1944C22.1673 11.5451 22.0163 7.60229 22.0163 7.60229C21.9788 6.62338 21.3245 6.14464 20.6973 6.14464L20.6972 6.14452Z"
                  fill="#404040"
                />
                <path
                  d="M23.684 7.60329C23.7768 7.60329 23.8771 7.62587 23.9737 7.65974L23.4937 12.701V17.9038H22.7737V12.701C22.7737 12.701 23.2152 8.35634 23.2799 7.9644C23.324 7.69906 23.489 7.60309 23.684 7.60309V7.60329Z"
                  fill="#404040"
                />
                <path
                  d="M6.49118 7.30294L6.44055 7.21036L6.23055 7.20923L5.9071 7.78732H6.53617L6.64773 7.58634L6.49118 7.30294Z"
                  fill="#404040"
                />
                <path
                  d="M17.7159 7.78746H18.029L17.7084 7.20937H17.3962H17.0878L17.4074 7.78746H17.7159Z"
                  fill="#404040"
                />
              </svg>
              <ListItemText secondary="Meeting Rooms" />
            </ListItem>
          </Link>
          <Link to="/private-office">
            <ListItem
              button
              key="private-office"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.3fr 1fr',
              }}
            >
              <svg
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5888 9.33663H19.5855L22.9177 4.66445C23.054 4.47378 23.0171 4.20212 22.8358 4.0587L20.0267 1.84318C20.0588 1.82462 20.0876 1.79931 20.1133 1.77062C20.2898 1.54957 20.3748 1.26103 20.3475 0.974155C20.3203 0.685613 20.1839 0.420716 19.9705 0.238469C19.7555 0.0579186 19.4812 -0.0264493 19.2085 0.00729613C18.9341 0.039356 18.6855 0.187846 18.5154 0.415641C18.501 0.439264 18.4881 0.466263 18.4769 0.493261C17.8239 -0.112489 16.8389 -0.0922724 16.2084 0.538821L15.2602 1.53606C15.0998 1.7048 15.0998 1.97814 15.2602 2.14691L17.5336 4.53795C17.694 4.70668 17.9539 4.70668 18.1144 4.53795L19.0625 3.5407C19.3208 3.26735 19.4828 2.91132 19.5246 2.52825L22.0145 4.49069L18.5652 9.32831C18.5652 9.33168 18.5652 9.33337 18.562 9.33506L12.732 9.33675V8.90478C12.732 8.18935 12.1801 7.60887 11.4999 7.60887H10.0977C11.0426 7.0166 11.5833 5.91136 11.4918 4.76055C11.4004 3.60806 10.6929 2.6125 9.6677 2.19237C8.64414 1.7739 7.48261 2.00507 6.67562 2.7897C5.86862 3.57432 5.55738 4.77407 5.87346 5.88095H3.28568C3.15894 5.88095 3.04022 5.94169 2.96161 6.04631C2.8846 6.15262 2.85732 6.28761 2.88781 6.41754L3.58087 9.3367H0.410707C0.184498 9.3367 0 9.53075 0 9.76867C0 10.0066 0.184498 10.2006 0.410707 10.2006H5.3392V14.5812C4.61565 14.7787 4.11028 15.4621 4.10707 16.2484V19.7041C4.10707 19.8189 4.15039 19.9285 4.2274 20.0095C4.30441 20.0905 4.40869 20.1361 4.51778 20.1361H6.57132C6.68041 20.1361 6.78469 20.0905 6.8617 20.0095C6.93871 19.9285 6.98202 19.8189 6.98202 19.7041V16.6803H9.85698V18.9178L8.13233 19.2806C7.92537 19.3245 7.78419 19.527 7.80505 19.748C7.82591 19.969 8.00238 20.1361 8.21415 20.1361C8.24142 20.1361 8.2687 20.1327 8.29597 20.1276L9.85699 19.7986V20.568C9.85699 20.806 10.0415 21 10.2677 21C10.4939 21 10.6784 20.806 10.6784 20.568V19.7986L12.2394 20.1276C12.4576 20.1648 12.6646 20.0146 12.7079 19.7851C12.7512 19.5573 12.6148 19.3346 12.3998 19.2806L10.6784 18.9178V16.6803H12.3212C12.4303 16.6803 12.5346 16.6348 12.6116 16.5538C12.6886 16.4728 12.7319 16.3631 12.7319 16.2483V10.2008H22.5889C22.8151 10.2008 22.9996 10.0067 22.9996 9.76881C22.9996 9.53089 22.8151 9.33684 22.5889 9.33684L22.5888 9.33663ZM19.4443 0.924898C19.5309 0.999145 19.5454 1.13413 19.4748 1.22694C19.4379 1.27587 19.4122 1.33156 19.3978 1.3923C19.3609 1.38386 19.3208 1.38218 19.2823 1.38555C19.2197 1.28093 19.1459 1.18475 19.0625 1.09701L19.032 1.06495V1.06326C19.0801 1.03626 19.1218 1.00083 19.1555 0.956958C19.2261 0.864154 19.3561 0.848967 19.4443 0.924899L19.4443 0.924898ZM18.4817 2.92949L17.8239 3.62133L16.1313 1.84115L16.7891 1.14931C17.1132 0.821955 17.625 0.821955 17.9506 1.14931L18.4817 1.70784C18.8026 2.04532 18.8026 2.59204 18.4817 2.92949ZM11.9104 8.90449V14.5201H8.62471V8.90449C8.62471 8.66657 8.80921 8.47252 9.03542 8.47252H11.4997C11.6088 8.47252 11.713 8.51808 11.79 8.59907C11.8671 8.68007 11.9104 8.78975 11.9104 8.90449ZM6.57117 14.5201H6.16047V9.33646C6.15726 8.58725 6.61771 7.92245 7.29632 7.69463C7.399 7.75031 7.50488 7.80093 7.61398 7.84312L7.63804 7.85155C7.8065 7.91736 7.98137 7.96461 8.15783 7.99667C7.93002 8.23796 7.80328 8.56363 7.80328 8.9045V14.5201L6.57117 14.5201ZM8.24608 4.98307C8.37282 5.81833 8.8782 6.53548 9.60174 6.90499L9.58891 6.91174V6.91343C9.4766 6.97586 9.35949 7.02648 9.23917 7.06698C9.19745 7.08048 9.15734 7.09566 9.11563 7.10747C9.05467 7.12266 8.9921 7.13447 8.93274 7.1446C8.87338 7.15472 8.80279 7.16147 8.73702 7.16485C8.67766 7.16822 8.6199 7.17159 8.56054 7.16991C8.46588 7.16653 8.37123 7.15641 8.27818 7.13953C8.23005 7.1311 8.18352 7.11929 8.137 7.10747H8.13539C8.05838 7.08723 7.98298 7.0636 7.90918 7.03492C7.86747 7.01973 7.82736 7.00454 7.78565 6.98598V6.9843C7.28348 6.75312 6.89203 6.31777 6.69793 5.77781C6.50541 5.23785 6.52788 4.63884 6.76211 4.11572C7.14233 4.58143 7.66854 4.88856 8.24611 4.98303L8.24608 4.98307ZM4.42778 9.33646L3.81171 6.74464H6.16047C6.19255 6.74127 6.22464 6.73452 6.25512 6.72439C6.34496 6.86107 6.44444 6.98931 6.55513 7.10911C5.79951 7.56977 5.33747 8.4185 5.33907 9.33643L4.42778 9.33646ZM6.16047 19.2717H4.92835V16.248C4.92835 15.7704 5.29574 15.384 5.74976 15.384H6.16047V19.2717ZM11.9104 15.816H6.98188V15.384H11.9104V15.816ZM20.9459 10.6324H15.6067C15.3805 10.6324 15.196 10.8264 15.196 11.0643V19.7037C15.196 19.8185 15.2393 19.9281 15.3164 20.0091C15.3934 20.0901 15.4976 20.1357 15.6067 20.1357H20.9459C21.055 20.1357 21.1593 20.0901 21.2363 20.0091C21.3133 19.9281 21.3566 19.8185 21.3566 19.7037V11.0643C21.3566 10.9496 21.3133 10.8399 21.2363 10.7589C21.1593 10.6779 21.055 10.6324 20.9459 10.6324ZM16.0174 13.6561H20.5352V14.9521H16.0174V13.6561ZM20.5352 11.4963V12.7922H16.0174V11.4963H20.5352ZM16.0174 19.2717V15.816H20.5352V19.2717H16.0174Z"
                  fill="#404040"
                />
              </svg>
              <ListItemText secondary="Private Office" />
            </ListItem>
          </Link>
          <Link to="/membership">
            <ListItem
              button
              key="membership"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.3fr 1fr',
              }}
            >
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 0C0.89543 0 0 0.895432 0 2V14C0 15.1046 0.895432 16 2 16H18C19.1046 16 20 15.1046 20 14V2C20 0.895432 19.1046 0 18 0H2ZM3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4H6C6.55228 4 7 3.55228 7 3C7 2.44772 6.55228 2 6 2H3ZM16.1299 5C16.1299 6.65686 14.7286 8 13.0001 8C11.2715 8 9.87025 6.65686 9.87025 5C9.87025 3.34315 11.2715 2 13.0001 2C14.7286 2 16.1299 3.34315 16.1299 5ZM8.67179 11.0339C9.16096 9.92249 10.297 9.2 11.5555 9.2L14.4445 9.20002C15.703 9.20002 16.839 9.9225 17.3282 11.0339L17.9002 12.3336C18.2484 13.1246 17.6425 14 16.7467 14H9.25325C8.35752 14 7.7516 13.1246 8.09977 12.3336L8.67179 11.0339ZM2 7C2 6.44772 2.44772 6 3 6H6C6.55228 6 7 6.44772 7 7C7 7.55228 6.55228 8 6 8H3C2.44772 8 2 7.55228 2 7Z"
                  fill="#404040"
                />
              </svg>
              <ListItemText secondary="Membership & Quota" />
            </ListItem>
          </Link>
          <Link to="/door-lock">
            <ListItem
              button
              key="door-lock"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.3fr 1fr',
              }}
            >
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5215 14.5315V14.5362V14.5409V15.2534C16.5515 15.5309 16.7587 15.7475 16.9978 15.7475H18.1537V11.8194L16.5197 11.8185L16.5215 14.5315Z"
                  fill="#404040"
                />
                <path
                  d="M17.4084 9.56381C17.4084 8.45475 18.1687 7.51913 19.1952 7.25475C18.509 5.82975 17.0756 4.92037 15.4817 4.92037C15.4536 4.92037 15.4283 4.92037 15.4048 4.92224C15.3073 4.92974 15.2192 4.86037 15.2042 4.76287C14.8217 2.19127 12.5697 0.251587 9.96742 0.251587C7.0471 0.251587 4.67158 2.62814 4.67158 5.54935C4.67158 5.71153 4.68095 5.8709 4.68939 5.99186C4.69595 6.0903 4.62564 6.17655 4.52814 6.19061C2.50595 6.47187 0.981659 8.22687 0.981659 10.2716C0.981659 12.545 2.8304 14.3948 5.10294 14.3948H16.1468L16.1449 11.826C16.0999 11.7923 16.0699 11.7379 16.0699 11.677C16.0699 11.616 16.099 11.5626 16.144 11.5279L16.143 10.6954C16.143 10.6457 16.1627 10.5979 16.1983 10.5632C16.234 10.5276 16.2808 10.5079 16.3305 10.5079H17.4077L17.4084 9.56381ZM9.41612 2.29349C7.88144 2.29349 6.63356 3.5413 6.63356 5.07509C6.63356 5.17822 6.54919 5.26259 6.44606 5.26259C6.34294 5.26259 6.25856 5.17822 6.25856 5.07509C6.25856 3.33509 7.67512 1.91861 9.416 1.91861C9.51913 1.91861 9.6035 2.00299 9.6035 2.10611C9.6035 2.21018 9.51913 2.29361 9.416 2.29361L9.41612 2.29349Z"
                  fill="#404040"
                />
                <path
                  d="M20.6361 13.3851C20.6961 13.4179 20.7327 13.4807 20.7327 13.5492V14.2026H20.8658V13.5492C20.8658 13.4807 20.9033 13.417 20.9633 13.3842C21.072 13.3251 21.1386 13.2117 21.1386 13.0888C21.1386 12.9023 20.9867 12.7495 20.8002 12.7495C20.6117 12.7495 20.4589 12.9013 20.4589 13.0888C20.4598 13.2098 20.5292 13.326 20.6361 13.3851L20.6361 13.3851Z"
                  fill="#404040"
                />
                <path
                  d="M21.9851 10.8368H19.3555V9.69865C19.3555 9.28897 19.6873 8.95613 20.0951 8.95613C20.5039 8.95613 20.8377 9.28894 20.8377 9.69865V9.9949C20.8377 10.098 20.922 10.1824 21.0252 10.1824C21.1283 10.1824 21.2127 10.098 21.2127 9.9949V9.69865C21.2127 9.08271 20.7111 8.58116 20.0952 8.58116C19.4811 8.58116 18.9805 9.08271 18.9805 9.69865V10.8368H18.0889V9.93865C18.0889 8.83052 18.9889 7.92865 20.0952 7.92865C21.1602 7.92865 22.0274 8.85303 22.0274 9.98926C22.0274 10.0924 22.1118 10.1768 22.2149 10.1768C22.318 10.1768 22.4024 10.0924 22.4024 9.98926C22.4024 8.64581 21.3674 7.55374 20.0952 7.55374C18.7827 7.55374 17.7139 8.62342 17.7139 9.93874V10.8369H16.5186V11.4425H23.0615V10.8369L21.9851 10.8368Z"
                  fill="#404040"
                />
                <path
                  d="M18.5287 15.7455H22.5835C22.8432 15.7455 23.0626 15.4858 23.0626 15.1792V11.8173H18.5287L18.5287 15.7455ZM20.8003 12.3752C21.194 12.3752 21.5137 12.6958 21.5137 13.0896C21.5137 13.3108 21.4115 13.5161 21.24 13.6502V14.3908C21.24 14.4939 21.1556 14.5783 21.0525 14.5783L20.5453 14.5774C20.4422 14.5774 20.3578 14.493 20.3578 14.3899V13.6492C20.1872 13.5152 20.085 13.3089 20.085 13.0896C20.085 12.6958 20.4056 12.3752 20.8003 12.3752L20.8003 12.3752Z"
                  fill="#404040"
                />
              </svg>
              <ListItemText secondary="Door lock & Security" />
            </ListItem>
          </Link>
          <Link to="/accounting">
            <ListItem
              button
              key="accounting"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.3fr 1fr',
              }}
            >
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 0C0.89543 0 0 0.895432 0 2V7C0 8.10457 0.89543 9 2 9V18C2 19.1046 2.89543 20 4 20H12C13.1046 20 14 19.1046 14 18V9C15.1046 9 16 8.10457 16 7V2C16 0.895432 15.1046 0 14 0H2ZM4 9C4 7.89543 4.89543 7 6 7H10C11.1046 7 12 7.89543 12 9V16C12 17.1046 11.1046 18 10 18H6C4.89543 18 4 17.1046 4 16V9ZM7.44044 14.3031C7.62993 14.3031 7.75065 14.1006 7.6606 13.9339L7.255 13.1831C7.18366 13.053 7.25291 12.6583 7.36718 12.5637C7.4043 12.5329 7.43858 12.4994 7.47 12.4631C7.62333 12.2897 7.7 12.0681 7.7 11.7981C7.7 11.4647 7.59667 11.2114 7.39 11.0381C7.18667 10.8647 6.89 10.7781 6.5 10.7781H5.5C5.22386 10.7781 5 11.0019 5 11.2781V14.0481C5 14.1889 5.11417 14.3031 5.255 14.3031C5.39583 14.3031 5.51 14.1889 5.51 14.0481V13.3481C5.51 13.0719 5.73386 12.8481 6.01 12.8481H6.09C6.24 12.8481 6.36 12.8731 6.45 12.9231C6.54333 12.9697 6.62333 13.0531 6.69 13.1731L7.21945 14.1702C7.26286 14.252 7.34787 14.3031 7.44044 14.3031ZM7.015 12.2831C6.89167 12.3831 6.7 12.4331 6.44 12.4331H6.005C5.72886 12.4331 5.505 12.2092 5.505 11.9331V11.6931C5.505 11.4169 5.72886 11.1931 6.005 11.1931H6.44C6.70333 11.1931 6.89667 11.2431 7.02 11.3431C7.14333 11.4397 7.205 11.5947 7.205 11.8081C7.205 12.0214 7.14167 12.1797 7.015 12.2831ZM8.95215 10.7781C8.67601 10.7781 8.45215 11.0019 8.45215 11.2781V14.0456C8.45215 14.1878 8.56744 14.3031 8.70965 14.3031C8.85186 14.3031 8.96715 14.1878 8.96715 14.0456V13.3931C8.96715 13.1169 9.19101 12.8931 9.46715 12.8931H9.91215C10.2855 12.8931 10.5755 12.7997 10.7821 12.6131C10.9888 12.4264 11.0921 12.1664 11.0921 11.8331C11.0921 11.4964 10.9888 11.2364 10.7821 11.0531C10.5755 10.8697 10.2855 10.7781 9.91215 10.7781H8.95215ZM10.5971 11.8331C10.5971 12.2631 10.3505 12.4781 9.85715 12.4781H9.46715C9.19101 12.4781 8.96715 12.2542 8.96715 11.9781V11.6931C8.96715 11.4169 9.19101 11.1931 9.46715 11.1931H9.85715C10.3505 11.1931 10.5971 11.4064 10.5971 11.8331Z"
                  fill="#404040"
                />
              </svg>
              <ListItemText secondary="Accounting & Journal" />
            </ListItem>
          </Link>
          <Link to="/report">
            <ListItem
              button
              key="report"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.3fr 1fr',
              }}
            >
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 0C0.895431 0 0 0.895431 0 2V9.00005H3.32565C3.73321 9.00005 4.09999 9.24739 4.25275 9.62524L4.80854 11L5.7543 12.9845C5.84807 13.1812 6.13115 13.1721 6.2121 12.9698L7 11L9 5.00002L9.16795 4.7481C9.56377 4.15436 10.4362 4.15436 10.8321 4.7481L11 5.00002L12.7236 8.44726C12.893 8.78605 13.2393 9.00005 13.618 9.00005H16V2C16 0.895431 15.1046 0 14 0H2ZM16 11H12.618C12.2393 11 11.893 10.786 11.7236 10.4473L11 9.00005L10.2535 7.13368C10.167 6.91745 9.85782 6.92653 9.78418 7.14747L9 9.5L7 15L6.83205 15.2519C6.43623 15.8457 5.56377 15.8457 5.16795 15.2519L5 15L3.27639 11.5528C3.107 11.2141 2.76074 11 2.38197 11H0V18C0 19.1046 0.895431 20 2 20H14C15.1046 20 16 19.1046 16 18V11Z"
                  fill="#404040"
                />
              </svg>
              <ListItemText secondary="Report & Analysis" />
            </ListItem>
          </Link>
          <Link to="/settings">
            <ListItem
              button
              key="settings"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.3fr 1fr',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 9.40041V10.5363C20 11.041 19.5586 11.3566 19.1164 11.4199L17.0345 11.8613C16.8455 12.4925 16.5931 13.1229 16.2775 13.6276L17.4759 15.3939C17.7282 15.8353 17.7915 16.34 17.4759 16.6556L16.6556 17.4759C16.34 17.7915 15.8353 17.7282 15.3939 17.4759L13.6276 16.2775C13.1229 16.5931 12.4917 16.8454 11.8613 17.0345L11.4199 19.1164C11.3566 19.5578 11.041 20 10.5363 20H9.40041C8.95903 20 8.6434 19.5586 8.58012 19.1164L8.13874 17.0345C7.50752 16.8455 6.87707 16.5931 6.30913 16.2775L4.54279 17.4759C4.16391 17.7282 3.65922 17.7915 3.3444 17.4759L2.52411 16.6556C2.2085 16.34 2.27178 15.8353 2.52411 15.3939L3.7225 13.6276C3.34362 13.1229 3.09129 12.4917 2.96549 11.8613L0.883567 11.4199C0.378906 11.3566 0 11.041 0 10.5363V9.40041C0 8.95903 0.378886 8.6434 0.883567 8.58012L2.96549 8.13874C3.09205 7.50752 3.34438 6.87707 3.7225 6.30913L2.52411 4.54279C2.27178 4.16391 2.2085 3.65922 2.52411 3.3444L3.3444 2.52411C3.66 2.2085 4.16469 2.27178 4.54279 2.52411L6.30913 3.7225C6.87707 3.34362 7.50752 3.09129 8.13874 2.96549L8.58012 0.883567C8.6434 0.378906 8.95901 0 9.40041 0H10.5363C11.041 0 11.3566 0.378886 11.4199 0.883567L11.8613 2.96549C12.4925 3.09205 13.1229 3.34438 13.6276 3.7225L15.3939 2.52411C15.8353 2.27178 16.34 2.2085 16.6556 2.52411L17.4759 3.3444C17.7915 3.66 17.7282 4.16469 17.4759 4.54279L16.2775 6.30913C16.5931 6.87707 16.8454 7.50752 17.0345 8.13874L19.1164 8.58012C19.5578 8.6434 20 8.95901 20 9.40041ZM9.96917 5.61535C7.57166 5.61535 5.61613 7.57074 5.61613 9.96839C5.61613 12.4293 7.57152 14.3846 9.96917 14.3846C12.4301 14.3846 14.3854 12.4292 14.3854 9.96839C14.3854 7.57088 12.43 5.61535 9.96917 5.61535Z"
                  fill="#404040"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.96914 7.12915C11.5464 7.12915 12.808 8.39082 12.808 9.96805C12.808 11.5453 11.5464 12.8069 9.96914 12.8069C8.39192 12.8069 7.13025 11.5453 7.13025 9.96805C7.13025 8.39082 8.39192 7.12915 9.96914 7.12915Z"
                  fill="#404040"
                />
              </svg>
              <ListItemText secondary="Settings" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
}

SideBar.propTypes = {};

export default SideBar;
