import { configureStore } from '@reduxjs/toolkit';
import { hackerNewsApi } from './features/hackerNewsApi';

export const makeStore = () => {
    return configureStore({
        reducer: {
            [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hackerNewsApi.middleware),
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
