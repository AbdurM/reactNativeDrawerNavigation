/* eslint-disable prettier/prettier */
import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'loginDetails';

export const persistLoginDetails = async loginData => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, loginData);
    } catch (error) {
        console.log(error);
    }
};

export const getPersistedLoginDetails = async () => {
    try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);
        if (value !== null) {
            // We have data!!
            return value;
        }
    } catch (error) {
        console.log(error);
    }
};
