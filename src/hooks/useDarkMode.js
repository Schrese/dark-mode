import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [darker, setDarker] = useLocalStorage(key, initialValue)

    const handleChanges = (e) => {
        setDarker(e.target.darker)
    }

    useEffect(() => {
        if(darker === true) {
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [darker])
    return [darker, setDarker, handleChanges]
}