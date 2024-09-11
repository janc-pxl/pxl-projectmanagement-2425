import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <p>Copyright © 2024 Hogeschool PXL</p>
        <ul>
            <li><a href="https://www.linkedin.com/school/hogeschoolpxl/"><img width="16" height="16" src='./static/linkedin.png'/></a></li>
            <li><a href="https://www.facebook.com/HogeschoolPXL/"><img width="16" height="16" src='./static/facebook.png'/></a></li>
            <li><a href="https://www.instagram.com/hogeschoolpxl"><img width="16" height="16" src='./static/instagram.png'/></a></li>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
