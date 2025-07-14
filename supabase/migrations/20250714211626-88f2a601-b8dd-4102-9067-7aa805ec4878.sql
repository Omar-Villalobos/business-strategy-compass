
-- Crear tabla para almacenar los formularios de contacto
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  executive_name TEXT NOT NULL,
  executive_position TEXT NOT NULL,
  email TEXT NOT NULL,
  company_name TEXT NOT NULL,
  industry TEXT NOT NULL,
  company_size TEXT NOT NULL,
  annual_revenue TEXT NOT NULL,
  project_priority TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  processed BOOLEAN DEFAULT false
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserción pública (formularios pueden ser enviados sin autenticación)
CREATE POLICY "Allow public insertions" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Política para permitir lectura solo a usuarios autenticados (para administración)
CREATE POLICY "Allow authenticated read" 
  ON public.contact_submissions 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
