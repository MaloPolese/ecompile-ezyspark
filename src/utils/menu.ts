export interface Item {
  name: string
  path: string
}

export type Menu = Item[]

export const menu: Menu = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Benefits',
    path: '/benefits'
  },
  {
    name: 'Testimonials',
    path: '/testimonials'
  }
]
