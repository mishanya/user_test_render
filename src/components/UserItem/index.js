import React, {Component} from 'react';
import {Link}               from 'react-router-dom'

export default ({user}) => {

  return (
    <div className='col-12 col-md-6 my-2 border'>
       
        <img src={user.avatar} className='w-25 d-inline-block ' />
        <div className='w-75 d-inline-block'>
          <div className='w-100 pl-2   align-middle'>{user.first_name} {user.last_name} </div>
          <div className='w-100 pl-2  align-middle'>{user.email}</div>
        </div>  
  
    </div>
  )
}