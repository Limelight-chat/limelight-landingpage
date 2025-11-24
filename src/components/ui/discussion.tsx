import React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ArrowBigDown, ArrowBigUp, MessageSquare, Share2, Flag, MoreHorizontal, MinusCircle, PlusCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { cn } from "@/lib/utils"

export function DiscussionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        "relative",
        className,
      )}
      {...props}
    />
  )
}

export function DiscussionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Header>) {
  return (
    <AccordionPrimitive.Header className={cn("flex gap-2", className)} {...props}>
      {children}
    </AccordionPrimitive.Header>
  )
}

export function DiscussionAvatar({
  className,
  src,
  fallback,
  alt,
  ...props
}: React.ComponentProps<typeof Avatar> & { src?: string, fallback?: string, alt?: string }) {
  return (
    <div className="flex flex-col items-center">
      <Avatar className={cn("h-6 w-6 md:h-8 md:w-8 z-10", className)} {...props}>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      {/* Thread line placeholder - will be handled by parent/siblings */}
    </div>
  )
}

export function DiscussionAuthor({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-2 text-xs text-muted-foreground mb-1", className)} {...props}>
      {children}
    </div>
  )
}

export function DiscussionBody({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("text-sm leading-relaxed text-foreground/90 mt-0.5", className)} {...props}>
      {children}
    </div>
  )
}

export function DiscussionActions({
  className,
  votes = 0,
  ...props
}: React.ComponentProps<"div"> & { votes?: number | string }) {
  return (
    <div className={cn("flex items-center gap-2 mt-2", className)} {...props}>
      {/* Vote Buttons */}
      <div className="flex items-center gap-1 bg-muted/30 rounded-full px-1.5 py-0.5 mr-2">
        <button className="text-muted-foreground hover:text-orange-500 hover:bg-orange-500/10 rounded-full p-0.5 transition-colors">
          <ArrowBigUp className="h-5 w-5" />
        </button>
        <span className="text-xs font-bold text-muted-foreground min-w-[1.5ch] text-center">{votes}</span>
        <button className="text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 rounded-full p-0.5 transition-colors">
          <ArrowBigDown className="h-5 w-5" />
        </button>
      </div>

      <button className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:bg-muted/50 px-2 py-1 rounded-full transition-colors">
        <MessageSquare className="h-4 w-4" />
        <span className="hidden sm:inline">Reply</span>
      </button>
      <button className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:bg-muted/50 px-2 py-1 rounded-full transition-colors">
        <Share2 className="h-4 w-4" />
        <span className="hidden sm:inline">Share</span>
      </button>
      <button className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:bg-muted/50 px-2 py-1 rounded-full transition-colors">
        <MoreHorizontal className="h-4 w-4" />
      </button>
    </div>
  )
}


export function DiscussionReplies({
  children,
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "pl-2 ml-2 md:pl-4 md:ml-4 border-l-2 border-border/40 mt-1 overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className,
      )}
      {...props}
    >
      <div className="pt-2 flex flex-col gap-3">
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export function Discussion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" className={cn("flex flex-col gap-4", className)} {...props} />
}
