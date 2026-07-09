import { useState, useEffect } from 'react';
import { storiesApi, mapApiStoryToFrontend } from '../services/api';
import { Story } from '../data/stories';

export const useStories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStories = async (isBackground = false) => {
      try {
        if (!isBackground) setLoading(true);
        const apiStories = await storiesApi.getAll();
        const mappedStories = apiStories.map(mapApiStoryToFrontend);
        setStories(mappedStories);
      } catch (err) {
        if (!isBackground) setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        if (!isBackground) setLoading(false);
      }
    };

    fetchStories();

    // Auto-refresh in the background every 5 minutes
    const intervalId = setInterval(() => {
      fetchStories(true);
    }, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return { stories, loading, error };
};

export const useFeaturedStories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStories = async (isBackground = false) => {
      try {
        if (!isBackground) setLoading(true);
        const apiStories = await storiesApi.getFeatured();
        const mappedStories = apiStories.map(mapApiStoryToFrontend);
        setStories(mappedStories);
      } catch (err) {
        if (!isBackground) setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        if (!isBackground) setLoading(false);
      }
    };

    fetchStories();

    // Auto-refresh in the background every 5 minutes
    const intervalId = setInterval(() => {
      fetchStories(true);
    }, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return { stories, loading, error };
};

export const useStory = (id: string) => {
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        setLoading(true);
        const apiStory = await storiesApi.getById(id);
        const mappedStory = mapApiStoryToFrontend(apiStory);
        setStory(mappedStory);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchStory();
    }
  }, [id]);

  return { story, loading, error };
};

export const useRelatedStories = (id: string) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const apiStories = await storiesApi.getRelated(id);
        const mappedStories = apiStories.map(mapApiStoryToFrontend);
        setStories(mappedStories);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchStories();
    }
  }, [id]);

  return { stories, loading, error };
};
