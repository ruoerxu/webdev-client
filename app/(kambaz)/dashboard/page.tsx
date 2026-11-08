"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const [course, setCourse] = useState<Course>(emptyCourse);

  const { currentUser } = useAccountContext();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const [showAll, setShowAll] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const isEnrolled = (courseId: string) =>
    !!currentUser &&
    enrollments.some(
      (e) => e.user === currentUser._id && e.course === courseId,
    );

  const visibleCourses =
    !currentUser || showAll || showAllCourses
      ? courses
      : courses.filter((c) => isEnrolled(c._id));

  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser && (
          <div className="flex gap-2">
            <button
              type="button"
              id="wd-enrollments-click"
              className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
              onClick={() => setShowAll(!showAll)}
            >
              Enrollments
            </button>
            <button
              type="button"
              id="wd-enrollments-toggle"
              className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium"
              onClick={() => setShowAllCourses(!showAllCourses)}
            >
              {showAllCourses ? "My Courses" : "All Courses"}
            </button>
          </div>
        )}
      </div>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={() => addCourse(course)}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={() => updateCourse(course)}
        >
          Update
        </button>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <input
        type="date"
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <input
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({visibleCourses.length})
      </h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            showEnrollment={!!currentUser}
            enrolled={isEnrolled(c._id)}
            onToggleEnrollment={() => {
              if (!currentUser) return;
              if (isEnrolled(c._id)) {
                unenroll(currentUser._id, c._id);
              } else {
                enroll(currentUser._id, c._id);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}