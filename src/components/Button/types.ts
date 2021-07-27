export enum EnumButtonsTypes {
    LIGTH_GREEN = 'LIGHT_GREEN' ,  
    ORANGE_LONG = 'ORANGE_LONG' ,
    BIG_GREEN = 'BIG_GREEN'
};

export interface InterfaceButtonProps{
    text: string;
    additionalStylesClassName?: string,
    onPressAction: () => void,
    type: EnumButtonsTypes
};

export type TypeButtonClasses = {[Key in EnumButtonsTypes] : string};
 
