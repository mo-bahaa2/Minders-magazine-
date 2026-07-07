import { useState, useEffect } from 'react';
import { storiesApi } from '../services/api';

const LIKES_STORAGE_KEY = 'minders_liked_stories';

export const useLikes = () => {
  const [likedIds, setLikedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(LIKES_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(likedIds));
  }, [likedIds]);

  const toggleLike = async (storyId: string, apiId: string) => {
    const isCurrentlyLiked = likedIds.includes(storyId);
    
    // Optimistic UI update for local storage
    if (isCurrentlyLiked) {
      setLikedIds(prev => prev.filter(id => id !== storyId));
    } else {
      setLikedIds(prev => [...prev, storyId]);
      
      // Call API to increment the global counter only when liking
      try {
        await storiesApi.like(apiId);
      } catch (error) {
        console.error("Failed to like story on server", error);
        // We could revert the local state here if strict consistency is needed, 
        // but for a magazine, optimistic local state is usually better UX.
      }
    }
  };

  const isLiked = (storyId: string) => likedIds.includes(storyId);

  return { likedIds, toggleLike, isLiked };
};
