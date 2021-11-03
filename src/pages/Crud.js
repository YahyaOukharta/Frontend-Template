import DashboardSideNav from '../components/DashboardSideNav'
import { Table, ButtonGroup, Button} from "react-bootstrap"

const Crud = () => {
  // page content

  return (
    <div className="row">
      <div className="col-2">
        <DashboardSideNav/>
      </div>
      <div className="col-10 pl-4" style={{minHeight:"45em"}}>
        <div className="jumbotron">
          <div class="h-100 p-5 bg-light border rounded-3">
            <h2>CRUD</h2>
            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
            <button class="btn btn-outline-secondary" type="button">Example button</button>
          </div>
        </div>
      <Table striped bordered hover className="mt-5 ">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Button variant="success">Start</Button>
                <Button variant="warning">Edit</Button>
                <Button variant="danger">Delete</Button>
              </ButtonGroup>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Button variant="success">Start</Button>
                <Button variant="warning">Edit</Button>
                <Button variant="danger">Delete</Button>
              </ButtonGroup>
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
    </div>

  )
}

export default Crud