import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortControll = new AbortController();

        fetch(url, { signal: abortControll.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                } else {
                    return res.json()
                }

            })
            .then(data => {
                setData(data)
                setError(null)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setError(err.message)
                }
                ;
            })

        return () => abortControll.abort();

    }, [url])

    return { data, error }

}

export default useFetch;