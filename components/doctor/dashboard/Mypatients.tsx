import React from 'react'

const Mypatients = ({data}:{data:{
    Fname:string,
    Lname:string,
    email:string,
    dob:string,
    contact:string,
    address:{
        address: String;
        city:    String;
        state:   String;
        country: String;
        pincode: String;
    },
    userId:string,
    bloodGroup:string;
    profilePic:string
}}) => {
  return (
      <div className="col-md-6 col-lg-4 col-xl-3">
        <div className="card widget-profile pat-widget-profile">
          <div className="card-body border  border-primary rounded-md">
            <div className="pro-widget-content">
              <div className="profile-info-widget">
                <a href="patient-profile.html" className="booking-doc-img">
                  <img src={data.profilePic??"/assets/doctor-1.jpg"} alt="User Image" />
                </a>
                <div className="profile-det-info">
                  <h3>
                    <a href="patient-profile.html" className='font-bold no-underline'>{data.Fname} {data.Lname}</a>
                  </h3>
                  <div className="patient-details">
                    <h5 className=''>
                      <b className='text-gray-800'>Patient ID :</b> <span className='text-black no-underline'>{data.userId}</span>
                    </h5>
                    <h5 className="mb-0">
                      <i className="fas fa-map-marker-alt" /> {data.address.address} {data.address.city}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="patient-info">
              <ul>
                <li>
                  Phone <span>{data.contact??null}</span>
                </li>
                <li>
                  Age <span>38 Years, Male</span>
                </li>
                <li>
                  Blood Group <span>{data.bloodGroup}</span>
                </li>

                
              </ul>
              <button className='btn btn-success items-center'>View Profile</button>
            </div>
          </div>
        </div>
      </div>
    

  
  
  )
}

export default Mypatients