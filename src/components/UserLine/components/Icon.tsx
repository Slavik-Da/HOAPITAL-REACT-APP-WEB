import { on } from "cluster";
import React from "react";
import { ReactComponent as PencilIcon} from './img/Pencil.svg'
import { ReactComponent as StethocopeIcon} from './img/Stethoscope.svg'
import { ReactComponent as TrashIcon} from './img/Trash.svg'

export enum EnumIcons {
    DOCTORS = 'DOCTORS',
    ASSISTANTS = 'ASSISTANTS',
    RECEPTIONISTS = 'RECEPTIONISTS',
    ROOM_STATUS_SETTINGS = 'ROOM_STATUS_SETTINGS'
}

interface InterfaceIcon {
type: EnumIcons,
onPressAction? : () => void ,
}

export const Icon: React.FC <InterfaceIcon> = ({type, onPressAction}) => {
    const renderIcons = () => {
        switch(type) {
            case EnumIcons.ASSISTANTS: 
            return(
                <div>
                    <StethocopeIcon className='icon' onClick={onPressAction}/>
                    <PencilIcon className='icon' onClick={onPressAction}/>
                    <TrashIcon className='icon' onClick={onPressAction}/>
                </div>
            )

            case EnumIcons.DOCTORS:
                return(
                    <div>
                        <PencilIcon className='icon' onClick={onPressAction}/>
                        <TrashIcon className='icon' onClick={onPressAction}/>
                    </div> 
                )
                
                case EnumIcons.RECEPTIONISTS:
                    return (
                        <div>
                            <PencilIcon className='icon' onClick={onPressAction}/>
                            <TrashIcon className='icon' onClick={onPressAction}/>
                        </div>
                    )

                    case EnumIcons.ROOM_STATUS_SETTINGS:
                        return (
                            <div>
                                <PencilIcon className='icon' onClick={onPressAction}/>
                            </div>
                        )
        }
    }
    return renderIcons()
}