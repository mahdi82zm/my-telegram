'use client'

import { useRouter } from 'next/navigation'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { LucideLogOut } from 'lucide-react'
import { cn } from '@/lib/utils'

export function LogoutButton() {
  const router = useRouter()

  const logout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/auth/login')
  }

  return <Button className={cn("bg-primary-foreground text-primary hover:bg-accent")} onClick={logout}>
    <LucideLogOut className={cn('')}/>
    Logout</Button>
}
