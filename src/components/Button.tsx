type Props = {
  content: string,
  urlLink: string
}

export const LinkBtn = ({ content, urlLink }: Props) => {

  return (
    <a className="py-4 border border-stroke-color-light-mode rounded-lg text-text-color-light-mode w-full hover:bg-surface-color-light-mode-hover transition hover:border-text-color-light-mode bg-surface-color-light-mode dark:text-text-color-dark-mode dark:bg-surface-color-dark-mode dark:border-stroke-color-dark-mode dark:hover:bg-surface-color-dark-mode-hover m-auto max-w-135 md:w-135" href={urlLink}>{content}</a>

  )
}