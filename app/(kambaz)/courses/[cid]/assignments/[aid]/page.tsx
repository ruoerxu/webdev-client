import Link from "next/link";
import * as db from "../../../../database";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="mb-1 block text-sm">
        Assignment Name
      </label>
      <input
        id="wd-name"
        defaultValue={assignment?.title ?? ""}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />
      <p className="mb-4 text-sm text-neutral-600">Assignment id: {aid}</p>
      <textarea
        id="wd-description"
        defaultValue={assignment?.description ?? ""}
        className="mb-4 h-40 w-full rounded border-neutral-300 p-3 text-sm"
      />
      <div className="mb-4 grid grid-cols-12 items-center gap-4">
        <label htmlFor="wd-points" className="col-span-4 text-right text-sm">
          points
        </label>
        <input
          id="wd-points"
          defaultValue={assignment?.points ?? 100}
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
            <div className="flex tiems-center gap-2">
              <input
                type="checkbox"
                name="online-entry-option"
                id="wd-text-entry"
              />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="online-entry-option"
                id="wd-website-rul"
              />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="flex tiems-center gap-2">
              <input
                type="checkbox"
                name="online-entry-option"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="online-entry-option"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="flex tiems-center gap-2">
              <input
                type="checkbox"
                name="online-entry-option"
                id="wd-File-upload"
              />
              <label htmlFor="wd-File-upload">File Upload</label>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <div className="col-span-4 pt-4 text-right text-sm">Assign</div>
        <div className="col-span-8 rounded border border-neutral-300 p-4">
          <label
            htmlFor="wd-assign-to"
            className="mb-1 block text-sm font-bold"
          >
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
            defaultValue={assignment?.due}
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
          />
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div>
              <label
                htmlFor="wd-available-from"
                className="mb-1 block text-sm font-bold"
              >
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                defaultValue={assignment?.available}
                className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="wd-available-until"
                className="mb-1 block text-sm font-bold"
              >
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
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
      <div className="mt-4 flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-3 py-2 text-sm text-black no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-3 py-2 text-sm text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
