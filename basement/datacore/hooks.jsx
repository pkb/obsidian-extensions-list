// https://blog.logrocket.com/using-localstorage-react-hooks/

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = dc.useState(() => {
        const saved = localStorage.getItem(key);
        const initial = JSON.parse(saved);
        return initial || defaultValue;
    });

    dc.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

return { useLocalStorage };