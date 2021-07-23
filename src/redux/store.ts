import { useSelector , TypedUseSelectorHook} from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./Reducers/rootReducer";

const composeEnhancers =
  typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
     
    }) : compose;

export const typedUseSelector: TypedUseSelectorHook<rootReducer> = useSelector;

export const store = createStore(
    rootReducer,
    composeEnhancers()
);

export const {dispatch} = store;