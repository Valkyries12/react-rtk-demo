//en redux se usaa creteSotre, en rtk configureStore
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import  icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";
// const reduxLogger = require("redux-logger");

// const logger = reduxLogger.createLogger();

//con rtk no es necesrio usar combineReducers y hacer el rootReducer el configureStore hace todo
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        users: userReducer,
    },
    //por defecto rtk trae middlewwares asi que le voy a concatenar a eso que tiene de default el middleware nuevo
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;