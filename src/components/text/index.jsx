import styles from "./styles.module.css"

const {
  subtitle,
  paragraph,
  titleBanner,
  sectionTitle,
  mainFontStyle,
  paragraphTitle,
} = styles

const Text = ({ children, element: Element, textStyle }) => (
  <Element className={`${mainFontStyle} ${textStyle}`}>{children}</Element>
)

export const Subtitle = ({children}) => <Text textStyle={subtitle} element="h3">{children}</Text>
export const Paragraph = ({children}) => <Text textStyle={paragraph} element="p">{children}</Text>
export const TitleBanner = ({children}) => <Text textStyle={titleBanner} element="h1">{children}</Text>
export const SectionTitle = ({children}) => <Text textStyle={sectionTitle} element="h2">{children}</Text>
export const ParagraphTitle = ({children}) => <Text textStyle={paragraphTitle} element="h4">{children}</Text>
