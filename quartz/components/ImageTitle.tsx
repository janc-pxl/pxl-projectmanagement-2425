import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function ImageTitle({ displayClass }: QuartzComponentProps) {
  return (
<div class={classNames(displayClass, "img-title")}>
  <a href="/">
    <img src="/static/1314_logo_pxl_hogeschool.png" />
  </a>
</div>
)
}

ImageTitle.css = `
.img-title {
  margin: 1rem 1rem 0 0; 
}
`

export default (() => ImageTitle) satisfies QuartzComponentConstructor