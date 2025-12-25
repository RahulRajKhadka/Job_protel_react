import React from 'react'
import {getJobs} from "../api/apiJobs"
import { useSession } from '@clerk/clerk-react'
import { useEffect } from 'react'


const JobListing = async() => {

  const {session}=useSession()

  const fetchJobs=()=>{
    const supbaseAcessToken =await usesession.getToken({
      template:"supabase",
    })
    getJobs(supbaseAcessToken);
  }


  useEffect(()=>
  {
fetchJobs();
  },[]);
  return (
    <div>
      <h1>JobListing</h1>
    </div>
  )
}

export default JobListing
