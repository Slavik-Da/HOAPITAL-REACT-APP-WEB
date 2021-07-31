import React from "react";
import { UserLine } from "../../../../components/UserLine/UserLine";
import {EnumUserLineTypes} from "../../../../models/UserLine/userLine"

interface InterfaceStuffItems{
    arrayOfData: any[]
}

export const StuffItems : React.FC<InterfaceStuffItems> = ({
    arrayOfData
}) => {

    // arrayOfData.map(data => {
        
    // })


    return (
        <div className='stuff-items'>
            <UserLine type={EnumUserLineTypes.DOCTORS}/>
            <UserLine type={EnumUserLineTypes.ASSISTANTS}/>
            <UserLine type={EnumUserLineTypes.RECEPTIONISTS}/>
            <UserLine type={EnumUserLineTypes.ROOM_STATUS_SETTINGS}/>
        </div>
    )
}