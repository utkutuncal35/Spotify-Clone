import React from 'react'
import Section from '../components/Section'

function Home() {
  const items = [
    {
      id:1,
      title: 'Blind Lights',
      describtion: 'The Weeknd',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb1a9dd66becccc9162bcedd21/1/tr/default',
      type: 'album'
    },
    {
      id:2,
      title: 'Blind Lights',
      describtion: 'The Weeknd',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb1a9dd66becccc9162bcedd21/1/tr/default',
      type: 'album'
    },
    {
      id:3,
      title: 'Blind Lights',
      describtion: 'The Weeknd',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb1a9dd66becccc9162bcedd21/1/tr/default',
      type:'artist'
    },
    {
      id:4,
      title: 'Blind Lights',
      describtion: 'The Weeknd',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb1a9dd66becccc9162bcedd21/1/tr/default',
      type:'podcast'
    },
    {
      id:5,
      title: 'Blind Lights',
      describtion: 'The Weeknd',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb1a9dd66becccc9162bcedd21/1/tr/default',
      type:'album'
    }
  ]
  return (
    <div className='grid gap-y-8'>
      <Section title={"Recently played"} more="/blabla" items={items}/>
      <Section title={"Shows to try"} more="/blabla" items={items}/>
      <Section title={"Made fot Utku Tuncal"} more="/blabla" items={items}/>
      <Section title={"Hip Hop"} more="/blabla" items={items}/>
    </div>
  )
}

export default Home