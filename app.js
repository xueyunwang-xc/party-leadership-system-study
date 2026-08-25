(() => {
  'use strict';

  const trueQuestions = [
    {
      id: 't1', source: '2021届四川紧缺选调（第二批）·单选10', type: 'single',
      stem: '下列对新时代党的建设的理解，正确的是（ ）。',
      choices: {
        A: '坚决反对脱离业务工作只讲政治建设',
        B: '坚持党中央的集中统一领导，就是只强调集中统一',
        C: '“党是领导一切的”中的“一切”指事无巨细的全面领导',
        D: '党的全面领导要求各类组织“众星捧月”，做到“月明星稀”'
      },
      answer: ['A'],
      explanation: 'A正确。政治建设不能脱离业务工作。B把集中统一与发扬民主对立；C把全面领导偷换成事无巨细的直接管理；D错误理解“总揽全局、协调各方”，党的领导不能压制其他组织依法履职。'
    },
    {
      id: 't2', source: '2022届四川紧缺选调（第一批）·单选3', type: 'single',
      stem: '既是我国国家制度和国家治理体系的“核心密码”，也是中国特色社会主义制度的最大优势和最本质特征的是（ ）。',
      choices: { A: '各民族一律平等', B: '人民当家作主', C: '中国共产党的领导', D: '全面依法治国' },
      answer: ['C'],
      explanation: '选C。中国共产党领导是中国特色社会主义最本质的特征，是中国特色社会主义制度的最大优势；中国共产党是最高政治领导力量。'
    },
    {
      id: 't3', source: '2022届四川紧缺选调（第一批）·单选11', type: 'single',
      stem: '加强党的政治建设，首要任务是坚决做到（ ）。',
      choices: { A: '四个自信', B: '四个意识', C: '两个维护', D: '旗帜鲜明讲政治' },
      answer: ['C'],
      explanation: '选C。加强党的政治建设的首要任务是坚决做到“两个维护”。“旗帜鲜明讲政治”是根本要求，不能与“首要任务”互换。'
    },
    {
      id: 't4', source: '2022届四川紧缺选调（第二批）·单选9', type: 'single',
      stem: '中国共产党的根本组织原则和领导制度是（ ）。',
      choices: { A: '党领导一切', B: '民主集中制', C: '党内监督制度', D: '党的代表大会制度' },
      answer: ['B'],
      explanation: '选B。民主集中制是党的根本组织原则和领导制度。“党领导一切”回答的是党的领导范围，不回答党内组织怎样运行。'
    },
    {
      id: 't5', source: '2022届四川紧缺选调（第二批）·单选10', type: 'single',
      stem: '关于新时代坚持和发展党的全面领导，下列表述错误的是（ ）。',
      choices: {
        A: '强调党领导一切即是党管理一切',
        B: '坚决维护党中央权威和集中统一领导',
        C: '强化党的组织在同级组织中的领导地位',
        D: '体现到管党治党和治国理政的方方面面'
      },
      answer: ['A'],
      explanation: '选A。党的领导是全面的、系统的、整体的，但不等于党组织包揽包办、事无巨细直接管理一切。'
    },
    {
      id: 't6', source: '2023届四川紧缺选调·单选3', type: 'single',
      stem: '以中国式现代化全面推进中华民族伟大复兴，实现中华民族伟大复兴的根本保证是（ ）。',
      choices: { A: '党的领导', B: '以人民为中心', C: '全面从严治党', D: '中国特色社会主义制度' },
      answer: ['A'],
      explanation: '选A。中国共产党的坚强领导是实现中华民族伟大复兴的根本保证。题目问的是“根本保证”，不是价值立场或具体治党举措。'
    },
    {
      id: 't7', source: '2023届四川紧缺选调·单选4', type: 'single',
      stem: '党的二十大报告指出，全党必须牢记“五个必由之路”。其中，新时代我国发展壮大的必由之路是（ ）。',
      choices: { A: '坚持党的全面领导', B: '中国特色社会主义', C: '贯彻新发展理念', D: '全面从严治党' },
      answer: ['C'],
      explanation: '选C。贯彻新发展理念是新时代我国发展壮大的必由之路；坚持党的全面领导对应“坚持和发展中国特色社会主义”。本项目旧题库曾误标A，本页已依据规范原文纠正。'
    },
    {
      id: 't8', source: '2024届四川紧缺选调·判断13', type: 'single',
      stem: '制度优势是一个国家的最大优势，制度竞争是国家间最根本的竞争。（ ）',
      choices: { A: '正确', B: '错误' },
      answer: ['A'],
      explanation: '判断正确。注意相邻表述：中国特色社会主义制度的最大优势是中国共产党领导；本题则问一般意义上的国家制度优势和制度竞争。'
    },
    {
      id: 't9', source: '2024届四川紧缺选调·单选25', type: 'single',
      stem: '新时代党和国家事业取得历史性成就、发生历史性变革的决定性因素是（ ）。',
      choices: { A: '习近平新时代中国特色社会主义思想', B: '“两个确立”', C: '党的坚强领导', D: '“两个维护”' },
      answer: ['B'],
      explanation: '选B。“两个确立”是决定性因素；“两个维护”是行动要求。其余选项均为重要正面表述，但没有精准命中题干帽子。'
    },
    {
      id: 't10', source: '2025届四川紧缺选调·单选22', type: 'single',
      stem: '党的二十届三中全会指出，进一步全面深化改革、推进中国式现代化的根本保证是（ ）。',
      choices: { A: '中国共产党的领导', B: '马克思主义的世界观和方法论', C: '国家安全', D: '习近平新时代中国特色社会主义思想' },
      answer: ['A'],
      explanation: '选A。坚持党的全面领导是进一步全面深化改革、推进中国式现代化的根本保证。其他选项有各自正式定位，不能代替本题固定帽子。'
    },
    {
      id: 't11', source: '2026届四川紧缺选调（回忆版）·单选24', type: 'single',
      stem: '中国特色金融发展之路最本质的特征、我国金融发展最大的政治优势和制度优势是（ ）。',
      choices: {
        A: '坚持把防控风险作为金融工作的永恒主题',
        B: '坚持把金融服务实体经济作为根本宗旨',
        C: '以人民为中心的价值取向',
        D: '中国共产党的领导'
      },
      answer: ['D'],
      explanation: '选D。题干同时出现“最本质的特征”和“最大的政治优势、制度优势”，直接锁定中国共产党的领导。'
    }
  ];

  const practiceQuestions = [
    {
      id: 'p1', source: '自编预测题·固定帽子', type: 'single',
      stem: '下列关于党的全面领导的固定定位，表述正确的是（ ）。',
      choices: {
        A: '中国共产党领导是中国特色社会主义制度的根本制度',
        B: '中国共产党是最高国家权力机关',
        C: '中国共产党领导是中国特色社会主义制度的最大优势',
        D: '党中央集中统一领导是党的根本组织原则'
      },
      answer: ['C'],
      explanation: '选C。根本制度是社会主义制度；最高国家权力机关是全国人民代表大会；党的根本组织原则和领导制度是民主集中制。'
    },
    {
      id: 'p2', source: '自编预测题·六项制度', type: 'multiple',
      stem: '下列属于党的领导制度体系主要内容的有（ ）。',
      choices: {
        A: '建立不忘初心、牢记使命的制度',
        B: '完善坚定维护党中央权威和集中统一领导的各项制度',
        C: '完善政府宏观经济治理制度',
        D: '完善全面从严治党制度'
      },
      answer: ['A', 'B', 'D'],
      explanation: '选ABD。C属于国家经济治理的具体制度，不是教材概括的党的领导制度体系六项内容。'
    },
    {
      id: 'p3', source: '自编预测题·角色对应', type: 'single',
      stem: '党的领导制度体系中，反映其价值追求的是（ ）。',
      choices: {
        A: '健全为人民执政、靠人民执政各项制度',
        B: '完善全面从严治党制度',
        C: '健全党的全面领导制度',
        D: '健全提高党的执政能力和领导水平制度'
      },
      answer: ['A'],
      explanation: '选A。为人民执政、靠人民执政体现价值追求；全面领导是主体内容；能力水平是实践要求；全面从严治党是坚强保证。'
    },
    {
      id: 'p4', source: '自编预测题·角色对应', type: 'single',
      stem: '党的领导制度体系的主体内容是（ ）。',
      choices: {
        A: '建立不忘初心、牢记使命的制度',
        B: '健全党的全面领导制度',
        C: '完善全面从严治党制度',
        D: '健全为人民执政、靠人民执政各项制度'
      },
      answer: ['B'],
      explanation: '选B。健全党的全面领导制度，确保党在各种组织中发挥领导作用，是制度体系的主体内容。'
    },
    {
      id: 'p5', source: '自编预测题·边界辨析', type: 'single',
      stem: '坚持党对一切工作的领导，意味着党组织可以直接替代国家机关履行法定职责。（ ）',
      choices: { A: '正确', B: '错误' },
      answer: ['B'],
      explanation: '判断错误。党的领导是总揽全局、协调各方，各国家机关仍依法履行职责；全面领导不等于包揽包办。'
    },
    {
      id: 'p6', source: '自编预测题·组织运行', type: 'single',
      stem: '既强调充分发扬党内民主，又要求形成统一意志和行动，这体现党的（ ）。',
      choices: { A: '群众路线', B: '民主集中制', C: '全面领导制度', D: '请示报告制度' },
      answer: ['B'],
      explanation: '选B。民主是正确集中的前提和基础，集中是民主的必然要求和归宿。'
    },
    {
      id: 'p7', source: '自编预测题·党中央权威', type: 'multiple',
      stem: '关于维护党中央权威和集中统一领导，下列表述正确的有（ ）。',
      choices: {
        A: '党中央集中统一领导是党的领导的最高原则',
        B: '最关键的是维护习近平同志党中央的核心、全党的核心地位',
        C: '维护党中央权威与坚持民主集中制相互对立',
        D: '党中央决策部署必须得到各级党组织贯彻落实'
      },
      answer: ['A', 'B', 'D'],
      explanation: '选ABD。维护党中央权威和坚持民主集中制完全一致，不是相互对立。'
    },
    {
      id: 'p8', source: '自编预测题·材料应用', type: 'single',
      stem: '某地党委研究发展方向、统筹重大事项，各职能部门依职责具体实施。这最准确体现了（ ）。',
      choices: {
        A: '党组织事无巨细直接管理一切',
        B: '党总揽全局、协调各方，各部门各司其职',
        C: '只要依法行政就不需要党的领导',
        D: '党委与政府职能完全相同'
      },
      answer: ['B'],
      explanation: '选B。党委发挥领导核心作用，职能部门依法履职，正是领导与履职分工的统一。'
    },
    {
      id: 'p9', source: '自编预测题·角色对应', type: 'single',
      stem: '党的领导制度体系中，体现实践要求的是（ ）。',
      choices: {
        A: '健全提高党的执政能力和领导水平制度',
        B: '建立不忘初心、牢记使命的制度',
        C: '健全为人民执政、靠人民执政各项制度',
        D: '完善全面从严治党制度'
      },
      answer: ['A'],
      explanation: '选A。提高把方向、谋大局、定政策、促改革的能力，对应实践要求。'
    },
    {
      id: 'p10', source: '自编预测题·综合辨析', type: 'multiple',
      stem: '下列固定对应正确的有（ ）。',
      choices: {
        A: '党的领导制度——我国的根本领导制度',
        B: '民主集中制——党的根本组织原则和领导制度',
        C: '“两个维护”——加强党的政治建设的首要任务',
        D: '全国人民代表大会——最高政治领导力量'
      },
      answer: ['A', 'B', 'C'],
      explanation: '选ABC。最高政治领导力量是中国共产党；全国人民代表大会是最高国家权力机关。'
    }
  ];

  const revolutionQuestions = [
    {
      id: 'r1', source: '2024年四川省属事业单位真题·单选44', type: 'single',
      stem: '深入推进党的自我革命实践的战略目标是（ ）。',
      choices: { A: '解决大党独有难题', B: '跳出历史周期率', C: '引领伟大社会革命', D: '坚持党中央集中统一领导' },
      answer: ['B'],
      explanation: '选B。跳出历史周期率是战略目标；解决大党独有难题是主攻方向；引领伟大社会革命是根本目的；坚持党中央集中统一领导是根本保证。'
    },
    {
      id: 'r2', source: '本地模考题·“九个以”计数', type: 'single',
      stem: '下列表述正确的有几项？\n①自我监督和人民监督相结合——战略目标\n②引领伟大社会革命——主攻方向\n③健全全面从严治党体系——有效途径\n④锻造坚强组织、建设过硬队伍——重要着力点\n⑤正风肃纪反腐——重要抓手',
      choices: { A: '1项', B: '2项', C: '3项', D: '4项' },
      answer: ['C'],
      explanation: '选C。③④⑤正确。①应为强大动力；②应为根本目的。因此共有3项正确。'
    },
    {
      id: 'r3', source: '自编迁移题·三项易混', type: 'single',
      stem: '深入推进党的自我革命的根本目的是（ ）。',
      choices: { A: '引领伟大社会革命', B: '跳出历史周期率', C: '解决大党独有难题', D: '健全全面从严治党体系' },
      answer: ['A'],
      explanation: '选A。目的回答“自我革命最终为了什么”，即以伟大自我革命引领伟大社会革命。'
    },
    {
      id: 'r4', source: '自编迁移题·三项易混', type: 'single',
      stem: '深入推进党的自我革命的主攻方向是（ ）。',
      choices: { A: '正风肃纪反腐', B: '解决大党独有难题', C: '跳出历史周期率', D: '建设过硬队伍' },
      answer: ['B'],
      explanation: '选B。主攻方向回答“当前主要对准什么难题”；正风肃纪反腐是重要抓手。'
    },
    {
      id: 'r5', source: '自编迁移题·动力辨析', type: 'single',
      stem: '深入推进党的自我革命的强大动力是（ ）。',
      choices: { A: '坚持党中央集中统一领导', B: '新时代中国特色社会主义思想', C: '自我监督和人民监督相结合', D: '健全全面从严治党体系' },
      answer: ['C'],
      explanation: '选C。A是根本保证，B是根本遵循，D是有效途径。'
    }
  ];

  const doubleQuestions = [
    {
      id: 'd1', source: '2026届四川紧缺选调（回忆版）·单选30', type: 'single',
      stem: '中国共产党区别于其他政党最显著的标志、不断从胜利走向新的胜利的关键所在是（ ）。',
      choices: {
        A: '在坚持顶层设计的同时坚持实践探索',
        B: '在坚持自立自强的同时坚持对外开放',
        C: '在领导经济建设的同时领导各方面建设',
        D: '在进行社会革命的同时不断进行自我革命'
      },
      answer: ['D'],
      explanation: '选D。党既领导人民改造社会，又不断改造党自身。社会革命锻造和成就伟大的党，自我革命保障和推动伟大的事业。'
    },
    {
      id: 'd2', source: '自编迁移题·概念边界', type: 'single',
      stem: '新时代所说的“伟大社会革命”只指通过武装斗争推翻旧政权。（ ）',
      choices: { A: '正确', B: '错误' },
      answer: ['B'],
      explanation: '判断错误。革命、建设、改革和新时代坚持发展中国特色社会主义，都是党领导人民推进社会深刻变革的不同历史阶段。'
    },
    {
      id: 'd3', source: '自编迁移题·卫健情境', type: 'single',
      stem: '某地持续完善公共卫生、医疗服务、医疗保障和基层卫生体系；与此同时，领导这一改革的党组织整治腐败、改进作风、提高治理能力。前后两项分别属于（ ）。',
      choices: {
        A: '自我革命；社会革命',
        B: '社会革命；自我革命',
        C: '社会革命；社会革命',
        D: '自我革命；自我革命'
      },
      answer: ['B'],
      explanation: '选B。改造社会制度和运行方式属于社会革命；党组织整治自身问题、提升能力属于自我革命。先看改造对象即可判断。'
    },
    {
      id: 'd4', source: '自编迁移题·关系辨析', type: 'multiple',
      stem: '关于伟大自我革命和伟大社会革命的关系，下列说法正确的有（ ）。',
      choices: {
        A: '自我革命为社会革命提供坚强领导保障',
        B: '社会革命中的新任务会检验并促进党的自我革命',
        C: '社会革命完成后，自我革命即可停止',
        D: '两种革命改造对象不同，但相互促进'
      },
      answer: ['A', 'B', 'D'],
      explanation: '选ABD。两种革命长期相互促进，不能把任何一次阶段性成就理解为自我革命可以停止。'
    },
    {
      id: 'd5', source: '自编迁移题·固定帽子', type: 'multiple',
      stem: '下列对应正确的有（ ）。',
      choices: {
        A: '党的自我革命根本目的——引领伟大社会革命',
        B: '党的自我革命战略目标——解决大党独有难题',
        C: '党的自我革命主攻方向——解决大党独有难题',
        D: '伟大社会革命——党对自身问题的纠正和改造'
      },
      answer: ['A', 'C'],
      explanation: '选AC。战略目标是跳出历史周期率；社会革命改造社会和客观世界，党对自身的改造属于自我革命。'
    }
  ];

  const positionQuestions = [
    {
      id: 's1', source: '2025届四川紧缺选调·判断10', type: 'single',
      stem: '中国特色社会主义制度的优势能不能发挥好，关键在党的制度能不能制定好。（ ）',
      choices: { A: '正确', B: '错误' },
      answer: ['B'],
      explanation: '判断错误。规范表述是“关键在党的领导制度能不能执行好”。题干同时把“党的领导制度”缩成“党的制度”，又把“执行好”换成“制定好”。'
    },
    {
      id: 's2', source: '教材原文迁移题·四梁八柱', type: 'multiple',
      stem: '中国特色社会主义制度体系中，起“四梁八柱”作用的有（ ）。',
      choices: { A: '根本制度', B: '基本制度', C: '重要制度', D: '临时政策' },
      answer: ['A', 'B', 'C'],
      explanation: '选ABC。根本制度、基本制度、重要制度共同构成制度体系的基本骨架。'
    },
    {
      id: 's3', source: '教材原文迁移题·统领地位', type: 'single',
      stem: '中国特色社会主义制度体系中，具有统领地位的是（ ）。',
      choices: { A: '人民代表大会制度', B: '社会主义基本经济制度', C: '党的领导制度', D: '基层群众自治制度' },
      answer: ['C'],
      explanation: '选C。题干问“整个中国特色社会主义制度体系中的统领”，固定对应党的领导制度。'
    },
    {
      id: 's4', source: '教材原文迁移题·治理现代化', type: 'single',
      stem: '国家治理体系和治理能力现代化的关键是（ ）。',
      choices: { A: '党的领导制度', B: '民主集中制', C: '人民代表大会制度', D: '全面依法治国' },
      answer: ['A'],
      explanation: '选A。党的领导制度明确领导关系、领导主体和领导对象，发挥提纲挈领、无可替代的作用。'
    },
    {
      id: 's5', source: '自编迁移题·核心与关键', type: 'multiple',
      stem: '下列对应正确的有（ ）。',
      choices: {
        A: '中国共产党领导——国家治理体系的核心',
        B: '党的领导制度——中国特色社会主义制度建设的关键',
        C: '人民代表大会制度——中国特色社会主义制度体系的统领',
        D: '民主集中制——国家治理体系和治理能力现代化的关键'
      },
      answer: ['A', 'B'],
      explanation: '选AB。统领地位和治理现代化关键都对应党的领导制度；人民代表大会制度是根本政治制度，民主集中制是党的根本组织原则和领导制度。'
    }
  ];

  const rulesQuestions = [
    {
      id: 'u1', source: '本地公基题库·判断64', type: 'single',
      stem: '“三重一大”制度要求，凡重大决策、重要干部任免、重要项目安排和大额资金使用，必须经集体讨论作出决定。（ ）',
      choices: { A: '正确', B: '错误' },
      answer: ['A'],
      explanation: '判断正确。“三重一大”是民主集中制在重大事项决策中的具体应用，核心程序是集体讨论决定。'
    },
    {
      id: 'u2', source: '本地《母题精讲上册》·母题', type: 'single',
      stem: '下列关于党的民主集中制基本原则的表述，有误的是（ ）。',
      choices: {
        A: '党员个人服从党的组织，少数服从多数，下级组织服从上级组织',
        B: '党的各级委员会向同级代表大会负责并报告工作',
        C: '党的各级组织要按规定实行党务公开',
        D: '党内所有问题都由党的委员会按照民主集中、会议决定的原则集体决定'
      },
      answer: ['D'],
      explanation: '选D。必须由委员会集体讨论决定的是“凡属重大问题”，不是党内所有问题；完整程序还包括集体领导和个别酝酿。'
    },
    {
      id: 'u3', source: '本地《母题精讲上册》·单选1', type: 'single',
      stem: '凡属重大问题，要按照集体领导、民主集中、会议决定和（ ）的原则，由党的委员会集体讨论，作出决定。',
      choices: { A: '组织协调', B: '社会听证', C: '个别酝酿', D: '多元参考' },
      answer: ['C'],
      explanation: '选C。固定顺序是：集体领导、民主集中、个别酝酿、会议决定。'
    },
    {
      id: 'u4', source: '本地《母题精讲上册》·多选2', type: 'multiple',
      stem: '关于“四个服从”，下列说法正确的有（ ）。',
      choices: {
        A: '下级组织服从上级组织',
        B: '全党各个组织和全体党员服从党的全国代表大会和中央委员会',
        C: '少数服从多数',
        D: '党员个人服从党组织书记'
      },
      answer: ['A', 'B', 'C'],
      explanation: '选ABC。个人服从的是党的组织，不是某位书记个人。四个服从的核心是最后一项，即全党服从党的全国代表大会和中央委员会。'
    },
    {
      id: 'u5', source: '自编迁移题·机关名称', type: 'single',
      stem: '党的最高领导机关是（ ）。',
      choices: { A: '全国人民代表大会', B: '党的全国代表大会', C: '党的全国代表大会和它所产生的中央委员会', D: '中央纪律检查委员会' },
      answer: ['C'],
      explanation: '选C。只选“党的全国代表大会”不完整；党章的完整表述还包括它所产生的中央委员会。全国人民代表大会是最高国家权力机关。'
    },
    {
      id: 'u6', source: '自编迁移题·名称陷阱', type: 'single',
      stem: '“党的全国人民代表大会”是党的最高领导机关。（ ）',
      choices: { A: '正确', B: '错误' },
      answer: ['B'],
      explanation: '判断错误。不存在这一规范名称。党内是“党的全国代表大会”；国家层面是“全国人民代表大会”。'
    },
    {
      id: 'u7', source: '党章原文迁移题·选举例外', type: 'multiple',
      stem: '党的各级领导机关原则上由选举产生，但下列哪些属于例外？（ ）',
      choices: { A: '党的地方各级代表大会', B: '派出的代表机关', C: '在非党组织中的党组', D: '党的地方各级委员会' },
      answer: ['B', 'C'],
      explanation: '选BC。派出的代表机关由上级党组织派出；非党组织中的党组由批准设立它的党组织决定，因此不适用一般选举产生规则。'
    },
    {
      id: 'u8', source: '自编迁移题·知识归属', type: 'single',
      stem: '“四个服从、领导机关原则选举、重大问题集体决定”共同属于（ ）。',
      choices: { A: '党的民主集中制基本原则', B: '党的纪律处分种类', C: '党的政治建设五项帽子', D: '党的领导制度体系六项内容' },
      answer: ['A'],
      explanation: '选A。把这些规则放回民主集中制六项基本原则，才能避免零散死记。'
    }
  ];

  const politicalQuestions = [
    {
      id: 'g1', source: '2022届四川紧缺选调（第一批）·单选11', type: 'single',
      stem: '加强党的政治建设，首要任务是坚决做到（ ）。',
      choices: { A: '四个自信', B: '四个意识', C: '两个维护', D: '旗帜鲜明讲政治' },
      answer: ['C'],
      explanation: '选C。“两个维护”集中体现为坚决维护习近平总书记党中央的核心、全党的核心地位，坚决维护党中央权威和集中统一领导。D“旗帜鲜明讲政治”是马克思主义政党的根本要求。'
    },
    {
      id: 'g2', source: '2027四川紧缺选调全真模考（第二季）·个人错题35', type: 'single',
      stem: '下列关于党的政治建设的说法，正确的是（ ）。',
      choices: {
        A: '保证全党服从中央、维护党中央权威和集中统一领导，是马克思主义政党的根本要求',
        B: '旗帜鲜明讲政治，是党的政治建设的首要任务',
        C: '政治方向是党生存发展第一位的问题',
        D: '党的政治建设是党的基础性建设'
      },
      answer: ['C'],
      explanation: '选C。A、B互换了“根本要求”和“首要任务”；D应为根本性建设，党的思想建设才是基础性建设。'
    },
    {
      id: 'g3', source: '2022年7月16日四川宜宾事业单位·单选63', type: 'single',
      stem: '党的十九大报告指出，（ ）是党的政治建设的首要任务。',
      choices: {
        A: '全心全意为人民服务',
        B: '坚定理想信念，永葆共产党人政治本色',
        C: '共产主义远大理想和中国特色社会主义共同理想',
        D: '保证全党服从中央，坚持党中央权威和集中统一领导'
      },
      answer: ['D'],
      explanation: '选D。题干直接问“党的政治建设的首要任务”，必须完整对应“保证全党服从中央，坚持党中央权威和集中统一领导”。'
    },
    {
      id: 'g4', source: '自编迁移题·帽子辨析', type: 'single',
      stem: '“旗帜鲜明讲政治”在党的政治建设中对应的规范定位是（ ）。',
      choices: { A: '根本要求', B: '首要任务', C: '第一位问题', D: '基础性、经常性工作' },
      answer: ['A'],
      explanation: '选A。旗帜鲜明讲政治是我们党作为马克思主义政党的根本要求；首要任务指向服从中央、维护党中央权威和集中统一领导。'
    },
    {
      id: 'g5', source: '自编迁移题·成组辨析', type: 'multiple',
      stem: '下列对应正确的有（ ）。',
      choices: {
        A: '党的思想建设——根本性建设',
        B: '党的政治建设——根本性建设',
        C: '旗帜鲜明讲政治——党的政治建设首要任务',
        D: '营造良好政治生态——党的政治建设基础性、经常性工作'
      },
      answer: ['B', 'D'],
      explanation: '选BD。思想建设是基础性建设；旗帜鲜明讲政治是根本要求。政治建设是根本性建设，营造良好政治生态是基础性、经常性工作。'
    }
  ];

  const storageKey = 'xds-party-leadership-study-v1';
  const state = loadState();

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey)) || {};
      return { marks: saved.marks || {}, recall: saved.recall || {}, results: saved.results || {} };
    } catch (_) {
      return { marks: {}, recall: {}, results: {} };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
      return true;
    } catch (_) {
      return false;
    }
  }

  function renderQuiz(containerId, questions, group) {
    const container = document.getElementById(containerId);
    container.innerHTML = questions.map((q, index) => {
      const inputType = q.type === 'multiple' ? 'checkbox' : 'radio';
      const choices = Object.entries(q.choices).map(([key, value]) => `
        <label class="choice-label" data-choice="${key}">
          <input type="${inputType}" name="${group}-${q.id}" value="${key}">
          <span><span class="choice-key">${key}.</span> ${value}</span>
        </label>
      `).join('');
      return `
        <article class="question-card" data-question="${q.id}" data-group="${group}">
          <div class="question-meta"><span>第${index + 1}题</span><span>${q.source}</span><span>${q.type === 'multiple' ? '多选' : '单选/判断'}</span></div>
          <div class="question-stem">${q.stem}</div>
          <div class="choice-list">${choices}</div>
          <div class="explanation"><strong>答案：${q.answer.join('')}</strong><br>${q.explanation}</div>
        </article>
      `;
    }).join('');

    container.addEventListener('change', (event) => {
      const label = event.target.closest('.choice-label');
      if (!label) return;
      const card = label.closest('.question-card');
      const input = event.target;
      if (input.type === 'radio') {
        card.querySelectorAll('.choice-label').forEach((item) => item.classList.remove('selected'));
      }
      label.classList.toggle('selected', input.checked);
    });
  }

  function normalize(values) {
    return [...values].sort().join('');
  }

  function submitQuiz(group, questions) {
    let correct = 0;
    const answers = [];
    questions.forEach((q) => {
      const card = document.querySelector(`[data-group="${group}"][data-question="${q.id}"]`);
      const selected = [...card.querySelectorAll('input:checked')].map((input) => input.value);
      const isCorrect = normalize(selected) === normalize(q.answer);
      if (isCorrect) correct += 1;
      answers.push({ id: q.id, selected: normalize(selected) || '未答', correct: isCorrect });
      card.classList.add('reviewed', isCorrect ? 'correct' : 'wrong');
      card.querySelectorAll('.choice-label').forEach((label) => {
        const key = label.dataset.choice;
        label.classList.remove('answer-correct', 'answer-wrong');
        if (q.answer.includes(key)) label.classList.add('answer-correct');
        else if (selected.includes(key)) label.classList.add('answer-wrong');
        label.querySelector('input').disabled = true;
      });
    });
    const rate = Math.round(correct / questions.length * 100);
    const output = document.getElementById(`${group}Result`);
    output.textContent = `${correct} / ${questions.length}，正确率 ${rate}%${rate >= 80 ? '，达到本专题阶段线' : '，未达到80%阶段线'}`;
    output.className = `quiz-result ${rate >= 80 ? 'pass' : 'fail'}`;
    state.marks[group] = rate >= 80;
    state.results[group] = { correct, total: questions.length, rate, answers };
    syncMarks();
    saveState();
  }

  function resetQuiz(group, questions) {
    questions.forEach((q) => {
      const card = document.querySelector(`[data-group="${group}"][data-question="${q.id}"]`);
      card.classList.remove('reviewed', 'correct', 'wrong');
      card.querySelectorAll('.choice-label').forEach((label) => {
        label.classList.remove('selected', 'answer-correct', 'answer-wrong');
        const input = label.querySelector('input');
        input.checked = false;
        input.disabled = false;
      });
    });
    const output = document.getElementById(`${group}Result`);
    output.textContent = '尚未提交';
    output.className = 'quiz-result';
    delete state.results[group];
    state.marks[group] = false;
    syncMarks();
    saveState();
  }

  function syncMarks() {
    document.querySelectorAll('.progress-check').forEach((input) => {
      input.checked = Boolean(state.marks[input.dataset.step]);
    });
    document.querySelectorAll('.mark-button').forEach((button) => {
      const done = Boolean(state.marks[button.dataset.mark]);
      button.classList.toggle('done', done);
      button.textContent = done ? '已标记' : button.dataset.mark === 'framework' ? '标记已复述' : '标记已掌握';
    });
    const progressKeys = ['framework', 'system', 'revolution', 'double', 'position', 'rules', 'politics', 'true', 'practice'];
    const doneCount = progressKeys.filter((key) => state.marks[key]).length;
    document.getElementById('progressText').textContent = `${doneCount} / ${progressKeys.length}`;
    document.getElementById('progressBar').style.width = `${doneCount / progressKeys.length * 100}%`;
  }

  function setupProgress() {
    document.querySelectorAll('.progress-check').forEach((input) => {
      input.addEventListener('change', () => {
        state.marks[input.dataset.step] = input.checked;
        syncMarks();
        saveState();
      });
    });
    document.querySelectorAll('.mark-button').forEach((button) => {
      button.addEventListener('click', () => {
        const key = button.dataset.mark;
        state.marks[key] = !state.marks[key];
        syncMarks();
        saveState();
      });
    });
  }

  function setupRecall() {
    const fields = document.querySelectorAll('[data-recall]');
    fields.forEach((field) => {
      field.value = state.recall[field.dataset.recall] || '';
    });
    document.getElementById('saveRecallBtn').addEventListener('click', () => {
      fields.forEach((field) => { state.recall[field.dataset.recall] = field.value; });
      const saved = saveState();
      const status = document.getElementById('saveStatus');
      status.textContent = saved ? '已保存在当前浏览器' : '当前浏览器禁止本地保存，答案仍保留在本页';
      window.setTimeout(() => { status.textContent = ''; }, 2200);
    });
  }

  function setupRecallMode() {
    const button = document.getElementById('recallModeBtn');
    button.addEventListener('click', () => {
      const active = document.body.classList.toggle('recall-mode');
      button.setAttribute('aria-pressed', String(active));
      button.textContent = active ? '退出闭卷' : '开启闭卷';
    });
  }

  function setupNavigation() {
    const links = [...document.querySelectorAll('.study-nav nav a')];
    const targets = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .2, .6] });
    targets.forEach((target) => observer.observe(target));
  }

  function setupReport() {
    const button = document.getElementById('copyReportBtn');
    const labels = {
      true: '本地真题',
      revolution: '自我革命专项',
      double: '双革命对比专项',
      position: '制度定位专项',
      rules: '组织规则专项',
      political: '政治建设专项',
      practice: '预测练习'
    };
    button.addEventListener('click', async () => {
      document.querySelectorAll('[data-recall]').forEach((field) => {
        state.recall[field.dataset.recall] = field.value;
      });
      saveState();
      const lines = ['党的领导制度专题答题报告'];
      ['true', 'revolution', 'double', 'position', 'rules', 'political', 'practice'].forEach((group) => {
        const result = state.results[group];
        if (!result) {
          lines.push(`${labels[group]}：未提交`);
          return;
        }
        const wrong = result.answers.filter((item) => !item.correct).map((item) => `${item.id}:${item.selected}`);
        lines.push(`${labels[group]}：${result.correct}/${result.total}（${result.rate}%）；错题：${wrong.length ? wrong.join('、') : '无'}`);
      });
      lines.push('闭卷输出：');
      document.querySelectorAll('[data-recall]').forEach((field, index) => {
        lines.push(`${index + 1}. ${field.value.trim() || '未填写'}`);
      });
      const report = lines.join('\n');
      try {
        await navigator.clipboard.writeText(report);
        button.textContent = '报告已复制';
      } catch (_) {
        window.prompt('请复制以下答题报告', report);
        button.textContent = '已生成报告';
      }
      window.setTimeout(() => { button.textContent = '复制答题报告'; }, 2200);
    });
  }

  renderQuiz('trueQuiz', trueQuestions, 'true');
  renderQuiz('revolutionQuiz', revolutionQuestions, 'revolution');
  renderQuiz('doubleQuiz', doubleQuestions, 'double');
  renderQuiz('positionQuiz', positionQuestions, 'position');
  renderQuiz('rulesQuiz', rulesQuestions, 'rules');
  renderQuiz('politicalQuiz', politicalQuestions, 'political');
  renderQuiz('practiceQuiz', practiceQuestions, 'practice');
  setupProgress();
  setupRecall();
  setupRecallMode();
  setupNavigation();
  setupReport();
  syncMarks();

  document.querySelector('[data-submit="true"]').addEventListener('click', () => submitQuiz('true', trueQuestions));
  document.querySelector('[data-submit="revolution"]').addEventListener('click', () => submitQuiz('revolution', revolutionQuestions));
  document.querySelector('[data-submit="double"]').addEventListener('click', () => submitQuiz('double', doubleQuestions));
  document.querySelector('[data-submit="position"]').addEventListener('click', () => submitQuiz('position', positionQuestions));
  document.querySelector('[data-submit="rules"]').addEventListener('click', () => submitQuiz('rules', rulesQuestions));
  document.querySelector('[data-submit="political"]').addEventListener('click', () => submitQuiz('political', politicalQuestions));
  document.querySelector('[data-submit="practice"]').addEventListener('click', () => submitQuiz('practice', practiceQuestions));
  document.querySelector('[data-reset="true"]').addEventListener('click', () => resetQuiz('true', trueQuestions));
  document.querySelector('[data-reset="revolution"]').addEventListener('click', () => resetQuiz('revolution', revolutionQuestions));
  document.querySelector('[data-reset="double"]').addEventListener('click', () => resetQuiz('double', doubleQuestions));
  document.querySelector('[data-reset="position"]').addEventListener('click', () => resetQuiz('position', positionQuestions));
  document.querySelector('[data-reset="rules"]').addEventListener('click', () => resetQuiz('rules', rulesQuestions));
  document.querySelector('[data-reset="political"]').addEventListener('click', () => resetQuiz('political', politicalQuestions));
  document.querySelector('[data-reset="practice"]').addEventListener('click', () => resetQuiz('practice', practiceQuestions));
  document.getElementById('printBtn').addEventListener('click', () => window.print());
})();
