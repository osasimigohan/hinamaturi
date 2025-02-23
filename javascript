$(document).ready(function() {
    const steps = [
        '10%', // 5段目
        '30%', // 4段目
        '50%', // 3段目
        '70%', // 2段目
        '90%'  // 1段目（特賞）
    ];
    let currentStep = 0;

    function stepUp() {
        // ステップアップのアニメーション
        $('.indicator').animate({ 
            bottom: steps[currentStep] 
        }, 800, function() {
            currentStep++;

            // 途中で引き戻される演出
            if (currentStep === steps.length - 1 && Math.random() > 0.7) {
                // 特賞手前で引き戻し
                setTimeout(() => {
                    currentStep = 2;
                    $('.indicator').animate({ 
                        bottom: steps[currentStep] 
                    }, 600);
                }, 500);
            }

            // 最後まで行ったら終了
            if (currentStep < steps.length) {
                setTimeout(stepUp, 1000);
            } else {
                checkResult();
            }
        });
    }

    function checkResult() {
        let resultText;
        switch (currentStep) {
            case 1:
                resultText = "五等賞！";
                break;
            case 2:
                resultText = "四等賞！";
                break;
            case 3:
                resultText = "三等賞！";
                break;
            case 4:
                resultText = "二等賞！";
                break;
            case 5:
                resultText = "特賞！！おめでとう！";
                break;
            default:
                resultText = "ハズレ…また挑戦してね！";
        }
        alert(resultText);
    }

    // スタートボタン
    $('#start-button').click(function() {
        currentStep = 0;
        stepUp();
    });
});
