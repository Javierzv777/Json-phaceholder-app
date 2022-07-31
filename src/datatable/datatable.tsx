import Button from '@mui/material/Button';
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';
import S from './datatable.module.css'

const commentIcon = "data:image/png;base64,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"
const deleteIcon = "data:image/png;base64,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"
const editIcon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvsx3APSbM5ktQCA_cPSmqYXRkWEHy2YfQA&usqp=CAU"

const columns: GridColDef[] = [

  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
  {
    field: 'edit',
    headerName: 'Edit',
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== '__check__' && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return <img className={S.logo} onClick={onClick} src={editIcon}/>;
    },
  },
  {
    field: 'delete',
    headerName: 'Delete',
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== '__check__' && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return <img className={S.logo} onClick={onClick} src={deleteIcon}/>;
    },
  },
  {
    field: 'comment',
    headerName: 'Comment',
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== '__check__' && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return <img className={S.logo} onClick={onClick} src={commentIcon}/>;
    },
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
