import { notFound } from 'next/navigation'
import { communities, getCommunity } from 'app/i18n/content'
import { CommunityDetail } from './detail'

export function generateStaticParams() {
  return communities.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const community = getCommunity(params.slug)
  if (!community) return
  return {
    title: community.name.en,
    description: community.summary.en,
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const community = getCommunity(params.slug)
  if (!community) {
    notFound()
  }
  return <CommunityDetail slug={params.slug} />
}
