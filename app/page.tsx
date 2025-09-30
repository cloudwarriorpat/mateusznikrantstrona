import { Hero } from '@/components/sections/Hero';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { YouTubePreview } from '@/components/sections/YouTubePreview';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <YouTubePreview />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
