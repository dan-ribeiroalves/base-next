'use client';

import Home from './home/page';

import { ConfigProvider, theme } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';

export default function App() {
  return (
    <ConfigProvider
      locale={ptBR}
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#ff1e16',
          borderRadius: 16
        }
      }}
    >
      <Home />
    </ConfigProvider>
  );
}
