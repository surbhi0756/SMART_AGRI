import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TutorialsSection } from "@/components/tutorials-section"
import { MentorsSection } from "@/components/mentors-section"
import { Footer } from "@/components/footer"

export default function AgriLearn() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <TutorialsSection />
          <MentorsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
