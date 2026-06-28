export type Language = 'es' | 'en' | 'pt';

export interface Translations {
  // Navigation
  nav_product: string;
  nav_how: string;
  nav_tools: string;
  nav_pricing: string;
  nav_cta: string;

  // Hero
  hero_eyebrow: string;
  hero_h1a: string;
  hero_h1b: string;
  hero_sub: string;
  store_app_sub: string;
  store_play_sub: string;
  social_txt: string;

  // Trust
  trust_lead: string;
  c_brazil: string;

  // Features
  feat_label: string;
  feat_h: string;
  feat_intro: string;
  feat1_h: string;
  feat1_p: string;
  feat2_h: string;
  feat2_p: string;
  feat3_h: string;
  feat3_p: string;

  // How it works
  how_label: string;
  how_h: string;
  how1_h: string;
  how1_p: string;
  how2_h: string;
  how2_p: string;
  how3_h: string;
  how3_p: string;

  // Tools
  tools_label: string;
  tools_h: string;

  // Pricing
  price_label: string;
  price_h: string;
  price_intro: string;
  p1_name: string;
  p1_1: string;
  p1_2: string;
  p1_3: string;
  p1_4: string;
  p1_cta: string;
  p2_tag: string;
  p2_name: string;
  p2_1: string;
  p2_2: string;
  p2_3: string;
  p2_4: string;
  p2_5: string;
  p2_cta: string;

  // CTA
  cta_h: string;
  cta_p: string;

  // Footer
  foot_tag: string;
  foot_product: string;
  foot_features: string;
  foot_how: string;
  foot_pricing: string;
  foot_download: string;
  foot_company: string;
  foot_about: string;
  foot_blog: string;
  foot_contact: string;
  foot_legal: string;
  foot_privacy: string;
  foot_terms: string;
  foot_rights: string;
  foot_latam: string;

  // Pricing extras
  price_amount: string;
  price_period: string;
  price_trial: string;
  price_cancel: string;
  price_managed: string;

  // Comparison
  cmp_label: string;
  cmp_h: string;
  cmp_sub: string;
  cmp_feature: string;
  cmp_col1: string;
  cmp_col2: string;
  cmp_recommended: string;
  cmp_f1: string;
  cmp_f2: string;
  cmp_f3: string;
  cmp_f4: string;
  cmp_f5: string;
  cmp_f6: string;
  cmp_f7: string;
  cmp_f8: string;
  cmp_f9: string;
  cmp_yes: string;
  cmp_partial: string;
  cmp_no: string;

  // Beta CTA
  beta_label: string;
  beta_h: string;
  beta_sub: string;
  beta_cta: string;
  beta_wa_msg: string;
  beta_note: string;

  // Phone
  tab_chats: string;
  tab_calls: string;
  tab_contacts: string;
  tab_tools: string;
  tab_settings: string;
  ph_all: string;
  ph_unread: string;
  ph_fav: string;
}

export const translations: Record<Language, Translations> = {
  es: {
    nav_product: 'Producto',
    nav_how: 'Cómo funciona',
    nav_tools: 'Herramientas',
    nav_pricing: 'Precios',
    nav_cta: 'Descargar',

    hero_eyebrow: 'Conecta tu WhatsApp · Listo en 2 minutos',
    hero_h1a: 'Potencia tu WhatsApp.',
    hero_h1b: 'Sin cambiar de número.',
    hero_sub: 'Tu mismo número. Tus mismos clientes. Con catálogo interactivo, IA que responde sola, pagos en el chat y mucho más.',
    store_app_sub: 'Descárgalo en',
    store_play_sub: 'Disponible en',
    social_txt: 'ya usan Voiceback',

    trust_lead: 'Hecho para LATAM',
    c_brazil: 'Brasil',

    feat_label: 'Por qué Voiceback',
    feat_h: 'Tu WhatsApp se convierte en una máquina de ventas',
    feat_intro: 'Sin cambiar de número. Sin migrar contactos. Sin aprender nada nuevo. Solo activa Voiceback y tu WhatsApp hace el resto.',
    feat1_h: 'IA que responde por ti',
    feat1_p: 'El asistente aprende de tu negocio, tu catálogo y tu tono. Responde solo cuando estás ocupado, fuera de horario, o siempre — tú decides.',
    feat2_h: 'Catálogo + pedidos en el chat',
    feat2_p: 'Envía fichas de producto con botones directamente en WhatsApp. Tu cliente toca "Pedir" y el pedido llega a ti. Sin link, sin web, sin fricción.',
    feat3_h: 'Cobros con un solo toque',
    feat3_p: 'Genera un enlace de pago (Mercado Pago, Wompi, Clip) y mándalo en la conversación. Tu cliente paga en segundos, tú ves la confirmación al instante.',

    how_label: 'Cómo funciona',
    how_h: 'Listo en 3 pasos',
    how1_h: 'Conecta tu WhatsApp',
    how1_p: 'Abre la app, ingresa tu número y escanea un código desde WhatsApp. Tu cuenta personal queda intacta — Voiceback se conecta como un dispositivo vinculado.',
    how2_h: 'Configura tu negocio',
    how2_p: 'Sube tu catálogo, activa la IA con las instrucciones de tu negocio y elige tus métodos de pago. Todo en menos de 10 minutos.',
    how3_h: 'Atiende y vende',
    how3_p: 'Desde Voiceback gestionas todos tus chats, envías catálogos interactivos, cobras y dejas que la IA responda mientras haces otra cosa.',

    tools_label: 'Herramientas',
    tools_h: 'Todo para vender mejor',

    price_label: 'Precios',
    price_h: 'Un precio. Todo incluido.',
    price_intro: 'Sin contratos. Sin sorpresas. Cancela cuando quieras desde App Store o Google Play.',
    price_amount: '$29',
    price_period: '/mes',
    price_trial: '5 días gratis · Sin tarjeta de crédito',
    price_cancel: 'Cancela cuando quieras',
    price_managed: 'Gestionado por App Store y Google Play',
    p1_name: 'Esencial',
    p1_1: 'Tu WhatsApp conectado',
    p1_2: 'Catálogo + mensajes interactivos',
    p1_3: 'Pagos con Mercado Pago / Wompi / Clip',
    p1_4: 'Respuestas rápidas y difusión',
    p1_cta: 'Empezar gratis',
    p2_tag: '★ Más popular',
    p2_name: 'Pro',
    p2_1: 'Todo lo del plan Esencial',
    p2_2: 'IA 24/7 — responde sola',
    p2_3: 'Mensaje de bienvenida + catálogo automático',
    p2_4: 'Stories de WhatsApp para promos',
    p2_5: 'Etiquetas y mini CRM',
    p2_cta: 'Empezar 5 días gratis',

    cta_h: 'Tu WhatsApp ya puede vender solo',
    cta_p: 'Activa Voiceback en 2 minutos. Sin cambiar de número, sin complicaciones.',

    foot_tag: 'Potencia tu WhatsApp. Sin cambiar de número. Hecho para emprendedores de LATAM.',
    foot_product: 'Producto',
    foot_features: 'Funciones',
    foot_how: 'Cómo funciona',
    foot_pricing: 'Precios',
    foot_download: 'Descargar',
    foot_company: 'Empresa',
    foot_about: 'Nosotros',
    foot_blog: 'Blog',
    foot_contact: 'Contacto',
    foot_legal: 'Legal',
    foot_privacy: 'Privacidad',
    foot_terms: 'Términos',
    foot_rights: 'Hecho con',
    foot_latam: 'para LATAM',

    cmp_label: 'Comparativa',
    cmp_h: '¿Por qué no alcanza con WhatsApp Business?',
    cmp_sub: 'WhatsApp Business es un buen comienzo. Voiceback es el siguiente nivel.',
    cmp_feature: 'Función',
    cmp_col1: 'WA Personal',
    cmp_col2: 'WA Business',
    cmp_recommended: 'Recomendado',
    cmp_yes: 'Sí',
    cmp_partial: 'Limitado',
    cmp_no: 'No',
    cmp_f1: 'Mensajes con clientes por WhatsApp',
    cmp_f2: 'Perfil de negocio y catálogo',
    cmp_f3: 'Respuestas automáticas',
    cmp_f4: 'Asistente IA 24/7',
    cmp_f5: 'Cobros con enlaces de pago',
    cmp_f6: 'Catálogo interactivo con botones',
    cmp_f7: 'Difusión a contactos',
    cmp_f8: 'Stories para promociones',
    cmp_f9: 'Tu mismo número de siempre',

    beta_label: 'Beta abierta',
    beta_h: 'Prueba Voiceback gratis',
    beta_sub: 'Estamos en beta. Escríbenos por WhatsApp y te enviamos el link de descarga directamente.',
    beta_cta: 'Unirse a la beta por WhatsApp',
    beta_wa_msg: 'Hola, quiero probar Voiceback beta',
    beta_note: 'Gratis durante la beta · Android disponible ahora · iOS próximamente',

    tab_chats: 'Chats',
    tab_calls: 'Llamadas',
    tab_contacts: 'Contactos',
    tab_tools: 'Herramientas',
    tab_settings: 'Ajustes',
    ph_all: 'Todos',
    ph_unread: 'No leídos',
    ph_fav: 'Favoritos',
  },

  en: {
    nav_product: 'Product',
    nav_how: 'How it works',
    nav_tools: 'Tools',
    nav_pricing: 'Pricing',
    nav_cta: 'Download',

    hero_eyebrow: 'Connect your WhatsApp · Ready in 2 minutes',
    hero_h1a: 'Supercharge your WhatsApp.',
    hero_h1b: 'Keep your number.',
    hero_sub: 'Same number. Same contacts. With an interactive catalog, AI that replies on its own, in-chat payments and much more.',
    store_app_sub: 'Download on the',
    store_play_sub: 'Get it on',
    social_txt: 'already use Voiceback',

    trust_lead: 'Built for LATAM',
    c_brazil: 'Brazil',

    feat_label: 'Why Voiceback',
    feat_h: 'Your WhatsApp becomes a sales machine',
    feat_intro: 'No number change. No contact migration. Nothing new to learn. Just activate Voiceback and your WhatsApp does the rest.',
    feat1_h: 'AI that replies for you',
    feat1_p: 'The assistant learns your business, your catalog and your tone. It replies when you\'re busy, after hours, or always — your call.',
    feat2_h: 'Catalog + orders inside the chat',
    feat2_p: 'Send product cards with buttons directly in WhatsApp. Your customer taps "Order" and it comes straight to you. No link, no website, no friction.',
    feat3_h: 'Get paid with one tap',
    feat3_p: 'Generate a payment link (Mercado Pago, Wompi, Clip) and send it in the conversation. Your customer pays in seconds, you see the confirmation instantly.',

    how_label: 'How it works',
    how_h: 'Ready in 3 steps',
    how1_h: 'Connect your WhatsApp',
    how1_p: 'Open the app, enter your number and scan a code from WhatsApp. Your personal account stays untouched — Voiceback connects as a linked device.',
    how2_h: 'Set up your business',
    how2_p: 'Upload your catalog, activate the AI with your business instructions and choose your payment methods. All done in under 10 minutes.',
    how3_h: 'Serve and sell',
    how3_p: 'From Voiceback you manage all your chats, send interactive catalogs, collect payments and let the AI reply while you do something else.',

    tools_label: 'Tools',
    tools_h: 'Everything to sell better',

    price_label: 'Pricing',
    price_h: 'One price. Everything included.',
    price_intro: 'No contracts. No surprises. Cancel anytime from App Store or Google Play.',
    price_amount: '$29',
    price_period: '/month',
    price_trial: '5 days free · No credit card',
    price_cancel: 'Cancel anytime',
    price_managed: 'Managed by App Store and Google Play',
    p1_name: 'Essential',
    p1_1: 'Your WhatsApp connected',
    p1_2: 'Catalog + interactive messages',
    p1_3: 'Payments with Mercado Pago / Wompi / Clip',
    p1_4: 'Quick replies and broadcast',
    p1_cta: 'Start free',
    p2_tag: '★ Most popular',
    p2_name: 'Pro',
    p2_1: 'Everything in Essential',
    p2_2: '24/7 AI — replies on its own',
    p2_3: 'Welcome message + auto catalog',
    p2_4: 'WhatsApp Stories for promos',
    p2_5: 'Labels and mini CRM',
    p2_cta: 'Start 5 days free',

    cta_h: 'Your WhatsApp can already sell on its own',
    cta_p: 'Activate Voiceback in 2 minutes. No number change, no hassle.',

    foot_tag: 'Supercharge your WhatsApp. Keep your number. Built for LATAM entrepreneurs.',
    foot_product: 'Product',
    foot_features: 'Features',
    foot_how: 'How it works',
    foot_pricing: 'Pricing',
    foot_download: 'Download',
    foot_company: 'Company',
    foot_about: 'About',
    foot_blog: 'Blog',
    foot_contact: 'Contact',
    foot_legal: 'Legal',
    foot_privacy: 'Privacy',
    foot_terms: 'Terms',
    foot_rights: 'Made with',
    foot_latam: 'for LATAM',

    cmp_label: 'Comparison',
    cmp_h: 'Why isn\'t WhatsApp Business enough?',
    cmp_sub: 'WhatsApp Business is a good start. Voiceback is the next level.',
    cmp_feature: 'Feature',
    cmp_col1: 'WA Personal',
    cmp_col2: 'WA Business',
    cmp_recommended: 'Recommended',
    cmp_yes: 'Yes',
    cmp_partial: 'Limited',
    cmp_no: 'No',
    cmp_f1: 'Chat with customers on WhatsApp',
    cmp_f2: 'Business profile and catalog',
    cmp_f3: 'Automatic replies',
    cmp_f4: '24/7 AI assistant',
    cmp_f5: 'Payment link collection',
    cmp_f6: 'Interactive catalog with buttons',
    cmp_f7: 'Broadcast to contacts',
    cmp_f8: 'Stories for promotions',
    cmp_f9: 'Keep your existing number',

    beta_label: 'Open beta',
    beta_h: 'Try Voiceback for free',
    beta_sub: 'We\'re in beta. Message us on WhatsApp and we\'ll send you the download link directly.',
    beta_cta: 'Join the beta on WhatsApp',
    beta_wa_msg: 'Hi, I want to try Voiceback beta',
    beta_note: 'Free during beta · Android available now · iOS coming soon',

    tab_chats: 'Chats',
    tab_calls: 'Calls',
    tab_contacts: 'Contacts',
    tab_tools: 'Tools',
    tab_settings: 'Settings',
    ph_all: 'All',
    ph_unread: 'Unread',
    ph_fav: 'Favorites',
  },

  pt: {
    nav_product: 'Produto',
    nav_how: 'Como funciona',
    nav_tools: 'Ferramentas',
    nav_pricing: 'Preços',
    nav_cta: 'Baixar',

    hero_eyebrow: 'Conecte seu WhatsApp · Pronto em 2 minutos',
    hero_h1a: 'Turbine seu WhatsApp.',
    hero_h1b: 'Sem trocar de número.',
    hero_sub: 'Mesmo número. Mesmos contatos. Com catálogo interativo, IA que responde sozinha, pagamentos no chat e muito mais.',
    store_app_sub: 'Baixe na',
    store_play_sub: 'Disponível no',
    social_txt: 'já usam a Voiceback',

    trust_lead: 'Feito para a América Latina',
    c_brazil: 'Brasil',

    feat_label: 'Por que Voiceback',
    feat_h: 'Seu WhatsApp vira uma máquina de vendas',
    feat_intro: 'Sem trocar de número. Sem migrar contatos. Sem aprender nada novo. Só ative a Voiceback e seu WhatsApp faz o resto.',
    feat1_h: 'IA que responde por você',
    feat1_p: 'O assistente aprende sobre seu negócio, seu catálogo e seu tom. Responde quando você está ocupado, fora do horário, ou sempre — você decide.',
    feat2_h: 'Catálogo + pedidos no chat',
    feat2_p: 'Envie fichas de produto com botões direto no WhatsApp. Seu cliente toca "Pedir" e o pedido chega até você. Sem link, sem site, sem fricção.',
    feat3_h: 'Receba pagamentos com um toque',
    feat3_p: 'Gere um link de pagamento (Mercado Pago, PagSeguro, Pix) e mande na conversa. Seu cliente paga em segundos, você vê a confirmação na hora.',

    how_label: 'Como funciona',
    how_h: 'Pronto em 3 passos',
    how1_h: 'Conecte seu WhatsApp',
    how1_p: 'Abra o app, informe seu número e escaneie um código pelo WhatsApp. Sua conta pessoal fica intacta — a Voiceback se conecta como dispositivo vinculado.',
    how2_h: 'Configure seu negócio',
    how2_p: 'Suba seu catálogo, ative a IA com as instruções do seu negócio e escolha seus meios de pagamento. Tudo em menos de 10 minutos.',
    how3_h: 'Atenda e venda',
    how3_p: 'Pela Voiceback você gerencia todos os seus chats, envia catálogos interativos, recebe pagamentos e deixa a IA responder enquanto faz outra coisa.',

    tools_label: 'Ferramentas',
    tools_h: 'Tudo para vender melhor',

    price_label: 'Preços',
    price_h: 'Um preço. Tudo incluído.',
    price_intro: 'Sem contratos. Sem surpresas. Cancele quando quiser pelo App Store ou Google Play.',
    price_amount: '$29',
    price_period: '/mês',
    price_trial: '5 dias grátis · Sem cartão de crédito',
    price_cancel: 'Cancele quando quiser',
    price_managed: 'Gerenciado pelo App Store e Google Play',
    p1_name: 'Essencial',
    p1_1: 'Seu WhatsApp conectado',
    p1_2: 'Catálogo + mensagens interativas',
    p1_3: 'Pagamentos com Mercado Pago / PagSeguro / Pix',
    p1_4: 'Respostas rápidas e transmissão',
    p1_cta: 'Começar grátis',
    p2_tag: '★ Mais popular',
    p2_name: 'Pro',
    p2_1: 'Tudo do plano Essencial',
    p2_2: 'IA 24/7 — responde sozinha',
    p2_3: 'Mensagem de boas-vindas + catálogo automático',
    p2_4: 'Stories do WhatsApp para promos',
    p2_5: 'Etiquetas e mini CRM',
    p2_cta: 'Começar 5 dias grátis',

    cta_h: 'Seu WhatsApp já pode vender sozinho',
    cta_p: 'Ative a Voiceback em 2 minutos. Sem trocar de número, sem complicação.',

    foot_tag: 'Turbine seu WhatsApp. Sem trocar de número. Feito para empreendedores da América Latina.',
    foot_product: 'Produto',
    foot_features: 'Funções',
    foot_how: 'Como funciona',
    foot_pricing: 'Preços',
    foot_download: 'Baixar',
    foot_company: 'Empresa',
    foot_about: 'Sobre',
    foot_blog: 'Blog',
    foot_contact: 'Contato',
    foot_legal: 'Jurídico',
    foot_privacy: 'Privacidade',
    foot_terms: 'Termos',
    foot_rights: 'Feito com',
    foot_latam: 'para a América Latina',

    cmp_label: 'Comparativo',
    cmp_h: 'Por que o WhatsApp Business não é suficiente?',
    cmp_sub: 'O WhatsApp Business é um bom começo. A Voiceback é o próximo nível.',
    cmp_feature: 'Função',
    cmp_col1: 'WA Pessoal',
    cmp_col2: 'WA Business',
    cmp_recommended: 'Recomendado',
    cmp_yes: 'Sim',
    cmp_partial: 'Limitado',
    cmp_no: 'Não',
    cmp_f1: 'Conversar com clientes pelo WhatsApp',
    cmp_f2: 'Perfil comercial e catálogo',
    cmp_f3: 'Respostas automáticas',
    cmp_f4: 'Assistente IA 24/7',
    cmp_f5: 'Cobrança com links de pagamento',
    cmp_f6: 'Catálogo interativo com botões',
    cmp_f7: 'Transmissão para contatos',
    cmp_f8: 'Stories para promoções',
    cmp_f9: 'Mesmo número de sempre',

    beta_label: 'Beta aberta',
    beta_h: 'Experimente a Voiceback de graça',
    beta_sub: 'Estamos em beta. Mande uma mensagem pelo WhatsApp e enviamos o link de download direto.',
    beta_cta: 'Entrar na beta pelo WhatsApp',
    beta_wa_msg: 'Olá, quero testar a Voiceback beta',
    beta_note: 'Grátis durante a beta · Android disponível agora · iOS em breve',

    tab_chats: 'Conversas',
    tab_calls: 'Chamadas',
    tab_contacts: 'Contatos',
    tab_tools: 'Ferramentas',
    tab_settings: 'Ajustes',
    ph_all: 'Todas',
    ph_unread: 'Não lidas',
    ph_fav: 'Favoritas',
  },
};