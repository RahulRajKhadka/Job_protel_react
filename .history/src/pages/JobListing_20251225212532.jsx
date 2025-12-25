import React from 'react'
import {getJobs} from "../api/apiJobs"
import { useSession } from '@clerk/clerk-react'
import { useEffect } from 'react'

const JobListing = () => {

  const {session}=useSession()

  const fetchJobs=()=>{
    const supbaseAcessToken =await session.getToken
  }
  return (
    <div>
      <h1>JobListing</h1>
    </div>
  )
}

export default JobListing
