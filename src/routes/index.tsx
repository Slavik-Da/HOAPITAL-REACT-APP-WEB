import { Allerts } from "../pages/Allerts/Allerts";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Sequence } from "../pages/Sequence/Sequence";
import { Stuff } from "../pages/Stuff/Stuff";

enum EnumNamesOfRoutes {
    DASHBOARD = '/dashboard',
    STAFF = '/stuff',
    ALLERTS = '/allerts',
    SEQUENCE = '/sequence'
}

type TypeCreatedRoutes = EnumNamesOfRoutes;


interface InterfaceAppRoutesKeyValue{
    route: TypeCreatedRoutes;
    component: JSX.Element
}

type TypeAppPages = {[K in EnumNamesOfRoutes]: InterfaceAppRoutesKeyValue };


export const AppPages : TypeAppPages = {
    [EnumNamesOfRoutes.DASHBOARD]: {
        route: EnumNamesOfRoutes.DASHBOARD,
        component: <Dashboard/>
    } ,
    [EnumNamesOfRoutes.STAFF]: {
        route: EnumNamesOfRoutes.STAFF,
        component: <Stuff/>
    },
    [EnumNamesOfRoutes.ALLERTS]: {
        route: EnumNamesOfRoutes.ALLERTS,
        component: <Allerts/>
    },
    [EnumNamesOfRoutes.SEQUENCE]: {
        route: EnumNamesOfRoutes.SEQUENCE,
        component: <Sequence/>
    },
};