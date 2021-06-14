import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import SubscriberTable from "./SubscriberTable";
import React from "react";
import 'antd/dist/antd.css';

const queryClient = new QueryClient();

function App() {
  return <QueryClientProvider client={queryClient}>
      <SubscriberTable />
  </QueryClientProvider>;
}

export default App;
