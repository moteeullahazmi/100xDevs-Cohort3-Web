import { useEffect, useState } from "react";

export function useFetchDataDummy(){
    const [todo, setTodo] = useState("");
  
 async function toDataFetch(){
    const azmi = await fetch("https://dummyjson.com/todos");
 
    const json = await azmi.json();
    

    setTodo(json.todos[0].todo);
  }
  useEffect(()=>{
    toDataFetch();
    },
  [])

  return {
    todo:todo
  }
}