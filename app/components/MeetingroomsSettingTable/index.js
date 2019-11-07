import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Add, Edit, Colorize } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import DeleteModal from 'components/DeleteModal';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: 'white',
    color: 'black',
    width: 120,
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

export default function MeetingroomsSettingTable({
  data,
  deleteState,
  deleteMeetingRooms,
  addMeetingRoomsState,
  addMeetingRooms,
}) {
  console.log('data', data);
  const classes = useStyles();
  const rows = data;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [deletedId, setDelete] = React.useState('');
  const [isMounted, setMounted] = React.useState(false);
  const [formValue, setValue] = React.useState({
    id: '',
    name: '',
    desc: '',
    size: '',
    rate: '',
  });
  const [isNew, setNew] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [dataId, setdataId] = React.useState('');

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = e => {
    setValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const deleteRow = id => {
    setdataId(id);
    setOpen(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAddRow = event => {
    console.log('add');
    setNew(true);
  };

  const handleAddState = event => {
    addMeetingRoomsState(formValue);
    addMeetingRooms(formValue);
    setNew(false);
    setValue({
      id: '',
      name: '',
      desc: '',
      size: '',
      rate: '',
    });
  };

  if (isMounted === false || data === undefined) {
    return <div>Loading...</div>;
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
            onClick={() => handleAddRow()}
          >
            <Add style={{ flexGrow: 1 }} />
            <div style={{ flexGrow: 2 }}>Add New Data</div>
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
              {isNew ? (
                <StyledTableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key="new-row"
                >
                  {columns.map((column, i) => {
                    if (column.id === 'edit') {
                      return (
                        <StyledTableCell key={column.id} align={column.align}>
                          <button onClick={() => handleAddState()}>
                            Tambah
                          </button>
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
              ) : (
                false
              )}
              {!data ? (
                <div />
              ) : (
                <>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(row => {
                      if (row.id === deletedId) {
                        return (
                          <StyledTableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            style={{
                              visibility: 'hidden',
                              opacity: 0,
                              transition: 'visibility 0s 2s, opacity 2s linear',
                            }}
                            key={row.id}
                          >
                            {columns.map(column => {
                              const value = row[column.id];
                              if (column.id === 'edit') {
                                return (
                                  <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ width: column.width }}
                                  >
                                    <Link
                                      to={`/settings/meeting-rooms/${
                                        row.id
                                      }/edit`}
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
                                        <div
                                          style={{
                                            flexGrow: 2,
                                            marginLeft: '5px',
                                          }}
                                        >
                                          Edit
                                        </div>
                                      </button>
                                    </Link>
                                    <button onClick={() => deleteRow(row.id)}>
                                      delete
                                    </button>
                                  </StyledTableCell>
                                );
                              }
                              return (
                                <StyledTableCell
                                  key={column.id}
                                  align={column.align}
                                >
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </StyledTableCell>
                              );
                            })}
                          </StyledTableRow>
                        );
                      }
                      return (
                        <StyledTableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                        >
                          {columns.map(column => {
                            const value = row[column.id];
                            if (column.id === 'edit') {
                              return (
                                <StyledTableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{ width: column.width }}
                                >
                                  <Link
                                    to={`/settings/meeting-rooms/${
                                      row.id
                                    }/edit`}
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
                                      <div
                                        style={{
                                          flexGrow: 2,
                                          marginLeft: '5px',
                                        }}
                                      >
                                        Edit
                                      </div>
                                    </button>
                                  </Link>
                                  <button onClick={() => deleteRow(row.id)}>
                                    delete
                                  </button>
                                </StyledTableCell>
                              );
                            }
                            return (
                              <StyledTableCell
                                key={column.id}
                                align={column.align}
                              >
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </StyledTableCell>
                            );
                          })}
                        </StyledTableRow>
                      );
                    })}
                </>
              )}
            </TableBody>
          </Table>
        </div>
        {rows.lenght < 0 ? (
          <div />
        ) : (
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
        )}
      </Paper>
      <DeleteModal
        deleteState={deleteState}
        deleteMeetingRooms={deleteMeetingRooms}
        open={open}
        setOpen={setOpen}
        id={dataId}
      />
    </div>
  );
}
