type Item = {
  id: string
  name: string
  price: number
}

type SelectedItem = Item & { amount: number }
