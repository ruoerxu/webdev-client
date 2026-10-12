export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-gray wd-width-110px">Fixed 110px</div>
        <div className="wd-bg-color-yellow">Natural width</div>
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          Stretches to fill
        </div>
      </div>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-green wd-fg-color-white wd-width-200px">Fixed 200px</div>
        <div className="wd-bg-color-yellow wd-flex-grow-1">Grow 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white wd-flex-grow-2">Grow 2</div>
      </div>
    </div>
  );
}