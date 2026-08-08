const BASE_URL = 'https://magazine-backend-minders.vercel.app/api';

export interface ApiAuthor {
  name: string;
  bio: string;
  avatar: string;
}

export interface ApiStory {
  id?: number;
  _id?: string;
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  coverImage: string;
  mood?: 'warm' | 'dark' | 'nostalgic';
  storyCase?: string;
  featured: boolean;
  views: number;
  likesCount: number;
  status?: string;
  author?: ApiAuthor;
  authorName?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: {
    stories: T[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalStories: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
  };
}

export interface SingleStoryResponse<T> {
  success: boolean;
  data: {
    story: T;
  };
}

export interface RelatedStoriesResponse<T> {
  success: boolean;
  data: {
    stories: T[];
  };
}

export const storiesApi = {
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/stories`);
    if (!response.ok) throw new Error('Failed to fetch stories');
    const data: PaginatedResponse<ApiStory> = await response.json();
    return data.data.stories;
  },
  
  getFeatured: async () => {
    const response = await fetch(`${BASE_URL}/stories/featured`);
    if (!response.ok) throw new Error('Failed to fetch featured stories');
    // Note: If /stories/featured returns PaginatedResponse, we use it, otherwise SingleStoryResponse, but let's assume PaginatedResponse or just an array
    const data = await response.json();
    return data.data.stories || data.data; // Handle different possible structures
  },
  
  getById: async (id: string) => {
    const response = await fetch(`${BASE_URL}/stories/${id}`);
    if (!response.ok) throw new Error('Failed to fetch story');
    const data: SingleStoryResponse<ApiStory> = await response.json();
    return data.data.story;
  },
  
  getRelated: async (id: string) => {
    try {
      const response = await fetch(`${BASE_URL}/stories/${id}/related`);
      if (response.ok) {
        const data: RelatedStoriesResponse<ApiStory> = await response.json();
        if (data.data?.stories && data.data.stories.length > 0) {
          return data.data.stories;
        }
      }
      
      // Fallback if no related endpoint exists or it returns empty
      const allResponse = await fetch(`${BASE_URL}/stories`);
      if (allResponse.ok) {
        const allData: PaginatedResponse<ApiStory> = await allResponse.json();
        return allData.data.stories.filter(s => (s.id || s._id)?.toString() !== id.toString()).slice(0, 3);
      }
      return [];
    } catch (e) {
      console.warn('Failed to fetch related stories', e);
      return [];
    }
  },
  
  like: async (id: string) => {
    const response = await fetch(`${BASE_URL}/stories/${id}/like`, { method: 'POST' });
    if (!response.ok) throw new Error('Failed to like story');
    return await response.json();
  }
};

// Helper function to map API story to our frontend Story format
export const mapApiStoryToFrontend = (apiStory: ApiStory) => {
  // Check if content has Arabic characters
  const isArabic = /[\u0600-\u06FF]/.test(apiStory.content);
  
  const dateObj = new Date(apiStory.createdAt);
  const formattedDate = isArabic
    ? dateObj.toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: '2-digit' })
    : dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit' });
  
  let mood: 'warm' | 'dark' | 'nostalgic' = 'dark';
  if (apiStory.storyCase === 'ECHOES') mood = 'nostalgic';
  else if (apiStory.storyCase === 'SILENCE') mood = 'dark';
  else if (apiStory.storyCase === 'Identity') mood = 'warm';

  return {
    id: apiStory.id?.toString() || apiStory._id || apiStory.slug || '', // Use id or _id for routing
    _id: apiStory.id?.toString() || apiStory._id, // Keep actual DB ID for like action
    title: apiStory.title,
    cover: apiStory.coverImage,
    excerpt: apiStory.excerpt,
    author: apiStory.authorName || apiStory.author?.name || 'Minders Author',
    designer: 'Minders Team', // Default since API doesn't have it
    readingTime: `${Math.max(1, Math.ceil(apiStory.content.split(' ').length / 200))} min read`,
    mood: mood,
    language: isArabic ? 'ar' : 'en',
    content: apiStory.content.split(/\n+/).filter(p => p.trim() !== ''),
    likesCount: apiStory.likesCount || 0,
    views: apiStory.views || 0,
    createdAt: formattedDate
  };
};
