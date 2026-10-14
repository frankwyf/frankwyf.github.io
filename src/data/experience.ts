import type { Locale } from '../i18n';

type LocalizedText = Record<Locale, string>;

export type ExperienceMaturity =
  | 'delivered'
  | 'poc'
  | 'production-integration'
  | 'professional-work'
  | 'ai-assisted'
  | 'in-progress'
  | 'research';

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
      en: 'Investigated and fixed UI and workflow defects, implemented and tested assigned VB.NET features, and built FTP/SFTP transfers between Windows servers on separate LANs. System design was handled by the PM and other team members.',
      ja: '画面・業務フローの不具合を調査・修正し、担当機能をVB.NETで実装・テスト。異なるLAN上のWindowsサーバー間のFTP/SFTP転送も実装しました。システム設計はPMと他のチームメンバーが担当しました。',
      zh: '调查并修复界面及业务流程缺陷，使用 VB.NET 实现和测试所负责的功能，并开发不同局域网 Windows 服务器间的 FTP/SFTP 文件传输。系统设计由 PM 和其他团队成员负责。',
    },
    technologies: ['VB.NET', 'FTP/SFTP', 'Windows Server', 'Testing'],
    maturity: 'professional-work',
  },
  {
    id: 'credit-saison-data-validation',
    client: 'Credit Saison',
    title: {
      en: 'Enterprise accounting-data validation',
      ja: '企業会計データの検証',
      zh: '企业会计数据验证',
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
      en: 'Built rerunnable Python/SQL bulk-import processing with asynchronous execution and batch writes, then validated the tool and data integrity in an Azure environment.',
      ja: '再実行可能なPython/SQL一括取込処理を開発し、非同期実行とバッチ書き込みを実装。Azure環境でツールとデータ整合性を検証しました。',
      zh: '构建可重复运行的 Python/SQL 批量导入流程，实现异步执行和批量写入，并在 Azure 环境中验证工具与数据完整性。',
    },
    technologies: ['Python', 'SQL Server', 'ETL', 'Azure'],
    maturity: 'professional-work',
  },
  {
    id: 'nx-python-add-on',
    client: 'Dalian Ryobi',
    title: {
      en: 'Python engineering add-on for Siemens NX',
      ja: 'Siemens NX向けPythonエンジニアリングアドオン',
      zh: '用于 Siemens NX 的 Python 工程插件',
    },
    period: 'Sep–Oct 2025',
    summary: {
      en: 'A customer-deployed Python tool for rule-based NC instruction checks and schedule-file generation.',
      ja: 'NC命令のルール検証と日程ファイル生成を行う、顧客導入済みのPythonツール。',
      zh: '已由客户部署使用的 Python 工具，用于按规则检查 NC 指令并生成日程文件。',
    },
    contribution: {
      en: 'Independently delivered the technical implementation, testing, user documentation, and handoff, then provided partial follow-up maintenance. The customer deployed the add-on and continues to use it; a colleague handled on-site communication.',
      ja: '技術実装、テスト、ユーザー文書、引き継ぎを独立して担当し、納品後の保守も一部行いました。顧客がアドオンを導入して継続利用しており、現地での顧客対応は同僚が担当しました。',
      zh: '独立完成插件技术实现、测试、用户文档和交接，并承担部分后续维护。客户已部署并持续使用；现场客户沟通由同事负责。',
    },
    technologies: ['Python', 'Siemens NX', 'Rule-based validation', 'Windows executable'],
    maturity: 'delivered',
    caseStudySlug: 'nx-python-add-on-delivery',
  },
  {
    id: 'canon-credit-ml',
    client: 'Canon Optics China',
    title: {
      en: 'B2B credit scorecard: POC and production integration',
      ja: 'B2B与信スコアカード：PoCと本番連携',
      zh: 'B2B 信用评分模型：POC 与生产集成',
    },
    period: 'Aug–Nov 2025 · Mar–Jun 2026',
    summary: {
      en: 'A 2025 professional POC followed by production integration of my assigned model component in 2026. The resulting model is now used in the customer’s business platform.',
      ja: '2025年の実務PoCに続き、2026年に担当モデルコンポーネントを本番連携。モデルは顧客の業務プラットフォームで現在利用されています。',
      zh: '2025 年的专业 POC 后，于 2026 年将本人负责的模型组件与客户平台进行生产集成。该模型目前已在客户业务平台中使用。',
    },
    contribution: {
      en: 'Contributed to scorecard model construction and validation during the POC, then aligned my assigned model component with the customer’s platform for production integration. I do not claim independent deployment or ownership of the full platform lifecycle.',
      ja: 'PoCでスコアカードモデルの構築・検証に貢献し、その後、担当モデルコンポーネントの顧客プラットフォームへの本番連携を調整しました。単独での本番デプロイやプラットフォーム全体のライフサイクル管理は主張しません。',
      zh: '在 POC 阶段参与评分卡模型构建与验证，随后协调本人负责的模型组件与客户平台进行生产集成。我不声称独立完成部署或负责整个生产平台生命周期。',
    },
    technologies: ['Python', 'Credit scoring', 'Data preparation', 'Model integration'],
    maturity: 'production-integration',
    caseStudySlug: 'b2b-credit-management-ml-poc',
  },
];

export const developingExperience: ExperienceItem[] = [
  {
    id: 'enterprise-planning-uat',
    title: {
      en: 'Enterprise planning-system UAT assignment',
      ja: '企業計画システムのUAT業務',
      zh: '企业计划系统 UAT 工作',
    },
    summary: {
      en: 'An ongoing enterprise planning-system UAT assignment. My individual scope, tools, defect work, and outcomes are not yet confirmed and are not claimed here.',
      ja: '企業向け計画システムのUAT業務です。本人の具体的な担当範囲、使用ツール、欠陥対応、成果は確認中です。',
      zh: '企业计划系统的 UAT 工作。本人具体职责、所用工具、缺陷处理和结果仍在核实中。',
    },
    contribution: {
      en: 'Current project-level assignment only. Specific personal testing, automation, defect, and delivery claims are not made while scope is being confirmed.',
      ja: '現時点では進行中の業務としてのみ記載しています。担当範囲の確認中のため、個人のテスト、自動化、不具合対応、納品に関する具体的な主張はしていません。',
      zh: '目前仅作为进行中的项目工作记录。职责范围尚待确认，因此不对个人测试、自动化、缺陷处理或交付作具体声明。',
    },
    technologies: ['Enterprise system', 'UAT (project-level)'],
    maturity: 'in-progress',
  },
  {
    id: 'workflow-feasibility-study',
    title: {
      en: 'Consultant workflow automation & AI feasibility study',
      ja: 'コンサルタント業務の自動化・AI活用可能性調査',
      zh: '顾问工作流自动化与 AI 可行性研究',
    },
    summary: {
      en: 'Mapping file-layout, spreadsheet data-mapping, and configuration-check workflows to assess where automation or AI could help consultants.',
      ja: 'ファイルレイアウト、Excelデータマッピング、設定確認の業務フローを整理し、自動化やAIがコンサルタントを支援できる領域を調査しています。',
      zh: '梳理文件布局、Excel 数据映射和配置检查等流程，研究自动化或 AI 可为顾问提供帮助的环节。',
    },
    contribution: {
      en: 'Research / investigation in progress. No automation code, reusable tool, formal deliverable, adoption, or measured gain is claimed.',
      ja: '調査・実現可能性の検討段階です。自動化コード、再利用可能なツール、正式成果物、導入実績、定量的な効果は主張しません。',
      zh: '目前处于研究与可行性调查阶段。不声称已有自动化代码、可复用工具、正式交付物、团队采用或量化收益。',
    },
    technologies: ['Workflow mapping', 'Configuration checks', 'Automation / AI feasibility'],
    maturity: 'research',
  },
];
