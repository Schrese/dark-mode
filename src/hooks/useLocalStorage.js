import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        //defining item
        const item = window.localStorage.getItem(key);
        //checking if item is true, then parse item, else just use the initial value
        return item ? JSON.parse(item) : initialValue;
    });
        //getting the stored value
        const setValue = value => {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        }
    
    return [storedValue, setValue]
}