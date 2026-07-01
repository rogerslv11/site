import fm from 'front-matter';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

export function getAllPosts(): BlogPost[] {
  const files = import.meta.glob('/src/data/posts/*.md', { query: '?raw', import: 'default', eager: true });
  
  const posts: BlogPost[] = Object.values(files).map((content: any) => {
    const { attributes, body } = fm(content as string);
    const meta = attributes as any;
    
    return {
      id: meta.id,
      title: meta.title,
      excerpt: meta.excerpt,
      content: body,
      date: meta.date,
      readTime: meta.readTime,
      category: meta.category,
      image: meta.image,
      author: meta.author || { name: 'Unknown', role: '', avatar: '' },
      tags: meta.tags || [],
    };
  });
  
  // Sort posts by date or any other logic if needed, but since dates are string formats here, keeping order or sorting by date parsing
  // We'll just reverse them or return as is
  return posts;
}

export function getPostById(id: string): BlogPost | undefined {
  return getAllPosts().find(post => post.id === id);
}
