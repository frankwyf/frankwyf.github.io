import type { Locale } from '../i18n';

type LocalizedText = Record<Locale, string>;

export const career = {
  currentRole: {
    company: 'DENTSU SOKEN SHANGHAI',
    title: 'Software Engineer',
    period: 'Jul 2024 – Present',
    growth: {
      en: 'Joined at an R1 level and progressed to R2 after the first year; the external title remains Software Engineer.',
      ja: 'R1レベルで入社し、1年後にR2へ昇格。対外的な職種名はSoftware Engineerです。',
      zh: '以 R1 级别加入，约一年后晋升至 R2；对外职位仍为 Software Engineer。',
    } satisfies LocalizedText,
  },
  positioning: {
    en: 'Software & Data Engineer transitioning into Applied AI Engineering.',
    ja: 'エンタープライズソフトウェアとデータを基盤に、応用AIへ進むソフトウェア・データエンジニア。',
    zh: '以企业软件与数据工程为基础，正在走向应用 AI 的软件与数据工程师。',
  } satisfies LocalizedText,
  experienceIntro: {
    en: 'My work connects enterprise software delivery, Python/SQL data integration, financial-data validation, customer-facing delivery, and controlled AI-assisted engineering.',
    ja: '企業向けソフトウェア、Python/SQLによるデータ連携、財務データ検証、顧客向けデリバリー、制御されたAI活用エンジニアリングをつないでいます。',
    zh: '我的工作连接企业软件交付、Python/SQL 数据集成、财务数据验证、客户交付，以及受控的 AI 辅助工程。',
  } satisfies LocalizedText,
  experienceHighlights: {
    en: [
      'Independently delivered a Python-based NX engineering add-on from investigation and proposal through implementation, documentation, delivery, and maintenance.',
      'Contributed model construction, data preprocessing, and technical validation to a professional B2B credit-management ML proof of concept.',
      'Designed evidence-led enterprise validation with Python/Playwright, network inspection, source analysis, AI assistance, and human review.',
    ],
    ja: [
      'PythonによるNXエンジニアリングアドオンを、調査・提案から実装、文書化、納品、保守まで一貫して担当。',
      'B2B与信管理ML PoCで、モデル構築、データ前処理の一部、技術検証に貢献。',
      'Python/Playwright、ネットワーク確認、ソース分析、AI支援、人による確認を組み合わせた証拠重視の企業検証を設計。',
    ],
    zh: [
      '独立交付 Python NX 工程插件，覆盖技术调查、方案提案、实现、文档、交付与维护。',
      '参与企业 B2B 信用管理机器学习 POC，负责模型构建、部分数据预处理与技术验证。',
      '结合 Python/Playwright、网络检查、源码分析、AI 辅助和人工复核，设计以证据为核心的企业验证流程。',
    ],
  } satisfies Record<Locale, string[]>,
  education: {
    en: 'University of Leeds · BSc Computer Science, First-Class Honours · 2024; joint undergraduate programme with Southwest Jiaotong University.',
    ja: 'リーズ大学・コンピュータサイエンス学士（First-Class Honours）・2024年。西南交通大学との共同学部課程。',
    zh: '利兹大学计算机科学学士，First-Class Honours，2024 年毕业；与西南交通大学联合本科项目。',
  } satisfies LocalizedText,
  evidence: {
    en: [
      [
        'Enterprise software',
        'C#/.NET applications, integration, testing, and production validation.',
      ],
      [
        'Data and finance',
        'Python/SQL ETL, data quality, reconciliation, credit-risk workflows, and financial validation.',
      ],
      [
        'Applied AI transition',
        'Professional ML POC and controlled AI-assisted engineering alongside private portfolio systems.',
      ],
    ],
    ja: [
      ['企業向けソフトウェア', 'C#/.NETアプリケーション、連携、テスト、運用検証。'],
      ['データと財務', 'Python/SQL ETL、データ品質、照合、与信ワークフロー、財務データ検証。'],
      [
        '応用AIへの移行',
        '専門業務でのML PoCと、非公開ポートフォリオを並行する制御されたAI活用エンジニアリング。',
      ],
    ],
    zh: [
      ['企业软件', 'C#/.NET 应用、系统集成、测试与生产验证。'],
      ['数据与金融', 'Python/SQL ETL、数据质量、对账、信用风险流程与财务数据验证。'],
      ['走向应用 AI', '专业 ML POC 与受控 AI 辅助工程，结合私有源码个人项目持续实践。'],
    ],
  } satisfies Record<Locale, [string, string][]>,
} as const;
