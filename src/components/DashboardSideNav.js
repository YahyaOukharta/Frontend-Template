import {ListGroup} from "react-bootstrap"

const DashboardSideNav = () => {
    return (
      <>
      <ListGroup as="ul" style={{borderRadius:"0"}}>
        <a href="/dashboard" style={{textDecoration:"none"}}>
          <ListGroup.Item as="li" active={window.location.pathname==="/dashboard"}>Dashboard</ListGroup.Item>
        </a>
        <a href="/crud1" style={{textDecoration:"none"}}>
          <ListGroup.Item as="li" active={window.location.pathname==="/crud1"}>CRUD 1</ListGroup.Item>
        </a>
        <ListGroup.Item as="li">CRUD 2</ListGroup.Item>
        <ListGroup.Item as="li">Activity Log</ListGroup.Item>
      </ListGroup>
      </>
    )
  }
  
  export default DashboardSideNav
  