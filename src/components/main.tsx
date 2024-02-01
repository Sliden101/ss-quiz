/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/eahDwHBglcM
 */
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export function Main() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-10">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Conspiracy Confirmed?</h1>
      </header>
      <main className="space-y-16">
        <section className="space-y-8" id="articles">
          <header className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Featured Articles</h2>
            <p className="text-lg text-gray-600">Explore the truth with our in-depth investigative articles.</p>
          </header>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <h3 className="font-semibold text-lg">5G Covid-19</h3>
                <Badge className="mt-2" variant="secondary">
                  Topic
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">In the realm of pandemic-induced conspiracies, the alleged connection between 5G technology and the spread of COVID-19 has captured attention. This brief investigation delves into the heart of the matter, aiming to reveal whether the 5G-COVID conspiracy is grounded in truth or merely a hoax. Through a focused analysis of credible sources and the integration of critical thinking habits, we embark on a journey to separate fact from fiction.</p>
                <Link className="mt-4" href="/article1">
                  Read More
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="font-semibold text-lg">Title of Article 2</h3>
                <Badge className="mt-2" variant="secondary">
                  Topic
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Summary of Article 2...</p>
                <Link className="mt-4" href="/article2">
                  Read More
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="font-semibold text-lg">Title of Article 3</h3>
                <Badge className="mt-2" variant="secondary">
                  Topic
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Summary of Article 3...</p>
                <Link className="mt-4" href="#">
                  Read More
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}