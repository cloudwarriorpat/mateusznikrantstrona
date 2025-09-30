import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
}) as any;

const n2m = new NotionToMarkdown({ notionClient: notion });

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedDate: string;
  readTime: number;
  author: string;
  featuredImage: string;
  content?: string;
}

export async function getBlogPosts(category?: string): Promise<BlogPost[]> {
  if (!process.env.NOTION_DATABASE_ID) {
    console.warn('NOTION_DATABASE_ID not set, using mock data');
    return getMockPosts(category);
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Status',
            select: {
              equals: 'Published',
            },
          },
          ...(category
            ? [
                {
                  property: 'Category',
                  select: {
                    equals: category,
                  },
                },
              ]
            : []),
        ],
      },
      sorts: [
        {
          property: 'Published Date',
          direction: 'descending',
        },
      ],
    });

    const posts: BlogPost[] = response.results.map((page: any) => {
      const properties = page.properties;
      return {
        id: page.id,
        slug: properties.Slug?.rich_text?.[0]?.plain_text || '',
        title: properties.Title?.title?.[0]?.plain_text || '',
        excerpt: properties.Excerpt?.rich_text?.[0]?.plain_text || '',
        category: properties.Category?.select?.name || '',
        publishedDate: properties['Published Date']?.date?.start || '',
        readTime: properties['Read Time']?.number || 5,
        author: properties.Author?.rich_text?.[0]?.plain_text || 'Mateusz Nikrant',
        featuredImage: properties['Featured Image']?.files?.[0]?.file?.url || properties['Featured Image']?.files?.[0]?.external?.url || '',
      };
    });

    return posts;
  } catch (error) {
    console.error('Error fetching from Notion:', error);
    return getMockPosts(category);
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!process.env.NOTION_DATABASE_ID) {
    console.warn('NOTION_DATABASE_ID not set, using mock data');
    return getMockPost(slug);
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Status',
            select: {
              equals: 'Published',
            },
          },
          {
            property: 'Slug',
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    });

    if (response.results.length === 0) {
      return getMockPost(slug);
    }

    const page: any = response.results[0];
    const properties = page.properties;

    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    return {
      id: page.id,
      slug: properties.Slug?.rich_text?.[0]?.plain_text || '',
      title: properties.Title?.title?.[0]?.plain_text || '',
      excerpt: properties.Excerpt?.rich_text?.[0]?.plain_text || '',
      category: properties.Category?.select?.name || '',
      publishedDate: properties['Published Date']?.date?.start || '',
      readTime: properties['Read Time']?.number || 5,
      author: properties.Author?.rich_text?.[0]?.plain_text || 'Mateusz Nikrant',
      featuredImage: properties['Featured Image']?.files?.[0]?.file?.url || properties['Featured Image']?.files?.[0]?.external?.url || '',
      content: mdString.parent || '',
    };
  } catch (error) {
    console.error('Error fetching post from Notion:', error);
    return getMockPost(slug);
  }
}

function getMockPosts(category?: string): BlogPost[] {
  const mockPosts: BlogPost[] = [
    {
      id: '1',
      slug: '5-najczestszych-bledow-treningowych',
      title: '5 Najczęstszych Błędów Treningowych',
      excerpt: 'Poznaj najczęstsze błędy, które popełniają osoby trenujące i dowiedz się, jak ich unikać, aby maksymalizować swoje wyniki.',
      category: 'Treningi',
      publishedDate: '2024-03-15',
      readTime: 5,
      author: 'Mateusz Nikrant',
      featuredImage: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '2',
      slug: 'jak-zbudowac-nawyk-regularnego-treningu',
      title: 'Jak Zbudować Nawyk Regularnego Treningu',
      excerpt: 'Praktyczne wskazówki, które pomogą Ci utrzymać regularność i osiągnąć swoje cele fitness bez wyrzeczeń.',
      category: 'Motywacja',
      publishedDate: '2024-03-10',
      readTime: 7,
      author: 'Mateusz Nikrant',
      featuredImage: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '3',
      slug: 'dieta-a-wydajnosc-co-jesc-przed-treningiem',
      title: 'Dieta a Wydajność - Co Jeść Przed Treningiem',
      excerpt: 'Dowiedz się, jak prawidłowo dobrać posiłki przed treningiem, aby maksymalizować swoje wyniki i unikać problemów żołądkowych.',
      category: 'Odżywianie',
      publishedDate: '2024-03-05',
      readTime: 6,
      author: 'Mateusz Nikrant',
      featuredImage: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '4',
      slug: 'mentalnosc-zwyciezcy-high-performance-mindset',
      title: 'Mentalność Zwycięzcy - High Performance Mindset',
      excerpt: 'Poznaj psychologiczne aspekty osiągania szczytowej formy i dowiedz się, jak rozwinąć mentalność zwycięzcy.',
      category: 'High Performance',
      publishedDate: '2024-03-01',
      readTime: 8,
      author: 'Mateusz Nikrant',
      featuredImage: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '5',
      slug: 'regeneracja-klucz-do-wzrostu',
      title: 'Regeneracja - Klucz Do Wzrostu',
      excerpt: 'Dlaczego odpoczynek jest równie ważny jak trening? Poznaj skuteczne metody regeneracji i maksymalizuj swoje efekty.',
      category: 'Regeneracja',
      publishedDate: '2024-02-25',
      readTime: 6,
      author: 'Mateusz Nikrant',
      featuredImage: 'https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '6',
      slug: 'budowanie-masy-miesniowej-kompletny-przewodnik',
      title: 'Budowanie Masy Mięśniowej - Kompletny Przewodnik',
      excerpt: 'Wszystko co musisz wiedzieć o budowaniu masy mięśniowej - od treningu, przez dietę, po regenerację.',
      category: 'Treningi',
      publishedDate: '2024-02-20',
      readTime: 10,
      author: 'Mateusz Nikrant',
      featuredImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  if (category) {
    return mockPosts.filter(post => post.category === category);
  }

  return mockPosts;
}

function getMockPost(slug: string): BlogPost | null {
  const posts = getMockPosts();
  const post = posts.find(p => p.slug === slug);

  if (!post) return null;

  return {
    ...post,
    content: `# ${post.title}

To jest przykładowa treść artykułu. W rzeczywistym środowisku, treść zostanie pobrana z Notion.

## Wprowadzenie

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Kluczowe Punkty

1. **Pierwszy punkt** - Opis pierwszego punktu z szczegółowymi informacjami
2. **Drugi punkt** - Kolejny istotny aspekt, który warto omówić
3. **Trzeci punkt** - Dodatkowe informacje i wskazówki

> Cytat motywacyjny lub kluczowa informacja, którą chcesz podkreślić w tekście.

## Praktyczne Zastosowanie

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Podsekcja

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

## Podsumowanie

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  };
}