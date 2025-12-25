import React, { useEffect, useState } from 'react'
import { getJobs } from "../api/apiJobs.js"
import { useSession } from '@clerk/clerk-react'

const JobListing = () => {
  const { session } = useSession()
  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    if (!session) return; // Add guard clause
    
    const supabaseAccessToken = await session.getToken({
      template: "supabase",
    })
    const data = await getJobs(supabaseAccessToken);
    console.log(data)
    setJobs(data || [])
  }

  useEffect(() => {
    fetchJobs();
  }, [session]); // Added session as dependency

  return (
    <div>
      <h1>JobListing</h1>
    </div>
  )
}

export default JobListing