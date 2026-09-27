export default function HeadingTags() {
  return (
    <div id="wd-h-tag">
      <h4>Heading Tags</h4>
      Text documents are often broken up into several sections and subsections.
      Each section is usually prefaced with a short title or heading that
      attempts to summarize the topic of the section it precedes. For instance
      this paragraph is preceded by the heading Heading Tags. The font of the
      section headings are usually larger and bolder than their subsection
      headings. This document uses headings to introduce topics such as HTML
      Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to
      format plain text so that it renders in a browser as large headings. There
      are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1
      is the largest heading and h6 is the smallest heading. A{" "}
      <span id="wd-inline-span">span</span> sits in this sentence without
      starting a new line.
      <div id="wd-your-heading">
        <h4>Ruoer Xu</h4>I am a student at Northeastern University. I am
        currently studying computer science. I
        <span id="wd-your-span"> came</span>to the United States when I was 10
        years old.
      </div>
      <div id="wd-ai-headings">
        <h4>Lab notes</h4>
        This section collects short notes about the work done in this lab. Each
        heading below introduces a smaller subsection of those notes.
        <h5>What I built</h5>A small page that demonstrates the six heading tags
        along with a few inline elements. The markup is kept simple so the
        effect of each tag is easy to see in the browser.
        <h6>Next step</h6>
        Continue with the remaining tags covered in class and add examples for
        lists, links, and images to the same page.
      </div>
    </div>
  );
}
