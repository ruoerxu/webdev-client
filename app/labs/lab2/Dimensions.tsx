export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sample box is declared 120px wide and 60px tall, so this long
          sentence wraps and spills out past the yellow background instead of
          stretching the box
        </div>
        <div className="wd-dimension-wide wd-bg-color-green">
          A wide dimension
        </div>
        <br />
        <div className="wd-dimension-wide wd-bg-color-green">
          A wide dimension but this time I add a lot more words to see if the box stay the same size
        </div>
        
      </div>
    </div>
  );
}
