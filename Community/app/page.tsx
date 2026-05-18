import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { CommunityForum } from "@/components/community-forum";
import { SuccessStories } from "@/components/success-stories";
import { ComingSoonSection } from "@/components/coming-soon-section";
import { EducationSection } from "@/components/education-section";
import { Footer } from "@/components/footer";

export default function CommunityPage() {
  return (
    
       <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CommunityForum />
      <SuccessStories />
      <ComingSoonSection />
      <EducationSection />
      <Footer />
    </main>
  
  );
}
