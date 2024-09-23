import { useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Header />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </Container>
  );
}

export default App;
