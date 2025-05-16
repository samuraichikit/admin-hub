type Props = {
  amount: number
  currency: string
}

export const AmountRow = ({ amount, currency }: Props) => {
  return <>{`${amount} ${currency}`}</>
}
