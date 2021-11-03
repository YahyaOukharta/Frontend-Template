import { Container } from "react-bootstrap"

const Pricing = () => {
  return (
    <Container id="pricing" className="pt-3">
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Pricing</h1>
        <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
      </div>
      <div className="container">
        <div className=" text-center">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Free</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Container>
  )
}

export default Pricing;
