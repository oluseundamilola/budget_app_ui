import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const List = ({ type, data }) => {
  let columns;
  switch (type) {
    case "requests":
      columns = [
        { name: "Request Name" },
        { name: "Description" },
        { name: "Amount" },
        { name: "Division" },
        { name: "Department" },
        { name: "Ministry" },
        { name: "Status" },
      ];
      break;
    case "departments":
      columns = [
        { name: "Department ID" },
        { name: "Name" },
        { name: "Description" },
        { name: "Divisions Count" },
      ];
      break;
    case "division":
      columns = [
        { name: "Division ID" },
        { name: "Division Name" },
        { name: "Division Code" },
        { name: "Sent Requests" },
      ];
      break;
      case "division_request":
      columns = [
        { name: "Request" },
        { name: "Description" },
        { name: "Amount" },
        { name: "Status" },
      ];
      break;
    default:
      break;
  }

  const data_requests = [
    {
      id: 1,
      request_name: "More Ships",
      amount: "$3000",
      division: "Defence Division 1",
      department: "Navy Department",
      ministry: "Defence",
      status: "Pending",
    },
    {
      id: 2,
      request_name: "More Guns",
      amount: "$3000",
      division: "Defence Division 1",
      department: "Navy Department",
      ministry: "Defence",
      status: "Pending",
    },
    {
      id: 3,
      request_name: "30 more hospital beds",
      amount: "$4000",
      division: "Health Division 3",
      department: "Hospitals",
      ministry: "Health",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.name} className="tableCell">
                {column.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {type === "requests" &&
            data_requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.id}</TableCell>
                <TableCell className="tableCell">
                  {request.request_name}
                </TableCell>
                <TableCell className="tableCell">{request.amount}</TableCell>
                <TableCell className="tableCell">{request.division}</TableCell>
                <TableCell className="tableCell">
                  {request.department}
                </TableCell>
                <TableCell className="tableCell">{request.ministry}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${request.status}`}>
                    {request.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          {type === "departments" &&
            data.map((department) => (
              <TableRow key={department.name}>
                <TableCell>{department.id}</TableCell>
                <TableCell className="tableCell">{department.name}</TableCell>
                <TableCell className="tableCell">
                  {department.description}
                </TableCell>
                <TableCell className="tableCell">
                  {department.divisionCount}
                </TableCell>
                <TableCell className="tableCell">
                  <div className="cellAction">
                    {console.log(department.id)}
                    <Link
                      to={`/department/${department.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="viewButton">View</div>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          {type === "division" &&
            data.map((division) => (
              <TableRow>
                <TableCell>{division.id}</TableCell>
                <TableCell className="tableCell">
                  {division.divisionName}
                </TableCell>
                <TableCell className="tableCell">
                  {division.divisionCode}
                </TableCell>
                <TableCell className="tableCell">
                  ?Number of sent request?
                </TableCell>
                <TableCell className="tableCell">
                  <div className="cellAction">
                    <Link
                      to={`/division/${division.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="viewButton">View</div>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}

          {type === "division_request" &&
            data.map((request) => (
              <TableRow>
                <TableCell className="tableCell">
                  {request.budget_name}
                </TableCell>
                <TableCell className="tableCell">
                  {request.budget_description}
                </TableCell>
                <TableCell className="tableCell">
                  {request.amount}
                </TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${request.status}`}>
                    {request.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
