export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Your Form</h4>

      <h5>Text fields</h5>
      <label htmlFor="wd-your-first-name">First name: </label>
      <input placeholder="Ruoer" id="wd-your-first-name" />
      <br />
      <label htmlFor="wd-your-last-name">Last name: </label>
      <input placeholder="Xu" id="wd-your-last-name" />
      <br />
      <label htmlFor="wd-your-student-id">Student ID: </label>
      <input type="password" defaultValue="002223279" id="wd-your-student-id" />
      <br />

      <h5>Textarea</h5>
      <label htmlFor="wd-your-bio">Bio: </label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={30}
        rows={8}
        defaultValue="I am taking this course because I want to learn more about web development."
      />
      <br />

      <h5>Radio buttons</h5>
      <label>Class standing:</label>
      <br />
      <input type="radio" name="wd-your-standing" id="wd-your-radio-freshman" />
      <label htmlFor="wd-your-radio-freshman">Freshman</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-your-radio-sophomore"
      />
      <label htmlFor="wd-your-radio-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="wd-your-standing" id="wd-your-radio-junior" />
      <label htmlFor="wd-your-radio-junior">Junior</label>
      <br />
      <input type="radio" name="wd-your-standing" id="wd-your-radio-senior" />
      <label htmlFor="wd-your-radio-senior">Senior</label>
      <br />
      <input type="radio" name="wd-your-standing" id="wd-your-radio-graduate" />
      <label htmlFor="wd-your-radio-graduate">Graduate</label>
      <br />
      <label>Enrollment status:</label>
      <br />
      <input
        type="radio"
        name="wd-your-enrollment"
        id="wd-your-radio-full-time"
      />
      <label htmlFor="wd-your-radio-full-time">Full-time</label>
      <br />
      <input
        type="radio"
        name="wd-your-enrollment"
        id="wd-your-radio-part-time"
      />
      <label htmlFor="wd-your-radio-part-time">Part-time</label>
      <br />
      <input
        type="radio"
        name="wd-your-enrollment"
        id="wd-your-radio-commuter"
      />
      <label htmlFor="wd-your-radio-commuter">Commuter</label>
      <br />

      <h5>Check boxes</h5>
      <label>Interests:</label>
      <br />
      <input type="checkbox" name="wd-your-interests" id="wd-your-check-web" />
      <label htmlFor="wd-your-check-web">Web development</label>
      <br />
      <input type="checkbox" name="wd-your-interests" id="wd-your-check-data" />
      <label htmlFor="wd-your-check-data">Data science</label>
      <br />
      <input type="checkbox" name="wd-your-interests" id="wd-your-check-ai" />
      <label htmlFor="wd-your-check-ai">Artificial intelligence</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-interests"
        id="wd-your-check-design"
      />
      <label htmlFor="wd-your-check-design">Design</label>
      <br />

      <h5>Dropdowns</h5>
      <label htmlFor="wd-your-select-major">Major: </label>
      <br />
      <select id="wd-your-select-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="AI">Artificial Intelligence</option>
        <option value="IS">Information Systems</option>
      </select>
      <br />
      <label htmlFor="wd-your-select-topics">Topics I want to learn: </label>
      <br />
      <select multiple id="wd-your-select-topics" defaultValue={["JS", "DB"]}>
        <option value="HTML">HTML &amp; CSS</option>
        <option value="JS">JavaScript</option>
        <option value="DB">Databases</option>
        <option value="REACT">React</option>
        <option value="API">RESTful APIs</option>
      </select>
      <br />

      <h5>Other HTML field types</h5>
      <label htmlFor="wd-your-email">Email: </label>
      <input
        type="email"
        placeholder="xu.ruoe@northeastern.edu"
        id="wd-your-email"
      />
      <br />
      <label htmlFor="wd-your-graduation-year">Graduation year: </label>
      <input
        type="number"
        defaultValue="2028"
        placeholder="2028"
        min={2024}
        max={2035}
        id="wd-your-graduation-year"
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date: </label>
      <input
        type="date"
        defaultValue="2025-09-09"
        min="1900-01-01"
        max="2035-12-31"
        id="wd-your-start-date"
      />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited are you about this course (0-10)?{" "}
      </label>
      <input
        type="range"
        defaultValue="10"
        min="0"
        max="10"
        id="wd-your-excitement"
      />
      <br />

      <h5>Buttons</h5>
      <button type="submit" id="wd-your-button-save">
        Save
      </button>
      <button type="button" id="wd-your-button-cancel">
        Cancel
      </button>
    </form>
  );
}
