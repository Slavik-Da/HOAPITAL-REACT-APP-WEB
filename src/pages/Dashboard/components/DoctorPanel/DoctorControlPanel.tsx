import React from 'react';
import { Button } from '../../../../components/Button/Button';
import { EnumButtonsTypes } from '../../../../components/Button/types';

interface DoctorControlProps{
    fullName: string,
    roleInHospital: string,
    resetFunc?: (id: string) => void,
    stopLineFunc?: (id: string) => void,
    menuVisible: boolean
}

export const DoctorControlPanel : React.FC<DoctorControlProps> = ({
    fullName, roleInHospital, resetFunc, stopLineFunc, menuVisible
}) => {
    const controlPannelClasses = (
        menuVisible ?
            'doctor-control-panel doctor-control-panel_bigger' : 'doctor-control-panel'
    );

    return (
        <div className={controlPannelClasses}>
            <div className="doctor-control-panel__content-wrapper">
                <div className="doctor-control-panel__content-block doctor-control-panel__content-block_top">
                    <div className="doctor-control-panel__doctor-full-name">
                        <div className="h1">
                            {fullName}
                        </div>
                    </div>
                    <div className="doctor-control-panel__doctor-role">
                        <div className="h3">
                            {roleInHospital}
                        </div>
                    </div>

                    <Button 
                        type={EnumButtonsTypes.LIGTH_GREEN}
                        text={'Reset'}
                        onPressAction={() => {}}
                        additionalStylesClassName={'doctor-control-panel__reset-btn'}
                    /> 

                </div>
                <div className="doctor-control-panel__content-block doctor-control-panel__content-block_bottom">
                    <div className="doctor-control-panel__control-block control-block">
                        <div className="control-block__control-item">
                            -
                        </div>
                        <div className="control-block__control-count">
                            5
                        </div>
                        <div className="control-block__control-item">
                            +
                        </div>

                        <div className="control-block__decorated-text">
                            in line
                        </div>
                    </div>
                    <Button 
                        text={'Stop the line'}
                        type={EnumButtonsTypes.ORANGE_LONG}
                        onPressAction={() => {}}
                        additionalStylesClassName={'doctor-control-panel__stop-the-line-btn'}
                    />
                </div>
            </div>
        </div>
    )
}
