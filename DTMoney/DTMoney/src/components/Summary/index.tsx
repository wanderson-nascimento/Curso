import { SummaryContainer, SummaryCard } from './styles'
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summaryTotal = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>{priceFormatter.format(summaryTotal.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{priceFormatter.format(summaryTotal.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="white" />
        </header>
        <strong>{priceFormatter.format(summaryTotal.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
