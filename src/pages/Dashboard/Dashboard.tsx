import React from 'react';
import { DoctorControlPanel } from './components/DoctorPanel/DoctorControlPanel';
import { DoctorLine } from './components/DoctorLine/DoctorLine';
import { Room } from './components/Room/Room';
import { EnumRoomPriorityIndexs, EnumRoomStatus } from '../../models/Room/roomModel';



export const Dashboard = () => {
    
    return (
        <section className='page page-dashboard'>
            <DoctorLine>
                <DoctorControlPanel 
                    fullName={'Benedict Cumberbatch'} 
                    roleInHospital={'Therapist'}
                />
                <ul className="rooms-collections">
                    <Room
                        status={EnumRoomStatus.EMPTY}
                        priorityIndex={EnumRoomPriorityIndexs.R}
                        name='1b'
                        timer={'00:00'}
                    />
                </ul>
            </DoctorLine>
            <DoctorLine/>
            <DoctorLine/>
            <DoctorLine/>
        </section>
    );
}
