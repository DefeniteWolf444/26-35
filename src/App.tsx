import { useState } from 'react'
import PageContent from './components/pageContent/pageContent'
import Header from './components/header/header'
import Player from './components/player/player'
import type { Song } from './components/types/song'


function App() {
  const favoritesId = useState<Song[]>([])


  return (
    <>
      <Header />
      <PageContent />
      <Player />
    </>
  )
}

export default App
