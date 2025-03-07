import React from 'react';

const CustomTableRow = ({ user }) => {
  console.log('Single user:', user?.customservices);
  const changeStatus=(status,userEmail )=>{
    console.log(status,userEmail);
  }
  return (
    <>
      {user?.customservices?.length > 0
        ? user.customservices.map((service, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <th>{service.userEmail}</th>
              <td>{service.bookingemail || service.email}</td>
              <td>{service.bookingName || service.name}</td>
              <td>{service.bookingPhone}</td>
              <td>{service.vehicalName}</td>
              <td>{service.dateTime}</td>
              <td className='flex items-center'>{service.bookingStatus}
              {
              (service.bookingStatus === "panding" && <div className="dropdown ml-2">
                <div tabIndex={0} role="button" className="h-6 w-6 rounded-full bg-blue-600  ooltip"></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li><button onClick={()=>changeStatus("confirm",`${service.userEmail}`)}>confirm</button></li>
                  <li><button onClick={()=>changeStatus("rejected",`${service.userEmail}`)}>rejected</button></li>
                </ul>
              </div> )||
              
                (service.bookingStatus === "confirm" && <div className="dropdown ml-2">
                  <div tabIndex={0} role="button" className="h-6 w-6 rounded-full bg-green-600  ooltip"></div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><button onClick={()=>changeStatus("pending",`${service.userEmail}`)}>pending</button></li>
                    <li><button onClick={()=>changeStatus("rejected",`${service.userEmail}`)}>rejected</button></li>
                  </ul>
                </div> ) ||
                (service.bookingStatus === "rejected" && <div className="dropdown ml-2">
                  <div tabIndex={0} role="button" className="h-6 w-6 rounded-full bg-red-600  ooltip"></div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><button onClick={()=>changeStatus("confirm",`${service.userEmail}`)}>confirm</button></li>
                    <li><button onClick={()=>changeStatus("pending",`${service.userEmail}`)}>pending</button></li>
                  </ul>
                </div> ) ||
                (service.bookingStatus?"":  <div className="dropdown ml-14">
                  <div tabIndex={0} role="button" className="h-6 w-6 rounded-full bg-red-600  ooltip"></div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><button onClick={()=>changeStatus("confirm",`${service.userEmail}`)}>confirm</button></li>
                    <li><button onClick={()=>changeStatus("pending",`${service.userEmail}`)}>pending</button></li>
                    <li><button onClick={()=>changeStatus("rejected",`${service.userEmail}`)}>rejected</button></li>
                  </ul>
                </div>)
                } 
              </td>
            </tr>
          ))
        : null}
    </>
  );
};

export default CustomTableRow;
