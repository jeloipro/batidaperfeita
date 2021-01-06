type MarkdownMethods = 'escape'
  | 'autoLink'
  | 'url'
  | 'html'
  | 'link'
  | 'reference'
  | 'strong'
  | 'emphasis'
  | 'deletion'
  | 'code'
  | 'break'
  | 'text';

export interface RemarkBurgerOptions {
  beginMarker?: string;
  endMarker?: string;
  pattyName?: string;
  onlyRunWithMarker?: boolean;
  insertBefore?: MarkdownMethods;
}

export default function plugin(options: RemarkBurgerOptions): void