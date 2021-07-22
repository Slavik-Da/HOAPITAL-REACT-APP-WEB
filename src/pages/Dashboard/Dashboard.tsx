import React from 'react';
import { DoctorControlPanel } from './components/DoctorPanel/DoctorControlPanel';
import { DoctorLine } from './components/DoctorLine/DoctorLine';

export const Dashboard = () => {
    return (
        <section className='page page-dashboard'>
            <DoctorLine>
                <DoctorControlPanel 
                    fullName={'Benedict Cumberbatch'} 
                    roleInHospital={'Therapist'}
                />
            </DoctorLine>
            <DoctorLine/>
            <DoctorLine/>
            <DoctorLine/>
        </section>
    );
}
