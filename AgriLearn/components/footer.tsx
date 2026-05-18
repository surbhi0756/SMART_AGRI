import { Leaf, Facebook, Twitter, Youtube, Instagram } from "lucide-react"

const footerLinks = {
  tutorials: [
    { label: "Plantation Guides", href: "#" },
    { label: "Pest Control", href: "#" },
    { label: "Harvesting Tips", href: "#" },
    { label: "Organic Farming", href: "#" },
  ],
  resources: [
    { label: "Government Schemes", href: "#" },
    { label: "Weather Updates", href: "#" },
    { label: "Market Prices", href: "#" },
    { label: "Soil Testing", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Community Forum", href: "#" },
    { label: "Report an Issue", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-background">
                Agri<span className="text-primary">Learn</span>
              </span>
            </a>
            <p className="text-background/70 mb-6 max-w-sm">
              Empowering farmers with knowledge and connecting them with government 
              experts for sustainable agricultural practices.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Icon className="h-5 w-5 text-background" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Tutorials */}
          <div>
            <h4 className="font-semibold text-background mb-4">Tutorials</h4>
            <ul className="space-y-3">
              {footerLinks.tutorials.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-background mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} AgriLearn. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/60 hover:text-primary text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-primary text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-primary text-sm">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
