import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to articles
          </Link>

          <article>
            <Badge variant="secondary" className="mb-4">
              TypeScript
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              Understanding TypeScript Generics
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-12 pb-8 border-b border-border">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                Jan 10, 2024
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />6 min read
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                TypeScript ကို သုံးပြီး code ရေးတဲ့အခါ reusable, flexible, type-safe ဖြစ်အောင်လုပ်ချင်ရင် Generics ကို မသိမဖြစ် သိထားရပါတယ်။ ဒီ article မှာ TypeScript Generics ဆိုတာဘာလဲ၊ ဘာကြောင့်အသုံးဝင်လဲ၊ practical example တွေနဲ့ တစ်ဆင့်ချင်းရှင်းပြပါမယ်။
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Getting Started</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Generics ဆိုတာ “type ကို parameter အနေနဲ့ လက်ခံနိုင်တဲ့ mechanism” လို့ နားလည်လို့ရပါတယ်။ Function, interface, class အမျိုးမျိုးမှာ type safety နဲ့ reusability တိုးစေဖို့အသုံးပြုနိုင်ပါတယ်။
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Why Generics Matter</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Generics သုံးရတဲ့အဓိက အကြောင်းရင်း ၃ ခုရှိပါတယ်။ Type Safety, Reusability, Better Developer Experience ဖြစ်ပြီး, error တွေကို compile time မှာတင်ဖမ်းနိုင်ပါတယ်။
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                TypeScript Generics ကိုနားလည်သွားရင် code duplication လျော့တယ်, type safety တိုးတယ်, project ကြီးလာတာနဲ့အမျှ maintain လုပ်ရလွယ်တယ်။ Generics နဲ့ အလုပ်လုပ်တာနဲ့ TypeScript level တစ်ဆင့် မြင့်သွားတာကို ခံစားနိုင်ပါလိမ့်မယ်။
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}
