export interface User {
  uid: string
  groupId?: string
  name?: string
  email: string | null
  isAdmin?: boolean
  isAuthenticated: boolean
}
