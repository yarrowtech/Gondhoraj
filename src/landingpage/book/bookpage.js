
function Bookpage() {

    return ( 
      <>
        <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="text-success fw-bold">Gondhoraj Restaurant</h1>
          <p className="lead text-muted">Reserve your table and enjoy a refreshing dining experience</p>
        </div>
  
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg p-4 border-0 rounded-4">
              <h4 className="mb-4 text-center text-success">Book a Table</h4>
              <form >
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" name='name' placeholder="Enter your name" required/>
                    
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-control"  name='phone' placeholder="Enter your phone number" required />
                   
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Date</label>
                    <input type="date" className="form-control"  name="date" required/>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Time</label>
                    <input type="time" className="form-control"  name="time" required/>
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Number of Guests</label>
                    <input type="number" className="form-control" name='numberOfGuests' placeholder="e.g. 4" required />
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-success px-5 rounded-pill mt-3">
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
       
      </>
    );
     
}

export default Bookpage;