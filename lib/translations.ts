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

    hero_eyebrow: 'Número profesional · Listo en minutos',
    hero_h1a: 'Separa tu negocio',
    hero_h1b: 'de tu vida personal.',
    hero_sub: 'Un número profesional para llamadas, WhatsApp e IA. Gestiona chats, pagos y catálogo de tus clientes desde una sola app.',
    store_app_sub: 'Descárgalo en',
    store_play_sub: 'Disponible en',
    social_txt: 'ya venden con Voiceback',

    trust_lead: 'Hecho para LATAM',
    c_brazil: 'Brasil',

    feat_label: 'Por qué Voiceback',
    feat_h: 'Todo tu negocio en un número',
    feat_intro: 'Deja de mezclar clientes con familia. Un número profesional que separa tu trabajo de tu vida personal — con todas las herramientas para vender.',
    feat1_h: 'Un número profesional',
    feat1_p: 'Elige un número local en tu país y empieza a recibir llamadas y WhatsApp de tus clientes — sin usar tu línea personal.',
    feat2_h: 'WhatsApp + Llamadas + IA',
    feat2_p: 'Responde mensajes, contesta llamadas y deja que el asistente de IA responda por ti cuando estás ocupado o fuera de horario.',
    feat3_h: 'Pagos y catálogo',
    feat3_p: 'Cobra con enlaces de pago (Mercado Pago, Wompi, Clip), comparte tu catálogo y envía promociones — todo dentro del chat.',

    how_label: 'Cómo funciona',
    how_h: 'Listo en 3 pasos',
    how1_h: 'Elige tu número',
    how1_p: 'Selecciona tu país y un número profesional disponible. Verifica tu identidad por SMS en segundos.',
    how2_h: 'Conecta tus contactos',
    how2_p: 'Importa tus clientes y avísales tu nuevo número de negocio con un solo toque por WhatsApp.',
    how3_h: 'Empieza a vender',
    how3_p: 'Chatea, cobra, comparte tu catálogo y atiende llamadas — todo desde tu número profesional.',

    tools_label: 'Herramientas',
    tools_h: 'Todo para vender mejor',

    price_label: 'Precios',
    price_h: 'Empieza gratis hoy',
    price_intro: 'Sin tarjeta de crédito. Prueba 14 días con todo incluido.',
    p1_name: 'Starter',
    p1_1: 'Un número profesional',
    p1_2: 'WhatsApp y llamadas',
    p1_3: 'Hasta 100 chats al mes',
    p1_4: 'Catálogo básico',
    p1_cta: 'Empezar gratis',
    p2_tag: '★ Más popular',
    p2_name: 'Pro',
    p2_1: 'Todo lo de Starter',
    p2_2: 'Asistente de IA 24/7',
    p2_3: 'Pagos y enlaces ilimitados',
    p2_4: 'Difusión y campañas',
    p2_5: 'Chats ilimitados',
    p2_cta: 'Probar Pro 14 días',

    cta_h: 'Tu número de negocio te espera',
    cta_p: 'Descarga Voiceback y separa tu negocio de tu vida personal hoy mismo.',

    foot_tag: 'Tu número de negocio. Tus clientes. Una sola app. Hecho para emprendedores de LATAM.',
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

    hero_eyebrow: 'Professional number · Ready in minutes',
    hero_h1a: 'Separate your business',
    hero_h1b: 'from your personal life.',
    hero_sub: 'One professional number for calls, WhatsApp and AI. Manage customer chats, payments and catalog from a single app.',
    store_app_sub: 'Download on the',
    store_play_sub: 'Get it on',
    social_txt: 'already sell with Voiceback',

    trust_lead: 'Built for LATAM',
    c_brazil: 'Brazil',

    feat_label: 'Why Voiceback',
    feat_h: 'Your whole business in one number',
    feat_intro: 'Stop mixing customers with family. A professional number that separates work from personal life — with every tool you need to sell.',
    feat1_h: 'A professional number',
    feat1_p: 'Pick a local number in your country and start receiving calls and WhatsApp from customers — without using your personal line.',
    feat2_h: 'WhatsApp + Calls + AI',
    feat2_p: 'Reply to messages, answer calls and let the AI assistant respond for you when you\'re busy or after hours.',
    feat3_h: 'Payments & catalog',
    feat3_p: 'Charge with payment links (Mercado Pago, Wompi, Clip), share your catalog and send promos — all inside the chat.',

    how_label: 'How it works',
    how_h: 'Ready in 3 steps',
    how1_h: 'Choose your number',
    how1_p: 'Select your country and an available professional number. Verify your identity by SMS in seconds.',
    how2_h: 'Connect your contacts',
    how2_p: 'Import your customers and tell them your new business number with one tap on WhatsApp.',
    how3_h: 'Start selling',
    how3_p: 'Chat, get paid, share your catalog and take calls — all from your professional number.',

    tools_label: 'Tools',
    tools_h: 'Everything to sell better',

    price_label: 'Pricing',
    price_h: 'Start free today',
    price_intro: 'No credit card. 14-day trial with everything included.',
    p1_name: 'Starter',
    p1_1: 'One professional number',
    p1_2: 'WhatsApp and calls',
    p1_3: 'Up to 100 chats per month',
    p1_4: 'Basic catalog',
    p1_cta: 'Start free',
    p2_tag: '★ Most popular',
    p2_name: 'Pro',
    p2_1: 'Everything in Starter',
    p2_2: '24/7 AI assistant',
    p2_3: 'Unlimited payments & links',
    p2_4: 'Broadcast & campaigns',
    p2_5: 'Unlimited chats',
    p2_cta: 'Try Pro 14 days',

    cta_h: 'Your business number is waiting',
    cta_p: 'Download Voiceback and separate your business from your personal life today.',

    foot_tag: 'Your business number. Your customers. One app. Built for LATAM entrepreneurs.',
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

    hero_eyebrow: 'Número profissional · Pronto em minutos',
    hero_h1a: 'Separe seu negócio',
    hero_h1b: 'da sua vida pessoal.',
    hero_sub: 'Um número profissional para chamadas, WhatsApp e IA. Gerencie conversas, pagamentos e catálogo dos seus clientes em um só app.',
    store_app_sub: 'Baixe na',
    store_play_sub: 'Disponível no',
    social_txt: 'já vendem com a Voiceback',

    trust_lead: 'Feito para a América Latina',
    c_brazil: 'Brasil',

    feat_label: 'Por que Voiceback',
    feat_h: 'Todo o seu negócio em um número',
    feat_intro: 'Pare de misturar clientes com família. Um número profissional que separa seu trabalho da sua vida pessoal — com todas as ferramentas para vender.',
    feat1_h: 'Um número profissional',
    feat1_p: 'Escolha um número local no seu país e comece a receber chamadas e WhatsApp dos seus clientes — sem usar sua linha pessoal.',
    feat2_h: 'WhatsApp + Chamadas + IA',
    feat2_p: 'Responda mensagens, atenda chamadas e deixe o assistente de IA responder por você quando estiver ocupado ou fora do horário.',
    feat3_h: 'Pagamentos e catálogo',
    feat3_p: 'Cobre com links de pagamento (Pix, Mercado Pago, PagSeguro), compartilhe seu catálogo e envie promoções — tudo dentro da conversa.',

    how_label: 'Como funciona',
    how_h: 'Pronto em 3 passos',
    how1_h: 'Escolha seu número',
    how1_p: 'Selecione seu país e um número profissional disponível. Verifique sua identidade por SMS em segundos.',
    how2_h: 'Conecte seus contatos',
    how2_p: 'Importe seus clientes e avise o novo número comercial com um toque pelo WhatsApp.',
    how3_h: 'Comece a vender',
    how3_p: 'Converse, cobre, compartilhe seu catálogo e atenda chamadas — tudo pelo seu número profissional.',

    tools_label: 'Ferramentas',
    tools_h: 'Tudo para vender melhor',

    price_label: 'Preços',
    price_h: 'Comece grátis hoje',
    price_intro: 'Sem cartão de crédito. Teste 14 dias com tudo incluído.',
    p1_name: 'Starter',
    p1_1: 'Um número profissional',
    p1_2: 'WhatsApp e chamadas',
    p1_3: 'Até 100 conversas por mês',
    p1_4: 'Catálogo básico',
    p1_cta: 'Começar grátis',
    p2_tag: '★ Mais popular',
    p2_name: 'Pro',
    p2_1: 'Tudo do Starter',
    p2_2: 'Assistente de IA 24/7',
    p2_3: 'Pagamentos e links ilimitados',
    p2_4: 'Transmissão e campanhas',
    p2_5: 'Conversas ilimitadas',
    p2_cta: 'Testar Pro 14 dias',

    cta_h: 'Seu número comercial está esperando',
    cta_p: 'Baixe a Voiceback e separe seu negócio da sua vida pessoal hoje mesmo.',

    foot_tag: 'Seu número comercial. Seus clientes. Um só app. Feito para empreendedores da América Latina.',
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