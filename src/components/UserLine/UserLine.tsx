import React from "react"
import { EnumUserLineTypes, InterfaceUserLine } from "../../models/UserLine/userLine"

export const UserLine : React.FC<InterfaceUserLine>  = ({
    name,email,phoneNumber,alerts,
    alertColor,title,type = EnumUserLineTypes.ASSISTANTS 
}) => {
    const renderUserLine = () => {
        switch(type) {
            case EnumUserLineTypes.DOCTORS: {
                return (
                    <div className='user-line'>
                        <div className='number'>1</div>
                        <div>Alex Sample</div>
                        <div>email@gmail.com</div>
                        <div>0632465077</div>
                        <div>alerts</div>
                        <div>Rooms 1a, 7b</div>
                        <div>icons</div>
                    </div>
                )
            }
            case EnumUserLineTypes.ASSISTANTS: {
                return (
                    <div className='user-line'>
                        <div className='number'>1</div>
                        <div>Alex Sample</div>
                        <div>email@gmail.com</div>
                        <div>0632465077</div>
                        <div>icons</div>
                    </div>
                )
            }
            case EnumUserLineTypes.RECEPTIONISTS: {
                return (
                    <div className='user-line'>
                        <div className='number'>1</div>
                        <div>Alex Sample</div>
                        <div>email@gmail.com</div>
                        <div>0632465077</div>
                        <div>icons</div>
                    </div>
                )
            }
            case EnumUserLineTypes.ROOM_STATUS_SETTINGS: {
                return (
                    <div>I am Room userLine</div>
                )
            }
        }
    };
    
    return renderUserLine();
}