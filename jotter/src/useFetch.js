import { useState, useEffect } from "react";
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(true);


    useEffect(() => {
        const abortctrl = new AbortController();

        setTimeout(() => {
                fetch(url, {signal: abortctrl.signal} )
            .then(res => {
                if (!res.ok) {
                    throw Error('unable to access data !!');
                }
                return res.json();
            })
            .then( data => {
                setData(data);
                setisPending(false);
                setError(false)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                }else{
                    setError(err.message);
                    setisPending(false);
                }
            })
        }, 1000);

        return () => abortctrl.abort();
        
    }, [url]); 

    return {data, isPending, error};
}
 
export default useFetch;