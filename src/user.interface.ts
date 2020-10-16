export interface User {
  storeId: number
  name: string
  castName?: string
  email: string
  deleted: boolean
  type: 'admin' | 'staff' | 'parttimer' | 'cast'
  paymentSystem: 'hourly' | 'daily' | 'monthly'
}
