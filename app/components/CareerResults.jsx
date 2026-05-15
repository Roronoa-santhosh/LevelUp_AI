
import TopRoles from "./sections/TopRoles";
import SkillGaps from "./sections/SkillGaps";
import IndustryTrends from "./sections/IndustryTrends";
import ProjectsSection from "./sections/ProjectsSection";
import RoadmapTimeline from "./sections/RoadmapTimeline";
export default function CareerResults({
  data,
  activePage,
}) {

  const analysis = data?.analysis?.analysis;

  return (

    <div>

      {activePage === "career" && (
        <TopRoles analysis={analysis} />
      )}

      {activePage === "gaps" && (
        <SkillGaps analysis={analysis} />
      )}

      {activePage === "trends" && (
        <IndustryTrends analysis={analysis} />
      )}
      {activePage === "projects" && (
  <ProjectsSection analysis={analysis} />
)}

{activePage === "roadmap" && (
  <RoadmapTimeline analysis={analysis} />
)}

    </div>

  );
}