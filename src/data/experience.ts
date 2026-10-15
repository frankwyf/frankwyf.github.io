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
  clientRelation?: LocalizedText;
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
    client: 'Hitachi High-Tech Group',
    clientRelation: {
      en: 'end user: Intel',
      ja: '最終利用者：Intel',
      zh: '最终用户：Intel',
    },
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
      en: 'Built and tested the Python add-on, prepared its user documentation and handoff, and provided partial follow-up maintenance. The customer deployed it and continues to use it.',
      ja: 'Pythonアドオンの実装とテスト、ユーザー文書の作成、引き継ぎを担当し、納品後の保守も一部行いました。顧客が導入し、現在も利用しています。',
      zh: '完成 Python 插件的实现、测试、用户文档与交接，并承担部分后续维护。客户已部署并持续使用。',
    },
    technologies: ['Python', 'Siemens NX', 'Rule-based validation', 'Windows executable'],
    maturity: 'delivered',
    caseStudySlug: 'nx-python-add-on-delivery',
  },
  {
    id: 'canon-credit-ml',
    client: 'Canon Optics China',
    title: {
      en: 'B2B credit scorecard',
      ja: 'B2B与信スコアカード',
      zh: 'B2B 信用评分模型',
    },
    period: 'Aug–Nov 2025 · Mar–Jun 2026',
    summary: {
      en: 'A 2025 professional POC followed by team production integration in 2026. The resulting model is now used on the customer’s business platform.',
      ja: '2025年の実務PoCに続き、2026年にチームで本番連携を実施。モデルは顧客の業務プラットフォームで現在利用されています。',
      zh: '2025 年专业 POC 后，团队于 2026 年完成生产集成。模型目前已在客户业务平台中使用。',
    },
    contribution: {
      en: 'Contributed to scorecard model construction, data preparation, and validation in the POC. During the later team integration phase, I coordinated alignment of my assigned model component with the customer’s platform.',
      ja: 'PoCではスコアカードモデルの構築、データ準備、検証に貢献しました。後続のチーム連携では、担当モデルコンポーネントと顧客プラットフォームとの調整を行いました。',
      zh: '在 POC 阶段参与评分卡模型构建、数据准备与验证。后续团队集成期间，我协调本人分配的模型组件与客户平台对接。',
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
      en: 'UAT work is in progress for an enterprise planning system.',
      ja: '企業計画システムのUAT業務が進行中です。',
      zh: '企业计划系统的 UAT 工作正在进行。',
    },
    contribution: {
      en: 'Current assignment in progress.',
      ja: '現在進行中の業務です。',
      zh: '当前工作正在进行。',
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
