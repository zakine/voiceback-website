import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Compter le nombre total d'inscriptions
    const { count, error } = await supabase
      .from('early_access_signups')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Erreur Supabase count:', error)
      // Retourner valeur par défaut en cas d'erreur
      return NextResponse.json({
        count: 47,
        total: 100,
        spotsLeft: 53
      })
    }

    const totalSignups = count || 0
    const totalSpots = 100
    const spotsLeft = Math.max(0, totalSpots - totalSignups)

    return NextResponse.json({
      count: totalSignups,
      total: totalSpots,
      spotsLeft
    })

  } catch (error) {
    console.error('Erreur API count:', error)
    // Retourner valeur par défaut en cas d'erreur
    return NextResponse.json({
      count: 47,
      total: 100,
      spotsLeft: 53
    })
  }
}