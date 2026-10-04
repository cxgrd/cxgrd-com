import { Metadata } from 'next'
import PricingClient from './pricing-client'

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cxgrd.com"),
  title: 'Pricing | CXGRD — Free, Pro, and Team Plans',
  description: 'Compare CXGRD plans for blast radius analysis, deterministic prompt generation, and PR merge policy enforcement.',
  alternates: {
    canonical: "/pricing",
  }
}

export default function PricingPage() {
  return <PricingClient />
}