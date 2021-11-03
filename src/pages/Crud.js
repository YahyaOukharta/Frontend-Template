import DashboardSideNav from '../components/DashboardSideNav'


const Crud = () => {
  // page content

  return (
    <div className="row">
      <div className="col-2">
        <DashboardSideNav/>
      </div>
      <div className="col-10" style={{minHeight:"45em"}}>
        Crud 1
      </div>
    </div>

  )
}

export default Crud