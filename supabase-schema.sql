-- Création de la table pour les inscriptions early access
CREATE TABLE early_access_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  language VARCHAR(2) NOT NULL CHECK (language IN ('es', 'en', 'pt')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour améliorer les performances des recherches par email
CREATE INDEX idx_early_access_email ON early_access_signups(email);

-- Index pour les requêtes par date
CREATE INDEX idx_early_access_created_at ON early_access_signups(created_at);

-- RLS (Row Level Security) - optionnel mais recommandé
ALTER TABLE early_access_signups ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre les insertions (pour l'API)
CREATE POLICY "Enable insert for all users" ON early_access_signups
    FOR INSERT WITH CHECK (true);

-- Politique pour permettre la lecture (pour l'admin/dashboard)
CREATE POLICY "Enable read for authenticated users" ON early_access_signups
    FOR SELECT USING (auth.role() = 'authenticated');