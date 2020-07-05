import * as React from "react"

function ScrollTop(props) {
  return (
    <div id="svg-container">
    <svg width={26} height={26} viewBox="0 0 26 26" fill="none" {...props}>
      <path
        d="M4.854 25.999L13 17.492 21.146 26 26 21.148l-3.704-3.869L26 13.577 13 .001 0 13.577l3.704 3.702L0 21.148l4.854 4.851zM2.276 13.553L13 2.353l10.724 11.2-2.552 2.55L13 7.57l-8.172 8.533-2.552-2.55zM13 9.923l10.724 11.2-2.552 2.55L13 15.14l-8.172 8.533-2.552-2.55L13 9.922z"
        fill="#000"
      />
    </svg>
    </div>
  )
}

export default ScrollTop
