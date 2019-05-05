export interface PageItem {
  text: string
  path: string
  extra?: Object
}

export const navigationPages: PageItem[] = [
  { text: "#SCREENTIME", path: "/", extra: { isHome: true } },
  { text: "About", path: "/about" },
  { text: "Exhibition", path: "/exhibition" },
  { text: "Book", path: "/book" },
  { text: "Contact", path: "/contact" }
]
