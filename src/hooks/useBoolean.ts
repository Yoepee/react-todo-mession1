import { useCallback, useState } from "react";

export const useBoolean = () => {
    const [value, setValue] = useState<boolean>();

    const setFalse = useCallback(() => {
        setValue(false);
    }, []);

    const toggle = useCallback(() => {
        setValue((prev) => !prev);
    }, []);

    return { value, toggle, setFalse };
};
