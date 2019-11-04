import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { Add } from '@material-ui/icons';
import queryString from 'query-string';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: 'white',
    color: 'black',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: '#F4F8FD',
    },
  },
}))(TableRow);

function createData(
  no,
  name,
  description,
  longSpace,
  floorPlan,
  roomPlan,
  action,
) {
  return { no, name, description, longSpace, floorPlan, roomPlan, action };
}

const rows = [
  createData(
    '1',
    'Ikhsan Failah',
    'Talkshow Standup Comedy',
    '100 m2',
    'image',
    'image',
  ),
  createData('2', 'Dimas Ardi', 'Reuni UNPAD', '60 m2', 'image', 'image'),
  createData(
    '3',
    'Ikhsan Failah',
    'Talkshow Standup Comedy',
    '100 m2',
    'image',
    'image',
  ),
  createData(
    '4',
    'Ikhsan Failah',
    'Talkshow Standup Comedy',
    '100 m2',
    'image',
    'image',
  ),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

export default function PrivateOfficeSettingTable(props) {
  const classes = useStyles();
  const parsed = queryString.parse(props.search);
  const page = parseInt(parsed.page);

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        background: 'white',
        padding: '20px',
      }}
    >
      <div
        style={{
          fontSize: '18px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignSelf: 'center',
          alignItems: 'center',
        }}
      >
        <div>Private Office List</div>
        <div
          style={{
            display: 'grid',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        >
          <button
            style={{
              width: 250,
              height: 50,
              background: '#438BF4',
              border: '2px solid transparent',
              borderRadius: '5px',
              color: 'white',
              display: 'flex',
            }}
          >
            <Add style={{ flexGrow: 1 }} />
            <div style={{ flexGrow: 2 }}>Add New Room</div>
          </button>
        </div>
      </div>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Large Space</StyledTableCell>
              <StyledTableCell align="left">Floor Plan</StyledTableCell>
              <StyledTableCell align="left">Room plan</StyledTableCell>
              <StyledTableCell align="left">Part of</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.no}
                </StyledTableCell>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="left">{row.longSpace}</StyledTableCell>
                <StyledTableCell align="left">{row.floorPlan}</StyledTableCell>
                <StyledTableCell align="left">{row.roomPlan}</StyledTableCell>
                <StyledTableCell align="left">
                  <button
                    style={{
                      padding: '8px',
                      background: '#FF5B5B',
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
                      Edit
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
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'rows',
          width: '100%',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            marginTop: '20px',
            fontSize: '16px',
            flexGrow: 1,
            display: 'flex',
          }}
        >
          Show <div style={{ color: 'blue' }}>1 of 8</div> Result
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          {['Previous', 1, 2, 3, 4, 5, 'Next'].map((key, i) => {
            if (i === page) {
              return (
                <Link to={`/settings/private-office?page=${i}`}>
                  <div
                    key={i}
                    style={{
                      background: '#438BF4',
                      border: '1px solid #D9DEE4',
                      padding: '10px',
                      color: 'white',
                    }}
                  >
                    {key}
                  </div>
                </Link>
              );
            }
            return (
              <Link to={`/settings/private-office?page=${i}`}>
                <div
                  key={i}
                  style={{
                    background: 'white',
                    border: '1px solid #D9DEE4',
                    padding: '10px',
                  }}
                >
                  {key}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
