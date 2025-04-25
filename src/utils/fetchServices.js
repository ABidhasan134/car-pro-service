
export const getAllServices =async()=>{
    const res= await fetch('https://car-pro-service.vercel.app/api/service',{cache: 'no-store'})
    const data=res.json();
    // console.log(data)
    return data;
}