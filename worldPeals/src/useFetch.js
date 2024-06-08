import {useState, useEffect} from "react";

const useFetch = (url) => {
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState (true);
    const [data, setData] =useState(null);

    useEffect( () => {
        const abortctrl = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortctrl.signal} )
            .then(res => {
                if (!res.ok) {
                    throw Error("unable to fetch from db");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(false);
                setisPending(false);
            })
            .catch( err => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");                    
                }
                else{
                    setError(err.message);
                    setisPending(true);
                }
            })
        },300);
        
        return () => abortctrl.abort();

    }, [url]);


    return ( {data, error, isPending} );
}
 
export default useFetch;