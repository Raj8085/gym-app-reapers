
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/placeholder.svg" 
                alt="GYMREAPERS" 
                className="h-8 w-auto"
              />
            </div>
            <h3 className="text-white text-xl mb-4">SIGN UP FOR THE LATEST RELEASES AND MORE.</h3>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="E-mail" 
                className="bg-transparent border-gray-700"
              />
              <Button variant="outline" size="icon">
                <span className="sr-only">Subscribe</span>
                →
              </Button>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">SHOP</h4>
            <ul className="space-y-2">
              {['Weight Belts', 'Knee Sleeves', 'Lifting Straps', 'Wrist Wraps', 'Basic Tees', 'Bags', 'Strength Kits', 'Mens', 'Womens'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors"/>
                    {item}
                  
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">EXPLORE</h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Articles', 'Athletes', 'Retail Portal'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors"/>
                    {item}
                  
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">SUPPORT</h4>
            <ul className="space-y-2">
              {[
                'My Account',
                'Shipping & Delivery',
                'Returns & Exchanges',
                'Privacy Policy',
                'Warranty Information',
                'Accessibility',
                'FAQs'
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors"/>
                    {item}
                  
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">CONTACT US</h4>
            <div className="space-y-2">
              <p>Mon to Fri, 8:00am to 5:00pm (MST)</p>
              <p>
                Domestic:{' '}
                <Link href="tel:(208) 203-7498" className="hover:text-white"/>
                  (208) 203-7498
              
              </p>
              <p>
                International:{' '}
                <Link href="tel:(866) 220-2684" className="hover:text-white"/>
                  (866) 220-2684
                
              </p>
              <p>
                Send us{' '}
                <Link href="#" className="underline hover:text-white"/>
                  an email
                
                {' '}or a{' '}
                <Link href="#" className="underline hover:text-white"/>
                  live chat
                
              </p>
            </div>
          </div>
        </div>

        {/* Social Media & Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white"/>
                <Facebook className="h-6 w-6" />
            
              <Link href="#" className="hover:text-white"/>
                <Twitter className="h-6 w-6" />
              
              <Link href="#" className="hover:text-white"/>
                <Instagram className="h-6 w-6" />
             
              <Link href="#" className="hover:text-white"/>
                <Youtube className="h-6 w-6" />
            
            </div>

            {/* Copyright & Links */}
            <div className="flex items-center gap-4 text-sm">
              <span>© 2024, GYMREAPERS.</span>
              <Link href="#" className="hover:text-white">
                Privacy Choices
              </Link>
              <span>/</span>
              <Link href="#" className="hover:text-white">
                Notice at Collection
              </Link>
            </div>

            {/* Payment Methods */}
            <div className="flex gap-2">
              {['visa', 'mastercard', 'amex', 'paypal', 'apple-pay', 'google-pay'].map((payment) => (
                <div key={payment} className="w-10 h-6 bg-gray-600 rounded">
                  <span className="sr-only">{payment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

