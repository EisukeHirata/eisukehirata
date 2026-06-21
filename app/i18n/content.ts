// Plain data module (no React) so it can be imported from both
// server components (generateStaticParams) and client components.

export type Locale = 'en' | 'ja'

type L<T = string> = Record<Locale, T>

// ---------------------------------------------------------------------------
// UI strings
// ---------------------------------------------------------------------------

export const ui = {
  nav: {
    home: { en: 'home', ja: 'ホーム' },
    articles: { en: 'articles', ja: '記事' },
    communities: { en: 'communities', ja: 'コミュニティ' },
  },
  home: {
    intro: {
      en: [
        `I'm a founder and community builder who has spent the last several years between Tokyo and San Francisco.`,
        `After graduating from Nada High School and the University of Tokyo, I left a consulting career to start from zero in Silicon Valley, where I founded and ran an AI × EdTech startup for about four years before winding it down in 2025.`,
        `Right now, I'm exploring my next challenge.`,
      ],
      ja: [
        `東京とサンフランシスコを行き来しながら、ここ数年は起業家・コミュニティビルダーとして活動しています。`,
        `灘高校・東京大学を卒業後、コンサルのキャリアを捨ててシリコンバレーでゼロから挑戦。AI×EdTech のスタートアップを創業し約4年間運営した後、2025年に会社を清算しました。`,
        `現在は次の挑戦を探索中です。`,
      ],
    },
  },
  articlesPage: {
    title: { en: 'Articles', ja: '記事' },
    intro: {
      en: `Things I've written, mostly on note.`,
      ja: `これまでに書いてきた記事（主に note）。`,
    },
  },
  communitiesPage: {
    title: { en: 'Community Building', ja: 'コミュニティづくり' },
    intro: {
      en: `Communities I've built, run, or helped bring together.`,
      ja: `これまでに立ち上げ・運営・主催してきたコミュニティ。`,
    },
    roleLabel: { en: 'Role', ja: '役割' },
    linkLabel: { en: 'Reference', ja: '参考リンク' },
    back: { en: '← all communities', ja: '← コミュニティ一覧' },
  },
} satisfies Record<string, any>

// ---------------------------------------------------------------------------
// Articles (external links only)
// ---------------------------------------------------------------------------

export type Article = {
  title: L
  publishedAt: string // YYYY-MM-DD
  url: string
}

export const articles: Article[] = [
  {
    title: {
      en: 'Winding Down the Company I Started in Silicon Valley',
      ja: 'シリコンバレーで起業した会社を清算した話',
    },
    publishedAt: '2026-03-23',
    url: 'https://note.com/eisukehirata/n/n89af81975ff0',
  },
  {
    title: {
      en: 'From Nada & UTokyo to a Silicon Valley Startup: Quitting My Career to Start From Zero',
      ja: '灘東大卒がキャリアを捨て無職、０からシリコンバレーで起業するまでの話',
    },
    publishedAt: '2023-08-14',
    url: 'https://note.com/eisukehirata/n/nc872ffe189d6',
  },
]

// ---------------------------------------------------------------------------
// Communities (list + detail pages)
// ---------------------------------------------------------------------------

export type Community = {
  slug: string
  name: L
  role: L
  summary: L // one line for the list
  body: L<string[]> // paragraphs for the detail page
  links: { label: string; url: string }[]
  images?: string[] // paths under /public; omitted when there are no images
}

export const communities: Community[] = [
  {
    slug: 'tech-house',
    name: { en: 'Tech House', ja: 'Tech House' },
    role: { en: 'Operator', ja: '運営' },
    summary: {
      en: 'A Silicon Valley founder house for Japanese entrepreneurs building for the US market.',
      ja: '米国市場を狙う日本人起業家のためのシリコンバレーのファウンダーハウス。',
    },
    body: {
      en: [
        `Tech House is a shared residence in Silicon Valley for young Japanese entrepreneurs working in frontier tech — AI, Web3, and beyond. Originally founded around a decade ago, it went quiet for a while before being revived.`,
        `I took over operations during the pandemic and have run the community since. Rather than formal meetings, we lean on regular dinners where members exchange information and support one another through the hard parts of building a company.`,
        `At any given time the house hosts roughly 6–10 residents, mostly pre-seed to seed-stage founders targeting the US market from day one — using it as both a living space and an information hub.`,
      ],
      ja: [
        `Tech House は、AI や Web3 といった最先端領域に取り組む若手日本人起業家のための、シリコンバレーのシェアハウスです。約10年前に始まり、一度休止した後に復活しました。`,
        `私はコロナ禍に運営を引き継ぎ、以来コミュニティを運営しています。かしこまったミーティングではなく、定期的なディナーを軸に、メンバー同士で情報交換をし、起業の苦しい局面を支え合う場にしています。`,
        `常時およそ6〜10名が暮らしており、その多くは初日から米国市場を狙うプレシード〜シードのファウンダー。住まいであると同時に情報のハブとして機能しています。`,
      ],
    },
    links: [
      {
        label: 'THE BRIDGE',
        url: 'https://thebridge.jp/2024/06/techhouse-accentureventures',
      },
    ],
  },
  {
    slug: 'wagumi-dao',
    name: { en: 'WagumiDAO', ja: 'WagumiDAO（和組DAO）' },
    role: { en: 'Contributor', ja: 'コントリビューター' },
    summary: {
      en: 'One of Japan’s largest web3 / NFT communities.',
      ja: '日本最大級の web3 / NFT コミュニティ。',
    },
    body: {
      en: [
        `WagumiDAO is one of the largest web3 and NFT communities in Japan, bringing together builders, creators, and the curious to learn and experiment together in the open.`,
        `I've been involved as a contributor, connecting the community with the founder and Silicon Valley ecosystems I work in.`,
      ],
      ja: [
        `WagumiDAO（和組DAO）は、日本最大級の web3 / NFT コミュニティのひとつ。ビルダー・クリエイター・好奇心のある人々が集まり、オープンに学び合い、実験を重ねています。`,
        `私はコントリビューターとして関わり、自分が身を置く起業家・シリコンバレーのエコシステムとコミュニティをつなぐ役割を担ってきました。`,
      ],
    },
    links: [
      { label: 'wagumi.xyz', url: 'https://wagumi.xyz/' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/eisukehirata/' },
    ],
    images: ['/communities/wagumi-dao.png'],
  },
  {
    slug: 'llm-mushoku-meetup',
    name: { en: 'LLM Mushoku Meetup', ja: 'LLM無職Meetup' },
    role: { en: 'Organizer', ja: '主催' },
    summary: {
      en: 'An early Tokyo meetup for people experimenting hands-on with LLMs.',
      ja: 'LLM を実際に触って試す人たちのための、東京の初期 Meetup。',
    },
    body: {
      en: [
        `LLM Mushoku Meetup was a Tokyo gathering I organized in the early days of the LLM wave, for people who were heads-down building and experimenting with large language models.`,
        `The goal was simple: get the people actually shipping with LLMs into one room to trade notes before any of it was mainstream.`,
      ],
      ja: [
        `LLM無職Meetup は、LLM の波が来はじめた初期に私が主催した東京のミートアップです。大規模言語モデルを実際に触り、手を動かして実験している人たちのための場でした。`,
        `狙いはシンプルで、まだ世間で当たり前になる前に、LLM で実際にものを作っている人たちを一堂に集めて知見を交換することでした。`,
      ],
    },
    links: [
      { label: 'X (Twitter)', url: 'https://x.com/eisuke_hrt/status/1652159396762521600' },
    ],
    images: [
      '/communities/llm-mushoku-meetup-1.jpg',
      '/communities/llm-mushoku-meetup-2.jpg',
      '/communities/llm-mushoku-meetup-3.jpg',
    ],
  },
  {
    slug: 'founder-friday-tokyo',
    name: { en: 'Founder Friday Tokyo Kick Off', ja: 'Founder Friday 東京 Kick Off' },
    role: { en: 'Host', ja: '主催' },
    summary: {
      en: 'The Tokyo kick-off of Founder Friday, a recurring gathering for founders.',
      ja: '起業家のための定期コミュニティ「Founder Friday」東京版の立ち上げ。',
    },
    body: {
      en: [
        `Founder Friday is a recurring, founder-first gathering, and I hosted the kick-off that brought it to Tokyo.`,
        `It's built to give founders a regular, low-friction place to meet peers, swap war stories, and build the relationships that carry companies through the early years.`,
      ],
      ja: [
        `Founder Friday は起業家を主役にした定期的な集まりで、私はそれを東京で立ち上げる Kick Off を主催しました。`,
        `起業家が気軽に集まり、仲間と出会い、失敗談を交換し、創業期を支える関係を築ける——そんな定期的な場をつくることを目指しています。`,
      ],
    },
    links: [
      { label: 'X (Twitter)', url: 'https://x.com/eisuke_hrt/status/1753273054506225808' },
    ],
    images: [
      '/communities/founder-friday-tokyo-1.jpg',
      '/communities/founder-friday-tokyo-2.jpg',
      '/communities/founder-friday-tokyo-3.jpg',
    ],
  },
  {
    slug: 'greg-isenberg-meetup',
    name: { en: 'Meetup with Greg Isenberg', ja: 'Greg Isenberg Meetup' },
    role: { en: 'Co-organizer', ja: '共同主催' },
    summary: {
      en: 'A Tokyo meetup on community building with Greg Isenberg, "Mr. Community."',
      ja: '"Mr. Community" こと Greg Isenberg を招いた、コミュニティづくりがテーマの東京 Meetup。',
    },
    body: {
      en: [
        `I co-organized a Tokyo meetup with Greg Isenberg — CEO of Late Checkout and widely known as "Mr. Community" for his work on building online communities.`,
        `Held in Shibuya and run bilingually in English and Japanese, the evening paired a talk from Greg with Q&A and networking, aimed at founders and investors thinking about community building and going global. Co-organized with Kei Watanabe and Taiku Uchimaru.`,
      ],
      ja: [
        `オンラインコミュニティ構築の第一人者として "Mr. Community" と呼ばれる Late Checkout CEO の Greg Isenberg を招き、東京でミートアップを共同主催しました。`,
        `会場は渋谷、英語と日本語のバイリンガルで進行。Greg のトークに加えて Q&A とネットワーキングを行い、コミュニティづくりやグローバル展開を考える起業家・投資家に向けた会となりました。渡辺慶・内丸太貴との共同主催です。`,
      ],
    },
    links: [
      { label: 'Luma', url: 'https://luma.com/greg_meetup_tokyo' },
      { label: 'X (Twitter)', url: 'https://x.com/eisuke_hrt/status/1710561009449279721' },
    ],
    images: [
      '/communities/greg-isenberg-meetup-1.jpg',
      '/communities/greg-isenberg-meetup-2.jpg',
      '/communities/greg-isenberg-meetup-3.jpg',
      '/communities/greg-isenberg-meetup-4.jpg',
      '/communities/greg-isenberg-meetup-5.jpg',
    ],
  },
]

export function getCommunity(slug: string) {
  return communities.find((c) => c.slug === slug)
}
