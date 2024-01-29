import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(response.statusText);
                const json = await response.json();
                setIsLoading(false);
                setData(json.data);
                setError(null);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, isLoading, error };
};