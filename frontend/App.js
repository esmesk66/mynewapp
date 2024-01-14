import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Daten vom Server abrufen
        fetch('http://localhost:3000/api/data')
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.error('Fehler beim Abrufen der Daten:', error));
    }, []);

    return (
        <div>
            <h1>Willkommen auf meiner React-Anwendung!</h1>
            <p>Daten vom Server: {JSON.stringify(data)}</p>
        </div>
    );
}

export default App;
