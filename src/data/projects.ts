export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  github?: string;
  link?: string;
  features: string[];
  securityMeasures: string[];
}

export const allProjects: Project[] = [
  {
    id: 'imobiliaria-luxo-cyber',
    title: 'Portal Imobiliário Nexo',
    category: 'Imobiliária',
    description: 'Plataforma de alta performance para imobiliárias de luxo com tours virtuais e agendamento seguro.',
    fullDescription: 'O Nexo é uma plataforma imobiliária projetada para conectar compradores de alta renda a propriedades exclusivas. Conta com integração para renderização de plantas em 3D, agendamento criptografado de visitas presenciais e controle de acesso biométrico para os corretores.',
    problem: 'Sistemas tradicionais de imobiliárias sofrem com vazamento de dados de proprietários de alto padrão e carregamento lento de imagens pesadas.',
    solution: 'Implementação de renderização estática avançada com Next.js, otimização automática de imagens de ultra-alta resolução e criptografia ponta a ponta em propostas financeiras.',
    tech: ['Next.js', 'React', 'Three.js', 'Tailwind CSS', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com',
    features: [
      'Tours virtuais integrados',
      'Agendamento de visitas com confirmação via SMS',
      'Filtros dinâmicos com busca inteligente',
      'Chat em tempo real com criptografia de mensagens'
    ],
    securityMeasures: [
      'Criptografia de ponta a ponta em dados cadastrais de proprietários',
      'Proteção contra ataques de negação de serviço (DDoS)',
      'Autenticação multifator para administradores',
      'Isolamento de banco de dados por inquilino'
    ]
  },
  {
    id: 'imobiliaria-arrenda-facil',
    title: 'Arrenda Fácil',
    category: 'Imobiliária',
    description: 'Sistema de gerenciamento de contratos de aluguel e vistorias digitais automatizadas.',
    fullDescription: 'Plataforma SaaS que automatiza toda a jornada de locação imobiliária, desde o cadastro do imóvel, passando pela análise de crédito segura do inquilino, até a assinatura digital do contrato e controle de pagamentos.',
    problem: 'Processos manuais excessivamente lentos de vistoria e riscos associados à assinatura de contratos sem validação legal forte.',
    solution: 'Painel automatizado com fluxos integrados de assinatura digital juridicamente válida e OCR para verificação automática de documentos.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Express'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com',
    features: [
      'Assinatura eletrônica de contratos integrada',
      'Vistoria interativa via aplicativo mobile',
      'Notificações automatizadas de cobrança via WhatsApp',
      'Relatórios financeiros de rendimentos para proprietários'
    ],
    securityMeasures: [
      'Verificação e validação de identidade (KYC) automatizada',
      'Assinaturas criptografadas com carimbo de tempo ICP-Brasil',
      'Backups diários e redundância geográfica dos arquivos de contrato',
      'Controle de acesso granular baseado em papéis (RBAC)'
    ]
  },
  {
    id: 'imobiliaria-geo-imoveis',
    title: 'GeoImóveis Analytics',
    category: 'Imobiliária',
    description: 'Mapeamento e inteligência geográfica para investimentos e prospecção imobiliária.',
    fullDescription: 'Plataforma geoespacial de análise de mercado imobiliário. Permite que construtoras e investidores identifiquem tendências de valorização por metro quadrado através de mapas interativos de alta precisão baseados em inteligência artificial.',
    problem: 'Dificuldade em compilar dados demográficos, índices de criminalidade e tendências de mercado de forma integrada para guiar novos lançamentos.',
    solution: 'Uso das APIs do Google Maps Platform combinadas com processamento de big data geoespacial para gerar visualizações ricas sobrepostas a mapas urbanos.',
    tech: ['React', 'D3.js', 'Google Maps API', 'Python', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com',
    features: [
      'Mapas de calor de preço por metro quadrado',
      'Análise preditiva de valorização do solo',
      'Filtro por proximidade de pontos de interesse (escolas, metrôs)',
      'Exportação de relatórios demográficos detalhados'
    ],
    securityMeasures: [
      'Autenticação OAuth2 rigorosa',
      'Mascaramento de dados para preservar a privacidade de negociações',
      'Proteção rígida contra roubo de dados de mapa e scrapping',
      'Auditoria constante de acessos às APIs'
    ]
  },
  {
    id: 'loja-alpha-store',
    title: 'Alpha Tech Store',
    category: 'Loja Online',
    description: 'E-commerce de hardware de alto desempenho e segurança de transações.',
    fullDescription: 'Loja virtual otimizada para a venda de computadores e periféricos premium. Projetada para suportar picos extremos de tráfego de lançamentos de produtos com latência quase nula e checkout imbatível.',
    problem: 'Lojas online costumam sofrer de sequestro de sessão, bots esgotando estoques fraudulentamente e ataques no checkout.',
    solution: 'Construção com Next.js incremental e proteção sofisticada contra robôs e ataques DDoS diretamente na camada de rede.',
    tech: ['Next.js', 'Tailwind CSS', 'Stripe', 'Redis', 'GraphQL'],
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com',
    features: [
      'Carrinho de compras persistente de ultra-alta velocidade',
      'Checkout otimizado de um clique',
      'Painel administrativo intuitivo de gerenciamento de estoque',
      'Recomendações inteligentes baseadas em IA'
    ],
    securityMeasures: [
      'Tokenização total de pagamentos via Stripe (PCI-DSS compliant)',
      'Proteção contra compras automatizadas por bots via Turnstile',
      'Headers de segurança rígidos e CSP configurado',
      'Sanitização de todas as queries para evitar NoSQL Injection'
    ]
  },
  {
    id: 'loja-verde-vida',
    title: 'Verde Vida Market',
    category: 'Loja Online',
    description: 'E-commerce sustentável com cálculo automático de pegada de carbono e entrega verde.',
    fullDescription: 'Mercado online focado em produtos ecológicos e orgânicos de pequenos produtores. Integra um algoritmo proprietário que calcula as emissões de CO2 do frete e oferece opções para neutralizá-las diretamente na compra.',
    problem: 'Processamento lento de pedidos descentralizados de múltiplos vendedores (multi-vendor) e falta de transparência ambiental.',
    solution: 'Arquitetura moderna de API-first que gerencia múltiplos estoques simultaneamente, garantindo transações financeiras rápidas e divididas.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com',
    features: [
      'Sistema de Split de Pagamento integrado para vendedores',
      'Cálculo de rotas ecológicas de entrega',
      'Painel do vendedor completo e intuitivo',
      'Selo de sustentabilidade dinâmico no produto'
    ],
    securityMeasures: [
      'Isolamento total de pagamentos entre vendedores',
      'Criptografia SSL de ponta a ponta',
      'Prevenção de ataques de força bruta no painel administrativo',
      'Auditoria periódica de pacotes de dependências via NPM audit'
    ]
  },
  {
    id: 'consultoria-apex',
    title: 'Apex Security Advisory',
    category: 'Consultoria',
    description: 'Plataforma de auditoria de conformidade regulatória (LGPD) e análise de postura de segurança.',
    fullDescription: 'Portal corporativo para clientes de consultoria de segurança de alto nível. Permite o upload de evidências de conformidade, realização de auto-avaliações automatizadas de riscos e geração de planos de ação direcionados.',
    problem: 'Dificuldade em gerenciar processos de auditoria manual e o risco de vazamento de relatórios confidenciais de vulnerabilidades corporativas.',
    solution: 'Criação de um portal blindado com criptografia em nível de arquivo em repouso e trilhas de auditoria imutáveis.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS S3'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com',
    features: [
      'Análise de lacunas de conformidade para LGPD e ISO 27001',
      'Upload seguro de documentos corporativos',
      'Geração instantânea de relatórios executivos em PDF',
      'Painel de progresso interativo das ações corretivas'
    ],
    securityMeasures: [
      'Criptografia em nível de arquivo (Envelope Encryption)',
      'Logs de acesso assinados digitalmente para evitar adulterações',
      'Autenticação de dois fatores obrigatória',
      'Políticas estritas de CORS e IP Whitelisting'
    ]
  },
  {
    id: 'consultoria-devsecops-mentor',
    title: 'DevSecOps Advisor',
    category: 'Consultoria',
    description: 'Consultoria automatizada que analisa a segurança de código em repositórios em tempo real.',
    fullDescription: 'Um painel interativo de consultoria contínua focado na qualidade e na segurança do ciclo de vida do desenvolvimento. Ele se conecta aos repositórios dos clientes para auditar vulnerabilidades conhecidas, segredos expostos e dependências desatualizadas.',
    problem: 'As empresas dependem de auditorias esporádicas de segurança que se tornam obsoletas rapidamente conforme novos commits são feitos.',
    solution: 'Plataforma integradora de segurança que analisa pull requests continuamente, fornecendo feedback consultivo imediato aos desenvolvedores.',
    tech: ['React', 'Node.js', 'Docker', 'GitHub API', 'Redis'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com',
    features: [
      'Feedback instantâneo diretamente no pull request',
      'Identificação automatizada de chaves expostas e segredos',
      'Sugestões interativas de correção de trechos de código',
      'Métricas de evolução da postura de segurança por equipe'
    ],
    securityMeasures: [
      'Uso de tokens GitHub Apps com privilégios mínimos necessários',
      'Varredura em sandbox totalmente isolada para cada repositório',
      'Anonimização completa do código escaneado nos servidores de log',
      'Criptografia em trânsito com TLS 1.3'
    ]
  },
  {
    id: 'viagens-sky-bound',
    title: 'SkyBound Travel',
    category: 'Viagens',
    description: 'Plataforma de reserva de passagens aéreas e hotéis premium com proteção contra fraudes.',
    fullDescription: 'Plataforma global de reserva de viagens para o segmento corporativo e premium. Permite planejar itinerários completos agregando passagens, hospedagens, aluguel de veículos e seguros com confirmação em segundos.',
    problem: 'Plataformas de viagem são alvos constantes de fraudes de cartão de crédito clonado e ataques automatizados de bots para raspagem de tarifas de concorrentes.',
    solution: 'Uso de machine learning no backend para análise de comportamento e padrões de reserva, identificando atividades suspeitas em tempo real.',
    tech: ['Next.js', 'Tailwind CSS', 'GraphQL', 'Stripe', 'Redis'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com',
    features: [
      'Construção de itinerário unificado e interativo',
      'Comparador inteligente de tarifas em tempo real',
      'Suporte com atendimento criptografado integrado',
      'Acomodações e voos confirmados em segundos'
    ],
    securityMeasures: [
      'Verificação dinâmica de riscos de fraude com 3D Secure 2.0',
      'Rate limiting inteligente por IP e conta de usuário',
      'Headers robustos de CSP e sanitização de dados do usuário',
      'Armazenamento tokenizado de cartões para recorrências'
    ]
  },
  {
    id: 'viagens-eco-trek',
    title: 'EcoTrek Expedições',
    category: 'Viagens',
    description: 'Plataforma de expedições de aventura sustentáveis e ecoturismo no Brasil.',
    fullDescription: 'Aplicativo focado em conectar viajantes aventureiros a guias locais certificados para expedições ecológicas. Oferece roteiros personalizados, mapas offline interativos e pagamentos seguros garantindo a preservação ambiental.',
    problem: 'Viajantes em áreas remotas sofrem com falta de conectividade para verificação de reservas e segurança física de guias.',
    solution: 'Aplicativo Web Progressivo (PWA) de alta performance que funciona offline usando bancos de dados locais sincronizados e criptografados.',
    tech: ['React', 'TypeScript', 'Workbox PWA', 'DexieJS', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com',
    features: [
      'Sincronização offline completa de dados de roteiros',
      'Mapas interativos offline baseados em vetores leves',
      'Sistema de check-in de segurança por satélite para emergências',
      'Avaliações verificadas de guias de ecoturismo autorizados'
    ],
    securityMeasures: [
      'Criptografia local do banco de dados IndexedDB no dispositivo do usuário',
      'Autenticação via JSON Web Tokens (JWT) seguros',
      'Validação forte de credenciais de guias com órgãos de turismo do governo',
      'Proteção rígida contra roubo de localização e geodados corporativos'
    ]
  }
];
