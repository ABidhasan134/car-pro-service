import React from 'react';

const CustomTableRow = ({ user }) => {
  console.log('Single user:', user?.customservices);

  return (
    <>
      {user?.customservices?.length > 0
        ? user.customservices.map((service, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{service.bookingemail || service.email}</td>
              <td>{service.bookingName || service.name}</td>
              <td>{service.bookingPhone}</td>
              <td>{service.vehicalName}</td>
              <td>{service.dateTime}</td>
              <td>{service.bookingStatus}</td>
            </tr>
          ))
        : null}
    </>
  );
};

export default CustomTableRow;
