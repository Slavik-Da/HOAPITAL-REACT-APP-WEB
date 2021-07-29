import React from 'react';
import { Button } from '../../../../components/Button/Button';
import { EnumButtonsTypes } from '../../../../components/Button/types';

export const StuffHeader = () => {
    return (
            <div className="pannel-header-line">
                <div className= "tab-line">
                    <div className="tab-line__tab">
                        Doctors
                    </div>
                    <div className="tab-line__tab">
                        Assistants
                    </div>
                    <div className="tab-line__tab tab-line__tab_active">
                        Receptionists
                    </div>
                </div>
                <Button 
                    type= {EnumButtonsTypes.BIG_GREEN}
                    text='Add new'
                    onPressAction = { () => {} }
                    additionalStylesClassName={'pannel-header-line__add-new-btn'}
                />
            </div>
    )
}
