import { configureStore } from '@reduxjs/toolkit';
import { hackerNewsApi } from './features/hackerNewsApi';
import navReducer from './features/navSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
            nav: navReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hackerNewsApi.middleware),
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
