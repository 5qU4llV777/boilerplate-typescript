import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ─── Dados do Exame ──────────────────────────────────────────────────────────

const examData = {
  title: "AWS Certified Cloud Practitioner (CLF-C02) — Simulado Completo",
  description:
    "Simulado com 65 questões baseadas no exame AWS Certified Cloud Practitioner CLF-C02. Cobre os 4 domínios oficiais: Conceitos de Nuvem, Segurança e Conformidade, Tecnologia e Serviços AWS, e Faturamento e Suporte.",
  totalTime: 90,
  passingScore: 72,
};

// ─── Questões ────────────────────────────────────────────────────────────────

const questions = [
  // ── DOMÍNIO 1: Conceitos de Nuvem ────────────────────────────────────────
  {
    number: 1,
    statement:
      "Qual das alternativas abaixo descreve melhor o modelo de computação em nuvem?",
    isMultiple: false,
    category: "Conceitos de Nuvem",
    answers: [
      { letter: "A", text: "Comprar e gerenciar seus próprios servidores físicos em um data center.", isCorrect: false },
      { letter: "B", text: "Alugar recursos de TI sob demanda pela internet, pagando apenas pelo que usar.", isCorrect: true },
      { letter: "C", text: "Instalar software localmente em cada computador da empresa.", isCorrect: false },
      { letter: "D", text: "Contratar uma empresa para gerenciar seus servidores físicos.", isCorrect: false },
    ],
  },
  {
    number: 2,
    statement:
      "Quais são os três modelos de implantação de nuvem? (Escolha TRÊS)",
    isMultiple: true,
    category: "Conceitos de Nuvem",
    answers: [
      { letter: "A", text: "Nuvem pública.", isCorrect: true },
      { letter: "B", text: "Nuvem privada.", isCorrect: true },
      { letter: "C", text: "Nuvem híbrida.", isCorrect: true },
      { letter: "D", text: "Nuvem compartilhada.", isCorrect: false },
      { letter: "E", text: "Nuvem distribuída.", isCorrect: false },
    ],
  },
  {
    number: 3,
    statement:
      "Uma empresa quer eliminar o custo de aquisição e manutenção de hardware físico. Qual benefício da nuvem AWS isso representa?",
    isMultiple: false,
    category: "Conceitos de Nuvem",
    answers: [
      { letter: "A", text: "Alta disponibilidade.", isCorrect: false },
      { letter: "B", text: "Troca de despesas de capital (CapEx) por despesas operacionais (OpEx).", isCorrect: true },
      { letter: "C", text: "Escalabilidade horizontal.", isCorrect: false },
      { letter: "D", text: "Tolerância a falhas.", isCorrect: false },
    ],
  },
  {
    number: 4,
    statement:
      "O que significa o princípio de 'escala global em minutos' na AWS?",
    isMultiple: false,
    category: "Conceitos de Nuvem",
    answers: [
      { letter: "A", text: "A AWS tem data centers em todo o mundo e você pode implantar aplicações globalmente com poucos cliques.", isCorrect: true },
      { letter: "B", text: "Você pode contratar suporte global da AWS em minutos.", isCorrect: false },
      { letter: "C", text: "Suas instâncias EC2 iniciam em menos de um minuto.", isCorrect: false },
      { letter: "D", text: "A AWS entrega servidores físicos em minutos.", isCorrect: false },
    ],
  },
  {
    number: 5,
    statement:
      "Quais são as vantagens de usar a infraestrutura global da AWS? (Escolha DUAS)",
    isMultiple: true,
    category: "Conceitos de Nuvem",
    answers: [
      { letter: "A", text: "Menor latência para usuários ao redor do mundo.", isCorrect: true },
      { letter: "B", text: "Controle total sobre o hardware físico.", isCorrect: false },
      { letter: "C", text: "Alta disponibilidade com múltiplas Zonas de Disponibilidade.", isCorrect: true },
      { letter: "D", text: "Custos fixos mensais previsíveis.", isCorrect: false },
    ],
  },
  {
    number: 6,
    statement:
      "Qual framework da AWS ajuda os arquitetos a construir infraestruturas seguras, resilientes, eficientes e de alto desempenho?",
    isMultiple: false,
    category: "Conceitos de Nuvem",
    answers: [
      { letter: "A", text: "AWS Trusted Advisor.", isCorrect: false },
      { letter: "B", text: "AWS Well-Architected Framework.", isCorrect: true },
      { letter: "C", text: "AWS CloudFormation.", isCorrect: false },
      { letter: "D", text: "AWS Config.", isCorrect: false },
    ],
  },
  {
    number: 7,
    statement:
      "Quais são os pilares do AWS Well-Architected Framework? (Escolha DOIS)",
    isMultiple: true,
    category: "Conceitos de Nuvem",
    answers: [
      { letter: "A", text: "Excelência operacional.", isCorrect: true },
      { letter: "B", text: "Velocidade de deployment.", isCorrect: false },
      { letter: "C", text: "Sustentabilidade.", isCorrect: true },
      { letter: "D", text: "Automação de testes.", isCorrect: false },
      { letter: "E", text: "Monitoramento contínuo.", isCorrect: false },
    ],
  },
  {
    number: 8,
    statement:
      "O que é uma Zona de Disponibilidade (AZ) na AWS?",
    isMultiple: false,
    category: "Conceitos de Nuvem",
    answers: [
      { letter: "A", text: "Um país onde a AWS possui operações.", isCorrect: false },
      { letter: "B", text: "Um ou mais data centers isolados dentro de uma Região AWS, com energia, rede e conectividade redundantes.", isCorrect: true },
      { letter: "C", text: "Um servidor dedicado para um único cliente.", isCorrect: false },
      { letter: "D", text: "Um ponto de presença para distribuição de conteúdo.", isCorrect: false },
    ],
  },
  {
    number: 9,
    statement:
      "O que são Edge Locations na AWS?",
    isMultiple: false,
    category: "Conceitos de Nuvem",
    answers: [
      { letter: "A", text: "Data centers principais de cada Região AWS.", isCorrect: false },
      { letter: "B", text: "Servidores usados exclusivamente para treinamento de Machine Learning.", isCorrect: false },
      { letter: "C", text: "Pontos de presença usados pelo CloudFront para entregar conteúdo com baixa latência globalmente.", isCorrect: true },
      { letter: "D", text: "Instâncias EC2 localizadas no limite da rede do cliente.", isCorrect: false },
    ],
  },
  {
    number: 10,
    statement:
      "Qual modelo de serviço em nuvem oferece maior controle sobre o sistema operacional e a infraestrutura?",
    isMultiple: false,
    category: "Conceitos de Nuvem",
    answers: [
      { letter: "A", text: "SaaS (Software como Serviço).", isCorrect: false },
      { letter: "B", text: "PaaS (Plataforma como Serviço).", isCorrect: false },
      { letter: "C", text: "IaaS (Infraestrutura como Serviço).", isCorrect: true },
      { letter: "D", text: "FaaS (Função como Serviço).", isCorrect: false },
    ],
  },

  // ── DOMÍNIO 2: Segurança e Conformidade ──────────────────────────────────
  {
    number: 11,
    statement:
      "No Modelo de Responsabilidade Compartilhada da AWS, qual é a responsabilidade do CLIENTE?",
    isMultiple: false,
    category: "Segurança e Conformidade",
    answers: [
      { letter: "A", text: "Segurança física dos data centers.", isCorrect: false },
      { letter: "B", text: "Manutenção do hardware de rede.", isCorrect: false },
      { letter: "C", text: "Gerenciamento de patches do sistema operacional nas instâncias EC2.", isCorrect: true },
      { letter: "D", text: "Virtualização da infraestrutura.", isCorrect: false },
    ],
  },
  {
    number: 12,
    statement:
      "Qual serviço da AWS permite gerenciar o acesso a recursos da AWS de forma centralizada, criando usuários, grupos e permissões?",
    isMultiple: false,
    category: "Segurança e Conformidade",
    answers: [
      { letter: "A", text: "AWS Shield.", isCorrect: false },
      { letter: "B", text: "AWS IAM (Identity and Access Management).", isCorrect: true },
      { letter: "C", text: "Amazon Cognito.", isCorrect: false },
      { letter: "D", text: "AWS Directory Service.", isCorrect: false },
    ],
  },
  {
    number: 13,
    statement:
      "O que é o princípio do menor privilégio (Least Privilege) no contexto da AWS IAM?",
    isMultiple: false,
    category: "Segurança e Conformidade",
    answers: [
      { letter: "A", text: "Conceder a todos os usuários acesso de administrador para facilitar o trabalho.", isCorrect: false },
      { letter: "B", text: "Conceder apenas as permissões necessárias para realizar uma tarefa específica e nada mais.", isCorrect: true },
      { letter: "C", text: "Restringir o acesso somente ao usuário root.", isCorrect: false },
      { letter: "D", text: "Negar todas as permissões por padrão e liberar manualmente cada ação.", isCorrect: false },
    ],
  },
  {
    number: 14,
    statement:
      "Quais serviços ajudam a proteger aplicações web contra ataques DDoS na AWS? (Escolha DUAS)",
    isMultiple: true,
    category: "Segurança e Conformidade",
    answers: [
      { letter: "A", text: "AWS Shield.", isCorrect: true },
      { letter: "B", text: "AWS WAF.", isCorrect: true },
      { letter: "C", text: "Amazon Inspector.", isCorrect: false },
      { letter: "D", text: "AWS Config.", isCorrect: false },
      { letter: "E", text: "Amazon GuardDuty.", isCorrect: false },
    ],
  },
  {
    number: 15,
    statement:
      "Qual serviço da AWS registra todas as chamadas de API feitas em sua conta, permitindo auditoria e rastreabilidade de ações?",
    isMultiple: false,
    category: "Segurança e Conformidade",
    answers: [
      { letter: "A", text: "Amazon CloudWatch.", isCorrect: false },
      { letter: "B", text: "AWS CloudTrail.", isCorrect: true },
      { letter: "C", text: "AWS Config.", isCorrect: false },
      { letter: "D", text: "Amazon Inspector.", isCorrect: false },
    ],
  },
  {
    number: 16,
    statement:
      "Qual serviço da AWS é usado para criar e gerenciar chaves de criptografia para proteger dados?",
    isMultiple: false,
    category: "Segurança e Conformidade",
    answers: [
      { letter: "A", text: "AWS Certificate Manager.", isCorrect: false },
      { letter: "B", text: "AWS Secrets Manager.", isCorrect: false },
      { letter: "C", text: "AWS KMS (Key Management Service).", isCorrect: true },
      { letter: "D", text: "Amazon Macie.", isCorrect: false },
    ],
  },
  {
    number: 17,
    statement:
      "Uma empresa precisa detectar automaticamente atividades maliciosas e comportamentos incomuns em sua conta AWS. Qual serviço deve ser usado?",
    isMultiple: false,
    category: "Segurança e Conformidade",
    answers: [
      { letter: "A", text: "AWS Shield Advanced.", isCorrect: false },
      { letter: "B", text: "Amazon GuardDuty.", isCorrect: true },
      { letter: "C", text: "AWS WAF.", isCorrect: false },
      { letter: "D", text: "Amazon Inspector.", isCorrect: false },
    ],
  },
  {
    number: 18,
    statement:
      "Qual serviço da AWS permite que você acesse relatórios de conformidade e acordos com a AWS, como SOC e ISO?",
    isMultiple: false,
    category: "Segurança e Conformidade",
    answers: [
      { letter: "A", text: "AWS Organizations.", isCorrect: false },
      { letter: "B", text: "AWS Trusted Advisor.", isCorrect: false },
      { letter: "C", text: "AWS Artifact.", isCorrect: true },
      { letter: "D", text: "AWS Config.", isCorrect: false },
    ],
  },
  {
    number: 19,
    statement:
      "O que é a autenticação multifator (MFA) e por que ela é recomendada para o usuário root da AWS?",
    isMultiple: false,
    category: "Segurança e Conformidade",
    answers: [
      { letter: "A", text: "É uma camada extra de segurança que exige um segundo fator além da senha, protegendo a conta contra acesso não autorizado.", isCorrect: true },
      { letter: "B", text: "É um serviço que monitora tentativas de login e bloqueia IPs suspeitos.", isCorrect: false },
      { letter: "C", text: "É uma política de IAM que restringe o acesso a múltiplos usuários simultaneamente.", isCorrect: false },
      { letter: "D", text: "É uma forma de criptografar as credenciais armazenadas no AWS Secrets Manager.", isCorrect: false },
    ],
  },
  {
    number: 20,
    statement:
      "Qual serviço da AWS avalia continuamente as configurações de seus recursos e verifica a conformidade com as políticas definidas?",
    isMultiple: false,
    category: "Segurança e Conformidade",
    answers: [
      { letter: "A", text: "AWS CloudTrail.", isCorrect: false },
      { letter: "B", text: "Amazon Inspector.", isCorrect: false },
      { letter: "C", text: "AWS Config.", isCorrect: true },
      { letter: "D", text: "AWS Trusted Advisor.", isCorrect: false },
    ],
  },
  {
    number: 21,
    statement:
      "No Modelo de Responsabilidade Compartilhada, quais itens são SEMPRE responsabilidade da AWS? (Escolha DUAS)",
    isMultiple: true,
    category: "Segurança e Conformidade",
    answers: [
      { letter: "A", text: "Segurança física dos data centers.", isCorrect: true },
      { letter: "B", text: "Configuração de grupos de segurança.", isCorrect: false },
      { letter: "C", text: "Hardware e infraestrutura de rede global.", isCorrect: true },
      { letter: "D", text: "Criptografia de dados do cliente.", isCorrect: false },
      { letter: "E", text: "Gerenciamento de usuários IAM.", isCorrect: false },
    ],
  },
  {
    number: 22,
    statement:
      "Qual serviço identifica vulnerabilidades de segurança em instâncias EC2 e contêineres automaticamente?",
    isMultiple: false,
    category: "Segurança e Conformidade",
    answers: [
      { letter: "A", text: "Amazon GuardDuty.", isCorrect: false },
      { letter: "B", text: "AWS Trusted Advisor.", isCorrect: false },
      { letter: "C", text: "Amazon Inspector.", isCorrect: true },
      { letter: "D", text: "AWS Shield.", isCorrect: false },
    ],
  },

  // ── DOMÍNIO 3: Tecnologia e Serviços AWS ─────────────────────────────────
  {
    number: 23,
    statement:
      "Qual serviço da AWS fornece servidores virtuais na nuvem (máquinas virtuais)?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon S3.", isCorrect: false },
      { letter: "B", text: "Amazon EC2.", isCorrect: true },
      { letter: "C", text: "AWS Lambda.", isCorrect: false },
      { letter: "D", text: "Amazon RDS.", isCorrect: false },
    ],
  },
  {
    number: 24,
    statement:
      "Uma empresa precisa executar código sem provisionar ou gerenciar servidores. Qual serviço AWS deve ser usado?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon EC2.", isCorrect: false },
      { letter: "B", text: "AWS Elastic Beanstalk.", isCorrect: false },
      { letter: "C", text: "AWS Lambda.", isCorrect: true },
      { letter: "D", text: "Amazon ECS.", isCorrect: false },
    ],
  },
  {
    number: 25,
    statement:
      "Qual opção de compra do EC2 oferece o maior desconto mas pode ser interrompida pela AWS quando a capacidade for necessária?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Instâncias Reservadas.", isCorrect: false },
      { letter: "B", text: "Instâncias On-Demand.", isCorrect: false },
      { letter: "C", text: "Instâncias Spot.", isCorrect: true },
      { letter: "D", text: "Instâncias Dedicadas.", isCorrect: false },
    ],
  },
  {
    number: 26,
    statement:
      "O Amazon S3 é mais adequado para qual tipo de armazenamento?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Armazenamento de blocos para instâncias EC2.", isCorrect: false },
      { letter: "B", text: "Armazenamento de objetos escalável para arquivos, imagens, backups e dados estáticos.", isCorrect: true },
      { letter: "C", text: "Banco de dados relacional gerenciado.", isCorrect: false },
      { letter: "D", text: "Cache em memória de alta velocidade.", isCorrect: false },
    ],
  },
  {
    number: 27,
    statement:
      "Qual classe de armazenamento do S3 é mais indicada para dados acessados com pouca frequência mas que precisam de acesso rápido quando necessário?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "S3 Standard.", isCorrect: false },
      { letter: "B", text: "S3 Standard-IA (Infrequent Access).", isCorrect: true },
      { letter: "C", text: "S3 Glacier Instant Retrieval.", isCorrect: false },
      { letter: "D", text: "S3 One Zone-IA.", isCorrect: false },
    ],
  },
  {
    number: 28,
    statement:
      "Qual serviço de banco de dados da AWS é do tipo NoSQL e oferece desempenho em milissegundos de um dígito em qualquer escala?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon RDS.", isCorrect: false },
      { letter: "B", text: "Amazon Redshift.", isCorrect: false },
      { letter: "C", text: "Amazon DynamoDB.", isCorrect: true },
      { letter: "D", text: "Amazon Aurora.", isCorrect: false },
    ],
  },
  {
    number: 29,
    statement:
      "Qual serviço da AWS é uma rede de distribuição de conteúdo (CDN) que entrega dados, vídeos e APIs com baixa latência globalmente?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "AWS Direct Connect.", isCorrect: false },
      { letter: "B", text: "Amazon Route 53.", isCorrect: false },
      { letter: "C", text: "Amazon CloudFront.", isCorrect: true },
      { letter: "D", text: "AWS Global Accelerator.", isCorrect: false },
    ],
  },
  {
    number: 30,
    statement:
      "Qual serviço da AWS fornece DNS (Domain Name System) escalável e altamente disponível?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon CloudFront.", isCorrect: false },
      { letter: "B", text: "AWS Direct Connect.", isCorrect: false },
      { letter: "C", text: "Amazon Route 53.", isCorrect: true },
      { letter: "D", text: "Amazon VPC.", isCorrect: false },
    ],
  },
  {
    number: 31,
    statement:
      "O que é o Amazon VPC (Virtual Private Cloud)?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Um serviço de backup na nuvem.", isCorrect: false },
      { letter: "B", text: "Uma rede virtual privada e isolada dentro da AWS onde você pode lançar recursos.", isCorrect: true },
      { letter: "C", text: "Um serviço de VPN para conectar escritórios remotos.", isCorrect: false },
      { letter: "D", text: "Um serviço de monitoramento de rede.", isCorrect: false },
    ],
  },
  {
    number: 32,
    statement:
      "Qual serviço da AWS permite monitorar métricas de recursos, configurar alarmes e visualizar logs em um único lugar?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "AWS CloudTrail.", isCorrect: false },
      { letter: "B", text: "Amazon CloudWatch.", isCorrect: true },
      { letter: "C", text: "AWS Config.", isCorrect: false },
      { letter: "D", text: "AWS Trusted Advisor.", isCorrect: false },
    ],
  },
  {
    number: 33,
    statement:
      "Qual serviço permite criar e gerenciar infraestrutura como código (IaC) na AWS usando templates?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "AWS CodeDeploy.", isCorrect: false },
      { letter: "B", text: "AWS OpsWorks.", isCorrect: false },
      { letter: "C", text: "AWS CloudFormation.", isCorrect: true },
      { letter: "D", text: "AWS Systems Manager.", isCorrect: false },
    ],
  },
  {
    number: 34,
    statement:
      "Uma empresa quer migrar um banco de dados Oracle para a AWS sem interromper as operações. Qual serviço AWS auxilia nessa tarefa?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "AWS Snowball.", isCorrect: false },
      { letter: "B", text: "AWS Database Migration Service (DMS).", isCorrect: true },
      { letter: "C", text: "AWS Server Migration Service.", isCorrect: false },
      { letter: "D", text: "AWS DataSync.", isCorrect: false },
    ],
  },
  {
    number: 35,
    statement:
      "Qual serviço da AWS é usado para enviar notificações por e-mail, SMS ou para outros serviços (fan-out)?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon SQS.", isCorrect: false },
      { letter: "B", text: "Amazon SNS.", isCorrect: true },
      { letter: "C", text: "Amazon SES.", isCorrect: false },
      { letter: "D", text: "AWS EventBridge.", isCorrect: false },
    ],
  },
  {
    number: 36,
    statement:
      "Qual serviço da AWS é uma fila de mensagens totalmente gerenciada que desacopla componentes de aplicações?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon SNS.", isCorrect: false },
      { letter: "B", text: "Amazon Kinesis.", isCorrect: false },
      { letter: "C", text: "Amazon SQS.", isCorrect: true },
      { letter: "D", text: "AWS Step Functions.", isCorrect: false },
    ],
  },
  {
    number: 37,
    statement:
      "Qual serviço de banco de dados relacional da AWS é compatível com MySQL e PostgreSQL e oferece desempenho até 5x maior que o MySQL padrão?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon RDS for MySQL.", isCorrect: false },
      { letter: "B", text: "Amazon Aurora.", isCorrect: true },
      { letter: "C", text: "Amazon DynamoDB.", isCorrect: false },
      { letter: "D", text: "Amazon Redshift.", isCorrect: false },
    ],
  },
  {
    number: 38,
    statement:
      "Qual serviço da AWS é indicado para armazenamento de dados em data warehouse para análises de Business Intelligence?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon DynamoDB.", isCorrect: false },
      { letter: "B", text: "Amazon RDS.", isCorrect: false },
      { letter: "C", text: "Amazon Redshift.", isCorrect: true },
      { letter: "D", text: "Amazon ElastiCache.", isCorrect: false },
    ],
  },
  {
    number: 39,
    statement:
      "Qual serviço da AWS permite implantar e escalar aplicações web sem gerenciar a infraestrutura subjacente?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon EC2.", isCorrect: false },
      { letter: "B", text: "AWS Lambda.", isCorrect: false },
      { letter: "C", text: "AWS Elastic Beanstalk.", isCorrect: true },
      { letter: "D", text: "Amazon ECS.", isCorrect: false },
    ],
  },
  {
    number: 40,
    statement:
      "Quais serviços de armazenamento a AWS oferece? (Escolha TRÊS)",
    isMultiple: true,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon S3 (armazenamento de objetos).", isCorrect: true },
      { letter: "B", text: "Amazon EBS (armazenamento de blocos).", isCorrect: true },
      { letter: "C", text: "Amazon EFS (sistema de arquivos gerenciado).", isCorrect: true },
      { letter: "D", text: "Amazon SQS.", isCorrect: false },
      { letter: "E", text: "Amazon SNS.", isCorrect: false },
    ],
  },
  {
    number: 41,
    statement:
      "Qual serviço da AWS oferece cache em memória de alta velocidade para reduzir a carga em bancos de dados?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon RDS.", isCorrect: false },
      { letter: "B", text: "Amazon ElastiCache.", isCorrect: true },
      { letter: "C", text: "Amazon DynamoDB Accelerator (DAX).", isCorrect: false },
      { letter: "D", text: "Amazon Redshift.", isCorrect: false },
    ],
  },
  {
    number: 42,
    statement:
      "Qual serviço da AWS permite transferir grandes volumes de dados fisicamente para a AWS sem usar a internet?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "AWS DataSync.", isCorrect: false },
      { letter: "B", text: "AWS Direct Connect.", isCorrect: false },
      { letter: "C", text: "AWS Snowball.", isCorrect: true },
      { letter: "D", text: "Amazon S3 Transfer Acceleration.", isCorrect: false },
    ],
  },
  {
    number: 43,
    statement:
      "O que é o Auto Scaling na AWS?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Um serviço que aumenta automaticamente o tamanho (tipo) de uma instância EC2.", isCorrect: false },
      { letter: "B", text: "Um serviço que ajusta automaticamente o número de instâncias EC2 com base na demanda.", isCorrect: true },
      { letter: "C", text: "Um serviço que migra automaticamente workloads entre Regiões.", isCorrect: false },
      { letter: "D", text: "Um serviço de escalonamento de banco de dados.", isCorrect: false },
    ],
  },
  {
    number: 44,
    statement:
      "Qual serviço da AWS distribui o tráfego de entrada entre múltiplas instâncias EC2, contêineres ou endereços IP?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon Route 53.", isCorrect: false },
      { letter: "B", text: "AWS Auto Scaling.", isCorrect: false },
      { letter: "C", text: "Elastic Load Balancing (ELB).", isCorrect: true },
      { letter: "D", text: "Amazon CloudFront.", isCorrect: false },
    ],
  },
  {
    number: 45,
    statement:
      "Qual serviço da AWS é uma plataforma de orquestração de contêineres totalmente gerenciada compatível com Kubernetes?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon ECS.", isCorrect: false },
      { letter: "B", text: "AWS Fargate.", isCorrect: false },
      { letter: "C", text: "Amazon EKS.", isCorrect: true },
      { letter: "D", text: "AWS Lambda.", isCorrect: false },
    ],
  },
  {
    number: 46,
    statement:
      "Uma startup quer executar contêineres sem gerenciar servidores ou clusters. Qual serviço AWS é ideal?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon EC2.", isCorrect: false },
      { letter: "B", text: "AWS Fargate.", isCorrect: true },
      { letter: "C", text: "Amazon EKS.", isCorrect: false },
      { letter: "D", text: "AWS Elastic Beanstalk.", isCorrect: false },
    ],
  },
  {
    number: 47,
    statement:
      "O que é o Amazon S3 Glacier e para que é usado?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Um banco de dados NoSQL de baixo custo.", isCorrect: false },
      { letter: "B", text: "Armazenamento de objetos de baixo custo para arquivamento de longo prazo e backup.", isCorrect: true },
      { letter: "C", text: "Um serviço de cache para reduzir latência.", isCorrect: false },
      { letter: "D", text: "Um serviço de armazenamento de blocos para EC2.", isCorrect: false },
    ],
  },
  {
    number: 48,
    statement:
      "Qual serviço da AWS fornece uma conexão de rede dedicada e privada entre o data center do cliente e a AWS?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "AWS VPN.", isCorrect: false },
      { letter: "B", text: "Amazon CloudFront.", isCorrect: false },
      { letter: "C", text: "AWS Direct Connect.", isCorrect: true },
      { letter: "D", text: "Amazon Route 53.", isCorrect: false },
    ],
  },
  {
    number: 49,
    statement:
      "Qual serviço de IA da AWS é utilizado para criar chatbots e assistentes virtuais com processamento de linguagem natural?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon Rekognition.", isCorrect: false },
      { letter: "B", text: "Amazon Polly.", isCorrect: false },
      { letter: "C", text: "Amazon Lex.", isCorrect: true },
      { letter: "D", text: "Amazon Comprehend.", isCorrect: false },
    ],
  },
  {
    number: 50,
    statement:
      "Qual serviço da AWS é uma plataforma de Machine Learning totalmente gerenciada que permite construir, treinar e implantar modelos de ML?",
    isMultiple: false,
    category: "Tecnologia e Serviços AWS",
    answers: [
      { letter: "A", text: "Amazon Rekognition.", isCorrect: false },
      { letter: "B", text: "Amazon SageMaker.", isCorrect: true },
      { letter: "C", text: "AWS DeepLens.", isCorrect: false },
      { letter: "D", text: "Amazon Comprehend.", isCorrect: false },
    ],
  },

  // ── DOMÍNIO 4: Faturamento, Preços e Suporte ─────────────────────────────
  {
    number: 51,
    statement:
      "Qual ferramenta da AWS permite visualizar e analisar seus gastos na nuvem ao longo do tempo com gráficos e filtros?",
    isMultiple: false,
    category: "Faturamento e Suporte",
    answers: [
      { letter: "A", text: "AWS Budgets.", isCorrect: false },
      { letter: "B", text: "AWS Pricing Calculator.", isCorrect: false },
      { letter: "C", text: "AWS Cost Explorer.", isCorrect: true },
      { letter: "D", text: "AWS Cost and Usage Report.", isCorrect: false },
    ],
  },
  {
    number: 52,
    statement:
      "Qual ferramenta da AWS permite criar alertas quando seus gastos ultrapassam um valor definido?",
    isMultiple: false,
    category: "Faturamento e Suporte",
    answers: [
      { letter: "A", text: "AWS Cost Explorer.", isCorrect: false },
      { letter: "B", text: "AWS Budgets.", isCorrect: true },
      { letter: "C", text: "AWS Trusted Advisor.", isCorrect: false },
      { letter: "D", text: "Amazon CloudWatch.", isCorrect: false },
    ],
  },
  {
    number: 53,
    statement:
      "Qual modelo de preço da AWS é o mais econômico para workloads com uso previsível e contínuo por 1 ou 3 anos?",
    isMultiple: false,
    category: "Faturamento e Suporte",
    answers: [
      { letter: "A", text: "On-Demand.", isCorrect: false },
      { letter: "B", text: "Spot Instances.", isCorrect: false },
      { letter: "C", text: "Reserved Instances.", isCorrect: true },
      { letter: "D", text: "Dedicated Hosts.", isCorrect: false },
    ],
  },
  {
    number: 54,
    statement:
      "O que é o AWS Free Tier?",
    isMultiple: false,
    category: "Faturamento e Suporte",
    answers: [
      { letter: "A", text: "Um plano de suporte gratuito da AWS para pequenas empresas.", isCorrect: false },
      { letter: "B", text: "Um conjunto de ofertas gratuitas que permitem explorar serviços AWS sem custo, dentro de determinados limites.", isCorrect: true },
      { letter: "C", text: "Um desconto permanente aplicado automaticamente a todas as contas AWS.", isCorrect: false },
      { letter: "D", text: "Um programa de fidelidade para clientes corporativos da AWS.", isCorrect: false },
    ],
  },
  {
    number: 55,
    statement:
      "Qual serviço da AWS consolida faturamento de múltiplas contas AWS em uma única fatura e oferece descontos por volume?",
    isMultiple: false,
    category: "Faturamento e Suporte",
    answers: [
      { letter: "A", text: "AWS Control Tower.", isCorrect: false },
      { letter: "B", text: "AWS Organizations.", isCorrect: true },
      { letter: "C", text: "AWS Service Catalog.", isCorrect: false },
      { letter: "D", text: "AWS IAM.", isCorrect: false },
    ],
  },
  {
    number: 56,
    statement:
      "Qual plano de suporte AWS inclui acesso a um Technical Account Manager (TAM) dedicado?",
    isMultiple: false,
    category: "Faturamento e Suporte",
    answers: [
      { letter: "A", text: "Basic.", isCorrect: false },
      { letter: "B", text: "Developer.", isCorrect: false },
      { letter: "C", text: "Business.", isCorrect: false },
      { letter: "D", text: "Enterprise.", isCorrect: true },
    ],
  },
  {
    number: 57,
    statement:
      "O que o AWS Trusted Advisor oferece? (Escolha DUAS)",
    isMultiple: true,
    category: "Faturamento e Suporte",
    answers: [
      { letter: "A", text: "Recomendações para otimização de custos.", isCorrect: true },
      { letter: "B", text: "Execução automática de patches em instâncias EC2.", isCorrect: false },
      { letter: "C", text: "Verificações de segurança e melhores práticas.", isCorrect: true },
      { letter: "D", text: "Migração automática entre Regiões AWS.", isCorrect: false },
      { letter: "E", text: "Geração de relatórios de compliance.", isCorrect: false },
    ],
  },
  {
    number: 58,
    statement:
      "Quais são os princípios de preço da AWS? (Escolha TRÊS)",
    isMultiple: true,
    category: "Faturamento e Suporte",
    answers: [
      { letter: "A", text: "Pague apenas pelo que usar.", isCorrect: true },
      { letter: "B", text: "Pague menos ao usar mais (descontos por volume).", isCorrect: true },
      { letter: "C", text: "Taxa de adesão mensal fixa.", isCorrect: false },
      { letter: "D", text: "Pague menos ao reservar capacidade com antecedência.", isCorrect: true },
      { letter: "E", text: "Custo por usuário ativo na plataforma.", isCorrect: false },
    ],
  },
  {
    number: 59,
    statement:
      "Qual ferramenta da AWS permite estimar o custo mensal de uma arquitetura antes de implantá-la?",
    isMultiple: false,
    category: "Faturamento e Suporte",
    answers: [
      { letter: "A", text: "AWS Cost Explorer.", isCorrect: false },
      { letter: "B", text: "AWS Budgets.", isCorrect: false },
      { letter: "C", text: "AWS Pricing Calculator.", isCorrect: true },
      { letter: "D", text: "AWS Cost and Usage Report.", isCorrect: false },
    ],
  },
  {
    number: 60,
    statement:
      "Qual plano de suporte AWS é o mínimo recomendado para ambientes de produção?",
    isMultiple: false,
    category: "Faturamento e Suporte",
    answers: [
      { letter: "A", text: "Basic.", isCorrect: false },
      { letter: "B", text: "Developer.", isCorrect: false },
      { letter: "C", text: "Business.", isCorrect: true },
      { letter: "D", text: "Enterprise On-Ramp.", isCorrect: false },
    ],
  },
  {
    number: 61,
    statement:
      "O que é o AWS Marketplace?",
    isMultiple: false,
    category: "Faturamento e Suporte",
    answers: [
      { letter: "A", text: "Um portal para contratar desenvolvedores certificados em AWS.", isCorrect: false },
      { letter: "B", text: "Uma loja digital onde clientes podem encontrar, comprar e implantar software de terceiros que roda na AWS.", isCorrect: true },
      { letter: "C", text: "Um serviço de leilão de instâncias Spot.", isCorrect: false },
      { letter: "D", text: "Uma plataforma de treinamento e certificação AWS.", isCorrect: false },
    ],
  },
  {
    number: 62,
    statement:
      "Qual serviço da AWS fornece um relatório detalhado de todos os custos e uso de recursos, exportável para análise em ferramentas como Amazon Athena?",
    isMultiple: false,
    category: "Faturamento e Suporte",
    answers: [
      { letter: "A", text: "AWS Cost Explorer.", isCorrect: false },
      { letter: "B", text: "AWS Budgets.", isCorrect: false },
      { letter: "C", text: "AWS Cost and Usage Report (CUR).", isCorrect: true },
      { letter: "D", text: "AWS Pricing Calculator.", isCorrect: false },
    ],
  },
  {
    number: 63,
    statement:
      "Uma empresa tem recursos sendo usados maliciosamente em sua conta AWS. Ao qual time da AWS devem recorrer, mesmo com suporte Basic?",
    isMultiple: false,
    category: "Faturamento e Suporte",
    answers: [
      { letter: "A", text: "AWS Concierge.", isCorrect: false },
      { letter: "B", text: "AWS Abuse Team.", isCorrect: true },
      { letter: "C", text: "AWS TAM.", isCorrect: false },
      { letter: "D", text: "AWS Professional Services.", isCorrect: false },
    ],
  },
  {
    number: 64,
    statement:
      "Quais são benefícios do faturamento consolidado do AWS Organizations? (Escolha DUAS)",
    isMultiple: true,
    category: "Faturamento e Suporte",
    answers: [
      { letter: "A", text: "Uma única fatura para todas as contas vinculadas.", isCorrect: true },
      { letter: "B", text: "Desconto automático em instâncias EC2 On-Demand.", isCorrect: false },
      { letter: "C", text: "Compartilhamento de descontos de Reserved Instances entre contas.", isCorrect: true },
      { letter: "D", text: "Acesso gratuito ao plano de suporte Enterprise.", isCorrect: false },
    ],
  },
  {
    number: 65,
    statement:
      "O que são os Savings Plans da AWS?",
    isMultiple: false,
    category: "Faturamento e Suporte",
    answers: [
      { letter: "A", text: "Um programa de reembolso para clientes que migraram de outros provedores de nuvem.", isCorrect: false },
      { letter: "B", text: "Um modelo de preço flexível que oferece desconto em troca de compromisso de uso por 1 ou 3 anos, aplicável a EC2, Lambda e Fargate.", isCorrect: true },
      { letter: "C", text: "Um desconto aplicado automaticamente a todos os clientes após 12 meses de uso.", isCorrect: false },
      { letter: "D", text: "Um plano de economia restrito somente a instâncias Reserved.", isCorrect: false },
    ],
  },
];

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🌱 Iniciando seed do banco de dados...\n");

  // Limpa dados existentes
  await prisma.answer.deleteMany();
  await prisma.question.deleteMany();
  await prisma.exam.deleteMany();
  console.log("🗑️  Dados anteriores removidos.\n");

  // Cria o exame
  const exam = await prisma.exam.create({ data: examData });
  console.log(`✅ Exame criado: "${exam.title}" (id: ${exam.id})\n`);

  // Insere questões e respostas
  let count = 0;
  for (const q of questions) {
    await prisma.question.create({
      data: {
        examId: exam.id,
        number: q.number,
        statement: q.statement,
        isMultiple: q.isMultiple,
        category: q.category,
        answers: {
          create: q.answers.map((a) => ({
            letter: a.letter,
            text: a.text,
            isCorrect: a.isCorrect,
          })),
        },
      },
    });
    count++;
    process.stdout.write(`\r📝 Questões inseridas: ${count}/${questions.length}`);
  }

  console.log("\n");

  // Resumo
  const totalQ = await prisma.question.count();
  const totalA = await prisma.answer.count();
  const multi = await prisma.question.count({ where: { isMultiple: true } });

  const byCategory = await prisma.question.groupBy({
    by: ["category"],
    _count: { _all: true },
    orderBy: { _count: { category: "desc" } },
  });

  console.log("🎉 Seed concluído com sucesso!\n");
  console.log("📊 Resumo:");
  console.log(`   • Exame criado:      1`);
  console.log(`   • Questões criadas:  ${totalQ}`);
  console.log(`     ↳ Resposta única:  ${totalQ - multi}`);
  console.log(`     ↳ Múltiplas resp:  ${multi}`);
  console.log(`   • Alternativas:      ${totalA}`);
  console.log(`\n📁 Por categoria:`);
  for (const c of byCategory) {
    console.log(`   • ${c.category}: ${c._count._all} questões`);
  }
}

main()
  .catch((e) => {
    console.error("❌ Erro durante o seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });