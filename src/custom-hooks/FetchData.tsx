import { useState, useEffect } from 'react';
import { server_calls } from '../api/server';

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect on mount
    useEffect( () => {
        handleDataFetch();
    }, []) /* <--- if there is no "[]" then the useEffect will run everytime we fetch data.
                    When the "[]" are there, it will only happen once. Or also known as "on mount".
                    So like when you mount a shelf on the wall. You should only have to do that once,
                    not take down the shelf and re-mount it everytime you walk into a room. How annoying
                    would that be lol. */

    return { contactData, getData: handleDataFetch }
}