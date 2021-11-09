import { useState, useEffect, useRef }from "react"
import { Table, ButtonGroup, Button, Modal, Form, Alert} from "react-bootstrap"
import DashboardSideNav from '../components/DashboardSideNav'

const Crud = () => {
  //logs
  const [logs, setLogs] = useState("");
  const [logsFixedScrolling, setLogsFixedScrolling] = useState(true);
  const logsRef = useRef(null);
  useEffect(() => {
    // asynchronous function to fetch logs
    const fetchLogs = async () => {
      try {
        const logResponse = logs + "HELLOOOOOO:  testt\n"
        setLogs(logResponse);
        if(logsFixedScrolling)
          logsRef.current.scrollTop = logsRef.current.scrollHeight;
        
      } catch {
        // just don't update state, or set an error message in state,
        // basically anything you want to do to handle errors
      }
    }
    
    // setup interval to fetch logs
    const intervalTimer = setInterval(fetchLogs, 500);
  
    // function to clean up effect when component unmounts
    return () => clearInterval(intervalTimer);
  });
  // modals
  const [showEditModal, setEditModal] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [showLaunchModal, setLaunchModal] = useState(false);

  const toggleEditModal = () =>{ setEditModal(!showEditModal)}
  const toggleDeleteModal = () =>{ setDeleteModal(!showDeleteModal)}
  const toggleLaunchModal = () =>{ setLaunchModal(!showLaunchModal)}

  return (
    <>
    <div className="row">
      <div className="col-2">
        <DashboardSideNav/>
      </div>
      <div className="col-10 pl-4" style={{minHeight:"52em"}}>
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
                <Button variant="success" onClick={toggleLaunchModal}>Start</Button>
                <Button variant="warning" onClick={toggleEditModal}>Edit</Button>
                <Button variant="danger" onClick={toggleDeleteModal}>Delete</Button>
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
      <div class="row">
        <div class="col-md-12 d-flex">
          <h3 style={{margin:"0", display:"inline-block"}}>Logs for #dsgdggds</h3> 
          <button type="button" style={{marginLeft:"auto"}} class="btn btn-primary">Download Logs file</button>
        </div>
      </div>
      <div style={{height:"500px", overflow:"auto"}} ref={logsRef} className="border mx-2 " onScroll={(e)=>{if(e.target.offsetHeight+e.target.scrollTop < e.target.scrollHeight) setLogsFixedScrolling(false)} }>

        {logs && logs.split("\n").map((e,i)=>{
          return <p key={i}>{e}</p>
        })}
      </div>
      <div class="row">
        <div class="col-md-12 d-flex">
          <button type="button" style={{marginLeft:"auto"}} class="btn btn-primary" onClick={()=>setLogsFixedScrolling(true)}>Fix scroll to bottom</button>
        </div>
      </div>
      <Modal show={showEditModal} onHide={toggleEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>CRUD Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Name</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Config name" />
        <br />
        <Form.Label>Name</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Config name" />
        <br />
        <Form.Label>Name</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Config name" />
        <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleEditModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>{}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteModal} onHide={toggleDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>CRUD Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="danger">
            Are you sure you want to delete Item #{'df5sdf6df5gd4s'}
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={()=>{}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    
      <Modal show={showLaunchModal} onHide={toggleLaunchModal}>
        <Modal.Header closeButton>
          <Modal.Title>CRUD Launch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="success">
            Are you sure you want to Launch Item #{'df5sdf6df5gd4s'}
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleLaunchModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={()=>{}}>
            Launch
          </Button>
        </Modal.Footer>
      </Modal>

     </div>
     </div>
    </>
  )
}

export default Crud