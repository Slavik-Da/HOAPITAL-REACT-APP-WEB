export enum EnumRoomPriorityIndexs{
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    R = 'R'
}

export enum EnumRoomStatus{
    EMPTY = 'EMPTY',
    PATIENT_IN = 'PATIENT_IN',
    ASSISTANT_REQUIRED = 'ASSISTANT_REQUIRED',
    ASSISTANT_IN = 'ASSISTANT_IN',
    DOCTOR_REQUIRED = 'DOCTOR_REQUIRED',
    DOCTOR_IN = 'DOCTOR_IN',
    FINANCIAL_IN = 'FINANCIAL_IN',
    FINANCIAL_REQUIRED = 'FINANCIAL_REQUIRED',
    EMERGENCY = 'EMERGENCY'
}

export interface RoomModel{
    name: string;
    priorityIndex: EnumRoomPriorityIndexs;
    timer: string;
    status: EnumRoomStatus,
    count?: number;
};
