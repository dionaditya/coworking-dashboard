import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import H3 from 'components/H3';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#8CA7C7',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: '#E4E4E4',
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Rommy Humazay', '45.000.000.000'),
  createData('Bilqis Arnetty', '23.000.000.000'),
  createData('Rommy Humazay', '45.000.000.000'),
  createData('Bilqis Arnetty', '23.000.000.000'),
  createData('Rommy Humazay', '45.000.000.000'),
  createData('Bilqis Arnetty', '23.000.000.000'),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
}));

export default function TopStats() {
  const classes = useStyles();

  return (
    <div
      style={{
        background: 'white',
        padding: '20px',
        height: '100%',
      }}
    >
      <div>
        <H3
          style={{
            fontWeight: '100',
            fontSize: '24px',
            color: '#8CA7C7',
          }}
        >
          Top Stats
        </H3>
      </div>
      <Paper className={classes.root}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Account name</StyledTableCell>
              <StyledTableCell align="right">Transaction</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
