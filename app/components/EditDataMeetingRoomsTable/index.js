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
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: 'white',
    color: 'black',
    width: 120,
  },
  body: {
    fontSize: 14,
    alignItems: 'stretch',
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
  { id: 'id', label: 'Room id', width: 120 },
  { id: 'name', label: 'Name', width: 120 },
  {
    id: 'desc',
    label: 'Description',
    width: 120,
  },
  {
    id: 'size',
    label: 'Size',
    width: 120,
  },
  {
    id: 'rate',
    label: 'Rate',
    width: 120,
  },
  {
    id: 'edit',
    label: 'Action',
    width: 120,
  },
];

function createData(id, name, desc, size, rate, edit) {
  return { id, name, desc, size, rate, edit };
}

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

export default function EditDataMeetingRoomsTable({ detail, edit }) {
  const classes = useStyles();
  const [isMounted, setMounted] = React.useState(false);
  const [formValue, setValue] = React.useState({
    id: detail.id,
    name: detail.name,
    desc: detail.desc,
    size: detail.size,
    rate: detail.rate,
  });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleSave = id => {
    edit(id, formValue);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChange = e => {
    setValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (detail === null || isMounted === false) {
    return <div>Belum adda data</div>;
  }

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
        <div>Meeting rooms</div>
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
              <StyledTableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={detail.id}
              >
                {columns.map(column => {
                  const value = detail[column.id];
                  if (column.id === 'edit') {
                    return (
                      <StyledTableCell
                        key={column.id}
                        align={column.align}
                        className={classes.body}
                        style={{ width: column.width }}
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
                          onClick={() => handleSave(detail.id)}
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
                            Save
                          </div>
                        </button>
                      </StyledTableCell>
                    );
                  }
                  if (column.id === 'id') {
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                        <TextField
                          id="standard-multiline-flexible"
                          name={column.id}
                          multiline
                          rowsMax="4"
                          onChange={handleChange}
                          value={formValue[column.id]}
                          margin="normal"
                          disabled
                        />
                      </StyledTableCell>
                    );
                  }

                  return (
                    <StyledTableCell key={column.id} align={column.align}>
                      <TextField
                        id="standard-multiline-flexible"
                        name={column.id}
                        multiline
                        rowsMax="4"
                        onChange={handleChange}
                        value={formValue[column.id]}
                        margin="normal"
                      />
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            </TableBody>
          </Table>
        </div>
      </Paper>
    </div>
  );
}
