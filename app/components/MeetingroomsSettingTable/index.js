import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Add, Edit } from '@material-ui/icons';

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

const columns = [
  { id: 'id', label: 'Room id' },
  { id: 'name', label: 'Name' },
  {
    id: 'desc',
    label: 'Description',
  },
  {
    id: 'size',
    label: 'Size',
  },
  {
    id: 'rate',
    label: 'Rate',
  },
  {
    id: 'edit',
    label: 'Action',
  },
];

function createData(id, name, desc, size, rate, edit) {
  return { id, name, desc, size, rate, edit };
}

const rows = [
  createData('1', 'Mawar 1', 'Mawar 1', 200, 300000),
  createData('2', 'Mawar 1', 'Mawar 1', 200, 300000),
  createData('3', 'Mawar 1', 'Mawar 1', 200, 300000),
  createData('4', 'Mawar 1', 'Mawar 1', 200, 300000),
  createData('5', 'Mawar 1', 'Mawar 1', 200, 300000),
  createData('6', 'Mawar 1', 'Mawar 1', 200, 300000),
  createData('7', 'Mawar 1', 'Mawar 1', 200, 300000),
  createData('8', 'Mawar 1', 'Mawar 1', 200, 300000),
  createData('9', 'Mawar 1', 'Mawar 1', 200, 300000),
  createData('10', 'Mawar 1', 'Mawar 1', 200, 300000),
  createData('11', 'Mawar 1', 'Mawar 1', 200, 300000),
  createData('12', 'Mawar 1', 'Mawar 1', 200, 300000),
  createData('13', 'Mawar 1', 'Mawar 1', 200, 300000),
  createData('14', 'Mawar 1', 'Mawar 1', 200, 300000),
  createData('15', 'Mawar 1', 'Mawar 1', 200, 300000),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '20px',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

export default function MeetingroomsSettingTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
          color: '#438BF4',
        }}
      >
        <div>Meeting rooms List</div>
        <div
          style={{
            display: 'grid',
            justifyContent: 'flex-end',
            alignSelf: 'center',
          }}
        >
          <button
            style={{
              width: 200,
              height: 40,
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
        <div className={classes.tableWrapper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <StyledTableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map(column => {
                        const value = row[column.id];
                        console.log(column);
                        if (column.id === 'edit') {
                          return (
                            <StyledTableCell
                              key={column.id}
                              align={column.align}
                            >
                              <button
                                style={{
                                  display: 'flex',
                                  padding: '5px',
                                  background: '#438BF4',
                                  color: 'white',
                                  border: '2px solid transparent',
                                  borderRadius: '5px',
                                }}
                              >
                                <div
                                  style={{
                                    flexGrow: 1,
                                    marginLeft: '5px',
                                  }}
                                >
                                  <Edit />
                                </div>
                                <div style={{ flexGrow: 2, marginLeft: '5px' }}>
                                  Edit
                                </div>
                              </button>
                            </StyledTableCell>
                          );
                        }
                        return (
                          <StyledTableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </StyledTableCell>
                        );
                      })}
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
