import { Suspense } from 'react';

import { DialogProvider } from './contexts/DialogContext';

import { GithubUser } from './components/GithubUser';

export default async function Home() {
  return (
    <DialogProvider>
      <Suspense fallback={<p>Carrengado...</p>}>
        <GithubUser username='neanderdev' />
      </Suspense>

      <Suspense fallback={<p>Carrengado...</p>}>
        <GithubUser username='diego3g' />
      </Suspense>
    </DialogProvider>
  )
}
