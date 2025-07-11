const useLocalStorage = () => {
    const storage: Storage = window.localStorage;
    const setItem = (key: string, value: string) => {
        try {
            storage.setItem(key, value);
        } catch (e) {
            console.error(e);
        }
    };

    const getItem = (key: string, defaultValue: unknown) => {
        try {
            const storageValue = storage.getItem(key);

            if (storageValue) return JSON.parse(storageValue);
            else return defaultValue;
        } catch (e) {
            console.error(e);
        }
    };

    return { setItem, getItem };
};

export default useLocalStorage;
