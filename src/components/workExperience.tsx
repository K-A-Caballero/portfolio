'use client'
import React from 'react';
import BulletIcon from '../../public/bullet-point.svg'

export interface WorkExperienceProps {
  jobTitle: string;
  timeFrame: string;
  expBullets: string[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ jobTitle, timeFrame, expBullets}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-6">
        <p>{jobTitle}</p>
        <p className="italic">{timeFrame}</p>
      </div>
      <ol>
      {expBullets.map((exp, index) => (
        <li key={index} className="flex mb-4">
          <div className="mt-2 mb-4 mr-4 min-w-3 min-h-3">
            <BulletIcon
              fill="var(--accentPrimary)"
            />
          </div>
          <div>{exp}</div>
        </li>
      ))}
      </ol>
    </div>
  )
}

export default WorkExperience;