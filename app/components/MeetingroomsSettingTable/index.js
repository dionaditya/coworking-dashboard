import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

export default function MeetingroomsSettingTable() {
  const classes = useStyles();

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
        <div>Meeting Rooms List</div>
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
            }}
          >
            Add New Room
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
                  <button>Edit</button>
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
          }}
        >
          Show 1 of 8 Result
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
            return (
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
