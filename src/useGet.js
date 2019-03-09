import { useState, useEffect } from 'react';

export default url => {
  const [data, setData] = useState({});
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          throw Error(response.status);
        }
      } catch (err) {
        console.error(err.message);
      } finally {
        setHasFetched(true);
      }
    };

    if (!hasFetched) fetchData();

    return () => {
      console.log('CWU');
    };
  }, [hasFetched]);

  return data;
};
