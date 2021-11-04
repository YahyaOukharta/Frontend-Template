import DashboardSideNav from '../components/DashboardSideNav'


const Dashboard = () => {
  // page content

  return (
    <div className="row">
      <div className="col-2">
        <DashboardSideNav/>
      </div>
      <div className="col-10" style={{minHeight:"52em"}}>
        <div className="jumbotron">
          <div class="h-100 p-5 bg-light border rounded-3">
            <h2>Dashboard</h2>
            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
            <button class="btn btn-outline-secondary" type="button">Example button</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard