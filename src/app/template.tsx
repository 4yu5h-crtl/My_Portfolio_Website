import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ayush Chintalwar',
  description: 'Computer Science & Engineering student passionate about robotics automation, generative AI, and prompt engineering.',
  keywords: ['portfolio', 'Generative AI', 'Prompt Engineering', 'IoT', 'AI/ML', 'engineering'],
  authors: [{ name: 'Ayush Chintalwar' }],
  creator: 'Ayush Chintalwar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ayushchintalwar.com',
    title: 'Ayush Chintalwar',
    description: 'Computer Science & Engineering student passionate about robotics automation, generative AI, and prompt engineering.',
    siteName: 'Ayush Chintalwar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayush Chintalwar',
    description: 'Computer Science & Engineering student passionate about robotics automation, generative AI, and prompt engineering.',
    creator: '@ayushchintalwar',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return children;
} 