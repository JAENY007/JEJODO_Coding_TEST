import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>폰트 확인용</h1>
          <h2>폰트 확인용2</h2>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
