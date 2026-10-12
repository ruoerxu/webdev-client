export default function Positions() {
  return (
    <div id="wd-css-positions">
      <h2>Positions</h2>
      <div id="wd-css-position-relative">
        <h2>Relative</h2>
        <div className="wd-bg-color-gray">
          <div className="wd-bg-color-yellow wd-dimension-portrait">
            <div className="wd-pos-relative-nudge-down-right">Portrait</div>
          </div>
          <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-bg-color-red wd-dimension-square">Square</div>
          <div
            id="wd-ai-relative"
            className="wd-ai-pos-relative-nudge wd-bg-color-yellow wd-dimension-landscape"
          >
            Nudged down left
          </div>
          <div className="wd-pos-relative-nudge-up-left wd-bg-color-green  wd-dimension-wide">
            Up Left
          </div>
        </div>
      </div>
      <div id="wd-css-position-absolute">
        <h2>Absolute position</h2>
        <div className="wd-pos-relative" style={{ height: 150 }}>
          <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
            Portrait
          </div>
          <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
            Square
          </div>
          <div
            id="wd-ai-absolute"
            className="wd-ai-pos-absolute-br wd-bg-color-red wd-dimension-portrait"
          >
            Bottom right
          </div>
          <div className="wd-pos-absolute-top-right wd-bg-color-green wd-fg-color-white wd-dimension-square">
            On Your Own Piece
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div id="wd-css-position-fixed">
        <h2>Fixed position</h2>
        Checkout the blue square that says &quot;Fixed position&quot; stuck all
        the way on the right and half way down the page. It doesn&apos;t scroll
        with the rest of the page. Its position is &quot;Fixed&quot;.
        <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">
          Fixed position
        </div>
        <div
          id="wd-ai-fixed"
          className="wd-ai-pos-fixed wd-bg-color-green wd-fg-color-white"
        >
          AI fixed
        </div>
        <div className="wd-pos-fixed-corner wd-dimension-square wd-bg-color-red wd-fg-color-white">
          Corner fixed piece
        </div>
      </div>
    </div>
  );
}
