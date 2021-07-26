import React from 'react';
import { EnumRoomStatus } from '../../../../../models/Room/roomModel';

interface RoomStatusPicker{
    status: EnumRoomStatus
}

interface DataByRoomStatus {
    statusText: string,
    status: EnumRoomStatus
}

type TypeRoomStatusData = {[key in EnumRoomStatus] : DataByRoomStatus}

const roomStatusData : TypeRoomStatusData = {
    [EnumRoomStatus.EMPTY]: {
        status: EnumRoomStatus.EMPTY,
        statusText: 'Empty'
    },
    [EnumRoomStatus.PATIENT_IN]: {
        statusText: 'Patient In',
        status: EnumRoomStatus.PATIENT_IN
    },
    [EnumRoomStatus.ASSISTANT_REQUIRED]: {
        statusText: 'Assistant Required',
        status: EnumRoomStatus.ASSISTANT_REQUIRED
    },
    [EnumRoomStatus.ASSISTANT_IN]: {
        statusText: 'Assistant In',
        status: EnumRoomStatus.ASSISTANT_IN
    },
    [EnumRoomStatus.DOCTOR_REQUIRED]: {
        status: EnumRoomStatus.DOCTOR_REQUIRED,
        statusText: 'Doctor Required'
    },
    [EnumRoomStatus.DOCTOR_IN]: {
        statusText: 'Doctor In',
        status: EnumRoomStatus.DOCTOR_IN,
    },
    [EnumRoomStatus.FINANCIAL_REQUIRED]: {
        statusText: 'Financial Required',
        status: EnumRoomStatus.FINANCIAL_REQUIRED
    },
    [EnumRoomStatus.FINANCIAL_IN]: {
        statusText: 'Financial In',
        status: EnumRoomStatus.FINANCIAL_IN
    },
    [EnumRoomStatus.EMERGENCY]: {
        statusText: 'Emergency',
        status: EnumRoomStatus.EMERGENCY
    },
};

interface InterfaceRoomStatusIconClasses {
    icon: string;
    letter?: string;
}


const PickerBody: React.FC<DataByRoomStatus> = ({status, statusText}) => { 
    
    const currentRoomIconClasses : {[key in EnumRoomStatus]: InterfaceRoomStatusIconClasses} = {
        [EnumRoomStatus.EMPTY]: {
            icon: 'status-picker__status-icon_empty',
        },
        [EnumRoomStatus.PATIENT_IN]: {
            icon: 'status-picker__status-icon_patient-in',
            letter: 'status-picker__status-letter_pacient-in'
        },
        [EnumRoomStatus.ASSISTANT_REQUIRED]: {
            icon: 'status-picker__status-icon_assistant-required',
            letter: 'status-picker__status-letter_assistant-required'
        },
        [EnumRoomStatus.ASSISTANT_IN]: {
            icon: 'status-picker__status-icon_assistant-in',
            letter: 'status-picker__status-letter_assistant-in'
        },
        [EnumRoomStatus.DOCTOR_REQUIRED]: {
            icon: 'status-picker__status-icon_doctor-required',
            letter: 'status-picker__status-letter_doctor-required'
        },
        [EnumRoomStatus.DOCTOR_IN]: {
            icon: 'status-picker__status-icon_doctor-in',
            letter: 'status-picker__status-letter_doctor-in'
        },
        [EnumRoomStatus.FINANCIAL_REQUIRED]: {
            icon: 'status-picker__status-icon_financial-required',
            letter: 'status-picker__status-letter_financial-required'
        },
        [EnumRoomStatus.FINANCIAL_IN]: {
            icon: 'status-picker__status-icon_financial-in',
            letter: 'status-picker__status-letter_financial-in'
        },
        [EnumRoomStatus.EMERGENCY]: {
            icon: 'status-picker__status-icon_emergency',
            letter: 'status-picker__status-letter_emergency'
        }
    };

    const iconClasses = 'status-picker__status-icon ' + currentRoomIconClasses[status].icon;
    const iconLetterClasses  = 'status-picker__status-letter ' + currentRoomIconClasses[status].letter;

    const iconLetter = (
        <div className={iconLetterClasses}>
            {
                status === EnumRoomStatus.EMPTY ?
                    null
                :
                    status[0].toUpperCase()
            }
        </div>
    );

    return (
        <div className="status-picker">

            <div className={iconClasses}>

                {
                    iconLetter && (
                        <div className="status-picker__status-letter">
                            {iconLetter}
                        </div>
                    )
                }
                
            </div>

            <div className="status-picker__status-message">
                {statusText}
                <div className="status-picker__modal-btn">

                </div>
            </div>
        </div>
    )
};

export const RoomStatusPicker: React.FC<RoomStatusPicker> = ({
    status = EnumRoomStatus.EMPTY
}) => {

    const {status: statusOfCurrentRoom, statusText} = roomStatusData[status];

    return (
        <PickerBody
            status={statusOfCurrentRoom}
            statusText={statusText}
        /> 
    );
}
