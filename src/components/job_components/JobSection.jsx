import JobFilter from "./JobFilter";
import JobList from "./JobList";
import SkeletonContainer from "../loader_components/SkeletonContainer";
import "./JobSection.css";

function JobSection({
  title,
  jobs,
  showSkeleton,
  currentPage,
  totalPages,
  handlePageChange,
}) {
  return (
    <div className="jobsection-container">
      <h2 className="joblist-title">{title}</h2>
      <div className="jobsection">
        {showSkeleton ? (
          <SkeletonContainer times={12} />
        ) : (
          <JobList
            jobs={jobs}
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        )}
        <JobFilter />
      </div>
    </div>
  );
}

export default JobSection;
