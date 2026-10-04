import { Metadata } from 'next'
import FAQClient from './faq-client'

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cxgrd.com"),
  title: 'FAQ | CXGRD — Frequently Asked Questions',
  description: 'Find answers to common questions about CXGRD\'s blast radius analysis, deterministic prompt generation, and PR merge policy enforcement.',
  alternates: {
    canonical: "/faq",
  }
}

export default function FAQPage() {
  return <FAQClient />
}