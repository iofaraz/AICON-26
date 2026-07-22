import Image from 'next/image'
import { cn } from '@/lib/utils'

export function AiconWordmark({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <span className="relative inline-flex h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-border bg-white/5 shadow-[0_12px_30px_-16px_rgba(0,0,0,0.6)]">
        <Image
          src="/logo.png"
          alt="AICON '26 logo"
          fill
          sizes="48px"
          className="object-cover"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-foreground">
          AICON<span className="text-gold">&apos;26</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.34em] text-muted-foreground">
          NUST SEECS
        </span>
      </span>
    </span>
  )
}
