# Strategia di Migrazione SEO da servertesting.it a bekboard.it

## Passaggi Immediati da Eseguire

### 1. Configurazione Google Search Console
- [ ] Aggiungere bekboard.it a Google Search Console
- [ ] Verificare la proprietà del dominio bekboard.it
- [ ] Inviare la sitemap: https://bekboard.it/sitemap.xml
- [ ] Richiedere l'indicizzazione delle pagine principali

### 2. Gestione del Dominio servertesting.it
- [ ] Configurare redirect 301 da servertesting.it/* a bekboard.it/*
- [ ] Aggiornare robots.txt su servertesting.it per bloccare l'indicizzazione
- [ ] Utilizzare Google Search Console per rimuovere URL obsoleti

### 3. Ottimizzazioni SEO Implementate
✅ Meta tag ottimizzati per "Bekboard", "bekboard studio", "bekboard.it"
✅ Title tag migliorati con keyword principali
✅ Meta description ottimizzata
✅ Open Graph e Twitter Card configurati
✅ Canonical URL impostato su bekboard.it
✅ Robots.txt aggiornato
✅ Sitemap ottimizzata per bekboard.it

### 4. Keyword Target
- bekboard
- bekboard studio
- bekboard.it
- produzione video professionale
- branded content
- videoclip musicali
- documentari
- spot pubblicitari

### 5. Monitoraggio Post-Migrazione
- [ ] Monitorare posizioni su Google per le keyword target
- [ ] Verificare che i redirect 301 funzionino correttamente
- [ ] Controllare che la sitemap sia indicizzata
- [ ] Monitorare errori 404 e correggerli

## Comandi per Generare la Sitemap

```bash
# Genera la sitemap per bekboard.it
npm run build:sitemap

# Build del progetto
npm run build
```

## Note Importanti
- La migrazione può richiedere 2-4 settimane per essere completata
- I redirect 301 trasferiscono il "link juice" al nuovo dominio
- Google Search Console è essenziale per monitorare il processo
