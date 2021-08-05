import { EnumRoomPriorityIndexs } from "../Room/roomModel";

export interface InterfaceUserLine{
    name?: string;
    email?: string;
    phoneNumber?: string;
    alerts?: any[];
    roomsNames?: any[]; 
    title?: string;
    alertColor?: string;
    type: EnumUserLineTypes;
    additionalStylesClassName?: string;
}

export enum EnumUserLineTypes{
    DOCTORS = 'DOCTORS',
    ASSISTANTS = 'ASSISTANTS',
    RECEPTIONISTS = 'RECEPTIONISTS',
    ROOM_STATUS_SETTINGS = 'ROOM_STATUS_SETTINGS'
}   

export type TypeUserLineClasses = {[Key in EnumUserLineTypes] : string};