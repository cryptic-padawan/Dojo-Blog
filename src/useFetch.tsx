import { useEffect, useState } from 'react';

const useFetch = (url: RequestInfo, _method?:any ) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState('');
    
    useEffect(() => {
        const abortCont = new AbortController();

       
            fetch(url, { signal: abortCont.signal })
            .then((res: { ok: any; json: () => any; }) => {
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                else{
                    setIsPending(false);
                    setError(err.message);
                }
            })
        

        return () => abortCont.abort();
    }, [url]);
    return { data, isPending, error };
}
 
export default useFetch;