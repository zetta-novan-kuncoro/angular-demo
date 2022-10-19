type User = {
  id: string
  name: string
  age: number
  email: string
  img: string
  type: 'ADMIN' | 'SUPERADMIN' | 'DIRECTOR'
  gender: 'MALE' | 'FEMALE' | 'NEUTRAL'
  marital_status: 'MARRIED' | 'SINGLE'
  addresses: Address[]
}

type Address = {
  address: string
  zip: number
  city: string
  country: string
}
