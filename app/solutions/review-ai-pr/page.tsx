import Content from './content.mdx';
import {Metadata} from 'next';

export const metadata : Metadata = {
  metadataBase: new URL("https://www.cxgrd.com"),
  title: 'Reviewing AI pull requests at scale | CXGRD',
  description: 'How to review AI-generated pull requests at org level with CXGRD.',
  alternates: {
    canonical: "/solutions/review-ai-pr",
  },
  openGraph: {
    url: "/solutions/review-ai-pr",
    title: 'Reviewing AI Pull Requests at Scale — CXGRD',
    description: 'How to review AI-generated pull requests at org level with CXGRD.',
    type: 'website',
    images: '/Homepage.png',
  },
}

export default function Page() {
  return <Content />;
}