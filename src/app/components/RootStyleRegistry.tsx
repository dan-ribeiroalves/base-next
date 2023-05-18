'use client';
import { useServerInsertedHTML } from 'next/navigation';
import { useState, type PropsWithChildren } from 'react';

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

export const RootStyleRegistry = ({ children }: PropsWithChildren) => {
  const [cache] = useState(() => createCache());

  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`
        }}
      />
    );
  });

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};
