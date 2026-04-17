/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Globe, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Hotel, 
  MapPin, 
  Zap,
  Award,
  Sparkles,
  Store,
  X,
  AlertCircle,
  Info,
  Handshake,
  Layers,
  Coins,
  LineChart,
  Briefcase,
  GraduationCap,
  Target,
  Rocket,
  BrainCircuit,
  CreditCard
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import { cn } from './lib/utils';

// --- Data ---

const cooperationModes = [
  {
    id: 'mode-1',
    label: '合作方式一',
    title: '复制黄小西酒店智能体',
    subtitle: '快速落地 · 酒店赋能',
    description: '以黄小西酒店智能体为核心，提供资源对接、产品培训支持，快速实现投入产出平衡。',
    details: {
      practice: '以黄小西酒店智能体为核心，提供资源对接、产品培训支持，制定“联动旅行社+协会+线上线下推广+试点先行”方案，组建本地推广团队并提供指导。',
      pros: ['产品成熟、落地快', '精准匹配酒店降本增效需求，商户接受度高', '可获取游客核心数据支撑文旅管控', '投入低、风险可控，易实现投入产出平衡'],
      cons: ['仅覆盖酒店单一业态', '跨场景数据整合不足', '长期商业收益有限']
    },
    icon: <Hotel className="w-6 h-6" />,
    color: 'text-tech-blue',
    bg: 'bg-blue-50',
  },
  {
    id: 'mode-2',
    label: '合作方式二',
    title: '复制全场景多彩黄小西，覆盖吃住行游购娱',
    subtitle: '全域覆盖 · 生态协同',
    description: '打造开封版全场景智能服务平台，为游客、涉旅商户、政府提供定制化服务。',
    details: {
      practice: '对“多彩黄小西”进行本地化适配，打造开封版全场景智能服务平台，为游客、涉旅商户、政府提供定制化服务；推动全业态商户批量接入，建立商户资源库；组建专业团队负责运维、推广及功能迭代。',
      pros: ['覆盖全场景、全业态，实现数据整合与业态协同', '补位旅游公共服务短板，提升开封文旅品牌形象', '掌握游客全流程数据，支撑政府科学决策', '构建数智生态闭环，提升产业整体竞争力'],
      cons: ['前期技术适配、商户对接投入大，资金压力突出', '商户协调难度高，落地周期长', '日常运维复杂，后期成本偏高']
    },
    icon: <Zap className="w-6 h-6" />,
    color: 'text-tech-blue',
    bg: 'bg-blue-50',
  },
  {
    id: 'mode-3',
    label: '合作方式三',
    title: '成立合资公司，打造本地旅游数据运营服务商',
    subtitle: '深度绑定 · 长期价值',
    description: '联合成立合资公司，聚焦全域AI工具研发落地与全域供应链统筹。',
    details: {
      practice: '华创云信以技术、产品、运营经验作价入股，开封相关主体以资金、本地资源作价入股，联合成立合资公司；聚焦全域AI工具研发落地与全域供应链统筹，组建本地化团队；整合全域文旅数据，搭建统一数据平台并挖掘数据价值；制定IPO规划，对接政策及外部优质资源。',
      pros: ['本地化运营精准对接需求，赋能效果持久', '助力汴数科技培育团队、整合资源，搭建自有运营主体', '业务多元，盈利模式可持续，长期资本回报可观', '掌握核心数据资产，提升行业话语权', '双方风险共担、利益共享，协同推进项目'],
      cons: ['合资公司组建流程繁琐、耗时久，推进节奏慢', '前期资金、人力投入大，整体风险较高', '股东及本地各主体协调难度大']
    },
    icon: <Building2 className="w-6 h-6" />,
    color: 'text-tech-blue',
    bg: 'bg-blue-50',
  },
];

const bestPath = [
  { icon: <Hotel />, title: '复制酒店智能体业务', desc: '以低投入、低风险快速打开市场，为后续合作铺垫。' },
  { icon: <Handshake />, title: '推进合资公司组建', desc: '开展深度本地化运营，整合数据、培育团队、拓展业务。' },
  { icon: <Layers />, title: '复制全场景平台', desc: '实现文旅全业态智能化升级，构建开封特色文旅数智生态。' },
];

const economicBenefits = {
  industry: [
    { title: '激活商户活力', desc: '为涉旅商户提供数字化方案，首批接入商户运营成本降低5%-30%、额外收益提升5%-25%，实现降本增收。', icon: <Zap /> },
    { title: '推动消费升级', desc: '构建数智生态，推动文旅向智慧体验转型，预计文旅综合消费规模年均提升5%以上，培育非遗、文创新消费增长点。', icon: <TrendingUp /> },
    { title: '培育数字新业态', desc: '合资公司打造本地文旅数据运营服务商，预计创造超百个就业岗位，完善数字经济布局，带来持续财税收入。', icon: <Briefcase /> },
    { title: '实现双方共赢', desc: '华创云信拓展全国文旅数字化市场；开封低成本完成数字化升级，合资公司IPO规划培育优质上市企业，打造文旅数字化合作标杆。', icon: <Handshake /> },
  ],
  exclusive: [
    { title: '营收增长', desc: '切入文旅数字化核心业务，获得服务、数据增值、产业分成等稳定收入，实现营收多元化。', icon: <Coins /> },
    { title: '降低成本', desc: '借助华创云信成熟资源，大幅降低研发与市场拓展成本，快速实现业务落地。', icon: <Zap /> },
    { title: '构建壁垒', desc: '整合开封全域文旅及政策资源，搭建本地供应链体系，形成资源盈利壁垒。', icon: <ShieldCheck /> },
    { title: '培育盈利模式', desc: '形成“AI工具+供应链+数据增值+运营服务”多元模式，实现长期可持续盈利。', icon: <LineChart /> },
    { title: '提升资本价值', desc: '参与合资公司IPO规划，企业估值随赛道发展提升，奠定资本化运作基础。', icon: <Rocket /> },
  ]
};

const socialBenefits = {
  industry: [
    { title: '升级品牌形象', desc: '打造“宋小游”等宋文化特色智能服务品牌，推动历史文化与数字技术融合，打造全国文旅数字化转型标杆。', icon: <Award /> },
    { title: '优化游客体验', desc: '解决旅游服务信息不对称、效率低等痛点，提升游客满意度与城市吸引力。', icon: <Users /> },
    { title: '推动治理升级', desc: '通过文旅数据大模型与运行驾驶舱，实现文旅治理从“经验驱动”向“数据驱动”转型，提升管理精细化、智能化水平。', icon: <Cpu /> },
    { title: '传承宋文化', desc: '智能体融入宋文化元素，通过AI伴游、非遗推广等，实现传统文化数字化、年轻化传播。', icon: <Sparkles /> },
    { title: '夯实数字基础', desc: '通过系统化培训及合资公司培育专业人才，填补文旅数字化人才缺口，助力智慧城市建设。', icon: <GraduationCap /> },
  ],
  exclusive: [
    { title: '搭建运营主体', desc: '积累文旅数据运营、产品推广等经验，搭建自有专业文旅数字化运营框架，提升独立运营能力。', icon: <Building2 /> },
    { title: '培育专业团队', desc: '通过系统化培训与实操，培育兼具本地文旅认知与数字技术能力的核心人才。', icon: <Users /> },
    { title: '树立标杆品牌', desc: '成为开封文旅数字化转型核心参与者，提升本地及区域行业知名度与影响力。', icon: <Award /> },
    { title: '提升行业话语权', desc: '整合全域核心数据、参与数智生态构建，成为本地文旅数字化核心企业，奠定周边市场拓展基础。', icon: <Target /> },
    { title: '拓展业务边界', desc: '依托合作积累，将业务延伸至智慧城市、本地生活数字化等领域，实现多元化发展。', icon: <Globe /> },
  ]
};

// --- Components ---

const SectionTitle = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={cn("mb-16", centered ? "text-center" : "text-left")}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-slate-900 mb-6"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg md:text-xl font-sans leading-relaxed text-slate-600 max-w-3xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      className={cn("h-1.5 w-24 bg-tech-blue mt-8 rounded-full", centered ? "mx-auto" : "")}
    />
  </div>
);

export default function App() {
  const [selectedMode, setSelectedMode] = React.useState<typeof cooperationModes[0] | null>(null);

  return (
    <div className="min-h-screen">
      {/* Modal */}
      {selectedMode && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMode(null)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-6">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shrink-0", selectedMode.bg, selectedMode.color)}>
                    {React.cloneElement(selectedMode.icon as React.ReactElement, { className: 'w-8 h-8' })}
                  </div>
                  <div>
                    <div className={cn("text-lg font-black uppercase tracking-wider mb-1", selectedMode.color)}>
                      {selectedMode.label}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-slate-900 leading-tight">
                      {selectedMode.title}
                    </h3>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedMode(null)}
                  className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-10">
                <div>
                  <div className="flex items-center gap-2 text-slate-900 font-bold mb-4">
                    <Info className="w-5 h-5 text-tech-blue" />
                    具体做法
                  </div>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg bg-slate-50 p-6 rounded-2xl border border-slate-100 font-sans">
                    {selectedMode.details.practice}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 text-slate-900 font-bold mb-4">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      合作优势
                    </div>
                    <div className="space-y-3">
                      {selectedMode.details.pros.map(pro => (
                        <div key={pro} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                          {pro}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-slate-900 font-bold mb-4">
                      <AlertCircle className="w-5 h-5 text-amber-500" />
                      核心不足
                    </div>
                    <div className="space-y-3">
                      {selectedMode.details.cons.map(con => (
                        <div key={con} className="flex items-start gap-3 text-slate-500 text-sm italic">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                          {con}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setSelectedMode(null)}
                className="w-full mt-12 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all"
              >
                返回列表
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {/* Navigation */}
      <nav className="glass-nav">
        <div className="container-custom h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-tech-blue rounded-xl flex items-center justify-center text-white font-black text-xl">H</div>
            <span className="font-extrabold text-2xl tracking-tighter text-slate-900">华创云信 <span className="text-tech-blue">×</span> 开封文旅</span>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-sm font-bold text-slate-600 uppercase tracking-widest">
            <a href="#background" className="hover:text-tech-blue transition-colors">合作背景</a>
            <a href="#product" className="hover:text-tech-blue transition-colors">产品核心</a>
            <a href="#modes" className="hover:text-tech-blue transition-colors">合作模式</a>
            <a href="#path" className="hover:text-tech-blue transition-colors">合作路径</a>
            <a href="#benefits" className="hover:text-tech-blue transition-colors">价值效益</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden hero-gradient">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-sm text-tech-blue text-xs font-black uppercase tracking-[0.2em] mb-8 border border-blue-100 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              文旅数据大模型运营合作方案
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-slate-900 mb-10 leading-[1.1] text-balance"
            >
              数智赋能开封 <br />
              开启AI文旅新纪元
            </motion.h1>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40 z-20" />
          <img 
            src="https://cdn.imagetourl.cloud/uploads/z02sxyri.png" 
            className="w-full h-full object-cover opacity-90" 
            alt="Kaifeng Millennium City Park" 
            referrerPolicy="no-referrer" 
          />
        </div>
      </section>

      {/* Background Section */}
      <section id="background" className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-slate-900">一、 合作背景</h2>
            </motion.div>

            <div className="flex flex-col gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 card-hover max-w-4xl mx-auto w-full text-center"
              >
                <div className="flex items-center justify-center gap-6 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-tech-blue flex items-center justify-center shrink-0">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-sans font-bold text-slate-900">产业趋势与挑战</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg font-sans">
                  数字经济与文旅产业深度融合，文旅数据大模型是产业智能化、精细化运营的核心。开封市文旅资源丰富，但数字化运营、数据整合存在短板，亟需专业力量推动从“传统观光”向“智慧体验”转型。
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/40 border border-slate-100 card-hover flex flex-col text-center"
                >
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-tech-blue flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">华创云信 (SH.600155)</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans">
                    上交所上市公司，公司总资产526亿元、净资产195亿元、管理资产规模超过3500亿元。公司主要业务覆盖数字金融、数字产业、数字消费三大业务板块。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/40 border border-slate-100 card-hover flex flex-col text-center"
                >
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                      <BrainCircuit className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">北京融汇金信</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans">
                    中关村、国家高新技术企业，北京市专精特新企业，具备丰富的人工智能和自然语言处理的产业经验。公司专注于人工智能、知识图谱、大数据等领域研发和应用。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/40 border border-slate-100 card-hover flex flex-col text-center"
                >
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">证联支付</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans">
                    持有中国人民银行颁发的《支付业务许可证》，致力于打造专业化金融科技服务平台，提供全行业定制化支付结算解决方案，深耕于数字交易、基金理财等场景。
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product & Stats Section */}
      <section id="product" className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="二、关于多彩黄小西" 
            subtitle="文旅数据大模型场景落地标杆，融合自研AI开发支持平台、符号推理逻辑求解器及DeepSeek-R1推理大模型。"
          />
          
          {/* Sub-section 1: Product Intro */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="h-8 w-1.5 bg-tech-blue rounded-full" />
              <h3 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-slate-900">1. 产品介绍</h3>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {[
                { icon: <Cpu />, title: '核心技术领先', desc: '融合符号推理逻辑求解器及DeepSeek-R1推理大模型，技术领先且场景适配性强。' },
                { icon: <Zap />, title: '三位一体生态', desc: '构建“游客-商户-政府”生态，提供全流程服务、数字化经营方案及文旅运行驾驶舱。' },
                { icon: <Globe />, title: '轻量化部署', desc: '支持“小程序+网页”快速上线，可灵活嵌入各类旅游服务平台。' },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 card-hover"
                >
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-tech-blue flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">
                      {React.cloneElement(feature.icon as React.ReactElement, { className: 'w-7 h-7' })}
                    </div>
                    <h3 className="text-xl md:text-2xl font-sans font-bold text-slate-900 leading-tight">{feature.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg font-sans">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {[
                { title: '', img: 'https://cdn.imagetourl.cloud/uploads/15mt65tq.jpg', tag: 'AI伴游 · 智能行程' },
                { title: '', img: 'https://cdn.imagetourl.cloud/uploads/xmr1xfsa.jpg', tag: '数字化经营 · 私域运营' },
                { title: '', img: 'https://cdn.imagetourl.cloud/uploads/yueu3wai.jpg', tag: '运行驾驶舱 · 客流预测' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex justify-center"
                >
                  <div className="relative aspect-[9/16] w-[80%] rounded-[2.5rem] overflow-hidden border-[6px] border-slate-900 shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sub-section 2: Stats */}
          <div id="stats">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="h-8 w-1.5 bg-tech-blue rounded-full" />
              <h3 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-slate-900">2. 贵州区域运营落地效果</h3>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { val: '500W+', label: '累计服务游客人次', color: 'text-tech-blue', bg: 'bg-blue-50' },
                { val: '100%', label: '24小时服务响应率', color: 'text-purple-600', bg: 'bg-purple-50' },
                { val: '30%↓', label: '商户人力成本降低', color: 'text-green-600', bg: 'bg-green-50' },
                { val: '50%↑', label: '监管效率提升', color: 'text-red-600', bg: 'bg-red-50' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 text-center card-hover"
                >
                  <div className={cn("text-4xl font-black mb-3", stat.color)}>{stat.val}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modes Section */}
      <section id="modes" className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle 
            title="三、核心合作模式" 
            subtitle="针对开封实际，建议采取“政府主导、企业运营、数据共享、利益共担”模式，具体可细分为以下三种路径。"
          />
          
          <div className="grid lg:grid-cols-3 gap-10">
            {cooperationModes.map((mode, idx) => (
              <motion.div
                key={mode.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 flex flex-col h-full card-hover"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shrink-0", mode.bg, mode.color)}>
                    {React.cloneElement(mode.icon as React.ReactElement, { className: 'w-8 h-8' })}
                  </div>
                  <div className={cn("text-xl font-black uppercase tracking-wider", mode.color)}>
                    {mode.label}
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-slate-900 leading-tight">
                    {mode.title}
                  </h3>
                </div>
                <p className="text-slate-600 mb-10 leading-relaxed text-base md:text-lg font-sans flex-1">{mode.description}</p>
                
                <button 
                  onClick={() => setSelectedMode(mode)}
                  className="w-full py-4 rounded-2xl font-bold transition-all border bg-tech-blue text-white border-tech-blue shadow-lg shadow-blue-500/20 hover:bg-blue-700"
                >
                  详情
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Path Section */}
      <section id="path" className="section-padding bg-slate-50/50 overflow-hidden">
        <div className="container-custom">
          <SectionTitle title="四、综合分析与最佳合作路径" />
          
          <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-sm border border-slate-100 relative">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-from)_0%,_transparent_60%)] from-blue-50" />
            
            <div className="relative z-10">
              {/* (一) 三种合作方式综合对比 */}
              <div className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-8 w-1.5 bg-tech-blue rounded-full" />
                  <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-slate-900">（一）三种合作方式综合对比</h3>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: '酒店智能体复制',
                      desc: '轻量易落地、快速见效，可积累数据与经验，但业态覆盖窄、长期收益有限。',
                      color: 'border-blue-100 bg-blue-50/50',
                      titleColor: 'text-blue-900'
                    },
                    {
                      title: '全场景复制',
                      desc: '赋能全业态、提升城市形象、实现数据全整合，但投入大、落地难。',
                      color: 'border-purple-100 bg-purple-50/50',
                      titleColor: 'text-purple-900'
                    },
                    {
                      title: '成立合资公司',
                      desc: '深度可持续、培育本地主体、实现利益最大化，但流程长、协调难、风险高。',
                      color: 'border-amber-100 bg-amber-50/50',
                      titleColor: 'text-amber-900'
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={cn("p-8 rounded-3xl border", item.color)}
                    >
                      <h4 className={cn("text-xl md:text-2xl font-sans font-bold mb-4", item.titleColor)}>{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed text-base md:text-lg font-sans">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* (二) 最佳合作路径 */}
              <div>
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-8 w-1.5 bg-tech-blue rounded-full" />
                  <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-slate-900">（二）最佳合作路径</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                  {/* Connecting Line */}
                  <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-0" />
                  
                  {bestPath.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 }}
                      className="relative z-10 flex flex-col items-center text-center"
                    >
                      <div className="w-24 h-24 rounded-[2rem] bg-white border-4 border-slate-50 flex items-center justify-center mb-8 shadow-xl shadow-blue-500/10 group hover:border-tech-blue transition-colors duration-500">
                        <div className="w-16 h-16 rounded-2xl bg-tech-blue flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                          {React.cloneElement(item.icon as React.ReactElement, { className: 'w-8 h-8' })}
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-slate-900 text-white text-sm font-black flex items-center justify-center border-4 border-white">
                          {idx + 1}
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-sans font-bold mb-4 text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 text-base md:text-lg leading-relaxed px-4 font-sans">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle 
            title="五、经济效益与社会效益" 
            subtitle="本次合作实现华创云信与开封市共赢，为开封文旅产业及汴数科技带来双重价值，注入文旅发展新动能。"
          />
          
          <div className="space-y-24">
            {/* (一) 经济效益 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-slate-900">（一）经济效益</h3>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* 1. 开封市文旅产业及整体效益 */}
                <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 card-hover flex flex-col">
                  <h4 className="text-xl md:text-2xl font-sans font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-2 h-6 bg-green-500 rounded-full" />
                    1. 开封市文旅产业及整体效益
                  </h4>
                  <div className="grid gap-6 flex-1">
                    {economicBenefits.industry.map((item, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                        <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                          {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5' })}
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-slate-900 mb-1 font-sans">{item.title}</h5>
                          <p className="text-slate-600 leading-relaxed text-sm md:text-base font-sans">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. 汴数科技专属效益 */}
                <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 card-hover flex flex-col">
                  <h4 className="text-xl md:text-2xl font-sans font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-2 h-6 bg-blue-500 rounded-full" />
                    2. 汴数科技专属效益
                  </h4>
                  <div className="grid gap-6 flex-1">
                    {economicBenefits.exclusive.map((item, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-1 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                          {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5' })}
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-slate-900 mb-1 font-sans">{item.title}</h5>
                          <p className="text-slate-600 leading-relaxed text-sm md:text-base font-sans">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* (二) 社会效益 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-tech-blue shadow-sm">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-slate-900">（二）社会效益</h3>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* 1. 开封市城市及文旅产业效益 */}
                <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 card-hover flex flex-col">
                  <h4 className="text-xl md:text-2xl font-sans font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-2 h-6 bg-tech-blue rounded-full" />
                    1. 开封市城市及文旅产业效益
                  </h4>
                  <div className="grid gap-6 flex-1">
                    {socialBenefits.industry.map((item, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-tech-blue flex items-center justify-center shrink-0 mt-1 group-hover:bg-tech-blue group-hover:text-white transition-colors duration-300">
                          {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5' })}
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-slate-900 mb-1 font-sans">{item.title}</h5>
                          <p className="text-slate-600 leading-relaxed text-sm md:text-base font-sans">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. 汴数科技专属合作价值 */}
                <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 card-hover flex flex-col">
                  <h4 className="text-xl md:text-2xl font-sans font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-2 h-6 bg-purple-500 rounded-full" />
                    2. 汴数科技专属合作价值
                  </h4>
                  <div className="grid gap-6 flex-1">
                    {socialBenefits.exclusive.map((item, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-1 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                          {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5' })}
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-slate-900 mb-1 font-sans">{item.title}</h5>
                          <p className="text-slate-600 leading-relaxed text-sm md:text-base font-sans">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
