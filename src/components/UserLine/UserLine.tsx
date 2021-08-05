import React from "react"
import { EnumUserLineTypes, InterfaceUserLine, TypeUserLineClasses } from "../../models/UserLine/userLine"
import { AlertIcon } from "./components/AlertIcon"
import { EnumIcons, Icon } from "./components/Icon"

const AlertIcons = [
    {id:1, color: "rgba(99, 191, 242, 1)", message:'Doctor in'},
    {id:2, color: "rgba(147, 157, 255, 1)", message:'Doctor required'},
    {id:3, color: "rgba(242, 215, 117, 1)", message:'Assistant required'},
    {id:4, color: "rgba(116, 195, 134, 1)", message:'Assistant in'},
    {id:5, color: null, message:'Empty'}
]

const userLineClasses : TypeUserLineClasses = {
    [EnumUserLineTypes.ASSISTANTS] : 'line-assistant',
    [EnumUserLineTypes.DOCTORS] : 'line-doctors',
    [EnumUserLineTypes.RECEPTIONISTS] : 'line-receptionists',
    [EnumUserLineTypes.ROOM_STATUS_SETTINGS] : 'line-room_status',

}
export const UserLine : React.FC<InterfaceUserLine>  = ({
    name,
    email,
    phoneNumber,
    alerts,
    alertColor,
    title,
    additionalStylesClassName='',
    type = EnumUserLineTypes.ASSISTANTS 
}) => {
    const renderUserLine = () => {
        switch(type) {
            case EnumUserLineTypes.DOCTORS: {
                return (
                    <div className='user-line'>
                        <div className='number'>1</div>
                        <div className="info__container">
                            <div className='name' >Alex Sample</div>
                            <div className='email' >email@gmail.com</div>
                            <div className='phone' >0632465077</div>
                            <div className='alert-icons'>
                                {AlertIcons.map((elem)=>
                                    <AlertIcon key={elem.id} color={elem.color} message = {elem.message}/>
                                )}
                            </div>
                            <div className='rooms' >Rooms 1a, 7b</div>
                            <Icon type={EnumIcons.DOCTORS}/>
                        </div>
                    </div>
                )
            }
            case EnumUserLineTypes.ASSISTANTS: {
                return (
                    <div className='user-line'>
                        <div className='number'>1</div>
                        <div className="info__container">
                            <div className='name' >Alex Sample</div>
                            <div className='email' >email@gmail.com</div>
                            <div className='phone' >0632465077</div>
                            <Icon type={EnumIcons.ASSISTANTS}/>
                        </div>

                    </div>
                )
            }
            case EnumUserLineTypes.RECEPTIONISTS: {
                return (
                    <div className='user-line'>
                        <div className='number'>1</div>
                        <div className="info__container">
                            <div className='name' >Alex Sample</div>
                            <div className='email' >email@gmail.com</div>
                            <div className='phone'>0632465077</div>
                            <Icon type={EnumIcons.RECEPTIONISTS}/>
                        </div>

                    </div>
                )
            }
            case EnumUserLineTypes.ROOM_STATUS_SETTINGS: {
                return (
                    <div className="user-line">
                        <div className="number">1</div>
                        <div className="info__container">
                            <div  className='name' >Doctor in</div>
                            <div>alerts</div>
                            <Icon type={EnumIcons.ROOM_STATUS_SETTINGS}/>
                        </div>
                        
                    </div>
                )
            }
        }
    };
    return renderUserLine();
}