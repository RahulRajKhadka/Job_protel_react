import supabaseClient from "../utils/superbase.ks"
export async function getJobs(token) {
    const supabase = await supabaseClient(token)
    
    let query = supabase.from("jobs").select("*");
    
    const {data, error} = await query;
    
    if (error) {
        console.log("Error fetching Jobs:", error);
        return null;
    }
    return data; 
}