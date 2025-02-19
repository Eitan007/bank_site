import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <div className="border-b">
        {/* Top Bar */}
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center h-10 text-sm">
            <nav className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                New Member Info
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Careers
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Rates
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                ATMs
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Help
              </a>
              <button className="text-gray-600 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vercel_4-5IovEXkw1JWf6ckBSCSnDp3bjUQkkr.png"
                  alt="Alliant Logo"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Bank
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Borrow
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Invest
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Protect
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                About
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="bg-[#76b729] hover:bg-[#648f24] text-white">Become a Member</Button>
              <Button variant="outline" className="border-[#0096db] text-[#0096db] hover:bg-[#0096db] hover:text-white">
                Log In
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] bg-gradient-to-r from-[#a8d468] to-[#88c8e3]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 leading-tight">
                Borrow only what you need with a HELOC
              </h1>
              <Button className="bg-[#76b729] hover:bg-[#648f24] text-white rounded-full px-8 py-6 text-lg">
                Learn more
              </Button>
            </div>
            <div className="hidden md:block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vercel_1-5dz69l0l7hPMK3k69aBeJiOiZAhjoG.png"
                alt="Person using mobile banking app"
                width={600}
                height={400}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white shadow-lg rounded-full">
              <ArrowLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white shadow-lg rounded-full">
              <ArrowRight className="h-6 w-6 text-gray-600" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 px-8">
              <FeatureCard
                icon="💰"
                title="Save More Money"
                description="Our High-Rate Savings account pays you 15x the bank national average"
              />
              <FeatureCard
                icon="📱"
                title="Bank Online Stress Free"
                description="Bank anywhere, anytime using online banking or our mobile banking app"
              />
              <FeatureCard
                icon="💳"
                title="Earn Unlimited Cash Back"
                description="Unlimited cash back credit card with no annual fee and no tricky spending categories to track"
              />
              <FeatureCard
                icon="🏧"
                title="Check Out Our Checking"
                description="ATM rebates = No ATM scavenger hunts! Plus, no overdraft fees"
              />
              <FeatureCard
                icon="🔒"
                title="Fraud Prevention & Security"
                description="Alliant is committed to protecting your account with the latest security measures"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">The Ultimate Opportunity Savings Account</h2>
                    <p className="text-gray-600">
                      Alliant has partnered with Suze Orman to offer a high-rate savings account and bonus for new
                      members.
                    </p>
                    <Button variant="link" className="text-blue-500 p-0">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Track and reach your financial goals</h2>
                    <p className="text-gray-600">
                      Open up 19 supplemental savings accounts to track specific savings goals while earning a high
                      rate.
                    </p>
                    <Button variant="link" className="text-blue-500 p-0">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">Why Choose Alliant</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AwardCard rating={5} title="2024 Best Credit Union" source="BankRate" />
            <AwardCard rating={5} title="Best Credit Union" source="Newsweek" />
            <AwardCard rating={5} title="Best Overall Credit Union" source="CNBC" />
            <AwardCard rating={5} title="2024 Best Credit Union" source="NerdWallet" />
          </div>
          <div className="text-center mt-10">
            <Button className="bg-[#0096db] hover:bg-[#0078b3] text-white rounded-full px-8 py-3">
              Learn More About Alliant
            </Button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
            We're here to help you spend and save smarter.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ArticleCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vercel_2-SiFf7OHcubEKhcwrYuPXwwNfysYouM.png"
              title="Your certificate is reaching maturity – now what"
              href="#"
            />
            <ArticleCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vercel_2-SiFf7OHcubEKhcwrYuPXwwNfysYouM.png"
              title="When should I use a personal loan to consolidate debt?"
              href="#"
            />
            <ArticleCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vercel_2-SiFf7OHcubEKhcwrYuPXwwNfysYouM.png"
              title="Egg-nomics: The real cost of raising backyard chickens"
              href="#"
            />
          </div>
          <div className="text-center mt-10">
            <Button variant="link" className="text-blue-500">
              View More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Contact Info */}
            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vercel_3-KfvHY84YZfdHaN7iStYiRZzmyNhd0L.png"
                alt="Alliant Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
              <div className="space-y-2">
                <p className="text-sm">
                  Member care center:{" "}
                  <a href="tel:800-328-1935" className="text-blue-500 hover:underline">
                    800-328-1935
                  </a>
                </p>
                <p className="text-sm text-gray-600">Corporate offices:</p>
                <p className="text-sm text-gray-500 italic">(Not open to the public. No branches or ATMs.)</p>
                <p className="text-sm">11545 W. Touhy Ave., Chicago, IL 60666</p>
                <p className="text-sm text-gray-600">Routing #271081528</p>
              </div>
            </div>

            {/* About Links */}
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    ATMs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Help & Support Links */}
            <div>
              <h3 className="font-semibold mb-4">Help & Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    The Money Mentor Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    Forms
                  </a>
                </li>
              </ul>
            </div>

            {/* Social and CTA */}
            <div className="space-y-6">
              <div className="flex space-x-4">
                {["facebook", "instagram", "twitter", "linkedin", "youtube", "pinterest", "glassdoor"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-gray-500"
                    aria-label={`Visit our ${social} page`}
                  >
                    <div className="w-6 h-6 bg-gray-200 rounded-full" />
                  </a>
                ))}
              </div>
              <Button className="bg-[#76b729] hover:bg-[#648f24] text-white w-full">Become a Member</Button>
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder.svg"
                  alt="Equal Housing Opportunity"
                  width={60}
                  height={60}
                  className="h-12 w-auto"
                />
                <Image src="/placeholder.svg" alt="NCUA" width={80} height={60} className="h-12 w-auto" />
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <a href="#" className="hover:underline">
                Disclosures
              </a>
              <a href="#" className="hover:underline">
                Social Media Disclosures
              </a>
              <a href="#" className="hover:underline">
                Third Party Disclosure
              </a>
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <a href="#" className="hover:underline">
                Terms
              </a>
              <a href="#" className="hover:underline">
                Site Map
              </a>
              <a href="#" className="hover:underline">
                Accessibility
              </a>
            </div>
            <div className="mt-8 text-xs text-gray-500 space-y-4">
              <p>All loans subject to approval.</p>
              <p>
                84. As described in the Alliant Cashback Visa Signature Card Program Terms & Conditions, certain
                categories of purchases do not qualify to earn cash back. See the Alliant Cashback Visa Signature Card
                Disclosure for additional details.
              </p>
              <p>
                71. APY= Annual Percentage Yield. Comparison based on Alliant Credit Union 3.10% APY as of the
                12/19/2024 dividend declaration date vs. the bank national average savings rate of .20% APY as of
                2/1/2025 sourced from National Association of Federal Credit Unions in cooperation with SNL Financial
                and Datatrac Corp.
              </p>
              <p>
                19. Your first box of standard checks is free. Other check designs are available for an extra charge.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <span className="text-4xl">{icon}</span>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

function AwardCard({ rating, title, source }: { rating: number; title: string; source: string }) {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="flex space-x-1">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{source}</p>
    </div>
  )
}

function ArticleCard({ image, title, href }: { image: string; title: string; href: string }) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <h3 className="font-semibold text-gray-800 hover:text-blue-500">
          <a href={href}>{title}</a>
        </h3>
      </CardContent>
    </Card>
  )
}

