import DashboardSideNav from '../components/DashboardSideNav'


const Dashboard = () => {
  // page content

  return (
    <div className="row">
      <div className="col-2">
        <DashboardSideNav/>
      </div>
      <div className="col-10" style={{minHeight:"45em"}}>
        Dashboard
      </div>
    </div>

  )
}

export default Dashboard