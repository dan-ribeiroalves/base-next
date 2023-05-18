import { Inter } from 'next/font/google';

import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import ContentLayout from './components/Layout/Layout';
import { RootStyleRegistry } from './components/RootStyleRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootStyleRegistry>
          <ContentLayout>{children}</ContentLayout>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
