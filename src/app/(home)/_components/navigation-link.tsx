'use client';

import { getRandomId } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationLink {
    href: string;
    label: string;
}

const NAVIGATION_LINKS: NavigationLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
];

const NavigationLinks = () => {
    const pathname = usePathname();

    const isActiveLink = (href: string): boolean => {
        return href === '/' ? pathname === href : pathname.includes(href);
    };

    const getLinkClassName = (active: boolean): string => {
        return `rounded-xl px-3 py-2 ${
            active ? 'bg-neutral-200 dark:bg-neutral-700' : 'bg-transparent'
        }`;
    };

    return (
        <nav className='flex items-center gap-3'>
            {NAVIGATION_LINKS.map(({ href, label }) => (
                <Link key={getRandomId()} href={href}>
                    <button className={getLinkClassName(isActiveLink(href))}>
                        {label}
                    </button>
                </Link>
            ))}
        </nav>
    );
};

export default NavigationLinks;