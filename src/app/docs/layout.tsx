import type { ReactNode } from 'react';

import { RootProvider } from 'fumadocs-ui/provider/next';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      {children}
    </RootProvider>
  );
}