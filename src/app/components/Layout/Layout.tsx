'use client';

import BackgroundImage from '../BackgroundImage/BackgroundImage';
import ContentHeader from './Header';

import { Layout } from 'antd';

const { Content } = Layout;

export default function ContentLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <BackgroundImage>
        <ContentHeader />
        <Content
          style={{
            minHeight: '89vh'
          }}
        >
          {children}
        </Content>
      </BackgroundImage>
    </Layout>
  );
}
