export const generateKey = (unicId: string) : string => {
    return Math.random() + unicId;
};