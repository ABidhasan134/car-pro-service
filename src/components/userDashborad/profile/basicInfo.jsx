import UseUser from '@/Hooks/useUser';
import React from 'react'

const BasicInfo = ({user}) => {
    console.log("this is user info from the basic info",user)
      const [oneUser,isloading,refetch]=UseUser(user?.email);
      console.log("this is user from basic info",oneUser)
  return (
    <div className='text-center'>
      <h1 className='text-5xl'>{user.name}</h1>
        <h3>Role:{oneUser.role}</h3>
      <h6>email:{user.email}</h6>
      <div >
        <button className='mr-1 btn btn-primary'>Change Name</button>
        <button className='btn btn-primary'>Change img</button>
      </div>
    </div>
  )
}

export default BasicInfo