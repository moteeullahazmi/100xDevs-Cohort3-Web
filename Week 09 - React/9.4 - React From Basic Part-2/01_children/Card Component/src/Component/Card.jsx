import React, { Children } from "react";

export default function Card({children}){

    return(
        <div style={{
            border: "2px solid #333",
            padding: '20px',
            borderRadius:'8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            maxWidth: '300px',
            margin:'10px auto'
        }}>

{children}
        
        </div>
    )
}