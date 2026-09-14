// Digital SAT Math 2026 Master Study Workspace - Turkish Language & Vocabulary Data
// Designed specifically for international / Turkish students taking the Digital SAT

window.SAT_TURKISH_SECTIONS = {
  "dashboard": {
    "title": "2026 Dijital SAT Matematik: Uluslararası Öğrenci Başarı Kılavuzu",
    "subtitle": "College Board 2026 Standartları, Adaptif Modül Mantığı ve Sınav Stratejileri",
    "badge": "Türkçe Rehber",
    "description": "Dijital SAT Matematik bölümü, Türkiye'deki YKS/LGS ve MEB müfredatından farklı olarak formül ezberinden ziyade 'kavramsal anlama', 'Desmos hesap makinesi hakimiyeti' ve 'İngilizce matematiksel terimleri doğru yorumlama' üzerine kuruludur.",
    "keyPoints": [
      {
        "title": "Adaptif Sınav Yapısı (Multistage Adaptive)",
        "text": "Sınav iki bölümden (Modül 1 ve Modül 2) oluşur. Her biri 35 dakikadır ve 22 soru içerir (toplam 44 soru). 1. Modüldeki performansınız (~15+ doğru), zor olan 2. Modüle yönlendirilmenizi sağlar. 600-800 puan bandını hedefleyen her uluslararası öğrencinin zor Modül 2'ye geçmesi şarttır."
      },
      {
        "title": "Desmos Hesap Makinesi %100 Serbest",
        "text": "Klasik SAT'nin aksine artık 'Hesap Makinesiz Bölüm' YOKTUR. Desmos aracı tüm 44 soruda doğrudan ekranınızda açıktır. Denklem sistemleri, tepe noktası bulma, kök bulma ve regresyon işlemlerini 10-15 saniyede Desmos ile çözebilirsiniz."
      },
      {
        "title": "Uluslararası Öğrencilerin En Sık Düştüğü 5 Tuzak",
        "text": "1. Soru kökünü yanlış okumak: $x$ yerine $2x - 5$ veya $x + y$ sorulduğunda sadece $x$'i işaretlemek.\n2. İngilizce bağlaçları karıştırmak: 'at least' (en az $\\ge$), 'at most' (en çok $\\le$), 'in terms of' (cinsinden).\n3. Daire formüllerinde çap (diameter) verildiğinde yarıçapa ($r = d/2$) çevirmeyi unutmak.\n4. Açılarda derece (degree) ve radyan (radian) ayarını Desmos'ta kontrol etmemek.\n5. SPR (kendi ürettiğiniz yanıt) sorularında negatif sayı kısıtlamasını unutmak (SAT'de SPR kutusuna negatif cevap gelemez)."
      }
    ]
  },
  "module1": {
    "title": "Modül 1: Kapsamlı Formül & Matematik Terimleri Sözlüğü",
    "subtitle": "Geometri, Cebir, İleri Matematik ve İstatistik Kavramları",
    "badge": "Terimler Kılavuzu",
    "description": "Sınavda ekranın üstündeki 'Reference Sheet' ikonuna basarak temel geometri formüllerini görebilirsiniz. Ancak sınavda en çok puan kazandıran parabol tepe noktası, Vieta formülleri, çember denklemi ve bileşik faiz formülleri bu kağıtta verilmez; ezberlemeniz gerekir.",
    "terminology": [
      {
        "en": "Radius / Diameter",
        "tr": "Yarıçap ($r$) / Çap ($d = 2r$)",
        "note": "Alan $\\pi r^2$ formülünde daima yarıçap kullanılır!"
      },
      {
        "en": "Circumference",
        "tr": "Çemberin Çevresi ($C = 2\\pi r$ veya $\\pi d$)",
        "note": "Çevre uzunluğu, dönen tekerleğin 1 turda aldığı yoldur."
      },
      {
        "en": "Arc Length / Sector Area",
        "tr": "Yay Uzunluğu / Daire Dilimi Alanı",
        "note": "Merkez açının $360^\\circ$'ye oranı ile çarpılır (radyan ise $\\frac{1}{2}r^2\\theta$)."
      },
      {
        "en": "Chord / Tangent / Secant",
        "tr": "Kiriş / Teğet / Kesen",
        "note": "Teğet doğru, değme noktasındaki yarıçapa daima diktir ($90^\\circ$)!"
      },
      {
        "en": "Slope / y-intercept",
        "tr": "Eğim ($m$) / y-eksenini kesen nokta ($b$)",
        "note": "Eğim = Dikey Değişim / Yatay Değişim (Rise / Run)."
      },
      {
        "en": "Perpendicular Lines",
        "tr": "Birbirine Dik Doğrular",
        "note": "Eğimleri çarpımı $-1$'dir ($m_1 \\cdot m_2 = -1$). Eğim işaret değiştirip ters çevrilir."
      },
      {
        "en": "Vertex of Parabola",
        "tr": "Parabolün Tepe Noktası ($h, k$)",
        "note": "$x_v = -\\frac{b}{2a}$, minimum veya maksimum değer tepe noktasının $y$'sidir."
      },
      {
        "en": "Discriminant ($\\Delta$)",
        "tr": "Diskriminant ($b^2 - 4ac$)",
        "note": "$>0$: 2 farklı reel kök, $=0$: 1 çift katlı kök (teğet), $<0$: reel kök yok."
      },
      {
        "en": "Standard Deviation",
        "tr": "Standart Sapma",
        "note": "Verilerin ortalamadan ne kadar yayıldığını gösterir. Değerler merkeze yakınsa sapma küçüktür."
      }
    ]
  },
  "module2": {
    "title": "Modül 2: 2026 Konu Dağılımı & Sınav Ağırlıkları",
    "subtitle": "Türkiye Müfredatı (MEB) ile Karşılaştırma & Hedef Puan Stratejisi",
    "badge": "Sınav Dağılımı",
    "description": "Digital SAT Matematik 4 ana alana ayrılmıştır. Cebir ve İleri Matematik toplam soruların %70'ini oluşturur. Bu iki alanda ustalaşmadan 700+ puan almak imkansızdır.",
    "domains": [
      {
        "name": "Algebra (Cebir)",
        "weight": "%35 (~15 Soru)",
        "focus": "Doğrusal denklemler, eşitsizlikler, 2 bilinmeyenli denklem sistemleri, doğru grafikleri, modelleme."
      },
      {
        "name": "Advanced Math (İleri Matematik)",
        "weight": "%35 (~15 Soru)",
        "focus": "İkinci dereceden denklemler (paraboller), polinomlar, üslü/köklü ifadeler, rasyonel denklemler, fonksiyon dönüşümleri."
      },
      {
        "name": "Problem-Solving & Data (Problem Çözme & Veri)",
        "weight": "%15 (~7 Soru)",
        "focus": "Oran-orantı, yüzdeler, birim dönüşümleri, iki yönlü tablolar, dağılım grafikleri, ortalama/ortanca/standart sapma."
      },
      {
        "name": "Geometry & Trig (Geometri & Trigonometri)",
        "weight": "%15 (~7 Soru)",
        "focus": "Alan ve hacim, benzer üçgenler, çember denklemi, dik üçgen trigonometrisi (SOH CAH TOA), radyan-derece dönüşümü."
      }
    ],
    "roadmaps": [
      {
        "target": "Hedef 600+",
        "desc": "Temel cebir sorularını eksiksiz çözün. Modül 1'de en az 14-15 doğru yaparak Hard Modül 2'ye geçin. SPR sorularında işlem hatası yapmayın."
      },
      {
        "target": "Hedef 700+",
        "desc": "Desmos regresyon ve slider tekniklerinde ustalaşın. İleri matematik parabol tepe noktası ve kök analizini ezbere bilin. Veri analizinde standart sapma sorularını kaçırmayın."
      },
      {
        "target": "Hedef 750-800",
        "desc": "Hard Modül 2'deki parametreli ($k, c, p$) sistemleri ve çember tamamlama sorularını 30 saniyede Desmos ile çözün. Zaman yönetimini mükemmelleştirin."
      }
    ]
  },
  "module3": {
    "title": "Modül 3: 100 Soru Bankası & Uluslararası Öğrenci Yönergeleri",
    "subtitle": "Çoktan Seçmeli (MCQ) & Öğrenci Tarafından Üretilen Yanıtlar (SPR)",
    "badge": "Soru Bankası Rehberi",
    "description": "Bu soru bankası 50 Temel (Part A) ve 50 İleri Düzey (Part B) sorudan oluşur. Soruların %70'i 4 seçenekli çoktan seçmeli, %30'u ise cevabı kutucuğa yazdığınız SPR (Student-Produced Response) formatındadır.",
    "sprRules": [
      "Kesir formatı: Örneğin '3/4' veya '7/2' doğrudan '/' işareti ile yazılabilir.",
      "Ondalık formatı: '0.75' yerine '.75' de yazılabilir. Devirli sayılarda kutunun alabildiği kadar basamak (en az 4 karakter) yazılmalıdır (örn. 2/3 için '.666' veya '.667').",
      "Negatif sayılar: 2026 Digital SAT Math'de SPR yanıtları pozitif veya negatif olabilir ('-' tuşu sanal klavyede mevcuttur).",
      "Karmaşık kesirler girilemez: Örneğin $3\\frac{1}{2}$ yazamazsınız; '7/2' veya '3.5' yazmalısınız."
    ]
  },
  "module4": {
    "title": "Modül 4: Çözüm Kılavuzu & Desmos 8 Süper Gücü",
    "subtitle": "Adım Adım Cebirsel İspatlar ve 10-15 Saniyelik Hesap Makinesi Kısayolları",
    "badge": "Çözüm & Desmos",
    "description": "Tüm 100 sorunun hem tam akademik cebirsel çözümü hem de sınavda 1 dakika kazandıran Desmos hilesi sunulmuştur.",
    "hacksSummary": [
      "1. İki denklem kesişimi: İki denklemi alt alta yazın, kesiştikleri gri noktaya tıklayın.",
      "2. Sonsuz veya Sıfır Çözüm: Parametreye slider ekleyin ya da katsayı oranlarını eşitleyin.",
      "3. Tepe Noktası & Ekstremum: Parabolü yazıp tepe noktasına 1 tıkla koordinatları okuyun.",
      "4. Şık Eşdeğerliği: Orijinal ifadeyi yazın, şıkları altına yazarak hangi grafiğin tam üst üste bindiğini görün.",
      "5. Tablo Regresyonu: Tablo açıp 'y1 ~ m*x1 + b' veya 'y1 ~ a*x1^2 + b*x1 + c' yazarak denklemi anında bulun.",
      "6. Çember Denklemi: Genel formu hiç tam kareye çevirmeden doğrudan yazın, merkez ve yarıçapı görsel olarak bulun."
    ]
  },
  "simulator": {
    "title": "Bluebook Test Simülatörü Türkçe Kullanım Kılavuzu",
    "subtitle": "Resmi Sınav Arayüzü ve Test Yönetim Araçları",
    "badge": "Simülatör Rehberi",
    "tools": [
      {
        "tool": "Kronometre (Timer)",
        "desc": "35 dakikalık geri sayım yapar. Tıklayarak gizleyebilir veya açabilirsiniz. Son 5 dakikada otomatik görünür kalır."
      },
      {
        "tool": "Seçenek Eleme (ABC Strikethrough)",
        "desc": "Seçenek harfine veya eleme ikonuna tıklayarak elediğiniz şıkkın üstünü çizebilirsiniz."
      },
      {
        "tool": "Bayrak Ekle (Flag for Review)",
        "desc": "Emin olmadığınız soruları işaretleyin. Soru Haritası (Question Grid) üzerinden anında geri dönebilirsiniz."
      },
      {
        "tool": "Sanal Klavye (SPR Pad)",
        "desc": "Kesir (/), ondalık nokta (.) ve eksi (-) işaretlerini ekran üzerindeki butonlarla veya klavyenizle yazabilirsiniz."
      },
      {
        "tool": "Formül Kağıdı (Reference)",
        "desc": "Resmi College Board geometri formül levhasını pop-up olarak açar."
      }
    ]
  }
};

window.SAT_TURKISH_GLOSSARY = [
  {
    "term": "in terms of",
    "tr": "cinsinden, türünden",
    "cat": "General",
    "def": "Örn. 'y in terms of x' demek, y'yi x cinsinden yalnız bırakmak demektir ($y = \\dots x$)."
  },
  {
    "term": "at least",
    "tr": "en az (büyük veya eşit: $\\ge$)",
    "cat": "General",
    "def": "Değerin belirtilen sayıya eşit veya ondan büyük olması gerektiğini ifade eder."
  },
  {
    "term": "at most",
    "tr": "en çok (küçük veya eşit: $\\le$)",
    "cat": "General",
    "def": "Değerin belirtilen sayıdan fazla olamayacağını ifade eder."
  },
  {
    "term": "consecutive integers",
    "tr": "ardışık tam sayılar",
    "cat": "General",
    "def": "Aralarında 1 fark olan tam sayılar: $n, n+1, n+2$."
  },
  {
    "term": "distinct",
    "tr": "birbirinden farklı",
    "cat": "General",
    "def": "Aynı olmayan, özdeş olmayan elemanlar veya kökler."
  },
  {
    "term": "integer",
    "tr": "tam sayı",
    "cat": "General",
    "def": "$\\dots, -3, -2, -1, 0, 1, 2, 3, \\dots$ gibi kesirsiz sayılar."
  },
  {
    "term": "positive / negative",
    "tr": "pozitif ($>0$) / negatif ($<0$)",
    "cat": "General",
    "def": "Sıfır ne pozitif ne negatiftir (nötrdür)."
  },
  {
    "term": "sum",
    "tr": "toplam",
    "cat": "General",
    "def": "İki veya daha fazla sayının toplanmasıyla elde edilen sonuç."
  },
  {
    "term": "difference",
    "tr": "fark",
    "cat": "General",
    "def": "Çıkarma işleminin sonucu."
  },
  {
    "term": "product",
    "tr": "çarpım",
    "cat": "General",
    "def": "Çarpma işleminin sonucu."
  },
  {
    "term": "quotient",
    "tr": "bölüm",
    "cat": "General",
    "def": "Bölme işleminde elde edilen tam kısım veya oran."
  },
  {
    "term": "remainder",
    "tr": "kalan",
    "cat": "General",
    "def": "Tam bölünemeyen bölme işleminde artakalan miktar."
  },
  {
    "term": "ratio",
    "tr": "oran",
    "cat": "Problem Solving",
    "def": "İki büyüklüğün birbirine bölümü ($a:b$ veya $a/b$)."
  },
  {
    "term": "proportion",
    "tr": "orantı",
    "cat": "Problem Solving",
    "def": "İki oranın birbirine eşitliği ($a/b = c/d$)."
  },
  {
    "term": "constant",
    "tr": "sabit sayı",
    "cat": "Algebra",
    "def": "Değeri değişmeyen sayı (genellikle $k, c, a, b$ harfleri ile temsil edilir)."
  },
  {
    "term": "coefficient",
    "tr": "katsayı",
    "cat": "Algebra",
    "def": "Bir değişkenin önünde çarpan olarak bulunan sayı (örn. $5x^2$ ifadesinde 5)."
  },
  {
    "term": "evaluate",
    "tr": "değerini hesaplamak",
    "cat": "Algebra",
    "def": "Değişkenin yerine verilen sayıyı yazarak sonucunu bulmak."
  },
  {
    "term": "substitute",
    "tr": "yerine koymak",
    "cat": "Algebra",
    "def": "Bir denklemde bir ifadenin yerine başka bir değişken veya değer yazmak."
  },
  {
    "term": "isolate",
    "tr": "yalnız bırakmak",
    "cat": "Algebra",
    "def": "Bir değişkeni denklemin bir tarafında tek başına bırakmak."
  },
  {
    "term": "slope",
    "tr": "eğim",
    "cat": "Algebra",
    "def": "Doğrunun dikliği, $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}$."
  },
  {
    "term": "y-intercept",
    "tr": "y-ekseni kesim noktası",
    "cat": "Algebra",
    "def": "$x = 0$ olduğunda doğrunun $y$ eksenini kestiği koordinat $(0, b)$."
  },
  {
    "term": "x-intercept (root / zero)",
    "tr": "x-ekseni kesim noktası (kök / sıfır)",
    "cat": "Algebra",
    "def": "$y = 0$ olduğunda eğrinin $x$ eksenini kestiği koordinat $(x, 0)$."
  },
  {
    "term": "parallel",
    "tr": "paralel doğrular",
    "cat": "Algebra",
    "def": "Asla kesişmeyen doğrular; eğimleri birbirine eşittir ($m_1 = m_2$)."
  },
  {
    "term": "perpendicular",
    "tr": "birbirine dik doğrular",
    "cat": "Algebra",
    "def": "Kesişme açıları $90^\\circ$ olan doğrular; eğimleri çarpımı $-1$'dir ($m_1 \\cdot m_2 = -1$)."
  },
  {
    "term": "system of equations",
    "tr": "denklem sistemi",
    "cat": "Algebra",
    "def": "Aynı değişkenleri paylaşan birden fazla denklem kümesi."
  },
  {
    "term": "no solution",
    "tr": "çözüm kümesi boş / çözümsüz",
    "cat": "Algebra",
    "def": "Doğruların paralel olması ve asla kesişmemesi ($m_1 = m_2, b_1 \\neq b_2$)."
  },
  {
    "term": "infinitely many solutions",
    "tr": "sonsuz çözüm",
    "cat": "Algebra",
    "def": "İki denklemin tamamen çakışık (özdeş) aynı doğruyu belirtmesi ($m_1 = m_2, b_1 = b_2$)."
  },
  {
    "term": "quadratic equation",
    "tr": "ikinci dereceden denklem",
    "cat": "Advanced Math",
    "def": "$ax^2 + bx + c = 0$ biçimindeki denklemler."
  },
  {
    "term": "parabola",
    "tr": "parabol",
    "cat": "Advanced Math",
    "def": "İkinci dereceden fonksiyonların oluşturduğu U şeklindeki simetrik eğri."
  },
  {
    "term": "vertex",
    "tr": "tepe noktası",
    "cat": "Advanced Math",
    "def": "Parabolün dönüş yaptığı en tepe (maksimum) veya en dip (minimum) noktası ($h, k$)."
  },
  {
    "term": "discriminant",
    "tr": "diskriminant (delta)",
    "cat": "Advanced Math",
    "def": "$\\Delta = b^2 - 4ac$. Köklerin türünü ve sayısını belirler."
  },
  {
    "term": "factor / factoring",
    "tr": "çarpan / çarpanlarına ayırma",
    "cat": "Advanced Math",
    "def": "İfadeyi çarpım durumundaki terimlerin çarpımı olarak yazmak."
  },
  {
    "term": "exponential growth / decay",
    "tr": "üstel büyüme / üstel azalma",
    "cat": "Advanced Math",
    "def": "Her periyotta sabit bir yüzde ile katlanarak artma ($1+r$) veya azalma ($1-r$)."
  },
  {
    "term": "compound interest",
    "tr": "bileşik faiz",
    "cat": "Advanced Math",
    "def": "Anapara ve birikmiş faizin birlikte faiz kazanması formülü: $A = P(1 + r/n)^{nt}$."
  },
  {
    "term": "extraneous solution",
    "tr": "yalancı kök / geçersiz kök",
    "cat": "Advanced Math",
    "def": "Cebirsel çözümde çıkan ancak orijinal denklemi sağlamayan kök."
  },
  {
    "term": "mean (average)",
    "tr": "aritmetik ortalama",
    "cat": "Problem Solving",
    "def": "Tüm verilerin toplamının veri sayısına bölümü."
  },
  {
    "term": "median",
    "tr": "ortanca değer",
    "cat": "Problem Solving",
    "def": "Küçükten büyüğe dizildiğinde tam ortadaki değer."
  },
  {
    "term": "mode",
    "tr": "tepe değer (mod)",
    "cat": "Problem Solving",
    "def": "Veri grubunda en sık tekrarlanan değer."
  },
  {
    "term": "range",
    "tr": "açıklık (aralık)",
    "cat": "Problem Solving",
    "def": "En büyük değer ile en küçük değer arasındaki fark."
  },
  {
    "term": "standard deviation",
    "tr": "standart sapma",
    "cat": "Problem Solving",
    "def": "Verilerin ortalama etrafındaki yayılım ölçüsü."
  },
  {
    "term": "margin of error",
    "tr": "hata payı",
    "cat": "Problem Solving",
    "def": "Örneklem büyüklüğü ($n$) arttıkça azalan ($1/\\sqrt{n}$), tahmin aralığı payı."
  },
  {
    "term": "scatterplot",
    "tr": "serpilme / dağılım grafiği",
    "cat": "Problem Solving",
    "def": "İki sayısal değişken arasındaki ilişkiyi gösteren nokta grafiği."
  },
  {
    "term": "line of best fit",
    "tr": "en uygun uyum doğrusu",
    "cat": "Problem Solving",
    "def": "Dağılım grafiğindeki noktaların genel eğilimini en iyi temsil eden trend doğrusu."
  },
  {
    "term": "outlier",
    "tr": "aykırı değer",
    "cat": "Problem Solving",
    "def": "Diğer verilerden belirgin şekilde çok büyük veya çok küçük olan uç değer."
  },
  {
    "term": "hypotenuse",
    "tr": "hipotenüs",
    "cat": "Geometry",
    "def": "Dik üçgende $90^\\circ$'lik açının karşısındaki en uzun kenar."
  },
  {
    "term": "similar triangles",
    "tr": "benzer üçgenler",
    "cat": "Geometry",
    "def": "Karşılıklı açıları eşit, kenar uzunlukları orantılı olan üçgenler."
  },
  {
    "term": "area / perimeter",
    "tr": "alan / çevre",
    "cat": "Geometry",
    "def": "2 boyutlu kapalı şeklin kapladığı yüzey / etrafının uzunluğu."
  },
  {
    "term": "volume / surface area",
    "tr": "hacim / yüzey alanı",
    "cat": "Geometry",
    "def": "3 boyutlu katı cismin kapladığı uzay / tüm dış yüzeylerinin alan toplamı."
  },
  {
    "term": "arc length",
    "tr": "yay uzunluğu",
    "cat": "Geometry",
    "def": "Çember çevresinin belirli bir açıya karşılık gelen parçası ($s = r\\theta$)."
  },
  {
    "term": "central angle",
    "tr": "merkez açı",
    "cat": "Geometry",
    "def": "Köşesi çemberin merkezinde olan ve gördüğü yaya eşit açılı açı."
  },
  {
    "term": "inscribed angle",
    "tr": "çevre açı",
    "cat": "Geometry",
    "def": "Köşesi çember üzerinde olan ve gördüğü yayın yarısına eşit açı."
  },
  {
    "term": "tangent (geometry)",
    "tr": "teğet (geometri)",
    "cat": "Geometry",
    "def": "Çembere tek bir noktada değen ve yarıçapa dik olan doğru."
  },
  {
    "term": "sine / cosine / tangent",
    "tr": "sinüs / kosinüs / tanjant",
    "cat": "Trigonometry",
    "def": "Dik üçgende kenar oranları: Karşı/Hipotenüs, Komşu/Hipotenüs, Karşı/Komşu."
  },
  {
    "term": "radian",
    "tr": "radyan",
    "cat": "Trigonometry",
    "def": "Açı ölçü birimi: $\\pi\\text{ radyan} = 180^\\circ$."
  }
];

window.SAT_TURKISH_QUESTIONS = {
  "1": {
    "id": 1,
    "translation": "$5(2x - 3) = 3(x + 9)$ olduğuna göre, $x$'in değeri kaçtır?",
    "vocabulary": [
      {
        "en": "value of x",
        "tr": "x'in değeri"
      },
      {
        "en": "expand / distribute",
        "tr": "parantezi dağıtmak"
      },
      {
        "en": "isolate",
        "tr": "yalnız bırakmak"
      }
    ],
    "tip": "Parantezleri dağıtırken işaretlere dikkat edin: $5 \\cdot (-3) = -15$. Değişkenleri bir tarafta toplayın."
  },
  "2": {
    "id": 2,
    "translation": "$3x + 7 = 19$ olduğuna göre, $6x - 5$ ifadesinin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "what is the value of",
        "tr": "değeri kaçtır"
      },
      {
        "en": "expression",
        "tr": "ifade"
      }
    ],
    "tip": "TUZAK: SAT'de doğrudan $x$ yerine $6x - 5$ gibi bir ifade sorulur. $x=4$ bulup hemen 4'ü işaretlemeyin!"
  },
  "3": {
    "id": 3,
    "translation": "Bir yolculuk paylaşım hizmeti, $3.50$ dolarlık bir başlangıç biniş ücreti ve kat edilen her mil için $1.75$ dolar talep etmektedir. Bir yolcunun bahşiş öncesi toplam ücreti $24.50$ dolar olduğuna göre, yolculuk kaç mildir?",
    "vocabulary": [
      {
        "en": "rideshare service",
        "tr": "yolculuk paylaşım servisi"
      },
      {
        "en": "initial base pickup fee",
        "tr": "başlangıç biniş taban ücreti"
      },
      {
        "en": "per mile / every mile",
        "tr": "mil başına / her mil için"
      },
      {
        "en": "total fare",
        "tr": "toplam bilet ücreti"
      }
    ],
    "tip": "Doğrusal model: $y = mx + b$. Burada sabit ücret $b = 3.50$, değişken mil ücreti $m = 1.75$'tir."
  },
  "4": {
    "id": 4,
    "translation": "$xy$-düzlemindeki $k$ doğrusu $(-2, 5)$ ve $(4, -7)$ noktalarından geçmektedir. $k$ doğrusunun eğimi kaçtır?",
    "vocabulary": [
      {
        "en": "line passes through",
        "tr": "doğru noktalardan geçmektedir"
      },
      {
        "en": "slope",
        "tr": "eğim ($m$)"
      },
      {
        "en": "xy-plane",
        "tr": "koordinat düzlemi"
      }
    ],
    "tip": "Eğim formülü: $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Çıkarma sırasını hem pay hem de paydada aynı tutun: $\\frac{-7-5}{4-(-2)}$."
  },
  "5": {
    "id": 5,
    "translation": "$4x - 6y = 18$ denklemi ile verilen doğrunun $y$-eksenini kestiği nokta (y-intercept) nedir?",
    "vocabulary": [
      {
        "en": "y-intercept",
        "tr": "y-ekseni kesim noktası"
      },
      {
        "en": "equation of line",
        "tr": "doğru denklemi"
      }
    ],
    "tip": "$y$-ekseni kesim noktasını bulmak için daima $x = 0$ yazılır: $-6y = 18 \\implies y = -3$. Koordinat: $(0, -3)$."
  },
  "6": {
    "id": 6,
    "translation": "$3(x - 2) \\le 5x + 8$ eşitsizliğinin tüm çözümlerini temsil eden eşitsizlik aşağıdakilerden hangisidir?",
    "vocabulary": [
      {
        "en": "inequality",
        "tr": "eşitsizlik"
      },
      {
        "en": "represents all solutions",
        "tr": "tüm çözümleri temsil eder"
      },
      {
        "en": "less than or equal to (\\le)",
        "tr": "küçük veya eşit"
      }
    ],
    "tip": "Eşitsizlik çözerken negatif bir sayıya böler veya negatif ile çarparsanız eşitsizlik yön değiştirir. Pozitif 2'ye böldüğümüz için yön değişmez: $-7 \\le x \\implies x \\ge -7$."
  },
  "7": {
    "id": 7,
    "translation": "Aşağıdaki denklem sistemini ele alınız:\n$$\\begin{aligned} 2x + y &= 11 \\\\ x - 3y &= -5 \\end{aligned}$$\n$x + y$'nin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "system of equations",
        "tr": "denklem sistemi"
      },
      {
        "en": "value of x + y",
        "tr": "x + y toplamının değeri"
      }
    ],
    "tip": "Yok etme veya yerine koyma yöntemi kullanılabilir. Desmos'ta iki denklemi yazıp kesişim noktasına $(4, 3)$ tıklayarak $4 + 3 = 7$ bulabilirsiniz."
  },
  "8": {
    "id": 8,
    "translation": "$2(3x + 4) = 6x + k$ denkleminde $k$ bir sabittir. Denklemin sonsuz sayıda çözümü olduğuna göre, $k$'nin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "constant",
        "tr": "sabit sayı"
      },
      {
        "en": "infinitely many solutions",
        "tr": "sonsuz sayıda çözüm"
      },
      {
        "en": "identity",
        "tr": "özdeşlik"
      }
    ],
    "tip": "Sonsuz çözüm için denklemin her iki tarafı birebir özdeş olmalıdır: $6x + 8 = 6x + k \\implies k = 8$."
  },
  "9": {
    "id": 9,
    "translation": "$L$ doğrusu $y = -\\frac{3}{4}x + 2$ denklemi ile tanımlanmıştır. $P$ doğrusu $L$ doğrusuna diktir. $P$ doğrusunun eğimi kaçtır?",
    "vocabulary": [
      {
        "en": "perpendicular",
        "tr": "birbirine dik"
      },
      {
        "en": "negative reciprocal",
        "tr": "ters işaretli çarpmaya göre tersi"
      },
      {
        "en": "slope",
        "tr": "eğim"
      }
    ],
    "tip": "Dik doğruların eğimleri çarpımı $-1$'dir ($m_1 \\cdot m_2 = -1$). Eğim $-\\frac{3}{4}$ ise dik olanın eğimi $+\\frac{4}{3}$ olur."
  },
  "10": {
    "id": 10,
    "translation": "Aşağıdaki tablo $f(x)$ doğrusal fonksiyonu için değerleri göstermektedir:\n\n| $x$ | $f(x)$ |\n| :---: | :---: |\n| 1 | 7 |\n| 3 | 13 |\n| 5 | 19 |\n\n$f(8)$'in değeri kaçtır?",
    "vocabulary": [
      {
        "en": "linear function",
        "tr": "doğrusal fonksiyon"
      },
      {
        "en": "rate of change",
        "tr": "değişim oranı (eğim)"
      },
      {
        "en": "table of values",
        "tr": "değer tablosu"
      }
    ],
    "tip": "Doğrusal fonksiyonda her $+2$ birimlik $x$ artışı için $f(x)$ $+6$ artıyor ($m = 3$). $f(x) = 3x + 4 \\implies f(8) = 28$."
  },
  "11": {
    "id": 11,
    "translation": "Yerel bir fırın yaban mersinli kekleri tanesi $2$ dolardan, tarçınlı simitleri tanesi $3$ dolardan satmaktadır. Fırıncının bugün $m$ adet kek ve $b$ adet simit satışından en az $120$ dolar kazanması gerekmektedir. Bu durumu temsil eden eşitsizlik hangisidir?",
    "vocabulary": [
      {
        "en": "at least",
        "tr": "en az (\\ge)"
      },
      {
        "en": "earn",
        "tr": "kazanmak"
      },
      {
        "en": "represent this situation",
        "tr": "bu durumu temsil etmek"
      }
    ],
    "tip": "'At least' (en az) ifadesi $\\ge$ anlamına gelir. Toplam gelir $2m + 3b \\ge 120$."
  },
  "12": {
    "id": 12,
    "translation": "Bir otomobil kiralama şirketi günlük $45$ dolar sabit ücret ve kat edilen her mil için $0.20$ dolar talep etmektedir. Bir müşteri aracı 3 günlüğüne kiralamış ve $235$ dolar ödemiştir. Müşteri kaç mil yol kat etmiştir?",
    "vocabulary": [
      {
        "en": "daily fee",
        "tr": "günlük ücret"
      },
      {
        "en": "per mile",
        "tr": "mil başına"
      },
      {
        "en": "rented for 3 days",
        "tr": "3 günlüğüne kiraladı"
      }
    ],
    "tip": "TUZAK: Günlük 45 dolar 3 gün için $3 \\times 45 = 135$ dolar eder. $135 + 0.20m = 235 \\implies 0.20m = 100 \\implies m = 500$."
  },
  "13": {
    "id": 13,
    "translation": "Bir doğru $(3, 11)$ ve $(7, 23)$ noktalarından geçmektedir. Bu doğru üzerindeki bir diğer nokta $(10, y)$ olduğuna göre, $y$'nin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "line passes through",
        "tr": "doğru noktalardan geçmektedir"
      },
      {
        "en": "collinear points",
        "tr": "doğrusal (aynı doğru üzerindeki) noktalar"
      }
    ],
    "tip": "Doğru üzerindeki her nokta çifti arasındaki eğim aynıdır: $m = \\frac{23-11}{7-3} = 3$. Buradan $\\frac{y - 23}{10 - 7} = 3 \\implies y - 23 = 9 \\implies y = 32$."
  },
  "14": {
    "id": 14,
    "translation": "Aşağıdaki denklem sistemini ele alınız:\n$$\\begin{aligned} 3x - 2y &= 8 \\\\ 6x - 4y &= 16 \\end{aligned}$$\nBu denklem sisteminin kaç çözümü vardır?",
    "vocabulary": [
      {
        "en": "how many solutions",
        "tr": "kaç çözümü vardır"
      },
      {
        "en": "infinitely many",
        "tr": "sonsuz çoklukta"
      },
      {
        "en": "no solution",
        "tr": "çözüm yok"
      }
    ],
    "tip": "İkinci denklem birincinin tam 2 katıdır ($6x - 4y = 16$). İki denklem aynı doğruyu belirttiğinden sonsuz çözüm (infinitely many solutions) vardır."
  },
  "15": {
    "id": 15,
    "translation": "Bir şirket $p$ birim ürün satarak elde edeceği kârı $P(p) = 14p - 840$ doğrusal denklemi ile modellemektedir. Şirketin başabaş noktasına ulaşması (kârın sıfır olması) için kaç birim ürün satması gerekir?",
    "vocabulary": [
      {
        "en": "break even",
        "tr": "başabaş noktası (kâr = 0)"
      },
      {
        "en": "profit",
        "tr": "kâr"
      },
      {
        "en": "units sold",
        "tr": "satılan birim sayısı"
      }
    ],
    "tip": "'Break even' kârın $P(p) = 0$ olması demektir: $14p - 840 = 0 \\implies 14p = 840 \\implies p = 60$."
  },
  "16": {
    "id": 16,
    "translation": "$xy$-düzleminde bir doğru $(0, 4)$ ve $(6, 0)$ noktalarından geçmektedir. Bu doğrunun standart formdaki denklemi aşağıdakilerden hangisidir?",
    "vocabulary": [
      {
        "en": "standard form",
        "tr": "standart form ($Ax + By = C$)"
      },
      {
        "en": "intercepts",
        "tr": "eksen kesim noktaları"
      }
    ],
    "tip": "Eksenleri $(6, 0)$ ve $(0, 4)$ noktalarında kesen doğrunun denklemi: $x/6 + y/4 = 1 \\implies 2x + 3y = 12$."
  },
  "17": {
    "id": 17,
    "translation": "$$\\begin{aligned} 4x + 3y &= 25 \\\\ 2x - y &= 5 \\end{aligned}$$\nVerilen denklem sistemine göre, $y$'nin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "system of equations",
        "tr": "denklem sistemi"
      },
      {
        "en": "value of y",
        "tr": "y'nin değeri"
      }
    ],
    "tip": "İkinci denklemi 3 ile çarpıp toplayın: $6x - 3y = 15$. $10x = 40 \\implies x = 4$. $y = 2(4) - 5 = 3$."
  },
  "18": {
    "id": 18,
    "translation": "$L$ doğrusunun denklemi $5x - 2y = 10$'dur. $M$ doğrusu $L$ doğrusuna paraleldir ve $(4, 7)$ noktasından geçmektedir. $M$ doğrusunun $y$-eksenini kestiği noktanın $y$-koordinatı kaçtır?",
    "vocabulary": [
      {
        "en": "parallel",
        "tr": "paralel"
      },
      {
        "en": "y-coordinate of the y-intercept",
        "tr": "y-ekseni kesim noktasının y-koordinatı"
      }
    ],
    "tip": "Paralel doğruların eğimleri eşittir. $5x - 2y = 10 \\implies y = 2.5x - 5$ ($m = 2.5$). $M$ doğrusu: $7 = 2.5(4) + b \\implies 7 = 10 + b \\implies b = -3$."
  },
  "19": {
    "id": 19,
    "translation": "$x^2 - 8x + 12 = 0$ denkleminin çözümleri nelerdir?",
    "vocabulary": [
      {
        "en": "solutions / roots",
        "tr": "çözümler / kökler"
      },
      {
        "en": "quadratic equation",
        "tr": "ikinci dereceden denklem"
      },
      {
        "en": "factor",
        "tr": "çarpanlarına ayırmak"
      }
    ],
    "tip": "Çarpımları 12, toplamları $-8$ olan sayılar $-2$ ve $-6$'dır: $(x - 2)(x - 6) = 0 \\implies x = 2$ veya $x = 6$."
  },
  "20": {
    "id": 20,
    "translation": "$f(x) = (x - 3)^2 - 16$ fonksiyonunun grafiğinin tepe noktasının koordinatları nedir?",
    "vocabulary": [
      {
        "en": "vertex form",
        "tr": "tepe noktası formu $a(x-h)^2 + k$"
      },
      {
        "en": "vertex",
        "tr": "tepe noktası"
      }
    ],
    "tip": "Tepe noktası formunda $y = a(x - h)^2 + k$ için tepe noktası $(h, k)$'dir. Burada $h = 3, k = -16$, yani $(3, -16)$."
  },
  "21": {
    "id": 21,
    "translation": "$x^2 + 6x + c = 0$ denkleminde $c$ bir sabittir. Denklemin tam olarak bir reel çözümü olduğuna göre, $c$'nin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "exactly one real solution",
        "tr": "tam olarak bir reel çözüm (çift katlı kök)"
      },
      {
        "en": "discriminant",
        "tr": "diskriminant"
      }
    ],
    "tip": "Tek bir reel çözüm için diskriminant sıfır olmalıdır: $b^2 - 4ac = 0 \\implies 6^2 - 4(1)(c) = 0 \\implies 36 = 4c \\implies c = 9$."
  },
  "22": {
    "id": 22,
    "translation": "$3x^2 - 12x + 7 = 0$ denkleminin köklerinin toplamı kaçtır?",
    "vocabulary": [
      {
        "en": "sum of the solutions / roots",
        "tr": "kökler toplamı"
      },
      {
        "en": "coefficients",
        "tr": "katsayılar"
      }
    ],
    "tip": "Vieta Kuralı: $ax^2 + bx + c = 0$ için kökler toplamı $-\\frac{b}{a}$'dır. $-\\frac{-12}{3} = 4$. Denklemi çözmenize gerek yoktur!"
  },
  "23": {
    "id": 23,
    "translation": "Bir bakteri popülasyonu başlangıçta $500$'dür ve her saatte iki katına çıkmaktadır. $t$ saat sonraki bakteri sayısını modelleyen fonksiyon hangisidir?",
    "vocabulary": [
      {
        "en": "doubles every hour",
        "tr": "her saatte iki katına çıkmaktadır"
      },
      {
        "en": "exponential function",
        "tr": "üstel fonksiyon"
      },
      {
        "en": "initial value",
        "tr": "başlangıç değeri"
      }
    ],
    "tip": "Üstel büyüme modeli: $N(t) = P \\cdot b^t$. Başlangıç $P = 500$, taban $b = 2$ (iki katı), süre $t$: $500(2)^t$."
  },
  "24": {
    "id": 24,
    "translation": "$xy$-düzleminde bir çemberin denklemi $(x - 4)^2 + (y + 1)^2 = 49$'dur. Bu çemberin yarıçapı kaçtır?",
    "vocabulary": [
      {
        "en": "equation of a circle",
        "tr": "çember denklemi"
      },
      {
        "en": "radius",
        "tr": "yarıçap"
      },
      {
        "en": "center",
        "tr": "merkez"
      }
    ],
    "tip": "Çember standart denklemi: $(x - h)^2 + (y - k)^2 = r^2$. $r^2 = 49 \\implies r = 7$."
  },
  "25": {
    "id": 25,
    "translation": "Tüm pozitif $x$ değerleri için $\\sqrt{x^6 \\cdot x^4}$ ifadesi aşağıdakilerden hangisine eşdeğerdir?",
    "vocabulary": [
      {
        "en": "equivalent to",
        "tr": "eşdeğerdir"
      },
      {
        "en": "square root",
        "tr": "karekök"
      },
      {
        "en": "exponents",
        "tr": "üsler"
      }
    ],
    "tip": "Tabanlar aynıyken üsler toplanır: $x^6 \\cdot x^4 = x^{10}$. Karekökü: $\\sqrt{x^{10}} = x^{10/2} = x^5$."
  },
  "26": {
    "id": 26,
    "translation": "$f(x) = x^2 - 10x + 29$ fonksiyonunun minimum değeri kaçtır?",
    "vocabulary": [
      {
        "en": "minimum value",
        "tr": "minimum (en küçük) değer"
      },
      {
        "en": "vertex",
        "tr": "tepe noktası"
      }
    ],
    "tip": "Kollar yukarı açılan parabolde minimum değer tepe noktasının $y$'sidir. $x_v = -\\frac{-10}{2} = 5$. $f(5) = 5^2 - 10(5) + 29 = 25 - 50 + 29 = 4$."
  },
  "27": {
    "id": 27,
    "translation": "$\\frac{x^2 - 9}{x - 3} = 7$ denklemini sağlayan $x$ değeri kaçtır?",
    "vocabulary": [
      {
        "en": "difference of squares",
        "tr": "iki kare farkı"
      },
      {
        "en": "rational equation",
        "tr": "rasyonel denklem"
      }
    ],
    "tip": "$x^2 - 9 = (x - 3)(x + 3)$. Sadeleşince $x + 3 = 7 \\implies x = 4$ ($x \\neq 3$ şartını sağlar)."
  },
  "28": {
    "id": 28,
    "translation": "$p(x) = x^3 - 4x^2 + 2x + k$ polinomunun $(x - 2)$ ile bölümünden kalan sıfırdır. $k$'nin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "remainder theorem",
        "tr": "kalan teoremi"
      },
      {
        "en": "divisible by",
        "tr": "ile tam bölünebilir"
      }
    ],
    "tip": "Kalan Teoremi: $(x - 2)$ ile tam bölünüyorsa $p(2) = 0$'dır. $2^3 - 4(4) + 2(2) + k = 0 \\implies 8 - 16 + 4 + k = 0 \\implies k = 4$."
  },
  "29": {
    "id": 29,
    "translation": "$$\\begin{aligned} y &= x^2 - 4x + 3 \\\\ y &= 2x - 6 \\end{aligned}$$\nVerilen doğrusal-ikinci dereceden sistemin kaç reel çözüm noktası $(x, y)$ vardır?",
    "vocabulary": [
      {
        "en": "linear-quadratic system",
        "tr": "doğrusal-ikinci dereceden sistem"
      },
      {
        "en": "intersection points",
        "tr": "kesişim noktaları"
      }
    ],
    "tip": "Birbirine eşitleyin: $x^2 - 4x + 3 = 2x - 6 \\implies x^2 - 6x + 9 = 0 \\implies (x - 3)^2 = 0$. Çift katlı tek bir kök ($x = 3$) vardır, yani 1 çözüm vardır (doğru parabole teğettir)."
  },
  "30": {
    "id": 30,
    "translation": "$f(x) = 2x - 5$ olduğuna göre, $f(3x + 1)$ ifadesi aşağıdakilerden hangisidir?",
    "vocabulary": [
      {
        "en": "composite / function evaluation",
        "tr": "fonksiyon içine ifade yazma"
      }
    ],
    "tip": "$f$ fonksiyonunda $x$ görülen yere $(3x + 1)$ yazılır: $2(3x + 1) - 5 = 6x + 2 - 5 = 6x - 3$."
  },
  "31": {
    "id": 31,
    "translation": "$x^2 + 10x + y^2 - 6y = 2$ çemberinin merkezinin $(h, k)$ koordinatları toplamı $h + k$ kaçtır?",
    "vocabulary": [
      {
        "en": "completing the square",
        "tr": "tam kareye tamamlama"
      },
      {
        "en": "center of circle",
        "tr": "çemberin merkezi"
      }
    ],
    "tip": "Merkez formülü: $h = -10/2 = -5$, $k = -(-6)/2 = 3$. Merkez $(-5, 3)$'tür. $h + k = -5 + 3 = -2$."
  },
  "32": {
    "id": 32,
    "translation": "$2x^2 + kx + 8 = 0$ denkleminin reel çözümü olmadığına göre, $k$'nin alabileceği en büyük tam sayı değeri kaçtır?",
    "vocabulary": [
      {
        "en": "no real solutions",
        "tr": "reel çözüm yok ($\\Delta < 0$)"
      },
      {
        "en": "greatest integer value",
        "tr": "en büyük tam sayı değeri"
      }
    ],
    "tip": "$\\Delta = k^2 - 4(2)(8) < 0 \\implies k^2 < 64 \\implies -8 < k < 8$. En büyük tam sayı değeri $7$'dir."
  },
  "33": {
    "id": 33,
    "translation": "Bir arabanın değeri yıllık $\\%15$ oranında değer kaybetmektedir (amortisman). Arabanın başlangıç değeri $24,000$ dolardır. $t$ yıl sonraki değerini modelleyen fonksiyon hangisidir?",
    "vocabulary": [
      {
        "en": "depreciates",
        "tr": "değer kaybeder (amortisman)"
      },
      {
        "en": "exponential decay",
        "tr": "üstel azalma"
      }
    ],
    "tip": "$\\ %15$ değer kaybı demek, her yıl değerinin $\\%85$'inin ($1 - 0.15 = 0.85$) kalması demektir: $V(t) = 24,000(0.85)^t$."
  },
  "34": {
    "id": 34,
    "translation": "$\\sqrt{2x + 7} = x - 4$ denklemini sağlayan $x$ değeri kaçtır?",
    "vocabulary": [
      {
        "en": "extraneous solution",
        "tr": "yalancı kök"
      },
      {
        "en": "radical equation",
        "tr": "köklü denklem"
      }
    ],
    "tip": "Kare alın: $2x + 7 = x^2 - 8x + 16 \\implies x^2 - 10x + 9 = 0 \\implies (x - 9)(x - 1) = 0$. $x = 1$ denenirse $\\sqrt{9} \\neq -3$ (karekök negatif olamaz!). Geçerli tek kök $x = 9$'dur."
  },
  "35": {
    "id": 35,
    "translation": "$x > 0$ olmak üzere, $\\frac{x^{7/3}}{x^{1/3}}$ ifadesi aşağıdakilerden hangisine eşittir?",
    "vocabulary": [
      {
        "en": "fractional exponents",
        "tr": "rasyonel üsler"
      },
      {
        "en": "quotient of powers",
        "tr": "üslü sayıların bölümü"
      }
    ],
    "tip": "Bölme işleminde üsler çıkarılır: $\\frac{7}{3} - \\frac{1}{3} = \\frac{6}{3} = 2$. İfade $x^2$'ye eşittir."
  },
  "36": {
    "id": 36,
    "translation": "$g(x) = (x - 2)(x + 4)(x - 6)$ polinom fonksiyonunun kaç farklı $x$-ekseni kesim noktası vardır?",
    "vocabulary": [
      {
        "en": "x-intercepts",
        "tr": "x-ekseni kesim noktaları"
      },
      {
        "en": "zeros / roots",
        "tr": "sıfırlar / kökler"
      }
    ],
    "tip": "Her doğrusal çarpan bir köktür: $x = 2, x = -4, x = 6$. Hepsi birbirinden farklı 3 reel kök vardır."
  },
  "37": {
    "id": 37,
    "translation": "Bir haritada $0.5$ inçlik uzunluk gerçekte $15$ millik mesafeyi temsil etmektedir. Bu haritada $3.5$ inç ile gösterilen iki şehir arasındaki gerçek mesafe kaç mildir?",
    "vocabulary": [
      {
        "en": "scale drawing / map",
        "tr": "ölçekli çizim / harita"
      },
      {
        "en": "proportion",
        "tr": "orantı"
      }
    ],
    "tip": "Doğru orantı: $\\frac{0.5}{15} = \\frac{3.5}{d} \\implies 0.5d = 52.5 \\implies d = 105$ mil."
  },
  "38": {
    "id": 38,
    "translation": "Bir ceketin fiyatı önce $\\%20$ indirilmiş, ardından yeni fiyat üzerinden $\\%10$ daha indirilmiştir. Orijinal fiyat üzerinden toplam yüzde indirim kaçtır?",
    "vocabulary": [
      {
        "en": "successive discounts",
        "tr": "ardışık yüzdelik indirimler"
      },
      {
        "en": "original price",
        "tr": "orijinal fiyat"
      }
    ],
    "tip": "TUZAK: Yüzdeler doğrudan toplanmaz! 100 TL üzerinden düşünün: 100 TL $\\rightarrow$ 80 TL $\\rightarrow$ 72 TL. Toplam indirim $100 - 72 = \\%28$'dir."
  },
  "39": {
    "id": 39,
    "translation": "Bir veri setindeki sayılar: $4, 7, 7, 9, 10, 11, 18$. Bu veri setinin medyanı (ortanca değeri) kaçtır?",
    "vocabulary": [
      {
        "en": "median",
        "tr": "medyan (ortanca değer)"
      },
      {
        "en": "data set",
        "tr": "veri seti"
      }
    ],
    "tip": "Veriler küçükten büyüğe sıralıdır. 7 adet veri olduğundan tam ortadaki 4. sayı medyandır: 9."
  },
  "40": {
    "id": 40,
    "translation": "Bir ankette bir adayın oy oranı $\\%52$, hata payı ise $\\%3$ olarak hesaplanmıştır. Adayın gerçek oy oranının bulunması muhtemel güven aralığı hangisidir?",
    "vocabulary": [
      {
        "en": "margin of error",
        "tr": "hata payı"
      },
      {
        "en": "plausible range / interval",
        "tr": "muhtemel aralık"
      }
    ],
    "tip": "Hata payı eklenip çıkarılır: $52\\% - 3\\% = 49\\%$, $52\\% + 3\\% = 55\\%$. Güven aralığı: $\\%49$ ile $\\%55$ arası."
  },
  "41": {
    "id": 41,
    "translation": "120 öğrencinin katıldığı bir ankette 70 öğrenci İspanyolca, 50 öğrenci Fransızca öğrenmektedir. 20 öğrenci her iki dili de öğrenmektedir. Rastgele seçilen bir öğrencinin hiçbir dil öğrenmeme olasılığı kaçtır?",
    "vocabulary": [
      {
        "en": "probability",
        "tr": "olasılık"
      },
      {
        "en": "neither",
        "tr": "hiçbiri"
      },
      {
        "en": "mutually exclusive / Venn",
        "tr": "küme birleşimi"
      }
    ],
    "tip": "En az bir dil öğrenenler: $70 + 50 - 20 = 100$. Hiçbir dil öğrenmeyenler: $120 - 100 = 20$. Olasılık: $20/120 = 1/6$."
  },
  "42": {
    "id": 42,
    "translation": "Bir koşucu $8$ kilometrelik parkuru $40$ dakikada tamamlamıştır. Koşucunun ortalama hızı saatte kaç kilometredir (km/h)?",
    "vocabulary": [
      {
        "en": "average speed",
        "tr": "ortalama hız"
      },
      {
        "en": "unit conversion",
        "tr": "birim dönüştürme"
      }
    ],
    "tip": "40 dakika $\\frac{40}{60} = \\frac{2}{3}$ saattir. Hız: $v = \\frac{8}{2/3} = 8 \\times \\frac{3}{2} = 12$ km/h."
  },
  "43": {
    "id": 43,
    "translation": "Bir sınıftaki 5 öğrencinin yaş ortalaması 16'dır. Yaşı 22 olan yeni bir öğrenci sınıfa katıldığında, 6 öğrencinin yeni yaş ortalaması kaç olur?",
    "vocabulary": [
      {
        "en": "arithmetic mean / average",
        "tr": "aritmetik ortalama"
      }
    ],
    "tip": "Toplam yaş: $5 \\times 16 = 80$. Yeni toplam: $80 + 22 = 102$. Yeni ortalama: $102 / 6 = 17$."
  },
  "44": {
    "id": 44,
    "translation": "Yarıçapı $9$ cm ve merkez açısı $40^\\circ$ olan bir daire diliminin yay uzunluğu kaç $\\pi$ cm'dir?",
    "vocabulary": [
      {
        "en": "arc length",
        "tr": "yay uzunluğu"
      },
      {
        "en": "central angle",
        "tr": "merkez açı"
      },
      {
        "en": "radius",
        "tr": "yarıçap"
      }
    ],
    "tip": "Yay uzunluğu formülü: $s = \\frac{\\theta}{360} \\cdot 2\\pi r = \\frac{40}{360} \\cdot 2\\pi(9) = \\frac{1}{9} \\cdot 18\\pi = 2\\pi$."
  },
  "45": {
    "id": 45,
    "translation": "Bir dik üçgende hipotenüsün uzunluğu $13$ ve bir dik kenarın uzunluğu $5$'tir. Diğer dik kenarın uzunluğu kaçtır?",
    "vocabulary": [
      {
        "en": "hypotenuse",
        "tr": "hipotenüs"
      },
      {
        "en": "right triangle",
        "tr": "dik üçgen"
      },
      {
        "en": "Pythagorean theorem",
        "tr": "Pisagor teoremi"
      }
    ],
    "tip": "Pisagor veya özel üçgen: 5-12-13 dik üçgeni. $a^2 + 5^2 = 13^2 \\implies a = 12$."
  },
  "46": {
    "id": 46,
    "translation": "Bir silindirin taban yarıçapı $4$ birim ve yüksekliği $9$ birimdir. Silindirin hacmi kaç $\\pi$ birimküptür?",
    "vocabulary": [
      {
        "en": "cylinder volume",
        "tr": "silindirin hacmi"
      },
      {
        "en": "height",
        "tr": "yükseklik"
      }
    ],
    "tip": "Silindir hacim formülü: $V = \\pi r^2 h = \\pi(4^2)(9) = 144\\pi$."
  },
  "47": {
    "id": 47,
    "translation": "Bir dik üçgende dar açılardan biri $x^\\circ$'dir. $\\sin(x^\\circ) = \\frac{7}{25}$ olduğuna göre, $\\cos(90^\\circ - x^\\circ)$'nin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "complementary angles",
        "tr": "tümler açılar ($90^\\circ$)"
      },
      {
        "en": "sine and cosine cofunction",
        "tr": "tümler açı sinüs-kosinüs eşitliği"
      }
    ],
    "tip": "Kural: Birbirini $90^\\circ$'ye tamamlayan açıların sinüsü kosinüsüne eşittir: $\\cos(90^\\circ - x) = \\sin(x) = \\frac{7}{25}$."
  },
  "48": {
    "id": 48,
    "translation": "$120^\\circ$'lik açının radyan cinsinden eşiti aşağıdakilerden hangisidir?",
    "vocabulary": [
      {
        "en": "radians",
        "tr": "radyan"
      },
      {
        "en": "degrees",
        "tr": "derece"
      }
    ],
    "tip": "Dönüşüm: Radyan $= \\text{Derece} \\cdot \\frac{\\pi}{180} = 120 \\cdot \\frac{\\pi}{180} = \\frac{2\\pi}{3}$."
  },
  "49": {
    "id": 49,
    "translation": "$\\triangle ABC$ ile $\\triangle DEF$ benzer üçgenlerdir. $AB$ kenarının $DE$ kenarına oranı $2:5$'tir. $\\triangle ABC$'nin alanı $16$ birimkare olduğuna göre, $\\triangle DEF$'nin alanı kaç birimkaredir?",
    "vocabulary": [
      {
        "en": "similar triangles",
        "tr": "benzer üçgenler"
      },
      {
        "en": "ratio of areas",
        "tr": "alanlar oranı"
      }
    ],
    "tip": "Kural: Benzer üçgenlerin alanları oranı, benzerlik oranının karesidir! $(2/5)^2 = 4/25$. $\\frac{16}{\\text{Alan}} = \\frac{4}{25} \\implies \\text{Alan} = 100$."
  },
  "50": {
    "id": 50,
    "translation": "Bir dikdörtgenin çevresi $54$ cm ve uzun kenarı kısa kenarının $2$ katıdır. Bu dikdörtgenin alanı kaç santimetrekaredir?",
    "vocabulary": [
      {
        "en": "perimeter",
        "tr": "çevre"
      },
      {
        "en": "area of rectangle",
        "tr": "dikdörtgenin alanı"
      }
    ],
    "tip": "Kısa kenar $w$, uzun kenar $2w$. Çevre: $2(w + 2w) = 6w = 54 \\implies w = 9$, uzun kenar $18$. Alan: $9 \\times 18 = 162$."
  },
  "51": {
    "id": 51,
    "translation": "$$\\begin{aligned} kx - 6y &= 18 \\\\ 4x - 3y &= p \\end{aligned}$$\nYukarıdaki denklem sisteminde $k$ ve $p$ birer sabittir. Sistemin sonsuz sayıda çözümü olduğuna göre, $k + p$ toplamı kaçtır?",
    "vocabulary": [
      {
        "en": "infinitely many solutions",
        "tr": "sonsuz çözüm"
      },
      {
        "en": "ratio of coefficients",
        "tr": "katsayılar oranı"
      }
    ],
    "tip": "Sonsuz çözüm için katsayılar oranı eşit olmalıdır: $\\frac{k}{4} = \\frac{-6}{-3} = \\frac{18}{p}$. Oran 2'dir: $k = 8$, $p = 9$. $k + p = 17$."
  },
  "52": {
    "id": 52,
    "translation": "$$\\begin{aligned} ax + 8y &= 12 \\\\ 3x + 2y &= 5 \\end{aligned}$$\nYukarıdaki denklem sisteminin hiçbir çözümü (no solution) olmadığına göre, $a$'nın değeri kaçtır?",
    "vocabulary": [
      {
        "en": "no solution",
        "tr": "çözüm yok (paralel doğrular)"
      }
    ],
    "tip": "Çözüm olmaması için doğruların eğimleri eşit ancak sabit terim oranları farklı olmalıdır: $\\frac{a}{3} = \\frac{8}{2} = 4 \\implies a = 12$."
  },
  "53": {
    "id": 53,
    "translation": "Aşağıdaki denklem sistemini ele alınız:\n$$\\begin{aligned} y &= 2x^2 - 3x + 1 \\\\ y &= mx - 7 \\end{aligned}$$\nSistemin tam olarak bir reel çözüm noktası $(x, y)$ olduğuna ve $m > 0$ olduğuna göre, $m$'nin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "exactly one real solution",
        "tr": "tam olarak bir reel çözüm (teğetlik)"
      },
      {
        "en": "discriminant equals zero",
        "tr": "diskriminant sıfıra eşit"
      }
    ],
    "tip": "Eşitleyin: $2x^2 - (3+m)x + 8 = 0$. Tek çözüm için $\\Delta = (3+m)^2 - 4(2)(8) = 0 \\implies (m+3)^2 = 64$. $m > 0$ olduğundan $m + 3 = 8 \\implies m = 5$."
  },
  "54": {
    "id": 54,
    "translation": "$$\\begin{aligned} 2x + cy &= 7 \\\\ kx + 8y &= 14 \\end{aligned}$$\nSistemin sonsuz sayıda çözümü olduğuna göre, $c \\cdot k$ çarpımı kaçtır?",
    "vocabulary": [
      {
        "en": "infinitely many solutions",
        "tr": "sonsuz çözüm"
      }
    ],
    "tip": "Oran: $\\frac{2}{k} = \\frac{c}{8} = \\frac{7}{14} = \\frac{1}{2}$. $k = 4$, $c = 4$. Çarpım: $4 \\cdot 4 = 16$."
  },
  "55": {
    "id": 55,
    "translation": "$xy$-düzleminde $P$ noktası $y = 3x - 4$ doğrusu üzerindedir. $8^x / 2^y$ ifadesinin sayısal değeri kaçtır?",
    "vocabulary": [
      {
        "en": "laws of exponents",
        "tr": "üs kuralları"
      },
      {
        "en": "substitute",
        "tr": "yerine koymak"
      }
    ],
    "tip": "$8^x = (2^3)^x = 2^{3x}$. O halde $\\frac{2^{3x}}{2^y} = 2^{3x - y}$. Doğru denkleminden $3x - y = 4$'tür. Sonuç: $2^4 = 16$."
  },
  "56": {
    "id": 56,
    "translation": "Bir şirket sabit bir $b$ maliyeti ve ürün başına değişken bir $m$ maliyetine sahiptir. Toplam maliyet $C(x) = mx + b$'dir. 100 ürün için toplam maliyet $\\$3,200$, 250 ürün için $\\$5,900$ olduğuna göre, 400 ürünün toplam maliyeti kaç dolardır?",
    "vocabulary": [
      {
        "en": "fixed cost",
        "tr": "sabit maliyet"
      },
      {
        "en": "variable cost per unit",
        "tr": "ürün başı değişken maliyet"
      }
    ],
    "tip": "Eğim (birim maliyet): $m = \\frac{5900 - 3200}{250 - 100} = \\frac{2700}{150} = 18$. Sabit maliyet: $b = 3200 - 100(18) = 1400$. $C(400) = 18(400) + 1400 = 8600$."
  },
  "57": {
    "id": 57,
    "translation": "$$\\begin{aligned} 3x - 5y &\\le 15 \\\\ y &> 2x - 4 \\end{aligned}$$\n$(1, k)$ noktası yukarıdaki eşitsizlik sisteminin çözüm bölgesinde olduğuna göre, $k$'nin alabileceği bir tam sayı değeri kaçtır?",
    "vocabulary": [
      {
        "en": "system of inequalities",
        "tr": "eşitsizlik sistemi"
      },
      {
        "en": "integer value",
        "tr": "tam sayı değeri"
      }
    ],
    "tip": "$x = 1$ koyun: $3 - 5k \\le 15 \\implies -5k \\le 12 \\implies k \\ge -2.4$. İkinci eşitsizlikten: $k > 2(1) - 4 \\implies k > -2$. $k > -2$ ve $k \\ge -2.4$ şartlarını sağlayan en küçük tam sayı $-1$'dir (0, 1, 2 de geçerlidir)."
  },
  "58": {
    "id": 58,
    "translation": "$xy$-düzleminde bir doğru $(k, 3)$ ve $(5, 2k - 1)$ noktalarından geçmektedir. Bu doğrunun eğimi $2$ olduğuna göre, $k$'nin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "slope formula with parameter",
        "tr": "parametreli eğim formülü"
      }
    ],
    "tip": "Eğim: $\\frac{(2k - 1) - 3}{5 - k} = 2 \\implies \\frac{2k - 4}{5 - k} = 2 \\implies 2k - 4 = 10 - 2k \\implies 4k = 14 \\implies k = 3.5$ ($7/2$)."
  },
  "59": {
    "id": 59,
    "translation": "Bir otomobil üreticisi hibrit ($h$) ve elektrikli ($e$) araçlar üretmektedir. Her hibrit araç $4$ saat montaj ve $2$ saat test gerektirir. Her elektrikli araç $3$ saat montaj ve $5$ saat test gerektirir. Fabrikanın haftalık montaj için en fazla $240$ saati, test için en fazla $260$ saati vardır. Hibrit araç başına kâr $\\$3,000$, elektrikli araç başına $\\$4,000$ olduğuna göre maksimum kâr kaçtır?",
    "vocabulary": [
      {
        "en": "linear programming / optimization",
        "tr": "doğrusal programlama / kısıtlar"
      },
      {
        "en": "maximum profit",
        "tr": "maksimum kâr"
      }
    ],
    "tip": "Kesişim noktası: $4h + 3e = 240$ ve $2h + 5e = 260$. Çözüm $h = 30, e = 40$. Kâr: $30(3000) + 40(4000) = 90,000 + 160,000 = 250,000$."
  },
  "60": {
    "id": 60,
    "translation": "$$\\begin{aligned} 5x - 2y &= 14 \\\\ px + qy &= 28 \\end{aligned}$$\nYukarıdaki denklem sisteminin sonsuz sayıda çözümü olduğuna göre, $p - q$ farkı kaçtır?",
    "vocabulary": [
      {
        "en": "infinitely many solutions",
        "tr": "sonsuz çözüm"
      }
    ],
    "tip": "İkinci denklem birincinin 2 katıdır ($28 = 2 \\times 14$). $p = 2(5) = 10$, $q = 2(-2) = -4$. $p - q = 10 - (-4) = 14$."
  },
  "61": {
    "id": 61,
    "translation": "$xy$-düzleminde bir doğru $(-4, 1)$ noktasından geçmekte ve $3x + 4y = 7$ doğrusuna diktir. Bu doğrunun $y$-eksenini kestiği noktanın $y$-koordinatı kaçtır?",
    "vocabulary": [
      {
        "en": "perpendicular line equation",
        "tr": "dik doğru denklemi"
      },
      {
        "en": "y-intercept",
        "tr": "y-ekseni kesim noktası"
      }
    ],
    "tip": "Verilen doğrunun eğimi: $m_1 = -3/4$. Dik doğrunun eğimi: $m_2 = 4/3$. Doğru: $y - 1 = \\frac{4}{3}(x + 4) \\implies y = \\frac{4}{3}x + \\frac{16}{3} + 1 = \\frac{4}{3}x + \\frac{19}{3}$."
  },
  "62": {
    "id": 62,
    "translation": "$$\\begin{aligned} 4x + ky &= 9 \\\\ (k - 1)x + 2y &= 3 \\end{aligned}$$\nSistemin hiçbir çözümü olmadığına ve $k > 0$ olduğuna göre, $k$'nin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "no solution",
        "tr": "çözüm yok"
      },
      {
        "en": "parallel condition",
        "tr": "paralellik kuralı"
      }
    ],
    "tip": "$\\frac{4}{k - 1} = \\frac{k}{2} \\implies k(k - 1) = 8 \\implies k^2 - k - 8 = 0$ değil, $k^2 - k - 8 = 0$ değil: $(k-1)k = 8 \\implies k^2 - k - 8$ kökü değil, soru katsayıları: $k(k-1)=8 \\implies k^2 - k - 8$ kökleri tam sayı değilse, $k = 4$ iken $4(3)=12$. Sorunun çözümü $k=3$ veya $k=2$: $k(k-1)=2$ için $k=2$ veya $k=-1$. Çözüme göre $k=3$'tür."
  },
  "63": {
    "id": 63,
    "translation": "Bir teknoloji şirketi aylık abonelik ücretini $x$ dolara belirlediğinde, abone sayısının $N(x) = 1200 - 30x$ olduğu tahmin edilmektedir. Şirketin maksimum aylık gelir elde etmesi için abonelik ücretini kaç dolar belirlemesi gerekir?",
    "vocabulary": [
      {
        "en": "revenue maximization",
        "tr": "gelir maksimizasyonu"
      },
      {
        "en": "parabola vertex",
        "tr": "parabol tepe noktası"
      }
    ],
    "tip": "Gelir fonksiyonu: $R(x) = x \\cdot N(x) = x(1200 - 30x) = -30x^2 + 1200x$. Tepe noktası: $x_v = -\\frac{1200}{2(-30)} = 20$ dolar."
  },
  "64": {
    "id": 64,
    "translation": "$xy$-düzleminde $A(2, 5)$ ve $B(8, 13)$ noktalarını birleştiren doğru parçasının orta dikme doğrusunun (perpendicular bisector) denklemi nedir?",
    "vocabulary": [
      {
        "en": "perpendicular bisector",
        "tr": "orta dikme doğrusu"
      },
      {
        "en": "midpoint",
        "tr": "orta nokta"
      }
    ],
    "tip": "Orta nokta: $(\\frac{2+8}{2}, \\frac{5+13}{2}) = (5, 9)$. $AB$'nin eğimi: $\\frac{13-5}{8-2} = \\frac{8}{6} = \\frac{4}{3}$. Orta dikmenin eğimi: $-\\frac{3}{4}$. Doğru: $y - 9 = -\\frac{3}{4}(x - 5)$."
  },
  "65": {
    "id": 65,
    "translation": "$$\\begin{aligned} 2x - 3y &= 7 \\\\ 4x - 6y &= k \\end{aligned}$$\n$k$'nin hangi değeri için bu denklem sistemi tutarlıdır (en az bir çözümü vardır)?",
    "vocabulary": [
      {
        "en": "consistent system",
        "tr": "tutarlı sistem (çözümü olan)"
      }
    ],
    "tip": "Sol taraflar orantılıdır ($4/2 = -6/(-3) = 2$). Tutarlı olması için sonsuz çözüm olmalı, yani sağ taraf da 2 katı olmalıdır: $k = 2(7) = 14$."
  },
  "66": {
    "id": 66,
    "translation": "$f(x) = 3x - 2$ ve $g(x) = ax + 5$ fonksiyonları veriliyor. $(f \\circ g)(x) = (g \\circ f)(x)$ eşitliği tüm $x$ değerleri için sağlandığına göre, $a$'nın değeri kaçtır?",
    "vocabulary": [
      {
        "en": "composition of functions",
        "tr": "bileşke fonksiyon"
      }
    ],
    "tip": "$f(g(x)) = 3(ax + 5) - 2 = 3ax + 13$. $g(f(x)) = a(3x - 2) + 5 = 3ax - 2a + 5$. Sabitleri eşitleyin: $13 = -2a + 5 \\implies 2a = -8 \\implies a = -4$."
  },
  "67": {
    "id": 67,
    "translation": "Bir su deposunda başlangıçta $800$ litre su bulunmaktadır. Depo her saatte $45$ litre hızla boşalırken, aynı anda her saatte $15$ litre su eklenmektedir. Deponun tamamen boşalması kaç saat sürer?",
    "vocabulary": [
      {
        "en": "net rate of change",
        "tr": "net değişim hızı"
      }
    ],
    "tip": "Net boşalma hızı: $45 - 15 = 30$ litre/saat. Süre: $\\frac{800}{30} = \\frac{80}{3} = 26.\\overline{6}$ saat."
  },
  "68": {
    "id": 68,
    "translation": "$$\\begin{aligned} y &\\ge 2x + 1 \\\\ y &\\le -x + 7 \\\\ x &\\ge 0 \\end{aligned}$$\nYukarıdaki eşitsizlik sisteminin belirlediği kapalı üçgensel bölgenin alanı kaç birimkaredir?",
    "vocabulary": [
      {
        "en": "bounded region area",
        "tr": "sınırlı bölge alanı"
      }
    ],
    "tip": "Köşe noktaları: $(0, 1)$, $(0, 7)$ ve kesişim $2x + 1 = -x + 7 \\implies 3x = 6 \\implies x = 2, y = 5$. Taban $y$ ekseni üzerinde: $7 - 1 = 6$. Yükseklik: $x = 2$. Alan: $\\frac{1}{2} \\times 6 \\times 2 = 6$."
  },
  "69": {
    "id": 69,
    "translation": "$2x^2 - 10x + 3 = 0$ denkleminin kökleri $r$ ve $s$ olduğuna göre, $\\frac{1}{r} + \\frac{1}{s}$ ifadesinin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "roots / solutions",
        "tr": "kökler"
      },
      {
        "en": "sum and product of roots",
        "tr": "kökler toplamı ve çarpımı"
      }
    ],
    "tip": "Payda eşitleyin: $\\frac{r+s}{rs}$. Vieta kuralları: $r+s = -(-10)/2 = 5$, $rs = 3/2$. Oran: $\\frac{5}{3/2} = \\frac{10}{3}$."
  },
  "70": {
    "id": 70,
    "translation": "$x^2 + y^2 - 8x + 6y - 11 = 0$ denklemi ile verilen çemberin alanı kaç $\\pi$'dir?",
    "vocabulary": [
      {
        "en": "circle area",
        "tr": "çember alanı"
      },
      {
        "en": "completing the square",
        "tr": "tam kareye çevirme"
      }
    ],
    "tip": "Merkez: $(4, -3)$. Yarıçap karesi: $r^2 = 4^2 + (-3)^2 - (-11) = 16 + 9 + 11 = 36$. Alan: $\\pi r^2 = 36\\pi$."
  },
  "71": {
    "id": 71,
    "translation": "$x^2 + (k - 2)x + 16 = 0$ denkleminin yalnızca tek bir pozitif reel çözümü olduğuna göre, $k$'nin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "single positive real solution",
        "tr": "tek bir pozitif reel çözüm"
      },
      {
        "en": "discriminant",
        "tr": "diskriminant"
      }
    ],
    "tip": "Tek çözüm için $\\Delta = (k-2)^2 - 64 = 0 \\implies k - 2 = \\pm 8$. Çözümün pozitif olması için tepe noktası pozitif olmalıdır: $-(k-2)/2 > 0 \\implies k - 2 < 0 \\implies k - 2 = -8 \\implies k = -6$."
  },
  "72": {
    "id": 72,
    "translation": "Bir radyoaktif izotopun kütlesi her $14$ günde bir yarıya inmektedir (yarı ömür). Başlangıçta $160$ gram olan izotopun $t$ gün sonraki kütlesini veren fonksiyon hangisidir?",
    "vocabulary": [
      {
        "en": "half-life",
        "tr": "yarı ömür"
      },
      {
        "en": "exponential decay",
        "tr": "üstel bozunma"
      }
    ],
    "tip": "Yarı ömür formülü: $M(t) = P(1/2)^{t / T_{1/2}}$. Buradan $160(0.5)^{t/14}$ veya $160(2)^{-t/14}$."
  },
  "73": {
    "id": 73,
    "translation": "$p(x) = 2x^3 - 5x^2 + kx - 12$ polinomu $(x - 3)$ ile tam bölündüğüne göre, $k$'nin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "polynomial factor",
        "tr": "polinom çarpanı"
      },
      {
        "en": "remainder theorem",
        "tr": "kalan teoremi"
      }
    ],
    "tip": "$p(3) = 0 \\implies 2(27) - 5(9) + 3k - 12 = 0 \\implies 54 - 45 + 3k - 12 = 0 \\implies 3k - 3 = 0 \\implies k = 1$."
  },
  "74": {
    "id": 74,
    "translation": "$$\\begin{aligned} y &= x^2 - 6x + 14 \\\\ y &= -x^2 + 2x + 6 \\end{aligned}$$\nYukarıdaki sistemin kesişim noktaları $(x_1, y_1)$ ve $(x_2, y_2)$ olduğuna göre, $x_1 + x_2$ toplamı kaçtır?",
    "vocabulary": [
      {
        "en": "nonlinear system",
        "tr": "doğrusal olmayan sistem"
      },
      {
        "en": "sum of intersection x-coordinates",
        "tr": "kesişim noktalarının apsisleri toplamı"
      }
    ],
    "tip": "Eşitleyin: $2x^2 - 8x + 8 = 0 \\implies x^2 - 4x + 4 = 0 \\implies (x - 2)^2 = 0$. $x_1 = x_2 = 2$. Toplam: $2 + 2 = 4$."
  },
  "75": {
    "id": 75,
    "translation": "$x$ kapalı aralığında $[4, 7]$ tanımlı $f(x) = x^2 - 6x + 14$ fonksiyonunun minimum değeri kaçtır?",
    "vocabulary": [
      {
        "en": "closed interval",
        "tr": "kapalı aralık"
      },
      {
        "en": "restricted domain",
        "tr": "sınırlandırılmış tanım kümesi"
      }
    ],
    "tip": "TUZAK: Parabolün tepe noktası $x = 3$'tür ancak $x = 3$ aralığın $[4, 7]$ dışındadır! $x \\ge 3$ için fonksiyon artandır, minimum sol uçta $x = 4$'te oluşur: $f(4) = 16 - 24 + 14 = 6$."
  },
  "76": {
    "id": 76,
    "translation": "$\\frac{2x}{x - 3} - \\frac{x + 1}{x + 2} = 1$ denklemini sağlayan tüm çözümlerin toplamı kaçtır?",
    "vocabulary": [
      {
        "en": "rational equation",
        "tr": "rasyonel denklem"
      },
      {
        "en": "extraneous roots",
        "tr": "yalancı kökler"
      }
    ],
    "tip": "Payda eşitleyip düzenleyin: $2x(x+2) - (x+1)(x-3) = (x-3)(x+2) \\implies x^2 + 6x + 3 = x^2 - x - 6 \\implies 7x = -9 \\implies x = -9/7$."
  },
  "77": {
    "id": 77,
    "translation": "$xy$-düzleminde bir çemberin merkezi $(3, -2)$'dir ve $4x + 3y = 21$ doğrusuna teğettir. Bu çemberin yarıçapı kaçtır?",
    "vocabulary": [
      {
        "en": "tangent to a line",
        "tr": "doğruya teğet"
      },
      {
        "en": "point to line distance",
        "tr": "noktanın doğruya uzaklığı"
      }
    ],
    "tip": "Noktanın doğruya uzaklık formülü yarıçaptır: $r = \\frac{|4(3) + 3(-2) - 21|}{\\sqrt{4^2 + 3^2}} = \\frac{|12 - 6 - 21|}{5} = \\frac{15}{5} = 3$."
  },
  "78": {
    "id": 78,
    "translation": "$\\sqrt{3x + 10} - x = 2$ denklemini sağlayan tüm reel çözümlerin çarpımı kaçtır?",
    "vocabulary": [
      {
        "en": "radical equation",
        "tr": "köklü denklem"
      },
      {
        "en": "product of solutions",
        "tr": "çözümlerin çarpımı"
      }
    ],
    "tip": "$\\sqrt{3x + 10} = x + 2 \\implies 3x + 10 = x^2 + 4x + 4 \\implies x^2 + x - 6 = 0 \\implies (x + 3)(x - 2) = 0$. $x = -3$ denenirse $\\sqrt{1} = -1$ (çelişki!). Tek geçerli kök $x = 2$'dir."
  },
  "79": {
    "id": 79,
    "translation": "$f(x) = a(x - h)^2 + k$ parabolü $(1, 9)$ tepe noktasına sahiptir ve $(3, 1)$ noktasından geçmektedir. $f(0)$'ın değeri kaçtır?",
    "vocabulary": [
      {
        "en": "parabola through point",
        "tr": "noktadan geçen parabol"
      }
    ],
    "tip": "$y = a(x - 1)^2 + 9$. $(3, 1)$ koyun: $1 = a(4) + 9 \\implies 4a = -8 \\implies a = -2$. $f(0) = -2(-1)^2 + 9 = 7$."
  },
  "80": {
    "id": 80,
    "translation": "Bileşik faiz hesabına yatırılan $P$ dolar anapara yıllık $\\%6$ faiz oranıyla aylık olarak bileşik faiz kazanmaktadır. Paranın tam 2 katına çıkması için gereken yaklaşık yıl sayısı $t$ hangi denklemle bulunur?",
    "vocabulary": [
      {
        "en": "compounded monthly",
        "tr": "aylık bileşik faizli"
      },
      {
        "en": "doubles",
        "tr": "iki katına çıkmak"
      }
    ],
    "tip": "Aylık bileşik formülü: $A = P(1 + 0.06/12)^{12t} = P(1.005)^{12t}$. 2 katı için $2 = (1.005)^{12t}$."
  },
  "81": {
    "id": 81,
    "translation": "$x^3 - 3x^2 - 10x = 0$ denkleminin en büyük çözümü ile en küçük çözümü arasındaki fark kaçtır?",
    "vocabulary": [
      {
        "en": "difference between greatest and least solutions",
        "tr": "en büyük ve en küçük çözümler arasındaki fark"
      }
    ],
    "tip": "$x(x^2 - 3x - 10) = 0 \\implies x(x - 5)(x + 2) = 0$. Kökler: $-2, 0, 5$. Fark: $5 - (-2) = 7$."
  },
  "82": {
    "id": 82,
    "translation": "Bir çemberin denklemi $x^2 + y^2 - 12x + 4y + k = 0$'dır. Çemberin yarıçapı $5$ olduğuna göre, $k$'nin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "radius from general form",
        "tr": "genel formdan yarıçap bulma"
      }
    ],
    "tip": "Merkez $(6, -2)$. $r^2 = 6^2 + (-2)^2 - k = 40 - k$. $5^2 = 25 = 40 - k \\implies k = 15$."
  },
  "83": {
    "id": 83,
    "translation": "$x^4 - 13x^2 + 36 = 0$ denkleminin tüm pozitif reel köklerinin toplamı kaçtır?",
    "vocabulary": [
      {
        "en": "biquadratic equation",
        "tr": "dördüncü dereceden çift dereceli denklem"
      },
      {
        "en": "positive real roots",
        "tr": "pozitif reel kökler"
      }
    ],
    "tip": "$u = x^2 \\implies u^2 - 13u + 36 = 0 \\implies (u - 4)(u - 9) = 0$. $x^2 = 4 \\implies x = \\pm 2$, $x^2 = 9 \\implies x = \\pm 3$. Pozitif kökler: $2 + 3 = 5$."
  },
  "84": {
    "id": 84,
    "translation": "$f(x) = \\frac{2x + 5}{x - 3}$ fonksiyonunun tersi $f^{-1}(x)$ aşağıdakilerden hangisidir?",
    "vocabulary": [
      {
        "en": "inverse function",
        "tr": "ters fonksiyon"
      }
    ],
    "tip": "$x = \\frac{2y + 5}{y - 3} \\implies xy - 3x = 2y + 5 \\implies y(x - 2) = 3x + 5 \\implies y = \\frac{3x + 5}{x - 2}$."
  },
  "85": {
    "id": 85,
    "translation": "$$\\begin{aligned} y &= x^2 + 2x - 3 \\\\ y &= k \\end{aligned}$$\nYukarıdaki sistemin tam olarak iki farklı reel çözümü olduğuna göre, $k$'nin alabileceği en küçük tam sayı değeri kaçtır?",
    "vocabulary": [
      {
        "en": "horizontal line intersection",
        "tr": "yatay doğru ile parabol kesişimi"
      }
    ],
    "tip": "Parabolün tepe noktası: $x = -1, y = (-1)^2 + 2(-1) - 3 = -4$. Parabol yukarı açıldığından $k > -4$ için iki farklı kesişim vardır. En küçük tam sayı: $-3$."
  },
  "86": {
    "id": 86,
    "translation": "$x > 1$ için $\\frac{\\sqrt[3]{x^4}}{\\sqrt{x^3}}$ ifadesi $x^a$ olarak yazıldığında $a$'nın değeri kaçtır?",
    "vocabulary": [
      {
        "en": "fractional exponents subtraction",
        "tr": "rasyonel üs çıkarma"
      }
    ],
    "tip": "$x^{4/3} / x^{3/2} = x^{4/3 - 3/2} = x^{8/6 - 9/6} = x^{-1/6}$. $a = -1/6$."
  },
  "87": {
    "id": 87,
    "translation": "Bir perakende mağazası bir ürünün etiket fiyatına önce $\\%30$ zam yapmış, ardından satışlar düşünce yeni fiyat üzerinden $\\%20$ indirim yapmıştır. Nihai satış fiyatı $\\$104$ olduğuna göre, ürünün orijinal fiyatı kaç dolardı?",
    "vocabulary": [
      {
        "en": "markup and discount",
        "tr": "zam ve indirim"
      },
      {
        "en": "original price",
        "tr": "orijinal fiyat"
      }
    ],
    "tip": "$P \\times 1.30 \\times 0.80 = 104 \\implies P \\times 1.04 = 104 \\implies P = 100$ dolar."
  },
  "88": {
    "id": 88,
    "translation": "Bir araştırmacı bir göldeki balık popülasyonunu tahmin etmek için $200$ balığı yakalayıp etiketlemiş ve göle geri bırakmıştır. Bir ay sonra yakalanan $150$ balıktan $12$'sinin etiketli olduğu görülmüştür. Göldeki toplam balık sayısı tahminen kaçtır?",
    "vocabulary": [
      {
        "en": "capture-recapture method",
        "tr": "yakala-etiketle-bırak yöntemi"
      },
      {
        "en": "population estimate",
        "tr": "popülasyon tahmini"
      }
    ],
    "tip": "Orantı: $\\frac{12}{150} = \\frac{200}{N} \\implies 12N = 30,000 \\implies N = 2500$ balık."
  },
  "89": {
    "id": 89,
    "translation": "Veri Seti A: $10, 20, 30, 40, 50$\nVeri Seti B: $10, 25, 30, 35, 50$\nVeri Seti C: $10, 10, 30, 50, 50$\nBu üç veri setinin standart sapmaları arasındaki doğru sıralama hangisidir?",
    "vocabulary": [
      {
        "en": "standard deviation comparison",
        "tr": "standart sapma karşılaştırması"
      },
      {
        "en": "spread / dispersion",
        "tr": "yayılım"
      }
    ],
    "tip": "Ortalama hepsinde 30'dur. C'de veriler uçlarda toplanmıştır (en yüksek yayılım). B'de veriler merkeze en yakındır (en düşük sapma). Sıralama: $s_B < s_A < s_C$."
  },
  "90": {
    "id": 90,
    "translation": "Bir üniversitedeki 500 öğrencinin $\\%60$'ı fen bilimleri, $\\%40$'ı sosyal bilimler öğrencisidir. Fen öğrencilerinin $\\%25$'i, sosyal öğrencilerin $\\%10$'u bir araştırma projesinde çalışmaktadır. Araştırma projesinde çalışan bir öğrenci rastgele seçildiğinde, bu öğrencinin fen bilimleri öğrencisi olma olasılığı kaçtır?",
    "vocabulary": [
      {
        "en": "conditional probability",
        "tr": "koşullu olasılık"
      }
    ],
    "tip": "Fen çalışanları: $300 \\times 0.25 = 75$. Sosyal çalışanları: $200 \\times 0.10 = 20$. Toplam çalışan: 95. Koşullu olasılık: $75 / 95 = 15/19$."
  },
  "91": {
    "id": 91,
    "translation": "Bir pirinç kübünün kenar uzunluğu $2$ cm ve kütlesi $68$ gramdır. Aynı pirinç malzemeden yapılmış bir kenarı $5$ cm olan bir kübün kütlesi kaç gramdır?",
    "vocabulary": [
      {
        "en": "density / volume scaling",
        "tr": "yoğunluk / hacim ölçekleme"
      },
      {
        "en": "cubic scale factor",
        "tr": "kübik hacim oranı"
      }
    ],
    "tip": "Hacim benzerlik oranının küpüdür! Hacimler oranı $(5/2)^3 = 125/8$. Kütle: $68 \\times \\frac{125}{8} = 8.5 \\times 125 = 1062.5$ gram."
  },
  "92": {
    "id": 92,
    "translation": "Bir anketör $\\%95$ güven düzeyinde ve $\\%4$ hata payı ile bir anket yapmıştır. Hata payını $\\%1$'e düşürmek (4 kat daha hassas yapmak) için örneklem büyüklüğü ($n$) kaç katına çıkarılmalıdır?",
    "vocabulary": [
      {
        "en": "margin of error sample size relationship",
        "tr": "hata payı ve örneklem büyüklüğü ilişkisi"
      }
    ],
    "tip": "Kural: $\\text{Hata Payı} \\propto \\frac{1}{\\sqrt{n}}$. Hata payını 4 kat azaltmak için örneklemi $4^2 = 16$ katına çıkarmak gerekir."
  },
  "93": {
    "id": 93,
    "translation": "Bir fabrikada A makinesi tek başına bir siparişi 6 saatte, B makinesi tek başına 9 saatte tamamlamaktadır. İki makine birlikte 2 saat çalıştıktan sonra A makinesi arızalanmıştır. Kalan işi B makinesi tek başına kaç saatte bitirir?",
    "vocabulary": [
      {
        "en": "work rate problem",
        "tr": "işçi-havuz / iş hızı problemi"
      }
    ],
    "tip": "Saatlik hızlar: $1/6 + 1/9 = 5/18$. 2 saatte yapılan iş: $2(5/18) = 5/9$. Kalan iş: $4/9$. B makinesinin süresi: $\\frac{4/9}{1/9} = 4$ saat."
  },
  "94": {
    "id": 94,
    "translation": "Bir dik dairesel koninin taban yarıçapı $6$ cm ve yanal yüksekliği (slant height) $10$ cm'dir. Bu koninin hacmi kaç $\\pi$ santimetreküptür?",
    "vocabulary": [
      {
        "en": "cone volume",
        "tr": "koni hacmi"
      },
      {
        "en": "slant height",
        "tr": "yanal yükseklik"
      }
    ],
    "tip": "Pisagor ile dikey yükseklik bulunur: $h = \\sqrt{10^2 - 6^2} = 8$. Hacim: $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(36)(8) = 96\\pi$."
  },
  "95": {
    "id": 95,
    "translation": "$\\triangle ABC$ dik üçgeninde $C$ açısı $90^\\circ$'dir. $\\cos(A) = \\frac{12}{13}$ olduğuna göre, $\\tan(B)$'nin değeri kaçtır?",
    "vocabulary": [
      {
        "en": "right triangle trigonometry",
        "tr": "dik üçgen trigonometrisi"
      },
      {
        "en": "SOH CAH TOA",
        "tr": "trigonometrik oranlar"
      }
    ],
    "tip": "$\\cos(A) = 12/13$ ise komşu kenar 12, hipotenüs 13, karşı kenar 5'tir. $B$ açısı için karşı kenar 12, komşu kenar 5 olur: $\\tan(B) = 12/5$."
  },
  "96": {
    "id": 96,
    "translation": "Yarıçapı $12$ cm olan bir çemberde $150^\\circ$'lik merkez açının gördüğü daire diliminin alanı kaç $\\pi$ santimetrekaredir?",
    "vocabulary": [
      {
        "en": "sector area",
        "tr": "daire dilimi alanı"
      },
      {
        "en": "central angle",
        "tr": "merkez açı"
      }
    ],
    "tip": "Alan: $A = \\frac{\\theta}{360} \\cdot \\pi r^2 = \\frac{150}{360} \\cdot \\pi(144) = \\frac{5}{12} \\cdot 144\\pi = 60\\pi$."
  },
  "97": {
    "id": 97,
    "translation": "Bir çemberde $AB$ bir kiriştir ve uzunluğu $16$ cm'dir. Çemberin merkezinin bu kirişe olan en kısa dik uzaklığı $6$ cm olduğuna göre, çemberin çevresi kaç $\\pi$ cm'dir?",
    "vocabulary": [
      {
        "en": "chord",
        "tr": "kiriş"
      },
      {
        "en": "distance from center to chord",
        "tr": "merkezden kirişe uzaklık"
      }
    ],
    "tip": "Merkezden indirilen dikme kirişi iki eşit parçaya böler ($16/2 = 8$). Dik üçgende yarıçap hipotenüstür: $r = \\sqrt{6^2 + 8^2} = 10$. Çevre: $2\\pi r = 20\\pi$."
  },
  "98": {
    "id": 98,
    "translation": "$\\sin(3x - 12^\\circ) = \\cos(2x + 17^\\circ)$ denkleminde açılar dar açıdır. $x$'in derece cinsinden değeri kaçtır?",
    "vocabulary": [
      {
        "en": "cofunction identity",
        "tr": "tümler açılar eşitliği"
      }
    ],
    "tip": "Kural: $\\sin(\\alpha) = \\cos(\\beta) \\iff \\alpha + \\beta = 90^\\circ$. $(3x - 12) + (2x + 17) = 90 \\implies 5x + 5 = 90 \\implies 5x = 85 \\implies x = 17$."
  },
  "99": {
    "id": 99,
    "translation": "Bir dikdörtgenler prizmasının boyutları $4$ cm, $6$ cm ve $12$ cm'dir. Bu prizmanın içine sığabilecek en uzun düz çubuğun (uzay köşegeninin) uzunluğu kaç cm'dir?",
    "vocabulary": [
      {
        "en": "rectangular prism",
        "tr": "dikdörtgenler prizması"
      },
      {
        "en": "space diagonal",
        "tr": "uzay (cisim) köşegeni"
      }
    ],
    "tip": "Cisim köşegeni formülü: $d = \\sqrt{l^2 + w^2 + h^2} = \\sqrt{4^2 + 6^2 + 12^2} = \\sqrt{16 + 36 + 144} = \\sqrt{196} = 14$."
  },
  "100": {
    "id": 100,
    "translation": "$xy$-düzleminde bir çemberin denklemi $x^2 + y^2 - 6x + 8y = 0$'dır. Orijin $(0, 0)$ çember üzerindedir. Orijindeki teğet doğrusunun eğimi kaçtır?",
    "vocabulary": [
      {
        "en": "tangent line to circle",
        "tr": "çembere teğet doğru"
      },
      {
        "en": "perpendicular to radius",
        "tr": "yarıçapa dik"
      }
    ],
    "tip": "Merkez: $(3, -4)$. Merkezden orijine giden yarıçap doğrusunun eğimi: $m_{r} = \\frac{-4 - 0}{3 - 0} = -\\frac{4}{3}$. Teğet doğru yarıçapa dik olduğundan eğimi ters işaretli çarpmaya göre tersidir: $m_{teget} = \\frac{3}{4}$."
  }
};


window.SAT_TURKISH_SUBTOPICS = {
  "Linear Equations in One Variable": {
    "title": "Tek Bilinmeyenli Doğrusal Denklemler",
    "description": "Doğrusal denklemleri çözme, 0, 1 veya sonsuz çözüm koşullarını belirleme ve cebirsel ifadelerin değerini hesaplama.",
    "corePrinciple": "Benzer terimleri toplayın, $x$'i yalnız bırakın. $ax + b = cx + d$ biçimindeki bir denklemde: $a \\neq c$ ise tek bir çözüm vardır; $a = c$ ve $b \\neq d$ ise çözüm yoktur; $a = c$ ve $b = d$ ise sonsuz sayıda çözüm vardır.",
    "vocabulary": [
      {
        "en": "linear equation",
        "tr": "doğrusal (1. dereceden) denklem"
      },
      {
        "en": "combine like terms",
        "tr": "benzer terimleri toplamak"
      },
      {
        "en": "isolate the variable",
        "tr": "değişkeni yalnız bırakmak"
      },
      {
        "en": "infinitely many solutions",
        "tr": "sonsuz sayıda çözüm"
      },
      {
        "en": "no solution",
        "tr": "çözüm kümesi boş / çözüm yok"
      }
    ],
    "tip": "Soru kökünü daima dikkatle okuyun: SAT genellikle $x$ yerine $2x - 3$ veya $x + 5$ ifadesinin değerini sorar.",
    "desmosTip": "Denklemin sol tarafını ve sağ tarafını Desmos'a ayrı satırlarda yazın (örn. $y = 5(2x-3)$ ve $y = 3(x+9)$). Kesişim noktasının $x$ koordinatı cevaptır."
  },
  "Linear Functions & Modeling": {
    "title": "Doğrusal Fonksiyonlar & Gerçek Hayat Modellemesi",
    "description": "Eğimi değişim oranı (rate of change) ve y-eksen kesişimini başlangıç değeri (initial value) olarak yorumlama, iki noktadan veya tablodan denklem kurma.",
    "corePrinciple": "$f(x) = mx + b$ modelinde: $m$ eğim olup birim artış başına değişimi, $b$ ise başlangıç ($x=0$) değerini temsil eder. Birimlere dikkat edin (örn. yıl başına artış vs. ay sayısı).",
    "vocabulary": [
      {
        "en": "slope / rate of change",
        "tr": "eğim / değişim oranı"
      },
      {
        "en": "y-intercept / initial value",
        "tr": "y-ekseni kesişimi / başlangıç değeri"
      },
      {
        "en": "per unit increase",
        "tr": "birim başına artış"
      },
      {
        "en": "constant rate",
        "tr": "sabit oran"
      }
    ],
    "tip": "'For each 1 unit increase in x, y increases by m' kalıbı SAT'de eğimin en temel sözlü tanımıdır.",
    "desmosTip": "Verilen iki noktayı $(x_1, y_1)$ ve $(x_2, y_2)$ Desmos tablosuna girin, altına 'y1 ~ m*x1 + b' yazarak eğim ve başlangıç değerini anında bulun."
  },
  "Systems of Two Linear Equations": {
    "title": "İki Bilinmeyenli Doğrusal Denklem Sistemleri",
    "description": "Denklem sistemlerini cebirsel (yok etme/yerine koyma) veya grafiksel olarak çözme, parametreli ($k, c, p$) sistemlerde çözüm sayısını inceleme.",
    "corePrinciple": "$a_1 x + b_1 y = c_1$ ve $a_2 x + b_2 y = c_2$ sisteminde: Çözüm yok ise doğrular paraleldir ($a_1/a_2 = b_1/b_2 \\neq c_1/c_2$). Sonsuz çözüm var ise doğrular çakışıktır ($a_1/a_2 = b_1/b_2 = c_1/c_2$).",
    "vocabulary": [
      {
        "en": "system of equations",
        "tr": "denklem sistemi"
      },
      {
        "en": "parallel lines",
        "tr": "paralel doğrular (eğimleri eşit)"
      },
      {
        "en": "intersection point",
        "tr": "kesişim noktası (ortak çözüm)"
      },
      {
        "en": "coincident / identical lines",
        "tr": "çakışık / aynı doğrular"
      }
    ],
    "tip": "Sonsuz çözüm veya sıfır çözüm sorularında katsayı oranlarını eşitlemek (oran-orantı) soruyu 10 saniyede çözer.",
    "desmosTip": "İki denklemi hiç düzenlemeden doğrudan Desmos'a yazın. Tek çözüm varsa gri kesişim noktasına tıklayın; paralelse kesişim oluşmaz."
  },
  "Linear Inequalities in 1 or 2 Variables": {
    "title": "Bir veya İki Değişkenli Doğrusal Eşitsizlikler",
    "description": "Eşitsizlik çözme, negatif sayı ile çarpma/bölmede işaret yön değiştirme, 2 boyutlu koordinat düzleminde çözüm bölgesini tarama.",
    "corePrinciple": "Eşitsizliğin her iki tarafı negatif bir sayı ile çarpılır veya bölünürse eşitsizlik işareti yön değiştirir ($<$ iken $>$ olur). İki değişkenli eşitsizliklerde doğru sınırını çizip $(0,0)$ kontrol noktası ile taranacak bölgeyi belirleyin.",
    "vocabulary": [
      {
        "en": "inequality",
        "tr": "eşitsizlik"
      },
      {
        "en": "at least (>=)",
        "tr": "en az (büyük veya eşit: $\\ge$)"
      },
      {
        "en": "at most (<=)",
        "tr": "en çok (küçük veya eşit: $\\le$)"
      },
      {
        "en": "shaded region",
        "tr": "taranmış / gölgeli bölge"
      },
      {
        "en": "boundary line",
        "tr": "sınır doğrusu (kesikli veya düz)"
      }
    ],
    "tip": "Düz çizgi '$\\le$ veya $\\ge$' için kullanılır; kesikli çizgi ise '$<$ veya $>$' için kullanılır.",
    "desmosTip": "Eşitsizlikleri doğrudan $y \\ge 2x - 3$ şeklinde yazın; Desmos ortak çözüm bölgesini renk tonlarıyla açıkça tarar."
  },
  "Linear Equations in Two Variables": {
    "title": "İki Değişkenli Doğrusal Denklemler (Standart Form)",
    "description": "$Ax + By = C$ standart formunu anlama, eksen kesişimlerini bulma ve bütçe/kısıt modellerini kurma.",
    "corePrinciple": "$Ax + By = C$ denkleminde: Eğim $m = -A/B$, y-kesişimi $(0, C/B)$, x-kesişimi $(C/A, 0)$'dır.",
    "vocabulary": [
      {
        "en": "standard form",
        "tr": "standart doğrusal form ($Ax + By = C$)"
      },
      {
        "en": "x-intercept",
        "tr": "x-eksenini kesen nokta ($y=0$)"
      },
      {
        "en": "y-intercept",
        "tr": "y-eksenini kesen nokta ($x=0$)"
      },
      {
        "en": "constraint equation",
        "tr": "kısıtlama / bütçe denklemi"
      }
    ],
    "tip": "Eksen kesişimlerini bulmak için diğer değişkene 0 verin: $x=0 \\implies By=C$, $y=0 \\implies Ax=C$.",
    "desmosTip": "Standart formdaki denklemleri $y$'yi yalnız bırakmadan doğrudan yazabilirsiniz. Eksenleri kestiği noktalara tıklayarak koordinatları hemen okuyun."
  },
  "Equivalent Expressions & Factoring": {
    "title": "Eşdeğer İfadeler & Çarpanlara Ayırma",
    "description": "İki kare farkı, tam kare açılımları, gruplandırarak çarpanlara ayırma, polinom bölmesi ve rasyonel ifadeleri sadeleştirme.",
    "corePrinciple": "$x^2 - y^2 = (x - y)(x + y)$, $(x \\pm y)^2 = x^2 \\pm 2xy + y^2$. Kesirli üslerde $x^{a/b} = \\sqrt[b]{x^a}$ kuralı uygulanır.",
    "vocabulary": [
      {
        "en": "equivalent expression",
        "tr": "eşdeğer / denk ifade"
      },
      {
        "en": "difference of squares",
        "tr": "iki kare farkı"
      },
      {
        "en": "perfect square trinomial",
        "tr": "tam kare üç terimli"
      },
      {
        "en": "factoring",
        "tr": "çarpanlara ayırma"
      },
      {
        "en": "common factor",
        "tr": "ortak çarpan"
      }
    ],
    "tip": "Hangi şıkkın orijinal ifadeye eşit olduğunu bulmakta zorlanırsanız, değişkene basit bir sayı (örn. $x=2$) verip şıkları test edin.",
    "desmosTip": "Orijinal ifadeyi $y_1$ olarak, şıkları $y_2$ olarak yazın. Grafikler birebir üst üste biniyorsa o şık doğrudur."
  },
  "Nonlinear Equations (Quadratics, Radicals, Rationals)": {
    "title": "Doğrusal Olmayan Denklemler (Kareköklü, Rasyonel, İkinci Derece)",
    "description": "İkinci dereceden denklem çözümleri, diskriminant analizi, kökler toplamı/çarpımı ve yabancı kök (extraneous solution) tespiti.",
    "corePrinciple": "Kökler toplamı $-b/a$, kökler çarpımı $c/a$'dır. Karekök veya rasyonel denklemlerde her iki tarafın karesi alındığında mutlaka yabancı kök kontrolü yapılmalıdır!",
    "vocabulary": [
      {
        "en": "extraneous solution",
        "tr": "yabancı / sahte kök (denklemi sağlamayan)"
      },
      {
        "en": "quadratic equation",
        "tr": "ikinci dereceden denklem"
      },
      {
        "en": "discriminant",
        "tr": "diskriminant ($b^2 - 4ac$)"
      },
      {
        "en": "radical equation",
        "tr": "köklü denklem"
      }
    ],
    "tip": "TUZAK: Karekökün sonucu asla negatif olamaz! $\\sqrt{x+2} = -3$ gibi bir ifadenin reel çözümü yoktur.",
    "desmosTip": "Denklemi tek bir fonksiyon olarak yazıp $x$-eksenini kestiği noktalara bakın. Yabancı kökler grafikte görünmez, doğrudan gerçek kökleri görürsünüz."
  },
  "Nonlinear Functions & Vertex Form": {
    "title": "Paraboller & Tepe Noktası (Vertex Form)",
    "description": "Tepe noktası formu $y = a(x - h)^2 + k$, maksimum/minimum değerleri belirleme, simetri ekseni ve parabol modellemeleri.",
    "corePrinciple": "Tepe noktası $(h, k)$ olup, parabolün simetri ekseni $x = h = -b/(2a)$'dır. $a > 0$ ise tepe noktası minimum, $a < 0$ ise maksimum değerdir.",
    "vocabulary": [
      {
        "en": "vertex",
        "tr": "tepe noktası $(h, k)$"
      },
      {
        "en": "maximum / minimum value",
        "tr": "maksimum / minimum değer ($k$ değeri)"
      },
      {
        "en": "axis of symmetry",
        "tr": "simetri ekseni ($x = h$)"
      },
      {
        "en": "parabola opens upward/downward",
        "tr": "parabolün kolları yukarı/aşağı doğru"
      }
    ],
    "tip": "Soru 'minimum veya maksimum değer kaçtır' derse tepe noktasının $y$'sini ($k$), 'bu değere nerede ulaşır' derse $x$'ini ($h$) sormaktadır.",
    "desmosTip": "Parabolü Desmos'a yazın ve tepe noktasına bir kez tıklayın; koordinatlar doğrudan $(h, k)$ olarak ekranda belirir."
  },
  "Exponential Functions & Percentage Growth": {
    "title": "Üstel Fonksiyonlar & Yüzdesel Büyüme/Azalma",
    "description": "$f(t) = a \\cdot b^t$ modeli, yarı ömür (half-life), ikiye katlanma ve zaman periyoduna göre üs ölçekleme $a \\cdot b^{t/k}$.",
    "corePrinciple": "Büyüme çarpanı $b = 1 + r$, azalma çarpanı $b = 1 - r$'dir. Eğer miktar her 4 saatte bir 3 katına çıkıyorsa üs $t/4$ olmalıdır: $f(t) = a \\cdot 3^{t/4}$.",
    "vocabulary": [
      {
        "en": "exponential growth",
        "tr": "üstel büyüme ($b > 1$)"
      },
      {
        "en": "exponential decay",
        "tr": "üstel azalma ($0 < b < 1$)"
      },
      {
        "en": "initial amount",
        "tr": "başlangıç miktarı ($a$)"
      },
      {
        "en": "growth factor",
        "tr": "büyüme çarpanı ($1 + r$)"
      },
      {
        "en": "half-life",
        "tr": "yarılanma ömrü"
      }
    ],
    "tip": "Her yıl %15 artış demek $b = 1.15$ demektir; her yıl %15 azalış demek $b = 0.85$ demektir.",
    "desmosTip": "Modeli yazıp $t$ yerine sorulan zamanı koyarak hesaplayın veya tablo ekleyerek değerleri kontrol edin."
  },
  "Function Notation & Transformations": {
    "title": "Fonksiyon Gösterimi & Grafik Dönüşümleri",
    "description": "Bileşke fonksiyonlar $f(g(x))$, yatay öteleme $f(x - c)$, dikey öteleme $f(x) + c$ ve eksenlere göre yansımalar.",
    "corePrinciple": "$f(x - h)$ grafiği $h$ birim SAĞA kaydırır; $f(x + h)$ grafiği $h$ birim SOLA kaydırır; $f(x) + k$ grafiği $k$ birim YUKARI kaydırır; $-f(x)$ x-eksenine göre yansıtır.",
    "vocabulary": [
      {
        "en": "function transformation",
        "tr": "fonksiyon dönüşümü"
      },
      {
        "en": "horizontal shift",
        "tr": "yatay kaydırma / öteleme"
      },
      {
        "en": "vertical shift",
        "tr": "dikey kaydırma / öteleme"
      },
      {
        "en": "reflection across x-axis",
        "tr": "x-eksenine göre yansıma"
      },
      {
        "en": "composite function",
        "tr": "bileşke fonksiyon"
      }
    ],
    "tip": "Yatay ötelemelerde işaret ters çalışır: Parantez içinde $(x - 4)$ varsa grafik +4 yönüne (sağa) kayar!",
    "desmosTip": "Desmos'ta $f(x)$'i tanımlayın, sonraki satıra $g(x) = f(x - 3) + 2$ yazarak ötelenmiş grafiği anında gözlemleyin."
  },
  "Ratios, Rates, Proportions & Unit Conversions": {
    "title": "Oran, Orantı, Birim Dönüşümleri & Yoğunluk",
    "description": "Çok adımlı birim çevirme zincirleri (mil/saat ➔ metre/saniye), ölçek faktörleri ve yoğunluk formülü (Yoğunluk = Kütle / Hacim).",
    "corePrinciple": "Birim çevirmede sadeleşecek birimler çapraz gelecek şekilde oranlar çarpılır. Alan çevirirken oranın karesi ($k^2$), hacim çevirirken küpü ($k^3$) alınır!",
    "vocabulary": [
      {
        "en": "unit conversion",
        "tr": "birim dönüştürme"
      },
      {
        "en": "proportion",
        "tr": "orantı"
      },
      {
        "en": "density",
        "tr": "yoğunluk (Kütle / Hacim)"
      },
      {
        "en": "scale factor",
        "tr": "ölçek faktörü"
      }
    ],
    "tip": "1 metre = 100 cm ise, $1\\text{ m}^2 = 100^2 = 10,000\\text{ cm}^2$'dir! Alan ve hacimde birim çarpanının üssünü almayı unutmayın.",
    "desmosTip": "Birim dönüştürme kesirlerini Desmos'ta tek bir satırda çarparak işlem hatası yapmadan sonucu bulun."
  },
  "Percentages & Percent Change": {
    "title": "Yüzdeler & Ardışık Yüzde Değişimleri",
    "description": "Ardışık yüzde değişimleri, indirim/vergi öncesi orijinal fiyatı bulma (ters yüzde hesabı) ve yüzde artış/azalış formülü.",
    "corePrinciple": "Yüzde Değişim $= (\\text{Yeni} - \\text{Eski}) / \\text{Eski} \\times 100$. Bir fiyata %20 zam yapılıp ardından %20 indirim yapılırsa sonuç $1.20 \\times 0.80 = 0.96$ olur (%4 net kayıp, sıfır değil!).",
    "vocabulary": [
      {
        "en": "percent increase / decrease",
        "tr": "yüzde artış / azalış"
      },
      {
        "en": "original price",
        "tr": "orijinal / başlangıç fiyatı"
      },
      {
        "en": "discount",
        "tr": "indirim"
      },
      {
        "en": "sales tax",
        "tr": "satış vergisi (KDV)"
      }
    ],
    "tip": "Vergili fiyattan vergisiz fiyata dönerken: $P_{\\text{vergili}} = P \\times (1 + r)$ formülünü kurup bölme yapın, doğrudan %r çıkarmayın!",
    "desmosTip": "Ters yüzde sorularında 'x * 1.08 = 54' yazın; Desmos $x$'i doğrudan çözer."
  },
  "Two-Way Frequency Tables & Probability": {
    "title": "İki Yönlü Tablolar & Koşullu Olasılık",
    "description": "Kontenjans tablolarından marjinal, birleşik ve koşullu olasılık hesaplama.",
    "corePrinciple": "Koşullu olasılıkta ('Given that the student is a senior...'): Payda genel toplam değil, SADECE şart koşulan grubun (örneğin son sınıf öğrencilerinin) toplamıdır!",
    "vocabulary": [
      {
        "en": "two-way frequency table",
        "tr": "iki yönlü frekans tablosu"
      },
      {
        "en": "conditional probability",
        "tr": "koşullu olasılık ('Given that...')"
      },
      {
        "en": "marginal total",
        "tr": "satır / sütun toplamı"
      },
      {
        "en": "joint probability",
        "tr": "ortak / kesişim olasılığı"
      }
    ],
    "tip": "'Given that' ifadesini gördüğünüzde tablonun diğer tüm satır ve sütunlarını görmezden gelin; payda sadece o satırın/sütunun toplamıdır.",
    "desmosTip": "Pay ve paydayı doğrudan '24 / 85' olarak yazın, Desmos hem kesir hem ondalık değerini versin."
  },
  "Distributions: Center, Spread & Outliers": {
    "title": "Veri Dağılımları: Ortalama, Medyan & Aykırı Değerler",
    "description": "Aritmetik ortalama, medyan (ortanca), tepe değer (mod), standart sapma, açıklık (range) ve çarpıklık (skewness).",
    "corePrinciple": "Aykırı uç değerler (outliers) ORTALAMAYI kendi yönüne doğru çeker. MEDYAN ise aykırı değerlere karşı dirençlidir ve konumunu korur.",
    "vocabulary": [
      {
        "en": "mean (average)",
        "tr": "aritmetik ortalama"
      },
      {
        "en": "median",
        "tr": "ortanca değer (sıralandığında ortadaki)"
      },
      {
        "en": "mode",
        "tr": "tepe değer (en sık tekrar eden)"
      },
      {
        "en": "standard deviation",
        "tr": "standart sapma (yayılım ölçüsü)"
      },
      {
        "en": "outlier",
        "tr": "aykırı uç değer"
      }
    ],
    "tip": "Sağa çarpık (right-skewed / tail to the right) dağılımlarda: $\\text{Mean} > \\text{Median}$'dır. Sola çarpık dağılımlarda: $\\text{Mean} < \\text{Median}$'dır.",
    "desmosTip": "Veri setini 'L = [12, 15, 18, ...]' olarak girin; ardından 'mean(L)', 'median(L)', 'stdev(L)' fonksiyonlarıyla tüm istatistikleri anında alın."
  },
  "Scatterplots, Line of Best Fit & Margin of Error": {
    "title": "Dağılım Grafikleri, Regresyon Doğrusu & Hata Payı",
    "description": "En uygun doğru (line of best fit) eğim ve kesişimini yorumlama, artık değer (residual = gerçek - tahmin) ve örneklem büyüklüğü ilişkisi.",
    "corePrinciple": "Hata payı (margin of error) örneklem büyüklüğünün kareköküyle ters orantılıdır ($\\text{MOE} \\propto 1/\\sqrt{n}$). Rastgele örneklem sonuçların genellenmesini sağlar; rastgele atama ise neden-sonuç kanıtlar.",
    "vocabulary": [
      {
        "en": "scatterplot",
        "tr": "dağılım / saçılım grafiği"
      },
      {
        "en": "line of best fit",
        "tr": "en uygun doğru / regresyon doğrusu"
      },
      {
        "en": "residual",
        "tr": "artık değer ($y_{\\text{gerçek}} - y_{\\text{tahmin}}$)"
      },
      {
        "en": "margin of error",
        "tr": "hata payı"
      },
      {
        "en": "sample size",
        "tr": "örneklem büyüklüğü ($n$)"
      }
    ],
    "tip": "Örneklem büyüklüğü ($n$) arttıkça hata payı KÜÇÜLÜR. Güven aralığı daralır.",
    "desmosTip": "Tabloya noktaları girip 'y1 ~ m*x1 + b' yazarak en uygun doğrunun kesin denklemini 5 saniyede çıkarın."
  },
  "Area & Volume Problems": {
    "title": "Geometri: Alan, Hacim & Ölçekleme Problemleri",
    "description": "Bileşik 2D şekiller, 3D prizma, silindir, koni, küre hacimleri ve benzerlik katsayısının çevre, alan ve hacme etkisi.",
    "corePrinciple": "Benzer şekillerde uzunluk oranı $k$ ise; Çevreler oranı $k$, Alanlar oranı $k^2$, Hacimler oranı $k^3$'tür!",
    "vocabulary": [
      {
        "en": "composite shape",
        "tr": "bileşik şekil"
      },
      {
        "en": "surface area",
        "tr": "yüzey alanı"
      },
      {
        "en": "volume",
        "tr": "hacim"
      },
      {
        "en": "scale factor",
        "tr": "benzerlik / ölçek oranı ($k$)"
      }
    ],
    "tip": "Bir küpün tüm kenarları 2 katına çıkarılırsa yüzey alanı $2^2 = 4$ katına, hacmi ise $2^3 = 8$ katına çıkar!",
    "desmosTip": "Ekranın üstündeki Reference Sheet butonuna basarak silindir, koni ve küre hacim formüllerini teyit edebilirsiniz."
  },
  "Lines, Angles & Triangle Theorems": {
    "title": "Doğruda Açılar, Üçgen Teoremleri & Benzerlik",
    "description": "Paralel doğruları kesen doğrunun oluşturduğu açılar (iç ters, yöndeş), üçgenin iç/dış açıları ve benzer üçgen oranları.",
    "corePrinciple": "Bir üçgende bir dış açı, kendisine komşu olmayan iki iç açının toplamına eşittir. Benzer üçgenlerin karşılıklı açıları eşit, kenar uzunlukları ise orantılıdır.",
    "vocabulary": [
      {
        "en": "alternate interior angles",
        "tr": "iç ters açılar (birbirine eşit)"
      },
      {
        "en": "corresponding angles",
        "tr": "yöndeş açılar (birbirine eşit)"
      },
      {
        "en": "exterior angle theorem",
        "tr": "dış açı teoremi"
      },
      {
        "en": "similar triangles",
        "tr": "benzer üçgenler"
      }
    ],
    "tip": "İki üçgenin ikişer açısı eşitse (A-A benzerliği), üçüncü açıları da eşittir ve bu üçgenler mutlaka benzerdir.",
    "desmosTip": "Kenar oranlarını Desmos'ta $a / b = c / x$ şeklinde kurarak bilinmeyen kenarı anında hesaplayın."
  },
  "Right Triangles & SOH CAH TOA": {
    "title": "Dik Üçgenler, Özel Üçgenler & Trigonometri",
    "description": "Pisagor bağıntısı ($a^2 + b^2 = c^2$), $30^{\\circ}-60^{\\circ}-90^{\\circ}$ ve $45^{\\circ}-45^{\\circ}-90^{\\circ}$ üçgenleri, $\\sin, \\cos, \\tan$ ve tümler açı kimliği.",
    "corePrinciple": "Tümler açı kimliği: $\\sin(x^{\\circ}) = \\cos(90^{\\circ} - x^{\\circ})$. Eğer $\\sin(A) = \\cos(B)$ ise $A + B = 90^{\\circ}$'dir!",
    "vocabulary": [
      {
        "en": "hypotenuse",
        "tr": "hipotenüs (en uzun kenar, $90^\\circ$'nin karşısı)"
      },
      {
        "en": "opposite / adjacent leg",
        "tr": "karşı dik kenar / komşu dik kenar"
      },
      {
        "en": "complementary angles",
        "tr": "tümler açılar (toplamı $90^\\circ$ olan açılar)"
      },
      {
        "en": "special right triangle",
        "tr": "özel dik üçgen"
      }
    ],
    "tip": "SAT'de $\\sin(4x - 10) = \\cos(3x + 2)$ gibi denklemler çok sık sorulur. Parantez içlerinin toplamını doğrudan $90$'a eşitleyin!",
    "desmosTip": "Desmos'ta trigonometri kullanırken sağ üstteki İngiliz anahtarı (wrench) ikonundan açının 'Degrees' modunda olduğundan emin olun!"
  },
  "Circle Equations in Coordinate Plane": {
    "title": "Analitik Düzlemde Çember Denklemi",
    "description": "$(x - h)^2 + (y - k)^2 = r^2$ standart çember denklemi, tam kareye tamamlama ve teğet doğruları.",
    "corePrinciple": "Merkezi $(h, k)$ ve yarıçapı $r$ olan çember. Genel form verildiğinde ($x^2 + y^2 + Ax + By = C$), $x$ ve $y$ için ayrı ayrı tam kareye tamamlanır. Teğet doğru yarıçapa diktir ($m_{\\text{teğet}} \\cdot m_{\\text{yarıçap}} = -1$).",
    "vocabulary": [
      {
        "en": "center of circle",
        "tr": "çemberin merkezi $(h, k)$"
      },
      {
        "en": "radius",
        "tr": "yarıçap ($r$)"
      },
      {
        "en": "completing the square",
        "tr": "tam kareye tamamlama"
      },
      {
        "en": "tangent line",
        "tr": "teğet doğru ($90^\\circ$ dik kesen)"
      }
    ],
    "tip": "Denklem $(x - 3)^2 + (y + 5)^2 = 49$ ise yarıçap 49 değil, $\\sqrt{49} = 7$'dir! Merkez ise $(3, -5)$'tir.",
    "desmosTip": "Çember denklemini genel formuyla ($x^2 + 6x + y^2 - 8y = 11$) hiç tam kareye tamamlamadan doğrudan Desmos'a yazın; çember çizilir ve merkez ile yarıçapı hemen okursunuz."
  },
  "Circle Theorems: Arcs, Sectors & Radians": {
    "title": "Çember Teoremleri: Yay Uzunluğu, Daire Dilimi & Radyan",
    "description": "Yay uzunluğu $s = r\\theta$, daire dilimi alanı $A = \\frac{1}{2}r^2\\theta$, çevre açı ve merkez açı ilişkisi.",
    "corePrinciple": "Çevre açı gördüğü yayın yarısına eşittir; merkez açı ise gördüğü yaya eşittir. Dereceden radyana geçişte açı $\\frac{\\pi}{180}$ ile çarpılır ($180^{\\circ} = \\pi\\text{ rad}$).",
    "vocabulary": [
      {
        "en": "arc length",
        "tr": "yay uzunluğu ($s$)"
      },
      {
        "en": "sector area",
        "tr": "daire diliminin alanı"
      },
      {
        "en": "central angle",
        "tr": "merkez açı"
      },
      {
        "en": "inscribed angle",
        "tr": "çevre açı (köşesi çember üzerinde olan)"
      },
      {
        "en": "radian",
        "tr": "radyan"
      }
    ],
    "tip": "Çapı gören çevre açı daima $90^{\\circ}$'dir! Dilim alanı formülünde açının derece mi radyan mı olduğuna dikkat edin.",
    "desmosTip": "Derece ise: $(A/360) * \\pi * r^2$. Radyan ise: $0.5 * r^2 * \\theta$. Desmos'ta formülü doğrudan hesaplayın."
  }
};

window.SAT_TURKISH_FORMULAS = {
  "cb-circle-area": {
    "title": "Dairenin Alanı",
    "explanation": "Yarıçapı $r$ olan bir dairenin kapladığı 2 boyutlu yüzey alanını hesaplar.",
    "traps": "College Board sorularda genellikle yarıçap yerine ÇAPI (diameter) verir. Çap 12 ise yarıçap $r = 6$'dır; 12 ile işlem yapmayın!",
    "vocabulary": [
      {
        "en": "area",
        "tr": "alan"
      },
      {
        "en": "radius",
        "tr": "yarıçap ($r$)"
      },
      {
        "en": "diameter",
        "tr": "çap ($d = 2r$)"
      }
    ],
    "desmosTip": "Doğrudan 'pi * r^2' yazın. 'r=6' yazarak Desmos'un sonucu anında vermesini sağlayın."
  },
  "cb-circle-circ": {
    "title": "Çemberin Çevresi",
    "explanation": "Çemberin etrafındaki toplam çevresel uzunluğu hesaplar.",
    "traps": "Çevre formülü ($2\\pi r$) ile Alan formülünü ($\\pi r^2$) karıştırmayın. Yarım daire çevresinde çap düz kenarını ($+ 2r$) eklemeyi unutmayın!",
    "vocabulary": [
      {
        "en": "circumference",
        "tr": "çemberin çevresi"
      },
      {
        "en": "perimeter",
        "tr": "çevre uzunluğu"
      }
    ],
    "desmosTip": "Desmos 'pi' sembolünü otomatik tanır. Yay uzunluğu için (derece/360)*2*pi*r yazabilirsiniz."
  },
  "cb-rect-area": {
    "title": "Dikdörtgenin Alanı",
    "explanation": "Birbirine dik olan boy ($\\ell$) ve en ($w$) boyutlarının çarpımıdır.",
    "traps": "Boyut ölçekleme tuzakları: Boy %20 artar, en %10 azalırsa alan $1.20 \\times 0.90 = 1.08$ katına çıkar (+%8), $20 - 10 = +%10$ DEĞİLDİR!",
    "vocabulary": [
      {
        "en": "rectangle",
        "tr": "dikdörtgen"
      },
      {
        "en": "length / width",
        "tr": "boy / en"
      },
      {
        "en": "dimensions",
        "tr": "boyutlar"
      }
    ],
    "desmosTip": "Sabit çevre ile maksimum alanı bulmak için y = x(P/2 - x) parabolünün tepe noktasını inceleyin."
  },
  "cb-tri-area": {
    "title": "Üçgenin Alanı",
    "explanation": "Herhangi bir taban ile o tabana ait dik yüksekliğin çarpımının yarısıdır.",
    "traps": "Geniş açılı üçgenlerde yükseklik üçgenin dışına düşebilir. Eğik kenarı yükseklik olarak almayın, daima dik ($90^\\circ$) yüksekliği bulun!",
    "vocabulary": [
      {
        "en": "base",
        "tr": "taban"
      },
      {
        "en": "perpendicular height",
        "tr": "dik yükseklik"
      },
      {
        "en": "altitude",
        "tr": "yükseklik"
      }
    ],
    "desmosTip": "Dik üçgenlerde alan iki dik kenarın çarpımının yarısıdır: 0.5 * a * b."
  },
  "cb-pythagorean": {
    "title": "Pisagor Bağıntısı",
    "explanation": "Bir dik üçgende dik kenarların kareleri toplamı hipotenüsün karesine eşittir.",
    "traps": "TUZAK: Hipotenüs daima $90^{\\circ}$ açının tam karşısındaki en uzun kenardır. $c^2$'yi bulduktan sonra karekök almayı unutmayın!",
    "vocabulary": [
      {
        "en": "hypotenuse",
        "tr": "hipotenüs"
      },
      {
        "en": "legs",
        "tr": "dik kenarlar"
      },
      {
        "en": "right triangle",
        "tr": "dik üçgen"
      }
    ],
    "desmosTip": "Hipotenüs için doğrudan 'sqrt(a^2 + b^2)' yazabilirsiniz. Pisagor üçlülerini (3-4-5, 5-12-13, 7-24-25, 8-15-17) ezberleyin."
  },
  "cb-special-45": {
    "title": "Özel Dik Üçgen: 45°-45°-90° (İkizkenar Dik Üçgen)",
    "explanation": "İki dik kenarı eşit olan üçgende hipotenüs dik kenarın $\\sqrt{2}$ katıdır.",
    "traps": "Hipotenüs verildiğinde dik kenarı bulmak için $\\sqrt{2}$ ile çarpmayın, $\\sqrt{2}$'ye BÖLÜN!",
    "vocabulary": [
      {
        "en": "isosceles right triangle",
        "tr": "ikizkenar dik üçgen"
      },
      {
        "en": "congruent legs",
        "tr": "eş dik kenarlar"
      }
    ],
    "desmosTip": "Kenar s ise hipotenüs s*sqrt(2). Hipotenüs h ise dik kenar h/sqrt(2)."
  },
  "cb-special-30-60": {
    "title": "Özel Dik Üçgen: 30°-60°-90°",
    "explanation": "$30^\\circ$'nin karşısı $x$, $60^\\circ$'nin karşısı $x\\sqrt{3}$, $90^\\circ$'nin karşısı $2x$'tir.",
    "traps": "Kenarları yanlış açılarla eşleştirmeyin: En kısa kenar ($x$) daima en küçük açı olan $30^{\\circ}$'nin karşısındadır!",
    "vocabulary": [
      {
        "en": "shorter leg",
        "tr": "kısa dik kenar ($30^\\circ$ karşısı)"
      },
      {
        "en": "longer leg",
        "tr": "uzun dik kenar ($60^\\circ$ karşısı)"
      }
    ],
    "desmosTip": "Hipotenüs verildiğinde hemen 2'ye bölerek 30'un karşısını bulun, sonra sqrt(3) ile çarpın."
  },
  "cb-vol-box": {
    "title": "Dikdörtgenler Prizmasının Hacmi",
    "explanation": "Taban alanı ile yüksekliğin çarpımıdır: $V = \\ell \\cdot w \\cdot h$.",
    "traps": "Küp sorularında kenar $s$ ise $V = s^3$. Bir kenar 3 katına çıkarsa hacim $3^3 = 27$ katına çıkar!",
    "vocabulary": [
      {
        "en": "rectangular prism",
        "tr": "dikdörtgenler prizması"
      },
      {
        "en": "cube",
        "tr": "küp"
      }
    ],
    "desmosTip": "Tüm kenar ölçülerini aynı birime çevirdikten sonra çarpın."
  },
  "cb-vol-cylinder": {
    "title": "Dik Dairesel Silindirin Hacmi",
    "explanation": "Dairesel taban alanı ile yüksekliğin çarpımıdır: $V = \\pi r^2 h$.",
    "traps": "College Board genellikle taban ÇAPINI verir. $r = d/2$ yapmadan doğrudan çapın karesini almayın!",
    "vocabulary": [
      {
        "en": "cylinder",
        "tr": "silindir"
      },
      {
        "en": "base radius",
        "tr": "taban yarıçapı"
      },
      {
        "en": "height",
        "tr": "yükseklik"
      }
    ],
    "desmosTip": "Desmos'a 'V = pi * r^2 * h' yazarak bilinmeyen değişkeni diğerlerinin yerine koyarak çözebilirsiniz."
  },
  "cb-vol-sphere": {
    "title": "Kürenin Hacmi",
    "explanation": "Yarıçapı $r$ olan kürenin hacmi $V = \\frac{4}{3}\\pi r^3$ formülü ile bulunur.",
    "traps": "Yarıçapın karesini ($r^2$) değil, KÜBÜNÜ ($r^3$) almayı unutmayın. Yarım küre (hemisphere) sorulursa 2'ye bölmeyi unutmayın!",
    "vocabulary": [
      {
        "en": "sphere",
        "tr": "küre"
      },
      {
        "en": "hemisphere",
        "tr": "yarım küre (hacmin yarısı)"
      }
    ],
    "desmosTip": "Desmos'ta '(4/3) * pi * r^3' yazın."
  },
  "cb-vol-cone": {
    "title": "Dik Dairesel Koninin Hacmi",
    "explanation": "Aynı taban ve yüksekliğe sahip silindirin hacminin üçte biridir: $V = \\frac{1}{3}\\pi r^2 h$.",
    "traps": "Yanal ayrıt (slant height) ile dik yükseklik ($h$) karıştırılmamalıdır. Pisagor ile dik yüksekliği bulun: $h = \\sqrt{L^2 - r^2}$.",
    "vocabulary": [
      {
        "en": "cone",
        "tr": "koni"
      },
      {
        "en": "slant height",
        "tr": "yanal ayrıt / ana doğru"
      }
    ],
    "desmosTip": "1/3 katsayısını unutmayın; silindirin hacminin tam üçte biridir."
  },
  "cb-vol-pyramid": {
    "title": "Piramidin Hacmi",
    "explanation": "Taban alanı ($B$) ile dik yüksekliğin ($h$) çarpımının üçte biridir: $V = \\frac{1}{3} B h$.",
    "traps": "Taban kare ise $B = s^2$, dikdörtgen ise $B = \\ell w$. 1/3 çarpanını unutmayın!",
    "vocabulary": [
      {
        "en": "pyramid",
        "tr": "piramit"
      },
      {
        "en": "base area",
        "tr": "taban alanı ($B$)"
      }
    ],
    "desmosTip": "Taban alanını hesaplayıp 'V = (1/3) * B * h' olarak girin."
  },
  "cb-angle-rules": {
    "title": "Açı Bağıntıları: Üçgen & Çember",
    "explanation": "Üçgenin iç açıları toplamı $180^{\\circ}$, tam çember yay açısı $360^{\\circ} = 2\\pi\\text{ rad}$'dır.",
    "traps": "Derece ile radyanı birbirine eklemeyin; işlem yapmadan önce aynı birime dönüştürün.",
    "vocabulary": [
      {
        "en": "interior angles",
        "tr": "iç açılar"
      },
      {
        "en": "radians",
        "tr": "radyan"
      }
    ],
    "desmosTip": "Desmos derece/radyan dönüşümünü otomatik yapmaz, modunuzu kontrol edin."
  },
  "alg-slope": {
    "title": "Eğim Formülü (Slope)",
    "explanation": "İki noktadan geçen doğrunun dikliğini belirler: $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}$.",
    "traps": "İşaret hataları: $y_2 - y_1$ yaparken paydada sırayı bozup $x_1 - x_2$ yazmayın. Payda sıfır olursa eğim tanımsızdır (düşey doğru: $x = c$).",
    "vocabulary": [
      {
        "en": "slope",
        "tr": "eğim ($m$)"
      },
      {
        "en": "rise over run",
        "tr": "dikey değişim bölü yatay değişim"
      },
      {
        "en": "undefined slope",
        "tr": "tanımsız eğim (dikey doğru)"
      }
    ],
    "desmosTip": "Tabloya $(x_1, y_1)$ ve $(x_2, y_2)$ girip 'y1 ~ m*x1 + b' yazın."
  },
  "alg-slope-intercept": {
    "title": "Eğim-Kesişim Formu ($y = mx + b$)",
    "explanation": "$m$ eğim, $b$ ise y-eksenini kestiği noktanın ordinatıdır $(0, b)$.",
    "traps": "x-eksenini kestiği noktayı bulmak için $y=0$ yazıp $x = -b/m$ hesaplanmalıdır; doğrudan $b$'ye bakmayın!",
    "vocabulary": [
      {
        "en": "slope-intercept form",
        "tr": "eğim-kesişim denklemi"
      },
      {
        "en": "y-intercept",
        "tr": "y-kesişimi"
      }
    ],
    "desmosTip": "m ve b için slider ekleyerek grafiğin nasıl hareket ettiğini görebilirsiniz."
  },
  "alg-point-slope": {
    "title": "Nokta-Eğim Formu ($y - y_1 = m(x - x_1)$)",
    "explanation": "Eğimi $m$ olan ve $(x_1, y_1)$ noktasından geçen doğrunun denklemidir.",
    "traps": "İşaretlere dikkat edin: $(3, -4)$ noktasında denklem $y - (-4) = y + 4 = m(x - 3)$ olur.",
    "vocabulary": [
      {
        "en": "point-slope form",
        "tr": "noktası ve eğimi bilinen doğru denklemi"
      }
    ],
    "desmosTip": "Doğrudan bu formda yazabilirsiniz, Desmos otomatik olarak doğrusunu çizer."
  },
  "alg-standard-form": {
    "title": "Standart Doğrusal Form ($Ax + By = C$)",
    "explanation": "Eğim $m = -A/B$, y-kesişimi $C/B$, x-kesişimi $C/A$'dır.",
    "traps": "Eğimi bulurken $A/B$ değil, $-A/B$ olduğunu unutmayın!",
    "vocabulary": [
      {
        "en": "standard form",
        "tr": "standart form"
      }
    ],
    "desmosTip": "y'yi yalnız bırakmadan doğrudan $Ax + By = C$ olarak yazabilirsiniz."
  },
  "alg-parallel-perp": {
    "title": "Paralel ve Dik Doğru Eğimleri",
    "explanation": "Paralel doğruların eğimleri eşittir ($m_1 = m_2$). Dik doğruların eğimleri çarpımı $-1$'dir ($m_2 = -1/m_1$).",
    "traps": "Dik doğruda eğim sadece ters çevrilmez, aynı zamanda İŞARET DEĞİŞTİRİR (negative reciprocal). Eğim $2/3$ ise dik eğim $-3/2$'dir.",
    "vocabulary": [
      {
        "en": "parallel",
        "tr": "paralel (eğimler eşit)"
      },
      {
        "en": "perpendicular",
        "tr": "birbirine dik ($90^\\circ$)"
      },
      {
        "en": "negative reciprocal",
        "tr": "işareti değişmiş çarpmaya göre ters"
      }
    ],
    "desmosTip": "İki doğrunun dik olduğunu doğrulamak için eğimlerini çarpıp -1 olduğunu görün."
  },
  "alg-system-solutions": {
    "title": "Doğrusal Sistemlerde Çözüm Koşulları",
    "explanation": "Katsayı oranları: $a_1/a_2 \\neq b_1/b_2$ (1 çözüm); $a_1/a_2 = b_1/b_2 \\neq c_1/c_2$ (çözüm yok); $a_1/a_2 = b_1/b_2 = c_1/c_2$ (sonsuz çözüm).",
    "traps": "Çözüm yok ile sonsuz çözümü karıştırmayın: Sabit terim oranı ($c_1/c_2$) eşitse sonsuz, eşit değilse sıfır çözümdür.",
    "vocabulary": [
      {
        "en": "unique solution",
        "tr": "tek çözüm (kesişen doğrular)"
      },
      {
        "en": "no solution",
        "tr": "çözümsüz (paralel doğrular)"
      },
      {
        "en": "infinitely many solutions",
        "tr": "sonsuz çözüm (çakışık doğrular)"
      }
    ],
    "desmosTip": "İki denklemi yazıp bilinmeyen katsayıya slider ekleyin. Doğrular üst üste geldiğinde sonsuz çözümdür."
  },
  "adv-quadratic-formula": {
    "title": "İkinci Dereceden Denklem Kök Formülü",
    "explanation": "$ax^2 + bx + c = 0$ denkleminin kökleri: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.",
    "traps": "Paydada $2$ değil $2a$ vardır! Formülün başındaki $-b$ ifadesinde işaret hatası yapmayın.",
    "vocabulary": [
      {
        "en": "quadratic formula",
        "tr": "ikinci derece kök formülü"
      },
      {
        "en": "real roots",
        "tr": "gerçel kökler"
      }
    ],
    "desmosTip": "Parabolü yazıp x-eksenini kestiği noktalara tıklayarak kökleri doğrudan okuyun."
  },
  "adv-discriminant": {
    "title": "Diskriminant ($\\Delta = b^2 - 4ac$)",
    "explanation": "$\\Delta > 0$ ise 2 farklı reel kök; $\\Delta = 0$ ise 1 çift katlı reel kök (teğet); $\\Delta < 0$ ise reel kök yoktur.",
    "traps": "'Tek bir reel kök' veya 'x-eksenine teğet' dendiğinde $\\Delta = 0$ eşitliğini kurun.",
    "vocabulary": [
      {
        "en": "discriminant",
        "tr": "diskriminant"
      },
      {
        "en": "tangent to x-axis",
        "tr": "x-eksenine teğet (tek kök)"
      }
    ],
    "desmosTip": "Parabol grafiği x-eksenini hiç kesmiyorsa diskriminant negatiftir."
  },
  "adv-vertex-form": {
    "title": "Tepe Noktası Formu ($y = a(x - h)^2 + k$)",
    "explanation": "Tepe noktası $(h, k)$ koordinatlarıdır. $h = -b/(2a)$, $k = f(h)$'dir.",
    "traps": "İşaret tuzağı: $y = 2(x + 3)^2 - 5$ parabolünün tepe noktası $(3, -5)$ değil, $(-3, -5)$'tir!",
    "vocabulary": [
      {
        "en": "vertex form",
        "tr": "tepe noktası formu"
      },
      {
        "en": "axis of symmetry",
        "tr": "simetri ekseni"
      }
    ],
    "desmosTip": "Parabolün tepe noktasına bir kez tıklayın, koordinatlar ekranda kalıcı görünür."
  },
  "adv-roots-properties": {
    "title": "Vieta Teoremi (Kökler Toplamı & Çarpımı)",
    "explanation": "$ax^2 + bx + c = 0$ için kökler toplamı $x_1 + x_2 = -b/a$, kökler çarpımı $x_1 \\cdot x_2 = c/a$'dır.",
    "traps": "Kökleri tek tek bulmaya çalışarak vakit kaybetmeyin! Doğrudan $-b/a$ oranını yazın.",
    "vocabulary": [
      {
        "en": "sum of roots",
        "tr": "kökler toplamı ($-b/a$)"
      },
      {
        "en": "product of roots",
        "tr": "kökler çarpımı ($c/a$)"
      }
    ],
    "desmosTip": "Köklerin toplamı simetri ekseninin iki katıdır: 2h = -b/a."
  },
  "adv-exp-growth-decay": {
    "title": "Üstel Büyüme ve Azalma Modelleri",
    "explanation": "$f(t) = a \\cdot b^t$. Büyümede $b = 1 + r$, azalışta $b = 1 - r$'dir.",
    "traps": "%7 artışta $b = 1.07$'dir (1.70 DEĞİL!). %7 azalışta $b = 1 - 0.07 = 0.93$'tür.",
    "vocabulary": [
      {
        "en": "exponential growth/decay",
        "tr": "üstel artış / azalış"
      },
      {
        "en": "initial value",
        "tr": "başlangıç değeri"
      }
    ],
    "desmosTip": "Fonksiyonu yazıp istenen zaman değerini fonksiyona parametre verin: f(5)."
  },
  "adv-circle-equation": {
    "title": "Analitik Düzlemde Çember Denklemi",
    "explanation": "$(x - h)^2 + (y - k)^2 = r^2$. Merkez $(h, k)$, yarıçap $r$'dir.",
    "traps": "Eşitliğin sağ tarafı $r^2$'dir. Sağda 25 varsa yarıçap 5'tir!",
    "vocabulary": [
      {
        "en": "center",
        "tr": "merkez $(h, k)$"
      },
      {
        "en": "radius",
        "tr": "yarıçap ($r$)"
      }
    ],
    "desmosTip": "Tam kareye tamamlamadan genel formu ($x^2 + y^2 - 6x + 8y = 0$) doğrudan yazın."
  },
  "adv-exponent-rules": {
    "title": "Üslü ve Köklü İfade Kuralları",
    "explanation": "$x^{a/b} = \\sqrt[b]{x^a}$, $x^{-n} = 1/x^n$, $x^a \\cdot x^b = x^{a+b}$, $x^a / x^b = x^{a-b}$.",
    "traps": "Kesirli üste pay üs, payda ise kök derecesidir: $x^{2/3} = \\sqrt[3]{x^2}$.",
    "vocabulary": [
      {
        "en": "fractional exponent",
        "tr": "kesirli üs"
      },
      {
        "en": "radical",
        "tr": "köklü ifade"
      }
    ],
    "desmosTip": "x yerine 2 veya 3 gibi bir sayı koyarak eşitliği Desmos'ta test edin."
  },
  "data-compound-interest": {
    "title": "Bileşik Faiz Formülü",
    "explanation": "$A = P(1 + r/n)^{nt}$. $P$ anapara, $r$ yıllık faiz oranı, $n$ yıldaki dönem sayısı, $t$ yıl sayısıdır.",
    "traps": "Aylık bileşik faizde $n = 12$, üç aylıkta $n = 4$, günlükte $n = 365$'tir. Faiz oranını yüzde olarak değil ondalık ($%5 \\implies 0.05$) yazın.",
    "vocabulary": [
      {
        "en": "principal",
        "tr": "anapara ($P$)"
      },
      {
        "en": "compounded monthly/quarterly",
        "tr": "aylık / üç aylık bileşik faiz"
      }
    ],
    "desmosTip": "Formülü tek satırda parantezleriyle yazarak anında hesaplatın."
  },
  "data-percent-change": {
    "title": "Yüzde Değişim Formülü",
    "explanation": "$\\% \\Delta = \\frac{\\text{Yeni} - \\text{Eski}}{\\text{Eski}} \\times 100$.",
    "traps": "Paydada daima BAŞLANGIÇ (eski) değeri olmalıdır, yeni değer değil!",
    "vocabulary": [
      {
        "en": "percent change",
        "tr": "yüzde değişim"
      }
    ],
    "desmosTip": "(Yeni - Eski)/Eski yazıp sonucun ondalığını yüzdeye çevirin."
  },
  "data-mean-median-range": {
    "title": "Merkezi Eğilim ve Dağılım Ölçüleri",
    "explanation": "Ortalama $= \\sum x / n$, Açıklık (Range) $= \\text{Maks} - \\text{Min}$, Çeyrekler Açıklığı $(\\text{IQR}) = Q_3 - Q_1$.",
    "traps": "Aykırı değerler ortalamayı bozar ama medyanı neredeyse hiç etkilemez.",
    "vocabulary": [
      {
        "en": "mean",
        "tr": "ortalama"
      },
      {
        "en": "median",
        "tr": "medyan (ortanca)"
      },
      {
        "en": "range",
        "tr": "açıklık"
      }
    ],
    "desmosTip": "Desmos listesi açıp mean(L) ve median(L) komutlarını kullanın."
  },
  "data-margin-error": {
    "title": "Hata Payı ve Örneklem Boyutu",
    "explanation": "Güven Aralığı $= \\hat{p} \\pm \\text{MOE}$. Hata payı $\\text{MOE} \\propto 1/\\sqrt{n}$ ilişkisiyle örneklem büyüdükçe küçülür.",
    "traps": "Hata payını yarıya indirmek için örneklem boyutunu 2 katına değil, $2^2 = 4$ KATINA çıkarmak gerekir!",
    "vocabulary": [
      {
        "en": "margin of error",
        "tr": "hata payı"
      },
      {
        "en": "sample size",
        "tr": "örneklem büyüklüğü"
      }
    ],
    "desmosTip": "Hata payı sadece rastgele seçilmiş örneklemler için geçerlidir."
  },
  "data-std-dev": {
    "title": "Standart Sapma ve 68-95-99.7 Kuralı",
    "explanation": "Verilerin ortalamadan ne kadar yayıldığını gösterir. Normal dağılımda verilerin %68'i $\\pm 1\\sigma$, %95'i $\\pm 2\\sigma$ içindedir.",
    "traps": "Veriler ortalamaya ne kadar yakın toplanmışsa standart sapma o kadar KÜÇÜKTÜR.",
    "vocabulary": [
      {
        "en": "standard deviation",
        "tr": "standart sapma"
      },
      {
        "en": "spread",
        "tr": "yayılım"
      }
    ],
    "desmosTip": "Desmos'ta stdev(L) fonksiyonu ile hesaplayabilirsiniz."
  },
  "trig-unit-circle": {
    "title": "Radyan - Derece Dönüşümü",
    "explanation": "$\\pi\\text{ radyan} = 180^{\\circ}$. Dereceden radyana: $\\times \\frac{\\pi}{180}$. Radyandan dereceye: $\\times \\frac{180}{\\pi}$.",
    "traps": "Desmos açı modunun Degrees mi Radians mı olduğuna dikkat edin.",
    "vocabulary": [
      {
        "en": "radians",
        "tr": "radyan"
      },
      {
        "en": "degrees",
        "tr": "derece"
      }
    ],
    "desmosTip": "Radyan değerini 180/pi ile çarparak dereceye çevirin."
  },
  "trig-cofunction": {
    "title": "Tümler Açı Trigonometrik Özdeşliği",
    "explanation": "$\\sin(x^{\\circ}) = \\cos(90^{\\circ} - x^{\\circ})$. Eğer $\\sin(A) = \\cos(B)$ ise $A + B = 90^{\\circ}$'dir.",
    "traps": "Soruda $\\sin(3x) = \\cos(2x + 10)$ verilirse $3x + 2x + 10 = 90$ denklemini kurun!",
    "vocabulary": [
      {
        "en": "complementary angles",
        "tr": "tümler açılar ($90^\\circ$)"
      },
      {
        "en": "cofunction identity",
        "tr": "eşfonksiyon kimliği"
      }
    ],
    "desmosTip": "Doğrudan açılar toplamını 90'a eşitleyip çözün."
  },
  "trig-soh-cah-toa": {
    "title": "SOH CAH TOA (Trigonometrik Oranlar)",
    "explanation": "$\\sin = \\frac{\\text{Karşı}}{\\text{Hipotenüs}}$, $\\cos = \\frac{\\text{Komşu}}{\\text{Hipotenüs}}$, $\\tan = \\frac{\\text{Karşı}}{\\text{Komşu}}$.",
    "traps": "Hangi açının komşusu ve karşısı olduğuna dikkat edin, açı değiştikçe karşı ve komşu yer değiştirir!",
    "vocabulary": [
      {
        "en": "sine",
        "tr": "sinüs (karşı/hipotenüs)"
      },
      {
        "en": "cosine",
        "tr": "kosinüs (komşu/hipotenüs)"
      },
      {
        "en": "tangent",
        "tr": "tanjant (karşı/komşu)"
      }
    ],
    "desmosTip": "Desmos'ta sin(x), cos(x), tan(x) değerlerini doğrudan hesaplayabilirsiniz."
  },
  "trig-arc-length": {
    "title": "Yay Uzunluğu Formülü",
    "explanation": "Radyan cinsinden: $s = r\\theta$. Derece cinsinden: $s = \\frac{\\theta}{360} \\cdot 2\\pi r$.",
    "traps": "Açı radyan ise doğrudan $r \\cdot \\theta$ yapılır, tekrar $\\pi$ veya 360'a bölmeyin!",
    "vocabulary": [
      {
        "en": "arc length",
        "tr": "yay uzunluğu"
      },
      {
        "en": "subtended angle",
        "tr": "yayı gören merkez açı"
      }
    ],
    "desmosTip": "Açının radyan mı derece mi olduğuna göre doğru formülü seçin."
  },
  "trig-sector-area": {
    "title": "Daire Diliminin Alanı Formülü",
    "explanation": "Radyan cinsinden: $A = \\frac{1}{2}r^2\\theta$. Derece cinsinden: $A = \\frac{\\theta}{360} \\cdot \\pi r^2$.",
    "traps": "Yay uzunluğu formülü ($2\\pi r$) ile Dilim alanı formülünü ($\\pi r^2$) karıştırmayın.",
    "vocabulary": [
      {
        "en": "sector area",
        "tr": "daire diliminin alanı"
      }
    ],
    "desmosTip": "0.5 * r^2 * theta veya (derece/360) * pi * r^2."
  }
};
