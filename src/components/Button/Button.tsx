import React from 'react';
import {InterfaceButtonProps, EnumButtonsTypes, TypeButtonClasses} from './types';

const buttonClasses : TypeButtonClasses  = {
    [EnumButtonsTypes.LIGTH_GREEN]: 'btn_light-green',
    [EnumButtonsTypes.ORANGE_LONG]: 'btn_orange-long'
};

export const Button: React.FC<InterfaceButtonProps> = ({
    text,
    additionalStylesClassName = '',
    onPressAction,
    type = EnumButtonsTypes.LIGTH_GREEN
}) => {

    const btnStyles = ['btn', buttonClasses[type], additionalStylesClassName];
    
    const renderButton = () => {
        switch(type){
            case EnumButtonsTypes.LIGTH_GREEN: {
                return (
                    <a className={btnStyles.join(' ')} onClick={onPressAction}>
                        {text}
                    </a>
                );
            }
            case EnumButtonsTypes.ORANGE_LONG: {
                return (
                    <a className={btnStyles.join(' ')} onClick={onPressAction}>
                        {text}
                    </a>
                );
            }
        }
    };

    return renderButton();
}
