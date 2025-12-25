import supabaseClient from "@/utils/superbase";

export async function name(token, location, coampnay_id,searchQuery) {

    const supabase =await supabaseClient(token)

let query= supabase.from ("jobs").select("*");
const {data,error}=await query;
if (error){
    console.log("Error fectching Jobs")
}
    
}