$(document).ready(function () {
  const prizes = [
      "特賞VIPルームサービス&次回本指名セット無料",
      "一等ハンドマッサージ券",
      "二等フットマッサージ券",
      "三等ソフトドリンクサービス",
      "四等飴ちゃんプレゼント",
      "五等ひなあられセット"
  ];

  $(".icon").on("click", function () {
      const icon = $(this);

      // タップされたアイコンに爆発エフェクトを追加
      icon.addClass("explode");

      // 爆発後にアイコンを非表示
      setTimeout(() => {
          icon.hide();

          // ランダムで賞を選ぶ
          const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];

          // 結果を表示
          $("#result-text").text(randomPrize).fadeIn();
      }, 500);
  });
});
