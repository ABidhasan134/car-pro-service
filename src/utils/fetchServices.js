
export const getAllServices =async()=>{
    const res= await fetch('/api/service',{cache: 'no-store'})
    const data=res.json();
    // console.log(data)
    return data;
}