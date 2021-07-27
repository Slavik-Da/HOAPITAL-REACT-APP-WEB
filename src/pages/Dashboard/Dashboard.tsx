import React from 'react';
import { DoctorControlPanel } from './components/DoctorPanel/DoctorControlPanel';
import { DoctorLine } from './components/DoctorLine/DoctorLine';
import { Room } from './components/Room/Room';
import { EnumRoomPriorityIndexs, EnumRoomStatus } from '../../models/Room/roomModel';
import { typedUseSelector } from '../../redux/store';



export const Dashboard = () => {
    const {menuVisible} = typedUseSelector(state => state.appState);

    const roomsCollectionClasses = (
        menuVisible ? 
            'rooms-collection rooms-collection_smaller' : 'rooms-collection'
    );


    return (
        <section className='page page-dashboard'>
            <DoctorLine>
                <DoctorControlPanel 
                    fullName={'Benedict Cumberbatch'} 
                    roleInHospital={'Therapist'}
                    menuVisible={menuVisible}
                    stopLineFunc={() => {}}
                    resetFunc={() => {}}
                />
                <ul className={roomsCollectionClasses}>
                    <Room
                        status={EnumRoomStatus.ASSISTANT_IN}
                        priorityIndex={EnumRoomPriorityIndexs.R}
                        name='1b'
                        timer={'00:00'}
                    />

                    <Room
                        status={EnumRoomStatus.EMPTY}
                        priorityIndex={EnumRoomPriorityIndexs.R}
                        name='1b'
                        timer={'00:00'}
                    />

                    <Room
                        status={EnumRoomStatus.PATIENT_IN}
                        priorityIndex={EnumRoomPriorityIndexs.R}
                        name='1b'
                        timer={'00:00'}
                    />

                    <Room
                        status={EnumRoomStatus.ASSISTANT_REQUIRED}
                        priorityIndex={EnumRoomPriorityIndexs.R}
                        name='1b'
                        timer={'00:00'}
                    />
                </ul>
            </DoctorLine>
            <DoctorLine>
                <DoctorControlPanel 
                    fullName={'Benedict Cumberbatch'} 
                    roleInHospital={'Therapist'}
                    menuVisible={menuVisible}
                    stopLineFunc={() => {}}
                    resetFunc={() => {}}
                />
                <ul className={roomsCollectionClasses}>
                    <Room
                        status={EnumRoomStatus.FINANCIAL_IN}
                        priorityIndex={EnumRoomPriorityIndexs.R}
                        name='1b'
                        timer={'00:00'}
                    />

                    <Room
                        status={EnumRoomStatus.FINANCIAL_REQUIRED}
                        priorityIndex={EnumRoomPriorityIndexs.R}
                        name='1b'
                        timer={'00:00'}
                    />

                    <Room
                        status={EnumRoomStatus.EMERGENCY}
                        priorityIndex={EnumRoomPriorityIndexs.R}
                        name='1b'
                        timer={'00:00'}
                    />

                    <Room
                        status={EnumRoomStatus.DOCTOR_IN}
                        priorityIndex={EnumRoomPriorityIndexs.R}
                        name='1b'
                        timer={'00:00'}
                    />
                </ul>
            </DoctorLine>
        </section>
    );
}
