import { NavItem, Project, Article } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Vision', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Ventures', path: '/work' },
  { label: 'Ministry', path: '/ministry' },
  { label: 'Insights', path: '/writing' },
  { label: 'Contact', path: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'eazify',
    title: 'Eazify Innovations',
    category: 'Venture Builder',
    description: 'Building practical technology for growth, efficiency, and profit. Digital systems, minus the noise.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop',
    year: 'Present',
    status: 'FOUNDER'
  },
  {
    id: 'fluenta',
    title: 'Fluenta AI',
    category: 'AI / SaaS',
    description: 'Real-time AI translation for a global audience. Because language barriers are bad for business.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    year: '2024',
    status: 'SCALING'
  },
  {
    id: 'getledgo',
    title: 'Getledgo',
    category: 'Fintech',
    description: 'Mobile-first accounting that keeps small businesses financially sharp. Know your numbers. Sleep better.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
    year: '2023',
    status: 'ACTIVE'
  },
  {
    id: 'zifa',
    title: 'ZiFA',
    category: 'EdTech',
    description: 'Reimagining learning with adaptive, mobile-led education. Education, upgraded.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop',
    year: 'In Progress',
    status: 'BUILDING'
  },
  {
    id: 'mck-missions',
    title: 'MCK Missions',
    category: 'Ministry',
    description: 'Supporting missions advancing the Gospel across India. Faith with boots on the ground.',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1000&auto=format&fit=crop',
    year: 'Ongoing',
    status: 'PARTNER'
  },
  {
    id: 'royal-generation',
    title: 'Royal Generation',
    category: 'Ministry',
    description: 'Leading identity-driven discipleship for the next generation. Raising leaders early.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop',
    year: 'Ongoing',
    status: 'DIRECTOR'
  },
  {
    id: 'surexchange',
    title: 'SureXchange',
    category: 'Fintech',
    description: 'Global exchange platform for currencies, gift cards, and crypto. Moving value, globally.',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop',
    year: '2021',
    status: 'CO-FOUNDER'
  }
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Case for Slow Growth',
    excerpt: 'Why hyper-growth is killing African startups, and why we need to build for resilience instead of valuation.',
    date: 'Dec 12, 2024',
    readTime: '5 MIN READ',
    category: 'Business'
  },
  {
    id: '2',
    title: 'Digital Sovereignty',
    excerpt: 'Why owning our infrastructure is the only way to secure the future of the continent\'s digital economy.',
    date: 'Nov 28, 2024',
    readTime: '8 MIN READ',
    category: 'Technology'
  },
  {
    id: '3',
    title: 'Faith in the Boardroom',
    excerpt: 'How Christian principles can coexist with aggressive business goals without compromising integrity.',
    date: 'Oct 15, 2024',
    readTime: '6 MIN READ',
    category: 'Faith'
  },
  {
    id: '4',
    title: 'Systems Thinking for Leaders',
    excerpt: 'Move beyond goals. Build systems that make success inevitable.',
    date: 'Sep 02, 2024',
    readTime: '10 MIN READ',
    category: 'Leadership'
  }
];