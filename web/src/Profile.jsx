import React from 'react';

const storedFirstName = localStorage.getItem('fname');
const storedLastName = localStorage.getItem('lname');
const storedLastemail = localStorage.getItem('email');
const user = {
  name:`${storedFirstName} ${storedLastName}`,
  email: `${storedLastemail}`
};
function Profile() {
  const initials = user.name.split(' ').map((namePart) => namePart[0]).join('').toUpperCase();

  return (
    <div className='d-flex align-items-end'>
      <div className="bg-info text-white d-flex justify-content-center align-items-center rounded-circle" style={{ width: "50px", height: "50px", borderRadius: "50%"}}>
        {initials}
      </div>
      <div className='d-flex pt-1'>
      <div className="col">
       <h5 className='m-0'>{user.name}</h5>
        <p className='m-0'>{user.email}</p>
      </div>
      </div>
    </div>
  );
}

export default Profile;
