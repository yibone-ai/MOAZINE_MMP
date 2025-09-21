// 테스트 데이터
const testData = {
    questions: [
        {
            id: 1,
            text: "주말 여행, 드레스에서 나누기?",
            options: [
                "오늘 특별한 코트를 입고",
                "편안 경험하려 참게",
                "좋겠대 도타 독촉",
                "A저기선 스토리 좋던코드",
                "접근치기 어디론가 매력 참작"
            ]
        },
        {
            id: 2,
            text: "순간 택배물건 징수소?",
            options: [
                "한호을 취향",
                "체험선 연설",
                "흰면 풍곤",
                "스마트한 대괜찮이",
                "오면서 분석"
            ]
        },
        {
            id: 3,
            text: "내인스타 배드에서 처음 바는 체험 마이노는 안?",
            options: [
                "상향 통학트걸",
                "전성 이른 정희",
                "예걸어 좋잔보년효과",
                "개인어 계열매 효한 물어",
                "오리 때신데지고옥 속자"
            ]
        },
        {
            id: 4,
            text: "내가 는 체험 어떻니 쓰는 안?",
            options: [
                "못 취향을 같은 스터텅",
                "선성 같아 타겐, 다단이 소좀",
                "고 먼겠기 앤제, 숭앨",
                "프건어 편스웨, 탈, 건이팜",
                "택스크 키제 주입맞드"
            ]
        },
        {
            id: 5,
            text: "인생에서 내 없어 시뜨이기 포인트게장?",
            options: [
                "스테핀 갖각",
                "감자적 컨치",
                "해한 스트응 음",
                "좀 컨뒤어처럼",
                "마티 적영"
            ]
        }
    ],
    results: {
        "fashionista": {
            title: "Fashionista",
            description: "트렌드에 민감하고 스타일을 중시하는 당신",
            subtitle: "하이패션과 문화 전반의 깊이있는 콘텐츠로",
            magazine: "Vogue Korea",
            reason: "패션·예술·문화 전반을 다루는 보그 코리아는 하이패션 중심의 트렌디하고 자유로운 콘텐츠로 당신의 스타일 감각을 한층 더 업그레이드시켜줄 것입니다."
        },
        "sophisticate": {
            title: "Sophisticate",
            description: "세련되고 품격있는 라이프스타일을 추구하는 당신",
            subtitle: "라이프스타일과 문화가 만나는 곳에서",
            magazine: "Esquire Korea",
            reason: "에스콰이어 코리아는 전통적인 남성지의 틀을 벗어나 라이프스타일·문화·인터뷰 중심의 세련된 콘텐츠로 당신의 관심사를 충족시켜줄 것입니다."
        },
        "wellness": {
            title: "Wellness Seeker",
            description: "건강한 삶과 자기관리에 진심인 당신",
            subtitle: "건강한 라이프스타일의 완성을 위해",
            magazine: "Men's Health / Women's Health",
            reason: "건강·피트니스·영양·자기관리에 관한 전문적인 정보와 실용적인 팁으로 당신의 웰빙 라이프스타일을 완성시켜줄 것입니다."
        },
        "homebody": {
            title: "Home Lover",
            description: "나만의 공간과 취미를 소중히 여기는 당신",
            subtitle: "집이라는 공간에서 찾는 진정한 행복",
            magazine: "리빙센스",
            reason: "인테리어·리빙·라이프스타일을 중심으로 '집'이라는 공간과 취미·여가를 다루어 당신만의 특별한 공간을 만들어가는 데 도움을 줄 것입니다."
        },
        "trendsetter": {
            title: "Trendsetter",
            description: "새로운 트렌드를 선도하는 당신",
            subtitle: "젊은 감각과 자유로운 사고로",
            magazine: "Vogue Korea",
            reason: "젊은 세대 중심의 트렌디하고 자유로운 콘텐츠로 성별 구분 없이 당신의 개성을 표현하고 새로운 트렌드를 만들어가는 데 영감을 줄 것입니다."
        },
        "cultural": {
            title: "Cultural Explorer",
            description: "문화와 예술에 깊은 관심을 가진 당신",
            subtitle: "문화적 깊이와 예술적 감성을 키우며",
            magazine: "Esquire Korea",
            reason: "문화·인터뷰 중심의 심도 있는 콘텐츠로 당신의 문화적 시야를 넓히고 예술적 감성을 풍부하게 만들어줄 것입니다."
        },
        "minimalist": {
            title: "Minimalist",
            description: "심플하고 의미있는 것을 추구하는 당신",
            subtitle: "단순함 속에서 찾는 진정한 가치",
            magazine: "리빙센스",
            reason: "리빙과 라이프스타일에 집중한 콘텐츠로 불필요한 것들을 덜어내고 정말 소중한 것들로 당신만의 공간을 채워나가는 데 도움을 줄 것입니다."
        },
        "active": {
            title: "Active Lifestyle",
            description: "활동적이고 에너지 넘치는 삶을 사는 당신",
            subtitle: "건강한 몸과 마음으로 더 나은 내일을",
            magazine: "Men's Health / Women's Health",
            reason: "피트니스와 건강한 라이프스타일에 관한 전문적인 가이드로 당신의 활동적인 삶을 더욱 풍요롭고 건강하게 만들어줄 것입니다."
        },
        "artistic": {
            title: "Artistic Soul",
            description: "예술적 감성과 창의성이 넘치는 당신",
            subtitle: "예술과 패션이 만나는 특별한 세계에서",
            magazine: "Vogue Korea",
            reason: "패션을 넘어 예술·문화 전반을 아우르는 창조적인 콘텐츠로 당신의 예술적 영감을 자극하고 창의성을 키워줄 것입니다."
        },
        "balanced": {
            title: "Balanced Life",
            description: "일과 삶의 균형을 추구하는 현실적인 당신",
            subtitle: "조화로운 삶을 위한 실용적인 가이드",
            magazine: "Esquire Korea",
            reason: "라이프스타일과 문화를 균형있게 다루는 콘텐츠로 바쁜 일상 속에서도 당신만의 여유와 품격을 유지할 수 있도록 도와줄 것입니다."
        }
    }
};

// 현재 상태
let currentScreen = 'intro';
let currentQuestionIndex = 0;
let userAnswers = [];
let userInfo = {};

// 화면 전환 함수
function showScreen(screenId) {
    // 모든 화면 숨기기
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // 선택된 화면 표시
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        currentScreen = screenId;
    }
}

// 다음 화면으로 이동
function nextScreen() {
    showScreen('user-info-screen');
}

// 전화번호 포맷팅
function formatPhoneNumber(value) {
    const numbers = value.replace(/[^\d]/g, '');
    if (numbers.length <= 3) {
        return numbers;
    } else if (numbers.length <= 7) {
        return numbers.replace(/(\d{3})(\d{1,4})/, '$1-$2');
    } else {
        return numbers.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
    }
}

// 입력 유효성 검사
function validateUserInfo(name, phone) {
    const errors = {};

    // 이름 검증
    if (!name.trim()) {
        errors.name = '이름을 입력해주세요.';
    } else if (name.trim().length < 2) {
        errors.name = '이름은 2글자 이상 입력해주세요.';
    }

    // 전화번호 검증
    const phoneNumbers = phone.replace(/[^\d]/g, '');
    if (!phone.trim()) {
        errors.phone = '전화번호를 입력해주세요.';
    } else if (phoneNumbers.length !== 11) {
        errors.phone = '올바른 전화번호 형식으로 입력해주세요.';
    } else if (!phoneNumbers.startsWith('010')) {
        errors.phone = '010으로 시작하는 전화번호를 입력해주세요.';
    }

    return errors;
}

// 에러 메시지 표시
function showError(inputId, message) {
    const input = document.getElementById(inputId);
    input.classList.add('error');

    let errorElement = input.parentNode.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        input.parentNode.appendChild(errorElement);
    }

    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// 에러 메시지 제거
function clearError(inputId) {
    const input = document.getElementById(inputId);
    input.classList.remove('error');

    const errorElement = input.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}

// 사용자 정보 저장 및 다음 단계
function saveUserInfoAndProceed(name, phone) {
    userInfo = {
        name: name.trim(),
        phone: phone
    };

    console.log('사용자 정보 저장:', userInfo);
    showScreen('title-screen');
}

// 테스트 시작
function startTest() {
    currentQuestionIndex = 0;
    userAnswers = [];
    showScreen('test-screen');
    displayQuestion();
}

// 질문 표시
function displayQuestion() {
    const question = testData.questions[currentQuestionIndex];
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = question.text;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = `${index + 1}. ${option}`;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });
}

// 옵션 선택
function selectOption(optionIndex) {
    // 이전 선택 제거
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // 현재 선택 표시
    document.querySelectorAll('.option-btn')[optionIndex].classList.add('selected');

    // 답변 저장
    userAnswers[currentQuestionIndex] = optionIndex;

    // 잠시 후 다음 질문으로
    setTimeout(() => {
        if (currentQuestionIndex < testData.questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            showResult();
        }
    }, 800);
}

// 결과 계산 및 표시
function showResult() {
    // 결과 계산
    const resultType = calculateResult();
    const finalResult = testData.results[resultType];

    if (!finalResult) {
        console.error('결과를 찾을 수 없습니다:', resultType);
        return;
    }

    // 결과 데이터 업데이트
    document.getElementById('result-title').textContent = finalResult.title;
    document.getElementById('result-description').textContent = finalResult.description;

    // subtitle 업데이트
    const subtitleElement = document.querySelector('.result-container .result-type p:nth-child(3)');
    if (subtitleElement) {
        subtitleElement.textContent = finalResult.subtitle;
    }

    // 추천 이유 업데이트
    const resultContainer = document.querySelector('.result-container .result-type');
    let reasonElement = resultContainer.querySelector('.recommendation-reason');
    if (!reasonElement) {
        reasonElement = document.createElement('p');
        reasonElement.className = 'recommendation-reason';
        resultContainer.appendChild(reasonElement);
    }
    reasonElement.textContent = finalResult.reason;

    // 잡지 이름 업데이트
    const magazineElement = document.querySelector('.subscription-info p');
    if (magazineElement) {
        magazineElement.textContent = finalResult.magazine;
    }

    // 잡지 표지 업데이트
    const magazineCover = document.getElementById('magazine-cover');
    if (magazineCover) {
        magazineCover.style.backgroundImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 200"><rect width="150" height="200" fill="%23333"/><text x="75" y="100" text-anchor="middle" fill="white" font-size="12" font-weight="bold">${encodeURIComponent(finalResult.magazine)}</text></svg>')`;
    }

    // 결과 화면 표시
    showScreen('result-screen');
}

// 결과 계산 함수
function calculateResult() {
    // 답변 패턴에 따른 결과 결정
    const answerSum = userAnswers.reduce((sum, answer) => sum + answer, 0);
    const averageAnswer = answerSum / userAnswers.length;

    // 10가지 결과 타입으로 세분화
    const resultTypes = [
        'fashionista', 'sophisticate', 'wellness', 'homebody', 'trendsetter',
        'cultural', 'minimalist', 'active', 'artistic', 'balanced'
    ];

    // 답변 패턴 분석
    const firstAnswer = userAnswers[0];
    const lastAnswer = userAnswers[userAnswers.length - 1];
    const hasConsistentPattern = userAnswers.every(answer => Math.abs(answer - userAnswers[0]) <= 1);

    // 더 정교한 결과 계산
    if (averageAnswer < 0.5) {
        return hasConsistentPattern ? 'fashionista' : 'trendsetter';
    } else if (averageAnswer < 1.0) {
        return firstAnswer === 0 ? 'artistic' : 'sophisticate';
    } else if (averageAnswer < 1.5) {
        return userAnswers.includes(0) ? 'cultural' : 'wellness';
    } else if (averageAnswer < 2.0) {
        return lastAnswer < 2 ? 'homebody' : 'minimalist';
    } else if (averageAnswer < 2.5) {
        return hasConsistentPattern ? 'active' : 'balanced';
    } else if (averageAnswer < 3.0) {
        return 'wellness';
    } else if (averageAnswer < 3.5) {
        return 'sophisticate';
    } else if (averageAnswer < 4.0) {
        return 'cultural';
    } else {
        return 'balanced';
    }
}





// 초기화
document.addEventListener('DOMContentLoaded', () => {
    showScreen('intro-screen');

    // 사용자 정보 폼 이벤트 리스너
    const userInfoForm = document.getElementById('user-info-form');
    const userNameInput = document.getElementById('user-name');
    const userPhoneInput = document.getElementById('user-phone');

    // 전화번호 자동 포맷팅
    userPhoneInput.addEventListener('input', (e) => {
        e.target.value = formatPhoneNumber(e.target.value);
    });

    // 입력 시 에러 메시지 제거
    userNameInput.addEventListener('input', () => {
        clearError('user-name');
    });

    userPhoneInput.addEventListener('input', () => {
        clearError('user-phone');
    });

    // 폼 제출 처리
    userInfoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = userNameInput.value;
        const phone = userPhoneInput.value;

        // 유효성 검사
        const errors = validateUserInfo(name, phone);

        // 이전 에러 메시지 제거
        clearError('user-name');
        clearError('user-phone');

        // 에러가 있는 경우
        if (Object.keys(errors).length > 0) {
            if (errors.name) {
                showError('user-name', errors.name);
            }
            if (errors.phone) {
                showError('user-phone', errors.phone);
            }
            return;
        }

        // 성공 시 다음 단계로
        saveUserInfoAndProceed(name, phone);
    });

});