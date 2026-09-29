import type { ElementType } from "react";

type HtmlTextProps = {
  html: string;
  as?: ElementType;
  className?: string;
};

export function HtmlText({
  html,
  as: Tag = "span",
  className,
}: HtmlTextProps) {
  return (
    <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
