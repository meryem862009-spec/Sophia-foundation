
import Link from 'next/link'

export default function Home(){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Hope. Research. Support.<br/> Together for children with <span className="text-gold">DIPG</span>.
        </h1>
        <p className="text-lg text-slate-700">
          The Sophia Foundation funds research, supports affected families, and spreads awareness.
          Your gift today moves us closer to better treatments.
        </p>
        <div className="flex gap-3">
          <Link href="/donate" className="btn btn-primary">Donate Now</Link>
          <Link href="/impact" className="btn btn-outline">See Our Impact</Link>
        </div>
      </div>
      <div className="card">
        <h3 className="text-xl font-semibold mb-3">What we do</h3>
        <ul className="space-y-2 text-slate-700 list-disc pl-6">
          <li>Fund targeted pediatric brain tumor research (DIPG).</li>
          <li>Provide compassionate resources for families.</li>
          <li>Raise awareness through community events and education.</li>
        </ul>
      </div>
    </section>
  )
}
