'use client';
import { useState, useEffect } from 'react';
import './wallpapers.css';
import Terminal from './components/Terminal';


function selectWallpaper() {
  let names = [
    "carro",
    "ponte",
    "outro1",
    "porto1",
    "porto2",
  ];
  
  return `bg-${names[Math.floor(Math.random() * names.length)]}`;
}


export default function Home() {
  const [wallpaper, setWallpaper] = useState('');

  useEffect(() => {
    setWallpaper(selectWallpaper());
  }, []);

  return (
    <main className={`overflow-hidden min-h-screen min-w-full grid place-items-center bg ${selectWallpaper()}`}>
      <Terminal />
    </main>
  )
}
