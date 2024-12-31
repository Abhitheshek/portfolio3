import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const features = [
  {
    name: 'Analytics',
    href: '#',
    description: 'Get a better understanding of where your traffic is coming from.',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    href: '#',
    description: 'Speak directly to your customers in a more meaningful way.',
    icon: CursorClickIcon,
  },
  {
    name: 'Security',
    href: '#',
    description: "Your customers' data will be safe and secure.",
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    href: '#',
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon,
  },
]

const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]

const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
]

const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Heropage() {
  return (
    <div className=" overflow-x-hidden relative bg-white">
      

      <main>
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center">
          <div className="px-4 sm:px-8">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
              <span className="block">Hello everyone my self</span>
              <span className="block text-orange-600">Abhishek Yadav</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              I'm from Bhadila Doyam, Mahen Deoria, UP, a small town that fuels my big dreams. 🚀
              Exploring new things and diving into the latest tech innovations is what keeps me inspired. 💡

              When I’m not geeking out over tech, you'll probably find me singing my heart out—it’s my happy place! 🎤✨

              Let’s connect and create something amazing together! 🌈
            </p>
            <div className="mt-10 flex justify-center gap-3">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:text-lg"
                >
                  Get started
                </a>
              </div>
              <div className="rounded-md shadow">
                <a
                  href="https://www.instagram.com/quantumabhishek?igsh=MXRpOHVndWJibWh3eA=="
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:text-lg"
                >
                  Insta ID
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96">
          <img
            className="absolute object-top inset-0 w-full min-h-screen object-cover"
            src="/my pic2.jpg"
            alt=""
          />
        </div>
      </main>
    </div>
  )
}
