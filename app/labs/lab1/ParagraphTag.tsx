export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default browsers
        render them as one contiguous piece of text as shown here on the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph tag
        to tell browsers to render the gaps.
      </p>
      <p id="wd-ai-p">
        Browsers treat a paragraph as a block-level element, so each one starts
        on its own line and takes up the full width available. The default
        stylesheet also gives paragraphs a top and bottom margin, which is what
        produces the visible vertical gap between them.
      </p>
      <p id="wd-p-your-1">
        I am from china. I came to the United States when I was 10 years old. I
        am a student at Northeastern University. I am currently studying
        computer science. But during breaks that is longer than a few days, I
        would go back to new york.
      </p>
      <p id="wd-p-your-2">
        I hope to learn more about web development in this course as I am
        interested in developing web applications.
      </p>
    </div>
  );
}
