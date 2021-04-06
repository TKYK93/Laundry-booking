export interface User {
  uid: string
  groupId?: string
  name?: string
  email: string | null
  isAuthenticated: boolean
}
