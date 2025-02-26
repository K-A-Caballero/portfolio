import { promises as fs } from 'fs';
import Tabs, {Tab} from "@/components/tabs";
import WorkExperience, {WorkExperienceProps} from '@/components/workExperience';

export default async function Experience() {
  const file = await fs.readFile(process.cwd() + '/src/app/experience/experience.json', 'utf-8');
  const data = JSON.parse(file);
  const workHistory = data.workHistory;
  const tabData: Tab[] = [];
  Object.entries(workHistory).forEach(([key, value]) => {
    const { jobTitle, timeFrame, expBullets } = value as WorkExperienceProps;
    tabData.push({
      label: key,
      content: <WorkExperience jobTitle={jobTitle} timeFrame={timeFrame} expBullets={expBullets}/>
    });
  })

  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center">
      <Tabs tabs={tabData} />
    </div>
  );
}