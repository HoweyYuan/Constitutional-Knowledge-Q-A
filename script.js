// script.js

// 题库：基础、中等、挑战难度，每题包含题干、选项和正确项索引
const basicQuestions = [
    {question: "宪法第一条规定中华人民共和国是一个怎样的国家？", options: ["资本主义国家","封建君主制国家","社会主义国家","半殖民地国家"], answer: 2},
    {question: "宪法第二条规定中华人民共和国的一切权力属于谁？", options: ["人民","中国共产党","全国人民代表大会","中央政府"], answer: 0},
    {question: "宪法规定国旗是何种图案？", options: ["五星红旗","五星蓝旗","单星红旗","镰刀锤头旗"], answer: 0},
    {question: "宪法规定国歌是何曲？", options: ["《义勇军进行曲》","《歌唱祖国》","《我的祖国》","《社会主义好》"], answer: 0},
    {question: "宪法规定中华人民共和国的首都是哪座城市？", options: ["北京","上海","广州","成都"], answer: 0},
    {question: "中华人民共和国公民在法律面前是如何地位？", options: ["平等","不平等","优先","劣势"], answer: 0},
    {question: "宪法将哪项制度列为根本制度？", options: ["封建制度","资本主义制度","社会主义制度","民主制度"], answer: 2},
    {question: "宪法规定禁止对任何民族的何种行为？", options: ["歧视和压迫","交流和合作","学习和进步","贸易往来"], answer: 0},
    {question: "宪法规定各民族的关系应是怎样的？", options: ["平等、团结、互助、和谐","平等、竞争、互助、和谐","平等、敌对、互助、和谐","竞争、团结、互助、平等"], answer: 0},
    {question: "宪法规定国家推广哪种文字？", options: ["英语","普通话","法语","西班牙语"], answer: 1},
    {question: "宪法规定人民民主专政是以什么为基础？", options: ["工农联盟","地主联盟","资本家联盟","工商业联盟"], answer: 0},
    {question: "宪法规定国家维护什么的统一和尊严？", options: ["资本主义制度","社会主义制度","封建制度","民主制度"], answer: 1},
    {question: "宪法规定国家推广什么教育？", options: ["普及义务教育","只办大学","只办职业教育","只办中学"], answer: 0},
    {question: "宪法规定全民重要的优先发展的经济形式是什么？", options: ["公有制经济","私有制经济","集体经济","混合所有制经济"], answer: 0},
    {question: "宪法规定宪法和法律哪个高于对方？", options: ["宪法","法律","一样高","二者并行"], answer: 0}
];
const mediumQuestions = [
    {question: "宪法规定中华人民共和国主席由谁选举产生？", options: ["全国人民代表大会","国务院","中央军委","中国共产党"], answer: 0},
    {question: "宪法规定国家机构实行什么原则？", options: ["民主集中制","联邦制","君主制","分权制"], answer: 0},
    {question: "宪法规定犯罪嫌疑人享有什么权利？", options: ["获得律师帮助","必须自行辩护","不得申诉","拘留时可私自逃跑"], answer: 0},
    {question: "宪法规定全国人大代表任期为多少年？", options: ["五年","四年","三年","六年"], answer: 0},
    {question: "宪法规定下列哪项属于全国人大职权？", options: ["制定法律","行政指令","军事指挥","媒体管理"], answer: 0},
    {question: "宪法规定中华人民共和国属于什么性质的多党合作？", options: ["共产党领导的多党合作","议会制","两党制","无党制"], answer: 0},
    {question: "宪法规定国家鼓励什么经济发展？", options: ["社会主义市场经济","封建经济","纯私营经济","商业经济"], answer: 0},
    {question: "宪法规定全国人大行使什么权力？", options: ["立法权","行政权","司法权","军事权"], answer: 0},
    {question: "宪法规定公安机关负责什么工作？", options: ["维护社会治安","制定法律","审判案件","征税收"], answer: 0},
    {question: "宪法规定各级人民政府和中央国家机构之间实行什么领导关系？", options: ["中央统一领导","地方完全自主","自治区独立","中央不干预"], answer: 0},
    {question: "宪法规定国家领导人首次产生时应做什么？", options: ["宣誓就职","选举新领导","修宪","审议财务"], answer: 0},
    {question: "宪法规定下列哪项为公民的权利？", options: ["选举权和被选举权","从政权","工作权","免税权"], answer: 0},
    {question: "宪法规定宣传什么法律知识？", options: ["宪法","民法","商业法","交通法"], answer: 0},
    {question: "宪法规定哪种权利受到法律保护？", options: ["通信自由","只有财产权","娱乐自由","环境保护"], answer: 0},
    {question: "宪法规定全国人大常委会可以行使什么职权？", options: ["制定法律","行政执法","司法审判","货币发行"], answer: 0}
];
const challengeQuestions = [
    {question: "宪法规定公民有什么义务？", options: ["遵守宪法和法律","只要上税","投票","没有义务"], answer: 0},
    {question: "宪法修正案最近一次是在哪一年通过的？", options: ["2018年","2004年","1999年","1993年"], answer: 0},
    {question: "宪法规定哪种经济形式是国家经济的主导力量？", options: ["国有经济","私有经济","外资经济","合作经济"], answer: 0},
    {question: "宪法规定夫妻双方有实行什么义务？", options: ["计划生育的义务","多子多福义务","无任何义务","单亲家庭义务"], answer: 0},
    {question: "宪法规定国家实行对哪些行为必须追究责任？", options: ["违反宪法和法律的行为","批评政府","传播知识","从事农业生产"], answer: 0},
    {question: "宪法规定哪项是中华人民共和国国徽的中央图案？", options: ["天安门","长城","人民大会堂","故宫"], answer: 0},
    {question: "宪法规定中华人民共和国人民军队由谁领导？", options: ["中央军委","国务院","人大常委会","全国政协"], answer: 0},
    {question: "宪法规定公民对哪个组织保持平等地位？", options: ["中国共产党","全体公民","政府部门","社会团体"], answer: 1},
    {question: "宪法规定公民对国家首都行使什么权利？", options: ["选举权","仅仅居住权","无任何特殊权利","优先就业权"], answer: 0},
    {question: "宪法规定对侵犯宪法行为采取什么措施？", options: ["依法惩治","仅进行道歉","只能行政处罚","无需任何处理"], answer: 0},
    {question: "宪法规定婚姻、家庭、妇女和儿童应受怎样的保护？", options: ["国家保护","只有民间保护","无需保护","只保护儿童"], answer: 0},
    {question: "宪法规定中华人民共和国公民哪项权利受到法律保护？", options: ["人身自由","宗教信仰","集会示威","财产权"], answer: 0},
    {question: "宪法规定中华人民共和国公民在何种情况下不得逮捕？", options: ["未经法院或检察院批准","一切情况都可以","非重大犯罪","只能抓捕革命者"], answer: 0},
    {question: "宪法规定妇女享有哪些权利？", options: ["在政治、经济、文化、社会和家庭生活等各方面享有同男子平等的权利","只有选举权","只有受教育权","只有就业权"], answer: 0},
    {question: "宪法规定保卫祖国、抵抗侵略是公民的什么？", options: ["神圣职责","选举权","劳动权","财产权"], answer: 0}
];

// 模式切换事件
const menu = document.getElementById('menu');
const singleMode = document.getElementById('singleMode');
const duoMode = document.getElementById('duoMode');
const timeMode = document.getElementById('timeMode');
document.getElementById('btnSingle').onclick = () => { menu.style.display='none'; singleMode.style.display='block'; startSingleMode(); };
document.getElementById('btnDuo').onclick = () => { menu.style.display='none'; duoMode.style.display='block'; startDuoMode(); };
document.getElementById('btnTime').onclick = () => { menu.style.display='none'; timeMode.style.display='block'; startTimeMode(); };
// 返回菜单（页面重载）
document.getElementById('singleRestart').onclick = () => { location.reload(); };
document.getElementById('duoRestart').onclick = () => { location.reload(); };
document.getElementById('timeRestart').onclick = () => { location.reload(); };

// 数组洗牌函数
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/* 单人模式逻辑 */
function startSingleMode() {
    let score = 0;
    let currentStage = 0; // 0=基础, 1=中等, 2=挑战
    let indexInStage = 0;
    const shuffledBasic = shuffle(basicQuestions.slice());
    const shuffledMed = shuffle(mediumQuestions.slice());
    const shuffledChal = shuffle(challengeQuestions.slice());
    const totalLevels = 15; // 本局共15题
    document.getElementById('singleStats').textContent = `得分：0 / ${totalLevels}`;
    const questionEl = document.getElementById('singleQuestion');
    const options = Array.from(document.querySelectorAll('#singleOptions .option'));
    const feedbackEl = document.getElementById('singleFeedback');
    const nextBtn = document.getElementById('singleNext');
    const answerList = document.getElementById('singleAnswerList');
    const resultDiv = document.getElementById('singleResult');

    function loadQuestion() {
        feedbackEl.textContent = '';
        nextBtn.style.display = 'none';
        let qObj;
        if (currentStage === 0) {
            qObj = shuffledBasic[indexInStage];
        } else if (currentStage === 1) {
            qObj = shuffledMed[indexInStage];
        } else {
            qObj = shuffledChal[indexInStage];
        }
        const qNumber = indexInStage + 1 + currentStage * 5;
        questionEl.textContent = `第 ${qNumber} 题：${qObj.question}`;
        options.forEach((btn, i) => {
            btn.textContent = String.fromCharCode(65+i) + '. ' + qObj.options[i];
            btn.disabled = false;
            btn.style.background = '#2196F3';
        });
    }

    function endGame() {
        questionEl.parentElement.style.display = 'none';
        feedbackEl.textContent = '';
        nextBtn.style.display = 'none';
        document.getElementById('singleScore').textContent = `得分：${score} / ${totalLevels}`;
        resultDiv.style.display = 'block';
    }

    options.forEach((btn) => {
        btn.onclick = () => {
            let qObj;
            if (currentStage === 0) qObj = shuffledBasic[indexInStage];
            else if (currentStage === 1) qObj = shuffledMed[indexInStage];
            else qObj = shuffledChal[indexInStage];
            const ans = parseInt(btn.getAttribute('data-index'));
            if (ans === qObj.answer) {
                btn.style.background = 'green';
                feedbackEl.textContent = '回答正确！';
                score++;
            } else {
                btn.style.background = 'red';
                feedbackEl.textContent = '回答错误！正确答案：' + qObj.options[qObj.answer];
                options[qObj.answer].style.background = 'green';
            }
            options.forEach(b => b.disabled = true);
            nextBtn.style.display = 'block';
        };
    });

    nextBtn.onclick = () => {
        indexInStage++;
        if (currentStage === 0 && indexInStage >= 5) {
            currentStage = 1; indexInStage = 0;
        } else if (currentStage === 1 && indexInStage >= 5) {
            currentStage = 2; indexInStage = 0;
        } else if (currentStage === 2 && indexInStage >= 5) {
            endGame();
            return;
        }
        document.getElementById('singleStats').textContent = `得分：${score} / ${totalLevels}`;
        loadQuestion();
    };

    // 查看正确答案
    document.getElementById('singleReview').onclick = () => {
        if (answerList.children.length === 0) {
            let allQs = shuffledBasic.slice(0,5).concat(shuffledMed.slice(0,5), shuffledChal.slice(0,5));
            allQs.forEach((q, idx) => {
                const li = document.createElement('li');
                li.textContent = `${idx+1}. ${q.question} 答案：${q.options[q.answer]}`;
                answerList.appendChild(li);
            });
        }
        answerList.style.display = 'block';
    };

    loadQuestion();
}

/* 双人模式逻辑 */
function startDuoMode() {
    let score1 = 0, score2 = 0;
    let currentPlayer = 1;
    let questionCount = 0;
    const totalRounds = 10; // 每人5题
    const shuffled = shuffle(mediumQuestions.slice());
    document.getElementById('player1Score').textContent = '玩家1: 0';
    document.getElementById('player2Score').textContent = '玩家2: 0';
    document.getElementById('duoTurn').textContent = '当前: 玩家1 回答';
    const questionEl = document.getElementById('duoQuestion');
    const options = Array.from(document.querySelectorAll('#duoOptions .option'));
    const feedbackEl = document.getElementById('duoFeedback');
    const nextBtn = document.getElementById('duoNext');
    const answerList = document.getElementById('duoAnswerList');
    const resultDiv = document.getElementById('duoResult');

    function loadQuestion() {
        feedbackEl.textContent = '';
        nextBtn.style.display = 'none';
        const qObj = shuffled[questionCount];
        questionEl.textContent = `第 ${questionCount+1} 题：${qObj.question}`;
        options.forEach((btn, i) => {
            btn.textContent = String.fromCharCode(65+i) + '. ' + qObj.options[i];
            btn.disabled = false;
            btn.style.background = '#2196F3';
        });
    }

    function endGame() {
        questionEl.parentElement.style.display = 'none';
        feedbackEl.textContent = '';
        nextBtn.style.display = 'none';
        document.getElementById('duoScore').textContent = `玩家1: ${score1}，玩家2: ${score2}`;
        resultDiv.style.display = 'block';
    }

    options.forEach((btn) => {
        btn.onclick = () => {
            const qObj = shuffled[questionCount];
            const ans = parseInt(btn.getAttribute('data-index'));
            if (ans === qObj.answer) {
                btn.style.background = 'green';
                feedbackEl.textContent = '回答正确！';
                if (currentPlayer === 1) {
                    score1++; document.getElementById('player1Score').textContent = '玩家1: ' + score1;
                } else {
                    score2++; document.getElementById('player2Score').textContent = '玩家2: ' + score2;
                }
            } else {
                btn.style.background = 'red';
                feedbackEl.textContent = '回答错误！正确答案：' + qObj.options[qObj.answer];
                options[qObj.answer].style.background = 'green';
            }
            options.forEach(b => b.disabled = true);
            nextBtn.style.display = 'block';
        };
    });

    nextBtn.onclick = () => {
        questionCount++;
        if (questionCount >= totalRounds) {
            endGame();
            return;
        }
        currentPlayer = (currentPlayer === 1) ? 2 : 1;
        document.getElementById('duoTurn').textContent = `当前: 玩家${currentPlayer} 回答`;
        loadQuestion();
    };

    // 查看正确答案
    document.getElementById('duoReview').onclick = () => {
        if (answerList.children.length === 0) {
            shuffled.slice(0, totalRounds).forEach((q, idx) => {
                const li = document.createElement('li');
                li.textContent = `${idx+1}. ${q.question} 答案：${q.options[q.answer]}`;
                answerList.appendChild(li);
            });
        }
        answerList.style.display = 'block';
    };

    loadQuestion();
}

/* 限时模式逻辑 */
function startTimeMode() {
    let score = 0;
    let timeLeft = 60;
    let questionIndex = 0;
    const shuffled = shuffle(basicQuestions.concat(mediumQuestions, challengeQuestions));
    document.getElementById('timeScore').textContent = '得分: 0';
    document.getElementById('timeTimer').textContent = '剩余时间: ' + timeLeft;
    const questionEl = document.getElementById('timeQuestion');
    const options = Array.from(document.querySelectorAll('#timeOptions .option'));
    const feedbackEl = document.getElementById('timeFeedback');
    const answerList = document.getElementById('timeAnswerList');
    const resultDiv = document.getElementById('timeResult');

    // 倒计时
    const timerId = setInterval(() => {
        timeLeft--;
        document.getElementById('timeTimer').textContent = '剩余时间: ' + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            endGame();
        }
    }, 1000);

    function loadQuestion() {
        if (questionIndex >= shuffled.length) {
            clearInterval(timerId);
            endGame();
            return;
        }
        feedbackEl.textContent = '';
        const qObj = shuffled[questionIndex];
        questionEl.textContent = `第 ${questionIndex+1} 题：${qObj.question}`;
        options.forEach((btn, i) => {
            btn.textContent = String.fromCharCode(65+i) + '. ' + qObj.options[i];
            btn.disabled = false;
            btn.style.background = '#2196F3';
        });
    }

    function endGame() {
        questionEl.parentElement.style.display = 'none';
        feedbackEl.textContent = '';
        clearInterval(timerId);
        document.getElementById('timeScoreResult').textContent = `得分：${score}`;
        resultDiv.style.display = 'block';
    }

    options.forEach((btn) => {
        btn.onclick = () => {
            const qObj = shuffled[questionIndex];
            const ans = parseInt(btn.getAttribute('data-index'));
            if (ans === qObj.answer) {
                score++;
                feedbackEl.textContent = '回答正确！';
                btn.style.background = 'green';
            } else {
                feedbackEl.textContent = '回答错误！';
                btn.style.background = 'red';
                options[qObj.answer].style.background = 'green';
            }
            document.getElementById('timeScore').textContent = '得分: ' + score;
            options.forEach(b => b.disabled = true);
            questionIndex++;
            // 短暂延时后自动加载下一题
            setTimeout(() => {
                if (timeLeft > 0) loadQuestion();
            }, 500);
        };
    });

    // 查看正确答案
    document.getElementById('timeReview').onclick = () => {
        if (answerList.children.length === 0) {
            shuffled.slice(0, questionIndex).forEach((q, idx) => {
                const li = document.createElement('li');
                li.textContent = `${idx+1}. ${q.question} 答案：${q.options[q.answer]}`;
                answerList.appendChild(li);
            });
        }
        answerList.style.display = 'block';
    };

    loadQuestion();
}
