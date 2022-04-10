import { writable } from 'svelte-local-storage-store';
import type { WallpaperID } from '🍎/configs/wallpapers/wallpaper.config';

type WallpaperSettings = {
  id: WallpaperID;
  image: string;
  canControlTheme: boolean;
};

export const wallpaper = writable<WallpaperSettings>('macos:wallpaper-settings', {
  image: '3-1',
  id: 'somber-forest',
  canControlTheme: true,
});
