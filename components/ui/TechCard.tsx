'use client'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TechCardProps {
  icon: LucideIcon
  title: string
  description: string
  index?: number
  className?: string
  tag?: string
}

export function TechCard({ icon: Icon, title, description, index = 0, className, tag = "feature" }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className={cn(
        "group relative bg-brand-deep/80 border border-brand-crimson/20 p-5 rounded-sm backdrop-blur-md",
        "hover:border-brand-crimson/60 hover:shadow-[0_0_40px_rgba(112,2,37,0.2)]",
        "transition-all duration-300 overflow-hidden",
        className
      )}
    >
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-brand-crimson/50 group-hover:border-brand-crimson transition-colors" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-brand-crimson/50 group-hover:border-brand-crimson transition-colors" />

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-brand-crimson/10 border border-brand-crimson/30 rounded-sm group-hover:bg-brand-crimson/20 transition-all duration-300">
          <Icon className="w-5 h-5 text-brand-crimson" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-0.5">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-brand-crimson/80">
            {tag}
          </p>
          <h3 className="text-sm font-bold text-brand-white group-hover:text-brand-crimson transition-colors">{title}</h3>
          <p className="text-[11px] text-brand-dim leading-snug">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
