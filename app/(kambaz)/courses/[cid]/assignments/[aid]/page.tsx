import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          {/* Complete on your own — see checklist below */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="PERCENT">
                <option value="PERCENT">Percent</option>
                <option value="POINTS">Points</option>
                <option value="LETTER">Letter Grade</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="ONLINE">
                <option value="ONLINE">Online</option>
              </select>
              <br />
              <br />
              <b>Online Entry Options</b>
              <br />
              <input
                type="checkbox"
                name="online-entry-option"
                id="wd-text-entry"
              />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input
                type="checkbox"
                name="online-entry-option"
                id="wd-website-url"
              />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input
                type="checkbox"
                name="online-entry-option"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input
                type="checkbox"
                name="online-entry-option"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input
                type="checkbox"
                name="online-entry-option"
                id="wd-file-upload"
              />
              <label htmlFor="wd-file-upload">File Upload</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              Assign
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <input id="wd-assign-to" defaultValue="Everyone" />
              <br />
              <br />
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input type="date" id="wd-due-date" />
              <br />
              <br />
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="wd-available-from">Avaliable from</label>
                      <br />
                      <input type="date" id="wd-available-from" />
                    </td>
                    <td>
                      <label htmlFor="wd-available-until">Until</label>
                      <br />
                      <input type="date" id="wd-available-until" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
        Cancel
      </Link>{" "}
      <Link href={`/courses/${cid}/assignments`} id="wd-save">
        Save
      </Link>
    </div>
  );
}
