import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarRow selected icon={<HomeIcon />} title='Home' />
      <SidebarRow icon={<TrendingIcon />} title='Trending' />
      <SidebarRow icon={<SubscriptionIcon />} title='Subscription' />
      <hr />
      <SidebarRow icon={<SubscriptionIcon />} title='Library' />
      <SidebarRow icon={<SubscriptionIcon />} title='History' />
      <SidebarRow icon={<SubscriptionIcon />} title='Your videos' />
      <SidebarRow icon={<SubscriptionIcon />} title='Watch later' />
      <SidebarRow icon={<SubscriptionIcon />} title='Liked videos' />
      <SidebarRow icon={<SubscriptionIcon />} title='Show more' />
      <hr />
    </div>
  );
};

const HomeIcon = () => {
  return (
    <svg
      className='w-6 h-6'
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
    </svg>
  );
};

const TrendingIcon = () => {
  return (
    <svg
      className='w-6 h-6'
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z'
        clipRule='evenodd'
      />
    </svg>
  );
};

const SubscriptionIcon = () => {
  return (
    <svg
      className='w-6 h-6'
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
    </svg>
  );
};

<svg
  xmlns='http://www.w3.org/2000/svg'
  viewBox='0 0 24 24'
  width='24'
  height='24'
>
  <path
    fill-rule='evenodd'
    d='M24 5.25a.75.75 0 00-1.136-.643L16.5 8.425V6.25a1.75 1.75 0 00-1.75-1.75h-13A1.75 1.75 0 000 6.25v11C0 18.216.784 19 1.75 19h13a1.75 1.75 0 001.75-1.75v-2.175l6.364 3.818A.75.75 0 0024 18.25v-13zm-7.5 8.075l6 3.6V6.575l-6 3.6v3.15zM15 9.75v-3.5a.25.25 0 00-.25-.25h-13a.25.25 0 00-.25.25v11c0 .138.112.25.25.25h13a.25.25 0 00.25-.25v-7.5z'
  ></path>
</svg>;

export default Sidebar;
