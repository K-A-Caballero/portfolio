'use client'

import React, { useState, JSX } from 'react';

export interface Tab {
  label: string;
  content: JSX.Element;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const handleTabSwitch = (idx: number) => {
    setActiveTabIdx(idx);
  };

  return (
    <div className="w-4/5 lg:w-3/5 lg:flex lg:min-w-4xl lg:h-[25rem] mx-auto text-[var(--textSecondary)]">
      <div className="grid lg:flex-column space-y-4 text-md font-medium mb-4 lg:me-4 lg:mb-0 lg:w-1/6">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`${idx === activeTabIdx ? "activeTab" : "inactiveTab"} tab`}
            onClick={() => handleTabSwitch(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-6 bg-[var(--backgroundSecondary)] text-xl rounded-lg lg:w-5/6">
        {tabs[activeTabIdx] && tabs[activeTabIdx].content}
      </div>
    </div>
  )
};

export default Tabs;