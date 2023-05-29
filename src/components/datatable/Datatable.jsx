import { Link } from "react-router-dom";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

const rows = [
  {
    id: 1,
    name: "Defence",
    description: "Ministry of Defence",
    departmentCount: 3,
    location: "ABJ",
    sector: "21",
    email: "femi@gmail.com",
  },
  // { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  // { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  // { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  // { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  // { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  // { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  // { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  // { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  // { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // { id: 11, lastName: "Snow", firstName: "Jon", age: 35 },
  // { id: 12, lastName: "Lannister", firstName: "Cersei", age: 42 },
  // { id: 13, lastName: "Lannister", firstName: "Jaime", age: 45 },
  // { id: 14, lastName: "Stark", firstName: "Arya", age: 16 },
  // { id: 15, lastName: "Targaryen", firstName: "Daenerys", age: null },
  // { id: 16, lastName: "Melisandre", firstName: null, age: 150 },
  // { id: 17, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  // { id: 18, lastName: "Frances", firstName: "Rossini", age: 36 },
  // { id: 19, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Datatable = ({ type, data }) => {
  let columns;
  let addType;
  switch (type) {
    case "ministry":
      columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 100 },
        { field: "description", headerName: "Description", width: 170 },
        {
          field: "departmentCount",
          headerName: "Department Count",
          type: "number",
          width: 100,
        },
        { field: "location", headerName: "Location", width: 70 },
        { field: "sector", headerName: "Sectors", type: "number", width: 70 },
        { field: "email", headerName: "User", width: 130 },
      ];
      addType = "Ministry"
      break;
    default:
      break;
  }

  const actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/ministry/test">
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="dataTitle">
        Add New {addType}
        <Link
          to="users/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns.concat(actionColum)}
        initialState={{
          pagination: {
            paginationModel: { page: 2, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
