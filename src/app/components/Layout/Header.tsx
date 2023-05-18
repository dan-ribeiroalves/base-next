'use client';

import { Layout } from 'antd';

const { Header } = Layout;

export default function ContentHeader() {
  return (
    <Header style={{ backgroundColor: 'black' }}>
      <div>
        <img src="Logo-Marvel.png" style={{ width: 80 }} />
      </div>
    </Header>
  );
}
