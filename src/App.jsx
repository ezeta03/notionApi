import { useEffect, useState } from 'react';
import './App.css';
import { getDatabase } from './notionApi';

function App() {
  const [database, setDatabase] = useState(null);
  // const [page, setPage] = useState(null);

  useEffect(() => {
    const fetchDatabase = async () => {
      try {
        const data = await getDatabase('58f5a678380e4cf7a14a477dda7b038a');
        setDatabase(data);
      } catch (error) {
        console.error('Error fetching database:', error);
      }
    };

    // const fetchPage = async () => {
    //   try {
    //     const data = await getPage('262857c79ebb46c494f5276ca477e425');
    //     setPage(data);
    //   } catch (error) {
    //     console.error('Error fetching page:', error);
    //   }
    // };

    fetchDatabase();
    // fetchPage();
  }, []);

  return (
    <div className="App">
      <h1>Notion API Test</h1>
      <div className="card">
        <h2>Database Info</h2>
        {database ? (
          <pre>{JSON.stringify(database, null, 2)}</pre>
        ) : (
          <p>Loading database...</p>
        )}
        {/* <h2>Page Info</h2>
        {page ? (
          <pre>{JSON.stringify(page, null, 2)}</pre>
        ) : (
          <p>Loading page...</p>
        )} */}
      </div>
    </div>
  );
}

export default App;