
export const getAllServices =async()=>{
    const res= await fetch('http://localhost:3000/api/service',{cache: 'no-store'})
    const data=res.json();
    // console.log(data)
    return data;
}