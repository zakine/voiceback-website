import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    // Vérifier que les variables d'environnement sont configurées
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json(
        { error: 'Variables Supabase non configurées dans Vercel' },
        { status: 500 }
      )
    }

    const { email, language } = await request.json()

    // Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email valide requis' },
        { status: 400 }
      )
    }

    if (!['es', 'en', 'pt'].includes(language)) {
      return NextResponse.json(
        { error: 'Langue non supportée' },
        { status: 400 }
      )
    }

    // Vérifier si l'email existe déjà
    const { data: existingUser, error: checkError } = await supabase
      .from('early_access_signups')
      .select('email')
      .eq('email', email)
      .single()

    if (existingUser) {
      return NextResponse.json(
        { error: 'Cet email est déjà inscrit' },
        { status: 409 }
      )
    }

    // Ajouter à Supabase
    const { data, error: insertError } = await supabase
      .from('early_access_signups')
      .insert([
        {
          email,
          language,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (insertError) {
      console.error('Erreur Supabase:', insertError)
      return NextResponse.json(
        { error: 'Erreur lors de l\'inscription' },
        { status: 500 }
      )
    }

    // Envoyer email de confirmation via Resend
    const emailContent = getEmailContent(language)

    try {
      await resend.emails.send({
        from: 'Voiceback <hello@voiceback.io>',
        to: [email],
        subject: emailContent.subject,
        html: emailContent.html
      })
    } catch (emailError) {
      console.error('Erreur Resend:', emailError)
      // On continue même si l'email échoue, l'inscription est enregistrée
    }

    return NextResponse.json({
      success: true,
      message: 'Inscription réussie'
    })

  } catch (error) {
    console.error('Erreur API:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}

function getEmailContent(language: 'es' | 'en' | 'pt') {
  const content = {
    es: {
      subject: '🚀 ¡Bienvenido al early access de Voiceback!',
      html: `
        <h2>🎉 ¡Genial! Estás en la lista</h2>
        <p>Gracias por unirte al early access de Voiceback.</p>
        <p>Te contactaremos pronto cuando tengamos noticias sobre el lanzamiento.</p>
        <p>Mientras tanto, síguenos en nuestras redes sociales para estar al día.</p>
        <br>
        <p>¡Gracias!<br>El equipo de Voiceback</p>
      `
    },
    en: {
      subject: '🚀 Welcome to Voiceback early access!',
      html: `
        <h2>🎉 Great! You're on the list</h2>
        <p>Thanks for joining Voiceback's early access.</p>
        <p>We'll contact you soon when we have launch news.</p>
        <p>Meanwhile, follow us on social media to stay updated.</p>
        <br>
        <p>Thank you!<br>The Voiceback team</p>
      `
    },
    pt: {
      subject: '🚀 Bem-vindo ao early access da Voiceback!',
      html: `
        <h2>🎉 Ótimo! Você está na lista</h2>
        <p>Obrigado por se juntar ao early access da Voiceback.</p>
        <p>Entraremos em contato em breve quando tivermos notícias sobre o lançamento.</p>
        <p>Enquanto isso, siga-nos nas redes sociais para ficar atualizado.</p>
        <br>
        <p>Obrigado!<br>A equipe da Voiceback</p>
      `
    }
  }

  return content[language as keyof typeof content] || content.en
}