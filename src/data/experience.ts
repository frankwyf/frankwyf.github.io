import type { Locale } from '../i18n';

type LocalizedText = Record<Locale, string>;

export type ExperienceMaturity =
  'delivered' | 'poc' | 'professional-work' | 'ai-assisted' | 'in-progress';

export interface ExperienceItem {
  id: string;
  client?: string;
  title: LocalizedText;
  period?: string;
  summary: LocalizedText;
  contribution: LocalizedText;
  technologies: string[];
  maturity: ExperienceMaturity;
  caseStudySlug?: string;
}

export const experienceTimeline: ExperienceItem[] = [
  {
    id: 'hitachi-phm',
    client: 'Hitachi High-Tech Group · Intel end user',
    title: {
      en: 'Custom semiconductor production-data system',
      ja: '半導体生産データシステム',
      zh: '定制半导体生产数据系统',
    },
    period: 'Aug 2024 – Present',
    summary: {
      en: 'Business-critical enterprise software for production-data management, analysis, and monitoring.',
      ja: '生産データの管理・分析・監視を支える業務向けエンタープライズソフトウェア。',
      zh: '面向生产数据管理、分析与监控的业务关键型企业软件。',
    },
    contribution: {
      en: 'Developed and unit-tested .NET modules while supporting data accuracy, system reliability, and validation from design through implementation.',
      ja: '設計から実装まで.NETモジュールの開発・単体テストを行い、データ精度、信頼性、検証を支援。',
      zh: '开发并单元测试 .NET 模块，从设计到实现支持数据准确性、系统可靠性与验证。',
    },
    technologies: ['C#/.NET', 'Production data', 'Testing'],
    maturity: 'professional-work',
  },
  {
    id: 'credit-saison-stravis',
    client: 'Credit Saison',
    title: {
      en: 'STRAVIS accounting-data verification',
      ja: 'STRAVIS会計データ検証',
      zh: 'STRAVIS 会计数据验证',
    },
    period: 'Oct–Dec 2024',
    summary: {
      en: 'Preliminary enterprise-system evaluation involving yen and foreign-currency journal data.',
      ja: '円貨・外貨仕訳データを扱う企業会計システムの導入前検証。',
      zh: '涉及日元与外币日记账数据的企业会计系统前期验证。',
    },
    contribution: {
      en: 'Used Python within Excel to extract, organize, and verify accounting data for system replacement decisions.',
      ja: 'Excel内Pythonで会計データを抽出・整理・検証し、システム更改の判断を支援。',
      zh: '使用 Excel 内 Python 提取、整理和核验会计数据，为系统替换决策提供支持。',
    },
    technologies: ['Python in Excel', 'Financial data', 'Validation'],
    maturity: 'professional-work',
  },
  {
    id: 'rheon-bom-integration',
    client: 'Rheon Automatic Machinery',
    title: {
      en: 'PLM/BOM data integration',
      ja: 'PLM/BOMデータ連携',
      zh: 'PLM/BOM 数据集成',
    },
    period: 'Nov 2024–Jan 2025',
    summary: {
      en: 'Python/SQL data integration moving BOM data from PLM workflows into SQL Server.',
      ja: 'PLMからSQL ServerへBOMデータを連携するPython/SQLデータ処理。',
      zh: '使用 Python/SQL 将 PLM 流程中的 BOM 数据集成到 SQL Server。',
    },
    contribution: {
      en: 'Built multithreaded processing and validated execution and data integrity in an Azure production environment.',
      ja: 'マルチスレッド処理を実装し、Azureの運用環境で実行結果とデータ整合性を検証。',
      zh: '构建多线程处理，并在 Azure 生产环境验证执行结果与数据完整性。',
    },
    technologies: ['Python', 'SQL Server', 'ETL', 'Azure'],
    maturity: 'professional-work',
  },
  {
    id: 'nx-python-add-on',
    client: 'Dalian Ryobi',
    title: {
      en: 'NX Python engineering add-on',
      ja: 'NX Pythonエンジニアリングアドオン',
      zh: 'NX Python 工程插件',
    },
    period: 'Sep–Oct 2025',
    summary: {
      en: 'A scoped customer-facing engineering delivery with independent ownership across the full lifecycle.',
      ja: '開発ライフサイクル全体を主体的に担った、範囲の明確な顧客向けエンジニアリング案件。',
      zh: '一个范围明确、覆盖完整生命周期并由我独立负责的客户工程交付。',
    },
    contribution: {
      en: 'Owned investigation, proposal, implementation, technical questions, documentation, final delivery, and maintenance.',
      ja: '調査、提案、実装、技術Q&A、文書化、納品、保守を一貫して担当。',
      zh: '负责技术调查、方案提案、实现、技术问答、文档、最终交付与维护。',
    },
    technologies: ['Python', 'NX add-on', 'Delivery', 'Maintenance'],
    maturity: 'delivered',
    caseStudySlug: 'nx-python-add-on-delivery',
  },
  {
    id: 'canon-credit-ml',
    client: 'Canon Optics China',
    title: {
      en: 'B2B credit-management ML POC',
      ja: 'B2B与信管理ML PoC',
      zh: 'B2B 信用管理 ML POC',
    },
    period: 'Aug 2025 · Nov 2025 · Mar–Jun 2026',
    summary: {
      en: 'A professional proof of concept for customer evaluation and credit-management decision support.',
      ja: '顧客評価と与信管理の意思決定支援を目的とした、実務上の機械学習PoC。',
      zh: '面向客户评价与信用管理决策支持的专业机器学习概念验证。',
    },
    contribution: {
      en: 'Contributed model construction, part of data preprocessing, technical validation, architecture discussion, meetings, and presentations.',
      ja: 'モデル構築、データ前処理の一部、技術検証、アーキテクチャ議論、会議、発表に貢献。',
      zh: '参与模型构建、部分数据预处理、技术验证、架构讨论、会议与成果展示。',
    },
    technologies: ['Python', 'Credit scoring', 'Data preprocessing', 'ML validation'],
    maturity: 'poc',
    caseStudySlug: 'b2b-credit-management-ml-poc',
  },
];

export const developingExperience: ExperienceItem[] = [
  {
    id: 'emphasight',
    title: {
      en: 'EMPHASIGHT enterprise analytics work',
      ja: 'EMPHASIGHTエンタープライズ分析業務',
      zh: 'EMPHASIGHT 企业分析工作',
    },
    summary: {
      en: 'Assigned enterprise analytics and business-software work involving financial/transaction analysis, Java systems, data, and AI-assisted development opportunities.',
      ja: '財務・取引分析、Java系企業システム、データ、AI活用開発の可能性に関わる業務。',
      zh: '涉及财务/交易分析、Java 企业系统、数据与 AI 辅助开发机会的企业分析与业务软件工作。',
    },
    contribution: {
      en: 'Developing assignment; no mature production GenAI or completed AI transformation is claimed.',
      ja: '進行中の業務であり、成熟した本番GenAI導入や完了したAI変革は主張しません。',
      zh: '属于正在发展的工作，不宣称成熟的生产 GenAI 或已完成的 AI 转型。',
    },
    technologies: ['Enterprise analytics', 'Java', 'SQL', 'AI-assisted development'],
    maturity: 'in-progress',
  },
  {
    id: 'stravis-ai-productivity',
    title: {
      en: 'STRAVIS AI productivity initiative',
      ja: 'STRAVIS AI生産性向上イニシアチブ',
      zh: 'STRAVIS AI 效率提升计划',
    },
    summary: {
      en: 'An in-progress investigation of controlled AI-assisted workflows for repetitive configuration and consulting work.',
      ja: '設定・コンサルティング作業の反復部分を対象に、制御されたAI活用ワークフローを検討する取り組み。',
      zh: '正在研究如何用受控的 AI 辅助流程减少重复配置与咨询工作。',
    },
    contribution: {
      en: 'Focuses on opportunity discovery and workflow analysis; reusable tools and measured productivity gains are not claimed.',
      ja: '機会発見と業務分析が中心で、再利用可能なツールの納品や定量的な生産性向上は主張しません。',
      zh: '重点是机会发现与工作流分析，不宣称已交付可复用工具或取得量化效率提升。',
    },
    technologies: ['AI productivity', 'Workflow analysis', 'Human review'],
    maturity: 'in-progress',
  },
];
