import supabaseClient from "../utils/superbase"

export async function name(token) {

    const supabase =await supabaseClient(token)

let query= supabase.from ("jobs").select("*");
const {data,error}=await query;
if (error){
    console.log("Error fectching Jobs:",error);
    return null;
}
return data;
    
}