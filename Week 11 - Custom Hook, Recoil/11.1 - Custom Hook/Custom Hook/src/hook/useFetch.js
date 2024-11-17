import { useEffect, useState } from "react";

export function useFetch(url){
const [dataInput, setData] = useState("");
const [loading, setLoading] = useState(true)


async function getData(){
    setLoading(true)
    const response = await fetch(url);
    const json = await response.json();
    setData(json)
    setLoading(false)
}


useEffect(()=>{
    getData();
},[url])

useEffect(()=> {
    setInterval(getData, 10*1000)
}
)

return {dataInput, loading};

}
