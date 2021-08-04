import React from "react";

interface InterfaceAlertIcon {
    color: string | null,
    message: string, 
}

export const AlertIcon: React.FC<InterfaceAlertIcon> = ({color, message}) => {
    if(!color) {
        return(
            <div style={{width:'15px', height:'15px', backgroundColor: 'white', borderRadius:'20px', marginRight:'5px', border:'2px solid #DDDDDD'}} title={message}></div>
        )
    }
    return (
        <div style={{width:'15px', height:'15px', backgroundColor: color, borderRadius:'20px', marginRight:'5px'}} title={message}></div>
    )
}