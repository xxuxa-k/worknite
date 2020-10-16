export interface Attendance {
  userId: number
  targetDate: Date
  comeAt: Date
  leftAt: Date
  type: 'default' | 'late' | 'absent'
  pickupFee: number
  deduction: number // 控除
  penalty: number
}
