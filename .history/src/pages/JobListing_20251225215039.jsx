import React, { useEffect, useState } from 'react'
import { getJobs } from "../api/apiJobs.js"
import { useSession } from '@clerk/clerk-react'

const JobListing = () => {
  const { session } = useSession()
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchJobs = async () => {
    if (!session) return;
    
    try {
      setLoading(true)
      const supabaseAccessToken = await session.getToken({
        template: "supabase",
      })
      const data = await getJobs(supabaseAccessToken);
      console.log(data)
      setJobs(data || [])
    } catch (error) {
      console.error("Error in fetchJobs:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs();
  }, [session]); // Fixed: Added session dependency

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h1>JobListing</h1>
      {/* Render your jobs here */}
    </div>
  )
}

export default JobListing