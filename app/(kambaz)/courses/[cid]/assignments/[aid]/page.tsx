"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = String(cid);
  const assignmentId = String(aid);
  const isNew = assignmentId === "new";
  const router = useRouter();

  const findAssignment = useAssignmentsStore((state) => state.findAssignment);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );

  const [assignment, setAssignment] = useState<Assignment>(
    () =>
      (!isNew && findAssignment(assignmentId)) || {
        _id: "",
        title: "New Assignment",
        course: courseId,
        description: "New Assignment Description",
        points: 100,
        due: "",
        available: "",
        until: "",
      },
  );

  const goBack = () => router.push(`/courses/${courseId}/assignments`);

  const save = () => {
    if (isNew) {
      addAssignment({ ...assignment, course: courseId });
    } else {
      updateAssignment({ ...assignment, course: courseId });
    }
    goBack();
  };

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="mb-1 block text-sm">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />
      <textarea
        id="wd-description"
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        className="mb-4 h-40 w-full rounded border border-neutral-300 p-3 text-sm"
      />
      <div className="mb-4 grid grid-cols-12 items-center gap-4">
        <label htmlFor="wd-points" className="col-span-4 text-right text-sm">
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          value={assignment.points}
          onChange={(e) =>
            setAssignment({ ...assignment, points: Number(e.target.value) })
          }
          className="col-span-8 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        />
      </div>
      <div className="mb-4 grid grid-cols-12 items-center gap-4">
        <label htmlFor="wd-group" className="col-span-4 text-right text-sm">
          Assignment Group
        </label>
        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="col-span-8 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className="mb-4 grid grid-cols-12 items-center gap-4">
        <label
          htmlFor="wd-display-grade-as"
          className="col-span-4 text-right text-sm"
        >
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENT"
          className="col-span-8 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        >
          <option value="PERCENT">Percent</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
        </select>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <label
          htmlFor="wd-submission-type"
          className="col-span-4 pt-4 text-right text-sm"
        >
          Submission Type
        </label>
        <div className="col-span-8 rounded border border-neutral-300 p-4">
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
          >
            <option value="ONLINE">Online</option>
          </select>
          <div className="mb-3 text-sm font-bold">Online Entry Options</div>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="online-entry-option" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="online-entry-option" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="online-entry-option" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="online-entry-option" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="online-entry-option" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Upload</label>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <div className="col-span-4 pt-4 text-right text-sm">Assign</div>
        <div className="col-span-8 rounded border border-neutral-300 p-4">
          <label htmlFor="wd-assign-to" className="mb-1 block text-sm font-bold">
            Assign to
          </label>
          <input
            id="wd-assign-to"
            defaultValue="EVERYONE"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
          />
          <label htmlFor="wd-due-date" className="mb-1 block text-sm font-bold">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            value={assignment.due}
            onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
          />
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div>
              <label htmlFor="wd-available-from" className="mb-1 block text-sm font-bold">
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                value={assignment.available}
                onChange={(e) =>
                  setAssignment({ ...assignment, available: e.target.value })
                }
                className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="mb-1 block text-sm font-bold">
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                value={assignment.until ?? ""}
                onChange={(e) =>
                  setAssignment({ ...assignment, until: e.target.value })
                }
                className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <label htmlFor="wd-ai-editor-notes" className="mb-1 block text-sm">
        Sample notes
      </label>
      <textarea
        id="wd-ai-editor-notes"
        className="mb-4 h-40 w-full rounded border border-neutral-300 p-3 text-sm"
      />
      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={goBack}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-3 py-2 text-sm text-black"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={save}
          id="wd-save"
          className="rounded bg-red-600 px-3 py-2 text-sm text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}