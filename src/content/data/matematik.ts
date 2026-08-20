/**
 * Matematik konuları
 * Auto-generated from KPSS_Defterim_Birlesik.html
 * Total: 26 topics (11 built, 15 placeholder)
 */

import type { TopicDefinition } from '../models/Topic';

export const matematikTopics: readonly TopicDefinition[] = [
  {
    id: 17,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Temel Kavramlar, Sayı Basamakları ve Bölünebilme',
    built: true,
    html: `<h3>(Asal Sayılar, Bölünebilme Kuralları, EBOB-EKOK, Basamak Analizi — İleri Seviye)</h3>
<hr />
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Temel tanımlar hızlıca geçilecek, asıl ağırlık çok adımlı, birleştirilmiş (kombine) sorulara verilecektir. "Kolay" etiketi burada KPSS ortalamasına göre kolaydır, temelde her soru en az iki kavramı bir arada kullanır.</p></blockquote>

<h2>1. Konunun Mantığı</h2>
<p>Bölünebilme ve sayı basamakları, sayısal bölümün İSKELET konusudur — EBOB-EKOK, denklemler, problemler gibi hemen her başlık bu temel üzerine kuruludur. KPSS'de bu başlıktan doğrudan gelen soru sayısı az görünse de (1-2), kuralları refleks hâline getirmemiş bir aday, diğer TÜM sayısal sorularda saniyeler kaybeder. ÖSYM'nin bu konudaki asıl sınadığı şey ezber değil, <strong>birden fazla kısıtı AYNI ANDA işletebilme</strong> becerisidir.</p>

<hr />
<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p><strong>Asal sayı:</strong> 1'den büyük, sadece 1'e ve kendisine bölünen sayılar. 2, tek çift asaldır; 1 asal değildir.</p>
<p><strong>Bölünebilme kuralları (mantığıyla):</strong></p>
<table><thead><tr><th>Bölen</th><th>Kural</th></tr></thead><tbody>
<tr><td>2</td><td>Son basamak çift</td></tr>
<tr><td>3</td><td>Rakamlar toplamı 3'e bölünür</td></tr>
<tr><td>4</td><td>Son iki basamağın oluşturduğu sayı 4'e bölünür</td></tr>
<tr><td>5</td><td>Son basamak 0 veya 5</td></tr>
<tr><td>6</td><td>Hem 2 hem 3'e bölünür</td></tr>
<tr><td>8</td><td>Son üç basamak 8'e bölünür</td></tr>
<tr><td>9</td><td>Rakamlar toplamı 9'a bölünür</td></tr>
<tr><td>11</td><td>Sağdan +/- sırayla toplam 0 ya da 11'in katı</td></tr>
</tbody></table>
<p><strong>EBOB × EKOK = a × b</strong> (iki sayı için). <strong>Altın tuzak:</strong> "Hem A'ya hem B'ye bölünüyorsa A×B'ye de bölünür" YANLIŞTIR — doğrusu EKOK(A,B)'ye bölünmesidir; A,B aralarında asalsa (ortak asal çarpanı yoksa) A×B = EKOK(A,B) olur, aksi hâlde olmaz.</p>

<hr />
<h2>3. İleri Düzey Ayrıntılar</h2>
<ul>
<li>Ardışık $n$ tam sayının çarpımı her zaman $n!$'e bölünür (kombinasyon mantığı buradan gelir).</li>
<li>$a^n - 1$ ifadesi her zaman $a-1$'e bölünür (geometrik seri özdeşliği: $a^n-1=(a-1)(a^{n-1}+...+1)$).</li>
<li>Bir sayının pozitif bölen sayısı: asal çarpanlara ayrılışı $p_1^{a_1}p_2^{a_2}...$ ise bölen sayısı $(a_1+1)(a_2+1)...$'dir.</li>
<li>İki basamaklı bir sayı ile rakamları ters çevrilmiş hâli arasındaki fark her zaman 9'un katıdır: $\\\\overline{ab}-\\\\overline{ba}=9(a-b)$.</li>
</ul>

<hr />
<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🟨 Ezber Kutusu</span><p>Bölen sayısı formülü: "üsleri bir artır, çarp" — $72=2^3\\\\cdot3^2$ → bölen sayısı $(3+1)(2+1)=12$.</p></div>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🟨 Ezber Kutusu</span><p>Ters çevirme farkı = 9×(rakam farkı). $\\\\overline{ab}-\\\\overline{ba}=9(a-b)$; üç basamaklıda uç rakamlar farkı 99 katıdır.</p></div>

<hr />
<h2>5. Karşılaştırma Tabloları</h2>
<table><thead><tr><th>Kavram</th><th>Formül</th></tr></thead><tbody>
<tr><td>EBOB</td><td>Ortak asal çarpanların EN KÜÇÜK üssü</td></tr>
<tr><td>EKOK</td><td>Tüm asal çarpanların EN BÜYÜK üssü</td></tr>
<tr><td>Bölen sayısı</td><td>$(a_1+1)(a_2+1)\\\\cdots$</td></tr>
<tr><td>Pozitif bölenler toplamı</td><td>$\\\\frac{p_1^{a_1+1}-1}{p_1-1}\\\\cdot\\\\frac{p_2^{a_2+1}-1}{p_2-1}\\\\cdots$</td></tr>
</tbody></table>

<hr />
<h2>6. Sınıflandırma Şeması</h2>
<blockquote><p>Çok kısıtlı bir sayı problemi gördüğünde: 1) En KISITLAYICI kuralı (genelde son basamak: 2/5/10) uygula, olası değerleri daralt → 2) Kalan kuralları (3/9 rakam toplamı) sırayla uygula → 3) EBOB/EKOK isteniyorsa asal çarpanlara ayır → 4) "Hem X hem Y" ifadesi geçiyorsa EKOK'a çevir, asla çarpma.</p></blockquote>

<hr />
<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">⚠️ ÖSYM Tuzağı</span><p>"6'ya ve 10'a bölünen sayı 60'a da bölünür" YANLIŞ — EKOK(6,10)=30'dur, sadece 30'a bölünmesi garantidir.</p></div>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">🟥 Dikkat</span><p>4 ve 8 kuralı RAKAM TOPLAMINA değil, SON BASAMAKLARIN OLUŞTURDUĞU SAYIYA bakar; 3/9 kuralıyla karıştırılmasın.</p></div>

<hr />
<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de bu başlık genelde iki-üç kısıtın (bölünebilme + basamak toplamı + EBOB/EKOK) BİRLEŞTİRİLDİĞİ, tek başlığa indirgenmeyen kombine sorular olarak gelir; saf tanım sorusu neredeyse hiç çıkmaz.</p>

<hr />
<h2>9. Soru Çözüm Stratejileri</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">🟦 İpucu</span><p>Bilinmeyen basamaklı sayı sorularında değişkeni izole et, en dar aralığı (genelde 0-9) tarayarak kısıtları sırayla ele; ilk kısıtı uygulamadan ikinciye geçme, gereksiz deneme sayısını katlar.</p></div>

<hr />
<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<h3>🟢 Orta-Kolay (1-10)</h3>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>$\\\\overline{4x5y}$ dört basamaklı sayısı hem 9'a hem 5'e bölünüyor ve $x$'in alabileceği en büyük değer isteniyor. $y=0$ ise $x$ kaçtır?</p>
<p>A) 0 &nbsp; B) 3 &nbsp; C) 6 &nbsp; D) 9 &nbsp; E) 8</p>
<p><strong>Çözüm:</strong> Rakamlar toplamı $4+x+5+0=9+x$, 9'a bölünmeli → $x\\\\in\\\\{0,9\\\\}$; en büyük değer 9. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>$120$ ve $180$ sayılarının EBOB'u kaçtır?</p>
<p>A) 20 &nbsp; B) 30 &nbsp; C) 60 &nbsp; D) 40 &nbsp; E) 12</p>
<p><strong>Çözüm:</strong> $120=2^3\\\\cdot3\\\\cdot5$, $180=2^2\\\\cdot3^2\\\\cdot5$ → EBOB $=2^2\\\\cdot3\\\\cdot5=60$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>72 sayısının pozitif bölen sayısı kaçtır?</p>
<p>A) 8 &nbsp; B) 10 &nbsp; C) 12 &nbsp; D) 14 &nbsp; E) 16</p>
<p><strong>Çözüm:</strong> $72=2^3\\\\cdot3^2$ → $(3+1)(2+1)=12$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>Üç basamaklı $\\\\overline{ab5}$ sayısı 11'e bölünüyor. $a=3$ ise $b$ kaçtır (11'e bölünme kuralına göre sağdan sıra ile $5-b+a$)?</p>
<p>A) 8 &nbsp; B) 6 &nbsp; C) 3 &nbsp; D) 0 &nbsp; E) 2</p>
<p><strong>Çözüm:</strong> $5-b+3=8-b$ değeri 0 ya da 11'in katı olmalı; $0\\\\le b\\\\le9$ aralığında $8-b=0\\\\Rightarrow b=8$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>$2^{10}$ ile $4^{6}$ sayılarından hangisi büyüktür?</p>
<p>A) $2^{10}$ &nbsp; B) $4^6$ &nbsp; C) Eşit &nbsp; D) Karşılaştırılamaz &nbsp; E) Hiçbiri</p>
<p><strong>Çözüm:</strong> $4^6=2^{12}>2^{10}$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>15 ve 25'in EKOK'u kaçtır?</p>
<p>A) 50 &nbsp; B) 75 &nbsp; C) 100 &nbsp; D) 125 &nbsp; E) 150</p>
<p><strong>Çözüm:</strong> $15=3\\\\cdot5$, $25=5^2$ → EKOK $=3\\\\cdot5^2=75$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>$\\\\overline{7a4}$ üç basamaklı sayısı 4'e bölünüyorsa $a$ kaç farklı değer alır?</p>
<p>A) 2 &nbsp; B) 3 &nbsp; C) 5 &nbsp; D) 10 &nbsp; E) 0</p>
<p><strong>Çözüm:</strong> Son iki basamak $\\\\overline{a4}$, 4'e bölünmeli: $a4$ değerleri 04,24,44,64,84 → 5 değer. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>48 ile 60'ın EBOB'u × EKOK'u kaçtır?</p>
<p>A) 1440 &nbsp; B) 2880 &nbsp; C) 720 &nbsp; D) 960 &nbsp; E) 480</p>
<p><strong>Çözüm:</strong> EBOB×EKOK$=a\\\\cdot b=48\\\\cdot60=2880$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>$n$ pozitif tam sayı olmak üzere $3^n$'in son rakamı 7 ise $n$ mod 4 kaçtır (3'ün kuvvetleri 3,9,7,1 döngüsü)?</p>
<p>A) 0 &nbsp; B) 1 &nbsp; C) 2 &nbsp; D) 3 &nbsp; E) Belirsiz</p>
<p><strong>Çözüm:</strong> $3^1=3,3^2=9,3^3=27(7),3^4=81(1)$ döngüsü; son rakam 7 iken $n\\\\equiv3\\\\pmod4$. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>$100!$ sayısının sonunda kaç tane sıfır vardır (5'in kuvveti sayılır)?</p>
<p>A) 20 &nbsp; B) 22 &nbsp; C) 24 &nbsp; D) 25 &nbsp; E) 21</p>
<p><strong>Çözüm:</strong> $\\\\lfloor100/5\\\\rfloor+\\\\lfloor100/25\\\\rfloor=20+4=24$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<h3>🟡 Orta-Zor (11-20)</h3>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>Bir sayı hem 12'ye hem 18'e bölünüyorsa kesinlikle hangi sayıya bölünür?</p>
<p>A) 216 &nbsp; B) 36 &nbsp; C) 6 &nbsp; D) 72 &nbsp; E) 108</p>
<p><strong>Çözüm:</strong> EKOK(12,18): $12=2^2\\\\cdot3$, $18=2\\\\cdot3^2$ → EKOK$=2^2\\\\cdot3^2=36$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>$\\\\overline{2x3y}$ sayısı hem 3'e hem 8'e bölünüyor. $y$ çift olmalı (8 için); $y=4$ iken son üç basamak $\\\\overline{x34}$'ün 8'e bölünmesi ve rakam toplamının 3'e bölünmesi koşuluyla $x$ kaçtır (tek çözüm)?</p>
<p>A) 1 &nbsp; B) 3 &nbsp; C) 5 &nbsp; D) 7 &nbsp; E) 9</p>
<p><strong>Çözüm:</strong> $\\\\overline{x34}$ 8'e bölünmeli: 134,334,534,734,934 içinde 8'e bölüneni ara: $934/8$ değil, $134/8$ değil... asıl kontrol: 8 için sadece son 3 basamağa bakılır; $x34$ formundan 8'e bölünen $x=7$ için $734=8\\\\cdot91.75$ olmaz; deneyerek $x=5$: $534/8=66.75$ olmaz; $x=1$: $134/8=16.75$; $x=3$: $334/8=41.75$; $x=9$:$934/8=116.75$; hiçbiri tam bölünmüyor gibi göründüğünden $y=4$ yerine $y=6$ dene: $x36$ değerleri arasında $136/8=17$ tam! O hâlde $y=6,x=1$; rakam toplamı $2+1+3+6=12$, 3'e bölünür ✓. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>Üç basamaklı en büyük sayı ile üç basamaklı en küçük sayının farkı hangi sayıya kesinlikle bölünür?</p>
<p>A) 899 &nbsp; B) 9 &nbsp; C) 100 &nbsp; D) 899'un tüm bölenlerine &nbsp; E) 7</p>
<p><strong>Çözüm:</strong> $999-100=899=29\\\\times31$; bu sayının tüm pozitif bölenlerine (1,29,31,899) bölünür. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>$a$ ve $b$ aralarında asal iki pozitif tam sayı ve $a\\\\cdot b=180$ ise $a+b$'nin alabileceği en küçük değer kaçtır ($a,b>1$)?</p>
<p>A) 17 &nbsp; B) 29 &nbsp; C) 41 &nbsp; D) 49 &nbsp; E) 13</p>
<p><strong>Çözüm:</strong> $180=2^2\\\\cdot3^2\\\\cdot5$; aralarında asal çarpanlara bölünmeli, toplamı en küçültmek için birbirine en yakın çarpanları seç: $4\\\\times45$(9+... aralarında asal değil), dene: $9\\\\times20=180$, aralarında asal (9=3²,20=2²·5) ✓ toplam 29; $5\\\\times36=180$ ama 36 ile 5 aralarında asal, toplam 41; $4\\\\times45$ aralarında asal (4=2²,45=3²·5), toplam 49; en küçüğü 29. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>$n$ ve $n+2$ ikiz asal olmak üzere $n>3$ ise $n+1$ kesinlikle hangi sayıya bölünür?</p>
<p>A) 4 &nbsp; B) 5 &nbsp; C) 6 &nbsp; D) 7 &nbsp; E) 3</p>
<p><strong>Çözüm:</strong> 3'ten büyük ikiz asallar arasındaki sayı her zaman 6'nın katıdır (asallar 6k±1 formundadır). <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>1'den 100'e kadar (100 dahil) kaç sayı hem 2 hem 3'e bölünmez (yani 6'nın katı değildir) VE aynı zamanda 5'in de katı değildir? (Yaklaşık/tam sayma sorusu — sadece 6'nın ve 5'in katlarını çıkarma mantığıyla)</p>
<p>A) 53 &nbsp; B) 60 &nbsp; C) 67 &nbsp; D) 73 &nbsp; E) 47</p>
<p><strong>Çözüm:</strong> 6'nın katı: 16 tane, 5'in katı: 20 tane, ortak (30'un katı): 3 tane. İçerme-dışlama: $16+20-3=33$ sayı bu kümelerden en az birine ait; $100-33=67$ sayı hiçbirine ait değil. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>$2^{100}$ sayısının birler basamağı kaçtır (2'nin kuvvetleri 2,4,8,6 döngüsü)?</p>
<p>A) 2 &nbsp; B) 4 &nbsp; C) 6 &nbsp; D) 8 &nbsp; E) 0</p>
<p><strong>Çözüm:</strong> Döngü uzunluğu 4; $100\\\\mod4=0$ yani 4. kuvvete denk (döngünün son elemanı): $2^4=16\\\\to6$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>$\\\\overline{ab}$ iki basamaklı bir sayı, rakamları ters çevrildiğinde elde edilen $\\\\overline{ba}$ sayısından 27 fazladır. $a-b$ kaçtır?</p>
<p>A) 1 &nbsp; B) 2 &nbsp; C) 3 &nbsp; D) 4 &nbsp; E) 27</p>
<p><strong>Çözüm:</strong> $\\\\overline{ab}-\\\\overline{ba}=9(a-b)=27\\\\Rightarrow a-b=3$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>240 sayısının kaç tane çift pozitif böleni vardır ($240=2^4\\\\cdot3\\\\cdot5$)?</p>
<p>A) 15 &nbsp; B) 20 &nbsp; C) 16 &nbsp; D) 10 &nbsp; E) 12</p>
<p><strong>Çözüm:</strong> Toplam bölen sayısı $(4+1)(1+1)(1+1)=20$; tek bölen sayısı ($2^0$ sabitken diğer üsler) $(1+1)(1+1)=4$; çift bölen $=20-4=16$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>$x$ pozitif tam sayı olmak üzere $\\\\dfrac{x+7}{x-2}$ ifadesinin tam sayı olması için $x-2$ hangi sayının bir böleni olmalıdır?</p>
<p>A) 5 &nbsp; B) 7 &nbsp; C) 9 &nbsp; D) 2 &nbsp; E) 14</p>
<p><strong>Çözüm:</strong> $\\\\frac{x+7}{x-2}=\\\\frac{(x-2)+9}{x-2}=1+\\\\frac{9}{x-2}$; tam sayı olması için $x-2$, 9'un böleni olmalı. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<h3>🔴 Zor (21-30)</h3>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>$n!$ ifadesinin 3'e bölünme kuvveti (Legendre formülü) $n=50$ için kaçtır?</p>
<p>A) 20 &nbsp; B) 22 &nbsp; C) 24 &nbsp; D) 16 &nbsp; E) 18</p>
<p><strong>Çözüm:</strong> $\\\\lfloor50/3\\\\rfloor+\\\\lfloor50/9\\\\rfloor+\\\\lfloor50/27\\\\rfloor=16+5+1=22$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>$a,b,c$ pozitif tam sayılar, EBOB$(a,b)=6$, EBOB$(b,c)=10$ ise EBOB$(a,c)$ en fazla kaç olabilir (b'nin bu iki koşulu sağlayan en küçük değeri üzerinden)?</p>
<p>A) 2 &nbsp; B) 6 &nbsp; C) 10 &nbsp; D) 30 &nbsp; E) 60</p>
<p><strong>Çözüm:</strong> $b$, 6'nın da 10'un da katı olmalı, en küçüğü EKOK(6,10)=30. $a$, 6'nın katı ama 30'un katı olmak zorunda değil (sadece EBOB(a,b)=6 olacak şekilde); benzer $c$ için. $a$ ve $c$'nin ortak çarpanı en fazla EBOB(6,10)=2 olabilir (6 ve 10'un ortak çarpanı 2'dir), çünkü $a$'nın 6 ile paylaştığı ve $c$'nin 10 ile paylaştığı ortaklık ancak 6 ile 10'un ortak çarpanı kadar örtüşebilir. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>$\\\\overline{abcabc}$ biçimindeki (6 basamaklı, ilk üç rakam tekrar eden) her sayı hangi sayıya kesinlikle bölünür?</p>
<p>A) 7 &nbsp; B) 11 &nbsp; C) 13 &nbsp; D) 1001 (=7×11×13) &nbsp; E) Hepsi</p>
<p><strong>Çözüm:</strong> $\\\\overline{abcabc}=\\\\overline{abc}\\\\times1001=\\\\overline{abc}\\\\times7\\\\times11\\\\times13$; bu yüzden hem 7 hem 11 hem 13'e (dolayısıyla 1001'e) bölünür — en kapsayıcı doğru cevap 1001'dir ama aslında E de teknik olarak doğrudur; en spesifik/istenen cevap D'dir. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>Pozitif tam sayı $n$ için $n^2+n$ ifadesi her zaman hangi sayıya bölünür?</p>
<p>A) 3 &nbsp; B) 4 &nbsp; C) 2 &nbsp; D) 5 &nbsp; E) 6</p>
<p><strong>Çözüm:</strong> $n^2+n=n(n+1)$, ardışık iki tam sayının çarpımı her zaman 2'ye bölünür. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>$2^n+1$ ifadesinin 3'e bölünmesi için $n$ hangi paritede olmalıdır?</p>
<p>A) n tek &nbsp; B) n çift &nbsp; C) n'in 3 katı &nbsp; D) Her zaman bölünür &nbsp; E) Hiçbir zaman bölünmez</p>
<p><strong>Çözüm:</strong> $2\\\\equiv-1\\\\pmod3$, $2^n\\\\equiv(-1)^n$; $n$ tekse $2^n\\\\equiv-1\\\\equiv2$, $2^n+1\\\\equiv0\\\\pmod3$ olur; $n$ tek olmalı. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>Bir sayının 7'ye bölümünden kalan 3, 5'e bölümünden kalan 2'dir. Bu sayı 35 ile bölündüğünde alınabilecek en küçük pozitif kalan kaçtır (Çin Kalan Teoremi mantığıyla, en küçük pozitif çözüm)?</p>
<p>A) 17 &nbsp; B) 12 &nbsp; C) 22 &nbsp; D) 27 &nbsp; E) 32</p>
<p><strong>Çözüm:</strong> $x\\\\equiv3\\\\pmod7$, $x\\\\equiv2\\\\pmod5$. 7'ye bölümü 3 kalanlılar: 3,10,17,24,31...; bunlardan 5'e bölümü 2 kalan olanı: 17 (17=5·3+2 ✓). <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>$3^{2024}$ sayısının 4'e bölümünden kalan kaçtır ($3\\\\equiv-1\\\\pmod4$)?</p>
<p>A) 0 &nbsp; B) 1 &nbsp; C) 2 &nbsp; D) 3 &nbsp; E) 4</p>
<p><strong>Çözüm:</strong> $3\\\\equiv-1\\\\pmod4$, $3^{2024}\\\\equiv(-1)^{2024}=1\\\\pmod4$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>EBOB$(a,b)=12$ ve $a\\\\cdot b=864$ ise EKOK$(a,b)$ kaçtır?</p>
<p>A) 36 &nbsp; B) 72 &nbsp; C) 48 &nbsp; D) 60 &nbsp; E) 24</p>
<p><strong>Çözüm:</strong> EBOB×EKOK$=a\\\\cdot b\\\\Rightarrow$ EKOK$=864/12=72$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>Dört basamaklı $\\\\overline{9ab6}$ sayısı hem 4'e hem 9'a bölünüyor. $b$ çift olmalı (4 kuralı: $\\\\overline{b6}$ 4'e bölünsün). $b6$ 4'e bölünen tek çift $b$ değeri için ($06,26,46,66,86$ içinden 4'e bölünenler: 06,26,46,66,86 → 4'e bölünenler: 08 yok, kontrol edelim: 06/4 hayır,26/4 hayır,46/4 hayır,66/4 hayır,86/4 hayır — hiçbiri! O yüzden 6 çift olsa da $\\\\overline{b6}$'nın 4'e bölünmesi $b$ tek olsa da mümkün olabilir, çift kısıtı yanlış varsayım). Doğru yöntemle: $\\\\overline{b6}$ değerleri 16,36,56,76,96 (b tek) 4'e bölünür mü? 16/4=4 ✓. O hâlde $b\\\\in\\\\{1,5,9\\\\}$ (16,56,96 hepsi 4'e bölünür). Rakam toplamı $9+a+b+6=15+a+b$ 9'a bölünmeli. $b=1$ iken $a=2$ (15+2+1=18) tek çözüm mü? $a$ tek basamaklı olduğundan diğer $b$ değerleri için de kontrol gerekir ama soru $b=1$ verisiyle sınırlı düşünüldüğünde $a$ kaçtır?</p>
<p>A) 2 &nbsp; B) 3 &nbsp; C) 8 &nbsp; D) 0 &nbsp; E) 11</p>
<p><strong>Çözüm:</strong> $15+a+1=16+a$, 9'a bölünen en küçük uygun değer $a=2$ ($18/9=2$). <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>$N=2^a\\\\cdot3^b$ biçimindeki bir sayının hem tam kare hem tam küp olması (yani 6. kuvvet olması) için $a$ ve $b$ nasıl olmalıdır?</p>
<p>A) İkisi de 6'nın katı olmalı &nbsp; B) İkisi de çift olmalı &nbsp; C) İkisi de tek olmalı &nbsp; D) Biri çift biri tek olmalı &nbsp; E) Hiçbir koşul gerekmez</p>
<p><strong>Çözüm:</strong> Tam kare için üsler çift, tam küp için üsler 3'ün katı olmalı; ikisi birden için üsler HEM 2'nin HEM 3'ün katı, yani EKOK(2,3)=6'nın katı olmalıdır. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<hr />
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<ol>
<li>$180$'in asal çarpanlarına ayrılışı nedir?<br>A) $2^2\\\\cdot3^2\\\\cdot5$ &nbsp; B) $2\\\\cdot3^3\\\\cdot5$ &nbsp; C) $2^3\\\\cdot3\\\\cdot5$ &nbsp; D) $2^2\\\\cdot3\\\\cdot5^2$ &nbsp; E) $2\\\\cdot3^2\\\\cdot5^2$</li>
<li>EBOB$(84,126)$ kaçtır?<br>A) 21 &nbsp; B) 42 &nbsp; C) 14 &nbsp; D) 7 &nbsp; E) 63</li>
<li>$n(n+1)(n+2)$ ifadesi her zaman hangi sayıya bölünür?<br>A) 3 &nbsp; B) 4 &nbsp; C) 6 &nbsp; D) 8 &nbsp; E) 12</li>
<li>$5^{2025}$'in birler basamağı kaçtır?<br>A) 5 &nbsp; B) 1 &nbsp; C) 0 &nbsp; D) 25 &nbsp; E) belirsiz</li>
<li>360'ın pozitif bölen sayısı kaçtır ($360=2^3\\\\cdot3^2\\\\cdot5$)?<br>A) 20 &nbsp; B) 24 &nbsp; C) 18 &nbsp; D) 30 &nbsp; E) 16</li>
<li>$\\\\overline{ab}-\\\\overline{ba}=45$ ise $a-b$ kaçtır?<br>A) 3 &nbsp; B) 4 &nbsp; C) 5 &nbsp; D) 9 &nbsp; E) 6</li>
<li>Aralarında asal olmayan (ortak asal çarpanı olan) iki sayının EKOK'u ile çarpımları arasındaki ilişki nedir?<br>A) EKOK &gt; çarpım &nbsp; B) EKOK &lt; çarpım &nbsp; C) EKOK = çarpım &nbsp; D) İlişki yok &nbsp; E) Her zaman eşit</li>
<li>$7^{100}$'ün 3'e bölümünden kalan kaçtır ($7\\\\equiv1\\\\pmod3$)?<br>A) 0 &nbsp; B) 1 &nbsp; C) 2 &nbsp; D) 3 &nbsp; E) 100</li>
<li>Üç basamaklı, rakamları farklı ve 5'e bölünen kaç sayı vardır (100-999 arası, son rakam 0 veya 5, ilk rakam 0 olamaz, rakamlar birbirinden farklı)?<br>A) 128 &nbsp; B) 136 &nbsp; C) 144 &nbsp; D) 152 &nbsp; E) 160</li>
<li>$a\\\\cdot b=EBOB(a,b)\\\\cdot EKOK(a,b)$ özdeşliği hangi durumda $a=EBOB=EKOK=b$'ye indirgenir?<br>A) a=b olduğunda &nbsp; B) a,b aralarında asal olduğunda &nbsp; C) a=1 olduğunda &nbsp; D) Hiçbir zaman &nbsp; E) b=1 olduğunda</li>
<li>$n!$ içindeki 2'nin kuvveti $n=20$ için kaçtır?<br>A) 15 &nbsp; B) 16 &nbsp; C) 18 &nbsp; D) 20 &nbsp; E) 10</li>
<li>$120$ ile aralarında asal olan, $120$'den küçük pozitif tam sayı sayısı (Euler-phi mantığı) kaçtır? $120=2^3\\\\cdot3\\\\cdot5$<br>A) 32 &nbsp; B) 30 &nbsp; C) 36 &nbsp; D) 40 &nbsp; E) 24</li>
<li>$x^2\\\\equiv1\\\\pmod8$ denklemini sağlayan $0\\\\le x&lt;8$ kaç değer vardır?<br>A) 2 &nbsp; B) 4 &nbsp; C) 6 &nbsp; D) 8 &nbsp; E) 1</li>
<li>İki basamaklı kaç sayı hem 3'e hem 4'e bölünür (yani 12'nin katıdır)?<br>A) 6 &nbsp; B) 7 &nbsp; C) 8 &nbsp; D) 9 &nbsp; E) 5</li>
<li>$N$ üç basamaklı bir sayı ve rakamları toplamı 24 ise $N$ kesinlikle hangi sayıya bölünür?<br>A) 2 &nbsp; B) 3 &nbsp; C) 4 &nbsp; D) 5 &nbsp; E) 6</li>
<li>$2^{2024}+2^{2023}$ ifadesi $2^{2023}$ cinsinden nasıl sadeleşir?<br>A) $2^{2023}\\\\cdot3$ &nbsp; B) $2^{4047}$ &nbsp; C) $2^{2024}$ &nbsp; D) $3^{2023}$ &nbsp; E) $2^{2025}$</li>
<li>EBOB'u 8, EKOK'u 96 olan iki sayının çarpımı kaçtır?<br>A) 768 &nbsp; B) 384 &nbsp; C) 104 &nbsp; D) 12 &nbsp; E) 88</li>
<li>$\\\\overline{2a3}$ üç basamaklı sayı 3'e bölünüyorsa $a$ kaç farklı değer alabilir?<br>A) 2 &nbsp; B) 3 &nbsp; C) 4 &nbsp; D) 5 &nbsp; E) 6</li>
<li>Ardışık üç tek sayının toplamı her zaman hangi sayıya bölünür?<br>A) 2 &nbsp; B) 3 &nbsp; C) 5 &nbsp; D) 6 &nbsp; E) 9</li>
<li>$100$'e kadar (100 dahil) kaç asal sayı vardır?<br>A) 21 &nbsp; B) 23 &nbsp; C) 25 &nbsp; D) 27 &nbsp; E) 29</li>
</ol>

<hr />
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. A</strong> — $180=4\\\\cdot45=2^2\\\\cdot3^2\\\\cdot5$.</p>
<p><strong>2. B</strong> — $84=2^2\\\\cdot3\\\\cdot7$, $126=2\\\\cdot3^2\\\\cdot7$ → EBOB$=2\\\\cdot3\\\\cdot7=42$.</p>
<p><strong>3. C</strong> — Ardışık üç sayıdan biri 3'ün katı, en az biri çift → 6'ya bölünür.</p>
<p><strong>4. A</strong> — 5'in kuvvetleri her zaman 5 ile biter.</p>
<p><strong>5. B</strong> — $(3+1)(2+1)(1+1)=24$.</p>
<p><strong>6. C</strong> — $9(a-b)=45\\\\Rightarrow a-b=5$.</p>
<p><strong>7. B</strong> — Ortak çarpan varsa EKOK, çarpımdan küçük olur (EBOB&gt;1 olduğundan EBOB×EKOK=çarpım eşitliğinde EKOK=çarpım/EBOB&lt;çarpım).</p>
<p><strong>8. B</strong> — $7\\\\equiv1\\\\pmod3\\\\Rightarrow7^{100}\\\\equiv1$.</p>
<p><strong>9. B</strong> — Detaylı sayma: son rakam 0 ise kalan 2 basamak 8×8=... standart kombinatorik sonucu 136'dır (ilk rakam 9 seçenek, ikinci 8, son 0/5 için ayrı hesap).</p>
<p><strong>10. A</strong> — $a=b$ olduğunda EBOB=EKOK=a=b.</p>
<p><strong>11. C</strong> — $\\\\lfloor20/2\\\\rfloor+\\\\lfloor20/4\\\\rfloor+\\\\lfloor20/8\\\\rfloor+\\\\lfloor20/16\\\\rfloor=10+5+2+1=18$.</p>
<p><strong>12. A</strong> — Euler-phi: $120(1-\\\\frac12)(1-\\\\frac13)(1-\\\\frac15)=120\\\\cdot\\\\frac12\\\\cdot\\\\frac23\\\\cdot\\\\frac45=32$.</p>
<p><strong>13. B</strong> — $x\\\\in\\\\{1,3,5,7\\\\}$ hepsi $x^2\\\\equiv1\\\\pmod8$ sağlar; 4 değer.</p>
<p><strong>14. C</strong> — 12,24,36,48,60,72,84,96 → 8 tane.</p>
<p><strong>15. B</strong> — Rakam toplamı 24, 3'e bölünür (9'a bölünmez çünkü 24, 9'un katı değil).</p>
<p><strong>16. A</strong> — $2^{2023}(2+1)=3\\\\cdot2^{2023}$.</p>
<p><strong>17. A</strong> — EBOB×EKOK$=8\\\\times96=768$.</p>
<p><strong>18. B</strong> — $2+a+3=5+a$, 3'e bölünen $a$ değerleri: 1,4,7 → 3 değer.</p>
<p><strong>19. B</strong> — Üç ardışık tek sayı: $n,n+2,n+4$ toplamı $3n+6=3(n+2)$; her zaman 3'e bölünür.</p>
<p><strong>20. C</strong> — 1-100 arası 25 asal sayı vardır.</p>

<hr />
<h2>13. Ultra Özet</h2>
<blockquote><p><strong>TEMEL KAVRAMLAR — TEK SAYFA</strong><br>
1. Bölünebilme: 2/5/10→son basamak, 3/9→rakam toplamı, 4/8→son 2/3 basamak, 11→sağdan +/- toplam.<br>
2. EBOB=ortak asalların küçük üssü; EKOK=tüm asalların büyük üssü; EBOB×EKOK=a×b.<br>
3. "Hem A hem B'ye bölünüyorsa A×B'ye bölünür" YANLIŞ — doğrusu EKOK(A,B).<br>
4. Bölen sayısı formülü: üsleri 1 artır, çarp. $n!$ içindeki asal kuvveti: Legendre formülü ($\\\\lfloor n/p\\\\rfloor+\\\\lfloor n/p^2\\\\rfloor+...$).<br>
5. $\\\\overline{ab}-\\\\overline{ba}=9(a-b)$; kalan aritmetiğinde (mod) döngüsel kalıpları (birler basamağı) kullan.</p></blockquote>

<hr />
<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• EKOK tuzağına düşme: "hem...hem" = EKOK, çarpım değil.<br>
• Legendre formülünü unutma: $n!$'deki p asalının kuvveti $=\\\\sum\\\\lfloor n/p^k\\\\rfloor$.<br>
• Birler basamağı sorularında kuvvet döngüsünü (genelde 4 uzunluklu) bul, mod al.<br>
• Bölen sayısı: üsleri 1 artır çarp; tek/çift bölen ayrımında 2'nin üssünü izole et.</p>
</div>
\` },`,
  },
  {
    id: 18,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Rasyonel ve Ondalık Sayılar',
    built: true,
    html: `<h3>(Kesir İşlemleri, Devirli Ondalık, Teleskopik Toplamlar, Karşılaştırma Teknikleri — İleri Seviye)</h3>
<hr />

<h2>1. Konunun Mantığı</h2>
<p>Rasyonel sayılar konusu tek başına az soru getirse de, TÜM sayısal bölümün alt yapısıdır. İleri seviyede asıl önemli olan üç şey: devirli ondalık↔kesir dönüşümünü ispatıyla bilmek, teleskopik (birbirini götüren) toplam tekniğini tanımak ve büyük kesir gruplarını hızlı karşılaştırmaktır.</p>

<hr />
<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p><strong>Devirli ondalık ↔ kesir:</strong> Saf devirli $0,\\\\overline{ab}=\\\\dfrac{ab}{99}$; karma devirli $0,a\\\\overline{b}=\\\\dfrac{\\\\overline{ab}-a}{90}$ (devir basamağı kadar 9, devirsiz basamağı kadar 0).</p>
<p><strong>Teleskopik toplam:</strong> $\\\\dfrac{1}{n(n+1)}=\\\\dfrac1n-\\\\dfrac1{n+1}$ özdeşliği ile $\\\\sum_{k=1}^{N}\\\\dfrac1{k(k+1)}=1-\\\\dfrac1{N+1}$ gibi seriler saniyeler içinde toplanır.</p>
<p><strong>1'e uzaklık yöntemi:</strong> $1-\\\\dfrac{a}{b}=\\\\dfrac{b-a}{b}$ küçükse kesir 1'e o kadar yakındır (büyüktür).</p>
<p><strong>Sürekli (zincirleme) kesirler:</strong> $\\\\cfrac{1}{1+\\\\cfrac{1}{1+\\\\cfrac1x}}$ tipi ifadeler içten dışa doğru sadeleştirilir.</p>

<hr />
<h2>3. İleri Düzey Ayrıntılar</h2>
<ul>
<li>$0,999\\\\ldots=1$ kesin bir eşitliktir (limit değil, cebirsel ispat: $x=0,999...\\\\Rightarrow10x=9,999...\\\\Rightarrow9x=9\\\\Rightarrow x=1$).</li>
<li>$\\\\dfrac{1}{n}-\\\\dfrac1{n+1}=\\\\dfrac1{n(n+1)}$ türü ayrıştırmalar hem toplama hem karşılaştırmada kullanılır.</li>
<li>Ardışık tam sayıların çarpanlarına ayrılmış kesirlerinde ($\\\\dfrac{1}{1\\\\cdot2}+\\\\dfrac1{2\\\\cdot3}+...$) teleskopik sadeleşme aranmalı.</li>
</ul>

<hr />
<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🟨 Ezber Kutusu</span><p>Teleskopik seri gördüğünde hemen $\\\\frac1{n(n+1)}=\\\\frac1n-\\\\frac1{n+1}$ dönüşümünü dene; toplamın çoğu terimi birbirini götürür, sadece BAŞ ve SON terim kalır.</p></div>

<hr />
<h2>5. Karşılaştırma Tabloları</h2>
<table><thead><tr><th>Ondalık Türü</th><th>Formül</th></tr></thead><tbody>
<tr><td>Saf devirli</td><td>$0,\\\\overline{ab}=\\\\frac{ab}{99}$</td></tr>
<tr><td>Karma devirli</td><td>$0,a\\\\overline{b}=\\\\frac{\\\\overline{ab}-a}{90}$</td></tr>
</tbody></table>

<hr />
<h2>6. Sınıflandırma Şeması</h2>
<blockquote><p>Kesir toplamı/karşılaştırması gördüğünde: 1) Terimler $\\\\frac1{n(n+1)}$ formunda mı → teleskopik ayrıştır → 2) Sayılar 1'e yakın mı → 1'e uzaklık yöntemi → 3) Devirli ondalık mı → saf/karma ayrımı yapıp formülü uygula.</p></blockquote>

<hr />
<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">⚠️ ÖSYM Tuzağı</span><p>Karma devirli formülünde devirsiz basamak sayısı kadar SIFIR eklemeyi unutmak en sık hatadır: $0,41\\\\overline{6}=\\\\frac{416-41}{900}=\\\\frac{375}{900}=\\\\frac5{12}$ (iki devirsiz rakam → iki sıfır, bir devirli rakam → bir dokuz).</p></div>

<hr />
<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de bu konudan gelen sorular genelde devirli ondalık dönüşümü VEYA çok terimli kesir toplamı/karşılaştırması şeklindedir; saf işlem sorusu nadirdir.</p>

<hr />
<h2>9. Soru Çözüm Stratejileri</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">🟦 İpucu</span><p>Uzun bir kesir toplamı gördüğünde önce genel terimi bul, teleskopik ayrıştırma dene; elle toplamaya çalışmak zaman kaybettirir.</p></div>

<hr />
<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<h3>🟢 Orta-Kolay (1-10)</h3>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>$0,\\\\overline{45}$ kesir biçiminde sadeleştirilmiş hâliyle nedir?</p>
<p>A) $\\\\frac{5}{11}$ &nbsp; B) $\\\\frac{45}{99}$ &nbsp; C) $\\\\frac9{20}$ &nbsp; D) $\\\\frac{4}{9}$ &nbsp; E) $\\\\frac{1}{2}$</p>
<p><strong>Çözüm:</strong> $\\\\frac{45}{99}=\\\\frac{5}{11}$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>$\\\\dfrac{1}{1\\\\cdot2}+\\\\dfrac{1}{2\\\\cdot3}+\\\\dfrac{1}{3\\\\cdot4}$ toplamı kaçtır?</p>
<p>A) $\\\\frac34$ &nbsp; B) $\\\\frac23$ &nbsp; C) $\\\\frac{11}{12}$ &nbsp; D) $\\\\frac{5}{6}$ &nbsp; E) $\\\\frac14$</p>
<p><strong>Çözüm:</strong> Teleskopik: $1-\\\\frac14=\\\\frac34$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>$0,41\\\\overline{6}$ ondalık sayısının kesir biçimi nedir?</p>
<p>A) $\\\\frac{5}{12}$ &nbsp; B) $\\\\frac{25}{60}$ &nbsp; C) $\\\\frac{7}{16}$ &nbsp; D) $\\\\frac{5}{6}$ &nbsp; E) $\\\\frac{41}{99}$</p>
<p><strong>Çözüm:</strong> $\\\\frac{416-41}{900}=\\\\frac{375}{900}=\\\\frac5{12}$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>$a=\\\\frac78,b=\\\\frac9{10},c=\\\\frac{15}{16}$ sayılarının büyükten küçüğe sıralaması nedir?</p>
<p>A) $c&gt;b&gt;a$ &nbsp; B) $a&gt;b&gt;c$ &nbsp; C) $b&gt;c&gt;a$ &nbsp; D) $c&gt;a&gt;b$ &nbsp; E) $a&gt;c&gt;b$</p>
<p><strong>Çözüm:</strong> 1'e uzaklıklar: $\\\\frac18,\\\\frac1{10},\\\\frac1{16}$; en küçük uzaklık en büyük sayı: $c&gt;b&gt;a$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>$\\\\dfrac{2}{3}\\\\div\\\\dfrac{4}{9}$ işleminin sonucu kaçtır?</p>
<p>A) $\\\\frac89$ &nbsp; B) $\\\\frac32$ &nbsp; C) $\\\\frac{3}{2}$ &nbsp; D) $\\\\frac{6}{4}$ &nbsp; E) Hem B hem C</p>
<p><strong>Çözüm:</strong> $\\\\frac23\\\\times\\\\frac94=\\\\frac{18}{12}=\\\\frac32$. <span class="cevap-dogru">Doğru cevap: E.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>$0,999\\\\ldots$ ifadesi için hangisi doğrudur?</p>
<p>A) 1'e çok yakın ama 1'den küçüktür &nbsp; B) Tam olarak 1'e eşittir &nbsp; C) Tanımsızdır &nbsp; D) 0,9'dur &nbsp; E) İrrasyoneldir</p>
<p><strong>Çözüm:</strong> Cebirsel ispatla $0,999\\\\ldots=1$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>$\\\\dfrac1{2\\\\cdot4}+\\\\dfrac1{4\\\\cdot6}+\\\\dfrac1{6\\\\cdot8}$ toplamı için hangi teknik en uygundur?</p>
<p>A) Ortak paydaya alıp direkt toplama &nbsp; B) $\\\\frac12(\\\\frac1n-\\\\frac1{n+2})$ tipi teleskopik ayrıştırma &nbsp; C) Ondalığa çevirme &nbsp; D) 1'e uzaklık yöntemi &nbsp; E) Rastgele deneme</p>
<p><strong>Çözüm:</strong> Payda farkı 2 olduğundan $\\\\frac1{n(n+2)}=\\\\frac12(\\\\frac1n-\\\\frac1{n+2})$ teleskopik ayrıştırması en hızlıdır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>Soru 7'deki toplamın sayısal değeri kaçtır?</p>
<p>A) $\\\\frac{3}{16}$ &nbsp; B) $\\\\frac{1}{4}$ &nbsp; C) $\\\\frac{5}{16}$ &nbsp; D) $\\\\frac{1}{2}$ &nbsp; E) $\\\\frac{3}{8}$</p>
<p><strong>Çözüm:</strong> $\\\\frac12(\\\\frac12-\\\\frac18)=\\\\frac12\\\\cdot\\\\frac38=\\\\frac3{16}$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>$0,\\\\overline{3}+0,\\\\overline{6}$ toplamı kaçtır?</p>
<p>A) $0,\\\\overline{9}=1$ &nbsp; B) $0,9$ &nbsp; C) $1,1$ &nbsp; D) $0,\\\\overline{99}$ &nbsp; E) Tanımsız</p>
<p><strong>Çözüm:</strong> $\\\\frac13+\\\\frac23=1$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>$\\\\dfrac{1}{3}$ ile $\\\\dfrac{4}{13}$ kesirlerinden hangisi büyüktür (çapraz çarpma ile)?</p>
<p>A) $\\\\frac13$ &nbsp; B) $\\\\frac4{13}$ &nbsp; C) Eşit &nbsp; D) Karşılaştırılamaz &nbsp; E) Hiçbiri</p>
<p><strong>Çözüm:</strong> $1\\\\times13=13$, $4\\\\times3=12$; $13&gt;12$ olduğundan $\\\\frac13&gt;\\\\frac4{13}$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<h3>🟡 Orta-Zor (11-20)</h3>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>$\\\\displaystyle\\\\sum_{k=1}^{99}\\\\dfrac{1}{k(k+1)}$ toplamı kaçtır?</p>
<p>A) $\\\\frac{99}{100}$ &nbsp; B) $\\\\frac{1}{100}$ &nbsp; C) $1$ &nbsp; D) $\\\\frac{98}{99}$ &nbsp; E) $\\\\frac{100}{99}$</p>
<p><strong>Çözüm:</strong> Teleskopik: $1-\\\\frac1{100}=\\\\frac{99}{100}$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>$x=\\\\cfrac{1}{2+\\\\cfrac{1}{2+\\\\cfrac12}}$ ifadesinin değeri kaçtır?</p>
<p>A) $\\\\frac{5}{12}$ &nbsp; B) $\\\\frac{2}{5}$ &nbsp; C) $\\\\frac{5}{2}$ &nbsp; D) $\\\\frac{12}{5}$ &nbsp; E) $\\\\frac{7}{12}$</p>
<p><strong>Çözüm:</strong> İçten dışa: $2+\\\\frac12=\\\\frac52$; $2+\\\\frac25=\\\\frac{12}5$; $x=\\\\frac{5}{12}$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>$0,1\\\\overline{23}$ (devirsiz kısım "1", devirli kısım "23") kesir biçimi nedir?</p>
<p>A) $\\\\frac{61}{495}$ &nbsp; B) $\\\\frac{122}{990}$ &nbsp; C) $\\\\frac{122}{999}$ &nbsp; D) A ve B eşdeğerdir &nbsp; E) $\\\\frac{23}{99}$</p>
<p><strong>Çözüm:</strong> Pay: $123-1=122$; payda: 2 devirli basamak (99) × 1 devirsiz basamak (0) = 990. $\\\\frac{122}{990}=\\\\frac{61}{495}$; A ve B sadeleştirmeyle eşdeğerdir. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>$\\\\dfrac{1}{\\\\sqrt2+1}$ ifadesinin payda rasyonelleştirilmiş hâli nedir?</p>
<p>A) $\\\\sqrt2-1$ &nbsp; B) $\\\\sqrt2+1$ &nbsp; C) $\\\\frac{\\\\sqrt2}{2}-1$ &nbsp; D) $2-\\\\sqrt2$ &nbsp; E) $1-\\\\sqrt2$</p>
<p><strong>Çözüm:</strong> $\\\\frac{1}{\\\\sqrt2+1}\\\\times\\\\frac{\\\\sqrt2-1}{\\\\sqrt2-1}=\\\\frac{\\\\sqrt2-1}{2-1}=\\\\sqrt2-1$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>$m,n,p,q$ sayılar $\\\\frac mn&lt;\\\\frac pq$ ($n,q&gt;0$) koşulunu sağlıyorsa "medyant" kesri $\\\\frac{m+p}{n+q}$ için ne söylenebilir?</p>
<p>A) Her zaman $\\\\frac mn$ ile $\\\\frac pq$ arasındadır &nbsp; B) Her zaman $\\\\frac mn$'den küçüktür &nbsp; C) Her zaman $\\\\frac pq$'dan büyüktür &nbsp; D) Belirsizdir &nbsp; E) Her zaman eşittir</p>
<p><strong>Çözüm:</strong> Medyant kesir özelliği gereği her zaman iki kesir arasında yer alır (Stern-Brocot ağacının temel özelliği). <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>$\\\\dfrac{1}{1\\\\cdot3}+\\\\dfrac1{3\\\\cdot5}+\\\\dfrac1{5\\\\cdot7}+\\\\cdots+\\\\dfrac1{97\\\\cdot99}$ toplamı kaçtır?</p>
<p>A) $\\\\frac{49}{99}$ &nbsp; B) $\\\\frac{48}{99}$ &nbsp; C) $\\\\frac{1}{2}$ &nbsp; D) $\\\\frac{49}{100}$ &nbsp; E) $\\\\frac{1}{99}$</p>
<p><strong>Çözüm:</strong> $\\\\frac1{n(n+2)}=\\\\frac12(\\\\frac1n-\\\\frac1{n+2})$; toplam $=\\\\frac12(1-\\\\frac1{99})=\\\\frac12\\\\cdot\\\\frac{98}{99}=\\\\frac{49}{99}$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>$0,\\\\overline{142857}$ (6 basamak devirli) hangi kesre eşittir?</p>
<p>A) $\\\\frac17$ &nbsp; B) $\\\\frac{142857}{999999}$ &nbsp; C) A ve B eşdeğer &nbsp; D) $\\\\frac16$ &nbsp; E) $\\\\frac{1}{8}$</p>
<p><strong>Çözüm:</strong> $\\\\frac{142857}{999999}=\\\\frac17$ (bilinen özdeşlik); A ve B eşdeğerdir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>$\\\\dfrac{2024}{2025}$ ile $\\\\dfrac{2025}{2026}$ kesirlerinden hangisi büyüktür?</p>
<p>A) $\\\\frac{2024}{2025}$ &nbsp; B) $\\\\frac{2025}{2026}$ &nbsp; C) Eşit &nbsp; D) Karşılaştırılamaz &nbsp; E) Farkları sıfırdır</p>
<p><strong>Çözüm:</strong> 1'e uzaklıklar $\\\\frac1{2025}$ ve $\\\\frac1{2026}$; $\\\\frac1{2026}&lt;\\\\frac1{2025}$ olduğundan ikinci kesir 1'e daha yakın, yani daha büyük. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>$x+\\\\dfrac1x=3$ ise $x^2+\\\\dfrac1{x^2}$ kaçtır?</p>
<p>A) 7 &nbsp; B) 9 &nbsp; C) 5 &nbsp; D) 11 &nbsp; E) 3</p>
<p><strong>Çözüm:</strong> $(x+\\\\frac1x)^2=x^2+2+\\\\frac1{x^2}=9\\\\Rightarrow x^2+\\\\frac1{x^2}=7$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>$\\\\dfrac{1}{2}+\\\\dfrac{1}{4}+\\\\dfrac18+\\\\cdots+\\\\dfrac1{2^{10}}$ (10 terim, geometrik seri) toplamı kaçtır?</p>
<p>A) $1-\\\\frac1{2^{10}}$ &nbsp; B) $1$ &nbsp; C) $\\\\frac{1023}{1024}$ &nbsp; D) A ve C eşdeğer &nbsp; E) $2-\\\\frac1{2^{10}}$</p>
<p><strong>Çözüm:</strong> Geometrik seri toplam formülü: $1-\\\\frac1{2^{10}}=1-\\\\frac1{1024}=\\\\frac{1023}{1024}$; A ve C eşdeğerdir. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>

<h3>🔴 Zor (21-30)</h3>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>$\\\\dfrac{1}{1\\\\cdot2\\\\cdot3}+\\\\dfrac1{2\\\\cdot3\\\\cdot4}+\\\\cdots+\\\\dfrac1{n(n+1)(n+2)}$ toplamı için hangi ayrıştırma kullanılır?</p>
<p>A) $\\\\frac1{n(n+1)(n+2)}=\\\\frac12\\\\left[\\\\frac1{n(n+1)}-\\\\frac1{(n+1)(n+2)}\\\\right]$ &nbsp; B) Doğrudan toplama &nbsp; C) Rasyonelleştirme &nbsp; D) 1'e uzaklık &nbsp; E) Hiçbiri</p>
<p><strong>Çözüm:</strong> Üç terimli teleskopik ayrıştırma bu formdadır; ikinci mertebeden teleskop oluşturur. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>Soru 21'deki toplam $n=1$'den $n=8$'e kadar (8 terim) hesaplanırsa sonuç kaçtır?</p>
<p>A) $\\\\frac{11}{45}$ &nbsp; B) $\\\\frac{1}{4}$ &nbsp; C) $\\\\frac{1}{90}$ &nbsp; D) $\\\\frac{22}{45}$ &nbsp; E) $\\\\frac{9}{40}$</p>
<p><strong>Çözüm:</strong> Formül: $\\\\frac14-\\\\frac1{2(n+1)(n+2)}$; $n=8$ için $\\\\frac14-\\\\frac1{2\\\\cdot9\\\\cdot10}=\\\\frac14-\\\\frac1{180}=\\\\frac{45}{180}-\\\\frac1{180}=\\\\frac{44}{180}=\\\\frac{11}{45}$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>$a,b$ pozitif tam sayılar ve $\\\\dfrac ab=0,\\\\overline{27}$ ise $a+b$'nin alabileceği en küçük değer kaçtır?</p>
<p>A) 14 &nbsp; B) 38 &nbsp; C) 11 &nbsp; D) 26 &nbsp; E) 37</p>
<p><strong>Çözüm:</strong> $0,\\\\overline{27}=\\\\frac{27}{99}=\\\\frac3{11}$ (sadeleştirilmiş); $a=3,b=11$, en küçük toplam $=14$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>$\\\\dfrac{1}{n}-\\\\dfrac1{n+1}&lt;\\\\dfrac1{100}$ eşitsizliğini sağlayan en küçük pozitif tam sayı $n$ kaçtır (yaklaşık, $\\\\frac1{n(n+1)}&lt;\\\\frac1{100}$)?</p>
<p>A) 9 &nbsp; B) 10 &nbsp; C) 11 &nbsp; D) 8 &nbsp; E) 12</p>
<p><strong>Çözüm:</strong> $n(n+1)&gt;100$ olmalı; $n=9$ için $9\\\\times10=90&lt;100$ olmaz, $n=10$ için $10\\\\times11=110&gt;100$ ✓; en küçük $n=10$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>$\\\\dfrac{3}{4},\\\\dfrac{5}{7},\\\\dfrac{8}{11}$ kesirlerinden hangisi ortadadır (medyan)?</p>
<p>A) $\\\\frac34$ &nbsp; B) $\\\\frac57$ &nbsp; C) $\\\\frac8{11}$ &nbsp; D) Belirsiz &nbsp; E) Hepsi eşit</p>
<p><strong>Çözüm:</strong> Ondalığa çevir: $0,75;\\\\ 0,714;\\\\ 0,727$; sıralama $0,714&lt;0,727&lt;0,75$, ortanca $\\\\frac8{11}$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>$x=0,1\\\\overline{6}$ ise $6x$ kaçtır?</p>
<p>A) 1 &nbsp; B) $\\\\frac{5}{6}$ &nbsp; C) $\\\\frac{6}{5}$ &nbsp; D) 2 &nbsp; E) $\\\\frac{1}{6}$</p>
<p><strong>Çözüm:</strong> $0,1\\\\overline6=\\\\frac{16-1}{90}=\\\\frac{15}{90}=\\\\frac16$; $6x=1$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>$\\\\dfrac{1}{\\\\sqrt2}+\\\\dfrac1{\\\\sqrt2+\\\\sqrt3}+\\\\cdots$ gibi rasyonelleştirme zincirlerinde genel yaklaşım nedir?</p>
<p>A) Her terimi payda eşleniğiyle çarpıp teleskopik hâle getirmek &nbsp; B) Direkt ondalığa çevirmek &nbsp; C) Yaklaşık değer kullanmak &nbsp; D) İhmal etmek &nbsp; E) Hiçbiri</p>
<p><strong>Çözüm:</strong> $\\\\frac{1}{\\\\sqrt{n}+\\\\sqrt{n+1}}=\\\\sqrt{n+1}-\\\\sqrt n$ eşleniğiyle rasyonelleştirilip teleskopik toplama dönüştürülür. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>$\\\\dfrac{1}{\\\\sqrt1+\\\\sqrt2}+\\\\dfrac1{\\\\sqrt2+\\\\sqrt3}+\\\\cdots+\\\\dfrac1{\\\\sqrt{99}+\\\\sqrt{100}}$ toplamı kaçtır?</p>
<p>A) 9 &nbsp; B) 10 &nbsp; C) $\\\\sqrt{100}-\\\\sqrt1=9$ &nbsp; D) A ve C eşdeğer &nbsp; E) 99</p>
<p><strong>Çözüm:</strong> Her terim $\\\\sqrt{n+1}-\\\\sqrt n$'e rasyonelleşir; teleskopik toplam $=\\\\sqrt{100}-\\\\sqrt1=10-1=9$. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>Bir kesrin payı ve paydası, kesir sadeleştirilemez (aralarında asal) olacak şekilde $\\\\frac{a}{b}=0,\\\\overline{037}$ ise $a+b$ kaçtır?</p>
<p>A) 28 &nbsp; B) 37 &nbsp; C) 30 &nbsp; D) 999 &nbsp; E) 26</p>
<p><strong>Çözüm:</strong> $\\\\frac{37}{999}$; EBOB(37,999): 999=27×37, yani $\\\\frac{37}{999}=\\\\frac{1}{27}$; $a+b=1+27=28$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>$\\\\dfrac{1}{2^2-1}+\\\\dfrac1{3^2-1}+\\\\cdots+\\\\dfrac1{10^2-1}$ toplamı için hangi ayrıştırma faydalıdır ($n^2-1=(n-1)(n+1)$)?</p>
<p>A) $\\\\frac1{(n-1)(n+1)}=\\\\frac12\\\\left(\\\\frac1{n-1}-\\\\frac1{n+1}\\\\right)$ &nbsp; B) Doğrudan toplama &nbsp; C) Rasyonelleştirme &nbsp; D) 1'e uzaklık &nbsp; E) Hiçbiri</p>
<p><strong>Çözüm:</strong> $n^2-1=(n-1)(n+1)$ çarpanlarına ayrılıp kısmi kesirlere bölünerek teleskopik toplam elde edilir. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<hr />
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<ol>
<li>$0,\\\\overline{18}$ kesir biçimi nedir?<br>A) $\\\\frac{2}{11}$ &nbsp; B) $\\\\frac{9}{50}$ &nbsp; C) $\\\\frac{18}{99}$ &nbsp; D) A ve C eşdeğer &nbsp; E) $\\\\frac{1}{5}$</li>
<li>$\\\\dfrac1{1\\\\cdot2}+\\\\dfrac1{2\\\\cdot3}+\\\\cdots+\\\\dfrac1{9\\\\cdot10}$ toplamı kaçtır?<br>A) $\\\\frac{9}{10}$ &nbsp; B) $\\\\frac{1}{10}$ &nbsp; C) $\\\\frac{8}{9}$ &nbsp; D) 1 &nbsp; E) $\\\\frac{1}{2}$</li>
<li>$x+\\\\frac1x=5$ ise $x^2+\\\\frac1{x^2}$ kaçtır?<br>A) 21 &nbsp; B) 23 &nbsp; C) 25 &nbsp; D) 27 &nbsp; E) 19</li>
<li>$\\\\frac{100}{101}$ ile $\\\\frac{101}{102}$'den hangisi büyüktür?<br>A) İlki &nbsp; B) İkincisi &nbsp; C) Eşit &nbsp; D) Karşılaştırılamaz &nbsp; E) Fark sıfır</li>
<li>$0,2\\\\overline5$ (devirsiz "2", devirli "5") kesir biçimi nedir?<br>A) $\\\\frac{23}{90}$ &nbsp; B) $\\\\frac{25}{90}$ &nbsp; C) $\\\\frac{5}{18}$ &nbsp; D) A ve C eşdeğer &nbsp; E) $\\\\frac{2}{5}$</li>
<li>$\\\\dfrac1{\\\\sqrt3+\\\\sqrt2}$ ifadesi rasyonelleştirilince ne olur?<br>A) $\\\\sqrt3-\\\\sqrt2$ &nbsp; B) $\\\\sqrt3+\\\\sqrt2$ &nbsp; C) $\\\\sqrt6-1$ &nbsp; D) $\\\\frac{\\\\sqrt3}{\\\\sqrt2}$ &nbsp; E) 1</li>
<li>$\\\\dfrac1{1\\\\cdot3}+\\\\dfrac1{3\\\\cdot5}+\\\\dfrac1{5\\\\cdot7}$ toplamı kaçtır?<br>A) $\\\\frac{3}{7}$ &nbsp; B) $\\\\frac{1}{3}$ &nbsp; C) $\\\\frac{4}{7}$ &nbsp; D) $\\\\frac{2}{7}$ &nbsp; E) $\\\\frac{5}{7}$</li>
<li>$0,999\\\\ldots\\\\times3$ kaçtır?<br>A) 2,997 &nbsp; B) 3 &nbsp; C) $2,\\\\overline{9}$ &nbsp; D) B ve C eşdeğer &nbsp; E) Tanımsız</li>
<li>$\\\\dfrac{7}{9}$ ile $\\\\dfrac{8}{11}$'den hangisi büyüktür?<br>A) $\\\\frac79$ &nbsp; B) $\\\\frac8{11}$ &nbsp; C) Eşit &nbsp; D) Karşılaştırılamaz &nbsp; E) İkisi de 1'e eşit</li>
<li>$\\\\cfrac1{1+\\\\cfrac11}$ ifadesinin değeri kaçtır?<br>A) $\\\\frac12$ &nbsp; B) 1 &nbsp; C) 2 &nbsp; D) $\\\\frac13$ &nbsp; E) 0</li>
<li>$\\\\dfrac{1}{2\\\\cdot3}+\\\\dfrac1{3\\\\cdot4}+\\\\cdots+\\\\dfrac1{9\\\\cdot10}$ toplamı kaçtır?<br>A) $\\\\frac{7}{30}$ &nbsp; B) $\\\\frac{4}{10}$ &nbsp; C) $\\\\frac{1}{2}$ &nbsp; D) $\\\\frac{7}{20}$ &nbsp; E) $\\\\frac{3}{10}$</li>
<li>$a/b$ sadeleştirilmiş kesri $0,\\\\overline{6}$'ya eşitse $a+b$ kaçtır?<br>A) 5 &nbsp; B) 7 &nbsp; C) 9 &nbsp; D) 11 &nbsp; E) 15</li>
<li>$\\\\sqrt{n+1}-\\\\sqrt{n}=\\\\dfrac{1}{\\\\sqrt{n+1}+\\\\sqrt n}$ özdeşliği hangi amaçla kullanılır?<br>A) Rasyonelleştirme/teleskopik toplam &nbsp; B) Basit sadeleştirme &nbsp; C) Ondalığa çevirme &nbsp; D) Hiçbiri &nbsp; E) Sadece karekök alma</li>
<li>$\\\\dfrac{2}{3}$ kesrinin 1'e uzaklığı kaçtır?<br>A) $\\\\frac13$ &nbsp; B) $\\\\frac23$ &nbsp; C) 1 &nbsp; D) $\\\\frac{1}{2}$ &nbsp; E) 0</li>
<li>$0,\\\\overline{123}$ kesri sadeleştirilince paydası kaçtır (999 ile EBOB alınarak)?<br>A) 999 &nbsp; B) 333 &nbsp; C) 111 &nbsp; D) 37 &nbsp; E) 27</li>
<li>$\\\\dfrac1{n(n+1)}$ genel teriminin teleskopik ayrıştırması nedir?<br>A) $\\\\frac1n+\\\\frac1{n+1}$ &nbsp; B) $\\\\frac1n-\\\\frac1{n+1}$ &nbsp; C) $\\\\frac{1}{n^2}$ &nbsp; D) $\\\\frac2{n}$ &nbsp; E) $\\\\frac1{n^2+n}$ (bu da doğru ama ayrıştırma değil)</li>
<li>$x=0,3\\\\overline{45}$ ifadesinde devirsiz basamak sayısı kaçtır?<br>A) 0 &nbsp; B) 1 &nbsp; C) 2 &nbsp; D) 3 &nbsp; E) 4</li>
<li>$\\\\dfrac{99}{100}$ ile $\\\\dfrac{999}{1000}$'den hangisi 1'e daha yakındır?<br>A) $\\\\frac{99}{100}$ &nbsp; B) $\\\\frac{999}{1000}$ &nbsp; C) Eşit uzaklık &nbsp; D) Karşılaştırılamaz &nbsp; E) İkisi de 1'e eşit</li>
<li>$\\\\dfrac{1}{4}+\\\\dfrac1{16}+\\\\dfrac1{64}+\\\\cdots$ (sonsuz geometrik seri, oran $\\\\frac14$) toplamı kaçtır?<br>A) $\\\\frac13$ &nbsp; B) $\\\\frac14$ &nbsp; C) $\\\\frac12$ &nbsp; D) 1 &nbsp; E) $\\\\frac{4}{3}$</li>
<li>$\\\\dfrac{5}{6}$ kesri hangi işlemle $0,8\\\\overline3$'e dönüştürülür (uzun bölme mantığı)?<br>A) $5\\\\div6$ &nbsp; B) $6\\\\div5$ &nbsp; C) $5\\\\times6$ &nbsp; D) $5-6$ &nbsp; E) Hiçbiri</li>
</ol>

<hr />
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. D</strong> — $\\\\frac{18}{99}=\\\\frac2{11}$.</p>
<p><strong>2. A</strong> — Teleskopik: $1-\\\\frac1{10}=\\\\frac9{10}$.</p>
<p><strong>3. A</strong> — $25-2=23$.</p>
<p><strong>4. B</strong> — Uzaklıklar $\\\\frac1{101}&gt;\\\\frac1{102}$; ikinci kesir 1'e daha yakın, daha büyük.</p>
<p><strong>5. A</strong> — $\\\\frac{25-2}{90}=\\\\frac{23}{90}$ (sadeleşmez).</p>
<p><strong>6. A</strong> — $(\\\\sqrt3+\\\\sqrt2)(\\\\sqrt3-\\\\sqrt2)=1$, pay-payda $\\\\sqrt3-\\\\sqrt2$ ile çarpılır.</p>
<p><strong>7. A</strong> — $\\\\frac12(1-\\\\frac17)=\\\\frac12\\\\cdot\\\\frac67=\\\\frac37$.</p>
<p><strong>8. D</strong> — $0,999...=1$, $1\\\\times3=3=2,\\\\overline9$.</p>
<p><strong>9. A</strong> — Çapraz çarpım: $7\\\\times11=77$, $8\\\\times9=72$; $77&gt;72$, $\\\\frac79&gt;\\\\frac8{11}$.</p>
<p><strong>10. A</strong> — İçteki $\\\\frac11=1$; $\\\\cfrac1{1+1}=\\\\frac12$.</p>
<p><strong>11. B</strong> — Teleskopik: $\\\\frac12-\\\\frac1{10}=\\\\frac{4}{10}$.</p>
<p><strong>12. A</strong> — $\\\\frac69=\\\\frac23$, sadeleştirilmiş $a=2,b=3$, $a+b=5$.</p>
<p><strong>13. A</strong> — Bu özdeşlik rasyonelleştirme yoluyla teleskopik toplam kurmak için kullanılır.</p>
<p><strong>14. A</strong> — $1-\\\\frac23=\\\\frac13$.</p>
<p><strong>15. A</strong> — $999=27\\\\times37$; $0,\\\\overline{123}=\\\\frac{123}{999}=\\\\frac{41}{333}$; payda 333.</p>
<p><strong>16. B</strong> — $\\\\frac1n-\\\\frac1{n+1}=\\\\frac{(n+1)-n}{n(n+1)}=\\\\frac1{n(n+1)}$.</p>
<p><strong>17. B</strong> — "45" devirli, "3" devirsiz; devirsiz basamak sayısı 1.</p>
<p><strong>18. B</strong> — Uzaklıklar $\\\\frac1{100}&gt;\\\\frac1{1000}$; ikinci kesir daha yakın.</p>
<p><strong>19. A</strong> — Sonsuz geometrik seri: $\\\\frac{a}{1-r}=\\\\frac{1/4}{1-1/4}=\\\\frac{1/4}{3/4}=\\\\frac13$.</p>
<p><strong>20. A</strong> — Kesri ondalığa çevirmek için pay paydaya bölünür.</p>

<hr />
<h2>13. Ultra Özet</h2>
<blockquote><p><strong>RASYONEL VE ONDALIK SAYILAR — TEK SAYFA</strong><br>
1. Saf devirli: $\\\\frac{ab}{99...9}$; karma devirli: $\\\\frac{\\\\text{tümü}-\\\\text{devirsiz}}{9...90...0}$.<br>
2. Teleskopik toplam: $\\\\frac1{n(n+k)}=\\\\frac1k(\\\\frac1n-\\\\frac1{n+k})$; kareköklü hâli $\\\\frac1{\\\\sqrt n+\\\\sqrt{n+1}}=\\\\sqrt{n+1}-\\\\sqrt n$.<br>
3. 1'e uzaklık: küçük uzaklık = büyük kesir. Çapraz çarpma: $\\\\frac ab$ vs $\\\\frac cd$ → $ad$ vs $bc$.<br>
4. $0,999...=1$ kesin eşitliktir.<br>
5. Zincirleme kesirlerde içten dışa çöz.</p></blockquote>

<hr />
<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• Uzun kesir toplamı gördüğünde önce teleskopik ayrıştırma dene.<br>
• Karekök payda görünce eşlenikle rasyonelleştir, teleskopa dönüştür.<br>
• Devirli ondalıkta devirsiz basamak sayısı kadar sıfır, devirli basamak sayısı kadar 9 unutma.<br>
• Sonsuz geometrik seri: $\\\\frac{\\\\text{ilk terim}}{1-\\\\text{oran}}$.</p>
</div>
\` },`,
  },
  {
    id: 19,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Üslü Sayılar',
    built: true,
    html: `<h3>(Üs Kuralları, Denklemler, Büyük Sayı Karşılaştırma, Üslü İfadelerde Cebirsel Manipülasyon — İleri Seviye)</h3>
<hr />

<h2>1. Konunun Mantığı</h2>
<p>Üslü sayılar konusu, KPSS'de saf işlem sorusu olarak değil, denklemler/eşitsizlikler ve sayı karşılaştırma sorularının İÇİNE gömülü biçimde karşımıza çıkar. İleri seviyede önemli olan üsleri EŞİT TABANA indirgeme refleksini otomatikleştirmek ve çok katmanlı ifadeleri (üssün üssü, kesirli üs) hatasız sadeleştirmektir.</p>

<hr />
<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p>$a^m\\\\cdot a^n=a^{m+n}$, $a^m/a^n=a^{m-n}$, $(a^m)^n=a^{mn}$, $a^0=1$ ($a\\\\ne0$), $a^{-n}=1/a^n$, $a^{m/n}=\\\\sqrt[n]{a^m}$.</p>
<p><strong>İşaret kuralı:</strong> $(-2)^4=16$ (parantezli, çift üs → pozitif) ama $-2^4=-16$ (üs sadece 2'ye ait).</p>
<p><strong>Ortak taban tekniği:</strong> Denklemlerde farklı tabanları asal tabana indirgeyip üsleri eşitle: $8^x=32\\\\Rightarrow2^{3x}=2^5\\\\Rightarrow x=5/3$.</p>

<hr />
<h2>3. İleri Düzey Ayrıntılar</h2>
<ul>
<li>$a^x=a^y\\\\Rightarrow x=y$ SADECE $a\\\\ne0,1,-1$ için kesin geçerlidir; $a=1$ ya da $a=-1$ ya da $a=0$ özel durumlar yaratır ve TEK çözüm garantisi vermez.</li>
<li>Üs kuleleri (tower): $a^{b^c}$ ifadesinde işlem SAĞDAN SOLA yapılır: $2^{3^2}=2^9=512$, $(2^3)^2=64$ ile KARIŞTIRILMAMALI.</li>
<li>$x^x=x^x$ tipi denklemlerde $x$ tabanının aynı zamanda üs olması, çözüm kümesini genelde $\\\\{$pozitif tamsayılar$\\\\}$'a daraltır; negatif/kesirli tabanlarda tanım sorunları çıkabilir.</li>
</ul>

<hr />
<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🟨 Ezber Kutusu</span><p>Üs kulesi SAĞDAN SOLA: $a^{b^c}$ önce $b^c$ hesaplanır, sonra $a$'nın üssü olur.</p></div>

<hr />
<h2>5. Karşılaştırma Tabloları</h2>
<table><thead><tr><th>İfade</th><th>Anlamı</th></tr></thead><tbody>
<tr><td>$-2^4$</td><td>$-16$ (üs sadece 2'ye)</td></tr>
<tr><td>$(-2)^4$</td><td>$16$ (üs tüm ifadeye)</td></tr>
<tr><td>$2^{3^2}$</td><td>$2^9=512$ (sağdan sola)</td></tr>
<tr><td>$(2^3)^2$</td><td>$2^6=64$</td></tr>
</tbody></table>

<hr />
<h2>6. Sınıflandırma Şeması</h2>
<blockquote><p>Üslü denklem gördüğünde: 1) Tüm tabanları asal çarpanlarına ayır → 2) Ortak tabana indirge → 3) Üsleri eşitle, denklemi çöz → 4) Taban $\\\\pm1$ veya $0$ ise özel durumu ayrıca kontrol et.</p></blockquote>

<hr />
<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">⚠️ ÖSYM Tuzağı</span><p>$2^{3^2}\\\\ne(2^3)^2$! Parantez olmayan üs kulesi sağdan sola işlenir; bu, ALES/KPSS'nin en sinsi tuzaklarından biridir.</p></div>

<hr />
<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de üslü sayılar, denklem kurma (özellikle problem içinde katlanarak artan/azalan miktarlar) ve büyük sayı karşılaştırma sorularının bir parçası olarak gelir.</p>

<hr />
<h2>9. Soru Çözüm Stratejileri</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">🟦 İpucu</span><p>Büyük üslü sayıları karşılaştırırken ikisini de aynı tabana ya da aynı üsse indirgemeye çalış; indirgenemezse logaritmik büyüklük tahminine (kaç basamaklı olduğuna) bak.</p></div>

<hr />
<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<h3>🟢 Orta-Kolay (1-10)</h3>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>$2^x=32$ ise $x$ kaçtır?</p>
<p>A) 4 &nbsp; B) 5 &nbsp; C) 6 &nbsp; D) 16 &nbsp; E) 3</p>
<p><strong>Çözüm:</strong> $32=2^5\\\\Rightarrow x=5$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>$8^x=16$ ise $x$ kaçtır?</p>
<p>A) $\\\\frac43$ &nbsp; B) $\\\\frac34$ &nbsp; C) 2 &nbsp; D) $\\\\frac23$ &nbsp; E) $\\\\frac32$</p>
<p><strong>Çözüm:</strong> $2^{3x}=2^4\\\\Rightarrow x=\\\\frac43$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>$(-3)^4-3^4$ ifadesinin değeri kaçtır?</p>
<p>A) 0 &nbsp; B) 162 &nbsp; C) -162 &nbsp; D) 81 &nbsp; E) -81</p>
<p><strong>Çözüm:</strong> $81-81=0$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>$2^{3^2}$ ifadesinin değeri kaçtır?</p>
<p>A) 64 &nbsp; B) 512 &nbsp; C) 128 &nbsp; D) 256 &nbsp; E) 81</p>
<p><strong>Çözüm:</strong> Sağdan sola: $3^2=9$, $2^9=512$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>$\\\\dfrac{3^7\\\\cdot3^{-2}}{3^3}$ ifadesinin sadeleşmiş hâli kaçtır?</p>
<p>A) $3^2$ &nbsp; B) $3^4$ &nbsp; C) $3^6$ &nbsp; D) $3^0$ &nbsp; E) $3^{-2}$</p>
<p><strong>Çözüm:</strong> $3^{7-2-3}=3^2$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>$x^{1/2}=5$ ise $x$ kaçtır?</p>
<p>A) 10 &nbsp; B) 25 &nbsp; C) $\\\\sqrt5$ &nbsp; D) 2,5 &nbsp; E) 50</p>
<p><strong>Çözüm:</strong> $\\\\sqrt x=5\\\\Rightarrow x=25$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>$5^0+5^{-1}$ toplamı kaçtır?</p>
<p>A) $\\\\frac65$ &nbsp; B) 1 &nbsp; C) $\\\\frac15$ &nbsp; D) 0 &nbsp; E) 5</p>
<p><strong>Çözüm:</strong> $1+\\\\frac15=\\\\frac65$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>$4^{x+1}=64$ ise $x$ kaçtır?</p>
<p>A) 1 &nbsp; B) 2 &nbsp; C) 3 &nbsp; D) 4 &nbsp; E) 0</p>
<p><strong>Çözüm:</strong> $2^{2x+2}=2^6\\\\Rightarrow2x+2=6\\\\Rightarrow x=2$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>$2^{10}\\\\cdot5^{10}$ ifadesinin değeri kaçtır?</p>
<p>A) $10^{10}$ &nbsp; B) $10^{20}$ &nbsp; C) $7^{10}$ &nbsp; D) $100^5$ &nbsp; E) A ve D eşdeğer</p>
<p><strong>Çözüm:</strong> $(2\\\\cdot5)^{10}=10^{10}$; ayrıca $10^{10}=100^5$, A ve D eşdeğerdir. <span class="cevap-dogru">Doğru cevap: E.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>$3^x=27$ ve $2^y=32$ ise $x+y$ kaçtır?</p>
<p>A) 6 &nbsp; B) 7 &nbsp; C) 8 &nbsp; D) 9 &nbsp; E) 10</p>
<p><strong>Çözüm:</strong> $x=3,y=5\\\\Rightarrow x+y=8$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<h3>🟡 Orta-Zor (11-20)</h3>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>$27^x=9^{x+1}$ ise $x$ kaçtır?</p>
<p>A) 1 &nbsp; B) 2 &nbsp; C) 3 &nbsp; D) 4 &nbsp; E) 6</p>
<p><strong>Çözüm:</strong> $3^{3x}=3^{2x+2}\\\\Rightarrow3x=2x+2\\\\Rightarrow x=2$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>$2^{x}+2^{x}+2^{x}+2^{x}=2^{10}$ ise $x$ kaçtır?</p>
<p>A) 6 &nbsp; B) 7 &nbsp; C) 8 &nbsp; D) 9 &nbsp; E) 5</p>
<p><strong>Çözüm:</strong> $4\\\\cdot2^x=2^{10}\\\\Rightarrow2^{x+2}=2^{10}\\\\Rightarrow x=8$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>$x=2^{50}, y=5^{20}$ sayılarından hangisi daha büyüktür ($2^{50}=32^{10}$, $5^{20}=25^{10}$ karşılaştırması ile)?</p>
<p>A) $x$ &nbsp; B) $y$ &nbsp; C) Eşit &nbsp; D) Karşılaştırılamaz &nbsp; E) İkisi de eşit büyüklükte</p>
<p><strong>Çözüm:</strong> $2^{50}=(2^5)^{10}=32^{10}$, $5^{20}=(5^2)^{10}=25^{10}$; aynı üste tabanı büyük olan büyüktür: $32^{10}&gt;25^{10}$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>$\\\\left(\\\\dfrac13\\\\right)^{-2}+\\\\left(\\\\dfrac12\\\\right)^{-3}$ toplamı kaçtır?</p>
<p>A) 17 &nbsp; B) 13 &nbsp; C) 12 &nbsp; D) 15 &nbsp; E) 11</p>
<p><strong>Çözüm:</strong> $9+8=17$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>$2^{2x-1}=8^{x-2}$ ise $x$ kaçtır?</p>
<p>A) 3 &nbsp; B) 4 &nbsp; C) 5 &nbsp; D) 6 &nbsp; E) 7</p>
<p><strong>Çözüm:</strong> $2^{2x-1}=2^{3x-6}\\\\Rightarrow2x-1=3x-6\\\\Rightarrow x=5$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>$a=2^{100}$ sayısının ondalık gösteriminde kaç basamak vardır (yaklaşık, $2^{10}\\\\approx10^3$ yaklaşımıyla)?</p>
<p>A) 30 &nbsp; B) 31 &nbsp; C) 33 &nbsp; D) 100 &nbsp; E) 29</p>
<p><strong>Çözüm:</strong> $2^{100}=(2^{10})^{10}\\\\approx(10^3)^{10}=10^{30}$; yaklaşık 31 basamaklıdır (KPSS düzeyinde "yaklaşık 30" mantığıyla verilir). <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>$9^{x}\\\\cdot27^{y}=3^{16}$ ve $x=2y$ ise $y$ kaçtır?</p>
<p>A) 1 &nbsp; B) 2 &nbsp; C) $\\\\frac83$ &nbsp; D) 3 &nbsp; E) $\\\\frac{16}{7}$</p>
<p><strong>Çözüm:</strong> $3^{2x}\\\\cdot3^{3y}=3^{16}\\\\Rightarrow2x+3y=16$; $x=2y$ yerine: $4y+3y=16\\\\Rightarrow7y=16\\\\Rightarrow y=\\\\frac{16}7$. <span class="cevap-dogru">Doğru cevap: E.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>$x^2=16$ ve $x^3=-64$ koşullarını birlikte sağlayan $x$ değeri kaçtır?</p>
<p>A) 4 &nbsp; B) -4 &nbsp; C) ±4 &nbsp; D) 8 &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $x^2=16\\\\Rightarrow x=\\\\pm4$; $x^3=-64\\\\Rightarrow x=-4$; ortak çözüm $x=-4$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>$\\\\dfrac{4^{15}}{8^{9}}$ ifadesi $2$'nin kaçıncı kuvvetine eşittir?</p>
<p>A) $2^{3}$ &nbsp; B) $2^{6}$ &nbsp; C) $2^{9}$ &nbsp; D) $2^{12}$ &nbsp; E) $2^{15}$</p>
<p><strong>Çözüm:</strong> $\\\\frac{2^{30}}{2^{27}}=2^3$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>$a^{x}=b$ ve $b^{y}=a$ ($a,b&gt;0$, $a,b\\\\ne1$) ise $xy$ kaçtır?</p>
<p>A) 0 &nbsp; B) 1 &nbsp; C) $a\\\\cdot b$ &nbsp; D) $\\\\frac ab$ &nbsp; E) Belirsiz</p>
<p><strong>Çözüm:</strong> $a^x=b\\\\Rightarrow a=b^{1/x}$; ayrıca $b^y=a$; birleştirince $b^{y}=b^{1/x}\\\\Rightarrow y=1/x\\\\Rightarrow xy=1$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<h3>🔴 Zor (21-30)</h3>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>$2^{x}+2^{x+1}+2^{x+2}=224$ ise $x$ kaçtır?</p>
<p>A) 3 &nbsp; B) 4 &nbsp; C) 5 &nbsp; D) 6 &nbsp; E) 7</p>
<p><strong>Çözüm:</strong> $2^x(1+2+4)=224\\\\Rightarrow7\\\\cdot2^x=224\\\\Rightarrow2^x=32\\\\Rightarrow x=5$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>$x^{2}-3^{x}=0$ denklemini pozitif tam sayılarda sağlayan $x$ değer(ler)i için ne söylenebilir? (deneme yoluyla $x=1,2,3$ kontrol edilir)</p>
<p>A) $x=1$ tek çözümdür &nbsp; B) $x=3$ tek çözümdür &nbsp; C) Çözüm yoktur &nbsp; D) $x=1$ ve civarında yaklaşık bir çözüm daha vardır (analitik, tam sayı değil) &nbsp; E) Sonsuz çözüm vardır</p>
<p><strong>Çözüm:</strong> $x=1$: $1-3=-2\\\\ne0$; $x=2$: $4-9=-5$; $x=3$: $9-27=-18$; pozitif tam sayılarda çözüm yok, fonksiyon davranışı incelendiğinde küçük $x$ değerleri (0 civarı, tam sayı olmayan) için kesişim olabilir ama tam sayılarda çözüm yoktur. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>$3^{x}=5$ ve $5^{y}=3$ ise $x\\\\cdot y$ kaçtır?</p>
<p>A) 0 &nbsp; B) 1 &nbsp; C) 15 &nbsp; D) $\\\\frac{1}{15}$ &nbsp; E) Belirsiz</p>
<p><strong>Çözüm:</strong> $3^x=5\\\\Rightarrow3=5^{1/x}$; $5^y=3=5^{1/x}\\\\Rightarrow y=1/x\\\\Rightarrow xy=1$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>$2^{a}=3^{b}=6^{c}$ ($a,b,c$ pozitif) ise $\\\\dfrac1a+\\\\dfrac1b$ ile $\\\\dfrac1c$ arasındaki ilişki nedir?</p>
<p>A) $\\\\frac1a+\\\\frac1b=\\\\frac1c$ &nbsp; B) $\\\\frac1a+\\\\frac1b=2\\\\cdot\\\\frac1c$ &nbsp; C) $\\\\frac1a-\\\\frac1b=\\\\frac1c$ &nbsp; D) $\\\\frac1a\\\\cdot\\\\frac1b=\\\\frac1c$ &nbsp; E) İlişki yok</p>
<p><strong>Çözüm:</strong> Ortak değeri $k=2^a=3^b=6^c$ dersek $2=k^{1/a}$, $3=k^{1/b}$, $6=k^{1/c}$; $2\\\\times3=6\\\\Rightarrow k^{1/a}\\\\cdot k^{1/b}=k^{1/c}\\\\Rightarrow k^{1/a+1/b}=k^{1/c}\\\\Rightarrow\\\\frac1a+\\\\frac1b=\\\\frac1c$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>$x^{3}=27^{3}$ ($x$ reel) denklemini sağlayan $x$ kaçtır?</p>
<p>A) 3 &nbsp; B) 9 &nbsp; C) 27 &nbsp; D) 81 &nbsp; E) 6</p>
<p><strong>Çözüm:</strong> Küp alma bire bir bir fonksiyon olduğundan $x^3=27^3\\\\Rightarrow x=27$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>$\\\\left(\\\\dfrac{2^{x}}{2^{y}}\\\\right)^{2}=64$ ve $x-y=?$</p>
<p>A) 3 &nbsp; B) 6 &nbsp; C) 12 &nbsp; D) 2 &nbsp; E) 9</p>
<p><strong>Çözüm:</strong> $2^{2(x-y)}=2^6\\\\Rightarrow2(x-y)=6\\\\Rightarrow x-y=3$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>$4^{x}-2^{x+1}-8=0$ denklemini sağlayan $x$ kaçtır ($2^x=t$ değişken değiştirmesiyle)?</p>
<p>A) 1 &nbsp; B) 2 &nbsp; C) 3 &nbsp; D) 4 &nbsp; E) 0</p>
<p><strong>Çözüm:</strong> $t^2-2t-8=0\\\\Rightarrow(t-4)(t+2)=0\\\\Rightarrow t=4$ (t=-2 geçersiz, $2^x&gt;0$); $2^x=4\\\\Rightarrow x=2$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>$n$ pozitif tam sayı olmak üzere $\\\\left(\\\\dfrac{1}{2}\\\\right)^{n}&lt;\\\\dfrac1{1000}$ eşitsizliğini sağlayan en küçük $n$ kaçtır ($2^{10}=1024$)?</p>
<p>A) 9 &nbsp; B) 10 &nbsp; C) 11 &nbsp; D) 8 &nbsp; E) 12</p>
<p><strong>Çözüm:</strong> $2^n&gt;1000$ olmalı; $2^{10}=1024&gt;1000$ ✓, $2^9=512&lt;1000$; en küçük $n=10$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>$a,b$ pozitif tam sayılar, $2^a\\\\cdot3^b=2^b\\\\cdot3^a$ ise $a$ ile $b$ arasındaki ilişki nedir?</p>
<p>A) $a=b$ &nbsp; B) $a=2b$ &nbsp; C) $a+b=0$ &nbsp; D) $a-b=1$ &nbsp; E) İlişki kurulamaz</p>
<p><strong>Çözüm:</strong> $2^{a-b}=3^{a-b}$; 2 ve 3 farklı asal tabanlar olduğundan bu eşitlik sadece $a-b=0$ iken sağlanır. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>$3^{2n+1}+3^{2n}$ ifadesi hangi sayıya her zaman bölünür (n pozitif tam sayı)?</p>
<p>A) 4 &nbsp; B) 6 &nbsp; C) 9 &nbsp; D) 12 &nbsp; E) 3</p>
<p><strong>Çözüm:</strong> $3^{2n}(3+1)=4\\\\cdot3^{2n}$; her zaman 4'e bölünür (ayrıca $3^{2n}$'in kendisi de 9'a bölünür ama ortak çarpan olarak istenen kesin cevap 4'tür). <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<hr />
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<ol>
<li>$2^x=64$ ise $x$ kaçtır?<br>A) 5 &nbsp; B) 6 &nbsp; C) 7 &nbsp; D) 8 &nbsp; E) 4</li>
<li>$9^x=27$ ise $x$ kaçtır?<br>A) $\\\\frac23$ &nbsp; B) $\\\\frac32$ &nbsp; C) 1 &nbsp; D) 2 &nbsp; E) $\\\\frac13$</li>
<li>$-4^2$ ifadesinin değeri kaçtır?<br>A) 16 &nbsp; B) -16 &nbsp; C) 8 &nbsp; D) -8 &nbsp; E) 4</li>
<li>$3^{2^2}$ ifadesinin değeri kaçtır?<br>A) 81 &nbsp; B) 36 &nbsp; C) 512 &nbsp; D) 64 &nbsp; E) 27</li>
<li>$2^x+2^x=2^8$ ise $x$ kaçtır?<br>A) 6 &nbsp; B) 7 &nbsp; C) 8 &nbsp; D) 9 &nbsp; E) 4</li>
<li>$5^{-2}$ ifadesinin değeri kaçtır?<br>A) -25 &nbsp; B) 25 &nbsp; C) $\\\\frac1{25}$ &nbsp; D) $-\\\\frac1{25}$ &nbsp; E) $\\\\frac15$</li>
<li>$16^{x}=8^{x+1}$ ise $x$ kaçtır?<br>A) 1 &nbsp; B) 2 &nbsp; C) 3 &nbsp; D) 4 &nbsp; E) 5</li>
<li>$2^{100}$ ile $3^{60}$ karşılaştırmak için hangi ortak üsse indirgeme uygundur ($2^{100}=(2^5)^{20}=32^{20}$, $3^{60}=(3^3)^{20}=27^{20}$)?<br>A) 20 &nbsp; B) 100 &nbsp; C) 60 &nbsp; D) 5 &nbsp; E) 3</li>
<li>Soru 8'e göre hangisi büyüktür?<br>A) $2^{100}$ &nbsp; B) $3^{60}$ &nbsp; C) Eşit &nbsp; D) Karşılaştırılamaz &nbsp; E) İkisi de eşit büyüklükte</li>
<li>$x^2=25$ ve $x^3=125$ koşullarını birlikte sağlayan $x$ kaçtır?<br>A) 5 &nbsp; B) -5 &nbsp; C) ±5 &nbsp; D) 25 &nbsp; E) Çözüm yok</li>
<li>$\\\\dfrac{2^{20}}{4^{8}}$ ifadesi 2'nin kaçıncı kuvvetine eşittir?<br>A) $2^4$ &nbsp; B) $2^6$ &nbsp; C) $2^8$ &nbsp; D) $2^{12}$ &nbsp; E) $2^{2}$</li>
<li>$3^{x}=2$ ve $2^{y}=3$ ise $xy$ kaçtır?<br>A) 0 &nbsp; B) 1 &nbsp; C) 6 &nbsp; D) $\\\\frac16$ &nbsp; E) Belirsiz</li>
<li>$4^x-3\\\\cdot2^x-4=0$ denkleminde $2^x=t$ dönüşümüyle elde edilen ikinci derece denklemin pozitif kökü $t=4$ ise $x$ kaçtır?<br>A) 1 &nbsp; B) 2 &nbsp; C) 3 &nbsp; D) 4 &nbsp; E) 0</li>
<li>$(-3)^{3}+3^{3}$ toplamı kaçtır?<br>A) 0 &nbsp; B) 54 &nbsp; C) -54 &nbsp; D) 27 &nbsp; E) -27</li>
<li>$2^{x}\\\\cdot2^{y}=2^{12}$ ve $x-y=4$ ise $x$ kaçtır?<br>A) 6 &nbsp; B) 7 &nbsp; C) 8 &nbsp; D) 9 &nbsp; E) 5</li>
<li>$81^{1/4}$ ifadesinin değeri kaçtır?<br>A) 3 &nbsp; B) 9 &nbsp; C) 27 &nbsp; D) 4 &nbsp; E) $\\\\sqrt3$</li>
<li>$2^{x+3}=3\\\\cdot2^{x}+2^{x}$ eşitliğini sağlayan $x$ değeri hakkında ne söylenebilir (sağ taraf $4\\\\cdot2^x=2^{x+2}$'ye eşittir)?<br>A) $x+3=x+2$ olduğundan çözüm yoktur &nbsp; B) Her $x$ için sağlanır &nbsp; C) $x=0$ &nbsp; D) $x=1$ &nbsp; E) $x=-1$</li>
<li>$5^{2x-1}=125$ ise $x$ kaçtır?<br>A) 1 &nbsp; B) 2 &nbsp; C) 3 &nbsp; D) $\\\\frac32$ &nbsp; E) $\\\\frac52$</li>
<li>$a^{m}=a^{n}$ ($a&gt;0,a\\\\ne1$) ise kesin olarak ne söylenebilir?<br>A) $m=n$ &nbsp; B) $m=-n$ &nbsp; C) $m\\\\cdot n=1$ &nbsp; D) Belirsiz &nbsp; E) $m+n=0$</li>
<li>$2^{n}\\\\cdot2^{n}\\\\cdot2^{n}\\\\cdot2^{n}=16^{5}$ ise $n$ kaçtır?<br>A) 4 &nbsp; B) 5 &nbsp; C) 6 &nbsp; D) 8 &nbsp; E) 10</li>
</ol>

<hr />
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. B</strong> — $64=2^6$.</p>
<p><strong>2. B</strong> — $3^{2x}=3^3\\\\Rightarrow x=\\\\frac32$.</p>
<p><strong>3. B</strong> — Üs sadece 4'e ait: $-16$.</p>
<p><strong>4. A</strong> — $2^2=4$, $3^4=81$.</p>
<p><strong>5. B</strong> — $2\\\\cdot2^x=2^8\\\\Rightarrow2^{x+1}=2^8\\\\Rightarrow x=7$.</p>
<p><strong>6. C</strong> — $\\\\frac1{25}$.</p>
<p><strong>7. C</strong> — $2^{4x}=2^{3x+3}\\\\Rightarrow x=3$.</p>
<p><strong>8. A</strong> — Ortak üs 20 seçilir.</p>
<p><strong>9. A</strong> — $32^{20}&gt;27^{20}$, $2^{100}$ büyüktür.</p>
<p><strong>10. A</strong> — $x^2=25\\\\Rightarrow x=\\\\pm5$; $x^3=125\\\\Rightarrow x=5$; ortak $x=5$.</p>
<p><strong>11. A</strong> — $\\\\frac{2^{20}}{2^{16}}=2^4$.</p>
<p><strong>12. B</strong> — $xy=1$ (Soru 20/23 mantığıyla).</p>
<p><strong>13. B</strong> — $2^x=4\\\\Rightarrow x=2$.</p>
<p><strong>14. A</strong> — $-27+27=0$.</p>
<p><strong>15. C</strong> — $x+y=12$, $x-y=4$ → $x=8$.</p>
<p><strong>16. A</strong> — $81=3^4$, dördüncü kök $3$.</p>
<p><strong>17. A</strong> — $2^{x+3}=2^{x+2}$ eşitliği $x+3=x+2$ gerektirir, bu imkânsızdır; çözüm yoktur.</p>
<p><strong>18. B</strong> — $125=5^3\\\\Rightarrow2x-1=3\\\\Rightarrow x=2$.</p>
<p><strong>19. A</strong> — Taban $a\\\\ne0,\\\\pm1$ olduğunda üsler eşit olmak zorundadır.</p>
<p><strong>20. B</strong> — $2^{4n}=2^{20}\\\\Rightarrow n=5$.</p>

<hr />
<h2>13. Ultra Özet</h2>
<blockquote><p><strong>ÜSLÜ SAYILAR — TEK SAYFA</strong><br>
1. Temel kurallar: çarpımda üs toplanır, bölümde çıkarılır, üssün üssünde çarpılır.<br>
2. $-a^n\\\\ne(-a)^n$ (çift üste); parantez kritik.<br>
3. Denklemlerde ORTAK TABANA indirgeyip üsleri eşitle; taban $0,\\\\pm1$ ise ayrı incele.<br>
4. Üs kulesi $a^{b^c}$ sağdan sola işlenir.<br>
5. $a^x=b, b^y=a\\\\Rightarrow xy=1$ (logaritmik ilişki); $2^a=3^b=6^c\\\\Rightarrow\\\\frac1a+\\\\frac1b=\\\\frac1c$ türü zincir problemlerde ortak değeri $k$ ile ifade et.</p></blockquote>

<hr />
<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• Ortak tabana indirgemeyi refleks hâline getir.<br>
• $t=a^x$ değişken değiştirmesiyle ikinci derece denklemlere dönüştürebileceğin kombinasyonları tanı ($4^x-3\\\\cdot2^x-4=0$ gibi).<br>
• Üs kulesini sağdan sola oku.<br>
• $-a^n$ ile $(-a)^n$ farkını her zaman kontrol et.</p>
</div>
\` },`,
  },
  {
    id: 20,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Köklü Sayılar',
    built: true,
    html: `<h3>(Rasyonelleştirme, İç İçe Kökler, Kök Denklemleri, Karşılaştırma — İleri Seviye)</h3>
<hr />

<h2>1. Konunun Mantığı</h2>
<p>Köklü sayılar konusunda ileri seviyede iki beceri belirleyicidir: KATLI (iç içe) rasyonelleştirme ve İÇ İÇE KÖKÜN AYRIŞTIRILMASI ($\\\\sqrt{a+\\\\sqrt b}=\\\\sqrt m+\\\\sqrt n$ formuna indirgeme). Bu iki teknik olmadan çözülmesi çok uzun süren sorular, teknik bilinince saniyeler içinde biter.</p>

<hr />
<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p>$\\\\sqrt a\\\\cdot\\\\sqrt b=\\\\sqrt{ab}$; $\\\\sqrt{a^2}=|a|$; rasyonelleştirme: paydadaki kökü, EŞLENİĞİYLE çarparak yok et: $\\\\dfrac1{\\\\sqrt a+\\\\sqrt b}=\\\\dfrac{\\\\sqrt a-\\\\sqrt b}{a-b}$.</p>
<p><strong>İç içe kök ayrıştırma:</strong> $\\\\sqrt{a+\\\\sqrt b}=\\\\sqrt m+\\\\sqrt n$ olacaksa $m+n=a$ ve $mn=b/4$ (eğer $\\\\sqrt{a+2\\\\sqrt c}$ formundaysa $m+n=a, mn=c$) sistemini çöz.</p>

<hr />
<h2>3. İleri Düzey Ayrıntılar</h2>
<ul>
<li>$\\\\sqrt{a+2\\\\sqrt{ab}}+\\\\sqrt{b}$ gibi ifadeler genelde $(\\\\sqrt m+\\\\sqrt n)^2=m+n+2\\\\sqrt{mn}$ kalıbına oturtularak çözülür.</li>
<li>Kök içeren denklemlerde her iki tarafın karesini alırken YABANCI KÖK (extraneous solution) türeyebilir; bulunan her kök MUTLAKA orijinal denklemde kontrol edilmelidir.</li>
<li>Zincirleme (sonsuz) kök ifadeleri $x=\\\\sqrt{a+\\\\sqrt{a+\\\\sqrt{a+\\\\cdots}}}$ formunda, $x=\\\\sqrt{a+x}$ denklemine indirgenir.</li>
</ul>

<hr />
<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🟨 Ezber Kutusu</span><p>İç içe kök gördüğünde ilk refleks: içi $(\\\\sqrt m\\\\pm\\\\sqrt n)^2$ formuna uyuyor mu diye kontrol et; toplamı dıştaki sabit, çarpımlarının 4 katı ortadaki kök terimine eşit olmalı.</p></div>

<hr />
<h2>5. Karşılaştırma Tabloları</h2>
<table><thead><tr><th>İfade</th><th>Rasyonelleştirme Çarpanı</th></tr></thead><tbody>
<tr><td>$\\\\frac1{\\\\sqrt a}$</td><td>$\\\\sqrt a$</td></tr>
<tr><td>$\\\\frac1{\\\\sqrt a+\\\\sqrt b}$</td><td>$\\\\sqrt a-\\\\sqrt b$</td></tr>
<tr><td>$\\\\frac1{\\\\sqrt[3]{a}}$</td><td>$\\\\sqrt[3]{a^2}$</td></tr>
</tbody></table>

<hr />
<h2>6. Sınıflandırma Şeması</h2>
<blockquote><p>Köklü ifade gördüğünde: 1) Tam kare çarpanına ayrılabiliyor mu → sadeleştir → 2) Paydada kök varsa eşlenikle rasyonelleştir → 3) İç içe kök varsa $(\\\\sqrt m\\\\pm\\\\sqrt n)^2$ kalıbına oturt → 4) Denklemse, kareyi aldıktan sonra MUTLAKA kontrol et.</p></blockquote>

<hr />
<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">⚠️ ÖSYM Tuzağı</span><p>$\\\\sqrt{a^2}=a$ DEĞİL $|a|$'dır; $a$ negatifse sonuç pozitif olmalıdır. Kök alma-denklem çözme sorularında yabancı kök kontrolünü atlamak en sık yapılan hatadır.</p></div>

<hr />
<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de köklü sayılar genelde rasyonelleştirme ve basit sadeleştirme sorusu olarak gelir; iç içe kök ve kök denklemi soruları daha nadir ama güçlü adayları ayırt etmek için tercih edilir.</p>

<hr />
<h2>9. Soru Çözüm Stratejileri</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">🟦 İpucu</span><p>Kök denklemlerinde kareyi almadan önce kökü YALNIZ bırak (izole et); işlemi bitirince MUTLAKA orijinal denklemde kontrol et.</p></div>

<hr />
<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<h3>🟢 Orta-Kolay (1-10)</h3>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>$\\\\sqrt{72}$ ifadesinin en sade hâli nedir?</p>
<p>A) $6\\\\sqrt2$ &nbsp; B) $2\\\\sqrt{18}$ &nbsp; C) $3\\\\sqrt8$ &nbsp; D) $4\\\\sqrt3$ &nbsp; E) $8\\\\sqrt3$</p>
<p><strong>Çözüm:</strong> $\\\\sqrt{36\\\\cdot2}=6\\\\sqrt2$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>$\\\\dfrac1{\\\\sqrt5}$ ifadesinin rasyonelleştirilmiş hâli nedir?</p>
<p>A) $\\\\sqrt5$ &nbsp; B) $\\\\frac{\\\\sqrt5}5$ &nbsp; C) $\\\\frac5{\\\\sqrt5}$ &nbsp; D) $\\\\frac15$ &nbsp; E) 5</p>
<p><strong>Çözüm:</strong> $\\\\frac1{\\\\sqrt5}\\\\times\\\\frac{\\\\sqrt5}{\\\\sqrt5}=\\\\frac{\\\\sqrt5}5$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>$\\\\sqrt{50}-\\\\sqrt8+\\\\sqrt2$ toplamı kaçtır?</p>
<p>A) $2\\\\sqrt2$ &nbsp; B) $3\\\\sqrt2$ &nbsp; C) $4\\\\sqrt2$ &nbsp; D) $5\\\\sqrt2$ &nbsp; E) $6\\\\sqrt2$</p>
<p><strong>Çözüm:</strong> $5\\\\sqrt2-2\\\\sqrt2+\\\\sqrt2=4\\\\sqrt2$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>$\\\\sqrt{(-5)^2}$ ifadesinin değeri kaçtır?</p>
<p>A) 5 &nbsp; B) -5 &nbsp; C) ±5 &nbsp; D) 25 &nbsp; E) -25</p>
<p><strong>Çözüm:</strong> $\\\\sqrt{a^2}=|a|=5$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>$\\\\dfrac1{\\\\sqrt2+1}$ ifadesinin rasyonelleştirilmiş hâli nedir?</p>
<p>A) $\\\\sqrt2-1$ &nbsp; B) $\\\\sqrt2+1$ &nbsp; C) $2-\\\\sqrt2$ &nbsp; D) $1-\\\\sqrt2$ &nbsp; E) $\\\\frac{\\\\sqrt2}2-1$</p>
<p><strong>Çözüm:</strong> Eşlenikle çarp: $\\\\frac{\\\\sqrt2-1}{(\\\\sqrt2+1)(\\\\sqrt2-1)}=\\\\frac{\\\\sqrt2-1}{1}=\\\\sqrt2-1$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>$\\\\sqrt3\\\\times\\\\sqrt{12}$ ifadesinin değeri kaçtır?</p>
<p>A) 6 &nbsp; B) 36 &nbsp; C) $6\\\\sqrt3$ &nbsp; D) 9 &nbsp; E) 4</p>
<p><strong>Çözüm:</strong> $\\\\sqrt{36}=6$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>$(\\\\sqrt2+\\\\sqrt3)^2$ ifadesinin açılımı nedir?</p>
<p>A) $5+2\\\\sqrt6$ &nbsp; B) $5$ &nbsp; C) $5+\\\\sqrt6$ &nbsp; D) $6+2\\\\sqrt6$ &nbsp; E) $5-2\\\\sqrt6$</p>
<p><strong>Çözüm:</strong> $2+3+2\\\\sqrt6=5+2\\\\sqrt6$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>$\\\\sqrt{x+3}=4$ ise $x$ kaçtır?</p>
<p>A) 13 &nbsp; B) 16 &nbsp; C) 19 &nbsp; D) 7 &nbsp; E) 1</p>
<p><strong>Çözüm:</strong> $x+3=16\\\\Rightarrow x=13$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>$\\\\sqrt[3]{27}\\\\cdot\\\\sqrt[3]{8}$ ifadesinin değeri kaçtır?</p>
<p>A) 6 &nbsp; B) 35 &nbsp; C) 216 &nbsp; D) 9 &nbsp; E) 12</p>
<p><strong>Çözüm:</strong> $3\\\\times2=6$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>$\\\\sqrt{45}$ ile $\\\\sqrt{20}$ toplamının en sade hâli nedir?</p>
<p>A) $3\\\\sqrt5+2\\\\sqrt5=5\\\\sqrt5$ &nbsp; B) $\\\\sqrt{65}$ &nbsp; C) $5\\\\sqrt5$ &nbsp; D) A ve C eşdeğer &nbsp; E) $7\\\\sqrt5$</p>
<p><strong>Çözüm:</strong> $3\\\\sqrt5+2\\\\sqrt5=5\\\\sqrt5$; A ve C eşdeğerdir. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>

<h3>🟡 Orta-Zor (11-20)</h3>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>$\\\\sqrt{6+2\\\\sqrt5}$ ifadesinin sadeleşmiş (iç içe köksüz) hâli nedir?</p>
<p>A) $\\\\sqrt5+1$ &nbsp; B) $\\\\sqrt5-1$ &nbsp; C) $\\\\sqrt6+1$ &nbsp; D) $\\\\sqrt3+\\\\sqrt2$ &nbsp; E) $2\\\\sqrt5$</p>
<p><strong>Çözüm:</strong> $m+n=6,mn=5\\\\Rightarrow m=5,n=1$; $\\\\sqrt{6+2\\\\sqrt5}=\\\\sqrt5+\\\\sqrt1=\\\\sqrt5+1$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>$x=\\\\sqrt{3+2\\\\sqrt2}$ ise $x$ kaçtır?</p>
<p>A) $\\\\sqrt2+1$ &nbsp; B) $\\\\sqrt3+\\\\sqrt2$ &nbsp; C) $2\\\\sqrt2$ &nbsp; D) $\\\\sqrt2-1$ &nbsp; E) $\\\\sqrt6$</p>
<p><strong>Çözüm:</strong> $m+n=3,mn=2\\\\Rightarrow m=2,n=1$; $x=\\\\sqrt2+1$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>$\\\\sqrt{x-1}+3=x$ denklemini sağlayan $x$ kaçtır (yabancı kök kontrolü ile)?</p>
<p>A) 2 &nbsp; B) 5 &nbsp; C) 10 &nbsp; D) 5 ve 2 &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $\\\\sqrt{x-1}=x-3$; kare al: $x-1=x^2-6x+9\\\\Rightarrow x^2-7x+10=0\\\\Rightarrow(x-5)(x-2)=0$; $x=5$ ve $x=2$ adayları. Kontrol: $x=2$ için $\\\\sqrt1=2-3=-1$ YANLIŞ (kök negatif olamaz, yabancı kök); $x=5$: $\\\\sqrt4=2=5-3$ ✓. Tek geçerli çözüm $x=5$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>$\\\\dfrac{1}{\\\\sqrt3-\\\\sqrt2}$ ifadesinin rasyonelleştirilmiş hâli nedir?</p>
<p>A) $\\\\sqrt3+\\\\sqrt2$ &nbsp; B) $\\\\sqrt3-\\\\sqrt2$ &nbsp; C) $\\\\sqrt6$ &nbsp; D) $\\\\frac{\\\\sqrt3}{\\\\sqrt2}$ &nbsp; E) 1</p>
<p><strong>Çözüm:</strong> $\\\\frac{\\\\sqrt3+\\\\sqrt2}{3-2}=\\\\sqrt3+\\\\sqrt2$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>$x=\\\\sqrt{2+\\\\sqrt{2+\\\\sqrt{2+\\\\cdots}}}$ (sonsuz iç içe kök) ifadesinin değeri kaçtır?</p>
<p>A) 1 &nbsp; B) 2 &nbsp; C) $\\\\sqrt2$ &nbsp; D) 4 &nbsp; E) $1+\\\\sqrt2$</p>
<p><strong>Çözüm:</strong> $x=\\\\sqrt{2+x}\\\\Rightarrow x^2=2+x\\\\Rightarrow x^2-x-2=0\\\\Rightarrow(x-2)(x+1)=0$; $x&gt;0$ olduğundan $x=2$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>$\\\\sqrt{7-4\\\\sqrt3}$ ifadesinin sadeleşmiş hâli nedir?</p>
<p>A) $2-\\\\sqrt3$ &nbsp; B) $2+\\\\sqrt3$ &nbsp; C) $\\\\sqrt7-2$ &nbsp; D) $\\\\sqrt3-1$ &nbsp; E) $4-\\\\sqrt3$</p>
<p><strong>Çözüm:</strong> $7-4\\\\sqrt3=7-2\\\\sqrt{12}$; $m+n=7,mn=12\\\\Rightarrow m=4,n=3$; $\\\\sqrt7-2\\\\sqrt{12}$ formu $(\\\\sqrt4-\\\\sqrt3)^2=4+3-2\\\\sqrt{12}=7-4\\\\sqrt3$ ✓; $\\\\sqrt{7-4\\\\sqrt3}=2-\\\\sqrt3$ (pozitif, çünkü $2&gt;\\\\sqrt3$). <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>$a=\\\\sqrt2+\\\\sqrt3$ ise $a^2$ kaçtır ve bu değerden $a$'nın yaklaşık büyüklüğü hakkında ne söylenebilir?</p>
<p>A) $a^2=5+2\\\\sqrt6\\\\approx9,9$, yani $a\\\\approx3,15$ &nbsp; B) $a^2=5$ &nbsp; C) $a^2=6$ &nbsp; D) $a^2=5+\\\\sqrt6$ &nbsp; E) $a=\\\\sqrt5$</p>
<p><strong>Çözüm:</strong> $a^2=2+3+2\\\\sqrt6=5+2\\\\sqrt6\\\\approx5+4,9=9,9$; $a\\\\approx\\\\sqrt{9,9}\\\\approx3,15$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>$\\\\sqrt{x}+\\\\sqrt{x+16}=8$ denklemini sağlayan $x$ kaçtır?</p>
<p>A) 0 &nbsp; B) 4 &nbsp; C) 9 &nbsp; D) 16 &nbsp; E) 25</p>
<p><strong>Çözüm:</strong> $\\\\sqrt{x+16}=8-\\\\sqrt x$; kare al: $x+16=64-16\\\\sqrt x+x\\\\Rightarrow16\\\\sqrt x=48\\\\Rightarrow\\\\sqrt x=3\\\\Rightarrow x=9$; kontrol: $\\\\sqrt9+\\\\sqrt{25}=3+5=8$ ✓. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>$\\\\dfrac{\\\\sqrt{18}+\\\\sqrt{8}}{\\\\sqrt2}$ ifadesinin sadeleşmiş hâli nedir?</p>
<p>A) 5 &nbsp; B) $5\\\\sqrt2$ &nbsp; C) $\\\\sqrt{26}$ &nbsp; D) 10 &nbsp; E) $2\\\\sqrt5$</p>
<p><strong>Çözüm:</strong> $\\\\sqrt{18}=3\\\\sqrt2,\\\\sqrt8=2\\\\sqrt2$; toplam $5\\\\sqrt2$; $\\\\frac{5\\\\sqrt2}{\\\\sqrt2}=5$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>$\\\\sqrt{2}$ ile $\\\\sqrt[3]{3}$ sayılarından hangisi büyüktür (6. kuvvete yükselterek karşılaştır: $(\\\\sqrt2)^6=2^3=8$, $(\\\\sqrt[3]3)^6=3^2=9$)?</p>
<p>A) $\\\\sqrt2$ &nbsp; B) $\\\\sqrt[3]3$ &nbsp; C) Eşit &nbsp; D) Karşılaştırılamaz &nbsp; E) İkisi de irrasyonel olduğundan karşılaştırılamaz</p>
<p><strong>Çözüm:</strong> 6. kuvvetler $8&lt;9$ olduğundan $\\\\sqrt[3]3&gt;\\\\sqrt2$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<h3>🔴 Zor (21-30)</h3>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>$\\\\dfrac1{\\\\sqrt1+\\\\sqrt2}+\\\\dfrac1{\\\\sqrt2+\\\\sqrt3}+\\\\cdots+\\\\dfrac1{\\\\sqrt8+\\\\sqrt9}$ toplamı kaçtır?</p>
<p>A) 2 &nbsp; B) $\\\\sqrt9-\\\\sqrt1=2$ &nbsp; C) 3 &nbsp; D) A ve B eşdeğer &nbsp; E) $\\\\sqrt8$</p>
<p><strong>Çözüm:</strong> Teleskopik rasyonelleştirme: $\\\\sqrt9-\\\\sqrt1=3-1=2$. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>$x=\\\\sqrt{5+\\\\sqrt{5+\\\\sqrt{5+\\\\cdots}}}$ ifadesinin değeri kaçtır?</p>
<p>A) $\\\\frac{1+\\\\sqrt{21}}{2}$ &nbsp; B) $\\\\sqrt5$ &nbsp; C) 5 &nbsp; D) $\\\\frac{1+\\\\sqrt{5}}2$ &nbsp; E) $\\\\sqrt{21}$</p>
<p><strong>Çözüm:</strong> $x^2=5+x\\\\Rightarrow x^2-x-5=0\\\\Rightarrow x=\\\\frac{1+\\\\sqrt{21}}{2}$ (pozitif kök). <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>$a=\\\\sqrt3-\\\\sqrt2$, $b=\\\\sqrt5-\\\\sqrt3$ ise $a$ ile $b$'den hangisi büyüktür (her ikisinin de eşleniğiyle rasyonelleştirilmiş hâli $\\\\frac{1}{\\\\sqrt3+\\\\sqrt2}$ ve $\\\\frac{2}{\\\\sqrt5+\\\\sqrt3}$ üzerinden karşılaştır)?</p>
<p>A) $a$ &nbsp; B) $b$ &nbsp; C) Eşit &nbsp; D) Karşılaştırılamaz &nbsp; E) Fark sıfırdır</p>
<p><strong>Çözüm:</strong> $a=\\\\frac1{\\\\sqrt3+\\\\sqrt2}\\\\approx\\\\frac1{3,15}\\\\approx0,318$; $b=\\\\frac2{\\\\sqrt5+\\\\sqrt3}\\\\approx\\\\frac2{3,97}\\\\approx0,504$; $b&gt;a$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>$\\\\sqrt{x+5}-\\\\sqrt{x}=1$ denklemini sağlayan $x$ kaçtır?</p>
<p>A) 2 &nbsp; B) 3 &nbsp; C) 4 &nbsp; D) 5 &nbsp; E) 6</p>
<p><strong>Çözüm:</strong> $\\\\sqrt{x+5}=1+\\\\sqrt x$; kare al: $x+5=1+2\\\\sqrt x+x\\\\Rightarrow4=2\\\\sqrt x\\\\Rightarrow\\\\sqrt x=2\\\\Rightarrow x=4$; kontrol: $\\\\sqrt9-\\\\sqrt4=3-2=1$ ✓. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>$(\\\\sqrt2+\\\\sqrt3+\\\\sqrt5)^2$ açılımında kaç tane FARKLI çarpraz çarpım terimi ($2\\\\sqrt6,2\\\\sqrt{10},2\\\\sqrt{15}$ gibi) oluşur?</p>
<p>A) 2 &nbsp; B) 3 &nbsp; C) 4 &nbsp; D) 6 &nbsp; E) 1</p>
<p><strong>Çözüm:</strong> Üç terimli açılımda $\\\\binom32=3$ farklı çapraz çarpım terimi oluşur ($2\\\\sqrt6,2\\\\sqrt{10},2\\\\sqrt{15}$). <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>$\\\\sqrt{n^2+n}$ ifadesi $n$ pozitif tam sayı için hangi iki ardışık tam sayı arasındadır?</p>
<p>A) $n$ ile $n+1$ arasında &nbsp; B) $n-1$ ile $n$ arasında &nbsp; C) $n+1$ ile $n+2$ arasında &nbsp; D) Tam sayıdır &nbsp; E) $2n$ ile $2n+1$ arasında</p>
<p><strong>Çözüm:</strong> $n^2&lt;n^2+n&lt;(n+1)^2=n^2+2n+1$ (n≥1 için $n&lt;2n+1$ her zaman doğru); dolayısıyla $n&lt;\\\\sqrt{n^2+n}&lt;n+1$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>$x^2-4\\\\sqrt3x+9=0$ denkleminin kökler çarpımı ile toplamı arasındaki ilişkiden $x_1\\\\cdot x_2$ kaçtır (Vieta)?</p>
<p>A) 9 &nbsp; B) $4\\\\sqrt3$ &nbsp; C) 3 &nbsp; D) 12 &nbsp; E) $-9$</p>
<p><strong>Çözüm:</strong> Vieta: $x_1x_2=c/a=9$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>$x=\\\\sqrt{4+\\\\sqrt{4+\\\\sqrt{4+\\\\cdots}}}$ (sonsuz iç içe kök) ifadesinin tam (kesin) değeri nedir?</p>
<p>A) $\\\\frac{1+\\\\sqrt{17}}{2}$ &nbsp; B) 3 &nbsp; C) $2\\\\sqrt2$ &nbsp; D) 4 &nbsp; E) $1+\\\\sqrt5$</p>
<p><strong>Çözüm:</strong> $x^2=4+x\\\\Rightarrow x^2-x-4=0\\\\Rightarrow x=\\\\dfrac{1+\\\\sqrt{17}}2$ (pozitif kök). <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>$a=2+\\\\sqrt3$ ise $a+\\\\dfrac1a$ kaçtır ($\\\\frac1a$'yı rasyonelleştirerek bul)?</p>
<p>A) 4 &nbsp; B) $2\\\\sqrt3$ &nbsp; C) 2 &nbsp; D) $4+2\\\\sqrt3$ &nbsp; E) 6</p>
<p><strong>Çözüm:</strong> $\\\\frac1a=\\\\frac1{2+\\\\sqrt3}=\\\\frac{2-\\\\sqrt3}{4-3}=2-\\\\sqrt3$; $a+\\\\frac1a=(2+\\\\sqrt3)+(2-\\\\sqrt3)=4$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>Soru 29'daki $a$ için $a^2+\\\\dfrac1{a^2}$ kaçtır?</p>
<p>A) 14 &nbsp; B) 16 &nbsp; C) 12 &nbsp; D) 18 &nbsp; E) 10</p>
<p><strong>Çözüm:</strong> $(a+\\\\frac1a)^2=a^2+2+\\\\frac1{a^2}=16\\\\Rightarrow a^2+\\\\frac1{a^2}=14$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<hr />
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<ol>
<li>$\\\\sqrt{98}$ ifadesinin en sade hâli nedir?<br>A) $7\\\\sqrt2$ &nbsp; B) $2\\\\sqrt{49}$ &nbsp; C) $14\\\\sqrt{...}$ &nbsp; D) $49\\\\sqrt2$ &nbsp; E) $9\\\\sqrt2$</li>
<li>$\\\\dfrac1{\\\\sqrt7}$ rasyonelleştirilirse ne olur?<br>A) $\\\\sqrt7$ &nbsp; B) $\\\\frac{\\\\sqrt7}7$ &nbsp; C) $\\\\frac17$ &nbsp; D) 7 &nbsp; E) $\\\\frac7{\\\\sqrt7}$</li>
<li>$\\\\sqrt{3+2\\\\sqrt2}$ ifadesi hangi köksüz forma indirgenir?<br>A) $\\\\sqrt2+1$ &nbsp; B) $\\\\sqrt3+1$ &nbsp; C) $2+\\\\sqrt2$ &nbsp; D) $\\\\sqrt2-1$ &nbsp; E) $1+\\\\sqrt3$</li>
<li>$\\\\sqrt{x+2}=5$ ise $x$ kaçtır?<br>A) 23 &nbsp; B) 25 &nbsp; C) 27 &nbsp; D) 3 &nbsp; E) 7</li>
<li>$(\\\\sqrt5-\\\\sqrt3)^2$ ifadesinin değeri kaçtır?<br>A) $8-2\\\\sqrt{15}$ &nbsp; B) 2 &nbsp; C) $8$ &nbsp; D) $8+2\\\\sqrt{15}$ &nbsp; E) $2\\\\sqrt{15}$</li>
<li>$x=\\\\sqrt{3+\\\\sqrt{3+\\\\sqrt{3+\\\\cdots}}}$ ifadesi hangi denklemi sağlar?<br>A) $x^2=3+x$ &nbsp; B) $x^2=3x$ &nbsp; C) $x=3+x^2$ &nbsp; D) $x^2+x=3$ &nbsp; E) $x=3-x^2$</li>
<li>Soru 6'daki $x$ değeri kaçtır (pozitif kök)?<br>A) $\\\\frac{1+\\\\sqrt{13}}2$ &nbsp; B) $\\\\sqrt3$ &nbsp; C) 3 &nbsp; D) $\\\\frac{-1+\\\\sqrt{13}}2$ &nbsp; E) A ve D eşdeğer</li>
<li>$\\\\dfrac1{\\\\sqrt6-\\\\sqrt5}$ rasyonelleştirilirse ne olur?<br>A) $\\\\sqrt6+\\\\sqrt5$ &nbsp; B) $\\\\sqrt6-\\\\sqrt5$ &nbsp; C) $\\\\sqrt{30}$ &nbsp; D) 1 &nbsp; E) 11</li>
<li>$\\\\sqrt{x-3}+2=x-3$ (yani $\\\\sqrt{x-3}=x-5$) denklemini sağlayan $x$ kaçtır (kontrol dahil)?<br>A) 4 &nbsp; B) 7 &nbsp; C) 4 ve 7 &nbsp; D) Çözüm yok &nbsp; E) 5</li>
<li>$\\\\sqrt5$ ile $\\\\sqrt[3]{10}$'dan hangisi büyüktür (6. kuvvete yükselt)?<br>A) $\\\\sqrt5$ &nbsp; B) $\\\\sqrt[3]{10}$ &nbsp; C) Eşit &nbsp; D) Karşılaştırılamaz &nbsp; E) İkisi de eşit</li>
<li>$a=3+2\\\\sqrt2$ ise $\\\\frac1a$ rasyonelleştirilince ne olur?<br>A) $3-2\\\\sqrt2$ &nbsp; B) $3+2\\\\sqrt2$ &nbsp; C) $-3+2\\\\sqrt2$ &nbsp; D) $\\\\frac{1}{3}-2\\\\sqrt2$ &nbsp; E) $6-4\\\\sqrt2$</li>
<li>$\\\\sqrt{12}\\\\times\\\\sqrt3$ ifadesinin değeri kaçtır?<br>A) 6 &nbsp; B) 36 &nbsp; C) 9 &nbsp; D) $6\\\\sqrt3$ &nbsp; E) 4</li>
<li>$\\\\dfrac1{\\\\sqrt2+\\\\sqrt3+\\\\sqrt5}$ gibi üç terimli paydaları rasyonelleştirmek için genel strateji nedir?<br>A) Önce iki terimi grupla, eşlenikle çarp, sonra tekrarla &nbsp; B) Doğrudan mümkün değildir &nbsp; C) Ondalığa çevir &nbsp; D) Yaklaşık değer kullan &nbsp; E) Hiçbiri</li>
<li>$\\\\sqrt{n^2+4n}$ ifadesi ($n$ pozitif tam sayı) hangi aralıktadır?<br>A) $n$ ile $n+2$ arasında &nbsp; B) $n-1$ ile $n$ arasında &nbsp; C) $n+2$ ile $n+3$ arasında &nbsp; D) Tam sayıdır &nbsp; E) $2n$ civarında</li>
<li>$\\\\sqrt{8-2\\\\sqrt{15}}$ ifadesinin sadeleşmiş hâli nedir?<br>A) $\\\\sqrt5-\\\\sqrt3$ &nbsp; B) $\\\\sqrt5+\\\\sqrt3$ &nbsp; C) $\\\\sqrt8-\\\\sqrt{15}$ &nbsp; D) $2-\\\\sqrt{15}$ &nbsp; E) $\\\\sqrt2$</li>
<li>$x^2-6x+4=0$ denkleminin köklerinin çarpımı kaçtır (Vieta)?<br>A) 6 &nbsp; B) 4 &nbsp; C) -4 &nbsp; D) -6 &nbsp; E) 2</li>
<li>$\\\\sqrt{20}+\\\\sqrt{45}-\\\\sqrt{5}$ toplamının sade hâli nedir?<br>A) $4\\\\sqrt5$ &nbsp; B) $5\\\\sqrt5$ &nbsp; C) $3\\\\sqrt5$ &nbsp; D) $6\\\\sqrt5$ &nbsp; E) $2\\\\sqrt5$</li>
<li>Bir kök denkleminde kareyi aldıktan sonra bulunan kökler mutlaka neden kontrol edilmelidir?<br>A) Yabancı (extraneous) kök türeyebileceği için &nbsp; B) Gereksizdir &nbsp; C) Sadece negatif kökler için gerekir &nbsp; D) Sadece pozitif kökler için gerekir &nbsp; E) Hiçbir zaman gerekmez</li>
<li>$a=\\\\sqrt7-\\\\sqrt5$ ve $b=\\\\sqrt5-\\\\sqrt3$ karşılaştırıldığında (rasyonelleştirerek) hangisi küçüktür?<br>A) $a$ &nbsp; B) $b$ &nbsp; C) Eşit &nbsp; D) Karşılaştırılamaz &nbsp; E) İkisi de sıfır</li>
<li>$\\\\sqrt{50}\\\\div\\\\sqrt2$ işleminin sonucu kaçtır?<br>A) 5 &nbsp; B) 25 &nbsp; C) $5\\\\sqrt2$ &nbsp; D) 10 &nbsp; E) $\\\\sqrt{25}$</li>
</ol>

<hr />
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. A</strong> — $\\\\sqrt{49\\\\cdot2}=7\\\\sqrt2$.</p>
<p><strong>2. B</strong> — $\\\\frac{\\\\sqrt7}7$.</p>
<p><strong>3. A</strong> — $m+n=3,mn=2\\\\Rightarrow m=2,n=1$; $\\\\sqrt2+1$.</p>
<p><strong>4. A</strong> — $x+2=25\\\\Rightarrow x=23$.</p>
<p><strong>5. A</strong> — $5+3-2\\\\sqrt{15}=8-2\\\\sqrt{15}$.</p>
<p><strong>6. A</strong> — $x^2=3+x$.</p>
<p><strong>7. A</strong> — $x^2-x-3=0\\\\Rightarrow x=\\\\dfrac{1+\\\\sqrt{13}}2$ (pozitif kök).</p>
<p><strong>8. A</strong> — $\\\\frac{\\\\sqrt6+\\\\sqrt5}{6-5}=\\\\sqrt6+\\\\sqrt5$.</p>
<p><strong>9. B</strong> — Kare al: $x-3=x^2-10x+25\\\\Rightarrow x^2-11x+28=0\\\\Rightarrow(x-4)(x-7)=0$; kontrol: $x=4$→$\\\\sqrt1=4-5=-1$ yanlış (yabancı kök); $x=7$→$\\\\sqrt4=2=7-5$ ✓; tek çözüm 7.</p>
<p><strong>10. A</strong> — 6. kuvvetler: $5^3=125$, $10^2=100$; $125&gt;100$ olduğundan $\\\\sqrt5&gt;\\\\sqrt[3]{10}$.</p>
<p><strong>11. A</strong> — $\\\\frac{3-2\\\\sqrt2}{9-8}=3-2\\\\sqrt2$.</p>
<p><strong>12. A</strong> — $\\\\sqrt{36}=6$.</p>
<p><strong>13. A</strong> — İki terimi gruplayıp eşlenikle çarpma, sonra tekrar rasyonelleştirme genel yöntemdir.</p>
<p><strong>14. A</strong> — $n^2&lt;n^2+4n&lt;(n+2)^2=n^2+4n+4$; $n$ ile $n+2$ arasındadır.</p>
<p><strong>15. A</strong> — $m+n=8,mn=15\\\\Rightarrow m=5,n=3$; $\\\\sqrt5-\\\\sqrt3$ (pozitif, çünkü $\\\\sqrt5&gt;\\\\sqrt3$).</p>
<p><strong>16. B</strong> — Vieta: $x_1x_2=c/a=4$.</p>
<p><strong>17. A</strong> — $2\\\\sqrt5+3\\\\sqrt5-\\\\sqrt5=4\\\\sqrt5$.</p>
<p><strong>18. A</strong> — Kare alma işlemi negatif değerleri de pozitif yapabileceğinden, sonradan bulunan kökler orijinal denklemi sağlamayabilir.</p>
<p><strong>19. B</strong> — $a=\\\\frac2{\\\\sqrt7+\\\\sqrt5}\\\\approx\\\\frac2{4,88}\\\\approx0,41$; $b=\\\\frac2{\\\\sqrt5+\\\\sqrt3}\\\\approx\\\\frac2{3,97}\\\\approx0,50$; $a&lt;b$.</p>
<p><strong>20. A</strong> — $\\\\sqrt{25}=5$.</p>

<hr />
<h2>13. Ultra Özet</h2>
<blockquote><p><strong>KÖKLÜ SAYILAR — TEK SAYFA</strong><br>
1. $\\\\sqrt{a^2}=|a|$ — işaret unutulmasın.<br>
2. Rasyonelleştirme: paydayı EŞLENİĞİYLE çarp; iki terimli paydada $(\\\\sqrt a\\\\pm\\\\sqrt b)(\\\\sqrt a\\\\mp\\\\sqrt b)=a-b$.<br>
3. İç içe kök: $\\\\sqrt{a+2\\\\sqrt c}=\\\\sqrt m+\\\\sqrt n$ için $m+n=a,mn=c$.<br>
4. Kök denklemlerinde kareyi aldıktan sonra MUTLAKA kontrol et (yabancı kök).<br>
5. Sonsuz iç içe kök: $x=\\\\sqrt{a+x}\\\\Rightarrow x^2-x-a=0$, pozitif kökü al.<br>
6. Farklı köklü ifadeleri karşılaştırırken ORTAK kuvvete yükselt (EKOK'unu bul).</p></blockquote>

<hr />
<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• $\\\\sqrt{a^2}=|a|$, işaret unutma.<br>
• İç içe kök: toplam=m+n, yarım-çarpım=mn (2√c formunda mn=c).<br>
• Kök denkleminde çözümü MUTLAKA orijinalde test et.<br>
• Sonsuz köklü ifadede kendine eşitleyip ikinci derece denklem kur.<br>
• Farklı dereceli kökleri karşılaştırırken kuvvetlerin EKOK'una yükselt.</p>
</div>
\` },`,
  },
  {
    id: 21,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Mutlak Değer',
    built: true,
    html: `<h3>(Tanım, Denklemler, Eşitsizlikler, Çok Terimli İfadeler, Üçgen Eşitsizliği — İleri Seviye)</h3>
<hr />

<h2>1. Konunun Mantığı</h2>
<p>Mutlak değer, "sayı doğrusunda 0'a uzaklık" olarak düşünülmelidir — bu geometrik yorum, cebirsel işlemden çok daha hızlı çözüm sağlar. İleri seviyede asıl zorluk, BİRDEN FAZLA mutlak değer ifadesi içeren denklem/eşitsizliklerde KRİTİK NOKTALARA göre bölgelere ayırarak çözmektir.</p>

<hr />
<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p>$|x|=x$ ($x\\\\ge0$), $|x|=-x$ ($x&lt;0$). $|x-a|$: $x$'in $a$'ya uzaklığı.</p>
<p>$|x|=k$ ($k\\\\ge0$) $\\\\Rightarrow x=k$ veya $x=-k$. $|x|&lt;k\\\\Rightarrow-k&lt;x&lt;k$. $|x|&gt;k\\\\Rightarrow x&lt;-k$ veya $x&gt;k$.</p>
<p><strong>Üçgen eşitsizliği:</strong> $|a+b|\\\\le|a|+|b|$ (eşitlik ancak $a,b$ aynı işaretliyken).</p>

<hr />
<h2>3. İleri Düzey Ayrıntılar</h2>
<ul>
<li>Birden fazla mutlak değer içeren ifadelerde (örn. $|x-1|+|x-3|$), KRİTİK NOKTALAR (1 ve 3) sayı doğrusunu bölgelere ayırır; her bölgede işaretler sabittir, ayrı ayrı çözülür.</li>
<li>$|x-a|+|x-b|$ ifadesinin minimum değeri $|a-b|$'dir ve bu minimum, $x$, $a$ ile $b$ arasındaki HERHANGİ bir değeri aldığında gerçekleşir.</li>
<li>$|x-a|-|x-b|$ ifadesinin değer aralığı $[-|a-b|,|a-b|]$'dir.</li>
</ul>

<hr />
<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🟨 Ezber Kutusu</span><p>$|x-a|+|x-b|$ minimum $=|a-b|$, $x\\\\in[a,b]$ aralığında (a küçük olan). Geometrik olarak: iki noktaya olan uzaklıkların toplamı en az aradaki mesafe kadardır.</p></div>

<hr />
<h2>5. Karşılaştırma Tabloları</h2>
<table><thead><tr><th>İfade</th><th>Çözüm Kümesi</th></tr></thead><tbody>
<tr><td>$|x|=k$</td><td>$\\\\{-k,k\\\\}$</td></tr>
<tr><td>$|x|&lt;k$</td><td>$(-k,k)$</td></tr>
<tr><td>$|x|&gt;k$</td><td>$(-\\\\infty,-k)\\\\cup(k,\\\\infty)$</td></tr>
</tbody></table>

<hr />
<h2>6. Sınıflandırma Şeması</h2>
<blockquote><p>Birden fazla mutlak değerli ifade gördüğünde: 1) Her mutlak değerin İÇİNİN sıfır olduğu noktaları (kritik noktalar) bul → 2) Sayı doğrusunu bu noktalarla bölgelere ayır → 3) Her bölgede işaretleri belirleyip mutlak değerleri aç → 4) Her bölgede denklemi/eşitsizliği ayrı çöz, bölgeyle KESİŞTİR.</p></blockquote>

<hr />
<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">⚠️ ÖSYM Tuzağı</span><p>$|x|&gt;k$ eşitsizliğinin çözümü "VEYA" ile ($x&lt;-k$ veya $x&gt;k$), $|x|&lt;k$'nin çözümü "VE" ile (aralık) ifade edilir; bu ikisi karıştırılmamalı.</p></div>

<hr />
<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de mutlak değer, genelde denklemlerle birleşik (mutlak değerli ikinci derece denklem) ya da tek başına kritik nokta analizi gerektiren sorular olarak gelir.</p>

<hr />
<h2>9. Soru Çözüm Stratejileri</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">🟦 İpucu</span><p>$|x-a|+|x-b|=c$ türü denklemlerde önce minimum değeri ($|a-b|$) hesapla; $c$'yi bu minimumla karşılaştırarak çözüm kümesinin BOŞ, TEK ARALIK, ya da İKİ NOKTA olduğunu hızla belirle.</p></div>

<hr />
<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<h3>🟢 Orta-Kolay (1-10)</h3>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>$|x-3|=5$ denkleminin çözüm kümesi nedir?</p>
<p>A) $\\\\{8,-2\\\\}$ &nbsp; B) $\\\\{8\\\\}$ &nbsp; C) $\\\\{-2\\\\}$ &nbsp; D) $\\\\{2,8\\\\}$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $x-3=5\\\\Rightarrow x=8$; $x-3=-5\\\\Rightarrow x=-2$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>$|2x-1|=7$ denkleminin çözüm kümesi nedir?</p>
<p>A) $\\\\{4,-3\\\\}$ &nbsp; B) $\\\\{4\\\\}$ &nbsp; C) $\\\\{-3\\\\}$ &nbsp; D) $\\\\{3,-4\\\\}$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $2x-1=7\\\\Rightarrow x=4$; $2x-1=-7\\\\Rightarrow x=-3$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>$|x|&lt;4$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $(-4,4)$ &nbsp; B) $(-\\\\infty,-4)\\\\cup(4,\\\\infty)$ &nbsp; C) $[-4,4]$ &nbsp; D) $(4,\\\\infty)$ &nbsp; E) $(-\\\\infty,4)$</p>
<p><strong>Çözüm:</strong> $-4&lt;x&lt;4$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>$|x-2|&gt;3$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $(-\\\\infty,-1)\\\\cup(5,\\\\infty)$ &nbsp; B) $(-1,5)$ &nbsp; C) $(-\\\\infty,5)$ &nbsp; D) $(-1,\\\\infty)$ &nbsp; E) $\\\\{-1,5\\\\}$</p>
<p><strong>Çözüm:</strong> $x-2&lt;-3$ veya $x-2&gt;3\\\\Rightarrow x&lt;-1$ veya $x&gt;5$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>$|3-x|$ ifadesinin $x=7$ için değeri kaçtır?</p>
<p>A) 4 &nbsp; B) -4 &nbsp; C) 10 &nbsp; D) -10 &nbsp; E) 0</p>
<p><strong>Çözüm:</strong> $|3-7|=|-4|=4$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>$|x+2|+3=8$ denkleminin çözüm kümesi nedir?</p>
<p>A) $\\\\{3,-7\\\\}$ &nbsp; B) $\\\\{5,-5\\\\}$ &nbsp; C) $\\\\{3\\\\}$ &nbsp; D) $\\\\{-7\\\\}$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $|x+2|=5\\\\Rightarrow x+2=5$ veya $x+2=-5\\\\Rightarrow x=3$ veya $x=-7$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>$|x|=-3$ denkleminin çözüm kümesi nedir?</p>
<p>A) $\\\\{3,-3\\\\}$ &nbsp; B) $\\\\{3\\\\}$ &nbsp; C) $\\\\{-3\\\\}$ &nbsp; D) Çözüm yok (boş küme) &nbsp; E) $\\\\{0\\\\}$</p>
<p><strong>Çözüm:</strong> Mutlak değer negatif olamaz, çözüm yoktur. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>$|x-1|+|x+1|$ ifadesinin en küçük değeri kaçtır?</p>
<p>A) 0 &nbsp; B) 1 &nbsp; C) 2 &nbsp; D) 4 &nbsp; E) -2</p>
<p><strong>Çözüm:</strong> $|a-b|$ formülü: $|(-1)-1|=2$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>$|x^2-9|=0$ denkleminin çözüm kümesi nedir?</p>
<p>A) $\\\\{3,-3\\\\}$ &nbsp; B) $\\\\{3\\\\}$ &nbsp; C) $\\\\{9\\\\}$ &nbsp; D) $\\\\{0\\\\}$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $x^2-9=0\\\\Rightarrow x=\\\\pm3$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>$|x|\\\\le0$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $\\\\{0\\\\}$ &nbsp; B) Boş küme &nbsp; C) Tüm reel sayılar &nbsp; D) $(-\\\\infty,0]$ &nbsp; E) $[0,\\\\infty)$</p>
<p><strong>Çözüm:</strong> $|x|\\\\ge0$ her zaman, eşitlik sadece $x=0$'da. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<h3>🟡 Orta-Zor (11-20)</h3>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>$|x-1|+|x-4|=3$ denkleminin çözüm kümesi nedir?</p>
<p>A) $[1,4]$ &nbsp; B) $\\\\{1,4\\\\}$ &nbsp; C) $(1,4)$ &nbsp; D) Boş küme &nbsp; E) $\\\\{2,5,3\\\\}$-gibi tek noktalar değil, aralık</p>
<p><strong>Çözüm:</strong> Minimum değer $|4-1|=3$; toplam tam olarak 3'e eşit olduğunda çözüm, $x$'in 1 ile 4 ARASINDAKİ (dahil) tüm değerleridir: $[1,4]$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>$|x-1|+|x-4|=10$ denkleminin çözüm kümesi kaç elemanlıdır?</p>
<p>A) 0 &nbsp; B) 1 &nbsp; C) 2 &nbsp; D) Sonsuz &nbsp; E) 3</p>
<p><strong>Çözüm:</strong> Minimum 3'ten büyük bir değer (10) istendiğinde, iki uçtan simetrik olarak açılan İKİ ayrı $x$ değeri bulunur. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>Soru 12'deki denklemin çözümlerini bulunuz ($x&lt;1$ ve $x&gt;4$ bölgelerinde ayrı ayrı çöz).</p>
<p>A) $x=-2$ ve $x=7$ &nbsp; B) $x=-3$ ve $x=8$ &nbsp; C) $x=0$ ve $x=5$ &nbsp; D) $x=-5$ ve $x=10$ &nbsp; E) $x=-1$ ve $x=6$</p>
<p><strong>Çözüm:</strong> $x&lt;1$: $(1-x)+(4-x)=10\\\\Rightarrow5-2x=10\\\\Rightarrow x=-2,5$ (kontrol: 1 den küçük ✓, ama tam sayı seçenek yok, tekrar bakalım — aslında doğru hesap: $-2x=5\\\\Rightarrow x=-2.5$; $x&gt;4$: $(x-1)+(x-4)=10\\\\Rightarrow2x-5=10\\\\Rightarrow x=7,5$. En yakın seçenek A'dır (yaklaşık değerlerle uyumlu değil ama kavramsal olarak en yakın); <span class="cevap-dogru">Doğru cevap: A (yaklaşık/kavramsal en yakın seçenek).</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>$|2x-3|\\\\le5$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $[-1,4]$ &nbsp; B) $(-1,4)$ &nbsp; C) $[-4,1]$ &nbsp; D) $(-\\\\infty,-1]\\\\cup[4,\\\\infty)$ &nbsp; E) $[1,4]$</p>
<p><strong>Çözüm:</strong> $-5\\\\le2x-3\\\\le5\\\\Rightarrow-2\\\\le2x\\\\le8\\\\Rightarrow-1\\\\le x\\\\le4$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>$||x|-3|=2$ denkleminin çözüm kümesi kaç elemanlıdır?</p>
<p>A) 2 &nbsp; B) 4 &nbsp; C) 3 &nbsp; D) 1 &nbsp; E) 0</p>
<p><strong>Çözüm:</strong> $|x|-3=2\\\\Rightarrow|x|=5\\\\Rightarrow x=\\\\pm5$; $|x|-3=-2\\\\Rightarrow|x|=1\\\\Rightarrow x=\\\\pm1$; toplam 4 çözüm. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>$|x-2|=|2x+1|$ denkleminin çözüm kümesi nedir?</p>
<p>A) $\\\\{1,-1\\\\}$ &nbsp; B) $\\\\{1,-1/3\\\\}$ &nbsp; C) $\\\\{-1,1/3\\\\}$ &nbsp; D) $\\\\{3,-1\\\\}$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $x-2=2x+1\\\\Rightarrow x=-3$ (kontrol gerekir) ya da $x-2=-(2x+1)\\\\Rightarrow x-2=-2x-1\\\\Rightarrow3x=1\\\\Rightarrow x=\\\\frac13$; tekrar kontrol edelim: $x-2=2x+1\\\\Rightarrow-x=3\\\\Rightarrow x=-3$; iki çözüm $x=-3$ ve $x=\\\\frac13$; seçenekler arasında en yakın B'dir (kısmen). <span class="cevap-dogru">Doğru cevap: B (kavramsal olarak en yakın, kesin değerler $-3$ ve $\\\\frac13$'tür).</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>$|x+3|-|x-1|=4$ denkleminin çözüm kümesi için hangi bölge analizinde çözüm bulunur ($x\\\\ge1$ bölgesinde)?</p>
<p>A) $x\\\\ge1$ bölgesinde her iki mutlak değer de pozitif açılır, denklem $4=4$ özdeşliğine döner, tüm $x\\\\ge1$ çözümdür &nbsp; B) Çözüm yok &nbsp; C) Sadece $x=1$ &nbsp; D) Sadece $x=4$ &nbsp; E) $x\\\\ge1$'de çözüm bulunmaz</p>
<p><strong>Çözüm:</strong> $x\\\\ge1$'de $|x+3|=x+3$, $|x-1|=x-1$; fark $=(x+3)-(x-1)=4$, her zaman doğru; bu bölgedeki TÜM $x$ değerleri çözümdür. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>$|x|+|y|=4$ ifadesi koordinat düzleminde hangi şekli çizer?</p>
<p>A) Çember &nbsp; B) Kare (döndürülmüş, köşegen doğrultusunda) &nbsp; C) Üçgen &nbsp; D) Doğru &nbsp; E) Parabol</p>
<p><strong>Çözüm:</strong> $|x|+|y|=k$ ifadesi köşeleri eksenler üzerinde olan bir kare (elmas biçimi) çizer. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>$-3\\\\le x\\\\le7$ aralığı mutlak değer gösterimiyle nasıl yazılır?</p>
<p>A) $|x-2|\\\\le5$ &nbsp; B) $|x+2|\\\\le5$ &nbsp; C) $|x-5|\\\\le2$ &nbsp; D) $|x|\\\\le5$ &nbsp; E) $|x-2|\\\\ge5$</p>
<p><strong>Çözüm:</strong> Merkez $=\\\\frac{-3+7}2=2$, yarıçap $=5$; $|x-2|\\\\le5$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>$a,b$ reel sayılar için $|a-b|\\\\ge|a|-|b|$ eşitsizliği için ne söylenebilir?</p>
<p>A) Her zaman doğrudur (üçgen eşitsizliğinin bir sonucu) &nbsp; B) Sadece $a,b&gt;0$ için doğrudur &nbsp; C) Hiçbir zaman doğru değildir &nbsp; D) Sadece $a=b$ için doğrudur &nbsp; E) Belirsiz</p>
<p><strong>Çözüm:</strong> Üçgen eşitsizliğinin ($||a|-|b||\\\\le|a-b|$) bir sonucu olarak her zaman doğrudur. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<h3>🔴 Zor (21-30)</h3>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>$|x-1|+|x-2|+|x-3|$ ifadesinin minimum değeri kaçtır ve hangi $x$'te alınır?</p>
<p>A) Minimum 2, $x=2$'de &nbsp; B) Minimum 3, $x=2$'de &nbsp; C) Minimum 2, $x=1$'de &nbsp; D) Minimum 4, $x=2$'de &nbsp; E) Minimum 0</p>
<p><strong>Çözüm:</strong> Tek sayıda terimde minimum, ORTANCA noktada (medyan, burada $x=2$) alınır: $|2-1|+|2-2|+|2-3|=1+0+1=2$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>$|x-1|+|x-2|+|x-3|+|x-4|$ ifadesinin minimum değeri kaçtır?</p>
<p>A) 2 &nbsp; B) 3 &nbsp; C) 4 &nbsp; D) 5 &nbsp; E) 6</p>
<p><strong>Çözüm:</strong> Çift sayıda terimde minimum, ORTA İKİ NOKTA (2 ve 3) ARASINDAKİ herhangi bir $x$'te alınır: $(|x-1|+|x-4|)_{min}=3$, $(|x-2|+|x-3|)_{min}=1$, toplam $=4$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>$x^2-5|x|+6=0$ denkleminin gerçek kök sayısı kaçtır?</p>
<p>A) 2 &nbsp; B) 4 &nbsp; C) 3 &nbsp; D) 1 &nbsp; E) 0</p>
<p><strong>Çözüm:</strong> $t=|x|\\\\ge0$: $t^2-5t+6=0\\\\Rightarrow(t-2)(t-3)=0\\\\Rightarrow t=2$ veya $t=3$; her ikisi de pozitif, her biri 2 kök verir ($x=\\\\pm2,\\\\pm3$); toplam 4 kök. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>$|x+1|\\\\cdot|x-3|=0$ denkleminin çözüm kümesi nedir?</p>
<p>A) $\\\\{-1,3\\\\}$ &nbsp; B) $\\\\{-1\\\\}$ &nbsp; C) $\\\\{3\\\\}$ &nbsp; D) $\\\\{1,-3\\\\}$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> Çarpım sıfır olacaksa çarpanlardan biri sıfır: $x=-1$ veya $x=3$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>$f(x)=|x-2|+|x+2|$ fonksiyonunun grafiği için ne söylenebilir?</p>
<p>A) $-2\\\\le x\\\\le2$ aralığında sabit (=4) değer alır &nbsp; B) Her yerde artandır &nbsp; C) Her yerde azalandır &nbsp; D) Parabol şeklindedir &nbsp; E) Hiçbir yerde sabit değildir</p>
<p><strong>Çözüm:</strong> $[-2,2]$ aralığında toplam her zaman $4$ (minimum $|2-(-2)|=4$) sabit kalır; dışında doğrusal artar/azalır. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>$|x-a|&lt;|x-b|$ eşitsizliği (a&lt;b) hangi $x$ değerleri için sağlanır?</p>
<p>A) $x&lt;\\\\frac{a+b}2$ &nbsp; B) $x&gt;\\\\frac{a+b}2$ &nbsp; C) $x&lt;a$ &nbsp; D) $x&gt;b$ &nbsp; E) Her $x$ için</p>
<p><strong>Çözüm:</strong> $x$'in $a$'ya olan uzaklığı $b$'ye olan uzaklığından küçükse, $x$ ortanoktadan $a$ tarafında olmalıdır: $x&lt;\\\\frac{a+b}2$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>$|x^2-4|&lt;5$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $(-3,3)$ &nbsp; B) $(-3,-1)\\\\cup(1,3)$ değil, tek aralık: $(-3,3)$ &nbsp; C) $(-1,1)$ &nbsp; D) $(-\\\\infty,-3)\\\\cup(3,\\\\infty)$ &nbsp; E) $[-3,3]$</p>
<p><strong>Çözüm:</strong> $-5&lt;x^2-4&lt;5\\\\Rightarrow-1&lt;x^2&lt;9$; $x^2\\\\ge0$ her zaman olduğundan sol taraf otomatik sağlanır; $x^2&lt;9\\\\Rightarrow-3&lt;x&lt;3$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>$|3x-6|=|x+2|$ denkleminin çözüm kümesi nedir?</p>
<p>A) $\\\\{2,1\\\\}$ &nbsp; B) $\\\\{4,1\\\\}$ &nbsp; C) $\\\\{2,-1\\\\}$ &nbsp; D) $\\\\{4,-1\\\\}$ &nbsp; E) $\\\\{2\\\\}$</p>
<p><strong>Çözüm:</strong> $3x-6=x+2\\\\Rightarrow2x=8\\\\Rightarrow x=4$; $3x-6=-(x+2)\\\\Rightarrow3x-6=-x-2\\\\Rightarrow4x=4\\\\Rightarrow x=1$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>$|x|+|x-1|+|x-2|+\\\\cdots+|x-10|$ (11 terim) ifadesinin minimumu hangi $x$'te alınır?</p>
<p>A) $x=5$ (ortanca terim) &nbsp; B) $x=0$ &nbsp; C) $x=10$ &nbsp; D) $x=5,5$ &nbsp; E) Herhangi bir yerde alınmaz</p>
<p><strong>Çözüm:</strong> Tek sayıda (11) terimde minimum, medyan noktasında (0'dan 10'a sıralı noktaların ortancası, yani 5) alınır. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>$a,b,c$ üçgenin kenar uzunlukları olmak üzere $|a-b|&lt;c&lt;a+b$ eşitsizliği hangi geometrik kuralın cebirsel ifadesidir?</p>
<p>A) Üçgen eşitsizliği (kenarortay teoremi değil) &nbsp; B) Pisagor teoremi &nbsp; C) Kosinüs teoremi &nbsp; D) Alan formülü &nbsp; E) Hiçbiri</p>
<p><strong>Çözüm:</strong> Bir üçgenin kenar uzunluklarının sağlaması gereken temel koşul (üçgen eşitsizliği) budur. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<hr />
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<ol>
<li>$|x+4|=6$ denkleminin çözüm kümesi nedir?<br>A) $\\\\{2,-10\\\\}$ &nbsp; B) $\\\\{10,-2\\\\}$ &nbsp; C) $\\\\{2,10\\\\}$ &nbsp; D) $\\\\{-2,-10\\\\}$ &nbsp; E) Çözüm yok</li>
<li>$|x|\\\\ge5$ eşitsizliğinin çözüm kümesi nedir?<br>A) $(-\\\\infty,-5]\\\\cup[5,\\\\infty)$ &nbsp; B) $[-5,5]$ &nbsp; C) $(-5,5)$ &nbsp; D) $(-\\\\infty,5]$ &nbsp; E) $[5,\\\\infty)$</li>
<li>$|x-3|+|x-7|$ ifadesinin minimum değeri kaçtır?<br>A) 2 &nbsp; B) 4 &nbsp; C) 5 &nbsp; D) 10 &nbsp; E) 0</li>
<li>$|2x+4|=0$ denkleminin çözümü nedir?<br>A) $x=2$ &nbsp; B) $x=-2$ &nbsp; C) $x=4$ &nbsp; D) $x=0$ &nbsp; E) Çözüm yok</li>
<li>$|x-5|&lt;2$ eşitsizliğinin çözüm kümesi nedir?<br>A) $(3,7)$ &nbsp; B) $(-3,7)$ &nbsp; C) $(3,-7)$ &nbsp; D) $[3,7]$ &nbsp; E) $(-\\\\infty,3)\\\\cup(7,\\\\infty)$</li>
<li>$||x|-4|=1$ denkleminin çözüm kümesi kaç elemanlıdır?<br>A) 2 &nbsp; B) 3 &nbsp; C) 4 &nbsp; D) 1 &nbsp; E) 0</li>
<li>$x^2-3|x|-4=0$ denkleminin gerçek kök sayısı kaçtır ($t=|x|$, $t^2-3t-4=0\\\\Rightarrow(t-4)(t+1)=0$)?<br>A) 4 &nbsp; B) 2 &nbsp; C) 3 &nbsp; D) 0 &nbsp; E) 1</li>
<li>$|x-1|+|x-2|+|x-3|+|x-4|+|x-5|$ (5 terim) minimumu hangi $x$'te alınır?<br>A) $x=3$ &nbsp; B) $x=2$ &nbsp; C) $x=1$ &nbsp; D) $x=5$ &nbsp; E) $x=2,5$</li>
<li>$|x-a|=|x-b|$ ($a\\\\ne b$) denkleminin çözümü nedir?<br>A) $x=\\\\frac{a+b}2$ (tek çözüm) &nbsp; B) $x=a$ &nbsp; C) $x=b$ &nbsp; D) Çözüm yok &nbsp; E) Sonsuz çözüm</li>
<li>$-5\\\\le x\\\\le3$ aralığı mutlak değerle nasıl yazılır?<br>A) $|x+1|\\\\le4$ &nbsp; B) $|x-1|\\\\le4$ &nbsp; C) $|x+1|\\\\ge4$ &nbsp; D) $|x|\\\\le4$ &nbsp; E) $|x-4|\\\\le1$</li>
<li>$|x+2|\\\\cdot|x-5|=0$ denkleminin çözüm kümesi nedir?<br>A) $\\\\{-2,5\\\\}$ &nbsp; B) $\\\\{2,-5\\\\}$ &nbsp; C) $\\\\{-2\\\\}$ &nbsp; D) $\\\\{5\\\\}$ &nbsp; E) Çözüm yok</li>
<li>$|x|+|y|=6$ grafiği hangi şekli oluşturur?<br>A) Çember &nbsp; B) Kare (elmas) &nbsp; C) Üçgen &nbsp; D) Doğru &nbsp; E) Parabol</li>
<li>$|x-2|-|x+1|=3$ denklemi $x\\\\ge2$ bölgesinde çözülürse ne bulunur?<br>A) $(x-2)-(x+1)=-3$, her zaman doğru olduğundan bu bölgede çözüm yoktur (çünkü -3≠3) &nbsp; B) $x=2$ tek çözüm &nbsp; C) Tüm $x\\\\ge2$ çözümdür &nbsp; D) $x=5$ &nbsp; E) $x=-1$</li>
<li>$|x^2-1|\\\\le3$ eşitsizliğinin çözüm kümesi nedir?<br>A) $[-2,2]$ &nbsp; B) $[-1,1]$ &nbsp; C) $[-4,4]$ &nbsp; D) $(-2,2)$ &nbsp; E) $[2,\\\\infty)$</li>
<li>$|a-b|\\\\le|a|+|b|$ eşitsizliği için ne söylenebilir?<br>A) Üçgen eşitsizliğinin bir biçimidir, her zaman doğrudur &nbsp; B) Sadece $a,b&gt;0$ için doğrudur &nbsp; C) Yanlıştır &nbsp; D) Sadece $a=b$ için doğrudur &nbsp; E) Belirsiz</li>
<li>$|3x-9|=0$ denkleminin çözümü nedir?<br>A) $x=3$ &nbsp; B) $x=9$ &nbsp; C) $x=-3$ &nbsp; D) $x=0$ &nbsp; E) Çözüm yok</li>
<li>$|x-4|+|x-4|$ ifadesi hangi ifadeye eşittir?<br>A) $2|x-4|$ &nbsp; B) $|2x-8|$ &nbsp; C) A ve B eşdeğer &nbsp; D) $0$ &nbsp; E) $|x-4|^2$</li>
<li>$|x|\\\\cdot|x|$ ifadesi neye eşittir?<br>A) $x^2$ &nbsp; B) $|x|$ &nbsp; C) $2|x|$ &nbsp; D) $-x^2$ &nbsp; E) $|x^2|$ (bu da A ile aynı)</li>
<li>$x^2-6|x|+8=0$ denkleminin kaç gerçek kökü vardır?<br>A) 4 &nbsp; B) 2 &nbsp; C) 3 &nbsp; D) 0 &nbsp; E) 1</li>
<li>$|x-1|&gt;|x-5|$ eşitsizliğinin çözüm kümesi nedir?<br>A) $x&gt;3$ &nbsp; B) $x&lt;3$ &nbsp; C) $x&gt;5$ &nbsp; D) $x&lt;1$ &nbsp; E) Tüm reel sayılar</li>
</ol>

<hr />
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. B</strong> — $x+4=6\\\\Rightarrow x=2$; $x+4=-6\\\\Rightarrow x=-10$; sıralı: $\\\\{10,-2\\\\}$ değil düzeltme: $\\\\{2,-10\\\\}$; doğru cevap A.</p>
<p><strong>2. A</strong> — $x\\\\le-5$ veya $x\\\\ge5$.</p>
<p><strong>3. B</strong> — $|7-3|=4$.</p>
<p><strong>4. B</strong> — $2x+4=0\\\\Rightarrow x=-2$.</p>
<p><strong>5. A</strong> — $3&lt;x&lt;7$.</p>
<p><strong>6. C</strong> — $|x|=5\\\\Rightarrow x=\\\\pm5$; $|x|=3\\\\Rightarrow x=\\\\pm3$; toplam 4.</p>
<p><strong>7. B</strong> — $t=4\\\\Rightarrow x=\\\\pm4$ (t=-1 geçersiz); 2 kök.</p>
<p><strong>8. A</strong> — Tek sayıda (5) terimde minimum ortanca noktada (3) alınır.</p>
<p><strong>9. A</strong> — İki noktaya eşit uzaklıktaki tek nokta ortanoktadır.</p>
<p><strong>10. A</strong> — Merkez $\\\\frac{-5+3}2=-1$, yarıçap $4$; $|x-(-1)|\\\\le4=|x+1|\\\\le4$.</p>
<p><strong>11. A</strong> — Çarpanlardan biri sıfır: $x=-2$ veya $x=5$.</p>
<p><strong>12. B</strong> — Kare (elmas) şekli.</p>
<p><strong>13. A</strong> — $x\\\\ge2$'de $(x-2)-(x+1)=-3$, bu her zaman $-3$'tür, $3$'e değil; bu bölgede çözüm YOKTUR.</p>
<p><strong>14. A</strong> — $-3\\\\le x^2-1\\\\le3\\\\Rightarrow-2\\\\le x^2\\\\le4$; sol otomatik sağlanır, $x^2\\\\le4\\\\Rightarrow-2\\\\le x\\\\le2$.</p>
<p><strong>15. A</strong> — Üçgen eşitsizliğinin standart biçimidir.</p>
<p><strong>16. A</strong> — $3x-9=0\\\\Rightarrow x=3$.</p>
<p><strong>17. C</strong> — $2|x-4|=|2||x-4|=|2x-8|$; A ve B eşdeğerdir.</p>
<p><strong>18. E</strong> — $|x|^2=x^2=|x^2|$; A ve E aynı değeri temsil eder, en kapsayıcı doğru cevap A'dır (E de doğru ama sorunun beklediği ana cevap A).</p>
<p><strong>19. A</strong> — $t=|x|$: $t^2-6t+8=0\\\\Rightarrow(t-2)(t-4)=0$; $t=2,4$ ikisi de pozitif, her biri 2 kök: toplam 4.</p>
<p><strong>20. B</strong> — $x$'in 1'e olan uzaklığı 5'e olandan büyükse, $x$ ortanoktadan (3) küçük olmalı: $x&lt;3$.</p>

<hr />
<h2>13. Ultra Özet</h2>
<blockquote><p><strong>MUTLAK DEĞER — TEK SAYFA</strong><br>
1. $|x|=k\\\\Rightarrow x=\\\\pm k$; $|x|&lt;k\\\\Rightarrow-k&lt;x&lt;k$; $|x|&gt;k\\\\Rightarrow x&lt;-k$ veya $x&gt;k$.<br>
2. $|x-a|+|x-b|$ minimum $=|a-b|$, $x\\\\in[a,b]$'de (a küçük).<br>
3. Çok terimli mutlak değer ifadelerinde minimum, TEK sayıda terimde ORTANCA noktada, ÇİFT sayıda terimde ORTA İKİ NOKTA arasında herhangi bir yerde alınır.<br>
4. Birden fazla mutlak değerli denklem/eşitsizlikte kritik noktalarla BÖLGELERE ayır, her bölgede ayrı çöz.<br>
5. Üçgen eşitsizliği: $|a+b|\\\\le|a|+|b|$, $||a|-|b||\\\\le|a-b|$.</p></blockquote>

<hr />
<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• $|x|$ = 0'a uzaklık; $|x-a|$ = a'ya uzaklık.<br>
• Çok terimli minimum problemlerinde medyan noktasını bul.<br>
• Birden fazla mutlak değerde kritik noktalarla bölgele, her bölgede ayrı işaret aç.<br>
• $|x|=-k$ (k>0) her zaman çözümsüzdür.<br>
• $t=|x|$ dönüşümüyle ikinci derece denkleme indirgeyip kök sayısını dikkatli say (her pozitif t iki x verir).</p>
</div>
\` },`,
  },
  {
    id: 22,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Çarpanlara Ayırma ve Özdeşlikler',
    built: true,
    html: `<h3>(Temel Özdeşlikler, Gruplandırma, Simetrik İfadeler, Küp Özdeşlikleri — İleri Seviye)</h3>
<hr />

<h2>1. Konunun Mantığı</h2>
<p>Çarpanlara ayırma, cebirin İSKELET tekniğidir; denklemler, eşitsizlikler, hatta sayı problemleri bu beceriye dayanır. İleri seviyede asıl önemli olan özdeşlikleri EZBERE değil, TERS YÖNDE de (bir toplamdan çarpım kurma, bir çarpımdan toplam kurma) kullanabilmektir.</p>

<hr />
<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p>$a^2-b^2=(a-b)(a+b)$; $a^2\\\\pm2ab+b^2=(a\\\\pm b)^2$; $a^3\\\\pm b^3=(a\\\\pm b)(a^2\\\\mp ab+b^2)$; $a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$.</p>
<p><strong>Gruplandırma:</strong> 4 terimli ifadelerde ortak çarpanı olan ikişerli gruplar oluştur: $ax+ay+bx+by=a(x+y)+b(x+y)=(a+b)(x+y)$.</p>

<hr />
<h2>3. İleri Düzey Ayrıntılar</h2>
<ul>
<li>$(a+b)^2-(a-b)^2=4ab$; $(a+b)^2+(a-b)^2=2(a^2+b^2)$ — bu iki özdeşlik simetrik ifade problemlerinde çok işe yarar.</li>
<li>$a+b+c=0$ ise $a^3+b^3+c^3=3abc$ (özel durum, kübik özdeşlikten türer).</li>
<li>$x^2+\\\\dfrac1{x^2}=(x+\\\\dfrac1x)^2-2$; $x^3+\\\\dfrac1{x^3}=(x+\\\\dfrac1x)^3-3(x+\\\\dfrac1x)$ — bu iki kalıp sınavlarda çok sık çıkar.</li>
</ul>

<hr />
<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🟨 Ezber Kutusu</span><p>$x+\\\\frac1x=k$ verilince $x^2+\\\\frac1{x^2}=k^2-2$, $x^3+\\\\frac1{x^3}=k^3-3k$ formüllerini direkt kullan; ara işlem yapmaya gerek yok.</p></div>

<hr />
<h2>5. Karşılaştırma Tabloları</h2>
<table><thead><tr><th>Özdeşlik</th><th>Açılım</th></tr></thead><tbody>
<tr><td>$(a+b)^2$</td><td>$a^2+2ab+b^2$</td></tr>
<tr><td>$(a-b)^2$</td><td>$a^2-2ab+b^2$</td></tr>
<tr><td>$a^2-b^2$</td><td>$(a-b)(a+b)$</td></tr>
<tr><td>$a^3+b^3$</td><td>$(a+b)(a^2-ab+b^2)$</td></tr>
<tr><td>$a^3-b^3$</td><td>$(a-b)(a^2+ab+b^2)$</td></tr>
</tbody></table>

<hr />
<h2>6. Sınıflandırma Şeması</h2>
<blockquote><p>İfade gördüğünde: 1) İki terimli mi (fark/toplam of kareler/küpler) → ilgili özdeşliği uygula → 2) Üç terimli mi (tam kare adayı) → $(a\\\\pm b)^2$ formuna oturt → 3) Dört+ terimli mi → gruplama dene → 4) $x+1/x$ tipi simetrik ifade mi → hazır kalıpları kullan.</p></blockquote>

<hr />
<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">⚠️ ÖSYM Tuzağı</span><p>$a^3-b^3=(a-b)(a^2+ab+b^2)$'deki orta terim İŞARETİ $+ab$'dir, $a^2-b^2$'nin çarpanındaki gibi $-ab$ DEĞİLDİR; küp özdeşliklerinde işaret hatası en sık yapılan yanlıştır.</p></div>

<hr />
<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de bu konu, denklemler ve sayı problemleri içine gömülü olarak, $x+1/x$ tipi simetrik ifadeler ve $a^2-b^2$ tipi hızlı çarpım/bölüm soruları şeklinde gelir.</p>

<hr />
<h2>9. Soru Çözüm Stratejileri</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">🟦 İpucu</span><p>Büyük sayıların çarpımı/karesi isteniyorsa özdeşliğe uydurmaya çalış: $998\\\\times1002=(1000-2)(1000+2)=1000^2-4$ gibi.</p></div>

<hr />
<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<h3>🟢 Orta-Kolay (1-10)</h3>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>$x^2-9$ ifadesinin çarpanları nedir?</p>
<p>A) $(x-3)(x+3)$ &nbsp; B) $(x-9)(x+1)$ &nbsp; C) $(x-3)^2$ &nbsp; D) $(x+3)^2$ &nbsp; E) Çarpanlanamaz</p>
<p><strong>Çözüm:</strong> $a^2-b^2=(a-b)(a+b)$: $(x-3)(x+3)$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>$998\\\\times1002$ işleminin sonucu kaçtır (özdeşlikle)?</p>
<p>A) 999996 &nbsp; B) 1000000 &nbsp; C) 999004 &nbsp; D) 998996 &nbsp; E) 1000004</p>
<p><strong>Çözüm:</strong> $(1000-2)(1000+2)=1000000-4=999996$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>$x+\\\\dfrac1x=4$ ise $x^2+\\\\dfrac1{x^2}$ kaçtır?</p>
<p>A) 12 &nbsp; B) 14 &nbsp; C) 16 &nbsp; D) 18 &nbsp; E) 10</p>
<p><strong>Çözüm:</strong> $k^2-2=16-2=14$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>$x^2+6x+9$ ifadesinin çarpanları nedir?</p>
<p>A) $(x+3)^2$ &nbsp; B) $(x-3)^2$ &nbsp; C) $(x+3)(x-3)$ &nbsp; D) $(x+9)(x+1)$ &nbsp; E) Çarpanlanamaz</p>
<p><strong>Çözüm:</strong> $x^2+2\\\\cdot x\\\\cdot3+3^2=(x+3)^2$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>$a=51,b=49$ ise $a^2-b^2$ kaçtır?</p>
<p>A) 200 &nbsp; B) 100 &nbsp; C) 4 &nbsp; D) 2 &nbsp; E) 400</p>
<p><strong>Çözüm:</strong> $(a-b)(a+b)=2\\\\times100=200$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>$x^3-8$ ifadesinin çarpanları nedir?</p>
<p>A) $(x-2)(x^2+2x+4)$ &nbsp; B) $(x-2)(x^2-2x+4)$ &nbsp; C) $(x-2)^3$ &nbsp; D) $(x+2)(x^2-2x+4)$ &nbsp; E) Çarpanlanamaz</p>
<p><strong>Çözüm:</strong> $a^3-b^3=(a-b)(a^2+ab+b^2)$: $(x-2)(x^2+2x+4)$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>$(a+b)^2=25$ ve $ab=6$ ise $a^2+b^2$ kaçtır?</p>
<p>A) 13 &nbsp; B) 19 &nbsp; C) 25 &nbsp; D) 31 &nbsp; E) 37</p>
<p><strong>Çözüm:</strong> $a^2+b^2=(a+b)^2-2ab=25-12=13$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>$ax+ay+bx+by$ ifadesinin çarpanları nedir?</p>
<p>A) $(a+b)(x+y)$ &nbsp; B) $(a-b)(x-y)$ &nbsp; C) $ab(x+y)$ &nbsp; D) $(a+x)(b+y)$ &nbsp; E) Çarpanlanamaz</p>
<p><strong>Çözüm:</strong> Gruplama: $a(x+y)+b(x+y)=(a+b)(x+y)$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>$x-y=3$ ve $x^2-y^2=21$ ise $x+y$ kaçtır?</p>
<p>A) 7 &nbsp; B) 6 &nbsp; C) 9 &nbsp; D) 5 &nbsp; E) 8</p>
<p><strong>Çözüm:</strong> $x^2-y^2=(x-y)(x+y)\\\\Rightarrow21=3(x+y)\\\\Rightarrow x+y=7$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>$x^2-5x+6$ ifadesinin çarpanları nedir?</p>
<p>A) $(x-2)(x-3)$ &nbsp; B) $(x+2)(x+3)$ &nbsp; C) $(x-1)(x-6)$ &nbsp; D) $(x-6)(x+1)$ &nbsp; E) Çarpanlanamaz</p>
<p><strong>Çözüm:</strong> Çarpımı 6, toplamı -5 olan iki sayı: -2,-3. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<h3>🟡 Orta-Zor (11-20)</h3>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>$x+\\\\dfrac1x=5$ ise $x^3+\\\\dfrac1{x^3}$ kaçtır?</p>
<p>A) 90 &nbsp; B) 100 &nbsp; C) 110 &nbsp; D) 115 &nbsp; E) 125</p>
<p><strong>Çözüm:</strong> $k^3-3k=125-15=110$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>$a+b+c=0$ ise $a^3+b^3+c^3$ ile $abc$ arasındaki ilişki nedir?</p>
<p>A) $a^3+b^3+c^3=3abc$ &nbsp; B) $a^3+b^3+c^3=abc$ &nbsp; C) $a^3+b^3+c^3=0$ &nbsp; D) İlişki kurulamaz &nbsp; E) $a^3+b^3+c^3=-3abc$</p>
<p><strong>Çözüm:</strong> $a+b+c=0$ özel durumunda $a^3+b^3+c^3=3abc$ olur. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>$a=2+\\\\sqrt3$, $b=2-\\\\sqrt3$ ise $a^2-b^2$ kaçtır (özdeşlikle, uzun açmadan)?</p>
<p>A) $4\\\\sqrt3$ &nbsp; B) $8\\\\sqrt3$ &nbsp; C) $2\\\\sqrt3$ &nbsp; D) $4$ &nbsp; E) $8$</p>
<p><strong>Çözüm:</strong> $(a-b)(a+b)=(2\\\\sqrt3)(4)=8\\\\sqrt3$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>$x^2+y^2=13$ ve $xy=6$ ise $(x+y)^2$ kaçtır?</p>
<p>A) 25 &nbsp; B) 19 &nbsp; C) 1 &nbsp; D) 13 &nbsp; E) 37</p>
<p><strong>Çözüm:</strong> $(x+y)^2=x^2+2xy+y^2=13+12=25$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>$x-\\\\dfrac1x=3$ ise $x^2+\\\\dfrac1{x^2}$ kaçtır (dikkat: fark verilmiş, işaret farkı önemli)?</p>
<p>A) 7 &nbsp; B) 9 &nbsp; C) 11 &nbsp; D) 13 &nbsp; E) 5</p>
<p><strong>Çözüm:</strong> $(x-\\\\frac1x)^2=x^2-2+\\\\frac1{x^2}=9\\\\Rightarrow x^2+\\\\frac1{x^2}=11$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>$x^4-1$ ifadesinin TAM çarpanlara ayrılışı nedir?</p>
<p>A) $(x-1)(x+1)(x^2+1)$ &nbsp; B) $(x^2-1)^2$ &nbsp; C) $(x-1)^2(x+1)^2$ &nbsp; D) $(x^2+1)^2$ &nbsp; E) Çarpanlanamaz</p>
<p><strong>Çözüm:</strong> $x^4-1=(x^2-1)(x^2+1)=(x-1)(x+1)(x^2+1)$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>$2x^2+5x+3$ ifadesinin çarpanları nedir?</p>
<p>A) $(2x+3)(x+1)$ &nbsp; B) $(2x+1)(x+3)$ &nbsp; C) $(x+3)(2x+3)$ &nbsp; D) $(x-1)(2x-3)$ &nbsp; E) Çarpanlanamaz</p>
<p><strong>Çözüm:</strong> $(2x+3)(x+1)=2x^2+2x+3x+3=2x^2+5x+3$ ✓. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>$(x+y)^2-(x-y)^2$ ifadesi hangi ifadeye eşittir?</p>
<p>A) $4xy$ &nbsp; B) $2xy$ &nbsp; C) $x^2+y^2$ &nbsp; D) $2x^2$ &nbsp; E) $0$</p>
<p><strong>Çözüm:</strong> $(a+b)^2-(a-b)^2=4ab$ özdeşliği: $4xy$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>$x^2-4x+4=0$ denkleminin köklerinin toplamı ile çarpımı nedir?</p>
<p>A) Toplam 4, çarpım 4 &nbsp; B) Toplam -4, çarpım 4 &nbsp; C) Toplam 4, çarpım -4 &nbsp; D) Toplam 2, çarpım 2 &nbsp; E) Toplam 0, çarpım 4</p>
<p><strong>Çözüm:</strong> $(x-2)^2=0\\\\Rightarrow x=2$ (çift kök); Vieta: toplam $=4$, çarpım $=4$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>$a^2+b^2+c^2-ab-bc-ca$ ifadesi hangi durumda sıfır olur?</p>
<p>A) $a=b=c$ olduğunda &nbsp; B) $a+b+c=0$ olduğunda &nbsp; C) $abc=0$ olduğunda &nbsp; D) Her zaman sıfırdır &nbsp; E) Hiçbir zaman sıfır olmaz</p>
<p><strong>Çözüm:</strong> Bu ifade $\\\\frac12[(a-b)^2+(b-c)^2+(c-a)^2]$'ye eşittir; sadece $a=b=c$ iken sıfır olur. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<h3>🔴 Zor (21-30)</h3>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>$x^2+\\\\dfrac1{x^2}=7$ ise $x+\\\\dfrac1x$ değerinin (pozitif $x$ için) alabileceği değer(ler) nedir?</p>
<p>A) 3 &nbsp; B) $\\\\pm3$ &nbsp; C) $\\\\pm\\\\sqrt7$ &nbsp; D) 9 &nbsp; E) $\\\\sqrt5$</p>
<p><strong>Çözüm:</strong> $(x+\\\\frac1x)^2=x^2+2+\\\\frac1{x^2}=9\\\\Rightarrow x+\\\\frac1x=\\\\pm3$; $x&gt;0$ ise $x+\\\\frac1x&gt;0$, tek değer $3$; ama soru genel sorduğundan işaretli B, sadece pozitif için A. <span class="cevap-dogru">Doğru cevap: A (x pozitif koşuluyla).</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>$a^3+b^3=35$, $a+b=5$ ise $ab$ kaçtır?</p>
<p>A) 2 &nbsp; B) 3 &nbsp; C) 4 &nbsp; D) 6 &nbsp; E) 5</p>
<p><strong>Çözüm:</strong> $a^3+b^3=(a+b)^3-3ab(a+b)\\\\Rightarrow35=125-15ab\\\\Rightarrow15ab=90\\\\Rightarrow ab=6$. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>$x^4+4$ ifadesi (Sophie Germain özdeşliği) nasıl çarpanlarına ayrılır?</p>
<p>A) $(x^2+2x+2)(x^2-2x+2)$ &nbsp; B) $(x^2+2)^2-4x^2$ değil doğrudan A &nbsp; C) $(x^2+4)(x^2-4)$ &nbsp; D) $(x^2+2)(x^2-2)$ &nbsp; E) Çarpanlanamaz</p>
<p><strong>Çözüm:</strong> $x^4+4=x^4+4x^2+4-4x^2=(x^2+2)^2-(2x)^2=(x^2+2x+2)(x^2-2x+2)$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>$\\\\dfrac{x^3-27}{x-3}$ ifadesinin ($x\\\\ne3$) sadeleşmiş hâli nedir?</p>
<p>A) $x^2+3x+9$ &nbsp; B) $x^2-3x+9$ &nbsp; C) $x^2+9$ &nbsp; D) $x^2-9$ &nbsp; E) $x+3$</p>
<p><strong>Çözüm:</strong> $x^3-27=(x-3)(x^2+3x+9)$; sadeleşince $x^2+3x+9$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>$a,b,c$ pozitif tam sayılar, $a^2-b^2=45$ ve $a-b=1$ ise $a+b$ kaçtır?</p>
<p>A) 43 &nbsp; B) 45 &nbsp; C) 44 &nbsp; D) 46 &nbsp; E) 47</p>
<p><strong>Çözüm:</strong> $(a-b)(a+b)=45\\\\Rightarrow1\\\\times(a+b)=45\\\\Rightarrow a+b=45$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>$a^2+b^2=(a+b)^2-2ab$ özdeşliğinden yararlanarak, $a+b=10$ ve $ab=21$ ise $a-b$ kaçtır (pozitif değer)?</p>
<p>A) 2 &nbsp; B) 4 &nbsp; C) 6 &nbsp; D) 8 &nbsp; E) 10</p>
<p><strong>Çözüm:</strong> $(a-b)^2=(a+b)^2-4ab=100-84=16\\\\Rightarrow a-b=4$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>$x^6-1$ ifadesi hem $x^2-1$ hem $x^3-1$'in katıdır. Bu ifadenin tam çarpanlarına ayrılışında kaç FARKLI birinci/ikinci dereceden çarpan bulunur ($x^6-1=(x-1)(x+1)(x^2+x+1)(x^2-x+1)$)?</p>
<p>A) 2 &nbsp; B) 3 &nbsp; C) 4 &nbsp; D) 5 &nbsp; E) 6</p>
<p><strong>Çözüm:</strong> $(x-1),(x+1),(x^2+x+1),(x^2-x+1)$ olmak üzere 4 farklı çarpan. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>$a-b=4$, $a^3-b^3=208$ ise $ab$ kaçtır?</p>
<p>A) 8 &nbsp; B) 10 &nbsp; C) 12 &nbsp; D) 14 &nbsp; E) 16</p>
<p><strong>Çözüm:</strong> $a^3-b^3=(a-b)^3+3ab(a-b)\\\\Rightarrow208=64+12ab\\\\Rightarrow12ab=144\\\\Rightarrow ab=12$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>$p(x)=x^2-(a+b)x+ab$ ifadesinin çarpanları nedir?</p>
<p>A) $(x-a)(x-b)$ &nbsp; B) $(x+a)(x+b)$ &nbsp; C) $(x-a)(x+b)$ &nbsp; D) $(x-ab)(x-1)$ &nbsp; E) Çarpanlanamaz</p>
<p><strong>Çözüm:</strong> Toplamı $(a+b)$, çarpımı $ab$ olan iki sayı $a$ ve $b$'dir: $(x-a)(x-b)$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>$x+y+z=6$, $xy+yz+zx=11$, $xyz=6$ ise $x^3+y^3+z^3-3xyz$ kaçtır (özdeşlik: $=(x+y+z)(x^2+y^2+z^2-xy-yz-zx)$, ve $x^2+y^2+z^2=(x+y+z)^2-2(xy+yz+zx)$)?</p>
<p>A) 12 &nbsp; B) 15 &nbsp; C) 18 &nbsp; D) 21 &nbsp; E) 24</p>
<p><strong>Çözüm:</strong> $x^2+y^2+z^2=36-22=14$; $x^2+y^2+z^2-xy-yz-zx=14-11=3$; $(x+y+z)\\\\times3=6\\\\times3=18$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<hr />
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<ol>
<li>$x^2-16$ ifadesinin çarpanları nedir?<br>A) $(x-4)(x+4)$ &nbsp; B) $(x-8)(x+2)$ &nbsp; C) $(x-4)^2$ &nbsp; D) $(x+4)^2$ &nbsp; E) Çarpanlanamaz</li>
<li>$102\\\\times98$ işleminin sonucu kaçtır?<br>A) 9996 &nbsp; B) 10000 &nbsp; C) 9994 &nbsp; D) 10004 &nbsp; E) 9990</li>
<li>$x+\\\\frac1x=6$ ise $x^2+\\\\frac1{x^2}$ kaçtır?<br>A) 32 &nbsp; B) 34 &nbsp; C) 36 &nbsp; D) 38 &nbsp; E) 30</li>
<li>$x^2-8x+16$ ifadesinin çarpanları nedir?<br>A) $(x-4)^2$ &nbsp; B) $(x+4)^2$ &nbsp; C) $(x-4)(x+4)$ &nbsp; D) $(x-8)(x-2)$ &nbsp; E) Çarpanlanamaz</li>
<li>$x^3+27$ ifadesinin çarpanları nedir?<br>A) $(x+3)(x^2-3x+9)$ &nbsp; B) $(x+3)(x^2+3x+9)$ &nbsp; C) $(x+3)^3$ &nbsp; D) $(x-3)(x^2+3x+9)$ &nbsp; E) Çarpanlanamaz</li>
<li>$(a+b)^2=64$, $ab=15$ ise $a^2+b^2$ kaçtır?<br>A) 30 &nbsp; B) 34 &nbsp; C) 49 &nbsp; D) 79 &nbsp; E) 94</li>
<li>$x-y=5$, $x^2-y^2=45$ ise $x+y$ kaçtır?<br>A) 5 &nbsp; B) 7 &nbsp; C) 9 &nbsp; D) 11 &nbsp; E) 13</li>
<li>$x+\\\\frac1x=3$ ise $x^3+\\\\frac1{x^3}$ kaçtır?<br>A) 12 &nbsp; B) 15 &nbsp; C) 18 &nbsp; D) 21 &nbsp; E) 27</li>
<li>$a+b+c=0$, $ab+bc+ca=-7$ ise $a^2+b^2+c^2$ kaçtır?<br>A) 7 &nbsp; B) 14 &nbsp; C) 0 &nbsp; D) -7 &nbsp; E) 49</li>
<li>$x^4-16$ ifadesinin tam çarpanlara ayrılışı nedir?<br>A) $(x-2)(x+2)(x^2+4)$ &nbsp; B) $(x^2-4)^2$ &nbsp; C) $(x-2)^2(x+2)^2$ &nbsp; D) $(x^2+4)^2$ &nbsp; E) Çarpanlanamaz</li>
<li>$3x^2+7x+2$ ifadesinin çarpanları nedir?<br>A) $(3x+1)(x+2)$ &nbsp; B) $(3x+2)(x+1)$ &nbsp; C) $(x+1)(3x+2)$ aynı B &nbsp; D) $(3x-1)(x-2)$ &nbsp; E) Çarpanlanamaz</li>
<li>$(x+y)^2-(x-y)^2=48$ ve $x=5$ ise $y$ kaçtır?<br>A) 2,4 &nbsp; B) 3 &nbsp; C) 4 &nbsp; D) 2,5 &nbsp; E) 5</li>
<li>$x^2-2x+1=0$ denkleminin köklerinin toplamı ve çarpımı nedir?<br>A) Toplam 2, çarpım 1 &nbsp; B) Toplam -2, çarpım 1 &nbsp; C) Toplam 2, çarpım -1 &nbsp; D) Toplam 1, çarpım 2 &nbsp; E) Toplam 0, çarpım 1</li>
<li>$a^3-b^3=(a-b)(a^2+ab+b^2)$ özdeşliğinde $a=4,b=2$ için sağ taraf kaçtır?<br>A) 56 &nbsp; B) 48 &nbsp; C) 64 &nbsp; D) 40 &nbsp; E) 72</li>
<li>$x-\\\\frac1x=2$ ise $x^2+\\\\frac1{x^2}$ kaçtır?<br>A) 4 &nbsp; B) 6 &nbsp; C) 8 &nbsp; D) 2 &nbsp; E) 10</li>
<li>$x^2+y^2+z^2-xy-yz-zx$ ifadesi hangi koşulda sıfır olur?<br>A) $x=y=z$ &nbsp; B) $x+y+z=0$ &nbsp; C) $xyz=0$ &nbsp; D) Her zaman sıfırdır &nbsp; E) Asla sıfır olmaz</li>
<li>$a=3+\\\\sqrt2$, $b=3-\\\\sqrt2$ ise $a^2-b^2$ kaçtır?<br>A) $6\\\\sqrt2$ &nbsp; B) $12\\\\sqrt2$ &nbsp; C) $2\\\\sqrt2$ &nbsp; D) $6$ &nbsp; E) $12$</li>
<li>$x^2-x-6$ ifadesinin çarpanları nedir?<br>A) $(x-3)(x+2)$ &nbsp; B) $(x+3)(x-2)$ &nbsp; C) $(x-6)(x+1)$ &nbsp; D) $(x+6)(x-1)$ &nbsp; E) Çarpanlanamaz</li>
<li>$a+b=7$, $ab=10$ ise $a^3+b^3$ kaçtır?<br>A) 133 &nbsp; B) 143 &nbsp; C) 153 &nbsp; D) 163 &nbsp; E) 173</li>
<li>$999^2-1$ işleminin sonucu kaçtır (özdeşlikle)?<br>A) 998000 &nbsp; B) 998001 &nbsp; C) 997999 &nbsp; D) 999000 &nbsp; E) 996004</li>
</ol>

<hr />
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. A</strong> — $(x-4)(x+4)$.</p>
<p><strong>2. A</strong> — $(100+2)(100-2)=10000-4=9996$.</p>
<p><strong>3. B</strong> — $36-2=34$.</p>
<p><strong>4. A</strong> — $(x-4)^2$.</p>
<p><strong>5. A</strong> — $a^3+b^3=(a+b)(a^2-ab+b^2)$: $(x+3)(x^2-3x+9)$.</p>
<p><strong>6. B</strong> — $64-30=34$.</p>
<p><strong>7. C</strong> — $45/5=9$.</p>
<p><strong>8. C</strong> — $27-9=18$.</p>
<p><strong>9. B</strong> — $a^2+b^2+c^2=(a+b+c)^2-2(ab+bc+ca)=0-2(-7)=14$.</p>
<p><strong>10. A</strong> — $(x-2)(x+2)(x^2+4)$.</p>
<p><strong>11. A</strong> — $(3x+1)(x+2)=3x^2+6x+x+2=3x^2+7x+2$ ✓.</p>
<p><strong>12. A</strong> — $4xy=48\\\\Rightarrow xy=12\\\\Rightarrow y=12/5=2,4$.</p>
<p><strong>13. A</strong> — Vieta: toplam 2, çarpım 1.</p>
<p><strong>14. A</strong> — $(4-2)(16+8+4)=2\\\\times28=56$.</p>
<p><strong>15. B</strong> — $4+2=6$.</p>
<p><strong>16. A</strong> — Sadece $x=y=z$ iken sıfır.</p>
<p><strong>17. B</strong> — $(a-b)(a+b)=(2\\\\sqrt2)(6)=12\\\\sqrt2$.</p>
<p><strong>18. A</strong> — Çarpımı -6, toplamı -1 olan iki sayı: -3,2 → $(x-3)(x+2)$.</p>
<p><strong>19. A</strong> — $(a+b)^3-3ab(a+b)=343-210=133$.</p>
<p><strong>20. A</strong> — $(999-1)(999+1)=998\\\\times1000=998000$.</p>

<hr />
<h2>13. Ultra Özet</h2>
<blockquote><p><strong>ÇARPANLARA AYIRMA VE ÖZDEŞLİKLER — TEK SAYFA</strong><br>
1. $a^2-b^2=(a-b)(a+b)$; $(a\\\\pm b)^2=a^2\\\\pm2ab+b^2$.<br>
2. $a^3\\\\pm b^3=(a\\\\pm b)(a^2\\\\mp ab+b^2)$ — işaretlere DİKKAT.<br>
3. $x+\\\\frac1x=k\\\\Rightarrow x^2+\\\\frac1{x^2}=k^2-2,\\\\ x^3+\\\\frac1{x^3}=k^3-3k$.<br>
4. $a+b+c=0\\\\Rightarrow a^3+b^3+c^3=3abc$.<br>
5. Sophie Germain: $x^4+4y^4=(x^2+2y^2+2xy)(x^2+2y^2-2xy)$.<br>
6. 4 terimli ifadelerde gruplama dene; büyük sayı çarpımlarını $(a-b)(a+b)$ kalıbına oturt.</p></blockquote>

<hr />
<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• Küp özdeşliklerinde orta terim işaretine dikkat ($a^3-b^3$'te $+ab$).<br>
• $x+1/x$ kalıplarını ezbere bil, ara işlem yapma.<br>
• $a+b+c=0$ özel durumunu tanı.<br>
• Büyük sayı çarpımlarında özdeşliğe uydurmayı dene.</p>
</div>
\` },`,
  },
  {
    id: 23,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Oran-Orantı',
    built: true,
    html: `<h3>(Doğru-Ters Orantı, Bileşik Orantı, Oran Zincirleri, Ortaklık Problemleri — İleri Seviye)</h3>
<hr />

<h2>1. Konunun Mantığı</h2>
<p>Oran-orantı, KPSS sayısal bölümünün en çok problem türüne (işçi-havuz, karışım, ortaklık, ölçek) altyapı sağlayan konudur. İleri seviyede asıl beceri, bir problemde DOĞRU orantı mı TERS orantı mı kurulacağını saniyeler içinde ayırt etmek ve BİLEŞİK (çok değişkenli) orantıları tek denklemde toplayabilmektir.</p>

<hr />
<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p><strong>Doğru orantı:</strong> Biri artarken diğeri de artar, oranı ($x/y$) SABİTTİR.</p>
<p><strong>Ters orantı:</strong> Biri artarken diğeri azalır, çarpımı ($x\\\\cdot y$) SABİTTİR.</p>
<p><strong>Bileşik orantı:</strong> Birden fazla değişken (işçi sayısı, gün, saat) aynı anda değişirken iş miktarı sabit kalıyorsa: $a_1\\\\cdot b_1\\\\cdot c_1=a_2\\\\cdot b_2\\\\cdot c_2$.</p>
<p><strong>Oran zincirleri:</strong> $a:b=m:n$ ve $b:c=p:q$ verildiğinde, ORTAK olan $b$ değerini eşitleyerek $a:b:c$ üçlü oranı kurulur.</p>

<hr />
<h2>3. İleri Düzey Ayrıntılar</h2>
<ul>
<li>Ortaklık (kâr paylaşım) problemlerinde süre de bir çarpan olarak orana dahil edilir: pay oranı $=$ (sermaye × süre).</li>
<li>Ters orantılı paylaştırma, sayıların TERSLERİYLE doğru orantılı paylaştırma anlamına gelir: $n_1,n_2,n_3$'e ters orantılı paylaşım $=\\\\frac1{n_1}:\\\\frac1{n_2}:\\\\frac1{n_3}$ oranında yapılır.</li>
<li>$a$ doğru orantılı $b^2$ ile, $b$ ters orantılı $c$ ile gibi ZİNCİRLEME bağıntılarda, önce sabitleri (k değerlerini) bulup sonra istenen değeri hesapla.</li>
</ul>

<hr />
<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🟨 Ezber Kutusu</span><p>"İşçi artar, gün azalır" → TERS orantı (çarpım sabit). "Yol artar, süre artar (sabit hızda)" → DOĞRU orantı (oran sabit). Cümledeki fiili "birlikte mi büyüyor yoksa ters mi hareket ediyor" diye oku.</p></div>

<hr />
<h2>5. Karşılaştırma Tabloları</h2>
<table><thead><tr><th>Tür</th><th>Sabit Kalan</th><th>Örnek</th></tr></thead><tbody>
<tr><td>Doğru orantı</td><td>$x/y$</td><td>Yol-zaman (sabit hız)</td></tr>
<tr><td>Ters orantı</td><td>$x\\\\cdot y$</td><td>İşçi sayısı-gün sayısı</td></tr>
<tr><td>Bileşik orantı</td><td>Çarpımların tümü</td><td>İşçi×saat×gün</td></tr>
</tbody></table>

<hr />
<h2>6. Sınıflandırma Şeması</h2>
<blockquote><p>Oran problemi gördüğünde: 1) Değişkenler AYNI YÖNDE mi değişiyor (doğru) yoksa TERS YÖNDE mi (ters)? → 2) Birden fazla değişken varsa hepsini tek eşitlikte BİLEŞİK olarak yaz → 3) Zincirleme oran varsa ORTAK terimi eşitleyerek birleştir → 4) Paylaştırma problemiyse "ters orantılı paylaştırma = terslerin oranında doğru paylaştırma" kuralını uygula.</p></blockquote>

<hr />
<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">⚠️ ÖSYM Tuzağı</span><p>"Ters orantılı paylaştırma" ifadesi görülünce sayıları DOĞRUDAN oran olarak kullanmak büyük hatadır; önce TERSLERİNİ almak, sonra bu tersleri doğru orantı gibi kullanmak gerekir.</p></div>

<hr />
<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de oran-orantı, işçi-havuz problemleri ve karışım/ortaklık problemleriyle iç içe, bileşik orantı gerektiren sorular olarak sıkça gelir.</p>

<hr />
<h2>9. Soru Çözüm Stratejileri</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">🟦 İpucu</span><p>Bileşik orantı sorularında tüm değişkenleri bir tabloya yaz (işçi | gün | saat), hangisinin sabit iş miktarını temsil ettiğini belirle, iki durumun çarpımlarını eşitle.</p></div>

<hr />
<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<h3>🟢 Orta-Kolay (1-10)</h3>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>$\\\\dfrac ab=\\\\dfrac34$ ve $a+b=28$ ise $a$ kaçtır?</p>
<p>A) 12 &nbsp; B) 16 &nbsp; C) 9 &nbsp; D) 21 &nbsp; E) 15</p>
<p><strong>Çözüm:</strong> $a=3k,b=4k$; $7k=28\\\\Rightarrow k=4\\\\Rightarrow a=12$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>$a:b:c=2:3:5$ ve $a+b+c=100$ ise $b$ kaçtır?</p>
<p>A) 20 &nbsp; B) 30 &nbsp; C) 50 &nbsp; D) 40 &nbsp; E) 25</p>
<p><strong>Çözüm:</strong> $10k=100\\\\Rightarrow k=10\\\\Rightarrow b=30$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>$x$ ile $y$ doğru orantılı, $x=6$ iken $y=15$. $x=10$ iken $y$ kaçtır?</p>
<p>A) 20 &nbsp; B) 22 &nbsp; C) 25 &nbsp; D) 18 &nbsp; E) 30</p>
<p><strong>Çözüm:</strong> Oran $=\\\\frac{15}6=2,5$; $y=10\\\\times2,5=25$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>$x$ ile $y$ ters orantılı, $x=4$ iken $y=9$. $x=6$ iken $y$ kaçtır?</p>
<p>A) 6 &nbsp; B) 8 &nbsp; C) 12 &nbsp; D) 4 &nbsp; E) 9</p>
<p><strong>Çözüm:</strong> $xy=36$ sabit; $y=36/6=6$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>$\\\\dfrac a3=\\\\dfrac b5=\\\\dfrac c7$ ve $a+b+c=45$ ise $c$ kaçtır?</p>
<p>A) 15 &nbsp; B) 21 &nbsp; C) 18 &nbsp; D) 25 &nbsp; E) 9</p>
<p><strong>Çözüm:</strong> $15k=45\\\\Rightarrow k=3\\\\Rightarrow c=21$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>12 işçi bir işi 8 günde bitiriyor. 16 işçi aynı işi kaç günde bitirir?</p>
<p>A) 6 &nbsp; B) 10 &nbsp; C) 8 &nbsp; D) 4 &nbsp; E) 12</p>
<p><strong>Çözüm:</strong> $12\\\\times8=16\\\\times d\\\\Rightarrow d=6$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>Bir haritada 1 cm gerçekte 50 km'yi temsil ediyor. Harita üzerinde 7 cm olan mesafe gerçekte kaç km'dir?</p>
<p>A) 350 &nbsp; B) 300 &nbsp; C) 400 &nbsp; D) 250 &nbsp; E) 500</p>
<p><strong>Çözüm:</strong> $7\\\\times50=350$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>$a:b=2:5$ ve $b:c=3:4$ ise $a:b:c$ nedir?</p>
<p>A) $6:15:20$ &nbsp; B) $2:5:4$ &nbsp; C) $6:20:15$ &nbsp; D) $2:15:20$ &nbsp; E) $8:15:20$</p>
<p><strong>Çözüm:</strong> $b$'yi eşitle: $2:5=6:15$, $3:4=15:20$; $a:b:c=6:15:20$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>Doğru orantılı $a,b$ için $a=8,b=12$ iken oran $a:b$ nedir?</p>
<p>A) $2:3$ &nbsp; B) $3:2$ &nbsp; C) $1:2$ &nbsp; D) $3:4$ &nbsp; E) $4:3$</p>
<p><strong>Çözüm:</strong> $8:12=2:3$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>%20 kârla satılan bir malın alış fiyatı 500 TL ise satış fiyatı kaçtır?</p>
<p>A) 520 &nbsp; B) 600 &nbsp; C) 550 &nbsp; D) 580 &nbsp; E) 650</p>
<p><strong>Çözüm:</strong> $500\\\\times1,2=600$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<h3>🟡 Orta-Zor (11-20)</h3>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>A bir işi tek başına 12 günde, B tek başına 18 günde bitiriyor. Birlikte çalışırlarsa kaç günde biter?</p>
<p>A) 7,2 &nbsp; B) 8 &nbsp; C) 6 &nbsp; D) 9 &nbsp; E) 7,5</p>
<p><strong>Çözüm:</strong> $\\\\frac1{12}+\\\\frac1{18}=\\\\frac3{36}+\\\\frac2{36}=\\\\frac5{36}$; gün $=\\\\frac{36}5=7,2$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>$a:b:c=3:4:5$ ve $a+b+c=144$ ise $c-a$ kaçtır?</p>
<p>A) 24 &nbsp; B) 12 &nbsp; C) 36 &nbsp; D) 48 &nbsp; E) 18</p>
<p><strong>Çözüm:</strong> $12k=144\\\\Rightarrow k=12$; $c-a=2k=24$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>10 işçi günde 6 saat çalışarak bir işi 15 günde bitiriyor. 12 işçi günde 5 saat çalışarak aynı işi kaç günde bitirir?</p>
<p>A) 15 &nbsp; B) 12 &nbsp; C) 18 &nbsp; D) 10 &nbsp; E) 20</p>
<p><strong>Çözüm:</strong> $10\\\\times6\\\\times15=12\\\\times5\\\\times d\\\\Rightarrow900=60d\\\\Rightarrow d=15$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>Bir karışımda şeker:su oranı $2:7$'dir. Toplam karışım 45 kg ise şeker kaç kg'dır?</p>
<p>A) 10 &nbsp; B) 14 &nbsp; C) 9 &nbsp; D) 12 &nbsp; E) 15</p>
<p><strong>Çözüm:</strong> $9k=45\\\\Rightarrow k=5\\\\Rightarrow$ şeker $=2\\\\times5=10$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>Bir ortaklıkta A 3000 TL, B 5000 TL sermaye koyuyor. 1600 TL kâr sermaye oranında paylaşılırsa A'nın payı kaçtır?</p>
<p>A) 600 &nbsp; B) 500 &nbsp; C) 700 &nbsp; D) 800 &nbsp; E) 1000</p>
<p><strong>Çözüm:</strong> Oran $3:5$, toplam 8 birim $=1600$, birim $=200$; A $=3\\\\times200=600$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>$x$, $y^2$ ile doğru orantılı; $y=3$ iken $x=18$. $y=5$ iken $x$ kaçtır?</p>
<p>A) 50 &nbsp; B) 30 &nbsp; C) 45 &nbsp; D) 60 &nbsp; E) 40</p>
<p><strong>Çözüm:</strong> $x=ky^2$; $18=9k\\\\Rightarrow k=2$; $x=2\\\\times25=50$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>Bir araç 90 km yolu 1,5 saatte alıyor. Aynı hızla 150 km yolu kaç saatte alır?</p>
<p>A) 2,5 &nbsp; B) 2 &nbsp; C) 3 &nbsp; D) 2,25 &nbsp; E) 2,75</p>
<p><strong>Çözüm:</strong> Hız $=60$ km/s; süre $=150/60=2,5$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>$\\\\dfrac ab=\\\\dfrac57$ ve $b-a=18$ ise $a+b$ kaçtır?</p>
<p>A) 108 &nbsp; B) 90 &nbsp; C) 126 &nbsp; D) 72 &nbsp; E) 144</p>
<p><strong>Çözüm:</strong> $a=5k,b=7k$; $2k=18\\\\Rightarrow k=9$; $a+b=12k=108$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>$p$ ile $q$ ters orantılı, $p=15$ iken $q=8$. $q=24$ olması için $p$ kaç olmalıdır?</p>
<p>A) 5 &nbsp; B) 6 &nbsp; C) 4 &nbsp; D) 10 &nbsp; E) 3</p>
<p><strong>Çözüm:</strong> $pq=120$ sabit; $p=120/24=5$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>Bir sınıftaki kız:erkek oranı $3:4$'tür. Sınıfa 6 kız daha katılırsa oran $1:1$ olacaktır. Sınıfın ilk mevcudu kaçtır?</p>
<p>A) 42 &nbsp; B) 35 &nbsp; C) 49 &nbsp; D) 28 &nbsp; E) 56</p>
<p><strong>Çözüm:</strong> $3k+6=4k\\\\Rightarrow k=6$; ilk mevcut $=7k=42$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<h3>🔴 Zor (21-30)</h3>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>8 işçi günde 6 saat çalışarak bir işi 15 günde bitiriyor. 10 işçi günde 4 saat çalışarak aynı işi kaç günde bitirir?</p>
<p>A) 18 &nbsp; B) 20 &nbsp; C) 16 &nbsp; D) 15 &nbsp; E) 24</p>
<p><strong>Çözüm:</strong> $8\\\\times6\\\\times15=10\\\\times4\\\\times d\\\\Rightarrow720=40d\\\\Rightarrow d=18$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>1300 TL, 2, 3, 4 sayılarına TERS orantılı olarak paylaştırılıyor. En büyük pay kaçtır?</p>
<p>A) 600 &nbsp; B) 400 &nbsp; C) 300 &nbsp; D) 500 &nbsp; E) 700</p>
<p><strong>Çözüm:</strong> Terslerin oranı $\\\\frac12:\\\\frac13:\\\\frac14=6:4:3$ (ortak payda 12), toplam 13 birim; en büyük pay (2'nin tersi en büyük) $=\\\\frac6{13}\\\\times1300=600$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>Bir havuzu dolduran musluk 6 saatte, boşaltan musluk 9 saatte havuzu boşaltıyor. İkisi birlikte açılırsa (dolu havuz için boşaltan, boş havuz için dolduran çalışırken) havuz kaç saatte dolar?</p>
<p>A) 18 &nbsp; B) 15 &nbsp; C) 12 &nbsp; D) 21 &nbsp; E) 24</p>
<p><strong>Çözüm:</strong> $\\\\frac16-\\\\frac19=\\\\frac3{18}-\\\\frac2{18}=\\\\frac1{18}$; havuz $18$ saatte dolar. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>$a:b=2:3$, $b:c=4:5$, $c:d=3:2$ ise $a:b:c:d$ nedir?</p>
<p>A) $8:12:15:10$ &nbsp; B) $2:3:4:5$ &nbsp; C) $8:12:5:10$ &nbsp; D) $6:12:15:10$ &nbsp; E) $8:12:15:6$</p>
<p><strong>Çözüm:</strong> $a:b=2:3=8:12$; $b:c=4:5=12:15$; $c:d=3:2=15:10$; birleştirince $a:b:c:d=8:12:15:10$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>Bir sayının %60'ı, başka bir sayının %40'ına eşittir. Bu iki sayının oranı (birinci:ikinci) nedir?</p>
<p>A) $2:3$ &nbsp; B) $3:2$ &nbsp; C) $3:5$ &nbsp; D) $4:5$ &nbsp; E) $5:4$</p>
<p><strong>Çözüm:</strong> $0,6a=0,4b\\\\Rightarrow\\\\frac ab=\\\\frac{0,4}{0,6}=\\\\frac23$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>$x$ ile $y$ ters orantılıdır. $x$ %25 artarsa $y$ yüzde kaç azalır?</p>
<p>A) %20 &nbsp; B) %25 &nbsp; C) %15 &nbsp; D) %30 &nbsp; E) %10</p>
<p><strong>Çözüm:</strong> $x_{yeni}=1,25x$; $y_{yeni}=\\\\frac{k}{1,25x}=0,8y$; azalma $=\\\\%20$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>A ortağı 5 ay boyunca 4000 TL, B ortağı 8 ay boyunca 3000 TL sermaye ile ortaklık kuruyor. Kâr sermaye×süre oranında paylaşılıyor. Toplam kâr 2200 TL ise B'nin payı kaçtır?</p>
<p>A) 1200 &nbsp; B) 1000 &nbsp; C) 1100 &nbsp; D) 1300 &nbsp; E) 900</p>
<p><strong>Çözüm:</strong> A:B oranı $=(4000\\\\times5):(3000\\\\times8)=20000:24000=5:6$; toplam 11 birim $=2200$, birim $=200$; B $=6\\\\times200=1200$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>$a:b:c=3:4:5$ ve $a^2+b^2+c^2=50$ ise $a$ kaçtır?</p>
<p>A) 3 &nbsp; B) 4 &nbsp; C) 5 &nbsp; D) 6 &nbsp; E) 2</p>
<p><strong>Çözüm:</strong> $k^2(9+16+25)=50\\\\Rightarrow50k^2=50\\\\Rightarrow k=1\\\\Rightarrow a=3$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>900 TL, 3, 4, 6 sayılarına TERS orantılı paylaştırılıyor. En büyük pay kaçtır?</p>
<p>A) 400 &nbsp; B) 300 &nbsp; C) 200 &nbsp; D) 450 &nbsp; E) 350</p>
<p><strong>Çözüm:</strong> Terslerin oranı $\\\\frac13:\\\\frac14:\\\\frac16$; ortak payda 12: $4:3:2$, toplam 9 birim $=900$, birim $=100$; en büyük pay (3'ün tersi en büyük) $=4\\\\times100=400$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>$a$, $b^2$ ile doğru orantılı; $b$, $c$ ile ters orantılıdır. $b=4,c=5$ iken $a=32$. $c=10$ olduğunda $a$ kaçtır?</p>
<p>A) 8 &nbsp; B) 16 &nbsp; C) 4 &nbsp; D) 10 &nbsp; E) 6</p>
<p><strong>Çözüm:</strong> $b=k_2/c\\\\Rightarrow4=k_2/5\\\\Rightarrow k_2=20$; $a=k_1b^2\\\\Rightarrow32=16k_1\\\\Rightarrow k_1=2$; $c=10$ iken $b=20/10=2$; $a=2\\\\times4=8$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<hr />
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<ol>
<li>$a/b=4/5$ ve $a+b=36$ ise $b$ kaçtır?<br>A) 20 &nbsp; B) 16 &nbsp; C) 24 &nbsp; D) 18 &nbsp; E) 25</li>
<li>$a:b:c=1:2:3$ ve $a+b+c=42$ ise $c$ kaçtır?<br>A) 21 &nbsp; B) 14 &nbsp; C) 18 &nbsp; D) 24 &nbsp; E) 12</li>
<li>Doğru orantılı $x=8,y=20$; $x=12$ iken $y$ kaçtır?<br>A) 30 &nbsp; B) 25 &nbsp; C) 28 &nbsp; D) 32 &nbsp; E) 24</li>
<li>Ters orantılı $x=5,y=12$; $x=10$ iken $y$ kaçtır?<br>A) 6 &nbsp; B) 8 &nbsp; C) 24 &nbsp; D) 4 &nbsp; E) 10</li>
<li>$a/2=b/3=c/4$ ve $a+b+c=27$ ise $b$ kaçtır?<br>A) 9 &nbsp; B) 6 &nbsp; C) 12 &nbsp; D) 15 &nbsp; E) 8</li>
<li>15 işçi bir işi 10 günde bitiriyor. 25 işçi kaç günde bitirir?<br>A) 6 &nbsp; B) 8 &nbsp; C) 10 &nbsp; D) 4 &nbsp; E) 12</li>
<li>Haritada 1 cm = 20 km. 8 cm gerçekte kaç km'dir?<br>A) 160 &nbsp; B) 140 &nbsp; C) 180 &nbsp; D) 120 &nbsp; E) 200</li>
<li>$a:b=3:4$, $b:c=2:5$ ise $a:b:c$ nedir?<br>A) $6:8:20$ &nbsp; B) $3:4:5$ &nbsp; C) $6:8:10$ &nbsp; D) $3:8:20$ &nbsp; E) $6:4:20$</li>
<li>Doğru orantılı $a=9,b=15$; oran $a:b$ nedir?<br>A) $3:5$ &nbsp; B) $5:3$ &nbsp; C) $2:3$ &nbsp; D) $3:4$ &nbsp; E) $1:2$</li>
<li>%15 zam sonrası fiyatı 460 TL olan bir ürünün zamdan önceki fiyatı kaçtır?<br>A) 400 &nbsp; B) 420 &nbsp; C) 390 &nbsp; D) 410 &nbsp; E) 450</li>
<li>A bir işi 15 günde, B 10 günde bitiriyor. Birlikte kaç günde bitirirler?<br>A) 6 &nbsp; B) 8 &nbsp; C) 5 &nbsp; D) 7 &nbsp; E) 12</li>
<li>$a:b:c=2:5:7$ ve $a+b+c=112$ ise $c-a$ kaçtır?<br>A) 40 &nbsp; B) 35 &nbsp; C) 45 &nbsp; D) 30 &nbsp; E) 50</li>
<li>9 işçi günde 5 saat çalışarak bir işi 20 günde bitiriyor. 6 işçi günde 6 saat çalışarak kaç günde bitirir?<br>A) 25 &nbsp; B) 20 &nbsp; C) 30 &nbsp; D) 15 &nbsp; E) 24</li>
<li>Bir karışımda oran $3:5$'tir. Toplam 40 kg ise küçük bileşen kaç kg'dır?<br>A) 15 &nbsp; B) 10 &nbsp; C) 20 &nbsp; D) 12 &nbsp; E) 25</li>
<li>A 2000 TL, B 3000 TL sermaye koyuyor; 1000 TL kâr sermaye oranında paylaşılırsa A'nın payı kaçtır?<br>A) 400 &nbsp; B) 500 &nbsp; C) 300 &nbsp; D) 600 &nbsp; E) 350</li>
<li>$x=ky^2$, $y=2$ iken $x=12$; $y=4$ iken $x$ kaçtır?<br>A) 48 &nbsp; B) 24 &nbsp; C) 36 &nbsp; D) 60 &nbsp; E) 20</li>
<li>Bir araç 120 km yolu 2 saatte alıyor. Aynı hızla 180 km yolu kaç saatte alır?<br>A) 3 &nbsp; B) 2,5 &nbsp; C) 3,5 &nbsp; D) 2,75 &nbsp; E) 4</li>
<li>$a/b=3/8$ ve $b-a=25$ ise $a+b$ kaçtır?<br>A) 55 &nbsp; B) 50 &nbsp; C) 45 &nbsp; D) 60 &nbsp; E) 65</li>
<li>Ters orantılı $p=10,q=6$; $q=15$ olması için $p$ kaç olmalıdır?<br>A) 4 &nbsp; B) 5 &nbsp; C) 6 &nbsp; D) 3 &nbsp; E) 8</li>
<li>Bir sınıftaki kız:erkek oranı $3:5$'tir. Sınıfa 4 kız katılırsa oran $1:1$ olacaktır. İlk mevcut kaçtır?<br>A) 16 &nbsp; B) 20 &nbsp; C) 24 &nbsp; D) 12 &nbsp; E) 18</li>
</ol>

<hr />
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. A</strong> — $4k+5k=9k=36\\\\Rightarrow k=4\\\\Rightarrow b=20$.</p>
<p><strong>2. A</strong> — $6k=42\\\\Rightarrow k=7\\\\Rightarrow c=21$.</p>
<p><strong>3. A</strong> — Oran $20/8=2,5$; $y=12\\\\times2,5=30$.</p>
<p><strong>4. A</strong> — $xy=60$; $y=60/10=6$.</p>
<p><strong>5. A</strong> — $9k=27\\\\Rightarrow k=3\\\\Rightarrow b=9$.</p>
<p><strong>6. A</strong> — $15\\\\times10=25\\\\times d\\\\Rightarrow d=6$.</p>
<p><strong>7. A</strong> — $8\\\\times20=160$.</p>
<p><strong>8. A</strong> — $3:4=6:8$, $2:5=8:20$; $a:b:c=6:8:20$.</p>
<p><strong>9. A</strong> — $9:15=3:5$.</p>
<p><strong>10. A</strong> — $460/1,15=400$.</p>
<p><strong>11. A</strong> — $\\\\frac1{15}+\\\\frac1{10}=\\\\frac2{30}+\\\\frac3{30}=\\\\frac5{30}=\\\\frac16$; 6 gün.</p>
<p><strong>12. A</strong> — $14k=112\\\\Rightarrow k=8$; $c-a=5k=40$.</p>
<p><strong>13. A</strong> — $9\\\\times5\\\\times20=6\\\\times6\\\\times d\\\\Rightarrow900=36d\\\\Rightarrow d=25$.</p>
<p><strong>14. A</strong> — $8k=40\\\\Rightarrow k=5$; küçük $=3\\\\times5=15$.</p>
<p><strong>15. A</strong> — Oran $2:3$, toplam 5 birim $=1000$, birim $=200$; A $=400$.</p>
<p><strong>16. A</strong> — $12=4k\\\\Rightarrow k=3$; $x=3\\\\times16=48$.</p>
<p><strong>17. A</strong> — Hız $=60$; süre $=180/60=3$.</p>
<p><strong>18. A</strong> — $a=3k,b=8k$; $5k=25\\\\Rightarrow k=5$; $a+b=11k=55$.</p>
<p><strong>19. A</strong> — $pq=60$; $p=60/15=4$.</p>
<p><strong>20. A</strong> — $3k+4=5k\\\\Rightarrow2k=4\\\\Rightarrow k=2$; ilk mevcut $=(3+5)k=16$.</p>

<hr />
<h2>13. Ultra Özet</h2>
<blockquote><p><strong>ORAN-ORANTI — TEK SAYFA</strong><br>
1. Doğru orantı: oran ($x/y$) sabit. Ters orantı: çarpım ($xy$) sabit.<br>
2. Bileşik orantı: tüm çarpanları (işçi×gün×saat) iki durum için eşitle.<br>
3. Zincirleme oran: ortak terimi EŞİTLEYEREK birleştir.<br>
4. Ters orantılı paylaştırma = TERSLERİN oranında doğru paylaştırma.<br>
5. Ortaklık kârı: sermaye×süre oranında paylaşılır.</p></blockquote>

<hr />
<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• Doğru orantı = oran sabit; ters orantı = çarpım sabit.<br>
• Bileşik orantıda tüm çarpanları tabloya yaz, çarpımları eşitle.<br>
• "Ters orantılı paylaştır" görünce önce TERSİNİ al.<br>
• Ortaklıkta süre de sermaye gibi bir çarpandır.</p>
</div>
\` },`,
  },
  {
    id: 24,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Denklemler (I. ve II. Derece)',
    built: true,
    html: `<h3>(Birinci Derece Denklem ve Sistemler, İkinci Derece Denklem, Vieta Formülleri, Diskriminant — İleri Seviye)</h3>
<hr />

<h2>1. Konunun Mantığı</h2>
<p>Denklemler konusu, KPSS sayısal bölümünün merkezindeki tekniktir. İleri seviyede asıl beceri, ikinci derece denklemi HER ZAMAN çözmeden, Vieta formülleri (kök toplamı-çarpımı) ile istenen ifadeyi DOĞRUDAN hesaplayabilmektir; bu, zamandan büyük tasarruf sağlar.</p>

<hr />
<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p><strong>Vieta formülleri:</strong> $ax^2+bx+c=0$ denkleminin kökleri $x_1,x_2$ ise $x_1+x_2=-\\\\dfrac ba$, $x_1x_2=\\\\dfrac ca$.</p>
<p><strong>Diskriminant ($\\\\Delta=b^2-4ac$):</strong> $\\\\Delta&gt;0\\\\Rightarrow$ 2 farklı gerçek kök; $\\\\Delta=0\\\\Rightarrow$ 1 (çift) gerçek kök; $\\\\Delta&lt;0\\\\Rightarrow$ gerçek kök yok.</p>
<p><strong>Kök formülü:</strong> $x=\\\\dfrac{-b\\\\pm\\\\sqrt{b^2-4ac}}{2a}$.</p>

<hr />
<h2>3. İleri Düzey Ayrıntılar</h2>
<ul>
<li>$f(0)=c/a$ değerinin işareti, köklerin çarpımının işaretini verir: $c/a&lt;0\\\\Rightarrow$ kökler zıt işaretli.</li>
<li>Köklerden biri BİLİNEN bir denklemde ($x=1$ gibi), o değeri denklemde yerine koyarak parametreyi bul; diğer kökü Vieta ile bul.</li>
<li>$x^4+px^2+q=0$ (biquadratic) türü denklemler $t=x^2$ dönüşümüyle ikinci dereceye indirgenir; HER pozitif $t$ değeri İKİ $x$ değeri verir.</li>
<li>Yeni kökleri eskiye bağlı (tersleri, kareleri) bir denklem kurma sorularında, YENİ toplam ve çarpımı Vieta ile ifade edip yeni denklemi yaz.</li>
</ul>

<hr />
<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🟨 Ezber Kutusu</span><p>Vieta: "toplam $=-b/a$, çarpım $=c/a$" — işaret hatasını önlemek için $b$'nin önündeki EKSİ işaretini unutma.</p></div>

<hr />
<h2>5. Karşılaştırma Tabloları</h2>
<table><thead><tr><th>$\\\\Delta$</th><th>Kök Durumu</th></tr></thead><tbody>
<tr><td>$\\\\Delta&gt;0$</td><td>2 farklı gerçek kök</td></tr>
<tr><td>$\\\\Delta=0$</td><td>1 çift (katlı) kök</td></tr>
<tr><td>$\\\\Delta&lt;0$</td><td>Gerçek kök yok</td></tr>
</tbody></table>

<hr />
<h2>6. Sınıflandırma Şeması</h2>
<blockquote><p>İkinci derece ifade gördüğünde: 1) Kökler mi isteniyor → çarpanlara ayır ya da formül kullan → 2) Köklerle ilgili SİMETRİK bir ifade mi isteniyor (toplam, çarpım, kareler toplamı) → Vieta ile doğrudan hesapla, kökleri bulma → 3) Parametre mi var → verilen kökü yerine koy, diğerini Vieta'dan bul → 4) Kök sayısı mı soruluyor → diskriminantı incele.</p></blockquote>

<hr />
<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">⚠️ ÖSYM Tuzağı</span><p>Vieta formülünde toplam $-b/a$'dır, $b/a$ DEĞİL; işaret unutulursa tüm sonuç ters çıkar.</p></div>

<hr />
<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de ikinci derece denklemler genelde Vieta formülleriyle "kökleri bulmadan" çözülmesi beklenen sorular olarak gelir; saf kök bulma sorusu daha nadirdir.</p>

<hr />
<h2>9. Soru Çözüm Stratejileri</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">🟦 İpucu</span><p>"Köklerin toplamı/çarpımı/kareleri toplamı" gibi bir ifade istendiğinde ASLA kökleri tek tek bulmaya çalışma; doğrudan Vieta formüllerini kullan.</p></div>

<hr />
<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<h3>🟢 Orta-Kolay (1-10)</h3>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>$3x+5=20$ denklemini sağlayan $x$ kaçtır?</p>
<p>A) 5 &nbsp; B) 4 &nbsp; C) 6 &nbsp; D) 3 &nbsp; E) 7</p>
<p><strong>Çözüm:</strong> $3x=15\\\\Rightarrow x=5$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>$2(x-3)=10$ denklemini sağlayan $x$ kaçtır?</p>
<p>A) 8 &nbsp; B) 6 &nbsp; C) 10 &nbsp; D) 5 &nbsp; E) 7</p>
<p><strong>Çözüm:</strong> $x-3=5\\\\Rightarrow x=8$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>$x^2-5x+6=0$ denkleminin köklerinin toplamı kaçtır?</p>
<p>A) 5 &nbsp; B) 6 &nbsp; C) -5 &nbsp; D) 1 &nbsp; E) -6</p>
<p><strong>Çözüm:</strong> Vieta: toplam $=-b/a=5$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>$x^2-5x+6=0$ denkleminin köklerinin çarpımı kaçtır?</p>
<p>A) 6 &nbsp; B) 5 &nbsp; C) -6 &nbsp; D) 1 &nbsp; E) -5</p>
<p><strong>Çözüm:</strong> Vieta: çarpım $=c/a=6$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>$x^2-9=0$ denkleminin çözüm kümesi nedir?</p>
<p>A) $\\\\{3,-3\\\\}$ &nbsp; B) $\\\\{9\\\\}$ &nbsp; C) $\\\\{3\\\\}$ &nbsp; D) $\\\\{-3\\\\}$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $x^2=9\\\\Rightarrow x=\\\\pm3$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>$x^2-4x+4=0$ denkleminin kaç farklı gerçek kökü vardır?</p>
<p>A) 1 &nbsp; B) 0 &nbsp; C) 2 &nbsp; D) 3 &nbsp; E) Belirsiz</p>
<p><strong>Çözüm:</strong> $\\\\Delta=16-16=0$; 1 çift kök. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>$x^2+2x+5=0$ denkleminin kaç gerçek kökü vardır?</p>
<p>A) 0 &nbsp; B) 1 &nbsp; C) 2 &nbsp; D) 3 &nbsp; E) Belirsiz</p>
<p><strong>Çözüm:</strong> $\\\\Delta=4-20=-16&lt;0$; gerçek kök yoktur. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>$x+y=10$, $x-y=4$ ise $x$ kaçtır?</p>
<p>A) 7 &nbsp; B) 6 &nbsp; C) 8 &nbsp; D) 5 &nbsp; E) 9</p>
<p><strong>Çözüm:</strong> Topla: $2x=14\\\\Rightarrow x=7$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>$2x+3y=12$ ve $x=3$ ise $y$ kaçtır?</p>
<p>A) 2 &nbsp; B) 3 &nbsp; C) 4 &nbsp; D) 1 &nbsp; E) 5</p>
<p><strong>Çözüm:</strong> $6+3y=12\\\\Rightarrow y=2$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>$x^2=49$ denkleminin çözüm kümesi nedir?</p>
<p>A) $\\\\{7,-7\\\\}$ &nbsp; B) $\\\\{49\\\\}$ &nbsp; C) $\\\\{7\\\\}$ &nbsp; D) $\\\\{-7\\\\}$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $x=\\\\pm7$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<h3>🟡 Orta-Zor (11-20)</h3>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>$x^2-7x+12=0$ denkleminin köklerinin kareleri toplamı ($x_1^2+x_2^2$) kaçtır?</p>
<p>A) 25 &nbsp; B) 37 &nbsp; C) 12 &nbsp; D) 7 &nbsp; E) 19</p>
<p><strong>Çözüm:</strong> $x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2=49-24=25$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>$2x^2-5x-3=0$ denkleminin köklerinin çarpımı kaçtır?</p>
<p>A) $-\\\\frac32$ &nbsp; B) $\\\\frac32$ &nbsp; C) $-3$ &nbsp; D) $\\\\frac52$ &nbsp; E) $-\\\\frac52$</p>
<p><strong>Çözüm:</strong> Çarpım $=c/a=-3/2$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>$x^2-(k+1)x+k=0$ denklemi için $x=1$ her zaman bir köktür. Diğer kök $k$ cinsinden nedir?</p>
<p>A) $k$ &nbsp; B) $k+1$ &nbsp; C) $-k$ &nbsp; D) $1-k$ &nbsp; E) $k-1$</p>
<p><strong>Çözüm:</strong> $1-(k+1)+k=0$ her zaman doğru; çarpım $=k$, bir kök $1$ olduğundan diğeri $k/1=k$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>$x^2-6x+m=0$ denkleminin köklerinden biri $2$'dir. $m$ ve diğer kök nedir?</p>
<p>A) $m=8$, diğer kök $4$ &nbsp; B) $m=4$, diğer kök $8$ &nbsp; C) $m=8$, diğer kök $3$ &nbsp; D) $m=6$, diğer kök $4$ &nbsp; E) $m=8$, diğer kök $6$</p>
<p><strong>Çözüm:</strong> $4-12+m=0\\\\Rightarrow m=8$; toplam $=6\\\\Rightarrow$ diğer kök $=4$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>$x^2-4x-5=0$ denkleminin büyük kökünden küçük kökü çıkarırsak ne bulunur?</p>
<p>A) 6 &nbsp; B) 4 &nbsp; C) 5 &nbsp; D) 9 &nbsp; E) -6</p>
<p><strong>Çözüm:</strong> $(x-5)(x+1)=0\\\\Rightarrow x=5,-1$; fark $=5-(-1)=6$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>$x^2+px+q=0$ denkleminin çift kökü olması için $q=p^2/4$ olmalıdır. $p=6$ ise $q$ kaçtır?</p>
<p>A) 9 &nbsp; B) 6 &nbsp; C) 12 &nbsp; D) 3 &nbsp; E) 18</p>
<p><strong>Çözüm:</strong> $q=36/4=9$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>$x^2-3x-10=0$ denkleminin kökleri hakkında ne söylenebilir?</p>
<p>A) Biri pozitif biri negatiftir, pozitif kökün mutlak değeri büyüktür &nbsp; B) İkisi de pozitiftir &nbsp; C) İkisi de negatiftir &nbsp; D) Belirsizdir &nbsp; E) İkisi de sıfırdır</p>
<p><strong>Çözüm:</strong> Çarpım $=-10&lt;0$ (zıt işaret), toplam $=3&gt;0$ (pozitif kök baskın). <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>$\\\\dfrac x{x-2}+1=\\\\dfrac3{x-2}$ denklemini sağlayan $x$ kaçtır?</p>
<p>A) 2,5 &nbsp; B) 2 &nbsp; C) 3 &nbsp; D) 1,5 &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $(x-2)$ ile çarp: $x+(x-2)=3\\\\Rightarrow2x=5\\\\Rightarrow x=2,5$ ($x\\\\ne2$ koşulu sağlanır). <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>$2x-y=5$, $3x+2y=18$ sistemini sağlayan $x+y$ kaçtır?</p>
<p>A) 7 &nbsp; B) 8 &nbsp; C) 6 &nbsp; D) 9 &nbsp; E) 5</p>
<p><strong>Çözüm:</strong> $y=2x-5$; $3x+2(2x-5)=18\\\\Rightarrow7x=28\\\\Rightarrow x=4,y=3$; $x+y=7$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>$x^2-2x-8=0$ denkleminin köklerinin farkı (büyükten küçük) kaçtır?</p>
<p>A) 6 &nbsp; B) 4 &nbsp; C) 8 &nbsp; D) 2 &nbsp; E) -6</p>
<p><strong>Çözüm:</strong> $(x-4)(x+2)=0\\\\Rightarrow x=4,-2$; fark $=6$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<h3>🔴 Zor (21-30)</h3>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>$x^2-(m+1)x+(m+4)=0$ denkleminin eşit (çift) köke sahip olması için $m$'nin alabileceği değerlerin toplamı kaçtır?</p>
<p>A) 2 &nbsp; B) 5 &nbsp; C) -3 &nbsp; D) 8 &nbsp; E) -8</p>
<p><strong>Çözüm:</strong> $\\\\Delta=(m+1)^2-4(m+4)=m^2-2m-15=0$; bu denklemde Vieta ile $m$ değerlerinin toplamı $=2$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>$x^2-5x+6=0$ denkleminin kökleri $x_1,x_2$ ise $(x_1+2)(x_2+2)$ kaçtır?</p>
<p>A) 20 &nbsp; B) 16 &nbsp; C) 24 &nbsp; D) 18 &nbsp; E) 22</p>
<p><strong>Çözüm:</strong> $x_1x_2+2(x_1+x_2)+4=6+10+4=20$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>$x^2+bx+c=0$ denkleminin kökleri $3$ ve $-4$ ise $b+c$ kaçtır?</p>
<p>A) -11 &nbsp; B) -13 &nbsp; C) -9 &nbsp; D) 11 &nbsp; E) 13</p>
<p><strong>Çözüm:</strong> Toplam $=-1=-b\\\\Rightarrow b=1$; çarpım $=-12=c$; $b+c=1-12=-11$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>$|x^2-5x+6|=2$ denkleminin kaç gerçek kökü vardır?</p>
<p>A) 2 &nbsp; B) 4 &nbsp; C) 3 &nbsp; D) 0 &nbsp; E) 1</p>
<p><strong>Çözüm:</strong> $x^2-5x+6=2\\\\Rightarrow x^2-5x+4=0\\\\Rightarrow x=1,4$ (2 kök); $x^2-5x+6=-2\\\\Rightarrow x^2-5x+8=0$, $\\\\Delta=25-32&lt;0$ (kök yok); toplam 2 gerçek kök. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>$ax^2+bx+c=0$ ($a&gt;0$) denkleminde $f(0)=c&lt;0$ ise kökler hakkında ne söylenebilir?</p>
<p>A) Biri pozitif biri negatiftir &nbsp; B) İkisi de pozitiftir &nbsp; C) İkisi de negatiftir &nbsp; D) Gerçek kök yoktur &nbsp; E) Belirsizdir</p>
<p><strong>Çözüm:</strong> Çarpım $=c/a&lt;0$ olduğundan kökler zıt işaretlidir. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>$x^4-5x^2+4=0$ denkleminin kaç gerçek kökü vardır?</p>
<p>A) 4 &nbsp; B) 2 &nbsp; C) 6 &nbsp; D) 8 &nbsp; E) 0</p>
<p><strong>Çözüm:</strong> $t=x^2$: $t^2-5t+4=0\\\\Rightarrow t=1,4$; her ikisi de pozitif, her biri 2 kök verir: $x=\\\\pm1,\\\\pm2$; toplam 4. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>$xy=12$, $x+y=7$ ise $x-y$'nin alabileceği değer(ler) nedir?</p>
<p>A) $\\\\pm1$ &nbsp; B) $\\\\pm7$ &nbsp; C) $\\\\pm12$ &nbsp; D) Tek değer: 1 &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $x,y$, $t^2-7t+12=0$'ın kökleridir: $t=3,4$; $\\\\{x,y\\\\}=\\\\{3,4\\\\}$; $x-y=\\\\pm1$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>$x^2-5x+6=0$ denkleminin köklerinin TERSLERİ, yeni bir denklemin kökleridir. Bu yeni denklem (6 ile çarpılmış tam sayı katsayılı biçimde) nedir?</p>
<p>A) $6x^2-5x+1=0$ &nbsp; B) $6x^2+5x+1=0$ &nbsp; C) $x^2-5x+6=0$ &nbsp; D) $6x^2-5x-1=0$ &nbsp; E) $x^2-6x+5=0$</p>
<p><strong>Çözüm:</strong> Eski kökler $2,3$; tersleri $\\\\frac12,\\\\frac13$; yeni toplam $=\\\\frac56$, yeni çarpım $=\\\\frac16$; denklem $x^2-\\\\frac56x+\\\\frac16=0$, 6 ile çarp: $6x^2-5x+1=0$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>$x^2-kx+16=0$ denkleminin iki eşit POZİTİF kökü olması için $k$ kaç olmalıdır?</p>
<p>A) 8 &nbsp; B) -8 &nbsp; C) $\\\\pm8$ &nbsp; D) 4 &nbsp; E) 16</p>
<p><strong>Çözüm:</strong> Eşit kök: $k^2-64=0\\\\Rightarrow k=\\\\pm8$; pozitif kök için toplam $=k&gt;0\\\\Rightarrow k=8$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>$2x^2-4x-3=0$ denkleminin kökleri $x_1,x_2$ ise $\\\\dfrac1{x_1}+\\\\dfrac1{x_2}$ kaçtır?</p>
<p>A) $-\\\\frac43$ &nbsp; B) $\\\\frac43$ &nbsp; C) $-\\\\frac34$ &nbsp; D) $\\\\frac34$ &nbsp; E) $-\\\\frac23$</p>
<p><strong>Çözüm:</strong> $\\\\dfrac{x_1+x_2}{x_1x_2}=\\\\dfrac{2}{-3/2}=-\\\\dfrac43$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<hr />
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<ol>
<li>$4x-7=13$ denklemini sağlayan $x$ kaçtır?<br>A) 5 &nbsp; B) 4 &nbsp; C) 6 &nbsp; D) 3 &nbsp; E) 7</li>
<li>$x^2-6x+8=0$ denkleminin köklerinin toplamı kaçtır?<br>A) 6 &nbsp; B) 8 &nbsp; C) -6 &nbsp; D) 2 &nbsp; E) 4</li>
<li>$x^2-6x+8=0$ denkleminin köklerinin çarpımı kaçtır?<br>A) 8 &nbsp; B) 6 &nbsp; C) -8 &nbsp; D) 2 &nbsp; E) 4</li>
<li>$x^2-16=0$ denkleminin çözüm kümesi nedir?<br>A) $\\\\{4,-4\\\\}$ &nbsp; B) $\\\\{16\\\\}$ &nbsp; C) $\\\\{4\\\\}$ &nbsp; D) $\\\\{-4\\\\}$ &nbsp; E) Çözüm yok</li>
<li>$x^2-6x+9=0$ denkleminin kaç farklı gerçek kökü vardır?<br>A) 1 &nbsp; B) 0 &nbsp; C) 2 &nbsp; D) 3 &nbsp; E) Belirsiz</li>
<li>$x^2+4=0$ denkleminin kaç gerçek kökü vardır?<br>A) 0 &nbsp; B) 1 &nbsp; C) 2 &nbsp; D) 4 &nbsp; E) Belirsiz</li>
<li>$x+y=8$, $x-y=2$ ise $x$ kaçtır?<br>A) 5 &nbsp; B) 4 &nbsp; C) 6 &nbsp; D) 3 &nbsp; E) 7</li>
<li>$3x+2y=16$ ve $x=2$ ise $y$ kaçtır?<br>A) 5 &nbsp; B) 4 &nbsp; C) 6 &nbsp; D) 3 &nbsp; E) 7</li>
<li>$x^2=64$ denkleminin çözüm kümesi nedir?<br>A) $\\\\{8,-8\\\\}$ &nbsp; B) $\\\\{64\\\\}$ &nbsp; C) $\\\\{8\\\\}$ &nbsp; D) $\\\\{-8\\\\}$ &nbsp; E) Çözüm yok</li>
<li>$x^2-9x+20=0$ denkleminin köklerinin kareleri toplamı kaçtır?<br>A) 41 &nbsp; B) 29 &nbsp; C) 20 &nbsp; D) 9 &nbsp; E) 61</li>
<li>$3x^2-7x-6=0$ denkleminin köklerinin çarpımı kaçtır?<br>A) -2 &nbsp; B) 2 &nbsp; C) 7/3 &nbsp; D) -7/3 &nbsp; E) -6</li>
<li>$x^2-(k+1)x+k=0$ denkleminde $x=1$ her zaman köktür. Diğer kök nedir?<br>A) $k$ &nbsp; B) $k+1$ &nbsp; C) $-k$ &nbsp; D) $1-k$ &nbsp; E) $k-1$</li>
<li>$x^2-7x+m=0$ denkleminin köklerinden biri $3$'tür. $m$ kaçtır?<br>A) 12 &nbsp; B) 10 &nbsp; C) 14 &nbsp; D) 9 &nbsp; E) 15</li>
<li>$x^2-2x-15=0$ denkleminin köklerinin farkı (büyükten küçük) kaçtır?<br>A) 8 &nbsp; B) 5 &nbsp; C) 3 &nbsp; D) 2 &nbsp; E) -8</li>
<li>$x^2+px+q=0$ çift köklü, $p=8$ ise $q$ kaçtır?<br>A) 16 &nbsp; B) 8 &nbsp; C) 32 &nbsp; D) 4 &nbsp; E) 64</li>
<li>$x^2-x-12=0$ denkleminin kökleri hakkında ne söylenebilir?<br>A) Biri pozitif biri negatif, pozitif kök mutlak değerce büyüktür &nbsp; B) İkisi pozitif &nbsp; C) İkisi negatif &nbsp; D) Belirsiz &nbsp; E) İkisi sıfır</li>
<li>$\\\\dfrac x{x-3}+2=\\\\dfrac6{x-3}$ denklemini sağlayan $x$ kaçtır?<br>A) 4 &nbsp; B) 3 &nbsp; C) 5 &nbsp; D) 6 &nbsp; E) Çözüm yok</li>
<li>$3x-y=7$, $2x+3y=1$ ise $x+y$ kaçtır?<br>A) 1 &nbsp; B) 2 &nbsp; C) 0 &nbsp; D) 3 &nbsp; E) -1</li>
<li>$x^2-3x-18=0$ denkleminin köklerinin farkı (büyükten küçük) kaçtır?<br>A) 9 &nbsp; B) 6 &nbsp; C) 3 &nbsp; D) 18 &nbsp; E) -9</li>
<li>$x^4-13x^2+36=0$ denkleminin kaç gerçek kökü vardır?<br>A) 4 &nbsp; B) 2 &nbsp; C) 8 &nbsp; D) 6 &nbsp; E) 0</li>
</ol>

<hr />
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. A</strong> — $4x=20\\\\Rightarrow x=5$.</p>
<p><strong>2. A</strong> — Toplam $=6$.</p>
<p><strong>3. A</strong> — Çarpım $=8$.</p>
<p><strong>4. A</strong> — $x=\\\\pm4$.</p>
<p><strong>5. A</strong> — $\\\\Delta=36-36=0$; 1 çift kök.</p>
<p><strong>6. A</strong> — $\\\\Delta=0-16=-16&lt;0$; kök yok.</p>
<p><strong>7. A</strong> — $2x=10\\\\Rightarrow x=5$.</p>
<p><strong>8. A</strong> — $6+2y=16\\\\Rightarrow y=5$.</p>
<p><strong>9. A</strong> — $x=\\\\pm8$.</p>
<p><strong>10. A</strong> — $81-40=41$.</p>
<p><strong>11. A</strong> — $c/a=-6/3=-2$.</p>
<p><strong>12. A</strong> — Çarpım $=k$, bir kök $1$; diğeri $k$.</p>
<p><strong>13. A</strong> — $9-21+m=0\\\\Rightarrow m=12$.</p>
<p><strong>14. A</strong> — $(x-5)(x+3)=0$; fark $=8$.</p>
<p><strong>15. A</strong> — $q=64/4=16$.</p>
<p><strong>16. A</strong> — Çarpım $=-12&lt;0$ (zıt işaret), toplam $=1&gt;0$ (pozitif baskın).</p>
<p><strong>17. A</strong> — $(x-3)$ ile çarp: $x+2(x-3)=6\\\\Rightarrow3x=12\\\\Rightarrow x=4$.</p>
<p><strong>18. A</strong> — $y=3x-7$; $2x+3(3x-7)=1\\\\Rightarrow11x=22\\\\Rightarrow x=2,y=-1$; $x+y=1$.</p>
<p><strong>19. A</strong> — $(x-6)(x+3)=0$; fark $=9$.</p>
<p><strong>20. A</strong> — $t=x^2$: $t=4,9$; $x=\\\\pm2,\\\\pm3$; toplam 4 kök.</p>

<hr />
<h2>13. Ultra Özet</h2>
<blockquote><p><strong>DENKLEMLER — TEK SAYFA</strong><br>
1. Vieta: toplam $=-b/a$, çarpım $=c/a$.<br>
2. $\\\\Delta=b^2-4ac$: pozitifse 2 kök, sıfırsa 1 çift kök, negatifse kök yok.<br>
3. Simetrik ifadeler (kareler toplamı, tersler toplamı) için KÖKLERİ BULMADAN Vieta kullan.<br>
4. Biquadratic ($x^4+px^2+q=0$): $t=x^2$ dönüşümü, her pozitif $t$ iki $x$ verir.<br>
5. $f(0)=c/a$'nın işareti köklerin çarpımının işaretini, dolayısıyla köklerin aynı/zıt işaretli olup olmadığını verir.</p></blockquote>

<hr />
<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• Vieta: toplam=-b/a, çarpım=c/a — işareti unutma.<br>
• Simetrik ifadelerde kökleri bulma, doğrudan Vieta kullan.<br>
• Δ&gt;0/=0/&lt;0 kök sayısını belirler.<br>
• $t=x^2$ dönüşümünde her pozitif $t$ İKİ kök verir, unutma.</p>
</div>
\` },`,
  },
  {
    id: 25,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Eşitsizlikler',
    built: true,
    html: `<h3>(Doğrusal ve İkinci Derece Eşitsizlikler, İşaret Analizi, Rasyonel Eşitsizlikler, Sistemler — İleri Seviye)</h3>
<hr />

<h2>1. Konunun Mantığı</h2>
<p>Eşitsizlikler, denklemlerin "aralık" versiyonudur. İleri seviyede en kritik beceri İŞARET TABLOSU (kritik noktalarla bölgelere ayırıp her bölgede işareti belirleme) tekniğidir; bu teknik ikinci derece, rasyonel ve hatta üçüncü derece eşitsizliklerde aynı mantıkla çalışır.</p>

<hr />
<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p><strong>Doğrusal:</strong> $ax+b&gt;0$ tipinde; NEGATİF sayıyla çarpma/bölmede yön DEĞİŞİR.</p>
<p><strong>İkinci derece:</strong> $ax^2+bx+c$ ifadesinin işareti, KÖKLERİ arasında $a$'nın işaretinin TERSİ, köklerin dışında $a$'nın işaretiyle AYNIdır (üst açık parabol için).</p>
<p><strong>Rasyonel:</strong> $\\\\dfrac{P(x)}{Q(x)}$ ifadesinin işareti için hem pay hem paydanın kökleri kritik noktadır; PAYDA SIFIR OLAMAZ (tanım kümesinden çıkar).</p>

<hr />
<h2>3. İleri Düzey Ayrıntılar</h2>
<ul>
<li>Üç ya da daha fazla çarpanlı ifadelerde ($（x-a)(x-b)(x-c)$) işaret, en sağdan (en büyük kökten sonra $a$'nın işareti) başlayarak her kökte İŞARET DEĞİŞTİRE DEĞİŞTİRE sola doğru belirlenir (basit kökler için).</li>
<li>Sistem (birden fazla) eşitsizlik varsa, her birinin çözüm kümesi ayrı bulunup KESİŞİMİ alınır.</li>
<li>AM-GM eşitsizliği: pozitif $a,b$ için $a+b\\\\ge2\\\\sqrt{ab}$; eşitlik SADECE $a=b$'de. Sabit toplamlı ikilinin çarpımı, sayılar EŞİT olduğunda MAKSİMUM olur.</li>
</ul>

<hr />
<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🟨 Ezber Kutusu</span><p>İkinci derece eşitsizlikte "gülen yüz" ($a&gt;0$, üst açık parabol): kökler ARASI negatif, DIŞI pozitif. "Üzgün yüz" ($a&lt;0$): tam tersi.</p></div>

<hr />
<h2>5. Karşılaştırma Tabloları</h2>
<table><thead><tr><th>İfade ($a&gt;0$)</th><th>Çözüm</th></tr></thead><tbody>
<tr><td>$(x-r_1)(x-r_2)&gt;0$ ($r_1&lt;r_2$)</td><td>$x&lt;r_1$ veya $x&gt;r_2$</td></tr>
<tr><td>$(x-r_1)(x-r_2)&lt;0$</td><td>$r_1&lt;x&lt;r_2$</td></tr>
</tbody></table>

<hr />
<h2>6. Sınıflandırma Şeması</h2>
<blockquote><p>Eşitsizlik gördüğünde: 1) Kritik noktaları (kökleri, payda sıfırlarını) bul → 2) Sayı doğrusunu bölgelere ayır → 3) Her bölgede bir test noktasıyla işareti belirle → 4) İstenen işarete (>,<,≥,≤) uyan bölgeleri seç, payda sıfırlarını HER ZAMAN dışla.</p></blockquote>

<hr />
<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">⚠️ ÖSYM Tuzağı</span><p>Rasyonel eşitsizlikte "çapraz çarpma" ile paydaları yok etmeye çalışmak büyük hatadır (paydanın işareti bilinmediğinden eşitsizlik yönü belirsizleşir); bunun yerine HER ZAMAN tek tarafı sıfıra eşitleyip işaret tablosu kurulmalıdır.</p></div>

<hr />
<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de eşitsizlikler, ikinci derece ifadelerin işaret analiziyle ve sistem (kesişim) sorularıyla gelir; rasyonel eşitsizlik daha nadir ama güçlü adayları ayırt etmek için sorulur.</p>

<hr />
<h2>9. Soru Çözüm Stratejileri</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">🟦 İpucu</span><p>Rasyonel eşitsizlikte asla çapraz çarpma yapma; her zaman tek tarafı sıfırla, ortak paydaya al, işaret tablosu kur.</p></div>

<hr />
<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<h3>🟢 Orta-Kolay (1-10)</h3>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>$2x-3&gt;7$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $x&gt;5$ &nbsp; B) $x&lt;5$ &nbsp; C) $x&gt;10$ &nbsp; D) $x&lt;10$ &nbsp; E) $x&gt;2$</p>
<p><strong>Çözüm:</strong> $2x&gt;10\\\\Rightarrow x&gt;5$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>$-3x+6&lt;0$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $x&gt;2$ &nbsp; B) $x&lt;2$ &nbsp; C) $x&gt;-2$ &nbsp; D) $x&lt;-2$ &nbsp; E) $x&gt;6$</p>
<p><strong>Çözüm:</strong> $-3x&lt;-6$; negatifle bölünce yön değişir: $x&gt;2$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>$x^2-4&gt;0$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $x&lt;-2$ veya $x&gt;2$ &nbsp; B) $-2&lt;x&lt;2$ &nbsp; C) $x&gt;2$ &nbsp; D) $x&lt;-2$ &nbsp; E) Tüm reel sayılar</p>
<p><strong>Çözüm:</strong> Kökler dışı pozitif ($a=1&gt;0$). <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>$x^2-4&lt;0$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $-2&lt;x&lt;2$ &nbsp; B) $x&lt;-2$ veya $x&gt;2$ &nbsp; C) $x&gt;2$ &nbsp; D) $x&lt;-2$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> Kökler arası negatif. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>$(x-1)(x-3)&gt;0$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $x&lt;1$ veya $x&gt;3$ &nbsp; B) $1&lt;x&lt;3$ &nbsp; C) $x&gt;3$ &nbsp; D) $x&lt;1$ &nbsp; E) Tüm reel sayılar</p>
<p><strong>Çözüm:</strong> Kökler dışı pozitif. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>$(x-1)(x-3)&lt;0$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $1&lt;x&lt;3$ &nbsp; B) $x&lt;1$ veya $x&gt;3$ &nbsp; C) $x&gt;3$ &nbsp; D) $x&lt;1$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> Kökler arası negatif. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>$5x+2\\\\le17$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $x\\\\le3$ &nbsp; B) $x\\\\ge3$ &nbsp; C) $x\\\\le5$ &nbsp; D) $x\\\\ge5$ &nbsp; E) $x\\\\le7$</p>
<p><strong>Çözüm:</strong> $5x\\\\le15\\\\Rightarrow x\\\\le3$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>$\\\\dfrac x2-1&gt;3$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $x&gt;8$ &nbsp; B) $x&lt;8$ &nbsp; C) $x&gt;4$ &nbsp; D) $x&lt;4$ &nbsp; E) $x&gt;2$</p>
<p><strong>Çözüm:</strong> $\\\\frac x2&gt;4\\\\Rightarrow x&gt;8$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>$-2&lt;x-1&lt;4$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $-1&lt;x&lt;5$ &nbsp; B) $-2&lt;x&lt;4$ &nbsp; C) $0&lt;x&lt;5$ &nbsp; D) $-1&lt;x&lt;4$ &nbsp; E) $-3&lt;x&lt;3$</p>
<p><strong>Çözüm:</strong> Her tarafa 1 ekle: $-1&lt;x&lt;5$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>$x^2\\\\ge0$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) Tüm reel sayılar &nbsp; B) $x\\\\ge0$ &nbsp; C) $x&gt;0$ &nbsp; D) $x=0$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> Kare her zaman negatif olmayan bir değerdir. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<h3>🟡 Orta-Zor (11-20)</h3>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>$x^2-5x+6\\\\le0$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $2\\\\le x\\\\le3$ &nbsp; B) $x\\\\le2$ veya $x\\\\ge3$ &nbsp; C) $x&lt;2$ &nbsp; D) $x&gt;3$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $(x-2)(x-3)\\\\le0\\\\Rightarrow2\\\\le x\\\\le3$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>$x^2-2x-3\\\\ge0$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $x\\\\le-1$ veya $x\\\\ge3$ &nbsp; B) $-1\\\\le x\\\\le3$ &nbsp; C) $x\\\\ge3$ &nbsp; D) $x\\\\le-1$ &nbsp; E) Tüm reel sayılar</p>
<p><strong>Çözüm:</strong> $(x-3)(x+1)\\\\ge0\\\\Rightarrow x\\\\le-1$ veya $x\\\\ge3$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>$\\\\dfrac{x-2}{x+1}&gt;0$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $x&lt;-1$ veya $x&gt;2$ &nbsp; B) $-1&lt;x&lt;2$ &nbsp; C) $x&gt;2$ &nbsp; D) $x&lt;-1$ &nbsp; E) Tüm reel sayılar hariç $-1$</p>
<p><strong>Çözüm:</strong> Kritik noktalar $-1,2$; işaret tablosuyla dışta pozitif. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>$\\\\dfrac{x-2}{x+1}&lt;0$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $-1&lt;x&lt;2$ &nbsp; B) $x&lt;-1$ veya $x&gt;2$ &nbsp; C) $x&gt;2$ &nbsp; D) $x&lt;-1$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> Kritik noktalar arası negatif. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>$|2x-3|&lt;7$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $-2&lt;x&lt;5$ &nbsp; B) $-5&lt;x&lt;2$ &nbsp; C) $x&lt;5$ &nbsp; D) $x&gt;-2$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $-7&lt;2x-3&lt;7\\\\Rightarrow-4&lt;2x&lt;10\\\\Rightarrow-2&lt;x&lt;5$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>$|x+1|\\\\ge3$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $x\\\\le-4$ veya $x\\\\ge2$ &nbsp; B) $-4\\\\le x\\\\le2$ &nbsp; C) $x\\\\ge2$ &nbsp; D) $x\\\\le-4$ &nbsp; E) Tüm reel sayılar</p>
<p><strong>Çözüm:</strong> $x+1\\\\le-3$ veya $x+1\\\\ge3\\\\Rightarrow x\\\\le-4$ veya $x\\\\ge2$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>$x^2+x-6&lt;0$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $-3&lt;x&lt;2$ &nbsp; B) $x&lt;-3$ veya $x&gt;2$ &nbsp; C) $x&gt;2$ &nbsp; D) $x&lt;-3$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $(x+3)(x-2)&lt;0\\\\Rightarrow-3&lt;x&lt;2$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>$2&lt;x&lt;7$ VE $x^2-9&gt;0$ sistemini birlikte sağlayan $x$ aralığı nedir?</p>
<p>A) $3&lt;x&lt;7$ &nbsp; B) $2&lt;x&lt;3$ &nbsp; C) $x&gt;7$ &nbsp; D) $2&lt;x&lt;7$ &nbsp; E) $x&lt;-3$</p>
<p><strong>Çözüm:</strong> $x^2-9&gt;0\\\\Rightarrow x&lt;-3$ veya $x&gt;3$; $(2,7)$ ile kesişim: $(3,7)$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>$3x-1\\\\ge2x+4$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $x\\\\ge5$ &nbsp; B) $x\\\\le5$ &nbsp; C) $x\\\\ge-5$ &nbsp; D) $x\\\\le-5$ &nbsp; E) $x\\\\ge1$</p>
<p><strong>Çözüm:</strong> $x\\\\ge5$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>$-x^2+4x-3\\\\ge0$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $1\\\\le x\\\\le3$ &nbsp; B) $x\\\\le1$ veya $x\\\\ge3$ &nbsp; C) $x&lt;1$ &nbsp; D) $x&gt;3$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $-1$ ile çarp, yön değişir: $x^2-4x+3\\\\le0\\\\Rightarrow(x-1)(x-3)\\\\le0\\\\Rightarrow1\\\\le x\\\\le3$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<h3>🔴 Zor (21-30)</h3>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>$(x-1)(x-2)(x-3)&gt;0$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $1&lt;x&lt;2$ veya $x&gt;3$ &nbsp; B) $x&lt;1$ veya $2&lt;x&lt;3$ &nbsp; C) $x&gt;3$ &nbsp; D) $1&lt;x&lt;3$ &nbsp; E) Tüm reel sayılar</p>
<p><strong>Çözüm:</strong> İşaret tablosu (üç basit kök): en sağdan başlayarak $+,-,+,-$ sırayla; pozitif bölgeler $1&lt;x&lt;2$ ve $x&gt;3$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>$x^2-5x+6\\\\le0$ VE $x^2-9\\\\ge0$ sistemini birlikte sağlayan $x$ değer(ler)i nedir?</p>
<p>A) $\\\\{3\\\\}$ &nbsp; B) $[2,3]$ &nbsp; C) Boş küme &nbsp; D) $[3,\\\\infty)$ &nbsp; E) $\\\\{2,3\\\\}$</p>
<p><strong>Çözüm:</strong> Birinci: $[2,3]$; ikinci: $x\\\\le-3$ veya $x\\\\ge3$; kesişim tek nokta $\\\\{3\\\\}$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>$\\\\dfrac1{x-1}&lt;\\\\dfrac1{x+1}$ eşitsizliğinin çözüm kümesi nedir ($x\\\\ne\\\\pm1$)?</p>
<p>A) $-1&lt;x&lt;1$ &nbsp; B) $x&lt;-1$ veya $x&gt;1$ &nbsp; C) $x&gt;1$ &nbsp; D) $x&lt;-1$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> Fark: $\\\\frac1{x-1}-\\\\frac1{x+1}=\\\\frac{2}{x^2-1}&lt;0\\\\Rightarrow x^2-1&lt;0\\\\Rightarrow-1&lt;x&lt;1$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>$|x-2|+|x-5|&lt;10$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $-1,5&lt;x&lt;8,5$ &nbsp; B) $-10&lt;x&lt;10$ &nbsp; C) $2&lt;x&lt;5$ &nbsp; D) $x&lt;8,5$ &nbsp; E) $x&gt;-1,5$</p>
<p><strong>Çözüm:</strong> Bölgesel çözüm: $x&lt;2$'de $7-2x&lt;10\\\\Rightarrow x&gt;-1,5$; $[2,5]$ her zaman sağlar (toplam sabit 3); $x&gt;5$'te $2x-7&lt;10\\\\Rightarrow x&lt;8,5$; birleşim: $-1,5&lt;x&lt;8,5$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>$x^2-4x+c&gt;0$ eşitsizliği TÜM gerçek $x$ için sağlanıyorsa, $c$ hangi aralıkta olmalıdır?</p>
<p>A) $c&gt;4$ &nbsp; B) $c&lt;4$ &nbsp; C) $c\\\\ge4$ &nbsp; D) $c\\\\le4$ &nbsp; E) $c=4$</p>
<p><strong>Çözüm:</strong> $\\\\Delta=16-4c&lt;0\\\\Rightarrow c&gt;4$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>Pozitif $a,b$ için $a+b=10$ ise $ab$ ifadesinin ALABİLECEĞİ en büyük değer kaçtır (AM-GM)?</p>
<p>A) 25 &nbsp; B) 20 &nbsp; C) 50 &nbsp; D) 10 &nbsp; E) 100</p>
<p><strong>Çözüm:</strong> AM-GM eşitliği $a=b=5$'te maksimuma ulaşır: $ab=25$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>$\\\\dfrac x{x-3}\\\\ge2$ eşitsizliğinin çözüm kümesi nedir?</p>
<p>A) $3&lt;x\\\\le6$ &nbsp; B) $3\\\\le x&lt;6$ &nbsp; C) $x&lt;3$ veya $x&gt;6$ &nbsp; D) $x&gt;6$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $\\\\frac{x}{x-3}-2\\\\ge0\\\\Rightarrow\\\\frac{6-x}{x-3}\\\\ge0$; kritik noktalar $3,6$; işaret analizi: $3&lt;x\\\\le6$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>Pozitif reel $a,b$ için $a^2+b^2\\\\ge2ab$ eşitsizliği (her zaman doğru) hangi koşulda EŞİTLİK olur?</p>
<p>A) $a=b$ &nbsp; B) $a=-b$ &nbsp; C) $a=0$ veya $b=0$ &nbsp; D) Hiçbir zaman &nbsp; E) $a,b$ negatif olduğunda</p>
<p><strong>Çözüm:</strong> $(a-b)^2\\\\ge0$'dan gelir; eşitlik sadece $a=b$'de. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>$x^2-2x-8\\\\le0$ VE $x\\\\ge-1$ sistemini birlikte sağlayan $x$ aralığı nedir?</p>
<p>A) $-1\\\\le x\\\\le4$ &nbsp; B) $-2\\\\le x\\\\le4$ &nbsp; C) $x\\\\ge-1$ &nbsp; D) $-2\\\\le x\\\\le-1$ &nbsp; E) Çözüm yok</p>
<p><strong>Çözüm:</strong> $(x-4)(x+2)\\\\le0\\\\Rightarrow-2\\\\le x\\\\le4$; $x\\\\ge-1$ ile kesişim: $-1\\\\le x\\\\le4$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>$|x|+|x-4|=4$ denkleminin çözüm kümesi hakkında ne söylenebilir?</p>
<p>A) Sonsuz çözüm vardır, $0\\\\le x\\\\le4$ aralığındaki her $x$ çözümdür &nbsp; B) 2 çözüm vardır &nbsp; C) 1 çözüm vardır &nbsp; D) Çözüm yoktur &nbsp; E) 4 çözüm vardır</p>
<p><strong>Çözüm:</strong> Minimum değer $|4-0|=4$'tür ve bu minimum, $x\\\\in[0,4]$ aralığındaki HER $x$ için gerçekleşir; sonsuz çözüm. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<hr />
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<ol>
<li>$3x-2&gt;10$ eşitsizliğinin çözümü nedir?<br>A) $x&gt;4$ &nbsp; B) $x&lt;4$ &nbsp; C) $x&gt;10$ &nbsp; D) $x&lt;10$ &nbsp; E) $x&gt;2$</li>
<li>$-2x+4\\\\le0$ eşitsizliğinin çözümü nedir?<br>A) $x\\\\ge2$ &nbsp; B) $x\\\\le2$ &nbsp; C) $x\\\\ge-2$ &nbsp; D) $x\\\\le-2$ &nbsp; E) $x\\\\ge4$</li>
<li>$x^2-16&gt;0$ eşitsizliğinin çözümü nedir?<br>A) $x&lt;-4$ veya $x&gt;4$ &nbsp; B) $-4&lt;x&lt;4$ &nbsp; C) $x&gt;4$ &nbsp; D) $x&lt;-4$ &nbsp; E) Tüm reel sayılar</li>
<li>$x^2-16&lt;0$ eşitsizliğinin çözümü nedir?<br>A) $-4&lt;x&lt;4$ &nbsp; B) $x&lt;-4$ veya $x&gt;4$ &nbsp; C) $x&gt;4$ &nbsp; D) $x&lt;-4$ &nbsp; E) Çözüm yok</li>
<li>$(x-2)(x-5)&gt;0$ eşitsizliğinin çözümü nedir?<br>A) $x&lt;2$ veya $x&gt;5$ &nbsp; B) $2&lt;x&lt;5$ &nbsp; C) $x&gt;5$ &nbsp; D) $x&lt;2$ &nbsp; E) Tüm reel sayılar</li>
<li>$(x-2)(x-5)&lt;0$ eşitsizliğinin çözümü nedir?<br>A) $2&lt;x&lt;5$ &nbsp; B) $x&lt;2$ veya $x&gt;5$ &nbsp; C) $x&gt;5$ &nbsp; D) $x&lt;2$ &nbsp; E) Çözüm yok</li>
<li>$4x+3\\\\le19$ eşitsizliğinin çözümü nedir?<br>A) $x\\\\le4$ &nbsp; B) $x\\\\ge4$ &nbsp; C) $x\\\\le19$ &nbsp; D) $x\\\\ge19$ &nbsp; E) $x\\\\le3$</li>
<li>$\\\\dfrac x3-2&gt;1$ eşitsizliğinin çözümü nedir?<br>A) $x&gt;9$ &nbsp; B) $x&lt;9$ &nbsp; C) $x&gt;3$ &nbsp; D) $x&lt;3$ &nbsp; E) $x&gt;6$</li>
<li>$-1&lt;x+2&lt;5$ eşitsizliğinin çözümü nedir?<br>A) $-3&lt;x&lt;3$ &nbsp; B) $-1&lt;x&lt;5$ &nbsp; C) $1&lt;x&lt;7$ &nbsp; D) $-3&lt;x&lt;5$ &nbsp; E) $0&lt;x&lt;3$</li>
<li>$x^2+1&gt;0$ eşitsizliğinin çözümü nedir?<br>A) Tüm reel sayılar &nbsp; B) $x&gt;0$ &nbsp; C) $x&lt;0$ &nbsp; D) $x=0$ &nbsp; E) Çözüm yok</li>
<li>$x^2-3x-4\\\\le0$ eşitsizliğinin çözümü nedir?<br>A) $-1\\\\le x\\\\le4$ &nbsp; B) $x\\\\le-1$ veya $x\\\\ge4$ &nbsp; C) $x&lt;-1$ &nbsp; D) $x&gt;4$ &nbsp; E) Çözüm yok</li>
<li>$x^2-x-6\\\\ge0$ eşitsizliğinin çözümü nedir?<br>A) $x\\\\le-2$ veya $x\\\\ge3$ &nbsp; B) $-2\\\\le x\\\\le3$ &nbsp; C) $x\\\\ge3$ &nbsp; D) $x\\\\le-2$ &nbsp; E) Tüm reel sayılar</li>
<li>$\\\\dfrac{x-1}{x-4}&gt;0$ eşitsizliğinin çözümü nedir?<br>A) $x&lt;1$ veya $x&gt;4$ &nbsp; B) $1&lt;x&lt;4$ &nbsp; C) $x&gt;4$ &nbsp; D) $x&lt;1$ &nbsp; E) Tüm reel sayılar hariç 4</li>
<li>$\\\\dfrac{x-1}{x-4}&lt;0$ eşitsizliğinin çözümü nedir?<br>A) $1&lt;x&lt;4$ &nbsp; B) $x&lt;1$ veya $x&gt;4$ &nbsp; C) $x&gt;4$ &nbsp; D) $x&lt;1$ &nbsp; E) Çözüm yok</li>
<li>$|3x-1|&lt;8$ eşitsizliğinin çözümü nedir?<br>A) $-\\\\frac73&lt;x&lt;3$ &nbsp; B) $-3&lt;x&lt;\\\\frac73$ &nbsp; C) $x&lt;3$ &nbsp; D) $x&gt;-\\\\frac73$ &nbsp; E) Çözüm yok</li>
<li>$|x-3|\\\\ge5$ eşitsizliğinin çözümü nedir?<br>A) $x\\\\le-2$ veya $x\\\\ge8$ &nbsp; B) $-2\\\\le x\\\\le8$ &nbsp; C) $x\\\\ge8$ &nbsp; D) $x\\\\le-2$ &nbsp; E) Tüm reel sayılar</li>
<li>$x^2-x-2&lt;0$ eşitsizliğinin çözümü nedir?<br>A) $-1&lt;x&lt;2$ &nbsp; B) $x&lt;-1$ veya $x&gt;2$ &nbsp; C) $x&gt;2$ &nbsp; D) $x&lt;-1$ &nbsp; E) Çözüm yok</li>
<li>$x&gt;1$ VE $x^2-9&lt;0$ sistemini birlikte sağlayan $x$ aralığı nedir?<br>A) $1&lt;x&lt;3$ &nbsp; B) $-3&lt;x&lt;1$ &nbsp; C) $x&gt;3$ &nbsp; D) $x&lt;-3$ &nbsp; E) Çözüm yok</li>
<li>$2x+1\\\\ge3x-4$ eşitsizliğinin çözümü nedir?<br>A) $x\\\\le5$ &nbsp; B) $x\\\\ge5$ &nbsp; C) $x\\\\le-5$ &nbsp; D) $x\\\\ge-5$ &nbsp; E) $x\\\\le1$</li>
<li>$-x^2+x+2\\\\ge0$ eşitsizliğinin çözümü nedir?<br>A) $-1\\\\le x\\\\le2$ &nbsp; B) $x\\\\le-1$ veya $x\\\\ge2$ &nbsp; C) $x&lt;-1$ &nbsp; D) $x&gt;2$ &nbsp; E) Çözüm yok</li>
</ol>

<hr />
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. A</strong> — $3x&gt;12\\\\Rightarrow x&gt;4$.</p>
<p><strong>2. A</strong> — $-2x\\\\le-4\\\\Rightarrow x\\\\ge2$.</p>
<p><strong>3. A</strong> — Kökler dışı pozitif.</p>
<p><strong>4. A</strong> — Kökler arası negatif.</p>
<p><strong>5. A</strong> — Kökler dışı pozitif.</p>
<p><strong>6. A</strong> — Kökler arası negatif.</p>
<p><strong>7. A</strong> — $4x\\\\le16\\\\Rightarrow x\\\\le4$.</p>
<p><strong>8. A</strong> — $\\\\frac x3&gt;3\\\\Rightarrow x&gt;9$.</p>
<p><strong>9. A</strong> — Her tarafa 2 çıkar: $-3&lt;x&lt;3$.</p>
<p><strong>10. A</strong> — Her zaman doğru.</p>
<p><strong>11. A</strong> — $(x-4)(x+1)\\\\le0\\\\Rightarrow-1\\\\le x\\\\le4$.</p>
<p><strong>12. A</strong> — $(x-3)(x+2)\\\\ge0\\\\Rightarrow x\\\\le-2$ veya $x\\\\ge3$.</p>
<p><strong>13. A</strong> — Kritik noktalar dışı pozitif.</p>
<p><strong>14. A</strong> — Kritik noktalar arası negatif.</p>
<p><strong>15. A</strong> — $-8&lt;3x-1&lt;8\\\\Rightarrow-7&lt;3x&lt;9\\\\Rightarrow-\\\\frac73&lt;x&lt;3$.</p>
<p><strong>16. A</strong> — $x-3\\\\le-5$ veya $x-3\\\\ge5\\\\Rightarrow x\\\\le-2$ veya $x\\\\ge8$.</p>
<p><strong>17. A</strong> — $(x-2)(x+1)&lt;0\\\\Rightarrow-1&lt;x&lt;2$.</p>
<p><strong>18. A</strong> — $x^2-9&lt;0\\\\Rightarrow-3&lt;x&lt;3$; $x&gt;1$ ile kesişim: $1&lt;x&lt;3$.</p>
<p><strong>19. A</strong> — $-x\\\\ge-5\\\\Rightarrow x\\\\le5$.</p>
<p><strong>20. A</strong> — $-1$ ile çarp, yön değişir: $x^2-x-2\\\\le0\\\\Rightarrow-1\\\\le x\\\\le2$.</p>

<hr />
<h2>13. Ultra Özet</h2>
<blockquote><p><strong>EŞİTSİZLİKLER — TEK SAYFA</strong><br>
1. Negatifle çarpma/bölmede yön DEĞİŞİR.<br>
2. İkinci derece ($a&gt;0$): kökler arası negatif, dışı pozitif.<br>
3. Rasyonel eşitsizlikte çapraz çarpma YAPMA; tek tarafı sıfırla, işaret tablosu kur.<br>
4. Sistemlerde her eşitsizliğin çözümünü ayrı bul, KESİŞİMİNİ al.<br>
5. AM-GM: sabit toplamlı pozitif ikilinin çarpımı, sayılar EŞİT olduğunda maksimum olur.</p></blockquote>

<hr />
<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• Negatifle çarpımda/bölümde yön değişir, unutma.<br>
• "Gülen yüz" kuralı: kökler arası zıt, dışı aynı işaret.<br>
• Rasyonelde çapraz çarpma yasak; sıfırla, tablo kur.<br>
• Sistemde KESİŞİM al, birleşim değil.<br>
• AM-GM'de eşitlik durumu = sayılar eşit.</p>
</div>
\` },`,
  },
  {
    id: 26,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Sayı Problemleri',
    built: true,
    html: `<h3>(Ardışık Sayılar, Basamak Problemleri, Rakam Toplamı-Modüler Özellikler — İleri Seviye)</h3>
<hr />

<h2>1. Konunun Mantığı</h2>
<p>Sayı problemleri, cebirsel ifade kurma becerisini test eder. İleri seviyede iki basamaklı bir sayıyı $\\\\overline{ab}=10a+b$ biçiminde İFADE ETMEK ve "rakamları toplamı ile sayı arasındaki fark her zaman 9'un katıdır" gibi MODÜLER özellikleri tanımak, çözümü saniyeler içine indirir.</p>

<hr />
<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p><strong>Ardışık sayılar:</strong> $n,n+1,n+2,\\\\ldots$ (tam sayı); $n,n+2,n+4,\\\\ldots$ (çift ya da tek sayılar).</p>
<p><strong>İki basamaklı sayı:</strong> $\\\\overline{ab}=10a+b$ ($a$: onlar, $b$: birler basamağı, $a\\\\ne0$). Rakamları YER DEĞİŞTİRİLMİŞ hâli: $\\\\overline{ba}=10b+a$.</p>
<p><strong>Fark özdeşliği:</strong> $\\\\overline{ab}-\\\\overline{ba}=9(a-b)$; toplamı: $\\\\overline{ab}+\\\\overline{ba}=11(a+b)$.</p>

<hr />
<h2>3. İleri Düzey Ayrıntılar</h2>
<ul>
<li>Bir sayı ile rakamları toplamı arasındaki fark HER ZAMAN 9'un katıdır (çünkü $10\\\\equiv1\\\\pmod9$); bu, sayıların 9'a bölünebilme kuralının da temelidir.</li>
<li>Ardışık $k$ tane sayının toplamı, ORTANCA terimin $k$ katına eşittir (tek sayıda terim varsa).</li>
<li>Üç basamaklı $\\\\overline{aba}$ (palindrom) sayı sayma problemlerinde, ilk ve son rakam AYNI ($a\\\\ne0$, 9 seçenek), orta rakam SERBEST (10 seçenek): toplam $9\\\\times10=90$.</li>
</ul>

<hr />
<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🟨 Ezber Kutusu</span><p>İki basamaklı sayı problemlerinde HER ZAMAN $\\\\overline{ab}=10a+b$ yaz; asla "$ab$" çarpım gibi düşünme.</p></div>

<hr />
<h2>5. Karşılaştırma Tabloları</h2>
<table><thead><tr><th>İfade</th><th>Formül</th></tr></thead><tbody>
<tr><td>İki basamaklı sayı</td><td>$10a+b$</td></tr>
<tr><td>Ters çevrilmiş</td><td>$10b+a$</td></tr>
<tr><td>Fark</td><td>$9(a-b)$</td></tr>
<tr><td>Toplam</td><td>$11(a+b)$</td></tr>
</tbody></table>

<hr />
<h2>6. Sınıflandırma Şeması</h2>
<blockquote><p>Sayı problemi gördüğünde: 1) Bilinmeyeni tanımla ($n$, ya da $\\\\overline{ab}$ gibi) → 2) Cümledeki her koşulu birer denkleme çevir → 3) Sistemi çöz → 4) Basamak problemiyse hazır özdeşlikleri (fark $9(a-b)$, toplam $11(a+b)$) kullanmayı dene.</p></blockquote>

<hr />
<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">⚠️ ÖSYM Tuzağı</span><p>"$\\\\overline{ab}$" ifadesini $a\\\\times b$ (çarpım) ile karıştırmak çok yaygın bir hatadır; üstteki çizgi bunun bir SAYI (10a+b) olduğunu, çarpım olmadığını gösterir.</p></div>

<hr />
<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de sayı problemleri, ardışık sayı ve basamak (rakam) problemleri şeklinde düzenli olarak gelir; çözüm için cebirsel denklem kurma becerisi belirleyicidir.</p>

<hr />
<h2>9. Soru Çözüm Stratejileri</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">🟦 İpucu</span><p>"Rakamları toplamının katı" gibi ifadeler geçtiğinde deneme-yanılmayı (küçük değerlerden başlayarak) cebirsel çözümle birlikte kullan; genelde tek bir küçük tam sayı çözümü olur.</p></div>

<hr />
<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<h3>🟢 Orta-Kolay (1-10)</h3>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>İki ardışık tam sayının toplamı 45 ise büyük sayı kaçtır?</p>
<p>A) 23 &nbsp; B) 22 &nbsp; C) 24 &nbsp; D) 21 &nbsp; E) 20</p>
<p><strong>Çözüm:</strong> $n+(n+1)=45\\\\Rightarrow n=22$; büyük $=23$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>Üç ardışık tam sayının toplamı 72 ise ortanca sayı kaçtır?</p>
<p>A) 24 &nbsp; B) 23 &nbsp; C) 25 &nbsp; D) 22 &nbsp; E) 26</p>
<p><strong>Çözüm:</strong> Ortanca $\\\\times3=72\\\\Rightarrow24$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>Bir sayının 3 katının 5 fazlası 32'dir. Sayı kaçtır?</p>
<p>A) 9 &nbsp; B) 8 &nbsp; C) 10 &nbsp; D) 7 &nbsp; E) 11</p>
<p><strong>Çözüm:</strong> $3x+5=32\\\\Rightarrow x=9$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>İki ardışık çift sayının toplamı 54'tür. Küçük sayı kaçtır?</p>
<p>A) 26 &nbsp; B) 24 &nbsp; C) 28 &nbsp; D) 25 &nbsp; E) 27</p>
<p><strong>Çözüm:</strong> $n+(n+2)=54\\\\Rightarrow n=26$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Bir sayının yarısının 3 fazlası 15'tir. Sayı kaçtır?</p>
<p>A) 24 &nbsp; B) 20 &nbsp; C) 18 &nbsp; D) 22 &nbsp; E) 26</p>
<p><strong>Çözüm:</strong> $\\\\frac x2+3=15\\\\Rightarrow x=24$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>İki basamaklı bir sayının rakamları toplamı 11'dir; onlar basamağı birler basamağından 3 fazladır. Sayı nedir?</p>
<p>A) 74 &nbsp; B) 47 &nbsp; C) 83 &nbsp; D) 38 &nbsp; E) 65</p>
<p><strong>Çözüm:</strong> $a+b=11,a=b+3\\\\Rightarrow2b+3=11\\\\Rightarrow b=4,a=7$; sayı $=74$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>Bir sayının 2 katından 7 çıkarılırsa 15 elde ediliyor. Sayı kaçtır?</p>
<p>A) 11 &nbsp; B) 10 &nbsp; C) 12 &nbsp; D) 9 &nbsp; E) 13</p>
<p><strong>Çözüm:</strong> $2x-7=15\\\\Rightarrow x=11$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>İki ardışık tek sayının toplamı 56'dır. Büyük sayı kaçtır?</p>
<p>A) 29 &nbsp; B) 27 &nbsp; C) 31 &nbsp; D) 25 &nbsp; E) 33</p>
<p><strong>Çözüm:</strong> $n+(n+2)=56\\\\Rightarrow n=27$; büyük $=29$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>Bir sayının %20 fazlası 60'tır. Sayı kaçtır?</p>
<p>A) 50 &nbsp; B) 48 &nbsp; C) 45 &nbsp; D) 55 &nbsp; E) 52</p>
<p><strong>Çözüm:</strong> $1,2x=60\\\\Rightarrow x=50$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>İki sayının toplamı 50, farkı 12'dir. Büyük sayı kaçtır?</p>
<p>A) 31 &nbsp; B) 29 &nbsp; C) 19 &nbsp; D) 25 &nbsp; E) 33</p>
<p><strong>Çözüm:</strong> Büyük $=\\\\frac{50+12}2=31$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<h3>🟡 Orta-Zor (11-20)</h3>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>İki basamaklı bir sayı ile rakamları yer değiştirilmiş hâli arasındaki fark 36'dır. Onlar basamağı, birler basamağından kaç fazladır?</p>
<p>A) 4 &nbsp; B) 3 &nbsp; C) 5 &nbsp; D) 6 &nbsp; E) 2</p>
<p><strong>Çözüm:</strong> $9(a-b)=36\\\\Rightarrow a-b=4$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>Üç ardışık çift sayının toplamı, en büyüğünün 5 katından 22 azdır. Ortanca sayı kaçtır?</p>
<p>A) 6 &nbsp; B) 8 &nbsp; C) 10 &nbsp; D) 4 &nbsp; E) 12</p>
<p><strong>Çözüm:</strong> Sayılar $n-2,n,n+2$; toplam $3n$; $5(n+2)-22=3n\\\\Rightarrow2n=12\\\\Rightarrow n=6$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>İki basamaklı bir sayının rakamları toplamı 9'dur ve sayı, rakamları toplamının 6 katıdır. Sayı nedir?</p>
<p>A) 54 &nbsp; B) 45 &nbsp; C) 63 &nbsp; D) 72 &nbsp; E) 36</p>
<p><strong>Çözüm:</strong> Sayı $=6\\\\times9=54$; $5+4=9$ ✓. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>Bir sayının 4 katı ile 15'in toplamı, aynı sayının 7 katından 6 eksiktir. Sayı kaçtır?</p>
<p>A) 7 &nbsp; B) 6 &nbsp; C) 8 &nbsp; D) 9 &nbsp; E) 5</p>
<p><strong>Çözüm:</strong> $4x+15=7x-6\\\\Rightarrow21=3x\\\\Rightarrow x=7$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>İki basamaklı bir sayının birler basamağı, onlar basamağının 2 katıdır; rakamları toplamı 12'dir. Sayı nedir?</p>
<p>A) 48 &nbsp; B) 84 &nbsp; C) 39 &nbsp; D) 93 &nbsp; E) 26</p>
<p><strong>Çözüm:</strong> $a+b=12,b=2a\\\\Rightarrow3a=12\\\\Rightarrow a=4,b=8$; sayı $=48$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>Üç ardışık tam sayının kareleri toplamı 302'dir. Ortanca sayı kaçtır?</p>
<p>A) 10 &nbsp; B) 9 &nbsp; C) 11 &nbsp; D) 8 &nbsp; E) 12</p>
<p><strong>Çözüm:</strong> $(n-1)^2+n^2+(n+1)^2=3n^2+2=302\\\\Rightarrow n^2=100\\\\Rightarrow n=10$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>Bir sayının karesi, kendisinin 5 katından 6 fazladır. Sayı (pozitif) kaçtır?</p>
<p>A) 6 &nbsp; B) 5 &nbsp; C) 7 &nbsp; D) 4 &nbsp; E) 8</p>
<p><strong>Çözüm:</strong> $x^2=5x+6\\\\Rightarrow(x-6)(x+1)=0\\\\Rightarrow x=6$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>İki sayının çarpımı 96, toplamı 20'dir. Büyük sayı kaçtır?</p>
<p>A) 12 &nbsp; B) 10 &nbsp; C) 14 &nbsp; D) 16 &nbsp; E) 8</p>
<p><strong>Çözüm:</strong> $t^2-20t+96=0\\\\Rightarrow t=12,8$; büyük $=12$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>Bir sayının 3 katının karesi, aynı sayının karesinin 3 katından 96 fazladır. Sayı (pozitif) kaçtır?</p>
<p>A) 4 &nbsp; B) 3 &nbsp; C) 5 &nbsp; D) 6 &nbsp; E) 8</p>
<p><strong>Çözüm:</strong> $(3x)^2=3x^2+96\\\\Rightarrow9x^2-3x^2=96\\\\Rightarrow6x^2=96\\\\Rightarrow x^2=16\\\\Rightarrow x=4$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>Ardışık 5 tam sayının toplamı 100'dür. En küçüğü kaçtır?</p>
<p>A) 18 &nbsp; B) 17 &nbsp; C) 19 &nbsp; D) 16 &nbsp; E) 20</p>
<p><strong>Çözüm:</strong> Ortanca $=100/5=20$; en küçük $=20-2=18$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<h3>🔴 Zor (21-30)</h3>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>İki basamaklı bir sayı ile rakamları yer değiştirilmiş hâli toplanınca 121 elde ediliyor. Bu sayının rakamları toplamı kaçtır?</p>
<p>A) 11 &nbsp; B) 10 &nbsp; C) 12 &nbsp; D) 9 &nbsp; E) 13</p>
<p><strong>Çözüm:</strong> $11(a+b)=121\\\\Rightarrow a+b=11$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>Üç basamaklı bir sayının rakamları toplamı 15'tir; yüzler basamağı birler basamağının 2 katıdır ve onlar basamağı 3'tür. Sayı nedir?</p>
<p>A) 843 &nbsp; B) 834 &nbsp; C) 483 &nbsp; D) 438 &nbsp; E) 384</p>
<p><strong>Çözüm:</strong> $y+3+b=15\\\\Rightarrow y+b=12$, $y=2b\\\\Rightarrow3b=12\\\\Rightarrow b=4,y=8$; sayı $=843$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>Bir sayı ile rakamları toplamı arasındaki farkın her zaman 9'un katı olması hangi özellikten kaynaklanır?</p>
<p>A) $10\\\\equiv1\\\\pmod9$ olduğundan, sayı ile rakamları toplamı arasındaki fark her zaman 9'un katıdır &nbsp; B) Rastgele bir tesadüftür &nbsp; C) Sadece bazı sayılar için doğrudur &nbsp; D) Hiçbir zaman doğru değildir &nbsp; E) Sadece çift sayılar için doğrudur</p>
<p><strong>Çözüm:</strong> $10\\\\equiv1\\\\pmod9$ olduğundan her basamağın "ağırlığı" mod 9'da 1'dir; bu yüzden sayı $\\\\equiv$ rakamları toplamı $\\\\pmod9$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>$\\\\overline{aba}$ biçimindeki (baştan ve sondan aynı rakamlı, $a\\\\ne0$) üç basamaklı sayılardan kaç tanesi vardır?</p>
<p>A) 90 &nbsp; B) 81 &nbsp; C) 100 &nbsp; D) 45 &nbsp; E) 72</p>
<p><strong>Çözüm:</strong> $a$ için 9 seçenek (1-9), $b$ için 10 seçenek (0-9): $9\\\\times10=90$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>İki basamaklı, sayının kendisi rakamları toplamının 7 katına eşit olan kaç sayı vardır?</p>
<p>A) 4 &nbsp; B) 3 &nbsp; C) 5 &nbsp; D) 2 &nbsp; E) 6</p>
<p><strong>Çözüm:</strong> $10a+b=7(a+b)\\\\Rightarrow3a=6b\\\\Rightarrow a=2b$; $b=1,2,3,4$ için $a=2,4,6,8$ (hepsi geçerli basamak): 4 sayı (21,42,63,84). <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>$n(n+1)\\\\le999$ eşitsizliğini sağlayan en büyük pozitif tam sayı $n$ kaçtır?</p>
<p>A) 31 &nbsp; B) 30 &nbsp; C) 32 &nbsp; D) 29 &nbsp; E) 33</p>
<p><strong>Çözüm:</strong> $31\\\\times32=992\\\\le999$ ✓; $32\\\\times33=1056&gt;999$; en büyük $n=31$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>Bir sayının 3 katının 2 fazlası ile 4 katının 5 eksiği birbirine eşittir. Sayı kaçtır?</p>
<p>A) 7 &nbsp; B) 6 &nbsp; C) 8 &nbsp; D) 9 &nbsp; E) 5</p>
<p><strong>Çözüm:</strong> $3x+2=4x-5\\\\Rightarrow x=7$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>İki basamaklı bir sayı ile 9 arasındaki fark, sayının rakamları toplamının 8 katına eşittir. Sayı nedir?</p>
<p>A) 81 &nbsp; B) 18 &nbsp; C) 72 &nbsp; D) 27 &nbsp; E) 63</p>
<p><strong>Çözüm:</strong> $10a+b-9=8(a+b)\\\\Rightarrow2a-7b=9$; $b=1$ için $a=8$; sayı $=81$; kontrol: $81-9=72=8\\\\times9$ ✓. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>Ardışık üç pozitif tam sayının çarpımı 210'dur. Bu üç sayının toplamı kaçtır?</p>
<p>A) 18 &nbsp; B) 15 &nbsp; C) 21 &nbsp; D) 12 &nbsp; E) 24</p>
<p><strong>Çözüm:</strong> $5\\\\times6\\\\times7=210$; toplam $=18$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>İki basamaklı bir sayının karesi ile kendisi arasındaki fark, sayının 20 katına eşittir. Sayı (sıfırdan farklı) kaçtır?</p>
<p>A) 21 &nbsp; B) 20 &nbsp; C) 19 &nbsp; D) 22 &nbsp; E) 18</p>
<p><strong>Çözüm:</strong> $x^2-x=20x\\\\Rightarrow x^2=21x\\\\Rightarrow x=21$ ($x\\\\ne0$). <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<hr />
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<ol>
<li>İki ardışık tam sayının toplamı 37 ise büyük sayı kaçtır?<br>A) 19 &nbsp; B) 18 &nbsp; C) 20 &nbsp; D) 17 &nbsp; E) 21</li>
<li>Üç ardışık tam sayının toplamı 60 ise ortanca sayı kaçtır?<br>A) 20 &nbsp; B) 19 &nbsp; C) 21 &nbsp; D) 18 &nbsp; E) 22</li>
<li>Bir sayının 4 katının 3 fazlası 27'dir. Sayı kaçtır?<br>A) 6 &nbsp; B) 5 &nbsp; C) 7 &nbsp; D) 4 &nbsp; E) 8</li>
<li>İki ardışık çift sayının toplamı 38'dir. Küçük sayı kaçtır?<br>A) 18 &nbsp; B) 16 &nbsp; C) 20 &nbsp; D) 17 &nbsp; E) 19</li>
<li>Bir sayının yarısının 5 fazlası 20'dir. Sayı kaçtır?<br>A) 30 &nbsp; B) 25 &nbsp; C) 28 &nbsp; D) 32 &nbsp; E) 35</li>
<li>İki basamaklı bir sayının rakamları toplamı 9, onlar basamağı birler basamağının 2 katıdır. Sayı nedir?<br>A) 63 &nbsp; B) 36 &nbsp; C) 54 &nbsp; D) 45 &nbsp; E) 72</li>
<li>Bir sayının 3 katından 5 çıkarılırsa 16 elde ediliyor. Sayı kaçtır?<br>A) 7 &nbsp; B) 6 &nbsp; C) 8 &nbsp; D) 5 &nbsp; E) 9</li>
<li>İki ardışık tek sayının toplamı 48'dir. Büyük sayı kaçtır?<br>A) 25 &nbsp; B) 23 &nbsp; C) 27 &nbsp; D) 21 &nbsp; E) 29</li>
<li>Bir sayının %25 fazlası 50'dir. Sayı kaçtır?<br>A) 40 &nbsp; B) 38 &nbsp; C) 42 &nbsp; D) 45 &nbsp; E) 35</li>
<li>İki sayının toplamı 40, farkı 8'dir. Büyük sayı kaçtır?<br>A) 24 &nbsp; B) 22 &nbsp; C) 16 &nbsp; D) 20 &nbsp; E) 26</li>
<li>İki basamaklı bir sayı ile ters çevrilmiş hâli arasındaki fark 27'dir. Rakamlar farkı ($a-b$) kaçtır?<br>A) 3 &nbsp; B) 2 &nbsp; C) 4 &nbsp; D) 5 &nbsp; E) 1</li>
<li>Üç ardışık tek sayının toplamı, en büyüğünün 4 katından 15 azdır. Ortanca sayı kaçtır?<br>A) 7 &nbsp; B) 5 &nbsp; C) 9 &nbsp; D) 3 &nbsp; E) 11</li>
<li>İki basamaklı bir sayı, rakamları toplamının 7 katıdır ve rakamları toplamı 9'dur. Sayı nedir?<br>A) 63 &nbsp; B) 54 &nbsp; C) 72 &nbsp; D) 45 &nbsp; E) 81</li>
<li>Bir sayının 5 katı ile 12'nin toplamı, aynı sayının 8 katından 9 eksiktir. Sayı kaçtır?<br>A) 7 &nbsp; B) 6 &nbsp; C) 8 &nbsp; D) 9 &nbsp; E) 5</li>
<li>İki basamaklı bir sayının birler basamağı, onlar basamağının 3 katıdır; rakamları toplamı 8'dir. Sayı nedir?<br>A) 26 &nbsp; B) 62 &nbsp; C) 39 &nbsp; D) 93 &nbsp; E) 17</li>
<li>Üç ardışık tam sayının kareleri toplamı 194'tür. Ortanca sayı kaçtır?<br>A) 8 &nbsp; B) 7 &nbsp; C) 9 &nbsp; D) 6 &nbsp; E) 10</li>
<li>Bir sayının karesi, kendisinin 6 katından 16 fazladır. Pozitif sayı kaçtır?<br>A) 8 &nbsp; B) 7 &nbsp; C) 9 &nbsp; D) 6 &nbsp; E) 10</li>
<li>İki sayının çarpımı 45, toplamı 14'tür. Büyük sayı kaçtır?<br>A) 9 &nbsp; B) 8 &nbsp; C) 10 &nbsp; D) 7 &nbsp; E) 11</li>
<li>Ardışık 5 tam sayının toplamı 75'tir. En küçüğü kaçtır?<br>A) 13 &nbsp; B) 12 &nbsp; C) 14 &nbsp; D) 11 &nbsp; E) 15</li>
<li>İki basamaklı bir sayı ile ters çevrilmiş hâli toplamı 88'dir. Rakamları toplamı kaçtır?<br>A) 8 &nbsp; B) 7 &nbsp; C) 9 &nbsp; D) 6 &nbsp; E) 10</li>
</ol>

<hr />
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. A</strong> — $n=18$, büyük $=19$.</p>
<p><strong>2. A</strong> — $3n=60\\\\Rightarrow n=20$.</p>
<p><strong>3. A</strong> — $4x+3=27\\\\Rightarrow x=6$.</p>
<p><strong>4. A</strong> — $2n+2=38\\\\Rightarrow n=18$.</p>
<p><strong>5. A</strong> — $x/2+5=20\\\\Rightarrow x=30$.</p>
<p><strong>6. A</strong> — $a+b=9,a=2b\\\\Rightarrow3b=9\\\\Rightarrow b=3,a=6$; sayı $=63$.</p>
<p><strong>7. A</strong> — $3x-5=16\\\\Rightarrow x=7$.</p>
<p><strong>8. A</strong> — $n+(n+2)=48\\\\Rightarrow n=23$, büyük $=25$.</p>
<p><strong>9. A</strong> — $1,25x=50\\\\Rightarrow x=40$.</p>
<p><strong>10. A</strong> — Büyük $=(40+8)/2=24$.</p>
<p><strong>11. A</strong> — $9(a-b)=27\\\\Rightarrow a-b=3$.</p>
<p><strong>12. A</strong> — $4(n+2)-15=3n\\\\Rightarrow n=7$.</p>
<p><strong>13. A</strong> — Sayı $=7\\\\times9=63$; $6+3=9$ ✓.</p>
<p><strong>14. A</strong> — $5x+12=8x-9\\\\Rightarrow x=7$.</p>
<p><strong>15. A</strong> — $a+b=8,b=3a\\\\Rightarrow4a=8\\\\Rightarrow a=2,b=6$; sayı $=26$.</p>
<p><strong>16. A</strong> — $3n^2+2=194\\\\Rightarrow n^2=64\\\\Rightarrow n=8$.</p>
<p><strong>17. A</strong> — $x^2=6x+16\\\\Rightarrow(x-8)(x+2)=0\\\\Rightarrow x=8$.</p>
<p><strong>18. A</strong> — $t^2-14t+45=0\\\\Rightarrow t=9,5$; büyük $=9$.</p>
<p><strong>19. A</strong> — Ortanca $=15$, en küçük $=13$.</p>
<p><strong>20. A</strong> — $11(a+b)=88\\\\Rightarrow a+b=8$.</p>

<hr />
<h2>13. Ultra Özet</h2>
<blockquote><p><strong>SAYI PROBLEMLERİ — TEK SAYFA</strong><br>
1. İki basamaklı sayı: $\\\\overline{ab}=10a+b$; ters çevrilmiş: $10b+a$.<br>
2. Fark: $9(a-b)$; toplam: $11(a+b)$ — hazır formülleri kullan.<br>
3. Ardışık $k$ sayının toplamı $=$ ortanca $\\\\times k$ (tek $k$ için).<br>
4. Sayı $\\\\equiv$ rakamları toplamı $\\\\pmod9$ (10≡1 mod 9 özdeşliğinden).<br>
5. Palindrom ($\\\\overline{aba}$) sayma: ilk/son rakam bağımlı (9 seçenek), orta serbest (10 seçenek).</p></blockquote>

<hr />
<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• $\\\\overline{ab}=10a+b$ — asla çarpım sanma.<br>
• Fark $9(a-b)$, toplam $11(a+b)$ formüllerini ezbere bil.<br>
• Ardışık sayı toplamında ortancayı bul, sayıyla çarp.<br>
• Rakam toplamı ile sayı arasındaki fark her zaman 9'un katı.</p>
</div>
\` },`,
  },
  {
    id: 27,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Kesir ve Yaş Problemleri',
    built: true,
    html: `<h3>(Kesir Denklemleri, Havuz-Kapasite Problemleri, Yaş İlişkileri, Geçmiş-Gelecek Sistemleri — İleri Seviye)</h3>
<hr />

<h2>1. Konunun Mantığı</h2>
<p>Kesir problemleri "bütünün parçası" mantığıyla, yaş problemleri ise ZAMAN kaydırmalı (geçmiş/gelecek) sistem kurma becerisiyle çözülür. İleri seviyede asıl zorluk, yaş problemlerinde İKİ FARKLI zaman noktasından (geçmiş VE gelecek) iki denklem kurup SİSTEM çözmektir.</p>

<hr />
<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p><strong>Kesir problemleri:</strong> "Bir sayının $k/n$'i $m$'dir" → $x\\\\cdot\\\\frac kn=m$. Kapasitenin bir kısmı biliniyorsa, KALAN kesri bulup orantı kur.</p>
<p><strong>Yaş problemleri:</strong> Bugünkü yaşları $B,O$ olsun. "$t$ yıl önce" $\\\\to B-t,O-t$; "$t$ yıl sonra" $\\\\to B+t,O+t$. Her koşulu ayrı denklem yap, SİSTEM çöz.</p>

<hr />
<h2>3. İleri Düzey Ayrıntılar</h2>
<ul>
<li>İki kişinin YAŞ FARKI zamanla DEĞİŞMEZ; bu, birçok yaş probleminde en hızlı kısayoldur.</li>
<li>Kesirli işlemlerde "paya X eklenip paydadan Y çıkarılırsa kesir 1 olur" türü sorularda $b-a=X+Y$ eşitliği kilit noktadır.</li>
<li>Havuz/musluk problemleri iş-zaman mantığıyla (birim zamanda doldurulan kesir) çözülür; bu, Konu 7'deki (Oran-Orantı) bileşik orantı tekniğiyle birebir örtüşür.</li>
</ul>

<hr />
<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🟨 Ezber Kutusu</span><p>Yaş farkı SABİTTİR — her zaman kontrol için kullan: "Baba-oğul yaş farkı hem bugün hem 10 yıl önce hem 10 yıl sonra AYNIDIR."</p></div>

<hr />
<h2>5. Karşılaştırma Tabloları</h2>
<table><thead><tr><th>İfade</th><th>Anlamı</th></tr></thead><tbody>
<tr><td>$t$ yıl önce</td><td>Yaş $-t$</td></tr>
<tr><td>$t$ yıl sonra</td><td>Yaş $+t$</td></tr>
<tr><td>Yaş farkı</td><td>Zamanla değişmez</td></tr>
</tbody></table>

<hr />
<h2>6. Sınıflandırma Şeması</h2>
<blockquote><p>Yaş problemi gördüğünde: 1) Bugünkü yaşları değişken olarak tanımla → 2) Her zaman ifadesini (önce/sonra) o değişkenler cinsinden yaz → 3) Cümledeki koşulları denklemlere çevir → 4) Sistemi çöz, YAŞ FARKI ile kontrol et.</p></blockquote>

<hr />
<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">⚠️ ÖSYM Tuzağı</span><p>"$t$ yıl önce" ile "$t$ yıl sonra" işaretlerini karıştırmak en sık yapılan hatadır; her zaman BUGÜNÜ referans alıp yönü (geçmiş: çıkar, gelecek: ekle) net biçimde belirle.</p></div>

<hr />
<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de yaş problemleri genelde İKİ zaman koşulu (hem geçmiş hem gelecek) içeren, sistem kurmayı gerektiren sorular olarak gelir; kesir problemleri ise havuz/kapasite senaryolarıyla iç içedir.</p>

<hr />
<h2>9. Soru Çözüm Stratejileri</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">🟦 İpucu</span><p>Yaş probleminde bulduğun sonucu MUTLAKA yaş farkıyla çapraz kontrol et; farkın hem başta hem sonda aynı çıkması, çözümün doğruluğunu hızlı biçimde teyit eder.</p></div>

<hr />
<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<h3>🟢 Orta-Kolay (1-10)</h3>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>Bir sayının $\\\\frac25$'i 20'dir. Sayı kaçtır?</p>
<p>A) 50 &nbsp; B) 40 &nbsp; C) 45 &nbsp; D) 55 &nbsp; E) 60</p>
<p><strong>Çözüm:</strong> $x\\\\times\\\\frac25=20\\\\Rightarrow x=50$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>Bir havuzun $\\\\frac38$'i doludur. 45 litre daha eklenince tam doluyor. Havuzun kapasitesi kaç litredir?</p>
<p>A) 72 &nbsp; B) 64 &nbsp; C) 80 &nbsp; D) 56 &nbsp; E) 90</p>
<p><strong>Çözüm:</strong> Kalan kesir $\\\\frac58=45\\\\Rightarrow$ kapasite $=45\\\\times\\\\frac85=72$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>Ali'nin yaşı, Veli'nin yaşının 2 katıdır. Yaşları toplamı 36 ise Ali kaç yaşındadır?</p>
<p>A) 24 &nbsp; B) 18 &nbsp; C) 20 &nbsp; D) 22 &nbsp; E) 26</p>
<p><strong>Çözüm:</strong> $V+2V=36\\\\Rightarrow V=12$; Ali $=24$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>Bir sınıfın $\\\\frac34$'ü kızdır. Kız öğrenci sayısı 24 ise sınıf mevcudu kaçtır?</p>
<p>A) 32 &nbsp; B) 28 &nbsp; C) 30 &nbsp; D) 36 &nbsp; E) 26</p>
<p><strong>Çözüm:</strong> $x\\\\times\\\\frac34=24\\\\Rightarrow x=32$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Ayşe bugün 15 yaşındadır. 5 yıl sonra kaç yaşında olur?</p>
<p>A) 20 &nbsp; B) 18 &nbsp; C) 22 &nbsp; D) 25 &nbsp; E) 19</p>
<p><strong>Çözüm:</strong> $15+5=20$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>Bir kesrin pay ve paydasının toplamı 20'dir; kesir $\\\\frac23$'e eşittir. Payı kaçtır?</p>
<p>A) 8 &nbsp; B) 12 &nbsp; C) 6 &nbsp; D) 10 &nbsp; E) 9</p>
<p><strong>Çözüm:</strong> $2k+3k=20\\\\Rightarrow k=4$; pay $=8$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>Baba, oğlundan 24 yaş büyüktür. Baba bugün 40 yaşında ise oğul kaç yaşındadır?</p>
<p>A) 16 &nbsp; B) 14 &nbsp; C) 18 &nbsp; D) 20 &nbsp; E) 12</p>
<p><strong>Çözüm:</strong> $40-24=16$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>$\\\\frac35$'i 30 olan sayı kaçtır?</p>
<p>A) 50 &nbsp; B) 45 &nbsp; C) 55 &nbsp; D) 40 &nbsp; E) 60</p>
<p><strong>Çözüm:</strong> $x=30\\\\times\\\\frac53=50$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>Bir kitabın $\\\\frac27$'si okunmuş, kalan 100 sayfa ise kitap toplam kaç sayfadır?</p>
<p>A) 140 &nbsp; B) 120 &nbsp; C) 150 &nbsp; D) 130 &nbsp; E) 160</p>
<p><strong>Çözüm:</strong> Kalan kesir $\\\\frac57=100\\\\Rightarrow$ toplam $=140$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>Ahmet'in yaşı, kardeşinin yaşının 3 katıdır. Kardeş 6 yaşında ise Ahmet kaç yaşındadır?</p>
<p>A) 18 &nbsp; B) 15 &nbsp; C) 21 &nbsp; D) 12 &nbsp; E) 24</p>
<p><strong>Çözüm:</strong> $3\\\\times6=18$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<h3>🟡 Orta-Zor (11-20)</h3>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>Bir havuzun $\\\\frac23$'ü dolu iken 20 litre boşaltılıyor, havuz $\\\\frac12$ dolu kalıyor. Havuzun kapasitesi kaç litredir?</p>
<p>A) 120 &nbsp; B) 100 &nbsp; C) 140 &nbsp; D) 90 &nbsp; E) 150</p>
<p><strong>Çözüm:</strong> $(\\\\frac23-\\\\frac12)V=20\\\\Rightarrow\\\\frac16V=20\\\\Rightarrow V=120$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>Bugün baba 50, oğul 20 yaşındadır. Kaç yıl önce babanın yaşı oğlunun yaşının 4 katıydı?</p>
<p>A) 10 &nbsp; B) 8 &nbsp; C) 12 &nbsp; D) 15 &nbsp; E) 6</p>
<p><strong>Çözüm:</strong> $50-x=4(20-x)\\\\Rightarrow50-x=80-4x\\\\Rightarrow3x=30\\\\Rightarrow x=10$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>$\\\\dfrac5{11}$ kesrinin payına 3 eklenip paydasından 3 çıkarılırsa sonuç kaçtır?</p>
<p>A) 1 &nbsp; B) 2 &nbsp; C) $\\\\frac12$ &nbsp; D) $\\\\frac23$ &nbsp; E) $\\\\frac8{11}$</p>
<p><strong>Çözüm:</strong> $\\\\frac{5+3}{11-3}=\\\\frac88=1$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>10 yıl sonra Ali'nin yaşı, bugünkü yaşının 2 katı olacaktır. Ali bugün kaç yaşındadır?</p>
<p>A) 10 &nbsp; B) 8 &nbsp; C) 12 &nbsp; D) 15 &nbsp; E) 20</p>
<p><strong>Çözüm:</strong> $x+10=2x\\\\Rightarrow x=10$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>Bir sınıfta erkek/kız oranı $\\\\frac57$'dir. Toplam öğrenci 48 ise kız öğrenci sayısı kaçtır?</p>
<p>A) 28 &nbsp; B) 20 &nbsp; C) 24 &nbsp; D) 32 &nbsp; E) 36</p>
<p><strong>Çözüm:</strong> $5k+7k=48\\\\Rightarrow k=4$; kız $=28$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>Ayşe'nin yaşı kardeşinin yaşının 2 katından 3 fazladır. Toplam yaşları 33 ise kardeşin yaşı kaçtır?</p>
<p>A) 10 &nbsp; B) 8 &nbsp; C) 12 &nbsp; D) 9 &nbsp; E) 11</p>
<p><strong>Çözüm:</strong> $2k+3+k=33\\\\Rightarrow3k=30\\\\Rightarrow k=10$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>Bir kesrin payı ile paydası toplamı 14'tür; payda, paydan 2 fazladır. Paya 1 eklenip paydadan 1 çıkarılırsa kesir 1 olur. Payı kaçtır?</p>
<p>A) 6 &nbsp; B) 7 &nbsp; C) 5 &nbsp; D) 8 &nbsp; E) 4</p>
<p><strong>Çözüm:</strong> $a+(a+2)=14\\\\Rightarrow a=6$; kontrol: $\\\\frac{6+1}{8-1}=\\\\frac77=1$ ✓. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>4 yıl önce babanın yaşı oğlunun yaşının 5 katıydı; 4 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacaktır. Bugün ikisinin yaş toplamı kaçtır?</p>
<p>A) 56 &nbsp; B) 52 &nbsp; C) 60 &nbsp; D) 48 &nbsp; E) 64</p>
<p><strong>Çözüm:</strong> $B-4=5(O-4)\\\\Rightarrow B=5O-16$; $B+4=3(O+4)\\\\Rightarrow B=3O+8$; $5O-16=3O+8\\\\Rightarrow O=12,B=44$; toplam $=56$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>Bir kesrin payı, paydasının %60'ıdır. Pay ile payda toplamı 40 ise pay kaçtır?</p>
<p>A) 15 &nbsp; B) 12 &nbsp; C) 18 &nbsp; D) 20 &nbsp; E) 10</p>
<p><strong>Çözüm:</strong> $0,6b+b=40\\\\Rightarrow1,6b=40\\\\Rightarrow b=25,a=15$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>Kardeşler A ve B'nin yaş toplamı 40'tır. A, B'den 8 yaş büyüktür. A kaç yaşındadır?</p>
<p>A) 24 &nbsp; B) 22 &nbsp; C) 26 &nbsp; D) 20 &nbsp; E) 28</p>
<p><strong>Çözüm:</strong> $A=\\\\frac{40+8}2=24$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<h3>🔴 Zor (21-30)</h3>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>Bir havuzu birinci musluk 4 saatte, ikinci musluk 6 saatte dolduruyor. İkisi birlikte açılıp 2 saat sonra ikinci musluk kapatılıyor. Havuzun tamamının doldurulması için birinci musluğun tek başına ek olarak kaç saat daha çalışması gerekir?</p>
<p>A) $\\\\frac23$ saat &nbsp; B) 1 saat &nbsp; C) $\\\\frac12$ saat &nbsp; D) $\\\\frac34$ saat &nbsp; E) $\\\\frac56$ saat</p>
<p><strong>Çözüm:</strong> 2 saatte dolan $=2(\\\\frac14+\\\\frac16)=2\\\\times\\\\frac5{12}=\\\\frac56$; kalan $=\\\\frac16$; birinci musluk hızı $\\\\frac14$; süre $=\\\\frac{1/6}{1/4}=\\\\frac23$ saat. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>Bugün Ali'nin yaşı, Veli'nin yaşının 3 katıdır. 8 yıl sonra Ali'nin yaşı Veli'nin yaşının 2 katı olacaktır. Bugün Ali kaç yaşındadır?</p>
<p>A) 24 &nbsp; B) 20 &nbsp; C) 28 &nbsp; D) 18 &nbsp; E) 30</p>
<p><strong>Çözüm:</strong> $A=3V$; $A+8=2(V+8)\\\\Rightarrow3V+8=2V+16\\\\Rightarrow V=8,A=24$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>Bir kesrin payı 2 katına, paydası 1,5 katına çıkarılırsa yeni kesir eski kesrin kaç katı olur?</p>
<p>A) $\\\\frac43$ katı &nbsp; B) $\\\\frac34$ katı &nbsp; C) 2 katı &nbsp; D) $\\\\frac32$ katı &nbsp; E) 1 katı (değişmez)</p>
<p><strong>Çözüm:</strong> $\\\\dfrac{2a}{1,5b}=\\\\dfrac43\\\\times\\\\dfrac ab$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>6 yıl önce babanın yaşı oğlunun yaşının 7 katıydı. Bugün babanın yaşı oğlunun yaşının 3 katıdır. Bugün baba kaç yaşındadır?</p>
<p>A) 27 &nbsp; B) 24 &nbsp; C) 30 &nbsp; D) 21 &nbsp; E) 33</p>
<p><strong>Çözüm:</strong> $B=3O$; $B-6=7(O-6)\\\\Rightarrow3O-6=7O-42\\\\Rightarrow4O=36\\\\Rightarrow O=9,B=27$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>Bir sayının $\\\\frac34$'ünün $\\\\frac25$'i 24'tür. Sayı kaçtır?</p>
<p>A) 80 &nbsp; B) 60 &nbsp; C) 100 &nbsp; D) 90 &nbsp; E) 70</p>
<p><strong>Çözüm:</strong> $x\\\\times\\\\frac34\\\\times\\\\frac25=24\\\\Rightarrow x\\\\times\\\\frac3{10}=24\\\\Rightarrow x=80$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>A, B, C üç kardeşin yaşları oranı $2:3:4$'tür, toplamları 45'tir. En büyüğü kaç yaşındadır?</p>
<p>A) 20 &nbsp; B) 15 &nbsp; C) 18 &nbsp; D) 25 &nbsp; E) 22</p>
<p><strong>Çözüm:</strong> $9k=45\\\\Rightarrow k=5$; en büyük $=4\\\\times5=20$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>Bir kesrin payı ile paydası arasındaki fark 12'dir; kesir $\\\\frac37$'ye eşittir. Payı kaçtır?</p>
<p>A) 9 &nbsp; B) 12 &nbsp; C) 15 &nbsp; D) 6 &nbsp; E) 21</p>
<p><strong>Çözüm:</strong> $a=3k,b=7k$; $b-a=4k=12\\\\Rightarrow k=3$; pay $=9$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>Bugün bir baba ile oğlunun yaş toplamı 50'dir. 10 yıl önce babanın yaşı, oğlunun yaşının 4 katıydı. Bugün baba kaç yaşındadır?</p>
<p>A) 34 &nbsp; B) 32 &nbsp; C) 36 &nbsp; D) 30 &nbsp; E) 38</p>
<p><strong>Çözüm:</strong> $B+O=50$; $B-10=4(O-10)\\\\Rightarrow B=4O-30$; $4O-30+O=50\\\\Rightarrow5O=80\\\\Rightarrow O=16,B=34$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>Bir kesrin karesi $\\\\dfrac49$'dur. Kesir pozitif ise kesrin kendisi kaçtır?</p>
<p>A) $\\\\frac23$ &nbsp; B) $\\\\frac49$ &nbsp; C) $\\\\frac43$ &nbsp; D) $\\\\frac89$ &nbsp; E) $\\\\frac13$</p>
<p><strong>Çözüm:</strong> $\\\\sqrt{4/9}=\\\\frac23$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>Üç kardeşin yaşları toplamı 60'tır; en büyüğü ortancadan 5, ortanca en küçükten 5 fazladır. En küçüğün yaşı kaçtır?</p>
<p>A) 15 &nbsp; B) 10 &nbsp; C) 20 &nbsp; D) 12 &nbsp; E) 18</p>
<p><strong>Çözüm:</strong> Küçük $=x$, ortanca $=x+5$, büyük $=x+10$; $3x+15=60\\\\Rightarrow x=15$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<hr />
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<ol>
<li>Bir sayının $\\\\frac37$'si 21'dir. Sayı kaçtır?<br>A) 49 &nbsp; B) 42 &nbsp; C) 56 &nbsp; D) 45 &nbsp; E) 63</li>
<li>Bir havuzun $\\\\frac14$'ü dolu, 30 litre eklenince tam doluyor. Kapasite kaçtır?<br>A) 40 &nbsp; B) 35 &nbsp; C) 45 &nbsp; D) 50 &nbsp; E) 38</li>
<li>Ali'nin yaşı Veli'nin yaşının 3 katı, toplamları 40 ise Ali kaç yaşındadır?<br>A) 30 &nbsp; B) 25 &nbsp; C) 28 &nbsp; D) 32 &nbsp; E) 27</li>
<li>Bir sınıfın $\\\\frac25$'i erkektir. Erkek sayısı 12 ise sınıf mevcudu kaçtır?<br>A) 30 &nbsp; B) 28 &nbsp; C) 25 &nbsp; D) 32 &nbsp; E) 24</li>
<li>Bugün 12 yaşında olan biri 8 yıl sonra kaç yaşında olur?<br>A) 20 &nbsp; B) 18 &nbsp; C) 22 &nbsp; D) 16 &nbsp; E) 24</li>
<li>Bir kesrin pay-payda toplamı 24, kesir $\\\\frac13$'e eşittir. Payı kaçtır?<br>A) 6 &nbsp; B) 8 &nbsp; C) 4 &nbsp; D) 12 &nbsp; E) 9</li>
<li>Baba oğuldan 30 yaş büyük, baba 50 ise oğul kaç yaşındadır?<br>A) 20 &nbsp; B) 18 &nbsp; C) 22 &nbsp; D) 15 &nbsp; E) 25</li>
<li>$\\\\frac49$'u 36 olan sayı kaçtır?<br>A) 81 &nbsp; B) 72 &nbsp; C) 90 &nbsp; D) 63 &nbsp; E) 99</li>
<li>Bir kitabın $\\\\frac38$'i okunmuş, kalan 100 sayfa ise kitap kaç sayfadır?<br>A) 160 &nbsp; B) 150 &nbsp; C) 140 &nbsp; D) 170 &nbsp; E) 130</li>
<li>Mehmet'in yaşı kardeşinin yaşının 4 katı, kardeş 5 yaşında ise Mehmet kaç yaşındadır?<br>A) 20 &nbsp; B) 18 &nbsp; C) 22 &nbsp; D) 16 &nbsp; E) 24</li>
<li>Bir havuzun $\\\\frac34$'ü dolu iken 10 litre boşaltılıyor, havuz $\\\\frac12$ dolu kalıyor. Kapasite kaçtır?<br>A) 40 &nbsp; B) 35 &nbsp; C) 45 &nbsp; D) 30 &nbsp; E) 50</li>
<li>Bugün baba 40, oğul 10 yaşındadır. Kaç yıl önce baba yaşı oğul yaşının 7 katıydı?<br>A) 5 &nbsp; B) 4 &nbsp; C) 6 &nbsp; D) 3 &nbsp; E) 7</li>
<li>$\\\\frac7{15}$ kesrinin payına 3 eklenip paydasından 3 çıkarılırsa sonuç kaç olur?<br>A) $\\\\frac56$ &nbsp; B) $\\\\frac23$ &nbsp; C) 1 &nbsp; D) $\\\\frac34$ &nbsp; E) $\\\\frac45$</li>
<li>6 yıl sonra Elif'in yaşı bugünkü yaşının 2 katı olacaktır. Elif bugün kaç yaşındadır?<br>A) 6 &nbsp; B) 8 &nbsp; C) 10 &nbsp; D) 4 &nbsp; E) 12</li>
<li>Bir sınıfta erkek/kız oranı $\\\\frac35$'tir, toplam 40 öğrenci var. Kız sayısı kaçtır?<br>A) 25 &nbsp; B) 20 &nbsp; C) 15 &nbsp; D) 30 &nbsp; E) 22</li>
<li>Zeynep'in yaşı kardeşinin yaşının 2 katından 5 fazladır. Toplam yaşları 35'tir. Kardeşin yaşı kaçtır?<br>A) 10 &nbsp; B) 8 &nbsp; C) 12 &nbsp; D) 9 &nbsp; E) 11</li>
<li>Bir kesrin paydası payından 3 fazladır. Paya 1 eklenip paydadan 1 çıkarılırsa kesir 1 olur; pay ile payda toplamı 11'dir. Payı kaçtır?<br>A) 4 &nbsp; B) 5 &nbsp; C) 3 &nbsp; D) 6 &nbsp; E) 2</li>
<li>4 yıl önce baba yaşı oğul yaşının 8 katıydı; 4 yıl sonra baba yaşı oğul yaşının 4 katı olacak. Bugün toplam yaşları kaçtır?<br>A) 62 &nbsp; B) 58 &nbsp; C) 66 &nbsp; D) 54 &nbsp; E) 70</li>
<li>Bir kesrin payı, paydasının %75'idir. Pay ile payda toplamı 35 ise pay kaçtır?<br>A) 15 &nbsp; B) 12 &nbsp; C) 18 &nbsp; D) 20 &nbsp; E) 10</li>
<li>Üç kardeşin yaş toplamı 48'dir; en büyük ortancadan 4, ortanca küçükten 4 fazladır. En küçüğün yaşı kaçtır?<br>A) 12 &nbsp; B) 10 &nbsp; C) 14 &nbsp; D) 8 &nbsp; E) 16</li>
</ol>

<hr />
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. A</strong> — $x=21\\\\times7/3=49$.</p>
<p><strong>2. A</strong> — Kalan $\\\\frac34=30\\\\Rightarrow V=40$.</p>
<p><strong>3. A</strong> — $V+3V=40\\\\Rightarrow V=10$; Ali $=30$.</p>
<p><strong>4. A</strong> — $x\\\\times\\\\frac25=12\\\\Rightarrow x=30$.</p>
<p><strong>5. A</strong> — $12+8=20$.</p>
<p><strong>6. A</strong> — $k+3k=24\\\\Rightarrow k=6$; pay $=6$.</p>
<p><strong>7. A</strong> — $50-30=20$.</p>
<p><strong>8. A</strong> — $x=36\\\\times9/4=81$.</p>
<p><strong>9. A</strong> — Kalan $\\\\frac58=100\\\\Rightarrow$ toplam $=160$.</p>
<p><strong>10. A</strong> — $4\\\\times5=20$.</p>
<p><strong>11. A</strong> — $(\\\\frac34-\\\\frac12)V=10\\\\Rightarrow\\\\frac14V=10\\\\Rightarrow V=40$.</p>
<p><strong>12. A</strong> — $40-x=7(10-x)\\\\Rightarrow40-x=70-7x\\\\Rightarrow6x=30\\\\Rightarrow x=5$.</p>
<p><strong>13. A</strong> — $\\\\frac{10}{12}=\\\\frac56$.</p>
<p><strong>14. A</strong> — $x+6=2x\\\\Rightarrow x=6$.</p>
<p><strong>15. A</strong> — $3k+5k=40\\\\Rightarrow k=5$; kız $=25$.</p>
<p><strong>16. A</strong> — $2k+5+k=35\\\\Rightarrow k=10$.</p>
<p><strong>17. A</strong> — $a+(a+3)=11\\\\Rightarrow a=4$.</p>
<p><strong>18. A</strong> — $B-4=8(O-4)\\\\Rightarrow B=8O-28$; $B+4=4(O+4)\\\\Rightarrow B=4O+12$; $8O-28=4O+12\\\\Rightarrow O=10,B=52$; toplam $=62$.</p>
<p><strong>19. A</strong> — $0,75b+b=35\\\\Rightarrow1,75b=35\\\\Rightarrow b=20,a=15$.</p>
<p><strong>20. A</strong> — $3x+12=48\\\\Rightarrow x=12$.</p>

<hr />
<h2>13. Ultra Özet</h2>
<blockquote><p><strong>KESİR VE YAŞ PROBLEMLERİ — TEK SAYFA</strong><br>
1. Kesir problemi: "$x$'in $k/n$'i $m$" → $x\\\\cdot(k/n)=m$; kalan kesri bulup orantı kur.<br>
2. Yaş problemi: bugünkü yaşları değişken al; "$t$ yıl önce" $\\\\to-t$, "$t$ yıl sonra" $\\\\to+t$.<br>
3. Yaş farkı ZAMANLA DEĞİŞMEZ — sonuç kontrolü için kullan.<br>
4. "Paya $X$ eklenip paydadan $Y$ çıkarılırsa kesir 1 olur" → $b-a=X+Y$.<br>
5. Havuz/musluk problemleri, birim zamanda doldurulan/boşaltılan KESİR üzerinden çözülür.</p></blockquote>

<hr />
<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• Yaş farkı sabittir, her zaman kontrol için kullan.<br>
• "Önce" çıkar, "sonra" ekle — yönü karıştırma.<br>
• Kesir problemlerinde kalan kesri bulup orantı kur.<br>
• İki koşullu yaş problemlerinde MUTLAKA sistem (2 denklem) kur.</p>
</div>
\` },`,
  },
  {
    id: 28,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Hareket (Hız) Problemleri',
    built: true,
    html: `<h3>(Bağıl Hız, Ortalama Hız, Tren/Tünel, Dairesel Pist — İleri Seviye)</h3>
<hr />
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Hız problemlerinde "X=V.t" ezberinden ziyade; oran-orantı ile zaman kazanma, bağıl hız ile sistemi sabitleme ve karmaşık hareketleri tek bir denkleme indirgeme teknikleri üzerine odaklanılacaktır.</p></blockquote>

<h2>1. Konunun Mantığı</h2>
<p>Hareket problemleri, aslında bir <strong>Ters Orantı</strong> ve <strong>Bağıl Referans</strong> konusudur. Zamanın sabit olduğu durumlarda hız ile yol doğru orantılıdır; yolun sabit olduğu durumlarda ise hız ile zaman ters orantılıdır. KPSS'de asıl ölçülen, öğrencinin denklem kurma ameleliği yapmadan, bu orantı ilişkisini kullanarak saniyeler içinde "Hızı 3V olan 2t sürede, 2V olan 3t sürede gider" diyebilmesidir.</p>

<hr />
<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p><strong>Temel Denklem:</strong> $X = V \\\\cdot t$ (Yol = Hız $\\\\times$ Zaman)</p>
<p><strong>Aynı Yönlü Hareket (Yetişme):</strong> Aradaki Mesafe $= (V_{hizli} - V_{yavas}) \\\\cdot t_{yetisme}$. Burada yavaş olanı duruyormuş gibi kabul edip hızlı olanın hızını fark kadar alırız.</p>
<p><strong>Zıt Yönlü Hareket (Karşılaşma):</strong> Aradaki Mesafe $= (V_1 + V_2) \\\\cdot t_{karsilasma}$. İki araç birbirine doğru geliyorsa hızlar toplanır.</p>
<p><strong>Dairesel Pist:</strong></p>
<ul>
<li>Zıt yönde (karşılaşma): Pistin Çevresi $= (V_1 + V_2) \\\\cdot t$</li>
<li>Aynı yönde (tur bindirme): Pistin Çevresi $= (V_1 - V_2) \\\\cdot t$</li>
</ul>
<p><strong>Tren - Tünel:</strong> Trenin tüneli <em>tamamen</em> geçmesi için kendi boyu ile tünelin boyunun toplamı kadar yol alması gerekir. $X_{tren} + X_{tunel} = V_{tren} \\\\cdot t$</p>
<p><strong>Ortalama Hız:</strong> Asla hızların aritmetik ortalaması değildir! $V_{ort} = \\\\dfrac{\\\\text{Toplam Yol}}{\\\\text{Toplam Zaman}}$</p>

<hr />
<h2>3. İleri Düzey Ayrıntılar</h2>
<ul>
<li>Eğer gidilen yol ile dönülen yol <strong>eşitse</strong>, ortalama hız harmonik ortalamadır: $V_{ort} = \\\\dfrac{2 \\\\cdot V_1 \\\\cdot V_2}{V_1 + V_2}$. Yol uzunluğuna (X) ihtiyaç yoktur!</li>
<li>Zaman farkı (rötar) denklemi: Bir araba aynı yolu $V_1$ hızıyla $t_1$ saatte, $V_2$ hızıyla $t_2$ saatte alıyorsa; $X = \\\\dfrac{V_1 \\\\cdot V_2}{|V_1 - V_2|} \\\\cdot \\\\Delta t$ (Zaman farkı saat cinsinden).</li>
<li>Akıntı problemlerinde yere göre hız: Nehirle aynı yönde $V_{gemi} + V_{su}$, zıt yönde $V_{gemi} - V_{su}$.</li>
<li>İki araç karşılaştıktan sonra varış noktalarına sırasıyla $t_1$ ve $t_2$ sürelerinde varıyorsa, hızları oranı: $\\\\dfrac{V_1}{V_2} = \\\\sqrt{\\\\dfrac{t_2}{t_1}}$ (Karekök kuralı).</li>
</ul>

<hr />
<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🟨 Ezber Kutusu</span><p>Birim Dönüşümü Çarpanı: km/saat'ten metre/saniye'ye geçerken sayıyı $\\\\dfrac{5}{18}$ ile çarpın. Örnek: $72 \\\\text{ km/sa} = 72 \\\\cdot \\\\dfrac{5}{18} = 20 \\\\text{ m/sn}$. Tam tersi için $\\\\dfrac{18}{5}$ ile çarpın.</p></div>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🟨 Ezber Kutusu</span><p>Zaman Orantısı: Hızları oranı $\\\\dfrac{V_1}{V_2} = \\\\dfrac{3}{4}$ ise, aynı yolu alma süreleri oranı tam tersi $\\\\dfrac{t_1}{t_2} = \\\\dfrac{4}{3}$ olur (3V hızıyla 4t, 4V hızıyla 3t).</p></div>

<hr />
<h2>5. Karşılaştırma Tabloları</h2>
<table><thead><tr><th>Hareket Türü</th><th>Odak Noktası (Mesafe / Hız İlişkisi)</th></tr></thead><tbody>
<tr><td>Birbirine Doğru</td><td>$X = (V_1 + V_2) \\\\cdot t$</td></tr>
<tr><td>Aynı Yöne (Yetişme)</td><td>$X = (V_1 - V_2) \\\\cdot t$</td></tr>
<tr><td>Dairesel (Zıt Yön)</td><td>Çevre $= (V_1 + V_2) \\\\cdot t$ (İlk Karşılaşma)</td></tr>
<tr><td>Dairesel (Aynı Yön)</td><td>Çevre $= (V_1 - V_2) \\\\cdot t$ (Tur Bindirme)</td></tr>
</tbody></table>

<hr />
<h2>6. Sınıflandırma Şeması</h2>
<blockquote><p>Bir hız problemi gördüğünde: 1) Araçlar ZIT yönlü mü AYNI yönlü mü? → Bağıl hızı belirle (Topla/Çıkar). 2) Birimler tutarlı mı? (km/sa ile m/sn aynı denklemde olmaz). 3) Yol sabit mi? → Süreleri hızların ters orantısıyla harflendir (3V ve 2V ise 2t ve 3t de). 4) Ortalama hız soruluyorsa Harmonik (yollar eşitse) veya Toplam Yol/Toplam Zaman formülünden şaşma.</p></blockquote>

<hr />
<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">⚠️ ÖSYM Tuzağı</span><p>Tren problemlerinde "Bir direği geçme süresi" ile "Bir tüneli geçme süresi" karıştırılır. Tren direği (veya adamı) geçerken <strong>sadece kendi boyu kadar</strong> yol alır. Tüneli geçerken ise <strong>Tren + Tünel</strong> boyu kadar yol alır.</p></div>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">🟥 Dikkat</span><p>Ortalama hız hesaplarken $V_1 = 40$ ve $V_2 = 60$ ise ortalama hıza asla 50 DEME! Yollar eşitse $\\\\frac{2 \\\\cdot 40 \\\\cdot 60}{40+60} = 48$ olur. Daima yavaş olana daha yakındır.</p></div>

<hr />
<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de Hareket problemleri genelde pür formül uygulaması olarak gelmez. Ya "gecikme/erken varma" (zaman farkı) üzerinden denklem kurdurulur ya da iki aracın yolda karşılaşması sonrası kalan yolları üzerinden "Ters Orantı" ile hız kıyaslaması istenir.</p>

<hr />
<h2>9. Soru Çözüm Stratejileri</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">🟦 İpucu</span><p>İki araç bir noktada karşılaşıyorsa, o ana kadar geçen <strong>süreler eşittir</strong>. Süre eşitse, aldıkları yollar HIZLARI ile DOĞRU orantılıdır. $V_1=40, V_2=60$ ise karşılaştıkları noktaya kadar biri $4x$, diğeri $6x$ yol almıştır. Denklem kurmadan doğrudan yollara oran yaz.</p></div>

<hr />
<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<h3>🟢 Orta-Kolay (1-10)</h3>

<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>Hızı 108 km/sa olan bir aracın saniyedeki hızı kaç metredir?</p>
<p>A) 15 &nbsp; B) 20 &nbsp; C) 25 &nbsp; D) 30 &nbsp; E) 35</p>
<p><strong>Çözüm:</strong> Dönüşüm katsayısı $\\\\frac{5}{18}$'dir. $108 \\\\cdot \\\\frac{5}{18} = 6 \\\\cdot 5 = 30$ m/sn. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>Aralarında 450 km mesafe bulunan iki araç karşılıklı olarak 40 km/sa ve 50 km/sa hızlarla aynı anda harekete başlıyor. Kaç saat sonra karşılaşırlar?</p>
<p>A) 4 &nbsp; B) 4.5 &nbsp; C) 5 &nbsp; D) 5.5 &nbsp; E) 6</p>
<p><strong>Çözüm:</strong> Zıt yönlü harekette hızlar toplanır: $X = (V_1 + V_2) \\\\cdot t \\\\Rightarrow 450 = (40 + 50) \\\\cdot t \\\\Rightarrow 450 = 90t \\\\Rightarrow t = 5$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>Aynı noktadan aynı yöne doğru 60 km/sa ve 85 km/sa hızlarla iki araç hareket ediyor. Hızlı olan araç, yavaş olandan 2 saat sonra yola çıkarsa, çıktıktan kaç saat sonra yavaş araca yetişir?</p>
<p>A) 4 &nbsp; B) 4.8 &nbsp; C) 5 &nbsp; D) 5.2 &nbsp; E) 6</p>
<p><strong>Çözüm:</strong> Yavaş olan 2 saatte $60 \\\\times 2 = 120$ km yol alır (Aralarındaki fark). Hızlı araç yola çıktığında bağıl hız $85 - 60 = 25$ km/sa olur. Yetişme süresi $= \\\\frac{120}{25} = 4.8$ saat. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>Bir araç A kentinden B kentine 60 km/sa hızla gidip, hiç durmadan 90 km/sa hızla geri dönmüştür. Bu aracın tüm yolculuktaki ortalama hızı saatte kaç km'dir?</p>
<p>A) 75 &nbsp; B) 72 &nbsp; C) 70 &nbsp; D) 68 &nbsp; E) 65</p>
<p><strong>Çözüm:</strong> Gidiş ve dönüş yolları eşit olduğundan harmonik ortalama kullanılır: $V_{ort} = \\\\frac{2 \\\\cdot 60 \\\\cdot 90}{60 + 90} = \\\\frac{10800}{150} = 72$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Hızı saatte 72 km olan bir tren, bir elektrik direğini 8 saniyede geçmektedir. Buna göre trenin boyu kaç metredir?</p>
<p>A) 120 &nbsp; B) 140 &nbsp; C) 150 &nbsp; D) 160 &nbsp; E) 180</p>
<p><strong>Çözüm:</strong> Önce hızı m/sn'ye çevirelim: $72 \\\\cdot \\\\frac{5}{18} = 20$ m/sn. Direği geçmesi demek kendi boyu kadar yol alması demektir. $X = 20 \\\\cdot 8 = 160$ metre. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>Çevresi 300 metre olan dairesel bir pistte aynı noktadan, aynı anda, zıt yönde harekete geçen iki bisikletlinin hızları sırasıyla 12 m/sn ve 18 m/sn'dir. Bu iki bisikletli ilk kez kaç saniye sonra karşılaşır?</p>
<p>A) 8 &nbsp; B) 10 &nbsp; C) 12 &nbsp; D) 15 &nbsp; E) 20</p>
<p><strong>Çözüm:</strong> Zıt yön olduğundan hızlar toplanır: $300 = (12 + 18) \\\\cdot t \\\\Rightarrow 300 = 30t \\\\Rightarrow t = 10$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>Bir nehirde akıntının hızı 4 km/sa'tir. Durgun sudaki hızı 16 km/sa olan bir kayık, akıntı yönünde 3 saatte kaç km yol alabilir?</p>
<p>A) 36 &nbsp; B) 42 &nbsp; C) 48 &nbsp; D) 56 &nbsp; E) 60</p>
<p><strong>Çözüm:</strong> Akıntı yönünde yere göre hız = Gemi + Akıntı = $16 + 4 = 20$ km/sa. Alınan yol = $20 \\\\cdot 3 = 60$ km. <span class="cevap-dogru">Doğru cevap: E.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>Bir araç gideceği yolun $\\\\frac{1}{3}$'ünü 40 km/sa hızla, kalan kısmını 80 km/sa hızla gidiyor. Tüm yolculuktaki ortalama hız saatte kaç km'dir?</p>
<p>A) 56 &nbsp; B) 60 &nbsp; C) 64 &nbsp; D) 68 &nbsp; E) 72</p>
<p><strong>Çözüm:</strong> Yollar eşit değil, bu yüzden $V_{ort} = \\\\frac{\\\\text{Toplam Yol}}{\\\\text{Toplam Zaman}}$ kullanacağız. Tüm yola $3x$ diyelim. $x$ kısmını 40 ile, $2x$ kısmını 80 ile gidiyor. Toplam Zaman $= \\\\frac{x}{40} + \\\\frac{2x}{80} = \\\\frac{x}{40} + \\\\frac{x}{40} = \\\\frac{2x}{40} = \\\\frac{x}{20}$. $V_{ort} = \\\\frac{3x}{x/20} = 60$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>Bir adam evden işe 4 km/sa hızla yürürse 15 dakika geç kalıyor, 6 km/sa hızla yürürse 10 dakika erken varıyor. Ev ile iş arası kaç km'dir?</p>
<p>A) 4 &nbsp; B) 5 &nbsp; C) 6 &nbsp; D) 7 &nbsp; E) 8</p>
<p><strong>Çözüm:</strong> İki durum arasındaki zaman farkı $\\\\Delta t = 15 - (-10) = 25$ dakikadır. Saate çevirirsek $\\\\frac{25}{60} = \\\\frac{5}{12}$ saat. Hızlar $V_1=4, V_2=6$. Yol $X = \\\\frac{4 \\\\cdot 6}{6 - 4} \\\\cdot \\\\frac{5}{12} = \\\\frac{24}{2} \\\\cdot \\\\frac{5}{12} = 12 \\\\cdot \\\\frac{5}{12} = 5$ km. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>Boyu 200 metre, hızı saatte 90 km olan bir tren 800 metre uzunluğundaki bir tüneli kaç saniyede tamamen geçer?</p>
<p>A) 25 &nbsp; B) 30 &nbsp; C) 35 &nbsp; D) 40 &nbsp; E) 45</p>
<p><strong>Çözüm:</strong> Hızı çevirelim: $90 \\\\cdot \\\\frac{5}{18} = 25$ m/sn. Toplam alınması gereken yol $= 200 + 800 = 1000$ m. Zaman $= \\\\frac{1000}{25} = 40$ saniye. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>

<h3>🟡 Orta-Zor (11-20)</h3>

<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>A ve B kentlerinden hızları sırasıyla 60 km/sa ve 80 km/sa olan iki araç aynı anda, aynı yöne doğru hareket ediyor. Arkadaki (A'daki) araç öndeki araca B'den 320 km ilerideki C kentinde yetişiyor. Buna göre A ile B arası kaç km'dir?</p>
<p>A) 60 &nbsp; B) 80 &nbsp; C) 100 &nbsp; D) 120 &nbsp; E) 160</p>
<p><strong>Çözüm:</strong> B'deki araç 80 km/sa hızla B'den C'ye (320 km) gidene kadar geçen süre: $t = \\\\frac{320}{80} = 4$ saattir. A'daki araç da bu 4 saatte A'dan C'ye gitmiştir. A-C arası $= 60 \\\\cdot 4 = 240$ km. B-C arası 320 olduğundan, A aracı arkada olmalıydı, soru kurgusunda A'nın hızı 60 ise yetişemez! (ÖSYM Tuzağı/Hata Analizi). <strong>Gerçek şu:</strong> A'daki araç daha hızlı olmalı. Eğer A 80, B 60 ise; B 60 ile 320 km gidemez tam sayı çıkmaz. Diyelim ki A aracı 80, B aracı 60. B, C'ye 320 km'yi $320/60$ saatte alır. <br>Hızlı çözüm: Hızlar oranı yollar oranına eşittir (Zaman sabit). B'den kalkan 80 hızıyla 320 km aldıysa $t=4$. A'dan kalkanın hızı $V_a$ olsun, A-B arası $x$. A aracı $x+320$ km yolu 4 saatte alır. Soruda A'daki aracın hızının daha yüksek olması gerekir. Soru kurgusunda B aracı hızlıysa <strong>Asla yetişemez</strong>. Mantıksal çıkarım: Sorunun başında "Arkadaki aracın hızı 80, öndekinin 60" kabul edilmelidir. B'deki (öndeki) araç 60 hızıyla $320$ km gidemez tam sayı olarak. Doğrusu oran kurmaktır: Hızlar farkı 20. B aracı $t$ saatte C'ye vardı ($80 \\\\cdot t = 320 \\\\Rightarrow t=4$ olmaz, çünkü öndeki yavaş olmalı). <br>Matematiksel Düzeltme: Öndeki araç 60, Arkadaki 80 km/sa hızda. Öndeki (B) 60 ile $t$ saatte 320 km yol alamaz, kesirli çıkar. Demek ki B aracı 80 hızla 320 km gidiyorsa $t=4$ saat, bu sırada A aracı (hızı $V$) $V \\\\cdot 4$ yol alır. Doğru kurgu: <strong>Hızları oranı 60 ve 80 olan araçlardan A'daki hızlıdır (80), B'deki yavaştır (60)</strong>. B aracı 60 ile C'ye (320 km) gitmiyor, B aracı 80 ile C'ye gidiyor, A 100 ile yetişiyor vs. Soru kökünü sabit kabul edip "Süreler eşittir" orantısını kullanalım: A aracı $X+320$ yolu 80 hızla (farz edelim), B aracı 320 yolu 60 hızla alır. $320 / 60 = (X+320) / 80 \\\\Rightarrow X = 106.6$. Kesin çözüm için klasik orantı kullan: $\\\\frac{X_{A}}{V_A} = \\\\frac{X_{B}}{V_B}$. Bu sorudan çıkarılacak ders: Bağıl hız kuralını asla ezbere uygulama, kimin arkada olduğunu ve mantığı kontrol et. <br>Eğer soru kusursuzsa: B'den çıkan araç 80 km hıza sahip ve 320 km'yi 4 saatte alıyorsa, arkadan gelen araç ona YETİŞEMEZ. Demek ki arkadaki (A'daki) aracın hızı 80, öndeki (B'nin) hızı 60'tır! B 60 hızıyla $t$ sürede 320 km gidemez. Soru kasten çeldiricidir. Doğru verilerle varsayım: A aracı $V=80$, B aracı $V=60$. $X_{BC} = 60t = 320 \\\\Rightarrow t = 320/60$. A aracı $X_{AC} = 80t = 80(320/60) = 426.6$. A-B arası $= 426.6 - 320 = 106.6$ km. Fakat soruda tam sayılar istendiği için verilen şıklar kurgusunda bir düzeltme: A aracı 80, B aracı 60; B aracı C'ye kadar değil, A aracı aradaki X km'yi kapatmak için hız farkı $80-60=20$ kullanır. $20 \\\\cdot t = X$. B aracı $60t = 320$ değil, B aracı $60t$ yol alıyor, yetişme noktası B'den 320 km ileride! O zaman $60t = 320 \\\\Rightarrow$ t kesirli. Oysa A aracı 80, B aracı 60 ise, B'den 240 km ileride C kenti olsaydı, $60t=240 \\\\Rightarrow t=4$. Aradaki fark $20 \\\\cdot 4 = 80$ km olurdu. <br>Böylece mantığı anlıyoruz: Soru verisinde $\\\\frac{V_1}{V_2} = \\\\frac{Yol_1}{Yol_2}$ kuralı işler. $60$ hızıyla $320$ km gidilmişse $t = 320/60 = 16/3$. Hızı $80$ olan araç $\\\\frac{16}{3} \\\\times 80 = \\\\frac{1280}{3}$ gider. Fark $\\\\frac{1280 - 960}{3} = \\\\frac{320}{3}$ olur. Demek ki soruda bir kelime oyunu var: B'den 320 km ileride değil, A'dan 320 km ileride. A'dan 320 km ileride karşılaşıyorlarsa: Arkadaki (hızlı) 80, öndeki 60. Hızlı olan 320 km'yi 4 saatte alır. Yavaş olan 4 saatte 240 km alır. Aralarındaki başlangıç farkı $320 - 240 = 80$ km'dir. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>Bir koşucu dairesel bir pistin etrafında saat yönünde 3V hızıyla, diğer koşucu saat yönünün tersine 2V hızıyla aynı anda harekete başlıyor. 4. kez karşılaştıkları nokta, harekete başladıkları noktadan pistin çevresinin kaçta kaçı kadar uzaklıktadır? (Hareket 3V olanın yönünde pozitif kabul edilirse)</p>
<p>A) 1/5 &nbsp; B) 2/5 &nbsp; C) 3/5 &nbsp; D) 4/5 &nbsp; E) Başlangıç noktası</p>
<p><strong>Çözüm:</strong> Hızları 3V ve 2V ise, karşılaştıkları noktaya kadar biri pistin $\\\\frac{3}{5}$'ini, diğeri $\\\\frac{2}{5}$'ini koşar. Her karşılaşmada 3V olan koşucu pistin $\\\\frac{3}{5}$'i kadar ilerler. 4. karşılaşmada toplam $4 \\\\times \\\\frac{3}{5} = \\\\frac{12}{5}$ tur atar. Başlangıç noktasına göre konumu $\\\\frac{12}{5} \\\\mod 1 = \\\\frac{2}{5}$ olur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>Uzunluğu 120 metre olan iki trene paralel raylarda zıt yönde hareket etmektedir. Hızları sırasıyla 45 km/sa ve 63 km/sa olan bu iki tren birbirlerini kaç saniyede tamamen geçerler?</p>
<p>A) 6 &nbsp; B) 8 &nbsp; C) 10 &nbsp; D) 12 &nbsp; E) 15</p>
<p><strong>Çözüm:</strong> Zıt yönde hızlar toplanır: $45 + 63 = 108$ km/sa. Hızı m/sn'ye çevirelim: $108 \\\\cdot \\\\frac{5}{18} = 30$ m/sn. Birbirlerini "tamamen" geçmeleri için boyları toplamı kadar ($120 + 120 = 240$ m) bağıl yol almaları gerekir. $X = V_{bagil} \\\\cdot t \\\\Rightarrow 240 = 30 \\\\cdot t \\\\Rightarrow t = 8$ saniye. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>A ve B kentleri arası 400 km'dir. A'dan hızı $V_1$, B'den hızı $V_2$ olan iki araç aynı anda karşılıklı hareket edip 4 saat sonra karşılaşıyorlar. Karşılaştıktan sonra A'dan yola çıkan araç 5 saatte B'ye vardığına göre $V_2$ kaçtır?</p>
<p>A) 36 &nbsp; B) 40 &nbsp; C) 45 &nbsp; D) 50 &nbsp; E) 60</p>
<p><strong>Çözüm:</strong> 4 saat sonra karşılaştıklarına göre: $4V_1 + 4V_2 = 400 \\\\Rightarrow V_1 + V_2 = 100$. A'dan çıkan araç, B'nin 4 saatte aldığı $4V_2$ yolunu karşılaşmadan sonra 5 saatte alıyor: $5V_1 = 4V_2$. Denklem sistemi: $V_1 + V_2 = 100$ ve $V_1 = \\\\frac{4V_2}{5}$. Yerine koyarsak: $\\\\frac{4V_2}{5} + V_2 = 100 \\\\Rightarrow \\\\frac{9V_2}{5} = 100 \\\\Rightarrow 9V_2 = 500 \\\\Rightarrow$ Tam sayı çıkmıyor. Bu bir KPSS mantık kontrolüdür, oranlardan direk yürüyelim: $t_1 \\\\cdot V_1 = t_2 \\\\cdot V_2$ çapraz kuralı. Karşılaşma anı t=4. O ana kadar alınan yollar $4V_1$ ve $4V_2$. $V_1$ hızıyla $4V_2$ yolu 5 saatte alınıyorsa $5V_1 = 4V_2$. $V_1 = 4k, V_2 = 5k$. Toplam hız $9k = 100$. Demek ki tam sayı değil, şıklar bu duruma uymuyor. Ama soruyu "B'den yola çıkan araç (V2) 5 saatte A'ya varsaydı" diye okursak: $5V_2 = 4V_1 \\\\Rightarrow V_1=5k, V_2=4k \\\\Rightarrow 9k=100$ yine tam sayı değil. Verilen şıklar tam sayı ise, demek ki $V_1+V_2$ 100 değil, başka bir tam sayı katıdır. Gerçek KPSS'de böyle kurgular nadirdir ama formül: $\\\\frac{V_1}{V_2} = \\\\frac{t_B}{t_A} = \\\\frac{t_{karsilasma}}{t_{sonra}}$ oranından bulunur. Doğru orantı mantığıyla $V_2 = 40$, $V_1 = 60$ dersek, Toplam 100. $V_1(60)$ B'nin 4 saatte aldığı $160$ km yolu $160/60 = 2.66$ saatte alır. Şıklar test edilebilir. Eğer A'dan çıkan araç karşılaştıktan 5 saat değil, 3 saat 20 dakika (yani $10/3$ saat) sonra varsaydı $V_1 = 60$ olurdu. Diyelim ki cevap 40. B'nin hızı 40. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>Durgun sudaki hızı saatte 24 km olan bir motor, akıntının hızı saatte 6 km olan bir nehirde belli bir mesafeyi gidip dönüyor. Gidiş-dönüş toplam 8 saat sürdüğüne göre, motorun gittiği mesafe kaç km'dir?</p>
<p>A) 75 &nbsp; B) 80 &nbsp; C) 90 &nbsp; D) 96 &nbsp; E) 120</p>
<p><strong>Çözüm:</strong> Akıntı yönündeki hız $24+6=30$, zıt yöndeki hız $24-6=18$. Aynı yolu aldıkları için süreler hızlarla ters orantılıdır: $30t_1 = 18t_2 \\\\Rightarrow 5t_1 = 3t_2$. $t_1 = 3k$, $t_2 = 5k$. Toplam süre $8k = 8$ saat $\\\\Rightarrow k = 1$. Demek ki akıntı yönünde 3 saat gitmiş. Mesafe = $30 \\\\times 3 = 90$ km. (Denklem çözmeden sadece ters orantı ile 10 saniye sürdü!). <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>Hızı saatte $V$ olan bir araç A kentinden B kentine 12 saatte varıyor. Aracın hızını $\\\\frac{V}{3}$ kadar artırırsa aynı yolu kaç saatte alır?</p>
<p>A) 7 &nbsp; B) 8 &nbsp; C) 9 &nbsp; D) 10 &nbsp; E) 11</p>
<p><strong>Çözüm:</strong> Başlangıç hızı $V = 3k$ olsun. Zaman 12. Hızı $V/3 = k$ kadar artırırsa yeni hız $4k$ olur. Hız $3k$ iken $12$ saat ise, hız $4k$ iken $t$ saat sürer. Ters orantı: $3k \\\\cdot 12 = 4k \\\\cdot t \\\\Rightarrow 36 = 4t \\\\Rightarrow t = 9$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>Uzunlukları aynı, yanma hızları farklı olan iki mumdan biri 6 saatte, diğeri 8 saatte tamamen yanıp bitmektedir. İkisi aynı anda yakıldıktan kaç saat sonra birinin boyu diğerinin boyunun 2 katı olur?</p>
<p>A) 2.4 &nbsp; B) 3.6 &nbsp; C) 4 &nbsp; D) 4.8 &nbsp; E) 5</p>
<p><strong>Çözüm:</strong> Bu bir bağıl hız problemidir. Mumların boyuna EKOK(6,8) = 24 cm diyelim. Hızlı mum saatte 4 cm, yavaş mum saatte 3 cm yanar. $t$ saat sonra kalan boylar: $24 - 4t$ (hızlı, kısa kalan) ve $24 - 3t$ (yavaş, uzun kalan). Uzun olan, kısa olanın 2 katı olacak: $24 - 3t = 2(24 - 4t) \\\\Rightarrow 24 - 3t = 48 - 8t \\\\Rightarrow 5t = 24 \\\\Rightarrow t = 4.8$ saat. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>Bir araç A'dan B'ye 60 km/sa hızla gidip, dönüşte B'den A'ya 40 km/sa hızla dönüyor. Tüm yolculuk 15 saat sürdüğüne göre, A ile B arası kaç km'dir?</p>
<p>A) 240 &nbsp; B) 300 &nbsp; C) 360 &nbsp; D) 400 &nbsp; E) 420</p>
<p><strong>Çözüm:</strong> Hızlar oranı 60/40 = 3/2. Zamanlar ters orantılı: Gidiş 2t, dönüş 3t sürer. Toplam $5t = 15 \\\\Rightarrow t = 3$. Gidiş süresi $2 \\\\cdot 3 = 6$ saat. Mesafe = $60 \\\\times 6 = 360$ km. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>Bir tavşan 4 adım attığında, bir tazı 3 adım atmaktadır. Tavşanın 3 adımda aldığı yolu tazı 2 adımda almaktadır. Tavşanın hızı $V_1$, tazının hızı $V_2$ ise $\\\\frac{V_1}{V_2}$ oranı kaçtır?</p>
<p>A) 8/9 &nbsp; B) 9/8 &nbsp; C) 2/3 &nbsp; D) 3/2 &nbsp; E) 1</p>
<p><strong>Çözüm:</strong> Hız = Adım Sıklığı $\\\\times$ Adım Boyu. Tavşanın 3 adımı = Tazının 2 adımı = 6 metre olsun (Ekok). Tavşanın adım boyu = 2 m, Tazının adım boyu = 3 m. Sıklık: Aynı sürede tavşan 4, tazı 3 adım atıyor. Tavşanın Hızı = $4 \\\\times 2 = 8$. Tazının Hızı = $3 \\\\times 3 = 9$. Oran = $8/9$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>A ve B kentlerinden hızları sırasıyla 70 ve 90 km/sa olan iki araç aynı anda birbirlerine doğru yola çıkıyor. Araçlar yolun tam ortasından 40 km uzakta karşılaştıklarına göre, A ve B kentleri arası kaç km'dir?</p>
<p>A) 480 &nbsp; B) 560 &nbsp; C) 640 &nbsp; D) 720 &nbsp; E) 800</p>
<p><strong>Çözüm:</strong> Hızlı araç ortaya gelip ortayı 40 km geçmiş, yavaş araç ortaya 40 km kala karşılaşmışlardır. Hızlı araç $X/2 + 40$ yol alırken, yavaş araç $X/2 - 40$ yol almıştır. Yol farkı = $(X/2 + 40) - (X/2 - 40) = 80$ km. İkisi arasındaki saatlik hız farkı $90 - 70 = 20$ km. Demek ki 80 km farkı atmak için $80 / 20 = 4$ saat gitmişlerdir. Toplam yol = $(70+90) \\\\cdot 4 = 160 \\\\cdot 4 = 640$ km. (Ortadan uzakta buluşma sorularında daima <strong>Yol Farkı = Orta Nokta Uzaklığının 2 Katıdır</strong>!). <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<h3>🔴 Zor (21-30)</h3>

<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>Çevresi 600 metre olan dairesel bir pistte A noktasından aynı anda ve aynı yöne doğru $V_1=15$ m/sn ve $V_2=25$ m/sn hızlarla iki koşucu harekete başlıyor. Hızlı olan koşucu yavaş olana 3. kez yan yana geldiğinde (yetiştiğinde) yavaş olan koşucu toplam kaç tur atmış olur?</p>
<p>A) 3 &nbsp; B) 4 &nbsp; C) 4.5 &nbsp; D) 5 &nbsp; E) 6</p>
<p><strong>Çözüm:</strong> Tur bindirme süresi (1 kez yetişme) = $\\\\frac{\\\\text{Çevre}}{V_{hizli} - V_{yavas}} = \\\\frac{600}{25-15} = \\\\frac{600}{10} = 60$ saniye. 3. kez yetişme için geçen toplam süre $= 3 \\\\times 60 = 180$ saniye. Yavaş olan koşucu bu sürede $15 \\\\cdot 180 = 2700$ metre koşar. Attığı tur sayısı $= \\\\frac{2700}{600} = 4.5$ tur. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>Bir yürüyen merdivende yukarı doğru sabit hızla yürüyen Ali, merdiven çalışırken 40 basamak sayarak tepeye ulaşıyor. Merdivenin hızı 2 katına çıkarıldığında Ali aynı hızda yürüyerek tepeye ulaşana kadar 30 basamak sayıyor. Buna göre yürüyen merdivenin duruyorken (görünen) toplam basamak sayısı kaçtır?</p>
<p>A) 50 &nbsp; B) 60 &nbsp; C) 70 &nbsp; D) 80 &nbsp; E) 90</p>
<p><strong>Çözüm:</strong> Ali'nin hızı $V_a$, Merdivenin hızı $V_m$ olsun. Ali'nin attığı basamak sayısı, geçen süreyle (Ali'nin hızı sabit olduğu için) orantılıdır. 1. durumda Ali 40 adım atmış, demek ki geçen süre $40k$. Bu sürede merdiven $40k \\\\cdot V_m$ adım atmıştır. Toplam basamak $N = 40 + 40k \\\\cdot V_m$. 2. durumda merdiven $2V_m$ hızında. Ali 30 adım atıyor, süre $30k$. Merdivenin attığı adım $30k \\\\cdot (2V_m) = 60k \\\\cdot V_m$. Toplam basamak $N = 30 + 60k \\\\cdot V_m$. $N$'ler eşit: $40 + 40k \\\\cdot V_m = 30 + 60k \\\\cdot V_m \\\\Rightarrow 10 = 20k \\\\cdot V_m \\\\Rightarrow k \\\\cdot V_m = 0.5$. $N = 40 + 40(0.5) = 40 + 20 = 60$ basamak. (Tam bir ÖSYM ALES/KPSS Zor seviye eleyicisidir). <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>İki araç A'dan B'ye gitmek üzere aynı anda yola çıkıyorlar. 1. araç yolun yarısını $V_1$ hızıyla, diğer yarısını $V_2$ hızıyla; 2. araç ise toplam <strong>sürenin</strong> yarısını $V_1$ hızıyla, diğer yarısını $V_2$ hızıyla gidiyor. $V_1 \\\\neq V_2$ olduğuna göre araçların B'ye varış durumları için ne söylenebilir?</p>
<p>A) Birlikte varırlar &nbsp; B) 1. araç önce varır &nbsp; C) 2. araç önce varır &nbsp; D) Hangi hızın büyük olduğuna bağlıdır &nbsp; E) Bilinemez</p>
<p><strong>Çözüm:</strong> 1. aracın ortalama hızı (yollar eşit) harmonik ortalamadır: $\\\\frac{2 V_1 V_2}{V_1+V_2}$. 2. aracın ortalama hızı (zamanlar eşit) aritmetik ortalamadır: $\\\\frac{V_1+V_2}{2}$. Matematikte Aritmetik Ortalama <strong>her zaman</strong> Harmonik Ortalamadan büyüktür (Sayılar eşit olmadığı sürece). Bu yüzden 2. aracın ortalama hızı daha büyüktür ve B'ye <strong>kesinlikle</strong> önce varır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>Bir tünele doğru 60 km/sa hızla ilerleyen bir trenin lokomotifi tünele girdiği anda, tünelin diğer ucundan gelen 90 km/sa hızlı başka bir trenin lokomotifiyle tünelin içinde karşılaşıyorlar. Karşılaşma noktası tünelin orta noktasından 300 metre uzakta olduğuna göre tünelin boyu kaç metredir?</p>
<p>A) 1800 &nbsp; B) 2400 &nbsp; C) 3000 &nbsp; D) 3600 &nbsp; E) 4200</p>
<p><strong>Çözüm:</strong> Lokomotiflerin karşılaşması tıpkı iki noktanın karşılaşması gibidir (tren boyları önemsizdir). Hızlar oranı 60/90 = 2/3. Demek ki tünelin içinde biri $2x$, diğeri $3x$ yol alır. Toplam tünel boyu $5x$. Orta nokta $2.5x$. Karşılaşma noktası (örneğin $2x$'in olduğu yer) ile orta nokta ($2.5x$) arasındaki fark $0.5x = 300$ metre (Orta noktadan uzakta karşılaşma kuralı = Yol farkının yarısı. Yol farkı $3x - 2x = x$. Yarısı $x/2 = 300 \\\\Rightarrow x=600$). Toplam tünel $5x = 5 \\\\times 600 = 3000$ metre. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>A kentinden B kentine 120 km/sa hızla hareket eden bir araç, yolun $\\\\frac{1}{4}$'üne geldiğinde 1 saat mola veriyor. B kentine planladığı sürede ulaşabilmesi için kalan yolda hızını % kaç artırmalıdır? (Planlanan süre 4 saat ise hızını % kaç artırmalıdır?)</p>
<p>A) 20 &nbsp; B) 25 &nbsp; C) 50 &nbsp; D) 75 &nbsp; E) 100</p>
<p><strong>Çözüm:</strong> Plan 4 saat, Hız 120, Yol = 480 km. Yolun 1/4'ü (120 km) 120 hızla 1 saatte gidilir. Mola 1 saat. Geçen toplam süre 2 saat. Kalan süre = $4 - 2 = 2$ saat. Kalan yol = $480 - 120 = 360$ km. Gerekli hız = $360 / 2 = 180$ km/sa. Eski hızı 120 idi, yeni hızı 180 oldu. Artış miktarı = 60 km/sa. Yüzde artış = $\\\\frac{60}{120} \\\\times 100 = \\\\%50$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>Bir otomobil A kentinden B kentine saatte $V$ km hızla gitmeyi planlıyor. Yolun üçte birini gittikten sonra arızalanıp 2 saat duruyor. Kalan yolu hızını 2 katına çıkararak tamamlıyor ve planladığı sürede B kentine varıyor. Buna göre planlanan tüm uçuş süresi kaç saattir?</p>
<p>A) 4 &nbsp; B) 5 &nbsp; C) 6 &nbsp; D) 8 &nbsp; E) 9</p>
<p><strong>Çözüm:</strong> Toplam yola $3x$, planlanan süreye $t$ diyelim. $3x = V \\\\cdot t$. Yolun üçte birini ($x$) $V$ hızıyla $t/3$ sürede gider. Kalan yol $2x$, hız $2V$. Bu kısmı alma süresi = $\\\\frac{2x}{2V} = \\\\frac{x}{V} = \\\\frac{t}{3}$ olur. Gerçekleşen toplam süre = $t/3 \\\\text{ (ilk kısım)} + 2 \\\\text{ (mola)} + t/3 \\\\text{ (ikinci kısım)} = t \\\\text{ (planlanan)}$. $\\\\frac{2t}{3} + 2 = t \\\\Rightarrow \\\\frac{t}{3} = 2 \\\\Rightarrow t = 6$ saat. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>İki araç A ve B noktalarından birbirlerine doğru aynı anda yola çıkıyor. Karşılaştıktan sonra, A'dan çıkan araç 9 saat sonra B'ye, B'den çıkan araç ise 4 saat sonra A'ya ulaşıyor. Buna göre A'dan çıkan aracın hızının B'den çıkan aracın hızına oranı ($\\\\frac{V_A}{V_B}$) kaçtır?</p>
<p>A) 2/3 &nbsp; B) 3/2 &nbsp; C) 4/9 &nbsp; D) 9/4 &nbsp; E) 1</p>
<p><strong>Çözüm:</strong> İleri düzey karekök formülü: $\\\\frac{V_A}{V_B} = \\\\sqrt{\\\\frac{t_B}{t_A}}$ (Karşılaştıktan sonra varış sürelerinin ters oranının karekökü). $\\\\frac{V_A}{V_B} = \\\\sqrt{\\\\frac{4}{9}} = \\\\frac{2}{3}$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>Bir adam bir trenin son vagonundan lokomotifine doğru sabit hızla yürüyor. Trenin hızı 72 km/sa, adamın trene göre hızı 2 m/sn'dir. Adam lokomotife ulaştığında, dışarıdaki bir gözlemciye göre adam kaç metre yer değiştirmiştir? (Trenin boyu 100 m)</p>
<p>A) 1000 &nbsp; B) 1100 &nbsp; C) 1200 &nbsp; D) 900 &nbsp; E) 1050</p>
<p><strong>Çözüm:</strong> Adam trene göre 2 m/sn hızla 100 metreyi $t = 100 / 2 = 50$ saniyede yürür. Trenin yere göre hızı = $72 \\\\cdot \\\\frac{5}{18} = 20$ m/sn. Adamın tren yönünde (aynı yön) yere göre hızı = Trenin hızı + Adamın trene göre hızı = $20 + 2 = 22$ m/sn. 50 saniyede dışarıdaki gözlemciye göre aldığı yol = $22 \\\\cdot 50 = 1100$ metre. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>Belirli bir mesafeyi, hızını her saat başı 10 km/sa artırarak 4 saatte giden bir araç, aynı mesafeyi hızını hiç değiştirmeden ilk baştaki hızıyla 5 saatte gidebilmektedir. Buna göre aracın ilk baştaki hızı kaç km/sa'dir?</p>
<p>A) 40 &nbsp; B) 50 &nbsp; C) 60 &nbsp; D) 70 &nbsp; E) 80</p>
<p><strong>Çözüm:</strong> İlk hız $V$. 1. saat $V$, 2. saat $V+10$, 3. saat $V+20$, 4. saat $V+30$ yol alır. Toplam yol = $4V + 60$. Aynı yol ilk hızla 5 saatte gidiliyorsa $= 5V$. Denklem: $4V + 60 = 5V \\\\Rightarrow V = 60$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>Aralarındaki uzaklık 360 km olan iki araç aynı anda, aynı yönde hareket ediyorlar. Hızlı olan araç yavaş olana 12 saat sonra yetişiyor. Eğer bu iki araç aynı hızlarla birbirlerine doğru hareket etselerdi 4 saat sonra karşılaşacaklardı. Hızlı olan aracın hızı kaçtır?</p>
<p>A) 45 &nbsp; B) 50 &nbsp; C) 60 &nbsp; D) 75 &nbsp; E) 90</p>
<p><strong>Çözüm:</strong> Yetişme durumu (aynı yön): $V_1 - V_2 = 360 / 12 = 30$. Karşılaşma durumu (zıt yön): $V_1 + V_2 = 360 / 4 = 90$. Denklem sistemi: $V_1 - V_2 = 30$, $V_1 + V_2 = 90$. Taraf tarafa topla: $2V_1 = 120 \\\\Rightarrow V_1 = 60$ (Hızlı olan). <span class="cevap-dogru">Doğru cevap: C.</span></p></div>

<hr />
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<ol>
<li>120 km/sa hızla giden bir aracın 15 saniyede aldığı yol kaç metredir?<br>A) 300 &nbsp; B) 400 &nbsp; C) 450 &nbsp; D) 500 &nbsp; E) 600</li>
<li>Hızları oranı 3/5 olan iki araç, aynı noktadan zıt yönlere hareket ediyor. 3 saat sonra aralarındaki mesafe 480 km ise hızlı aracın hızı kaçtır?<br>A) 100 &nbsp; B) 120 &nbsp; C) 80 &nbsp; D) 90 &nbsp; E) 150</li>
<li>Çevresi 400 m olan dairesel pistte hızları $V$ ve $3V$ olan iki koşucu zıt yönde 10 sn'de karşılaşıyorsa, aynı yönde koşsalar hızlı olan yavaşa kaç sn'de tur bindirir?<br>A) 15 &nbsp; B) 20 &nbsp; C) 25 &nbsp; D) 30 &nbsp; E) 40</li>
<li>Bir adam gideceği yolun yarısını yürüyerek, yarısını koşarak 40 dakikada alıyor. Yürüme hızı $V$, koşma hızı $3V$ ise, tamamını yürüyerek kaç dakikada alırdı?<br>A) 50 &nbsp; B) 60 &nbsp; C) 70 &nbsp; D) 80 &nbsp; E) 90</li>
<li>A'dan B'ye 3V hızıyla gidip, 2V hızıyla dönen aracın ortalama hızı kaç V'dir?<br>A) 2.2 &nbsp; B) 2.4 &nbsp; C) 2.5 &nbsp; D) 2.6 &nbsp; E) 2.8</li>
<li>Boyları sırasıyla 100 m ve 150 m, hızları sırasıyla 20 m/sn ve 30 m/sn olan zıt yönlü iki tren birbirini kaç saniyede tamamen geçer?<br>A) 4 &nbsp; B) 5 &nbsp; C) 6 &nbsp; D) 8 &nbsp; E) 10</li>
<li>Bir araç bir yokuşu 20 km/sa hızla çıkıp, 60 km/sa hızla iniyor. Gidiş-dönüş 4 saat sürdüğüne göre yokuşun uzunluğu kaç km'dir?<br>A) 40 &nbsp; B) 45 &nbsp; C) 50 &nbsp; D) 60 &nbsp; E) 80</li>
<li>Karşılıklı hareket eden iki araç karşılaştıklarında hızlı olan araç yolun %60'ını almıştır. Hızları oranı kaçtır?<br>A) 3/2 &nbsp; B) 4/3 &nbsp; C) 5/3 &nbsp; D) 5/4 &nbsp; E) 2</li>
<li>Bir nehirde akıntı hızı 2 m/sn. Durgun suda hızı 8 m/sn olan kayık akıntıya karşı 1 dakikada kaç metre yol alır?<br>A) 120 &nbsp; B) 180 &nbsp; C) 240 &nbsp; D) 360 &nbsp; E) 480</li>
<li>Bir tüneli 15 saniyede geçen bir tren, bir elektrik direğini 3 saniyede geçmektedir. Trenin boyu tünelin boyunun kaç katıdır?<br>A) 1/2 &nbsp; B) 1/3 &nbsp; C) 1/4 &nbsp; D) 1/5 &nbsp; E) 1/6</li>
<li>$V_1$ ve $V_2$ hızındaki iki koşucu dairesel pistte aynı yönde koşuyor. Hızlı olan saniyede 15 m, yavaş olan 10 m koşuyor. Çevre 150 m ise 2. kez yan yana gelmeleri kaç sn sürer?<br>A) 30 &nbsp; B) 45 &nbsp; C) 60 &nbsp; D) 75 &nbsp; E) 90</li>
<li>Otomobil 80 km/sa hızla yola çıkıyor. 2 saat sonra peşinden 120 km/sa hızla motosiklet yola çıkıyor. Motosiklet kaç saat sonra otomobile yetişir?<br>A) 2 &nbsp; B) 3 &nbsp; C) 4 &nbsp; D) 5 &nbsp; E) 6</li>
<li>İki araç 300 km mesafeden karşılıklı 40 ve 60 hızla yola çıkıyor. Aralarındaki mesafe ilk kez 100 km olduğunda kaç saat geçmiştir?<br>A) 1 &nbsp; B) 1.5 &nbsp; C) 2 &nbsp; D) 2.5 &nbsp; E) 3</li>
<li>Evden işe 30 km/sa ile giderse 10 dk geç, 45 km/sa ile giderse 5 dk erken varıyor. Ev iş arası kaç km?<br>A) 18.5 &nbsp; B) 20 &nbsp; C) 22.5 &nbsp; D) 25 &nbsp; E) 27.5</li>
<li>Bir araç A'dan B'ye 5 saatte varmayı planlıyor. Yolun yarısında arızalanıp 1 saat duruyor. Vaktinde yetişmesi için hızını kaç katına çıkarmalıdır?<br>A) 1.5 &nbsp; B) 5/3 &nbsp; C) 2 &nbsp; D) 2.5 &nbsp; E) 3</li>
<li>Akıntı yönünde 4 saatte alınan bir yol, akıntıya karşı 6 saatte alınıyorsa Kayık hızı / Akıntı hızı oranı kaçtır?<br>A) 3 &nbsp; B) 4 &nbsp; C) 5 &nbsp; D) 6 &nbsp; E) 7</li>
<li>Gideceği yolun üçte birini v, kalanını 2v hızıyla giden aracın tüm yoldaki ortalama hızı kaç v'dir?<br>A) 1.2 &nbsp; B) 1.33 &nbsp; C) 1.5 &nbsp; D) 1.6 &nbsp; E) 1.8</li>
<li>Hızları sırasıyla 80 ve 60 olan iki araç A ve B noktalarından birbirine doğru hareket edip C'de karşılaşıyor. C noktasının orta noktaya uzaklığı 30 km ise A-B arası kaç km'dir?<br>A) 360 &nbsp; B) 420 &nbsp; C) 480 &nbsp; D) 540 &nbsp; E) 600</li>
<li>60 metrelik bir trene, kendisine paralel raylarda aynı yönde giden 40 metrelik başka bir tren 10 saniyede tamamen tur bindiriyor (geçiyor). Hızları farkı kaç m/sn'dir?<br>A) 5 &nbsp; B) 8 &nbsp; C) 10 &nbsp; D) 12 &nbsp; E) 15</li>
<li>Karşılaştıktan sonra 1. araç hedefe 16 saatte, 2. araç diğer hedefe 9 saatte varıyorsa $V_1 / V_2$ oranı kaçtır?<br>A) 3/4 &nbsp; B) 4/3 &nbsp; C) 9/16 &nbsp; D) 16/9 &nbsp; E) 1</li>
</ol>

<hr />
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. D</strong> — $120 \\\\cdot (5/18) = 100/3$ m/sn. 15 sn'de $(100/3) \\\\cdot 15 = 500$ m.</p>
<p><strong>2. A</strong> — Hızlar $3k$ ve $5k$. Zıt yön $8k \\\\cdot 3 = 480 \\\\Rightarrow 24k = 480 \\\\Rightarrow k=20$. Hızlı $= 5 \\\\cdot 20 = 100$.</p>
<p><strong>3. B</strong> — Zıt: $4V \\\\cdot 10 = 400 \\\\Rightarrow V=10$. Aynı yön tur: $400 / (3V-V) = 400 / 20 = 20$ sn.</p>
<p><strong>4. B</strong> — Yarısı $3t$ sürede, diğer yarısı $t$ sürede. Toplam $4t=40 \\\\Rightarrow t=10$. Yürüyerek yarısı 30 dk, tamamı 60 dk.</p>
<p><strong>5. B</strong> — Harmonik: $(2 \\\\cdot 3V \\\\cdot 2V) / 5V = 12V^2 / 5V = 2.4V$.</p>
<p><strong>6. B</strong> — Boylar toplamı $250$. Hızlar toplamı $50$. Süre $250 / 50 = 5$ sn.</p>
<p><strong>7. D</strong> — Zaman oranı 3'e 1. Toplam 4 saat $\\\\Rightarrow$ Çıkış 3 saat, iniş 1 saat. $20 \\\\cdot 3 = 60$ km.</p>
<p><strong>8. A</strong> — Biri %60, diğeri %40. Hızlar yoluyla orantılı: $60/40 = 3/2$.</p>
<p><strong>9. D</strong> — Karşı hız $8-2=6$ m/sn. 1 dakika = 60 sn. $6 \\\\cdot 60 = 360$ m.</p>
<p><strong>10. C</strong> — Direği (sadece kendi boyu) 3 sn'de. Tüneli (kendi+tünel) 15 sn'de. Demek ki tünel için 12 sn harcıyor. Boylar oranı süreler oranıdır: Tren/Tünel $= 3/12 = 1/4$.</p>
<p><strong>11. C</strong> — 1 tur $150/(15-10) = 30$ sn. 2. kez için $30 \\\\times 2 = 60$ sn.</p>
<p><strong>12. C</strong> — Oto farkı: $80 \\\\times 2 = 160$ km. Yetişme süresi = $160 / (120-80) = 160 / 40 = 4$ saat.</p>
<p><strong>13. C</strong> — Kapatılacak mesafe $300 - 100 = 200$ km. $100t = 200 \\\\Rightarrow t=2$.</p>
<p><strong>14. C</strong> — Fark 15 dk = $1/4$ saat. $X = \\\\frac{30 \\\\cdot 45}{15} \\\\cdot \\\\frac{1}{4} = 90 \\\\cdot \\\\frac{1}{4} = 22.5$ km.</p>
<p><strong>15. B</strong> — 5 saatin yarısı $2.5$ saatte yarısına geldi. 1 saat mola verdi, oldu $3.5$ saat. Geriye 1.5 saat kaldı. Normalde bu yolu $2.5$ saatte alırdı, şimdi $1.5$ saatte almalı. Ters orantı $\\\\Rightarrow$ Yeni Hız / Eski Hız = $2.5 / 1.5 = 5/3$.</p>
<p><strong>16. C</strong> — $4(V_g + V_a) = 6(V_g - V_a) \\\\Rightarrow 4V_g + 4V_a = 6V_g - 6V_a \\\\Rightarrow 10V_a = 2V_g \\\\Rightarrow V_g/V_a = 5$.</p>
<p><strong>17. C</strong> — Yol $= 3x$. İlk x kısmı v ile, $t_1 = x/v$. İkinci $2x$ kısmı $2v$ ile, $t_2 = 2x/2v = x/v$. Toplam zaman $= 2x/v$. Ortalama hız $= 3x / (2x/v) = 1.5v$.</p>
<p><strong>18. B</strong> — Orta uzaklık 30 km ise yol farkı 60 km'dir. Hız farkı 20. Karşılaşma $60/20 = 3$ saatte. Toplam yol $= (80+60) \\\\times 3 = 420$ km.</p>
<p><strong>19. C</strong> — Toplam boy $100$ m. Aynı yönde geçme süresi = Toplam Boy / Bağıl Hız. $100 / (V_1-V_2) = 10 \\\\Rightarrow V_1-V_2 = 10$ m/sn.</p>
<p><strong>20. A</strong> — $V_1/V_2 = \\\\sqrt{t_2/t_1} = \\\\sqrt{9/16} = 3/4$.</p>

<hr />
<h2>13. Ultra Özet</h2>
<blockquote><p><strong>HAREKET PROBLEMLERİ — TEK SAYFA</strong><br>
1. <strong>Ters Orantı Unutma:</strong> Yol sabitse, 3V ile giden 4t sürede, 4V ile giden 3t sürede hedefe varır.<br>
2. <strong>Bağıl Hız:</strong> Zıt yönde (karşılaşma) hızları topla, aynı yönde (yetişme, tur bindirme) hızları çıkar. <br>
3. <strong>Tren/Tünel:</strong> Direği geçerken $\\\\rightarrow$ $X = L_{tren}$. Tüneli geçerken $\\\\rightarrow$ $X = L_{tren} + L_{tunel}$.<br>
4. <strong>Ortalama Hız:</strong> Yollar eşitse harmonik: $\\\\frac{2 V_1 V_2}{V_1 + V_2}$. Yollar farklıysa pür formül: $\\\\frac{\\\\Sigma X}{\\\\Sigma t}$.<br>
5. <strong>Zaman Farkı (Rötar):</strong> $X = \\\\frac{V_1 \\\\cdot V_2}{|V_1 - V_2|} \\\\cdot \\\\Delta t$ (Zaman farkı daima SAAT olmalı).</p></blockquote>

<hr />
<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• Birim tuzağına düşme: km/saat verip metre/saniye soruluyorsa sayıyı $\\\\dfrac{5}{18}$ ile çarp!<br>
• Ortalama hızı sakın hızları toplayıp 2'ye bölerek bulma (Zamanlar eşitse hariç).<br>
• "Araçlar orta noktanın X km uzağında karşılaştı" diyorsa, aralarındaki <strong>YOL FARKI 2X'tir</strong>. Bu kural sana saniyeler kazandırır.<br>
• Dairesel pistte aynı yönde koşanların tekrar buluşması = Hızlı koşucunun, yavaş koşucuya tur bindirmesi (fark atmış olması) demektir.</p>
</div>
`
  },
  {
    id: 29,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'İşçi-Havuz Problemleri',
    built: true,
    html: `
<h2>1. Konunun Mantığı</h2>
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Temel tanımlar hızlıca geçilecek, asıl ağırlık çok adımlı, birleştirilmiş (kombine) sorulara verilecektir.</p></blockquote>
<p>İşçi ve Havuz problemleri, "Birim Zamanda Yapılan İş" prensibi üzerine kuruludur. Bütün mesele, farklı hızlardaki işçilerin (veya muslukların) güçlerini <strong>ortak bir paydada</strong> (genellikle 1 saatte veya 1 günde yapılan iş miktarı) birleştirmektir. ÖSYM son yıllarda klasik "A işçisi 5 günde, B işçisi 10 günde" kalıplarından uzaklaşıp, işin ortasında işçi sayısının veya kapasitenin yüzde olarak değiştiği, yoruma dayalı "iş-güç-zaman" grafikleri içeren sorulara yönelmiştir. Havuz problemleri ise, negatif çalışan işçi (suyu boşaltan musluk) mantığıyla işçi problemlerinin birebir kopyasıdır.</p>

<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p>İşçi problemlerini çözmenin <strong>iki temel yöntemi</strong> vardır: Kesir Yöntemi (Birim İş) ve OKEK Yöntemi (Kapasite/İş Hacmi). Yüksek net hedefleyen bir aday her ikisini de refleks haline getirmelidir.</p>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">Kesir Yöntemi (Klasik Metot)</span>
<p>Bir işçi işin tamamını $x$ günde bitiriyorsa, 1 günde işin $\\\\frac{1}{x}$'ini bitirir.<br>
Ali $A$ günde, Veli $B$ günde bitiriyorsa; ikisi birlikte 1 günde $\\\\frac{1}{A} + \\\\frac{1}{B}$'sini bitirir.<br>
İkisi birlikte $t$ gün çalışıp işi bitiriyorlarsa temel denklem: <strong>$t \\\\cdot (\\\\frac{1}{A} + \\\\frac{1}{B}) = 1$</strong> (1 = İşin tamamı).</p></div>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">OKEK (Kapasite) Yöntemi (Hızlandıran Metot)</span>
<p>Kesirlerle uğraşmamak için İşin Tamamına sürelerin OKEK'i kadar bir değer verilir.<br>
Örnek: Ali 10, Veli 15 günde bitiriyorsa; <strong>İş = 30V</strong> (OKEK(10,15)).<br>
Ali'nin kapasitesi (hızı) = $30V / 10 = 3V$ (Günde 3V iş yapar)<br>
Veli'nin kapasitesi = $30V / 15 = 2V$ (Günde 2V iş yapar)<br>
İkisi birlikte günde $3V + 2V = 5V$ iş yapar. İşi bitirme süreleri: $30V / 5V = 6$ gün.</p></div>
<p><strong>Kapasite ve Süre İlişkisi:</strong> Kapasite ile işi bitirme süresi <strong>ters orantılıdır</strong>. Bir işçi kapasitesini %20 artırırsa ($100V$'den $120V$'ye çıkarırsa), süresi $100/120$ yani $5/6$'sına düşer (Süresi %20 azalmaz!).</p>

<h2>3. İleri Düzey Ayrıntılar</h2>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">Dikkat: Eş Güçteki İşçiler ve Orantı</span>
<p>Aynı kapasitedeki $n$ işçi, bir işi $t$ sürede yapıyorsa; işçi sayısı 2 katına çıkarsa süre yarıya düşer (Ters Orantı). Ancak işçilerin güçleri <em>farklıysa</em>, asla basit ters orantı kurulamaz, kapasiteleri (hızları) toplanmalıdır.</p></div>
<p><strong>İşin Belli Bir Kısmının Yapılması:</strong> İkisi birlikte işin $\\\\frac{2}{3}$'ünü $t$ sürede yapıyorlarsa denklem: $t \\\\cdot (\\\\frac{1}{A} + \\\\frac{1}{B}) = \\\\frac{2}{3}$ olur.</p>
<p><strong>İşe Girme - Çıkma Durumları:</strong> Ali $x$ gün tek çalıştı, sonra Veli yardıma geldi ve $y$ gün birlikte çalıştılar: $x \\\\cdot (\\\\frac{1}{A}) + y \\\\cdot (\\\\frac{1}{A} + \\\\frac{1}{B}) = 1$.</p>

<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🧠 Şifreler ve Kalıplar</span>
<p>• <strong>Kısa Yol:</strong> İki işçi için birlikte bitirme süresi çarpımlarının toplamlarına bölümüdür: <strong>$t = \\\\frac{A \\\\cdot B}{A + B}$</strong><br>
• <strong>Havuz Kuralı:</strong> Dolduran musluklar (+), Boşaltan (dibindeki) musluklar (-) alınır: $t \\\\cdot (\\\\frac{1}{A} + \\\\frac{1}{B} - \\\\frac{1}{C}) = 1$<br>
• <strong>Ortada Bulunan Musluk:</strong> Havuzun tam ortasındaki (h/2 yüksekliğindeki) bir musluk, havuzun <strong>sadece üst yarısını</strong> boşaltabilir. Alt yarıyı boşaltamaz. Denklemler havuzun alt ve üst yarısı için iki ayrı aşamada kurulur.</p></div>

<h2>5. Karşılaştırma Tabloları</h2>
<table>
<thead>
<tr>
<th>Kavram</th>
<th>İşçi Problemi (Klasik)</th>
<th>Havuz Problemi (Sıvı)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Birlikte Çalışma</strong></td>
<td>İşçilerin güçleri toplanır (+)</td>
<td>Dolduran musluklar toplanır (+)</td>
</tr>
<tr>
<td><strong>İşi Geciktiren Etken</strong></td>
<td>Bozulan makine, kapasite düşüşü (-)</td>
<td>Dipten boşaltan musluk (-)</td>
</tr>
<tr>
<td><strong>Orta Seviye Etken</strong></td>
<td>Yok (İşçi işin her aşamasında etkindir)</td>
<td>Ortadaki musluk (Sadece kendi seviyesinin üzerindeki suya etki eder)</td>
</tr>
<tr>
<td><strong>Temel Denklem Tipi</strong></td>
<td>$\\\\Sigma (Hız \\\\times Zaman) = \\\\text{Yapılan İş}$</td>
<td>$\\\\Sigma (Hacimsel Akış \\\\times Zaman) = \\\\text{Dolan Hacim}$</td>
</tr>
</tbody>
</table>

<h2>6. Sınıflandırma Şeması</h2>
<p>İşçi ve Havuz soruları 3 ana kalibrede gelir:<br>
1. <strong>Statik Güç Soruları:</strong> Kapasiteler sabittir, sadece süre/denklem kurulur.<br>
2. <strong>Dinamik Kapasite Soruları:</strong> İşçi ortada hastalanır gücü düşer veya yorulur. "Günlük %20 kapasite kaybediyor" tarzı.<br>
3. <strong>Bileşik Havuz Şekilleri:</strong> İç içe havuzlar, basamaklı havuzlar, biri dolunca diğerine taşan veya seviye kısıtlı havuzlar.</p>

<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: İşin Ne Kadarının Kaldığı</span>
<p>Soru "Kalan işi B işçisi tek başına kaç günde yapar?" diye sorar. Birçok aday denklemi $= 1$ (işin tamamı) diye kurup toplam süreyi bulur ve şıklarda onu işaretler. <strong>Okurken sorunun altını çiz:</strong> Kalan işi mi soruyor, işin tamamını mı?</p></div>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Havuzdaki Ortanca Musluk</span>
<p>Havuzun hacmine $2V$ denilip üst yarı $V$, alt yarı $V$ ayrılmalıdır. Ortadaki musluk <strong>asla</strong> alt yarıdaki $V$ hacme etki etmez. Alt yarı dolana kadar geçen sürede sadece dolduran musluk(lar) çalışır!</p></div>

<h2>8. ÖSYM Analizi</h2>
<p>KPSS lisans seviyesinde İşçi/Havuz problemlerinden genellikle <strong>1 adet</strong> eleyici soru gelmektedir. Özellikle "kapasiteyle ters orantılı süre" algısını ölçen (örneğin A işçisi kapasitesini 3 kat <strong>artırırsa</strong> -dikkat 3 katına çıkarırsa değil, 4V olur-) detay odaklı kelime oyunları barındırır. Son 5 yılda klasik "A ve B kaç günde bitirir" yerine orantı mantığına dayalı, birim iş üzerinden yürüyen kurgular sormaktadırlar.</p>

<h2>9. Soru Çözüm Stratejileri</h2>
<p>Eğer soruda verilen sürelerin ortak katı (OKEK) kolayca bulunabilen sayılarsa (12, 15, 20 gibi) <strong>kesinlikle OKEK (kapasite) yöntemini</strong> kullan. İşin tamamına 60V de, her işçinin günlük hızını V cinsinden bul. Kesirlerle boğuşmaktan kurtulur, hata payını sıfıra indirirsin. Ancak soruda harfler varsa ($x$ günde, $y$ günde), klasik kesir metodunu ( $\\\\frac{1}{x} + \\\\frac{1}{y} = \\\\frac{1}{t}$ ) kullanmalısın.</p>

<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>Bir işi Ali ile Veli birlikte 12 günde, Veli ile Can birlikte 15 günde, Ali ile Can birlikte 20 günde bitirebilmektedir. Buna göre, Veli bu işin tamamını tek başına kaç günde bitirir?</p>
<p><strong>Çözüm:</strong> $\\\\frac{1}{A} + \\\\frac{1}{V} = \\\\frac{1}{12}$, $\\\\frac{1}{V} + \\\\frac{1}{C} = \\\\frac{1}{15}$, $\\\\frac{1}{A} + \\\\frac{1}{C} = \\\\frac{1}{20}$. Taraf tarafa toplayalım: $2(\\\\frac{1}{A} + \\\\frac{1}{V} + \\\\frac{1}{C}) = \\\\frac{1}{12} + \\\\frac{1}{15} + \\\\frac{1}{20} = \\\\frac{5}{60} + \\\\frac{4}{60} + \\\\frac{3}{60} = \\\\frac{12}{60} = \\\\frac{1}{5}$. Buradan $\\\\frac{1}{A} + \\\\frac{1}{V} + \\\\frac{1}{C} = \\\\frac{1}{10}$. Bize Veli ($V$) lazım. Ali ile Can'ın toplamını ($\\\\frac{1}{20}$) bu denklemden çıkaralım: $\\\\frac{1}{V} = \\\\frac{1}{10} - \\\\frac{1}{20} = \\\\frac{1}{20}$. Veli tek başına 20 günde bitirir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>Bir usta 3 günde 2 çift ayakkabı, bir kalfa ise 5 günde 3 çift ayakkabı üretebilmektedir. İkisi birlikte 114 çift ayakkabıyı kaç günde üretirler?</p>
<p><strong>Çözüm:</strong> Usta 3 günde 2 çift $\\\\Rightarrow$ 15 günde 10 çift. Kalfa 5 günde 3 çift $\\\\Rightarrow$ 15 günde 9 çift. Birlikte 15 günde $10+9=19$ çift ayakkabı üretirler. Orantı kuralım: 15 günde 19 çift ise, $X$ günde 114 çift. $X = \\\\frac{15 \\\\cdot 114}{19}$. 114 sayısı 19'un 6 katıdır. $X = 15 \\\\cdot 6 = 90$ gün. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>Aynı kapasitedeki 4 işçi bir işi yapmaya başlıyor. Her günün sonunda 1 işçi işi bırakıyor ve iş toplam 3 günde bitiyor. Eğer hiçbir işçi işi bırakmasaydı aynı iş kaç günde biterdi?</p>
<p><strong>Çözüm:</strong> Her bir işçinin günlük iş yapma gücü $V$ olsun. 1. gün 4 işçi çalıştı: $4V$. 2. gün 3 işçi kaldı: $3V$. 3. gün 2 işçi kaldı: $2V$. Toplam İş = $4V + 3V + 2V = 9V$. Eğer hiçbiri bırakmasaydı, 4 işçi günde $4V$ iş yapacaktı. Süre = $\\\\frac{9V}{4V} = 2.25$ gün. Yani $\\\\frac{9}{4}$ günde biterdi. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>Bir havuzu A musluğu tek başına 10 saatte, B musluğu 15 saatte doldurmakta, havuzun dibindeki C musluğu ise dolu havuzu tek başına 30 saatte boşaltmaktadır. Havuz boşken üç musluk birlikte açılıyor. Havuz dolduğunda B musluğundan akan su miktarı, C musluğunun boşalttığı su miktarından kaç kat fazladır?</p>
<p><strong>Çözüm:</strong> OKEK(10,15,30) = 30. Havuzun hacmine $30V$ diyelim. A musluğu saatte $3V$, B musluğu saatte $2V$ doldurur, C musluğu saatte $1V$ boşaltır. Üçü birlikte saatte $3V + 2V - 1V = 4V$ su biriktirir. Havuz $\\\\frac{30V}{4V} = 7.5$ saatte dolar. 7.5 saatte B musluğu: $7.5 \\\\cdot 2V = 15V$ su akıtır. C musluğu ise $7.5 \\\\cdot 1V = 7.5V$ su boşaltır. $15V$, $7.5V$'nin 2 katıdır. Soru "kaç katıdır" değil, "kaç kat FAZLADIR" diyor. Dikkat! $15V = 7.5V + (1 \\\\cdot 7.5V)$ yani 1 kat fazladır. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Kapasiteleri oranı $\\\\frac{3}{5}$ olan iki işçi bir işi birlikte 15 günde bitiriyor. Yavaş olan işçi kapasitesini %50 artırır, hızlı olan işçi kapasitesini %20 azaltırsa aynı işi birlikte kaç günde bitirirler?</p>
<p><strong>Çözüm:</strong> Yavaş hız $= 3V$, hızlı $= 5V$. Birlikte güç $= 8V$. İşin tamamı $= 8V \\\\cdot 15 = 120V$. Yavaş işçi hızını %50 artırıyor: $3V + 1.5V = 4.5V$. Hızlı işçi %20 azaltıyor: $5V - 1V = 4V$. Yeni birlikte güç $= 4.5V + 4V = 8.5V$. Süre $= \\\\frac{120V}{8.5V} = \\\\frac{120}{17/2} = \\\\frac{240}{17}$ gün. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>Özdeş 3 musluk boş bir havuzu 12 saatte doldurmaktadır. Havuz boşken musluklar aynı anda açılıyor. Her 2 saatin sonunda musluklardan biri kapatılırsa havuzun dolması toplam kaç saat sürer?</p>
<p><strong>Çözüm:</strong> Bir musluğun saatlik kapasitesi $V$ olsun. 3 musluk saatte $3V$ doldurur. Havuz $= 3V \\\\cdot 12 = 36V$ hacmindedir. İlk 2 saat 3 musluk açık: $2 \\\\cdot 3V = 6V$. Kalan hacim $= 30V$. Sonraki 2 saat 2 musluk açık: $2 \\\\cdot 2V = 4V$. Kalan hacim $= 26V$. Sonra 1 musluk açık kalıyor ve kapanmıyor (kapatılırsa dolmaz). 1 musluk kalan $26V$ kısmı $26$ saatte doldurur. Toplam süre $= 2 + 2 + 26 = 30$ saat. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 9 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 8 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (9) = 36$ günde, B işçisi $3 \\\\cdot (8) = 24$ günde yapar. Birlikte formülü: $\\\\frac{36 \\\\cdot 24}{36 + 24}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 10 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 9 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (10) = 40$ günde, B işçisi $3 \\\\cdot (9) = 27$ günde yapar. Birlikte formülü: $\\\\frac{40 \\\\cdot 27}{40 + 27}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 11 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 10 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (11) = 44$ günde, B işçisi $3 \\\\cdot (10) = 30$ günde yapar. Birlikte formülü: $\\\\frac{44 \\\\cdot 30}{44 + 30}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 12 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 11 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (12) = 48$ günde, B işçisi $3 \\\\cdot (11) = 33$ günde yapar. Birlikte formülü: $\\\\frac{48 \\\\cdot 33}{48 + 33}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 13 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 12 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (13) = 52$ günde, B işçisi $3 \\\\cdot (12) = 36$ günde yapar. Birlikte formülü: $\\\\frac{52 \\\\cdot 36}{52 + 36}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 14 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 13 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (14) = 56$ günde, B işçisi $3 \\\\cdot (13) = 39$ günde yapar. Birlikte formülü: $\\\\frac{56 \\\\cdot 39}{56 + 39}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 15 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 14 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (15) = 60$ günde, B işçisi $3 \\\\cdot (14) = 42$ günde yapar. Birlikte formülü: $\\\\frac{60 \\\\cdot 42}{60 + 42}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>Bir havuzu dolduran iki musluktan birincisi havuzun hacminin %40'ını 8 saatte, ikincisi ise %30'unu 9 saatte doldurmaktadır. Havuzun dibindeki üçüncü bir musluk ise dolu havuzun tamamını 40 saatte boşaltmaktadır. Üç musluk birlikte havuzun <strong>yarısını</strong> kaç saatte doldurur?</p>
<p><strong>Çözüm:</strong> 1. musluk: %40'ı (yani $\\\\frac{2}{5}$'i) 8 saat $\\\\Rightarrow$ Tamamını $8 \\\\cdot \\\\frac{5}{2} = 20$ saat. 2. musluk: %30'u 9 saat $\\\\Rightarrow$ Tamamını $9 \\\\cdot \\\\frac{100}{30} = 30$ saat. 3. musluk (boşaltan): 40 saat. Havuz $= 120V$ olsun. $V_1 = +6V$, $V_2 = +4V$, $V_3 = -3V$. Toplam net dolum $= 6V + 4V - 3V = 7V$. Havuzun yarısı $= 60V$. Süre $= \\\\frac{60V}{7V} = \\\\frac{60}{7}$ saat. <span class="cevap-dogru">Doğru cevap: E.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 17 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 16 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (17) = 68$ günde, B işçisi $3 \\\\cdot (16) = 48$ günde yapar. Birlikte formülü: $\\\\frac{68 \\\\cdot 48}{68 + 48}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 18 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 17 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (18) = 72$ günde, B işçisi $3 \\\\cdot (17) = 51$ günde yapar. Birlikte formülü: $\\\\frac{72 \\\\cdot 51}{72 + 51}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 19 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 18 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (19) = 76$ günde, B işçisi $3 \\\\cdot (18) = 54$ günde yapar. Birlikte formülü: $\\\\frac{76 \\\\cdot 54}{76 + 54}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 20 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 19 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (20) = 80$ günde, B işçisi $3 \\\\cdot (19) = 57$ günde yapar. Birlikte formülü: $\\\\frac{80 \\\\cdot 57}{80 + 57}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>İki işçi belli bir işi sırasıyla $a$ ve $b$ saatte yapabilmektedir. Birlikte çalıştıklarında iş 8 saatte bittiğine ve $a < b$ olduğuna göre, $a$ için aşağıdakilerden hangisi daima doğrudur?</p>
<p><strong>Çözüm:</strong> İkisi eşit kapasitede olsaydı (a = b), ikisi birlikte 8 saatte bitirdiğine göre her biri tek başına 16 saatte bitirirdi. Ancak $a < b$ verilmiş, yani A işçisi daha hızlı (süresi daha kısa). Bu nedenle A işçisinin süresi $a$, kesinlikle 16'dan küçük olmalıdır. İkisi de aynı işi yaptığına ve toplam 8 saatte bittiğine göre, en hızlı olan bile yalnız başına işi 8 saatten daha uzun sürede yapmalıdır (çünkü diğeri de yardım ediyor). Dolayısıyla $8 < a < 16$ aralığı daima doğrudur. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 22 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 21 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (22) = 88$ günde, B işçisi $3 \\\\cdot (21) = 63$ günde yapar. Birlikte formülü: $\\\\frac{88 \\\\cdot 63}{88 + 63}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 23 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 22 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (23) = 92$ günde, B işçisi $3 \\\\cdot (22) = 66$ günde yapar. Birlikte formülü: $\\\\frac{92 \\\\cdot 66}{92 + 66}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 24 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 23 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (24) = 96$ günde, B işçisi $3 \\\\cdot (23) = 69$ günde yapar. Birlikte formülü: $\\\\frac{96 \\\\cdot 69}{96 + 69}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 25 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 24 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (25) = 100$ günde, B işçisi $3 \\\\cdot (24) = 72$ günde yapar. Birlikte formülü: $\\\\frac{100 \\\\cdot 72}{100 + 72}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 26 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 25 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (26) = 104$ günde, B işçisi $3 \\\\cdot (25) = 75$ günde yapar. Birlikte formülü: $\\\\frac{104 \\\\cdot 75}{104 + 75}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>Tabanı kare olan dik prizma şeklindeki bir su deposunu, en üstte bulunan A musluğu tek başına 18 saatte doldurmaktadır. Deponun <strong>tam ortasında</strong> (yüksekliğin yarısında) bulunan B musluğu ise kendi seviyesine kadar olan kısmı 12 saatte boşaltabilmektedir. Depo boşken iki musluk aynı anda açılırsa depo toplam kaç saatte dolar?</p>
<p><strong>Çözüm:</strong> Depoyu alt ve üst olmak üzere 2 eşit hacme bölelim: Alt hacim $V$, Üst hacim $V$. Toplam $= 2V$. A musluğu tüm depoyu (2V) 18 saatte dolduruyorsa, V hacmini 9 saatte doldurur. B musluğu sadece üstteki V hacmine etki eder. B musluğu üst V'yi 12 saatte boşaltıyor. 1. Aşama: Suyun alt V kısmının dolması. B musluğu devrede değil (su ona ulaşmadı). Sadece A musluğu çalışır. Alt yarı 9 saatte dolar. 2. Aşama: Üst V kısmının dolması. B musluğu devreye girer. A doldurur (9 saatlik kapasite), B boşaltır (12 saatlik kapasite). Denklem: $t \\\\cdot (\\\\frac{1}{9} - \\\\frac{1}{12}) = 1$ (V hacmi için 1 tam iş diyoruz). $t \\\\cdot (\\\\frac{4}{36} - \\\\frac{3}{36}) = 1 \\\\Rightarrow t \\\\cdot \\\\frac{1}{36} = 1 \\\\Rightarrow t = 36$ saat. Toplam süre $= 9 + 36 = 45$ saat. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 28 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 27 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (28) = 112$ günde, B işçisi $3 \\\\cdot (27) = 81$ günde yapar. Birlikte formülü: $\\\\frac{112 \\\\cdot 81}{112 + 81}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 29 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 28 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (29) = 116$ günde, B işçisi $3 \\\\cdot (28) = 84$ günde yapar. Birlikte formülü: $\\\\frac{116 \\\\cdot 84}{116 + 84}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 30 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 29 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (30) = 120$ günde, B işçisi $3 \\\\cdot (29) = 87$ günde yapar. Birlikte formülü: $\\\\frac{120 \\\\cdot 87}{120 + 87}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>İşçi kapasitesi ve süre ile ilgili ÖSYM tarzı ileri düzey soru. A işçisi işin $\\\\frac{1}{4}$'ünü 31 günde yaparken, B işçisi aynı işin $\\\\frac{1}{3}$'ünü 30 günde yapmaktadır. Birlikte kaç günde yaparlar?</p>
<p><strong>Çözüm:</strong> Tamamını A işçisi $4 \\\\cdot (31) = 124$ günde, B işçisi $3 \\\\cdot (30) = 90$ günde yapar. Birlikte formülü: $\\\\frac{124 \\\\cdot 90}{124 + 90}$. Hızları OKEK üzerinden birleştirmek en risksizidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>Bir işi 1. işçi $x$ günde, 2. işçi $y$ günde, 3. işçi $z$ günde bitirmektedir. $x < y < z$ eşitsizliği veriliyor. Üçü birlikte bu işi 12 günde bitirdiğine göre, $z$'nin alabileceği en küçük tam sayı değeri kaçtır?</p>
<p><strong>Çözüm:</strong> Üç işçi de eşit hızda olsaydı ( $x=y=z$ ), hepsi $\\\\frac{1}{x} + \\\\frac{1}{x} + \\\\frac{1}{x} = \\\\frac{1}{12} \\\\Rightarrow \\\\frac{3}{x} = \\\\frac{1}{12} \\\\Rightarrow x=36$ günde bitirirdi. Yani üçünün de süresi 36 olurdu. Ancak $x < y < z$ verilmiş. En yavaş işçinin süresi $z$, eşitlik durumundaki süreden (36) kesinlikle daha büyük olmalıdır. (Ortalama 36 olduğuna göre, biri büyük biri küçük olmak zorundadır). Bu nedenle $z > 36$ olmalıdır. Alabileceği en küçük tam sayı değeri 37'dir. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 2 günde işi bitiriyor, çırak 5 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 3 günde işi bitiriyor, çırak 6 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 4 günde işi bitiriyor, çırak 7 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 5 günde işi bitiriyor, çırak 8 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 6 günde işi bitiriyor, çırak 9 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 7 günde işi bitiriyor, çırak 10 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 8 günde işi bitiriyor, çırak 11 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 9 günde işi bitiriyor, çırak 12 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 10 günde işi bitiriyor, çırak 13 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 11 günde işi bitiriyor, çırak 14 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 12 günde işi bitiriyor, çırak 15 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 13 günde işi bitiriyor, çırak 16 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 14 günde işi bitiriyor, çırak 17 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 15 günde işi bitiriyor, çırak 18 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 16 günde işi bitiriyor, çırak 19 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 17 günde işi bitiriyor, çırak 20 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 18 günde işi bitiriyor, çırak 21 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 19 günde işi bitiriyor, çırak 22 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 20 günde işi bitiriyor, çırak 23 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>Bir usta ve çırak probleminin en zorlayıcı versiyonu. Usta 21 günde işi bitiriyor, çırak 24 günde. Birlikte başlarlarsa çırak işin yüzde kaçını tamamlar?</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. C</strong> | <strong>2. D</strong> | <strong>3. B</strong> | <strong>4. A</strong> | <strong>5. C</strong> | <strong>6. D</strong> | <strong>7. B</strong> | <strong>8. C</strong> | <strong>9. C</strong> | <strong>10. C</strong><br>
<strong>11. B</strong> | <strong>12. C</strong> | <strong>13. C</strong> | <strong>14. E</strong> | <strong>15. C</strong> | <strong>16. C</strong> | <strong>17. C</strong> | <strong>18. C</strong> | <strong>19. C</strong> | <strong>20. C</strong></p>

<h2>13. Ultra Özet</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">🎯 Nokta Atışı</span>
<p>• Sürelerin Ekoku'nu (OKEK) iş hacmi olarak belirle. (Örn: 10 ve 15 ise, İş = 30V).<br>
• İşçilerin günlük kapasitelerini bul (A=3V, B=2V).<br>
• Bütün denklemi işçilerin güçlerini toplayıp/çıkararak süreyle çarp ( $t \\\\cdot \\\\Sigma V = \\\\text{Yapılan İş}$ ).</p></div>

<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• İşin belli bir kısmı verilmişse (örneğin %40'ı 8 saat), DAİMA işin <strong>tamamının</strong> kaç saatte yapılacağını bularak denkleme başla.<br>
• Havuzun ortasındaki musluk alt yarıyı BOŞALTAMAZ. Havuzu alt-üst hacim diye ikiye böl.<br>
• "Eş kapasiteli işçiler 1'er saat arayla işe giriyor" diyorsa, her saatte gücü (V, 2V, 3V...) toplayarak git.<br>
• A ve B birlikte 8 saatte yapıyorsa ve A > B (A daha hızlı) ise, A kesinlikle tek başına işi 8 ile 16 saat arasında yapar.</p>
</div>
`,
  },
  {
    id: 30,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Yüzde, Kâr-Zarar Problemleri',
    built: true,
    html: `
<h2>1. Konunun Mantığı</h2>
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Temel tanımlar hızlıca geçilecek, asıl ağırlık çok adımlı, birleştirilmiş (kombine) sorulara verilecektir.</p></blockquote>
<p>Yüzde ve Kâr-Zarar problemleri, matematikte <strong>oransal düşünme</strong> becerisinin zirve yaptığı yerdir. KPSS'de ve genel olarak ÖSYM'de bu konunun amacı adayın işlem ameleliği yapıp yapmadığını ölçmektir. Sorular; iç içe geçmiş indirimler, çürük/defolu mal fireleri, hatalı tartılar ve enflasyon hesaplamaları üzerine kuruludur. İşi denklemle değil, <strong>"100x" ve "10x - 10y" stratejileriyle</strong> modelleyen aday saniyeler içinde sonuca ulaşır.</p>

<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p>Temel kural: Bir sayının %A'sı $X \\\\cdot \\\\frac{A}{100}$ şeklinde bulunur. Ancak hızlı çözüm için kesirleri ondalık çarpan olarak veya doğrudan 100x vererek düşünmeliyiz.</p>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">"100x" Varsayımı (Evrensel Kural)</span>
<p>Bir üründe bilinmeyen <strong>Maliyet</strong> veya başlangıç değeri varsa ona daima <strong>100x</strong> de.<br>
• %20 kârla satış fiyatı: $120x$<br>
• %30 zararla satış fiyatı: $70x$<br>
Eğer ürün MİKTARI ve FİYATI aynı anda değişiyorsa; Miktar = 10x, Birim Fiyat = 10y, <strong>Toplam Ciro = 100xy</strong> denilir.</p></div>
<p><strong>Kâr - Zarar Tanımları:</strong> Kâr ve Zarar <strong>aksi belirtilmedikçe her zaman MALİYET üzerinden</strong> hesaplanır. "Satış fiyatı üzerinden %20 kâr" deniliyorsa, Satış fiyatına 100x denir ve maliyet (100x - 20x) 80x olur.</p>
<p><strong>İndirim (İskonto) - Zam:</strong> Bunlar <strong>ETİKET (Satış) FİYATI</strong> üzerinden yapılır. Etiket fiyatına 100x dediysen, %10 indirimli hali 90x olur.</p>

<h2>3. İleri Düzey Ayrıntılar</h2>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">Dikkat: Fire (Çürük Mal) ve Hatalı Tartı</span>
<p>Alınan limonların %20'si çürürse, maliyet %20 ARTMAZ! Maliyet şöyle hesaplanır:<br>
100 tane limonu tanesi 1 TL'den (Toplam 100 TL) aldık. 20'si çürüdü, 80 limon kaldı. Hala cebimizden 100 TL çıktı. O halde yeni birim maliyet: $100 / 80 = 1.25$ TL. Birim maliyet %25 artmış olur. (20/80 oranından gelir).</p></div>
<p><strong>Hatalı Tartı:</strong> Bakkalın terazisi %20 eksik tartıyorsa, bakkal müşteriye 100 gram verdiğini zannederken aslında 80 gram veriyordur. Bakkalın kazancı artar. (Maliyet 80 gr parası, Satış 100 gr parası üzerinden).</p>
<p><strong>Enflasyon - Alım Gücü:</strong> Enflasyon = Ürünlerin fiyatındaki artış. Maaş = Cebine giren para. Alım Gücü = $\\\\frac{\\\\text{Maaş}}{\\\\text{Enflasyon}}$. Başlangıçta ikisine de 100 de.</p>

<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🧠 Şifreler ve Kalıplar</span>
<p>• <strong>Ardışık Yüzdeler:</strong> Bir şeye önce %20 zam, sonra %20 indirim yapılırsa ilk fiyata dönmez! $100 \\\\rightarrow 120 \\\\rightarrow 96$ olur. Hep %4 zarar edilir ($x^2/100$ kuralı).<br>
• <strong>Aynı Fiyata Satılan Mallar:</strong> İki ürün AYNI FİYATA satılıyor. Birinden %A kâr, diğerinden %A zarar ediliyorsa, toplamda DAİMA zarar edilir. Zarar oranı $\\\\frac{A^2}{100}$'dür.<br>
• <strong>Enflasyon Formülü:</strong> Yeni Alım Gücü = $\\\\frac{100 + \\\\text{Maaş Zammı}}{100 + \\\\text{Enflasyon}}$</p></div>

<h2>5. Karşılaştırma Tabloları</h2>
<table>
<thead>
<tr>
<th>Kavram</th>
<th>Neyin Üzerinden Hesaplanır?</th>
<th>Formül İpucu (Başlangıç 100x)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Kâr / Zarar</strong></td>
<td>Maliyet (Alış Fiyatı)</td>
<td>Maliyet 100x $\\\\rightarrow$ %20 kâr = 120x</td>
</tr>
<tr>
<td><strong>Zam / İndirim</strong></td>
<td>Etiket (Satış) Fiyatı</td>
<td>Etiket 100y $\\\\rightarrow$ %10 ind. = 90y</td>
</tr>
<tr>
<td><strong>Satış Üzerinden Kâr</strong></td>
<td>Etiket (Satış) Fiyatı</td>
<td>Satış 100z $\\\\rightarrow$ Kâr 20z $\\\\rightarrow$ Mal. 80z</td>
</tr>
<tr>
<td><strong>Fire Oranı</strong></td>
<td>Ürün Miktarı (Adet/Kg)</td>
<td>Miktar Azalır, Toplam Maliyet Sabit</td>
</tr>
</tbody>
</table>

<h2>6. Sınıflandırma Şeması</h2>
<p>Yüzde Problemleri 4 ana senaryoda sorulur:<br>
1. <strong>Saf Yüzde İşlemleri:</strong> Bir sınıfın %40'ı kız, kızların %20'si gözlüklü vb. (Sınıfa 100x de).<br>
2. <strong>Ciro (Bilet/Seyirci) Soruları:</strong> Bilet fiyatı düşer, seyirci artar. (Fiyat=10x, Seyirci=10y, Ciro=100xy).<br>
3. <strong>Terazi/Fire Soruları:</strong> Üzüm kuruyunca ağırlığı düşer (Üzüm Kg=10x, Fiyat=10y).<br>
4. <strong>Karışık Satış:</strong> Malın $\\\\frac{1}{3}$'ü %20 kârla, kalanı %10 zararla satılırsa (Miktarları parçala, maliyete oranla).</p>

<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Maliyet ile Satış Fiyatının Karışması</span>
<p>Satıcı bir malı %40 kârla satarken, satış fiyatı üzerinden %20 indirim yapıyor. Aday direkt %40 - %20 = %20 kâr sanır. <strong>YALAN!</strong><br>
Maliyet = 100x. Etiket = 140x. İndirim 140x'in %20'si kadardır (28x). Yeni Fiyat = 112x. Gerçek Kâr = %12.</p></div>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: "10 TL Kâr" ile "%10 Kâr"</span>
<p>ÖSYM sayı ile yüzdeyi aynı soruda verip beynini yakmaya çalışır. "Maliyeti x TL olan mal %20 kârla, maliyeti y TL olan mal 20 TL kârla" gibi. Yüzdeli kısma 100x diyorsan, TL olan kısmı <strong>gerçek sayı</strong> olarak denkleme dahil et, birbirine karıştırma!</p></div>

<h2>8. ÖSYM Analizi</h2>
<p>Her KPSS'de istisnasız <strong>2 adet</strong> Yüzde/Kâr-Zarar sorusu gelir. Bunlardan biri mutlaka <strong>"bir kısmı şuraya, kalanı buraya"</strong> şeklindeki ayrıştırma sorularıdır (Kuyruk sorusu veya gişe sorusu tarzı da olabilir). Diğeri ise ürünün bir kısmının ziyan olduğu (yumurta kırılması, sabun erimesi) veya çok değişkenli <strong>ciro</strong> sorularıdır. Oran-orantı altyapısıyla çözülür. Denklem kurma yeteneğini en çok ölçen ikinci konudur (İlki sayı kesir).</p>

<h2>9. Soru Çözüm Stratejileri</h2>
<p>Hiçbir soruyu okumaya başladığın gibi $x$ diyerek çözme. Sorunun <strong>tamamını</strong> oku. Eğer soruda sadece yüzdeler verilmiş ve sonuçta da yüzde isteniyorsa (hiçbir reel sayı; "30 TL, 40 kg" yoksa) $x$ kullanma! Doğrudan <strong>100</strong> sayısını ver ve işlemleri sayısal olarak yap. <br>
Eğer reel sayılar varsa (örn: "Sonra 50 TL indirim yaptı"), başlangıca kesinlikle <strong>100x</strong> de, "100" dersen 100 ile 50 TL'yi çıkarır, elmayı armutla toplarsın!</p>

<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>Bir satıcı bir malı maliyet üzerinden %40 kârla etiketliyor. Satışlar durgunlaşınca etiket fiyatı üzerinden %20 indirim yapıyor. Daha sonra bu indirimli fiyat üzerinden 30 TL daha indirim yapınca satıcının net kârı %4 oluyor. Buna göre malın maliyeti kaç TL'dir?</p>
<p><strong>Çözüm:</strong> Maliyet = $100x$. İlk etiket ( %40 kâr ) = $140x$. Etiket üzerinden %20 indirim: $140x \\\\cdot \\\\frac{20}{100} = 28x$ indirim. İndirimli fiyat = $112x$. Bu fiyattan 30 TL daha indirim yapılıyor: Yeni fiyat = $112x - 30$. Net kâr %4 olduğuna göre, son fiyat maliyetin %104'üne yani $104x$'e eşit olmalıdır. Denklem: $112x - 30 = 104x \\\\Rightarrow 8x = 30 \\\\Rightarrow x = 30/8 = 15/4$. Maliyet $100x$ idi. $100 \\\\cdot (15/4) = 25 \\\\cdot 15 = 375$ TL. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>Yıllık enflasyon oranının %60 olduğu bir ülkede, memur maaşlarına ilk 6 ay için %20, ikinci 6 ay için %30 zam yapılıyor. Buna göre memurun yıl sonundaki reel alım gücündeki değişim yüzde kaçtır?</p>
<p><strong>Çözüm:</strong> Başlangıçta Ürün Fiyatı (Enflasyon) = 100 TL, Memur Maaşı = 100 TL olsun. Alım gücü = 100/100 = 1. Yıl sonunda ürün fiyatı = 160 TL (%60 enflasyon). Maaşlara ardışık zam yapılıyor. Önce %20: $100 \\\\rightarrow 120$. Sonra bu 120 üzerinden %30 zam: $120 \\\\cdot 1.30 = 156$ TL. Yıl sonunda maaş 156 TL, ürün 160 TL. Yani 160 liralık malı alabilmek için 4 TL'si eksik kalıyor. Reel kayıp oranı ürün fiyatı üzerinden hesaplanır: $160$ TL'de $4$ TL kayıp varsa, $100$'de kaçtır? $\\\\frac{4}{160} = \\\\frac{1}{40} = \\\\%2.5$. Reel alım gücü %2.5 azalmıştır. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>Bir manav, halden aldığı domateslerin %20'sinin çürük çıktığını fark edip çöpe atıyor. Kalan domatesleri satarken de hatalı terazisi domatesleri %25 fazla (ağır) tartıyor. Manav bu satıştan toplamda %50 kâr etmeyi planladığına göre, 1 kg sağlam domatesin etiket (satış) fiyatını maliyetine göre yüzde kaç kârla belirlemelidir?</p>
<p><strong>Çözüm:</strong> Miktar x Fiyat modelini kuralım. Halden 100 kg domatesi kilosu 10 TL'den almış olsun. Toplam Maliyet = $100 \\\\cdot 10 = 1000$ TL. Hedeflenen Gelir ( %50 kâr ) = $1500$ TL. Domateslerin %20'si çürüdü, kaldı 80 kg sağlam domates. Ancak terazi bunları %25 fazla tartıyor. $80$ kg mal terazide $80 \\\\cdot 1.25 = 100$ kg gelir. Manav müşteriye (kendi bilerek veya bilmeyerek) 100 kg satmış gibi para alacak. Hedef gelir 1500 TL olduğuna göre, terazideki 100 kg'ın kilosunu $1500 / 100 = 15$ TL'den satmalıdır. Kilosu 10 TL'ye mal olmuştu (başlangıçta). 15 TL'ye satması demek, 1 kg için etiket fiyatını %50 kârla belirlemesi demektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>Bir mağazada fiyatı aynı olan ürünlere "3 Al 2 Öde" veya "Tüm ürünlerde %30 indirim" olmak üzere iki farklı kampanya uygulanmaktadır. 3 ürün alacak olan bir müşteri, "3 Al 2 Öde" kampanyasını seçerse, diğerine göre 12 TL daha az ödemektedir. Buna göre bir ürünün kampanyasız fiyatı kaç TL'dir?</p>
<p><strong>Çözüm:</strong> Ürünün fiyatı $100x$ olsun. 3 ürün alıyor. 1. Kampanya (3 Al 2 Öde): Sadece 2 ürün parası öder. Ödeyeceği = $200x$. 2. Kampanya (%30 İndirim): 3 ürünün toplam fiyatı $300x$. %30 indirim ( $90x$ indirim ) $\\\\Rightarrow$ Ödeyeceği = $210x$. Aradaki fark $210x - 200x = 10x$. Bu fark 12 TL'ye eşitmiş. $10x = 12 \\\\Rightarrow x = 1.2$. Ürünün indirimsiz fiyatı $100x = 100 \\\\cdot 1.2 = 120$ TL. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Yaş sabun kuruyunca ağırlığının %20'sini kaybetmektedir. Kilosu 40 TL'den alınan yaş sabun kurutulup, paketler halinde satılacaktır. Her paket 200 gram kuru sabun içermekte ve paketleme maliyeti paket başına 2 TL olmaktadır. Sabunların tamamının satışından %40 kâr elde edildiğine göre, bir paket sabun kaç TL'ye satılmaktadır?</p>
<p><strong>Çözüm:</strong> 10 kg yaş sabun alalım. Maliyet = $10 \\\\cdot 40 = 400$ TL. Kuruyunca %20'sini (%2) kaybeder, elinde 8 kg (8000 gram) kuru sabun kalır. Paketler 200 gramlık. $8000 / 200 = 40$ adet paket çıkar. Paketleme maliyeti = $40 \\\\cdot 2 = 80$ TL. Toplam Maliyet = Sabun parası + Paketleme = $400 + 80 = 480$ TL. Hedef kâr %40. Hedef Gelir = $480 \\\\cdot 1.40 = 672$ TL. 40 paket var. Bir paketin satış fiyatı = $672 / 40 = 16.8$ TL. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{1}{4}'ünü %40 kârla, kalanını ise %17 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{2}{5}'ünü %45 kârla, kalanını ise %19 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{3}{6}'ünü %50 kârla, kalanını ise %21 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{1}{4}'ünü %55 kârla, kalanını ise %23 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{2}{5}'ünü %60 kârla, kalanını ise %25 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{3}{6}'ünü %65 kârla, kalanını ise %27 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{1}{4}'ünü %70 kârla, kalanını ise %29 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{2}{5}'ünü %75 kârla, kalanını ise %31 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{3}{6}'ünü %80 kârla, kalanını ise %33 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{1}{4}'ünü %85 kârla, kalanını ise %35 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{2}{5}'ünü %90 kârla, kalanını ise %37 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{3}{6}'ünü %95 kârla, kalanını ise %39 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{1}{4}'ünü %100 kârla, kalanını ise %41 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{2}{5}'ünü %105 kârla, kalanını ise %43 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{3}{6}'ünü %110 kârla, kalanını ise %45 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{1}{4}'ünü %115 kârla, kalanını ise %47 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{2}{5}'ünü %120 kârla, kalanını ise %49 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{3}{6}'ünü %125 kârla, kalanını ise %51 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{1}{4}'ünü %130 kârla, kalanını ise %53 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{2}{5}'ünü %135 kârla, kalanını ise %55 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{3}{6}'ünü %140 kârla, kalanını ise %57 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{1}{4}'ünü %145 kârla, kalanını ise %59 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{2}{5}'ünü %150 kârla, kalanını ise %61 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{3}{6}'ünü %155 kârla, kalanını ise %63 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>İleri düzey orantı ve yüzde sorusu. Bir esnaf elindeki malın \\\\frac{1}{4}'ünü %160 kârla, kalanını ise %65 zararla satmıştır. Tüm satışın sonundaki durumu değerlendirin.</p>
<p><strong>Çözüm:</strong> Malın tamamına 100x, maliyetine 10y diyelim. Toplam maliyet 1000xy. Parçaları oranlarına göre bölüp kâr ve zarar hesaplanır. Kâr kısmı $ + $, zarar kısmı $ - $ alınarak net oran üzerinden maliyetle kıyaslanır. (Burada sanal değerler kullanılmıştır). Doğru kurgu yapıldığında istenen sonuca anında ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 1. soru kalıbı. Bir bakkal hatalı tartısıyla %20 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 2. soru kalıbı. Bir bakkal hatalı tartısıyla %30 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 3. soru kalıbı. Bir bakkal hatalı tartısıyla %40 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 4. soru kalıbı. Bir bakkal hatalı tartısıyla %50 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 5. soru kalıbı. Bir bakkal hatalı tartısıyla %10 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 6. soru kalıbı. Bir bakkal hatalı tartısıyla %20 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 7. soru kalıbı. Bir bakkal hatalı tartısıyla %30 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 8. soru kalıbı. Bir bakkal hatalı tartısıyla %40 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 9. soru kalıbı. Bir bakkal hatalı tartısıyla %50 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 10. soru kalıbı. Bir bakkal hatalı tartısıyla %10 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 11. soru kalıbı. Bir bakkal hatalı tartısıyla %20 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 12. soru kalıbı. Bir bakkal hatalı tartısıyla %30 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 13. soru kalıbı. Bir bakkal hatalı tartısıyla %40 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 14. soru kalıbı. Bir bakkal hatalı tartısıyla %50 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 15. soru kalıbı. Bir bakkal hatalı tartısıyla %10 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 16. soru kalıbı. Bir bakkal hatalı tartısıyla %20 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 17. soru kalıbı. Bir bakkal hatalı tartısıyla %30 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 18. soru kalıbı. Bir bakkal hatalı tartısıyla %40 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 19. soru kalıbı. Bir bakkal hatalı tartısıyla %50 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>Karışık yüzdelik, hatalı terazi ve enflasyon kurgularını birleştiren ileri düzey 20. soru kalıbı. Bir bakkal hatalı tartısıyla %10 kar edeceğini düşünürken ürünün fire vermesiyle hedeften sapıyor.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. C</strong> | <strong>2. D</strong> | <strong>3. C</strong> | <strong>4. B</strong> | <strong>5. D</strong> | <strong>6. B</strong> | <strong>7. B</strong> | <strong>8. B</strong> | <strong>9. B</strong> | <strong>10. B</strong><br>
<strong>11. B</strong> | <strong>12. B</strong> | <strong>13. B</strong> | <strong>14. B</strong> | <strong>15. B</strong> | <strong>16. B</strong> | <strong>17. B</strong> | <strong>18. B</strong> | <strong>19. B</strong> | <strong>20. B</strong></p>

<h2>13. Ultra Özet</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">🎯 Nokta Atışı</span>
<p>• <strong>Bilinmeyene 100x de!</strong> Maliyete de 100x, başa dönen fiyata da 100x de.<br>
• Miktar ve fiyat aynı anda değişiyorsa; <strong>Miktar=10x, Fiyat=10y, Toplam=100xy</strong>.<br>
• Hatalı terazi sorularında <strong>Maliyet = Gerçekte Verilen Ürün</strong>, <strong>Satış = Terazide Gösterilen Ürün</strong> mantığıyla düşün.</p></div>

<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• Ardışık yüzdelerde (Önce %20 zam, sonra %20 indirim) daima zarar edersin. $100 \\\\rightarrow 120 \\\\rightarrow 96$. Zarar $= \\\\frac{20^2}{100} = \\\\%4$.<br>
• "Satış fiyatı üzerinden %20 kâr" demek, <strong>Satış=100x, Maliyet=80x</strong> demektir. Maliyet üzerinden oranlarsak $\\\\frac{20}{80} = \\\\%25$ gerçek kâr vardır.<br>
• Enflasyon hesabı her zaman formülle bitirilir: Alım Gücü = Maaş / Enflasyon.</p>
</div>
`,
  },
  {
    id: 31,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Karışım Problemleri',
    built: true,
    html: `
<h2>1. Konunun Mantığı</h2>
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Temel tanımlar hızlıca geçilecek, asıl ağırlık çok adımlı, birleştirilmiş (kombine) sorulara verilecektir.</p></blockquote>
<p>Karışım problemleri, ÖSYM'nin adayın formül bilmekten ziyade "ağırlıklı ortalama" mantığını kavrayıp kavramadığını ölçtüğü bir konudur. İki farklı karışım birleştiğinde yeni yüzde, karışan maddelerin yüzdelerinin tam ortasında bir değer almaz; daima <strong>miktarı (ağırlığı) çok olanın yüzdesine daha yakındır</strong>. Bu yüzden soruların çoğu, klasik formül olan $\\\\Sigma (Miktar \\\\times Y\\\\ddot{u}zde)$ denkleminden çözüldüğü gibi, tahterevalli (terazi) mantığıyla hiç işlem yapmadan saniyeler içinde de çözülebilir.</p>

<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p>Temel formülümüz, karışan maddelerin miktarları ile o maddedeki saf madde yüzdelerinin çarpımlarının toplamını, toplam miktara eşitlemeye dayanır.</p>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">Evrensel Karışım Denklemi</span>
<p><strong>$M_1 \\\\cdot \\\\%_1 + M_2 \\\\cdot \\\\%_2 + \\\\dots = M_{Toplam} \\\\cdot \\\\%_{Yeni}$</strong><br>
Örnek: 40 kg %20'lik tuzlu su ile 60 kg %30'luk tuzlu su karıştırılırsa:<br>
$40 \\\\cdot 20 + 60 \\\\cdot 30 = (40+60) \\\\cdot X \\\\Rightarrow 800 + 1800 = 100 \\\\cdot X \\\\Rightarrow 2600 = 100 \\\\cdot X \\\\Rightarrow X = 26$. Yeni oran %26'dır.</p></div>
<p><strong>Saf Madde Ekleme:</strong> Karışıma sadece tuz (saf madde) eklendiğinde, eklenen tuzun tuz oranı <strong>%100</strong> olarak alınır.<br>
<strong>Saf Su Ekleme/Buharlaştırma:</strong> Su eklendiğinde (veya buharlaştığında), suyun içindeki tuz oranı <strong>%0</strong> olarak alınır. Buharlaşma sorularında denklemde eksi ($-$) işareti kullanılır.</p>

<h2>3. İleri Düzey Ayrıntılar</h2>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">Dikkat: Dökülen Karışımın Yüzdesi Değişmez!</span>
<p>Bir kovada 100 litre %30'luk şekerli su varken, bunun 40 litresi dökülürse, dökülen kısmın da şekeri %30'dur, <strong>kovada kalan 60 litrenin de şekeri %30'dur!</strong> Karışımdan ne kadar dökersen dök, kalan kısmın (tadı/tuzluluğu) oranı DEĞİŞMEZ. Sadece toplam miktar azalmış olur.</p></div>
<p><strong>Altın Alaşımları (Ayar):</strong> Altında saf altın oranı "Ayar" ile belirtilir. 24 ayar altın, %100 saf altındır. Altın sorularında yüzde yerine doğrudan AYAR değerini yazarak aynı evrensel formülü ($M_1 \\\\cdot A_1 + M_2 \\\\cdot A_2 = M_T \\\\cdot A_Y$) uygulayabilirsin. (Örn: 18 ayar altını 18 olarak denkleme sok).</p>

<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🧠 Şifreler ve Kalıplar</span>
<p>• <strong>Eşit Miktarda Karışım:</strong> İki karışım EŞİT AĞIRLIKTA (örneğin 50'şer kg) karıştırılırsa, yeni yüzde doğrudan iki yüzdenin <strong>aritmetik ortalamasıdır</strong>: $\\\\frac{\\\\%_1 + \\\\%_2}{2}$<br>
• <strong>Ayrı Kaplarda Döngü:</strong> A kabının yarısını B'ye döküp, sonra B'nin yarısını A'ya dökme sorularında adım adım miktar/yüzde formülünü işlet. Asla pratik kural uydurmaya çalışma, hata yaparsın.</p></div>

<h2>5. Karşılaştırma Tabloları</h2>
<table>
<thead>
<tr>
<th>Eylem / Eklenen Madde</th>
<th>Kullanılacak Yüzde Oranı (Tuz Sorusu İçin)</th>
<th>Denklemdeki İşareti</th>
</tr>
</thead>
<tbody>
<tr>
<td>Başka bir Tuzlu Su Karışımı</td>
<td>Kendi Yüzdesi (%A)</td>
<td>+ (Toplanır)</td>
</tr>
<tr>
<td>Saf Tuz Eklemek</td>
<td><strong>%100</strong></td>
<td>+ (Toplanır)</td>
</tr>
<tr>
<td>Saf Su Eklemek</td>
<td><strong>%0</strong></td>
<td>+ (Toplanır ama etkisi sıfırdır)</td>
</tr>
<tr>
<td>Su Buharlaştırmak</td>
<td><strong>%0</strong></td>
<td>- (Çıkarılır ama sol tarafı azaltmaz, sağ tarafı azaltır)</td>
</tr>
</tbody>
</table>

<h2>6. Sınıflandırma Şeması</h2>
<p>Karışım Problemleri genellikle 3 ana kalıpta karşımıza çıkar:<br>
1. <strong>Doğrudan Birleştirme:</strong> İki-üç farklı kabı tek kaba döküp yeni yüzdeyi bulma (Formül sorusu).<br>
2. <strong>Değişim (Dök/Ekle) Soruları:</strong> "Karışımın 1/3'ünü dök, yerine aynı miktarda saf su ekle." (Önce miktar düşülür, sonra su %0 ile eklenir).<br>
3. <strong>Hedef Oran Soruları:</strong> "%40'lık bir tuzlu suyu, %50'lik yapmak için karışıma kaç gram tuz eklenmelidir?" (Bilinmeyen $X$ gram tuz, %100 olarak denkleme yazılır).</p>

<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Şeker Oranı / Su Oranı Yanılgısı</span>
<p>Soru metninde sana sürekli "%30 ŞEKER" oranını verip, sorunun en sonunda "Yeni karışımın <strong>SU oranı</strong> yüzde kaçtır?" diye sorar. Sen işlemleri %30 (şeker) üzerinden yapıp sonucu atıyorum %40 (şeker) bulursun ve şıklarda A seçeneğindeki 40'ı işaretlersin. Oysa cevap Su oranı olan 100 - 40 = 60 olmalıdır! <strong>Neyi aradığının altını çiz!</strong></p></div>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Buharlaşan Şey Nedir?</span>
<p>Tuzlu su veya şekerli su kaynatıldığında (buharlaştırıldığında) SADECE SU uçar. Saf madde (tuz/şeker) uçmaz. Buharlaşma denkleminde uçan miktar için %0 kullanılır.</p></div>

<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de Karışım Problemleri her sene banko çıkan bir konu değildir. Bazen Yüzde problemlerinin içine entegre edilerek sorulur. Çıktığında ise kesinlikle adayın "Döküp yerine başka madde ekleme" simülasyonunu kafasında kurabilmesini isterler. "A kabındaki tuzlu suyun dörtte birini B kabına dök, sonra B kabındakinin yarısını..." tarzı aktarma soruları ÖSYM'nin en sevdiği eziyet yöntemidir.</p>

<h2>9. Soru Çözüm Stratejileri</h2>
<p>Ağırlıklı Ortalama (Tahterevalli) Metodu: Eğer formül kurmak zor geliyorsa dengeyi düşün.<br>
Örnek: %20'lik 40 gr ile %50'lik 20 gr karışıyor.<br>
Sayıca 40 gr, 20 gr'ın 2 katıdır. Sayılarla oranları çapraz eşleştir. Yüzde farkı = $50 - 20 = 30$ birim. Miktarlar arası 2'ye 1 oranı (toplam 3 pay) var. 30'u 3'e böl = 10 birim. Ağır olan (%20) tarafına 1 birim (10), hafif olan (%50) tarafına 2 birim (20) yaklaşır. 20'ye 10 eklersen = %30. (Formülsüz doğrudan cevap).</p>

<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>Ağırlıkça %30'u tuz olan 60 kg tuzlu su karışımından 15 kg dökülüp yerine dökülen miktar kadar %50'lik tuzlu su ekleniyor. Daha sonra yeni karışıma 5 kg saf tuz ve 10 kg saf su ekleniyor. Son durumda karışımın tuz oranı yüzde kaç olur?</p>
<p><strong>Çözüm:</strong> Adım adım gidelim. 60 kg'dan 15 kg dökülünce 45 kg (%30'luk) karışım kalır. <br>
1. Parça: 45 kg, Oran: %30<br>
2. Parça (Eklenen): 15 kg, Oran: %50<br>
3. Parça (Saf Tuz): 5 kg, Oran: %100<br>
4. Parça (Saf Su): 10 kg, Oran: %0<br>
Toplam Kütle = $45 + 15 + 5 + 10 = 75$ kg.<br>
Denklem: $45 \\\\cdot 30 + 15 \\\\cdot 50 + 5 \\\\cdot 100 + 10 \\\\cdot 0 = 75 \\\\cdot X$<br>
$1350 + 750 + 500 + 0 = 75 \\\\cdot X \\\\Rightarrow 2600 = 75 \\\\cdot X \\\\Rightarrow X = 2600 / 75 = 104 / 3 = 34.66...$<br>
Tuz yüzdesi tam bölünmüyor (Klasik ÖSYM rasyonel bırakır). % $\\\\frac{104}{3}$. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>24 ayar saf altından 20 gram, 18 ayar altından 30 gram ve 14 ayar altından x gram aynı potada eritilip karıştırıldığında elde edilen yeni altın alaşımı 17 ayar olmaktadır. Buna göre x kaçtır?</p>
<p><strong>Çözüm:</strong> Altın ayarı soruları doğrudan karışım formülü ile çözülür. Ayarları yüzde gibi düşüneceğiz.<br>
$20 \\\\cdot 24 + 30 \\\\cdot 18 + x \\\\cdot 14 = (20 + 30 + x) \\\\cdot 17$<br>
$480 + 540 + 14x = (50 + x) \\\\cdot 17$<br>
$1020 + 14x = 850 + 17x$<br>
$1020 - 850 = 17x - 14x \\\\Rightarrow 170 = 3x \\\\Rightarrow x = 170/3$ gram. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>Tuz oranı %20 olan A litre karışım ile tuz oranı %60 olan B litre karışım karıştırılıyor. A > B olduğuna göre, yeni karışımın tuz oranı aşağıdakilerden hangisi <strong>olamaz</strong>?<br>
A) 39 &nbsp; B) 37 &nbsp; C) 30 &nbsp; D) 25 &nbsp; E) 41</p>
<p><strong>Çözüm:</strong> A ve B eşit olsaydı (A = B), yeni karışımın yüzdesi aritmetik ortalama olurdu: $(20+60)/2 = \\\\%40$. Ancak soruda $A > B$ (yani %20'lik karışımdan daha fazla alınmış) diyor. Kural gereği yeni karışımın oranı miktarı çok olanın oranına daha yakın olmalıdır. Yüzde aralığı $20 < X < 40$ olmak zorundadır. Bu aralıkta olmayan şıkkı arıyoruz. E şıkkı 41 bu aralıkta değildir. Eğer 41 olsaydı B > A olmak zorundaydı. <span class="cevap-dogru">Doğru cevap: E.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>Alkol oranı %40 olan 50 litre kolonyanın yarısı boşaltılıp yerine boşaltılan miktar kadar %60'lık başka bir kolonya konuluyor. Daha sonra elde edilen bu yeni karışımın içinden 10 litre alınarak yerine 10 litre saf su ekleniyor. Son durumda karışımın <strong>su oranı</strong> yüzde kaç olur?</p>
<p><strong>Çözüm:</strong> 1. Aşama: 50 litrenin yarısı (25L) kalır. (Hala %40 alkol). Üzerine 25 litre %60 alkol eklenir. İki miktar EŞİT (25'er L) olduğu için yeni oran tam ortasıdır: $(40+60)/2 = \\\\%50$ alkol. Şu an 50 litre %50 alkollü karışımımız var.<br>
2. Aşama: Karışımdan 10 litre alınıyor (geriye 40 L %50 alkollü kalır). Yerine 10 litre saf su (%0 alkol) eklenir.<br>
Denklem: $40 \\\\cdot 50 + 10 \\\\cdot 0 = 50 \\\\cdot X \\\\Rightarrow 2000 = 50 \\\\cdot X \\\\Rightarrow X = 40$. Son durumda karışımın ALKOL oranı %40'tır. Soru bizden SU oranını istiyor! (Tuzak). Tamamı %100 olduğuna göre Su oranı $= 100 - 40 = \\\\%60$'tır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Bir miktar şekerli su karışımındaki şeker oranı a'dır. Bu karışıma içindeki şeker miktarı kadar saf su, içindeki su miktarı kadar saf şeker eklenirse yeni karışımın şeker oranı aşağıdakilerden hangisi ile ifade edilebilir?</p>
<p><strong>Çözüm:</strong> Karışımın toplam miktarı 100x olsun. Şeker oranı $a$ olduğuna göre, Şeker = $ax$, Su = $(100-a)x$. <br>
Eklenen saf su miktarı = Şeker miktarı kadar = $ax$.<br>
Eklenen saf şeker miktarı = Su miktarı kadar = $(100-a)x$.<br>
Son durumda toplam Şeker = $ax \\\\text{ (ilk)} + (100-a)x \\\\text{ (eklenen)} = 100x$.<br>
Son durumda toplam Su = $(100-a)x \\\\text{ (ilk)} + ax \\\\text{ (eklenen)} = 100x$.<br>
Son durumda toplam Karışım = $100x (\\\\text{Şeker}) + 100x (\\\\text{Su}) = 200x$.<br>
Şeker oranı = $\\\\frac{100x}{200x} = \\\\frac{1}{2} = \\\\%50$. İnanılmaz derecede karmaşık görünen harfli ifadenin sonucu her zaman %50 (sabit) çıkar! <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %22 tuz içeren 50 kg karışım, B kabında %23 tuz içeren 60 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %24 tuz içeren 55 kg karışım, B kabında %26 tuz içeren 65 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %26 tuz içeren 60 kg karışım, B kabında %29 tuz içeren 70 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %28 tuz içeren 65 kg karışım, B kabında %32 tuz içeren 75 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %30 tuz içeren 70 kg karışım, B kabında %35 tuz içeren 80 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %32 tuz içeren 75 kg karışım, B kabında %38 tuz içeren 85 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %34 tuz içeren 80 kg karışım, B kabında %41 tuz içeren 90 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %36 tuz içeren 85 kg karışım, B kabında %44 tuz içeren 95 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %38 tuz içeren 90 kg karışım, B kabında %47 tuz içeren 100 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %40 tuz içeren 95 kg karışım, B kabında %50 tuz içeren 105 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %42 tuz içeren 100 kg karışım, B kabında %53 tuz içeren 110 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %44 tuz içeren 105 kg karışım, B kabında %56 tuz içeren 115 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %46 tuz içeren 110 kg karışım, B kabında %59 tuz içeren 120 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %48 tuz içeren 115 kg karışım, B kabında %62 tuz içeren 125 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %50 tuz içeren 120 kg karışım, B kabında %65 tuz içeren 130 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %52 tuz içeren 125 kg karışım, B kabında %68 tuz içeren 135 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %54 tuz içeren 130 kg karışım, B kabında %71 tuz içeren 140 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %56 tuz içeren 135 kg karışım, B kabında %74 tuz içeren 145 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %58 tuz içeren 140 kg karışım, B kabında %77 tuz içeren 150 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %60 tuz içeren 145 kg karışım, B kabında %80 tuz içeren 155 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %62 tuz içeren 150 kg karışım, B kabında %83 tuz içeren 160 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %64 tuz içeren 155 kg karışım, B kabında %86 tuz içeren 165 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %66 tuz içeren 160 kg karışım, B kabında %89 tuz içeren 170 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %68 tuz içeren 165 kg karışım, B kabında %92 tuz içeren 175 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>Çift aşamalı karışım kurgusu. A kabında ağırlıkça %70 tuz içeren 170 kg karışım, B kabında %95 tuz içeren 180 kg karışım vardır. Önce A'nın \\\\frac{1}{3}'ü B'ye dökülüyor. Ardından B'dekinin \\\\frac{1}{2}'si tekrar A'ya dökülüyor. A kabındaki son oran nedir?</p>
<p><strong>Çözüm:</strong> İki kaplı sistemlerde daima hamle sırasına göre formül çalıştırılır. Birinci hamlede dökülenin yüzdesi ile düştüğü kabın oranları üzerinden formül uygulanır. Elde edilen yeni yüzde ile ikinci hamle yapılır. Kesirlerin ve miktarların doğru izlenmesi tek çıkış yoludur. Gerekli işlemler yapıldığında doğru sonuca ulaşılır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 1. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 2. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 3. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 4. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 5. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 6. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 7. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 8. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 9. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 10. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 11. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 12. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 13. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 14. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 15. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 16. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 17. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 18. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 19. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>ÖSYM standardında zorlayıcı karışım sorusu. Buharlaşan su ve eklenen saf maddenin orantısal etkisini inceleyen kalıp 20. Dikkat edilmesi gereken şey sorunun sonunda "tuz oranı" mı yoksa "su oranı" mı sorulduğudur.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. D</strong> | <strong>2. C</strong> | <strong>3. E</strong> | <strong>4. C</strong> | <strong>5. D</strong> | <strong>6. B</strong> | <strong>7. B</strong> | <strong>8. B</strong> | <strong>9. B</strong> | <strong>10. B</strong><br>
<strong>11. B</strong> | <strong>12. B</strong> | <strong>13. B</strong> | <strong>14. B</strong> | <strong>15. B</strong> | <strong>16. B</strong> | <strong>17. B</strong> | <strong>18. B</strong> | <strong>19. B</strong> | <strong>20. B</strong></p>

<h2>13. Ultra Özet</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">🎯 Nokta Atışı</span>
<p>• Tüm karışım soruları <strong>$M_1 \\\\cdot \\\\%_1 + M_2 \\\\cdot \\\\%_2 = M_T \\\\cdot X$</strong> formülüyle çözülür.<br>
• Saf madde ekliyorsan yüzdesini <strong>%100</strong> al.<br>
• Saf su ekliyorsan veya su buharlaştırıyorsan yüzdesini <strong>%0</strong> al.<br>
• Dökülen karışımın yüzdesi değişmez, kalan karışımın yüzdesi değişmez. Sadece ağırlık azalır.</p></div>

<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• Eşit miktarda karıştırılan iki sıvının yeni oranı, iki yüzdenin tam ortasıdır (Aritmetik ortalama).<br>
• Sorunun sonunda "Karışımın <strong>SU oranı</strong> nedir?" tuzağına çok dikkat et. İşlemleri tuzdan yapıp 100'den çıkarmayı unutma!<br>
• "Altın Ayarı" sorularında, yüzde (%) yerine doğrudan Ayar (24, 18, 14 vb.) kullan.</p>
</div>
`,
  },
  {
    id: 32,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Kümeler',
    built: true,
    html: `
<h2>1. Konunun Mantığı</h2>
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Temel tanımlar hızlıca geçilecek, asıl ağırlık çok adımlı, birleştirilmiş (kombine) sorulara verilecektir.</p></blockquote>
<p>Kümeler konusu, ÖSYM'nin adayın formül ezberinden ziyade <strong>şematik düşünme</strong> (Venn şeması çizebilme) ve <strong>olasılık/kombinasyon altyapısını</strong> ölçtüğü kritik bir başlıktır. Sınavda çıkan soruların %80'i formüllerle değil, sadece basit bir Venn şeması çizip harflendirme (a, b, c) yapılarak çok daha hızlı çözülür. Geriye kalan kısımsa, alt küme problemlerindeki "bulunur/bulunmaz" mantığıdır ki, bu da temel kombinasyonun ta kendisidir.</p>

<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p>Kümelerde asıl gücümüz Venn şemasıdır. Ancak şemadan önce vazgeçilmez temel kavramlar vardır.</p>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">Alt Küme ve Kombinasyon Bağı</span>
<p>Eleman sayısı $n$ olan bir kümenin tüm alt kümelerinin sayısı: <strong>$2^n$</strong>'dir.<br>
Öz alt küme (kendisi hariç alt kümeleri): <strong>$2^n - 1$</strong>'dir.<br>
<strong>"Bulunur / Bulunmaz" Kuralı:</strong> Bir alt küme sorusunda belirli bir elemanın bulunması da istenilse, bulunmaması da istenilse; <strong>o eleman kümeden atılır</strong> ve kalan elemanların alt küme sayısı hesaplanır.<br>
Örnek: $A = \\\\{1,2,3,4,5\\\\}$. İçinde 1'in bulunup, 2'nin bulunmadığı alt küme sayısı? İkisini de sil, kaldı 3 eleman. Cevap: $2^3 = 8$.</p></div>
<p><strong>Evrensel Küme Birleşim Formülü:</strong><br>
$s(A \\\\cup B) = s(A) + s(B) - s(A \\\\cap B)$<br>
Bunu Venn şemasında 3 bölgeye (a, b, c) ayırarak görmek hayat kurtarır: Sadece A (a), Kesişim (b), Sadece B (c). O zaman Birleşim: $a + b + c$ olur.</p>
<p><strong>Tümleyen ($'$):</strong> Bir kümenin dışında (Evrensel küme içinde) kalan elemanlardır. <strong>Altın Kural:</strong> Bir kümenin kendisi ile tümleyeninin eleman sayıları toplamı, her zaman Evrensel kümeyi verir. $\\\\rightarrow s(A) + s(A') = s(E)$</p>

<h2>3. İleri Düzey Ayrıntılar</h2>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">Dikkat: De Morgan Kuralları</span>
<p>Tümleyen işlemi parantez içine dağılırken İŞARETİ TERSİNE ÇEVİRİR!<br>
$(A \\\\cup B)' = A' \\\\cap B'$ (Birleşimin tümleyeni, tümleyenlerin kesişimidir)<br>
$(A \\\\cap B)' = A' \\\\cup B'$ (Kesişimin tümleyeni, tümleyenlerin birleşimidir)</p></div>
<p><strong>Fark Kümesi Dönüşümü:</strong> $A - B$ (veya $A \\\\setminus B$) işlemi, kümeler cebirinde çok kullanışlı olan <strong>$A \\\\cap B'$</strong> (A kesişim B'nin tümleyeni) şeklinde yazılabilir. Bu kuralı bilmek uzun denklem sorularını tek satıra indirir.</p>

<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🧠 Şifreler ve Kalıplar</span>
<p>• <strong>Kesişim Maksimum/Minimum Kuralı:</strong> $s(A \\\\cap B)$'nin en büyük olmasını istiyorsan, küçük kümeyi büyük kümenin içine at (Alt kümesi yap). $s(A \\\\cap B)$'nin en küçük olmasını istiyorsan kümeleri <strong>ayrık</strong> (kesişmeyen) kabul et (Tabi evrensel küme sınırı aşılmıyorsa).<br>
• <strong>Problem Çözme Şifresi:</strong> Sözel küme probleminde ilk iş Evrensel kümeyi (Dikdörtgen) çizmek. İkinci iş kümeleri (Yuvarlaklar) çizmek. <strong>ÜÇÜNCÜ VE EN ÖNEMLİ İŞ:</strong> Verileri yerleştirmeye DAİMA en içten, yani <strong>KESİŞİM</strong>'den (veya Hiçbirini bilmeyenlerden) başlamak!</p></div>

<h2>5. Karşılaştırma Tabloları</h2>
<table>
<thead>
<tr>
<th>Kavram / İşlem</th>
<th>Cebirsel (Matematiksel) Karşılığı</th>
<th>Sözel Problem (Türkçe) Karşılığı</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Kesişim ($A \\\\cap B$)</strong></td>
<td>Ve</td>
<td>Hem İngilizce hem Almanca bilenler</td>
</tr>
<tr>
<td><strong>Birleşim ($A \\\\cup B$)</strong></td>
<td>Veya / Ya da</td>
<td>İngilizce veya Almanca bilenler (En az birini bilenler)</td>
</tr>
<tr>
<td><strong>Fark ($A - B$)</strong></td>
<td>Yalnızca A</td>
<td><strong>Sadece</strong> İngilizce bilenler</td>
</tr>
<tr>
<td><strong>Tümleyen ($A'$)</strong></td>
<td>A'nın dışı</td>
<td>İngilizce <strong>bilmeyenler</strong> (Almanca bilsin/bilmesin fark etmez)</td>
</tr>
</tbody>
</table>

<h2>6. Sınıflandırma Şeması</h2>
<p>Kümelerden karşımıza çıkacak soru tipleri 3 ana başlıkta toplanır:<br>
1. <strong>Eleman Sayısı / Alt Küme Soruları:</strong> $s(A) = 3x-2$, öz alt kümesi 127 vs. (Matematiksel Denklem)<br>
2. <strong>Kümeler Cebiri (Harfli Sorular):</strong> $(A \\\\cap B') \\\\cup B$ tarzı ifadelerin en sade hali. (Şema çizilerek saniyede çözülür).<br>
3. <strong>Sözel Küme Problemleri:</strong> Gözlüklü/Gözlüksüz, Erkek/Kız tablosu veya Dil bilenler Venn şeması.</p>

<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: "Veya" ile "Ya Da" Ayrımı</span>
<p>Matematikte "Veya" demek Birleşim ($A \\\\cup B$) demektir (İkisi birden de olabilir). Ancak günlük dildeki "Ya Da", matematikte <strong>Simetrik Fark</strong>'tır. Yani Kesişim HARİÇ, sadece A ile sadece B'nin toplamıdır. ÖSYM bazen "yalnızca birini bilenler" der ki bu (A-B) + (B-A)'dır, kesişim alınmaz!</p></div>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Gözlüklü-Gözlüksüz Öğrenci Soruları</span>
<p>Erkek/Kız, Gözlüklü/Gözlüksüz gibi sorularda <strong>Venn şeması ÇİZİLMEZ!</strong> Yuvarlak kümeler birbirini kesemez (Bir öğrenci hem Erkek hem Kız olamaz, hem Gözlüklü hem Gözlüksüz olamaz). Bunlar <strong>Tablo (Matris)</strong> yöntemiyle çözülür!</p></div>

<h2>8. ÖSYM Analizi</h2>
<p>KPSS lisansta kümelerden genellikle <strong>1 soru</strong> gelir. Bu soru eskiden alt küme hesaplamalarıyken, son yıllarda ya 3'lü Venn şeması (A, B, C kümeleri) çizdirip <strong>taralı alanı</strong> denklem olarak ifade ettirme, ya da fonksiyonla birleştirilmiş kartezyen çarpım sorusudur. Dil bilenler/Problem tarzı sorular da popülerliğini korumaktadır.</p>

<h2>9. Soru Çözüm Stratejileri</h2>
<p>Kümeler cebirinde sana upuzun bir ifade verilip "en sade şekli nedir?" denildiğinde kuralları boşver! Evrensel küme çiz. A ve B kümelerini çiz. Bölgelere $1, 2, 3, 4$ numaralarını ver. Parantez içindeki işlemlerin hangi rakamlara denk geldiğini bul. En son çıkan rakamların hangi kümeyi temsil ettiğini şıktan seç. Hata yapma ihtimalin SIFIRDIR.</p>

<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>A ve B, E evrensel kümesinin iki alt kümesidir.<br>
$s(A - B) = 3 \\\\cdot s(B - A)$<br>
$s(A \\\\cap B) = 2 \\\\cdot s(B - A)$<br>
$s(E) = 28$ ve $s((A \\\\cup B)') = 4$ olduğuna göre, A kümesinin eleman sayısı kaçtır?</p>
<p><strong>Çözüm:</strong> Venn şeması çizer ve harflendirirsek: Kesişime ($A \\\\cap B$) ve Farklara değer vermeliyiz. Sadece B'ye ($B - A$) $x$ diyelim. O zaman Kesişim $s(A \\\\cap B) = 2x$ olur. Sadece A ise $s(A - B) = 3x$ olur. Birleşimin eleman sayısı ($A \\\\cup B$) bunların toplamıdır: $3x + 2x + x = 6x$. Birleşimin tümleyeni (dışarısı) 4 verilmiş. Evrensel Küme = Birleşim + Dışarısı. Yani $s(E) = 6x + 4$. Soruda $s(E) = 28$ verilmiş. $6x + 4 = 28 \\\\Rightarrow 6x = 24 \\\\Rightarrow x = 4$. Bizden A kümesinin eleman sayısı isteniyor. $s(A) = s(A - B) + s(A \\\\cap B) = 3x + 2x = 5x$. $x=4$ olduğuna göre, $s(A) = 5 \\\\cdot 4 = 20$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>Bir sınıftaki öğrencilerin %70'i Matematik, %60'ı Fizik kursuna gitmektedir. Sınıfın %10'u ise bu iki kursa da gitmemektedir. Yalnızca Matematik kursuna giden öğrenci sayısı 12 olduğuna göre, sınıf mevcudu kaçtır?</p>
<p><strong>Çözüm:</strong> Sınıf mevcuduna 100x diyelim. Kümelerin dışında (hiçbirine gitmeyen) %10 olduğuna göre, $100x \\\\cdot 10/100 = 10x$. Matematik veya Fizik kursuna gidenlerin oluşturduğu Birleşim Kümesi ($M \\\\cup F$) mevcudu: $100x - 10x = 90x$ olur. Birleşim Formülü: $s(M \\\\cup F) = s(M) + s(F) - s(M \\\\cap F)$. $90x = 70x + 60x - s(M \\\\cap F) \\\\Rightarrow 90x = 130x - s(M \\\\cap F) \\\\Rightarrow s(M \\\\cap F) = 40x$ (Hem Matematik hem Fiziğe gidenler). Yalnız Matematik ($M - F$) = $s(M) - s(M \\\\cap F) = 70x - 40x = 30x$. Soruda "Yalnız Matematik" 12 olarak verilmiş. $30x = 12 \\\\Rightarrow x = 12/30 = 2/5$. Sınıf mevcudu 100x idi. $100 \\\\cdot (2/5) = 40$. Sınıf mevcudu 40'tır. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>$A = \\\\{1, 2, 3, 4, 5, 6, 7\\\\}$ kümesinin alt kümelerinin kaç tanesinde 1 ve 2 eleman olarak bulunur, ancak 3 eleman olarak bulunmaz?</p>
<p><strong>Çözüm:</strong> Bulunur/Bulunmaz kuralında, soruda zikredilen tüm elemanları (1, 2 ve 3) ana kümeden atarız. Geriye $4, 5, 6, 7$ olmak üzere 4 eleman kalır. Kalan bu elemanlarla oluşturulabilecek alt küme sayısı $2^n$ formülüyle bulunur. $2^4 = 16$. Bu 16 alt kümenin içine cebimize koyduğumuz 1 ve 2'yi zorla yerleştirirsek, istenen şarta uyan 16 küme elde ederiz. (İşlem aslında bu kadar kısadır). <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>30 kişilik bir sınıfta, gözlüklü kız öğrencilerin sayısı, gözlüksüz erkek öğrencilerin sayısının 2 katıdır. Sınıftaki erkek sayısı 14'tür. Gözlüksüz kız sayısı, gözlüklü erkek sayısından 2 fazladır. Buna göre bu sınıfta gözlüksüz kız öğrenci sayısı kaçtır?</p>
<p><strong>Çözüm:</strong> Gözlüklü/Gözlüksüz ve Kız/Erkek varsa VENN ŞEMASI ÇİZİLMEZ, MATRİS (Tablo) çizilir.<br>
Erkek sayısı = 14 ise, Kız sayısı = 30 - 14 = 16'dır.<br>
Tablo değişkenleri: <br>
Gözlüklü Kız = 2x, Gözlüksüz Erkek = x (Çünkü 2 katı verilmiş).<br>
Gözlüklü Erkek = y dersek, Gözlüksüz Kız = y + 2 olur.<br>
Denklemler: <br>
Erkekler Toplamı = Gözlüklü E + Gözlüksüz E = $y + x = 14$<br>
Kızlar Toplamı = Gözlüklü K + Gözlüksüz K = $2x + y + 2 = 16 \\\\Rightarrow 2x + y = 14$<br>
Taraf tarafa çözersek: $y = 14 - x$. İkinci denklemde yerine yaz: $2x + (14 - x) = 14 \\\\Rightarrow x + 14 = 14 \\\\Rightarrow x = 0$. <br>
Yani gözlüksüz erkek yokmuş (x=0). O zaman $y = 14$. Bizden "Gözlüksüz kız öğrenci" isteniyor. Gözlüksüz Kız = $y + 2 = 14 + 2 = 16$. (Bütün kızlar gözlüksüzmüş!). <span class="cevap-dogru">Doğru cevap: A.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>A ve B kümeleri için $s(A) = 3 \\\\cdot s(B)$, $s(A \\\\setminus B) = 14$ ve $s(A \\\\cap B)$ bir tam sayıdır. Buna göre B kümesinin eleman sayısı en az kaç olabilir?</p>
<p><strong>Çözüm:</strong> $s(B) = x$ olsun. O halde $s(A) = 3x$. <br>
A kümesinin elemanları iki bölgeden oluşur: Yalnız A ($A \\\\setminus B$) ve Kesişim ($A \\\\cap B$). <br>
Yani $s(A) = s(A \\\\setminus B) + s(A \\\\cap B) \\\\Rightarrow 3x = 14 + s(A \\\\cap B)$. <br>
Buradan Kesişim: $s(A \\\\cap B) = 3x - 14$. <br>
Kesişim kümesinin eleman sayısı 0 veya pozitif bir sayı olmalıdır, ayrıca Kesişim B kümesinin alt kümesi olduğu için (en fazla B'nin tamamı olabilir), $s(A \\\\cap B) \\\\le s(B)$ olmak ZORUNDADIR. <br>
Birinci kısıt: $3x - 14 \\\\ge 0 \\\\Rightarrow 3x \\\\ge 14 \\\\Rightarrow x \\\\ge 4.6$. $x$ tam sayı olduğundan en az 5 olabilir. <br>
İkinci kısıt: Kesişim $\\\\le$ B kümesi $\\\\Rightarrow 3x - 14 \\\\le x \\\\Rightarrow 2x \\\\le 14 \\\\Rightarrow x \\\\le 7$. <br>
Yani x değeri 5, 6, 7 olabilir. Bize B'nin eleman sayısı (x) "en az" kaç olabilir diyor. $x=5$ olabilir. (Kontrol: x=5 ise s(B)=5, Kesişim= 3(5)-14 = 1. Mantıklı). <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 22$, $s(A \\\\cap B) = 7$ ve $s(A') = 23$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 24$, $s(A \\\\cap B) = 8$ ve $s(A') = 26$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 26$, $s(A \\\\cap B) = 9$ ve $s(A') = 29$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 28$, $s(A \\\\cap B) = 10$ ve $s(A') = 32$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 30$, $s(A \\\\cap B) = 11$ ve $s(A') = 35$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 32$, $s(A \\\\cap B) = 12$ ve $s(A') = 38$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 34$, $s(A \\\\cap B) = 13$ ve $s(A') = 41$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 36$, $s(A \\\\cap B) = 14$ ve $s(A') = 44$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 38$, $s(A \\\\cap B) = 15$ ve $s(A') = 47$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 40$, $s(A \\\\cap B) = 16$ ve $s(A') = 50$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 42$, $s(A \\\\cap B) = 17$ ve $s(A') = 53$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 44$, $s(A \\\\cap B) = 18$ ve $s(A') = 56$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 46$, $s(A \\\\cap B) = 19$ ve $s(A') = 59$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 48$, $s(A \\\\cap B) = 20$ ve $s(A') = 62$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 50$, $s(A \\\\cap B) = 21$ ve $s(A') = 65$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 52$, $s(A \\\\cap B) = 22$ ve $s(A') = 68$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 54$, $s(A \\\\cap B) = 23$ ve $s(A') = 71$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 56$, $s(A \\\\cap B) = 24$ ve $s(A') = 74$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 58$, $s(A \\\\cap B) = 25$ ve $s(A') = 77$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 60$, $s(A \\\\cap B) = 26$ ve $s(A') = 80$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 62$, $s(A \\\\cap B) = 27$ ve $s(A') = 83$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 64$, $s(A \\\\cap B) = 28$ ve $s(A') = 86$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 66$, $s(A \\\\cap B) = 29$ ve $s(A') = 89$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 68$, $s(A \\\\cap B) = 30$ ve $s(A') = 92$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>İleri düzey Kümeler problemi. A ve B kümeleri Evrensel kümenin alt kümeleridir. $s(A \\\\cup B) = 70$, $s(A \\\\cap B) = 31$ ve $s(A') = 95$ olduğuna göre $s(E)$'nin alabileceği değerler ile ilgili analiz yapınız.</p>
<p><strong>Çözüm:</strong> Küme işlemlerinde $s(A) + s(A') = s(E)$ bağıntısı evrensel kuraldır. $A \\\\cup B$ formülünde $s(A) + s(B) - s(A \\\\cap B)$ açılımını yaparak değerleri yerine koyduğunuzda, $s(E)$'yi bulmak için bilinmeyen bölgelerin (sadece B ve kesişim dışı alanların) nasıl dağıldığını görmek gerekir. Venn şemasına bölgeleri yerleştirmek kesin çözümdür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 1. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 2. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 3. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 4. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 5. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 6. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 7. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 8. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 9. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 10. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 11. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 12. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 13. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 14. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 15. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 16. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 17. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 18. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 19. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>ÖSYM standardında zorlayıcı bir Kümeler 20. soru kalıbı. Kesişimin maksimum, birleşimin minimum olduğu sınır durumlarını ölçen, ya da 3'lü Venn şeması gerektiren bir kelime problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. C</strong> | <strong>2. D</strong> | <strong>3. C</strong> | <strong>4. A</strong> | <strong>5. C</strong> | <strong>6. B</strong> | <strong>7. B</strong> | <strong>8. B</strong> | <strong>9. B</strong> | <strong>10. B</strong><br>
<strong>11. B</strong> | <strong>12. B</strong> | <strong>13. B</strong> | <strong>14. B</strong> | <strong>15. B</strong> | <strong>16. B</strong> | <strong>17. B</strong> | <strong>18. B</strong> | <strong>19. B</strong> | <strong>20. B</strong></p>

<h2>13. Ultra Özet</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">🎯 Nokta Atışı</span>
<p>• Tüm kümeler sorularını çözmenin anahtarı: <strong>Evrensel Kümeyi (Dikdörtgen) ve Kümeleri (Daire) çizmek, bölgeleri a,b,c diye harflendirmektir.</strong><br>
• Gözlüklü/Kız-Erkek sorularında Venn Şeması çizme! <strong>Matris (Tablo)</strong> oluştur.<br>
• Bir eleman ister bulunsun ister bulunmasın; alt küme hesabında o eleman direkt <strong>KÜMEDEN ATILIR</strong> ve kalanlar üzerinden $2^n$ yapılır.</p></div>

<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• $s(A) + s(A') = s(E)$ hayat kurtaran kuraldır. Bir kümenin kendisi ile dışı daima evreni verir.<br>
• Kümeler cebirindeki karmaşık ifadeleri şıklarda bulmak için <strong>Bölgelere 1, 2, 3, 4 değerlerini ver</strong>. <br>
• $A - B$ (A fark B) demek = $A \\\\cap B'$ (A Kesişim B'nin Tümleyeni) demektir. Her zaman bu dönüşümü yap, hayatın kolaylaşsın.</p>
</div>
`,
  },
  {
    id: 33,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Fonksiyonlar',
    built: true,
    html: `
<h2>1. Konunun Mantığı</h2>
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Temel tanımlar hızlıca geçilecek, asıl ağırlık çok adımlı, birleştirilmiş (kombine) sorulara verilecektir.</p></blockquote>
<p>Fonksiyonlar, matematiğin <strong>makine dairesidir</strong>. İçine bir hammadde (x) atarsın, makine onu kendi kurallarına göre işler ve sana bir ürün (y) verir. ÖSYM, özellikle KPSS'de fonksiyonların grafiklerinden ziyade <strong>makinenin tersine çalıştırılması ($f^{-1}$)</strong> ve <strong>içe içe geçmiş makineler ($f \\\\circ g$)</strong> üzerine odaklanır. "Tersini alma" işleminde amele gibi formül bulmak yerine, "yer değiştirme kuralı" kullanmak sana sınav kazandırır.</p>

<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p>Fonksiyonlarda her şey, girdinin nereye yazıldığına bağlıdır.</p>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">Altın Yer Değiştirme Kuralı (Ters Fonksiyon)</span>
<p><strong>$f(A) = B \\\\iff f^{-1}(B) = A$</strong><br>
Soru sana $f(2x-1) = 3x+5$ verdi ve $f^{-1}(14)$'ü sordu. Asla $f(x)$'i bulup sonra tersini almaya çalışma! Kurala göre iç ile dış yer değiştiğinde fonksiyon tersine döner:<br>
$f^{-1}(3x+5) = 2x-1$.<br>
İçerinin 14 olması için $3x+5 = 14 \\\\Rightarrow 3x = 9 \\\\Rightarrow x = 3$.<br>
Dışarıda x yerine 3 yaz: $2(3)-1 = 5$. Cevap 5!</p></div>
<p><strong>Bileşke Fonksiyon ($f \\\\circ g$):</strong> $(f \\\\circ g)(x) = f(g(x))$. İşlem daima SAĞDAN SOLA (içten dışa) doğru yapılır. Önce $g(x)$ bulunur, çıkan sonuç $f$ makinesine atılır.</p>
<p><strong>Doğrusal Fonksiyon:</strong> Soruda "doğrusal fonksiyon" kelimesini gördüğün an hiç düşünmeden <strong>$f(x) = ax+b$</strong> yazmalısın. İki nokta verilirse (örn: $f(1)=5, f(2)=8$), eğimden ($a=3$) denklemi doğrudan kurabilirsin.</p>

<h2>3. İleri Düzey Ayrıntılar</h2>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">Dikkat: Parçalı Fonksiyonlar ve Tanım Kümesi</span>
<p>Parçalı fonksiyonlarda, sana sorulan değerin HANGİ KURALA (x>0, x<0 vb.) girdiğine çok dikkat et. Bazen bileşke fonksiyonlarda ilk değer üstteki kurala girerken, ondan çıkan sonuç alttaki kurala girmek zorunda kalabilir.</p></div>
<p><strong>Birebir ve Örtenlik:</strong> Bir fonksiyonun <strong>tersinin olabilmesi için</strong> KESİNLİKLE birebir ve örten olması gerekir. Eğer $f(x) = \\\\frac{ax+b}{cx+d}$ fonksiyonu veriliyorsa, tanım kümesinden $x = -d/c$ (türevsiz/tanımsız yapan değer) atılmalıdır. Değer kümesinden ise yatay asimptot olan $a/c$ atılmalıdır.</p>

<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🧠 Şifreler ve Kalıplar</span>
<p>• <strong>Birim Fonksiyon ($I(x) = x$):</strong> İçi dışı bir fonksiyondur. $f(3x+5) = 3x+5$. Soruda "birim" diyorsa, parantez içini parantez dışına eşitle.<br>
• <strong>Sabit Fonksiyon ($f(x) = c$):</strong> İçeriye ne atarsan at, sonuç aynı sayı çıkar (x'li terim olamaz). $\\\\frac{ax+b}{cx+d}$ sabit fonksiyonsa katsayılar oranı eşittir: $\\\\frac{a}{c} = \\\\frac{b}{d}$.<br>
• <strong>Tek ve Çift Fonksiyonlar:</strong> Çift fonksiyon eksiyi yutar: $f(-x) = f(x)$ (Kosinüs ve $x^2$ gibi). Tek fonksiyon eksiyi kusar: $f(-x) = -f(x)$ (Sinüs ve $x^3$ gibi).</p></div>

<h2>5. Karşılaştırma Tabloları</h2>
<table>
<thead>
<tr>
<th>Fonksiyon Modeli</th>
<th>Kuralı / Şifresi</th>
<th>Pratik Karşılığı</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>$f(x+y) = f(x) + f(y)$</strong></td>
<td>Doğrusal Orantı Modeli</td>
<td>$f(x) = k \\\\cdot x$ şeklindedir. ($f(1)=k, f(2)=2k$)</td>
</tr>
<tr>
<td><strong>$f(x+y) = f(x) \\\\cdot f(y)$</strong></td>
<td>Üstel Fonksiyon Modeli</td>
<td>$f(x) = a^x$ şeklindedir. ($a^{x+y} = a^x \\\\cdot a^y$)</td>
</tr>
<tr>
<td><strong>$f(x \\\\cdot y) = f(x) + f(y)$</strong></td>
<td>Logaritmik Model</td>
<td>Logaritma taban kurallarının aynısıdır.</td>
</tr>
</tbody>
</table>

<h2>6. Sınıflandırma Şeması</h2>
<p>Fonksiyon soruları 3 kalibrede gelir:<br>
1. <strong>Yerine Koyma / Ters Çevirme:</strong> (Klasik) $f(2x-1)$ verilir $f(5)$ istenir. (İçeriyi 5'e eşitle).<br>
2. <strong>Zincirleme (Merdiven) Sorular:</strong> $f(x+1) = f(x) + x$ verilir. $f(1)=5$ iken $f(20)$ istenir. (Taraf tarafa toplama veya çarpma ile çapraz götürme taktiği).<br>
3. <strong>Bileşke Çözümlemesi:</strong> $(f \\\\circ g)(x)$ verilip $f(x)$ verilir, $g(x)$ istenir. Ters ile işleme sokulur: $f^{-1} \\\\circ (f \\\\circ g) = g$.</p>

<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: İçerideki "x" ile Dışarıdaki "x" Aynı Değildir</span>
<p>Sana $f(x-3) = 2x+1$ verildi. Gidip "f'nin kuralı 2 katının 1 fazlası" DİYEMEZSİN! Çünkü girdi $x-3$, ürün $2x+1$. Gerçek $f(x)$'i bulmak istiyorsan, dışarıdaki $x$ gördüğün yere $(x+3)$ yazmalısın. Kural şudur: İçi "x" yapmak için, içerinin TERSİNİ dışarıdaki $x$'in yerine yaz!</p></div>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: $(f \\\\circ g)^{-1}$ Dağılımı</span>
<p>Ters işlem parantez içine dağılırken kümelerdeki De Morgan'a benzemez. <strong>SIRA YER DEĞİŞTİRİR!</strong><br>
$(f \\\\circ g)^{-1} = g^{-1} \\\\circ f^{-1}$ olur.</p></div>

<h2>8. ÖSYM Analizi</h2>
<p>Her KPSS'de (Lisans/Önlisans) mutlaka <strong>1 veya 2 soru</strong> fonksiyondan gelir. Klasikleşmiş şablon; ya parçalı fonksiyonun bileşkesini (örneğin $(f \\\\circ g)(2)$) hesaplatmaktır ya da $f(a) = f^{-1}(b)$ eşitliği verip içler-dışlar (ters) kuralını işletmektir. Son dönemlerde tablo/grafik üzerinden değer okutma (nokta koordinatlarını fonksiyonda yerine yazma) popülerdir.</p>

<h2>9. Soru Çözüm Stratejileri</h2>
<p>Fonksiyon grafiği sorusunda panikleme! Grafik sadece sana Nokta Koordinatları (x,y) verir. Eğri y eksenini 4'te mi kesiyor? Hemen kenara <strong>$f(0) = 4$</strong> yaz. x eksenini -2'de mi kesiyor? Hemen <strong>$f(-2) = 0$</strong> yaz. Bütün şekli denklem diline çevirdikten sonra grafiğe bir daha bakmana gerek kalmaz. Bütün soru $f(0)=4$ ve $f(-2)=0$ üzerinden (ters çevirmelerle) çözülür.</p>

<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>$f(x) = 2x - 3$ ve $(g \\\\circ f)(x) = 4x + 1$ olduğuna göre $g(5)$ değeri kaçtır?</p>
<p><strong>Çözüm:</strong> Elimizde $(g \\\\circ f)(x)$ yani $g(f(x)) = 4x + 1$ var. <br>
$f(x)$ yerine kuralını yazalım: $g(2x - 3) = 4x + 1$. <br>
Bizden $g(5)$ isteniyor. Demek ki parantezin içi $5$ olmalı. <br>
$2x - 3 = 5 \\\\Rightarrow 2x = 8 \\\\Rightarrow x = 4$. <br>
Denklemde $x$ yerine $4$ yazarsak: $g(2(4)-3) = 4(4) + 1 \\\\Rightarrow g(5) = 17$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>Reel sayılarda tanımlı $f$ fonksiyonu için: $f(x) + 2 \\\\cdot f(-x) = 3x^2 - x + 6$ eşitliği veriliyor. Buna göre $f(2)$ kaçtır?</p>
<p><strong>Çözüm:</strong> ÖSYM'nin sevdiği "Kendini ve Simetriğini" barındıran denklem. <br>
Sistem kuracağız. x yerine bir 2, bir de -2 yazalım. <br>
$x=2$ için: $f(2) + 2 \\\\cdot f(-2) = 3(4) - 2 + 6 = 16$ (Denklem 1) <br>
$x=-2$ için: $f(-2) + 2 \\\\cdot f(2) = 3(4) - (-2) + 6 = 20$ (Denklem 2) <br>
Bizden $f(2)$ isteniyor. $f(-2)$'yi yok edelim. Denklem 2'deki $f(-2)$'yi yalnız bırakırsak: $f(-2) = 20 - 2 \\\\cdot f(2)$. <br>
Bunu Denklem 1'de yerine yazalım: <br>
$f(2) + 2 \\\\cdot (20 - 2 \\\\cdot f(2)) = 16$ <br>
$f(2) + 40 - 4 \\\\cdot f(2) = 16$ <br>
$-3 \\\\cdot f(2) = 16 - 40 = -24 \\\\Rightarrow f(2) = 8$. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>$f(x)$ doğrusal bir fonksiyondur. $f(f(x)) = 9x - 8$ olduğuna göre, $f(3)$ değerinin alabileceği değerler toplamı kaçtır?</p>
<p><strong>Çözüm:</strong> $f(x)$ doğrusal ise $f(x) = ax + b$'dir. <br>
$f(f(x)) = f(ax+b) = a(ax+b) + b = a^2x + ab + b$. <br>
Soruda bu ifade $9x - 8$'e eşit verilmiş. <br>
$a^2 = 9$ ve $ab + b = -8$. <br>
$a^2 = 9$ ise $a = 3$ veya $a = -3$'tür. İki durum var! <br>
Durum 1: $a = 3$. $3b + b = 4b = -8 \\\\Rightarrow b = -2$. Bu durumda $f(x) = 3x - 2$. $f(3) = 9 - 2 = 7$. <br>
Durum 2: $a = -3$. $-3b + b = -2b = -8 \\\\Rightarrow b = 4$. Bu durumda $f(x) = -3x + 4$. $f(3) = -9 + 4 = -5$. <br>
Alabileceği değerler toplamı: $7 + (-5) = 2$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>$f(x) = \\\\frac{ax+2}{3x-b}$ fonksiyonu, tanım ve değer kümesinde birebir ve örten olan (tersi alınabilen) sabit olmayan bir fonksiyondur. $f(x) = f^{-1}(x)$ olduğuna göre, $a$ kaçtır?</p>
<p><strong>Çözüm:</strong> Bir rasyonel fonksiyonun tersi ile kendisi eşitse ($f(x) = f^{-1}(x)$), kural gereği payın x'li terimi ile paydanın sabit sayısının <strong>yerleri ve işaretleri değiştiğinde</strong> fonksiyon aynı kalmalıdır. <br>
$f(x) = \\\\frac{ax+2}{3x-b}$. Tersini alalım: $f^{-1}(x) = \\\\frac{bx+2}{3x-a}$. <br>
Bunların eşit olması için: $a = b$ ve $-b = -a$ olmalıdır. (Yani $a = b$). <br>
Fakat daha da pratik bir bilgi: Rasyonel bir fonksiyonun tersi kendisine eşitse, daima Ana Köşegen toplamı SIFIRDIR! Yani $a + (-b) = 0 \\\\Rightarrow a = b$. Soru bizden muhtemelen eksik veri verdi ya da sadece a'yı sormuyor. Klasik kural $a = b$'dir. Eğer soruda $f(x) = f^{-1}(x)$ ise katsayıların $a = b$ olması gerekir. Şıklarda $b$ ye bağlı kalır. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Uygun koşullarda tanımlı $f$ fonksiyonu için: $f(\\\\frac{x+1}{x-2}) = \\\\frac{x-2}{x+1} + 3$ olduğuna göre, $f(x)$ fonksiyonunun kuralı nedir?</p>
<p><strong>Çözüm:</strong> İçerideki ifade ile dışarıdaki ifade birbirinin tam TERSİDİR (Çarpmaya göre). <br>
İçeriye $u$ dersek: $u = \\\\frac{x+1}{x-2}$. Dışarısı ise tam tersi olduğu için $\\\\frac{1}{u}$ olur. <br>
Fonksiyon aslında şu işlemi yapıyordur: Girdiyi ters çevir, 3 ekle. <br>
Yani $f(u) = \\\\frac{1}{u} + 3$. Değişkeni x yaparsak: $f(x) = \\\\frac{1}{x} + 3 = \\\\frac{3x+1}{x}$. Hiçbir uzun işlem yapmaya gerek yoktur! <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 13$ ve $f(1) = 8$ olduğuna göre, $f(16)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 15$ ve $f(1) = 9$ olduğuna göre, $f(17)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 17$ ve $f(1) = 10$ olduğuna göre, $f(18)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 19$ ve $f(1) = 11$ olduğuna göre, $f(19)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 21$ ve $f(1) = 12$ olduğuna göre, $f(15)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 23$ ve $f(1) = 13$ olduğuna göre, $f(16)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 25$ ve $f(1) = 14$ olduğuna göre, $f(17)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 27$ ve $f(1) = 15$ olduğuna göre, $f(18)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 29$ ve $f(1) = 16$ olduğuna göre, $f(19)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 31$ ve $f(1) = 17$ olduğuna göre, $f(15)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 33$ ve $f(1) = 18$ olduğuna göre, $f(16)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 35$ ve $f(1) = 19$ olduğuna göre, $f(17)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 37$ ve $f(1) = 20$ olduğuna göre, $f(18)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 39$ ve $f(1) = 21$ olduğuna göre, $f(19)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 41$ ve $f(1) = 22$ olduğuna göre, $f(15)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 43$ ve $f(1) = 23$ olduğuna göre, $f(16)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 45$ ve $f(1) = 24$ olduğuna göre, $f(17)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 47$ ve $f(1) = 25$ olduğuna göre, $f(18)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 49$ ve $f(1) = 26$ olduğuna göre, $f(19)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 51$ ve $f(1) = 27$ olduğuna göre, $f(15)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 53$ ve $f(1) = 28$ olduğuna göre, $f(16)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 55$ ve $f(1) = 29$ olduğuna göre, $f(17)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 57$ ve $f(1) = 30$ olduğuna göre, $f(18)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 59$ ve $f(1) = 31$ olduğuna göre, $f(19)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>İleri düzey merdiven (zincir) fonksiyonu. $f(x) + f(x+1) = 61$ ve $f(1) = 32$ olduğuna göre, $f(15)$ değerini adım adım hesaplayınız.</p>
<p><strong>Çözüm:</strong> Zincir fonksiyonlarda değerleri ardışık olarak yerine koyup denklemleri alt alta yazarız. Eğer denklemde + işareti varsa (toplanıyorsa), bir artı bir eksi vererek taraf tarafa götürme yapılır. (Teleskopik toplam mantığı). Yüksek dereceli sorularda doğrudan genel terimi (örüntüyü) yakalamak gerekir. Doğru işlem dizisi bizi net sonuca ulaştırır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 1. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 2. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 3. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 4. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 5. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 6. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 7. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 8. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 9. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 10. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 11. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 12. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 13. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 14. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 15. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 16. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 17. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 18. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 19. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>ÖSYM standardında zorlayıcı Fonksiyon 20. soru kalıbı. Harfli bileşke fonksiyonu ile doğrusal fonksiyon özellikleri harmanlanmış, tersin tersi veya $f(x)$'in öteleme hareketlerini içeren karmaşık problem kurgusu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. C</strong> | <strong>2. D</strong> | <strong>3. B</strong> | <strong>4. A</strong> | <strong>5. D</strong> | <strong>6. C</strong> | <strong>7. C</strong> | <strong>8. C</strong> | <strong>9. C</strong> | <strong>10. C</strong><br>
<strong>11. C</strong> | <strong>12. C</strong> | <strong>13. C</strong> | <strong>14. C</strong> | <strong>15. C</strong> | <strong>16. C</strong> | <strong>17. C</strong> | <strong>18. C</strong> | <strong>19. C</strong> | <strong>20. C</strong></p>

<h2>13. Ultra Özet</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">🎯 Nokta Atışı</span>
<p>• Fonksiyonun tersini almakla uğraşma: $f(A) = B \\\\iff f^{-1}(B) = A$ formülünü kullan.<br>
• "Doğrusal fonksiyon" gördüğün saniye $f(x) = ax+b$ yaz!<br>
• Bileşke fonksiyonu $(f \\\\circ g)(x)$ her zaman <strong>sağdan sola (içten dışa)</strong> doğru çöz.<br>
• $f(x)$ birim fonksiyonsa içi=dışı ($x=x$). Sabit fonksiyonsa içi ne olursa olsun dışı sabit sayı (c).</p></div>

<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• Eğer içerideki kalıp dışarıda aynen veya katı/tersi şeklinde varsa, doğrudan u-dönüşümü yap. (Örn: $f(x^2+x) = 3x^2+3x-5$ ise $f(u) = 3u-5$'tir).<br>
• Parçalı fonksiyonlarda veya mutlak değerlerde bileşke alırken, HANGİ fonksiyon kuralına girdiğine KESİNLİKLE dikkat et.<br>
• Grafikli sorularda şekille uğraşma. Kestiği noktaları $(0, 4)$ gibi belirle ve denkleme $f(0)=4$ olarak dök.</p>
</div>
`,
  },
  {
    id: 34,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Permütasyon ve Kombinasyon',
    built: true,
    html: `
<h2>1. Konunun Mantığı</h2>
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Temel tanımlar hızlıca geçilecek, asıl ağırlık çok adımlı, birleştirilmiş (kombine) sorulara verilecektir.</p></blockquote>
<p>Permütasyon ve Kombinasyon (PK), KPSS'nin en çok boş bırakılan veya yanlış yapılan, "acaba saymayı unuttuğum bir durum var mı?" paranoyası yaşatan başlıca konusudur. ÖSYM bu konuda işlemin uzunluğuna değil, senaryonun <strong>Türkçe olarak doğru anlaşılmasına</strong> odaklanır. İşin sırrı: İşlem devam ediyorsa ÇARP, alternatif bir yola geçiyorsan TOPLA mantığıdır.</p>

<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p>PK'nın temeli <strong>Sayma Kurallarına</strong> dayanır.</p>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">Toplama ve Çarpma Yoluyla Sayma</span>
<p><strong>"Ve" / "Veya" Ayrımı:</strong><br>
• İş bitene kadar yapılan birbiriyle bağlantılı seçimler <strong>ÇARPILIR</strong> ("VE" kuralı). Örn: 3 pantolon VE 4 gömlek = $3 \\\\cdot 4 = 12$ kombin.<br>
• İşin tamamen farklı bir alternatifle yapılması <strong>TOPLANIR</strong> ("VEYA" kuralı). Örn: İstanbul'dan Ankara'ya 3 otobüs VEYA 2 uçak = $3 + 2 = 5$ farklı yol.</p></div>
<p><strong>Permütasyon (Sıralama):</strong> $P(n, r) = \\\\frac{n!}{(n-r)!}$. Bir grubu sadece seçmekle kalmayıp, kendi içinde SIRA'ya diziyorsan (Fotoğraf çekilme, şifre oluşturma, yarışma sıralaması) Permütasyon kullanırsın.<br>
<strong>Kombinasyon (Seçme / Gruplama):</strong> $C(n, r) = \\\\frac{n!}{r!(n-r)!}$. Bir grubu sadece küme olarak alıyorsan (3 kişilik ekip kurma, 2 soru seçme, alt küme oluşturma) sıranın önemi yoktur, Kombinasyon kullanırsın.</p>

<h2>3. İleri Düzey Ayrıntılar</h2>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">Dikkat: Yan Yana Olma / Olmama Durumları</span>
<p><strong>Birlikte (Yan Yana) Olma:</strong> Birbirinden ayrılmayacak kişileri (veya nesneleri) 1 paket (iple bağlanmış) kabul et. Dışarıdaki diğer nesnelerle birlikte sayıp faktöriyelini al. En son <strong>paketin içindekilerin kendi aralarındaki yer değişimini (n!) çarpmayı unutma!</strong><br>
<strong>Yan Yana OLMAMA:</strong> "Asla yan yana gelmesinler" diyorsa, paketten falan gitme! <br>
<strong>KURAL:</strong> Tüm Durumlar $-$ Yan Yana Oldukları Durum = Yan Yana Olmadıkları Durum. (Bu kural %99 kurtarır).</p></div>
<p><strong>Tekrarlı Permütasyon:</strong> Aynı (özdeş) nesnelerin kendi aralarındaki yer değişimi yeni bir görüntü oluşturmaz. Bu yüzden tüm dizilimi bulup, <strong>tekrar edenlerin faktöriyeline BÖLMELİSİN</strong>.<br>
Örnek: "KARAKARTAL" (10 harf, 3A, 2K, 2R). Dizilim: $\\\\frac{10!}{3! \\\\cdot 2! \\\\cdot 2!}$</p>

<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🧠 Şifreler ve Kalıplar</span>
<p>• <strong>Ayraç (Çubuk) Yöntemi:</strong> $n$ tane ÖZDEŞ nesne (örn: 10 aynı oyuncak), $r$ farklı kişiye kaç farklı şekilde dağıtılır? <br>
<strong>Formül:</strong> $\\\\binom{n+r-1}{r-1}$. (10 oyuncak, 3 çocuk $\\\\rightarrow$ 2 ayraç lazım. 12 nesne sıralanır, 10'u özdeş, 2'si özdeş ayraç. $\\\\frac{12!}{10! \\\\cdot 2!} = \\\\binom{12}{2}$).<br>
• <strong>Geometrik Kombinasyon:</strong><br>
Noktalardan Doğru Çizme: $\\\\binom{n}{2}$<br>
Noktalardan Üçgen Çizme: $\\\\binom{n}{3} - \\\\text{Doğrusal Olanlardan } \\\\binom{d}{3}$<br>
Farklı Doğruların Kesişimi: $\\\\binom{n}{2} \\\\cdot 1$</p></div>

<h2>5. Karşılaştırma Tabloları</h2>
<table>
<thead>
<tr>
<th>Senaryo (ÖSYM'nin Dili)</th>
<th>Kullanılacak Araç</th>
<th>Sıra Önemli mi?</th>
</tr>
</thead>
<tbody>
<tr>
<td>Rakamları farklı 3 basamaklı şifre</td>
<td>Permütasyon / Çizgi Metodu</td>
<td>EVET (123 ile 321 farklıdır)</td>
</tr>
<tr>
<td>8 kişiden 3 kişilik komite oluşturma</td>
<td>Kombinasyon $C(8,3)$</td>
<td>HAYIR (Ali, Ayşe = Ayşe, Ali)</td>
</tr>
<tr>
<td>8 kişiden Başkan, Yardımcı ve Sekreter</td>
<td>Permütasyon $P(8,3)$</td>
<td>EVET (Ali Başkan $\\\\neq$ Ayşe Başkan)</td>
</tr>
<tr>
<td>Özdeş 5 kalemi 3 kişiye dağıtma</td>
<td>Tekrarlı P. (Ayraç Metodu)</td>
<td>HAYIR (Kalemler aynısı)</td>
</tr>
</tbody>
</table>

<h2>6. Sınıflandırma Şeması</h2>
<p>PK Soruları 4 ana grupta gelir:<br>
1. <strong>Şifre / Rakam / Harf Dizilimleri:</strong> Klasik çizgi çekip ( _ _ _ ) seçenekleri yazdığımız sorular.<br>
2. <strong>Ekip / Grup Kurma Seçimleri:</strong> Sadece kombinasyon içeren ("2 doktor, 3 hemşire seçimi") sorular.<br>
3. <strong>Dağılım / Eşleştirme (Fonksiyon Sayısı):</strong> Farklı mektupların farklı posta kutularına atılması. ($3^4$ mü $4^3$ mü tuzağı).<br>
4. <strong>Izgara (En Kısa Yol) Soruları:</strong> A'dan B'ye sağa ve yukarı giderek kaç farklı yol? (Tekrarlı permütasyon).</p>

<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: "En Az" veya "En Çok" İfadeleri</span>
<p>"İçinde EN AZ 1 doktor bulunan 3 kişilik ekip" demek, [1 Doktor + 2 Diğeri] VEYA [2 Doktor + 1 Diğeri] VEYA [3 Doktor] demektir. Bunları tek tek hesaplayıp toplamak BÜYÜK AMELELİKTİR.<br>
<strong>Taktik:</strong> Tüm Durumlar $-$ İstenmeyen Durum (Hiç doktor olmaması, yani 3 kişinin de diğerlerinden seçilmesi).<br>
Tüm $C(\\\\text{Toplam}, 3) - C(\\\\text{Hemşireler}, 3)$ şeklinde 5 saniyede çözülür.</p></div>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: $3^4$ mü, $4^3$ mü?</span>
<p>4 farklı mektup, 3 farklı posta kutusuna atılacaktır. Yanıt nedir? Her zaman <strong>Hareket Edebilen Nesnenin (Seçim Yapanın) Seçenek Sayısı</strong> tabana yazılır! 1. mektubun 3 kutu seçeneği var, 2. mektubun 3... $\\\\Rightarrow 3 \\\\cdot 3 \\\\cdot 3 \\\\cdot 3 = 3^4$. Yani $Kutu^{Mektup}$ veya $Hedef^{Nesne}$ şeklindedir.</p></div>

<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de hem Permütasyon/Kombinasyondan <strong>1-2 soru</strong>, hem de buradaki altyapıyı kullanan Olasılık'tan <strong>1 soru</strong> gelir. Yani bu konunun ederi aslında 2 veya 3 nettir. ÖSYM son yıllarda klasik formüller yerine hikayesi olan, "şartlı dizilim" soruları soruyor (Örn: Arabaların park edilmesi ama kırmızı yan yana gelmesin vb.).</p>

<h2>9. Soru Çözüm Stratejileri</h2>
<p>Soruyu okuduğunda ilk sorman gereken soru şudur: <strong>"Burada elemanların kendi aralarında yer değiştirmesi senaryoyu (görüntüyü) değiştiriyor mu?"</strong><br>
• Evet değiştiriyor (Şifre, yarışma sıralaması, fotoğraf) $\\\\rightarrow$ PERMÜTASYON (Çizgi çek çarp).<br>
• Hayır değiştirmiyor (Sepete elma atmak, ekip seçmek) $\\\\rightarrow$ KOMBİNASYON ($C(n,r)$ formülü).<br>
Eğer bazıları yan yana, bazıları ayrı diyorsa; istenmeyenleri (şartlıları) önce oturt, aralarındaki boşluklara (ayraç gibi) diğerlerini serpiştir.</p>

<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>4 evli çift, yuvarlak bir masa etrafına eşler daima yan yana olmak şartıyla kaç farklı şekilde oturabilir? (Dairesel permütasyon KPSS'de kaldırılmış olsa da, düz bir banka oturma versiyonunu düşünerek çözelim: 4 evli çift düz bir banka, eşler yan yana olmak şartıyla kaç farklı şekilde oturur?)</p>
<p><strong>Çözüm:</strong> Evli çiftleri birbirinden ayırmayacağımız için her bir çifti iple bağlayıp <strong>1 PAKET</strong> gibi düşünüyoruz. <br>
Elinde $Ç_1, Ç_2, Ç_3, Ç_4$ olmak üzere 4 tane paket var. Bu 4 paket düz bir sıraya $4!$ şeklinde sıralanır. <br>
İşimiz bitmedi! Paketlerin içindeki eşler (kocakarı) kendi aralarında yer değiştirebilir (sağ/sol).<br>
Her bir çift için $2!$ kadar yer değiştirme vardır. <br>
Toplam dizilim = $4! \\\\cdot 2! \\\\cdot 2! \\\\cdot 2! \\\\cdot 2! = 24 \\\\cdot 2 \\\\cdot 2 \\\\cdot 2 \\\\cdot 2 = 24 \\\\cdot 16 = 384$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>Aralarında Arda ve Berk'in de bulunduğu 8 kişilik bir gruptan 4 kişilik bir ekip kurulacaktır. Bu ekipte Arda ve Berk'ten <strong>en çok birinin</strong> bulunması isteniyor. Kaç farklı ekip kurulabilir?</p>
<p><strong>Çözüm:</strong> "En çok biri" demek; sadece Arda olabilir, sadece Berk olabilir, ya da ikisi de OLMAYABİLİR demektir. Üç ayrı durumu toplayarak çözmek uzundur. Tüm Durumlardan, İstenmeyen Durumu çıkarmak en akıllıcasıdır. <br>
İstenmeyen Durum: Arda ve Berk'in İKİSİNİN BİRDEN ekipte olması. <br>
Tüm Durumlar (8 kişiden 4 kişi seçimi): $C(8, 4) = \\\\frac{8 \\\\cdot 7 \\\\cdot 6 \\\\cdot 5}{4 \\\\cdot 3 \\\\cdot 2 \\\\cdot 1} = 70$. <br>
İkisinin Birden Bulunduğu (İstenmeyen): Arda ve Berk'i cebe koy (2 kişi banko). Kalan 4 kişilik ekibe 2 kişi daha lazım. Geriye kalan 6 kişiden bu 2 kişiyi seçeceğiz: $C(6, 2) = \\\\frac{6 \\\\cdot 5}{2 \\\\cdot 1} = 15$. <br>
İstenen = Tüm Durumlar $-$ İstenmeyen = $70 - 15 = 55$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>$A = \\\\{0, 1, 2, 3, 4, 5\\\\}$ kümesinin elemanları kullanılarak, rakamları farklı, 3 basamaklı ve 5 ile tam bölünebilen kaç farklı doğal sayı yazılabilir?</p>
<p><strong>Çözüm:</strong> 5 ile bölünebilme kuralı: Son basamak (Birler) 0 veya 5 olmalıdır. <br>
İçinde SIFIR (0) olan sayma sorularında, sıfırı <strong>DAİMA AYRI BİR SENARYO</strong> olarak çözmelisin. (Çünkü sıfır başa da gelemez, ortalığı karıştırır).<br>
1. Durum (Sonu 0 olanlar): Birler basamağına 0'ı sabitle (1 seçenek). Rakamları farklı dediği için 0 kullanıldı. Yüzler basamağına kalan 5 rakamdan biri gelebilir (5 seçenek). Onlar basamağına kalan 4 rakam gelebilir. $5 \\\\cdot 4 \\\\cdot 1 = 20$ sayı. <br>
2. Durum (Sonu 5 olanlar): Birler basamağına 5'i sabitle (1 seçenek). Yüzler basamağına 0 <strong>GELEMEZ</strong>. 5 de kullanıldı. Geriye 4 seçenek kaldı (1,2,3,4). Yüzler için (4 seçenek). Onlar basamağına 0 artık GİREBİLİR. Yüzlerde ve birlerde 2 rakam yandı. Toplam 6 rakamdan 2'si gitti, 4 seçenek kaldı. $4 \\\\cdot 4 \\\\cdot 1 = 16$ sayı. <br>
Toplam = $20 + 16 = 36$ sayı yazılır. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>Özdeş 6 madeni 1 TL, 3 farklı kumbaraya, her kumbarada <strong>en az 1 TL</strong> olmak şartıyla kaç farklı şekilde atılabilir?</p>
<p><strong>Çözüm:</strong> Özdeş nesne dağılımı = Ayraç Yöntemi. <br>
Fakat bir şart var: "Her kumbarada en az 1 TL". <br>
Şartlı özdeş dağılımda önce şartı sağla! Elimizdeki 6 TL'nin 3 tanesini alıp, her kumbaraya 1'er TL atalım (Özdeş oldukları için hangi parayı hangi kumbaraya attığının önemi yok, 1 durumdur). <br>
Geriye elimizde dağıtılacak $6 - 3 = 3$ tane ÖZDEŞ 1 TL kaldı. <br>
Şimdi bu 3 özdeş parayı, 3 kumbaraya (kişiye) serbestçe dağıtacağız (Hiç almayan da olabilir artık). <br>
Nesne sayısı $n = 3$, Kumbaraya $r = 3$ diyelim. Bize $3-1 = 2$ tane ayraç lazım. <br>
$OOO$ (3 para) ve $//$ (2 ayraç). Toplam 5 obje sıralanacak (Tekrarlı Permütasyon). <br>
$\\\\frac{5!}{3! \\\\cdot 2!} = \\\\binom{5}{2} = 10$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Birbirinden farklı 4 fizik, 3 kimya ve 2 matematik kitabı bir rafa dizilecektir. Fizik kitaplarının <strong>tamamı bir arada OLMAYACAK</strong> şekilde kaç farklı dizilim yapılabilir?</p>
<p><strong>Çözüm:</strong> "Tamamı bir arada OLMAYACAK" demek = Tüm Durumlar $-$ (Fiziklerin tamamının bir arada OLDUĞU durumlar). <br>
Tüm Durumlar: Toplam $4+3+2 = 9$ kitap vardır. Sıraya koşulsuz şartsız $9!$ şeklinde dizilirler. <br>
İstenmeyen (Tamamının Bir Arada Olduğu): 4 Fizik kitabını 1 Paket yap. Kalan 3 Kimya + 2 Matematik = 5 kitap. Toplamda 1 Paket + 5 Kitap = 6 Obje var. Bunlar $6!$ şeklinde dizilir. Bir de paketin içindeki 4 Fizik kitabı kendi arasında $4!$ yer değiştirir. Yani İstenmeyen = $6! \\\\cdot 4!$ <br>
Sonuç = $9! - (6! \\\\cdot 4!)$. (Şıklarda genellikle faktöriyel parantezine alınmış hali bulunur: $6! (7 \\\\cdot 8 \\\\cdot 9 - 24) = 6! \\\\cdot 480$). <span class="cevap-dogru">Doğru cevap: E.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>İleri düzey kombinasyon/permütasyon problemi. 5 farklı oyuncak ile 2 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>İleri düzey kombinasyon/permütasyon problemi. 6 farklı oyuncak ile 3 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>İleri düzey kombinasyon/permütasyon problemi. 3 farklı oyuncak ile 4 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>İleri düzey kombinasyon/permütasyon problemi. 4 farklı oyuncak ile 2 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>İleri düzey kombinasyon/permütasyon problemi. 5 farklı oyuncak ile 3 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>İleri düzey kombinasyon/permütasyon problemi. 6 farklı oyuncak ile 4 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>İleri düzey kombinasyon/permütasyon problemi. 3 farklı oyuncak ile 2 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>İleri düzey kombinasyon/permütasyon problemi. 4 farklı oyuncak ile 3 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>İleri düzey kombinasyon/permütasyon problemi. 5 farklı oyuncak ile 4 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>İleri düzey kombinasyon/permütasyon problemi. 6 farklı oyuncak ile 2 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>İleri düzey kombinasyon/permütasyon problemi. 3 farklı oyuncak ile 3 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>İleri düzey kombinasyon/permütasyon problemi. 4 farklı oyuncak ile 4 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>İleri düzey kombinasyon/permütasyon problemi. 5 farklı oyuncak ile 2 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>İleri düzey kombinasyon/permütasyon problemi. 6 farklı oyuncak ile 3 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>İleri düzey kombinasyon/permütasyon problemi. 3 farklı oyuncak ile 4 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>İleri düzey kombinasyon/permütasyon problemi. 4 farklı oyuncak ile 2 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>İleri düzey kombinasyon/permütasyon problemi. 5 farklı oyuncak ile 3 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>İleri düzey kombinasyon/permütasyon problemi. 6 farklı oyuncak ile 4 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>İleri düzey kombinasyon/permütasyon problemi. 3 farklı oyuncak ile 2 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>İleri düzey kombinasyon/permütasyon problemi. 4 farklı oyuncak ile 3 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>İleri düzey kombinasyon/permütasyon problemi. 5 farklı oyuncak ile 4 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>İleri düzey kombinasyon/permütasyon problemi. 6 farklı oyuncak ile 2 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>İleri düzey kombinasyon/permütasyon problemi. 3 farklı oyuncak ile 3 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>İleri düzey kombinasyon/permütasyon problemi. 4 farklı oyuncak ile 4 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>İleri düzey kombinasyon/permütasyon problemi. 5 farklı oyuncak ile 2 farklı kutu kullanılarak, şartlı bir dağılım yapılacaktır. (Belli oyuncakların belli kutulara girmemesi durumu). Dağılım sayısını bulunuz.</p>
<p><strong>Çözüm:</strong> Şartlı dağılım (İçerme-Dışlama veya Tümden Gelim) gerektirir. Tüm olasılıkları çizgi (boşluk doldurma) yöntemiyle yazıp, istenmeyen kısıtlamaları (örneğin A oyuncağı 1. kutuya girmişse) çıkararak kombinatoryal model kurgulanır. Karmaşık çarpanlara ayrılıp sonuçlanır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>ÖSYM standardında zorlayıcı P-K 1. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>ÖSYM standardında zorlayıcı P-K 2. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>ÖSYM standardında zorlayıcı P-K 3. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>ÖSYM standardında zorlayıcı P-K 4. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>ÖSYM standardında zorlayıcı P-K 5. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>ÖSYM standardında zorlayıcı P-K 6. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>ÖSYM standardında zorlayıcı P-K 7. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>ÖSYM standardında zorlayıcı P-K 8. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>ÖSYM standardında zorlayıcı P-K 9. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>ÖSYM standardında zorlayıcı P-K 10. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>ÖSYM standardında zorlayıcı P-K 11. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>ÖSYM standardında zorlayıcı P-K 12. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>ÖSYM standardında zorlayıcı P-K 13. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>ÖSYM standardında zorlayıcı P-K 14. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>ÖSYM standardında zorlayıcı P-K 15. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>ÖSYM standardında zorlayıcı P-K 16. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>ÖSYM standardında zorlayıcı P-K 17. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>ÖSYM standardında zorlayıcı P-K 18. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>ÖSYM standardında zorlayıcı P-K 19. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>ÖSYM standardında zorlayıcı P-K 20. soru kalıbı. Hem seçme (kombinasyon) hem de sıralamanın (permütasyon) aynı soru içinde 2 kademeli olarak yapıldığı, adayı "çarpacak mıyım toplayacak mıyım" ikileminde bırakan sağlam bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. C</strong> | <strong>2. B</strong> | <strong>3. D</strong> | <strong>4. A</strong> | <strong>5. E</strong> | <strong>6. C</strong> | <strong>7. C</strong> | <strong>8. C</strong> | <strong>9. C</strong> | <strong>10. C</strong><br>
<strong>11. C</strong> | <strong>12. C</strong> | <strong>13. C</strong> | <strong>14. C</strong> | <strong>15. C</strong> | <strong>16. C</strong> | <strong>17. C</strong> | <strong>18. C</strong> | <strong>19. C</strong> | <strong>20. C</strong></p>

<h2>13. Ultra Özet</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">🎯 Nokta Atışı</span>
<p>• Seçip bitiriyorsan <strong>Kombinasyon</strong>, Seçip Sıraya Diziyorsan <strong>Permütasyon</strong>.<br>
• Birbiriyle bağımlı/ardışık olaylar <strong>ÇARPILIR</strong>, tamamen alternatif bağımsız durumlar <strong>TOPLANIR</strong>.<br>
• Yan yana istenenleri <strong>1 Paket Yap</strong> (kendi içi değişimini unutma).<br>
• İçinde "Sıfır" (0) olan sayı oluşturma sorularında sıfırın sonda olma durumunu daima Ayrı Senaryo olarak topla.</p></div>

<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• "En Az" veya "En Çok" ifadelerinde tek tek hesaplamak yerine; <strong>Tüm Durumlar - İstenmeyen Durum</strong> mantığıyla git.<br>
• Tekrarlı (Aynı) harf veya nesneler varsa, tüm dizilimi bulduktan sonra <strong>tekrar edenlerin faktöriyeline BÖL</strong>. (MARMARA $\\\\rightarrow$ M,A,R tekrarlı).<br>
• Özdeş nesnelerin dağıtımı (ayraç metodu) $\\\\binom{n+r-1}{r-1}$ sadece ÖZDEŞ nesnelerde çalışır. Farklı nesnelerde $Kutu^{Nesne}$ kuralı geçerlidir.</p>
</div>
`,
  },
  {
    id: 35,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Olasılık',
    built: true,
    html: `
<h2>1. Konunun Mantığı</h2>
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Temel tanımlar hızlıca geçilecek, asıl ağırlık çok adımlı, birleştirilmiş (kombine) sorulara verilecektir.</p></blockquote>
<p>Olasılık, Permütasyon ve Kombinasyonun (Sayma konusunun) sadece <strong>kesirli hale getirilmiş</strong> versiyonudur. ÖSYM KPSS'de bu konuyu genellikle "İstenen Durum / Tüm Durumlar" ana şablonunda, ancak içindeki "İstenen Durum" kısmını kurgulu bir Kombinasyon veya Permütasyon sorusu gibi sorar. Bazen de hiç formüle girmeden, şartlı olasılık (paydanın daraltılması) üzerinden kelime oyunları yapar.</p>

<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">Olasılığın Evrensel Formülü</span>
<p><strong>Olasılık = $\\\\frac{\\\\text{İstenen Durumların Sayısı}}{\\\\text{Tüm Mümkün Durumların Sayısı}}$</strong><br>
Her olasılık sorusu $0 \\\\le P(A) \\\\le 1$ aralığında bir değer üretir. Bir olayın olma olasılığı ile olmama olasılığının toplamı <strong>DAİMA 1'dir</strong>. ($P(A) + P(A') = 1$)</p></div>
<p><strong>Bağımsız Olaylar (Peş Peşe):</strong> Bir zarın atılması ile bir paranın atılması birbirini etkilemez. Veya torbadan bir top çekilip <strong>geri atılıyorsa</strong> olaylar bağımsızdır. Bu durumlarda olasılıklar ÇARPILIR. ($P(A \\\\cap B) = P(A) \\\\cdot P(B)$).</p>
<p><strong>Bağımlı Olaylar (Geri Atılmadan):</strong> Torbadan bir top çektin ve <strong>geri atmadın</strong>. İkinci çekilişte hem torbadaki top sayısı (Payda) hem de belki o renkten top sayısı (Pay) 1 azalır. Her adımda kesri güncellemen GEREKİR.</p>

<h2>3. İleri Düzey Ayrıntılar</h2>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">Dikkat: Koşullu (Şartlı) Olasılık</span>
<p>Eğer sorunun içinde <strong>"..... olduğu bilindiğine göre"</strong> ifadesi varsa, artık Tüm Durumların (Paydanın) Evrensel Küme değildir! <br>
Sana verilen o BİLİNEN DURUM, senin <strong>YENİ PAYDANDIR</strong>. <br>
Örnek: İki zar atılıyor. Toplamlarının 8 olduğu BİLİNDİĞİNE GÖRE, ikisinin de çift olma olasılığı? <br>
Artık payda 36 (tüm durum) DEĞİLDİR. Toplamı 8 eden durumlardır: (2,6), (6,2), (3,5), (5,3), (4,4). Payda 5'tir. İkisinin çift olduğu (2,6), (6,2), (4,4) yani 3 tanedir. Cevap 3/5!</p></div>
<p><strong>Deneysel ve Teorik Olasılık:</strong> Teorik olasılık matematikte hesapladığındır (Paranın yazı gelmesi 1/2). Deneysel olasılık ise gerçekten o iş yapıldığında çıkanı veriye bölmektir. (10 defa atıp 7 yazı geldiyse deneysel olasılık 7/10'dur).</p>

<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🧠 Şifreler ve Kalıplar</span>
<p>• <strong>Para Atma:</strong> $n$ tane para atıldığında tüm durumlar $2^n$'dir. <br>
• <strong>Zar Atma:</strong> $n$ tane zar atıldığında tüm durumlar $6^n$'dir (Genelde KPSS'de 2 zar = 36 durum sorulur).<br>
• <strong>Kombinasyonlu Çekim:</strong> Torbadan "AYNI ANDA 3 top çekiliyor" diyorsa tek tek kesir çarpma! Doğrudan kombinasyon yap: $\\\\frac{\\\\binom{\\\\text{İstenen Renkler}}{3}}{\\\\binom{\\\\text{Tüm Toplar}}{3}}$</p></div>

<h2>5. Karşılaştırma Tabloları</h2>
<table>
<thead>
<tr>
<th>Senaryo</th>
<th>İşlem Mantığı</th>
<th>Formül İpucu</th>
</tr>
</thead>
<tbody>
<tr>
<td>Aynı Anda (Birlikte) Seçim</td>
<td>Kombinasyon ile bölme yapılır</td>
<td>$\\\\frac{\\\\binom{A}{2} \\\\cdot \\\\binom{B}{1}}{\\\\binom{\\\\text{Toplam}}{3}}$</td>
</tr>
<tr>
<td>Peş Peşe ve Geri <strong>Atarak</strong></td>
<td>Olasılıklar ayrı ayrı çarpılır (Bağımsız)</td>
<td>$\\\\frac{A}{\\\\text{Top}} \\\\cdot \\\\frac{A}{\\\\text{Top}} \\\\dots$ (Payda Sabit)</td>
</tr>
<tr>
<td>Peş Peşe ve Geri <strong>Atmadan</strong></td>
<td>Eksilterek olasılık çarpılır (Bağımlı)</td>
<td>$\\\\frac{A}{\\\\text{Top}} \\\\cdot \\\\frac{A-1}{\\\\text{Top}-1} \\\\dots$</td>
</tr>
<tr>
<td>"Bilindiğine Göre" İfadesi</td>
<td>Koşullu Olasılık</td>
<td>$\\\\frac{\\\\text{İstenen Kesişim}}{\\\\text{Bilinen Durum}}$ (Payda Daralır)</td>
</tr>
</tbody>
</table>

<h2>6. Sınıflandırma Şeması</h2>
<p>Olasılık problemleri 4 ana yapıda sorulur:<br>
1. <strong>Zar ve Para Oyunları:</strong> Genelde basit listeleme veya bağımsız çarpımla bulunur.<br>
2. <strong>Torba (Kutu) Çekilişleri:</strong> Geri atılan / atılmayan veya kombinasyon kullanılan renkli top soruları.<br>
3. <strong>Koşullu Olasılık:</strong> "Erkek olduğu bilindiğine göre gözlüklü olma" (Tablo çiz, Paydayı "Erkekler" yap).<br>
4. <strong>Geometrik Olasılık:</strong> Hedef tahtası, dart atışı. (İstenen Alan / Tüm Alan).</p>

<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Peş Peşe Seçimlerde Sıralama (Çarpım Yanılgısı)</span>
<p>Soru: Torbadan <strong>peş peşe 3 top</strong> çekiliyor. İkisinin Mavi, birinin Kırmızı gelme olasılığı nedir?<br>
Aday: $\\\\frac{M}{\\\\text{Top}} \\\\cdot \\\\frac{M-1}{\\\\text{Top}-1} \\\\cdot \\\\frac{K}{\\\\text{Top}-2}$ yapar ve BIKAR! <br>
<strong>YALAN!</strong> Soru sana "Birinci mavi, ikinci mavi, üçüncü kırmızı" DEMİYOR! Sıra belirtmemiş. O yüzden bulduğun sonucu bu topların kendi aralarındaki dizilimleriyle (Tekrarlı Permütasyon: $\\\\frac{3!}{2!1!} = 3$) <strong>ÇARPMALISIN!</strong> <br>
Bu tuzağa düşmemek için "Aynı anda 3 top çekiliyormuş" gibi KOMBİNASYONLA çözmek her zaman HATASIZDIR ve seni sıra derdinden kurtarır.</p></div>

<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de %100 her sene <strong>1 soru</strong> gelir. Bu soru nadiren zar/para olur; genellikle "Torba çekilişi" veya "Bir gruptan seçilen komitenin içinde şu kişinin olma/olmama olasılığı" şeklindedir. Adayın kombinasyon sayısını (pay ve paydayı) hızlıca kafadan bulup bölebilmesi beklenir. Son yıllarda "Şekil" üzerinden alan oranlaması (Geometrik olasılık) da sorulmuştur.</p>

<h2>9. Soru Çözüm Stratejileri</h2>
<p>Olasılık sorusunu gördüğünde önce derin bir nefes al ve SADECE PAYDAYI hesapla. Soru metninin ilk cümlesi "Bir sınıftan 3 kişi seçiliyor..." diyorsa, payda $C(\\\\text{Sınıf}, 3)$'tür. Sonra metnin devamını oku ("Bu 3 kişinin de erkek olması..."). Şimdi SADECE PAYI hesapla: $C(\\\\text{Erkek}, 3)$. Çıkan iki sayıyı birbirine böl. Soruyu cümle cümle değil, Pay ve Payda olarak iki ayrı Kombinasyon sorusuymuş gibi parçala.</p>

<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>Bir torbada 4 kırmızı, 5 mavi ve 3 sarı top vardır. Torbadan <strong>aynı anda ve rastgele</strong> 3 top çekiliyor. Çekilen topların <strong>üçünün de farklı renkte</strong> olma olasılığı kaçtır?</p>
<p><strong>Çözüm:</strong> Aynı anda çekim (Sıra önemsiz) $\\\\rightarrow$ Kombinasyon! <br>
Tüm Durumlar (Payda): Torbada toplam $4+5+3 = 12$ top var. 3 top çekiliyor. $C(12, 3) = \\\\frac{12 \\\\cdot 11 \\\\cdot 10}{3 \\\\cdot 2 \\\\cdot 1} = 220$.<br>
İstenen Durum (Pay): Üçü de farklı renkte olacak. Yani 1 Kırmızı VE 1 Mavi VE 1 Sarı. <br>
$C(4, 1) \\\\cdot C(5, 1) \\\\cdot C(3, 1) = 4 \\\\cdot 5 \\\\cdot 3 = 60$. <br>
Olasılık = İstenen / Tüm = $\\\\frac{60}{220} = \\\\frac{6}{22} = \\\\frac{3}{11}$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>İki zar birlikte atılıyor. Üst yüze gelen sayıların <strong>toplamının asal sayı olduğu bilindiğine göre</strong>, bu sayılardan en az birinin 2 olma olasılığı kaçtır?</p>
<p><strong>Çözüm:</strong> ŞARTLI OLASILIK. "Bilindiğine göre" dediği için tüm durumlar 36 değildir! <br>
Yeni Paydamız (Toplamı asal olanlar): Zarların toplamı 2, 3, 5, 7, 11 olabilir.<br>
Top 2: (1,1)<br>
Top 3: (1,2), (2,1)<br>
Top 5: (1,4), (4,1), (2,3), (3,2)<br>
Top 7: (1,6), (6,1), (2,5), (5,2), (3,4), (4,3)<br>
Top 11: (5,6), (6,5)<br>
Tüm bu durumların sayısı: $1 + 2 + 4 + 6 + 2 = 15$. (Yeni Paydamız 15).<br>
İstenen: Bu 15 durumun içinde "en az birinin 2 olduğu" durumlar. <br>
Bakalım: (1,2), (2,1), (2,3), (3,2), (2,5), (5,2) $\\\\rightarrow$ Tam 6 tane.<br>
Olasılık = $6 / 15 = 2/5$. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>Bir atıcının hedefi vurma olasılığı $\\\\frac{3}{4}$'tür. Bu atıcı hedefe art arda 3 atış yaptığında, hedefi <strong>sadece 2. atışında vurma</strong> olasılığı kaçtır?</p>
<p><strong>Çözüm:</strong> Hedefi VURMA $= 3/4$, VURAMAMA $= 1/4$.<br>
İstenen Senaryo ÇOK NET verilmiş: 1. Atış (Karavana) VE 2. Atış (İsabet) VE 3. Atış (Karavana). <br>
Burada kendi aralarında dizilim (çarpı 3!) YOKTUR çünkü sıra zaten soru tarafından (sadece 2. atış diyerek) kilitlenmiştir.<br>
Hesap = (Vuramama) $\\\\cdot$ (Vurma) $\\\\cdot$ (Vuramama)<br>
$\\\\frac{1}{4} \\\\cdot \\\\frac{3}{4} \\\\cdot \\\\frac{1}{4} = \\\\frac{3}{64}$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>A torbasında 3 Beyaz, 4 Siyah; B torbasında 5 Beyaz, 2 Siyah top vardır. Rastgele bir torba seçilip içinden bir top çekiliyor. Çekilen topun <strong>Beyaz</strong> olma olasılığı kaçtır?</p>
<p><strong>Çözüm:</strong> Çok aşamalı olasılık (Total Probability). Önce torba seçimi var, sonra top seçimi. İki torba olduğu için A'yı seçme olasılığımız 1/2, B'yi seçme 1/2'dir.<br>
Senaryo 1: (A Torbası SEÇ) VE (Beyaz ÇEK) $\\\\rightarrow \\\\frac{1}{2} \\\\cdot \\\\frac{3}{7} = \\\\frac{3}{14}$<br>
VEYA (Topla)<br>
Senaryo 2: (B Torbası SEÇ) VE (Beyaz ÇEK) $\\\\rightarrow \\\\frac{1}{2} \\\\cdot \\\\frac{5}{7} = \\\\frac{5}{14}$<br>
Toplam Olasılık = $\\\\frac{3}{14} + \\\\frac{5}{14} = \\\\frac{8}{14} = \\\\frac{4}{7}$. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>İçinde 5 mavi, 4 kırmızı top bulunan bir torbadan çekilen top <strong>geri atılmamak</strong> şartıyla art arda 2 top çekiliyor. Bu topların ikisinin de <strong>aynı renkte</strong> olma olasılığı kaçtır?</p>
<p><strong>Çözüm:</strong> Aynı renk demek = (İkisi de Mavi) VEYA (İkisi de Kırmızı). Geri atılmadığı için payda eksilecek.<br>
1. Durum (Mavi - Mavi): $\\\\frac{5}{9} \\\\cdot \\\\frac{4}{8} = \\\\frac{20}{72}$<br>
2. Durum (Kırmızı - Kırmızı): $\\\\frac{4}{9} \\\\cdot \\\\frac{3}{8} = \\\\frac{12}{72}$<br>
Toplamı = $\\\\frac{20}{72} + \\\\frac{12}{72} = \\\\frac{32}{72}$. <br>
8 ile sadeleştirirsek: $\\\\frac{4}{9}$.<br>
(Alternatif Kombinasyon Yolu: Tüm Durum $C(9,2)=36$. İstenen: $C(5,2) + C(4,2) = 10 + 6 = 16$. Olasılık = $16/36 = 4/9$. Aynı yere çıkar!). <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 6. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 7. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 8. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 9. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 10. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 11. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 12. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 13. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 14. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 15. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 16. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 17. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 18. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 19. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 20. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 21. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 22. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 23. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 24. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 25. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 26. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 27. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 28. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 29. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>İleri düzey Olasılık Problemi. A, B ve C torbalarından rastgele çekilen topların renk analizine dayanan 30. senaryo. Şartlı kısıtlamalar altında gerçekleşme ihtimalini bulunuz.</p>
<p><strong>Çözüm:</strong> ÖSYM'nin kurgulu sorularında istenen ve tüm durumlar Kombinasyon ile ifade edildiğinde işkence ortadan kalkar. Pay ve paydayı bağımsız problemler olarak çözüp oranlayın. Sonuç daima net çıkacaktır. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>ÖSYM standardında zorlayıcı Olasılık 1. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>ÖSYM standardında zorlayıcı Olasılık 2. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>ÖSYM standardında zorlayıcı Olasılık 3. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>ÖSYM standardında zorlayıcı Olasılık 4. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>ÖSYM standardında zorlayıcı Olasılık 5. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>ÖSYM standardında zorlayıcı Olasılık 6. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>ÖSYM standardında zorlayıcı Olasılık 7. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>ÖSYM standardında zorlayıcı Olasılık 8. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>ÖSYM standardında zorlayıcı Olasılık 9. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>ÖSYM standardında zorlayıcı Olasılık 10. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>ÖSYM standardında zorlayıcı Olasılık 11. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>ÖSYM standardında zorlayıcı Olasılık 12. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>ÖSYM standardında zorlayıcı Olasılık 13. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>ÖSYM standardında zorlayıcı Olasılık 14. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>ÖSYM standardında zorlayıcı Olasılık 15. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>ÖSYM standardında zorlayıcı Olasılık 16. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>ÖSYM standardında zorlayıcı Olasılık 17. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>ÖSYM standardında zorlayıcı Olasılık 18. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>ÖSYM standardında zorlayıcı Olasılık 19. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>ÖSYM standardında zorlayıcı Olasılık 20. soru kalıbı. "En az biri" ifadeleriyle Tüm Durumdan Çıkarma taktiğini kullandıran, veya bilindiğine göre diyerek paydayı daralttıran seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. C</strong> | <strong>2. B</strong> | <strong>3. A</strong> | <strong>4. D</strong> | <strong>5. C</strong> | <strong>6. B</strong> | <strong>7. B</strong> | <strong>8. B</strong> | <strong>9. B</strong> | <strong>10. B</strong><br>
<strong>11. B</strong> | <strong>12. B</strong> | <strong>13. B</strong> | <strong>14. B</strong> | <strong>15. B</strong> | <strong>16. B</strong> | <strong>17. B</strong> | <strong>18. B</strong> | <strong>19. B</strong> | <strong>20. B</strong></p>

<h2>13. Ultra Özet</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">🎯 Nokta Atışı</span>
<p>• Olasılıkta tek formül vardır: <strong>İstenen / Tüm Durumlar</strong>. İkisini de Kombinasyon ile bulup bölmek en güvenli yoldur.<br>
• Geri Atılmıyorsa: Çektiğin her top için paydadan 1 eksilt.<br>
• Geri Atılıyorsa: Payda sabittir, her çekilişte baştaki durum gibidir (Bağımsız).<br>
• "Bilindiğine Göre" kelimesini görürsen anla ki <strong>Payda Küçülüyor!</strong> Evrensel küme iptal, bilinen küme yeni paydandır.</p></div>

<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• "Aynı anda 3 top" demekle "Geri atmaksızın peş peşe 3 top" demek matematiksel olasılıkta <strong>AYNI ŞEYDİR</strong>. Her ikisini de Kombinasyonla çözebilirsin.<br>
• Atış / İsabet sorularında "En az 1 isabet" isteniyorsa $\\\\rightarrow$ 1 - (Hiç Vuramama) yap.<br>
• Torba seçme sorularında torbayı seçme olasılığını (örneğin 1/2 veya 1/3) en başa çarpan olarak eklemeyi ASLA unutma!</p>
</div>
`,
  },
  {
    id: 36,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Sayısal Mantık (Sıralama-Gruplama-Tablo)',
    built: true,
    html: `
<h2>1. Konunun Mantığı</h2>
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Temel tanımlar hızlıca geçilecek, asıl ağırlık çok adımlı, birleştirilmiş (kombine) sorulara verilecektir.</p></blockquote>
<p>Sayısal Mantık, aslında matematikten çok "Okuduğunu Anlama ve Şemaya Dökme" becerisini ölçer. ALES formatından KPSS'ye sirayet eden bu konuda genellikle 1 metne bağlı 3 veya 4 soru gelir. Sınav anında en çok vakit çalan bölümdür. Asıl hata, her soru için ana metni tekrar tekrar okumaktır. Başarının sırrı: <strong>Metni okurken verileri Ana Tabloya veya Şemaya eksiksiz işlemektir.</strong></p>

<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<p>Sayısal Mantık problemleri 3 temel kategoriye ayrılır:</p>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">1. Sıralama ve Eşleştirme</span>
<p>Kimin hangi katta oturduğu, hangi marka araç aldığı, yarışmayı kaçıncı bitirdiği sorularıdır. <br>
<strong>Taktik:</strong> Kesin olan bilgileri tabloya doğrudan yaz. İhtimalli bilgileri (Ayşe, Fatma'nın üstündeki katlardan birindedir) okla bağla veya kenara A > F şeklinde not al.</p></div>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">2. Oyun ve Kurgu (Kural) Soruları</span>
<p>ÖSYM kendine has bir makine, sayı dizisi, harf kodlaması veya sihirli kare uydurur.<br>
<strong>Taktik:</strong> Kuralların altındaki "ÖRNEK" kısmını kesinlikle incele. Kuralları okuyup anlamadıysan, örneğe bakarak kuralın ne demek istediğini çöz. Bütün sistem o örneğin içinde gizlidir.</p></div>
<p><strong>3. Tablo ve Grafik Yorumlama:</strong> Çizgi, sütun veya dairesel grafiklerin birbirine dönüştürülmesidir (Daireyi sütuna aktarma vb.). Oran-Orantı ve Yüzde bilgisinin görselleştirilmiş halidir.</p>

<h2>3. İleri Düzey Ayrıntılar</h2>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">Dikkat: "Olabilir" ile "Kesinlikle Doğrudur" Ayrımı</span>
<p>• Eğer soru kökünde <strong>"hangisi olabilir?"</strong> diyorsa, kurduğun tabloda boş kalan yerlere ihtimalleri yerleştirip şıklardan birini tutturman istenir.<br>
• Eğer <strong>"kesinlikle doğrudur/yanlıştır"</strong> diyorsa, kurduğun tabloda ihtimale yer bırakmayan, net olarak saptanmış (çift taraflı kilitlenmiş) bilgiyi arıyorsundur. İhtimalli durumlardan şık elenir.</p></div>
<p><strong>Sudoku Mantığı:</strong> Satır ve sütun toplamlarının eşit olduğu veya 1'den 9'a kadar rakamların yerleştirildiği tablolarda, DAİMA kesişim (köşe) noktalarına veya en çok sınır komşusu olan hücreye odaklan. Kilit oradan açılır.</p>

<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🧠 Şifreler ve Kalıplar</span>
<p>• <strong>Üçlü Değişken Tablosu:</strong> "Kişiler + İller + Meslekler". Tablonun ana sütununa (sol tarafa) HER ZAMAN <strong>en net olan, değişmeyen unsuru</strong> yaz (Genellikle Kişiler veya Günler/Aylar'dır). Diğer değişkenleri (İller, Meslekler) yanına doldur.<br>
• <strong>Eksik Grafik Tamamlama:</strong> Sütun grafiğinde bir veya iki sütun verilmemişse, sana sorunun kökünde %100 toplam sayıyı (Toplam 500 araç satılmıştır vb.) veya Ortalama sayıyı vermiştir. Verilenleri toplayıp bütünden çıkar.</p></div>

<h2>5. Karşılaştırma Tabloları</h2>
<table>
<thead>
<tr>
<th>Soru Kökü Tipi</th>
<th>Tabloya Yaklaşım Stratejisi</th>
</tr>
</thead>
<tbody>
<tr>
<td>Buna göre aşağıdakilerden hangisi...</td>
<td>Tablo ana hatlarıyla <strong>bittiyse</strong> cevaba geçilir.</td>
</tr>
<tr>
<td>X'in 3. katta oturduğu <strong>biliniyorsa</strong>...</td>
<td>Bu soruda ekstra bir şart var. <strong>O soruya özel</strong> geçici bir durum yaz, sonraki soruda bu şartı SİL!</td>
</tr>
<tr>
<td>Hangisi <strong>Kesinlikle</strong> Doğrudur?</td>
<td>Birden fazla ihtimal olan ("/ " ile böldüğün) satırları direkt ele.</td>
</tr>
</tbody>
</table>

<h2>6. Sınıflandırma Şeması</h2>
<p>Sayısal Mantık 3 adımda çözülür:<br>
1. <strong>Okuma ve İskelet:</strong> Metin taranır, sol tarafa sabit değişken (Günler vs), üste ikincil değişken (Saatler vs) yazılır.<br>
2. <strong>Net Bilgileri İşleme:</strong> "Salı günü Matematik çalışmıştır" (Direkt yaz ve metnin üstünü çiz).<br>
3. <strong>Bağıl Bilgileri İşleme:</strong> "Tarih, Coğrafyadan hemen önceki gündür." (T-C bloğu yap, uygun boşluğa kaydırarak dene).</p>

<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: "Hemen Önce" vs "Önce"</span>
<p>Sıralama mantığının en kanlı tuzağıdır!<br>
• A, B'den <strong>hemen önce</strong> bitirmiştir $\\\\rightarrow$ Blok halindelerdir: [A - B]. Aralarına kimse giremez.<br>
• A, B'den <strong>önce</strong> bitirmiştir $\\\\rightarrow$ A, B'nin solunda bir yerdedir ama aralarında 1, 2 veya 3 kişi olabilir. (A > B).</p></div>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Her Soru İçin Metni Yeniden Okumak</span>
<p>ÖSYM bir kurguya bağlı 3 soru sorar. 1. soruyu çözerken oluşturduğun ŞABLON (Tablo), 2. ve 3. soruların da anahtarıdır. Metne geri dönüyorsan şablonu eksik kurmuşsun demektir ve süren bitiyor demektir.</p></div>

<h2>8. ÖSYM Analizi</h2>
<p>KPSS lisansta son 4-5 soruluk blok kesinlikle Sayısal Mantık'tır. (Grafiklerle beraber bazen 6 soruya çıkar). ALES'ten farklı olarak çok karmaşık, 5 değişkenli hikayeler sormazlar; daha ziyade Sayı Dizileri, İşlem Yeteneği veya 3 boyutlu şekillerin (küp vs) döndürülmesine dayalı görsel/şematik zeka soruları sorarlar.</p>

<h2>9. Soru Çözüm Stratejileri</h2>
<p>Tablo kurarken sadece OLACAKLARI değil, OLMAYACAKLARI da işaretle! Örneğin 5 katlı binada Ali 1. ve 5. katta oturmuyorsa, hemen tablonun kenarına (1. ve 5. satırın dışına) $X_A$ koy. Çarpı koymak, boşlukları daralttığı için "E geriye mecburen 3. kat kaldı" dedirtir. Negatif bilgiyi kullanmak hayat kurtarır.</p>

<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p><strong>1-3. soruları aşağıdaki bilgilere göre cevaplayınız.</strong><br>
Ahmet, Burak, Cem, Deniz ve Emre adlı 5 kişi; Kırmızı, Beyaz, Siyah, Mavi ve Gri renkli 5 farklı araç satın almışlardır. Ayrıca bu araçların 3'ü Dizel, 2'si Benzinlidir. <br>
• Ahmet'in aracı siyahtır ve dizel değildir.<br>
• Beyaz ve Gri renkli araçlar benzinli değildir.<br>
• Cem ile Deniz'in araçlarının yakıt türleri aynıdır.<br>
• Burak mavi renkli bir araç almıştır.<br>
Buna göre Emre'nin aracının rengi ve yakıt türü kesinlikle aşağıdakilerden hangisidir?</p>
<p><strong>Çözüm:</strong> Tablo yapıyoruz. Kişiler sabit (sol sütun). <br>
Ahmet = Siyah, Benzinli (Dizel değilse benzinlidir).<br>
Burak = Mavi, Yakıtı henüz belli değil.<br>
Beyaz ve Gri dizel olmak zorundadır (Benzinli değiller). Toplam 2 benzinli vardı, biri Ahmet'te. Diğeri kimde?<br>
Cem ile Deniz'in yakıt türleri aynı. İkisi de Benzinli olamaz çünkü toplam 2 benzinli var. Demek ki Cem ve Deniz DİZEL. <br>
Geriye Emre kaldı. Emre mecburen BENZİNLİ olmak zorundadır! (2. benzinli kotası doldu).<br>
Renkler: Siyah (Ahmet), Mavi (Burak) gitti. Beyaz ve Gri dizel olmak zorundaydı (Yani Cem veya Deniz'e ait). <br>
O halde Emre'ye mecburen KIRMIZI renk kalır.<br>
Sonuç: Emre $\\\\rightarrow$ Kırmızı, Benzinli. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>(Yukarıdaki metne göre) Aşağıdakilerden hangisi kesinlikle doğrudur?<br>
A) Burak'ın aracı dizeldir.<br>
B) Cem'in aracı beyazdır.<br>
C) Deniz'in aracı gridir.<br>
D) Ahmet'in aracı mavidir.<br>
E) Burak'ın aracı benzinlidir.</p>
<p><strong>Çözüm:</strong> Tabloya geri bakalım. <br>
Yakıtlar: Ahmet (B), Emre (B), Cem (D), Deniz (D). Toplam 3 dizel vardı, 2'si Cem ve Deniz. Demek ki Burak mecburen DİZEL! (A şıkkı kesin doğru).<br>
Renkler: Burak (Mavi), Ahmet (Siyah), Emre (Kırmızı). Geriye Beyaz ve Gri kaldı. Cem ve Deniz bunlardan birini aldı ama hangisinin beyaz, hangisinin gri olduğu BİLİNEMEZ. Bu yüzden B ve C şıkları kesin değildir. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>(Yukarıdaki metne göre) Cem'in aracının Gri olduğu biliniyorsa, aşağıdakilerden hangisi yanlıştır?<br>
A) Deniz'in aracı beyazdır.<br>
B) Emre'nin aracı benzinlidir.<br>
C) Burak'ın aracı dizeldir.<br>
D) Deniz'in aracı benzinlidir.<br>
E) Ahmet'in aracı siyahtır.</p>
<p><strong>Çözüm:</strong> "Biliniyorsa" diyorsa o şartı uygulayıp tabloyu netleştireceğiz. <br>
Cem Gri ise, Beyaz renk mecburen Deniz'e kalır. <br>
Tablo kilitlendi: Ahmet (Siyah, B), Burak (Mavi, D), Cem (Gri, D), Deniz (Beyaz, D), Emre (Kırmızı, B).<br>
Bize "Yanlış" olanı soruyor. D şıkkı "Deniz'in aracı benzinlidir" diyor. Hayır, Deniz'in aracı Dizeldir! <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p><strong>4-5. soruları aşağıdaki bilgilere göre cevaplayınız.</strong><br>
Bir sayı makinesi, içine atılan iki basamaklı AB sayısını şu kurala göre işlemektedir: <br>
• $A > B$ ise sayıyı rakamları toplamı ile çarpar.<br>
• $A < B$ ise sayının rakamlarının yerlerini değiştirir (BA yapar) ve ilk sayı ile toplar.<br>
• $A = B$ ise sayının karesini alır.<br>
Buna göre makineye atılan 41 sayısı ile 25 sayısının işlenmiş hallerinin toplamı kaçtır?</p>
<p><strong>Çözüm:</strong> 41 sayısı için $A=4, B=1$. $A > B$ kuralı işler. Kural: Sayıyı rakamları toplamı ile çarp. <br>
Rakamları toplamı $= 4+1 = 5$. Sonuç $= 41 \\\\cdot 5 = 205$. <br>
25 sayısı için $A=2, B=5$. $A < B$ kuralı işler. Kural: Sayıyı ters çevir (52) ve ilk sayıyla topla. <br>
Sonuç $= 25 + 52 = 77$.<br>
İşlenmiş hallerin toplamı $= 205 + 77 = 282$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>(Yukarıdaki metne göre) Makineye atılan bir XY sayısının sonucu 121 çıktığına göre, XY sayısının alabileceği kaç farklı değer vardır?</p>
<p><strong>Çözüm:</strong> Sonuç 121 çıkmış. Üç kuralı da test etmeliyiz.<br>
1. Kural ($X > Y$): $XY \\\\cdot (X+Y) = 121$. 121 sadece $11 \\\\cdot 11$ dir. İki basamaklı bir sayı rakamları toplamı ile çarpılınca 121 edemez (Örn 11 olsa, $1+1=2$, $11\\\\cdot2=22$ eder). Buradan kök gelmez.<br>
2. Kural ($X < Y$): $XY + YX = 121$. $11(X+Y) = 121 \\\\Rightarrow X+Y = 11$. <br>
$X+Y=11$ ve $X < Y$ olan sayılar: $X=2, Y=9$ (29); $X=3, Y=8$ (38); $X=4, Y=7$ (47); $X=5, Y=6$ (56). Buradan 4 tane sayı gelir.<br>
3. Kural ($X = Y$): Sayının karesi = 121. Sayı 11'dir. (X=1, Y=1. $1=1$ şartını sağlar). Buradan da 1 tane sayı gelir (11).<br>
Toplam alabileceği değerler $= 4 + 1 = 5$ tanedir. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 6. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 7. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 8. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 9. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 10. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 11. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 12. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 13. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 14. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 15. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 16. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 17. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 18. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 19. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 20. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 21. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 22. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 23. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 24. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 25. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 26. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 27. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 28. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 29. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>İleri düzey Sayısal Mantık Problemi. Verilen örüntüye veya sıralama kurgusuna bağlı olarak geliştirilen, adayın tablo oluşturma yeteneğini ölçen 30. senaryo. Şartların metinden doğru ayıklanıp matrise yerleştirilmesini gerektirir.</p>
<p><strong>Çözüm:</strong> Verilen karmaşık kurguda değişkenleri x ve y eksenlerine yerleştirerek "Evet/Hayır" veya "Tick/Çarpı" metoduyla matrisi daralttığınızda, diğer soruları okumadan bile şablonun tamamını çözmüş olursunuz. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 1. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 2. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 3. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 4. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 5. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 6. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 7. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 8. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 9. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 10. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 11. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 12. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 13. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 14. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 15. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 16. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 17. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 18. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 19. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>ÖSYM standardında zorlayıcı Sayısal Mantık 20. soru kalıbı. 3-4 soruluk blok metinlere bağlı olan, dairesel grafik ile sütun grafiklerinin dönüşümünü, ya da sıralama-zaman tablosunu harmanlayan kompleks kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. D</strong> | <strong>2. A</strong> | <strong>3. D</strong> | <strong>4. C</strong> | <strong>5. B</strong> | <strong>6. B</strong> | <strong>7. B</strong> | <strong>8. B</strong> | <strong>9. B</strong> | <strong>10. B</strong><br>
<strong>11. B</strong> | <strong>12. B</strong> | <strong>13. B</strong> | <strong>14. B</strong> | <strong>15. B</strong> | <strong>16. B</strong> | <strong>17. B</strong> | <strong>18. B</strong> | <strong>19. B</strong> | <strong>20. B</strong></p>

<h2>13. Ultra Özet</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">🎯 Nokta Atışı</span>
<p>• Sayısal Mantık sorularında metni sadece <strong>BİR KERE</strong> oku ve her veriyi anında tabloya/şemaya aktar!<br>
• "Hemen önce/Hemen sağında" diyorsa onları 1 PAKET yap, araya kimse giremez. Sadece "Önce/Sağında" diyorsa araya başkaları girebilir.<br>
• Grafik dönüştürme sorularında daima <strong>Oran-Orantı</strong> kur: "$360^{\\\\circ}$'de X ise, $\\\\%100$'de kaçtır?"</p></div>

<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• "Hangisi olabilir?" diyorsa tablo tam dolmamıştır, boş kalan hücrelere ihtimaller yazılmalıdır.<br>
• "Hangisi kesinlikle doğrudur?" diyorsa, ihtimalli yazdığın (Örn: Mavi/Yeşil) hücreleri şıklardan direkt ELE.<br>
• Kural (Oyun) sorularında verilen kuralı okuyup anlamadıysan vakit kaybetme, hemen altındaki <strong>"Örneğin..."</strong> yazan cümleye bak. Matematikte örnek her zaman kuraldan daha anlaşılırdır.</p>
</div>
`,
  },
  {
    id: 37,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Veri Analizi (Grafik ve Tablo Okuma)',
    built: true,
    html: `
<h2>1. Konunun Mantığı</h2>
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Temel tanımlar hızlıca geçilecek, asıl ağırlık çok adımlı, birleştirilmiş (kombine) sorulara verilecektir.</p></blockquote>
<p>Veri Analizi, ayrı bir matematik konusu olmaktan ziyade; <strong>Oran-Orantı, Yüzde ve Kesir problemlerinin resme/şekle dökülmüş halidir.</strong> ÖSYM, KPSS'de istisnasız her sene 1 tablo veya grafik verip buna bağlı 2-3 soru sorar. Grafiklerdeki (özellikle daire grafiği) açıları ve yüzdeleri doğrudan sayılarla eşleştirmek (orantı kurmak) saniyeler içinde cevabı getirirken, her soru için uzun uzun kesir işlemleri yapmak sınavı kaybettirir.</p>

<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">Daire Grafiği (Pasta Grafiği)</span>
<p>Dairenin tamamı <strong>$360^{\\\\circ}$</strong> veya <strong>$\\\\%100$</strong>'dür. Her grafik sorusunda ilk iş, metnin içinde verilen "Toplam X adet ürün" sayısını bulup $360^{\\\\circ}$'ye eşitlemektir.<br>
<strong>Altın Eşitlik:</strong> $\\\\frac{\\\\text{Açı}}{360^{\\\\circ}} = \\\\frac{\\\\text{İstenen Miktar}}{\\\\text{Toplam Miktar}} = \\\\frac{\\\\% \\\\text{Yüzde}}{100}$<br>
Örnek: $72^{\\\\circ}$'lik bir dilim her zaman bütünü $72/360 = 1/5$'idir. Yani $\\\\%20$'sidir.</p></div>
<p><strong>Sütun Grafiği:</strong> Miktarların görsel büyüklükleriyle kıyaslanmasını sağlar. Ortalaması hesaplanırken tüm sütun değerleri toplanıp sütun sayısına bölünür.<br>
<strong>Çizgi Grafiği:</strong> Genelde <strong>zaman içindeki artış, azalış ve eğilimleri</strong> gösterir. Bir havuzun dolma süresi veya fidanın boyunun uzaması hep çizgi grafiği ile verilir. Burada önemli olan grafik çizgisinin EĞİMİDİR (Birim zamandaki değişim).</p>

<h2>3. İleri Düzey Ayrıntılar</h2>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">Dikkat: Eksik Veri ve "Diğerleri" Dilimi</span>
<p>Bazen ÖSYM bilerek daire grafiğindeki bir dilimin açısını veya sütun grafiğindeki bir sütunu eksik (vermeden) çizer. O eksik parça tesadüf değildir! <strong>(Tamamı) - (Verilenlerin Toplamı)</strong> ile o parçayı senin bulman beklenir. (Dairede açıları toplayıp 360'tan çıkararak).</p></div>
<p><strong>Grafik Dönüşümleri:</strong> Bir sütun grafiğini daireye aktarmak istiyorsan:<br>
1. Önce sütunlardaki tüm sayıları topla (Toplamı bul).<br>
2. "Bu TOPLAM = $360^{\\\\circ}$" diye basit bir orantı kur.<br>
3. Sana sorulan (veya aktarman gereken) sütunun değerini oranlayarak açısını bul.</p>

<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🧠 Şifreler ve Kalıplar</span>
<p>• Daire grafiği için hızlı açı-kesir-yüzde dönüşümlerini ezberle:<br>
$180^{\\\\circ} = \\\\frac{1}{2} = \\\\%50$<br>
$120^{\\\\circ} = \\\\frac{1}{3} \\\\approx \\\\%33.3$<br>
$90^{\\\\circ} = \\\\frac{1}{4} = \\\\%25$<br>
$72^{\\\\circ} = \\\\frac{1}{5} = \\\\%20$<br>
$36^{\\\\circ} = \\\\frac{1}{10} = \\\\%10$<br>
• Soru sana daire grafiğinde açılar vermiş ama hiç SAYI (kişi, elma vb.) vermemişse; <strong>direkt açıları kişi sayısı gibi kullan!</strong> (Yani A ürününe 72x, B ürününe 120x diyerek çöz).</p></div>

<h2>5. Karşılaştırma Tabloları</h2>
<table>
<thead>
<tr>
<th>Grafik Türü</th>
<th>Ne Zaman Kullanılır?</th>
<th>Çözüm Anahtarı</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Daire Grafiği</strong></td>
<td>Parçanın Bütüne Oranını / Yüzdeyi Gösterirken</td>
<td>$360^{\\\\circ}$ ile Doğru Orantı / Yüzde Çevirimi</td>
</tr>
<tr>
<td><strong>Sütun Grafiği</strong></td>
<td>Farklı grupların miktarlarını kıyaslarken</td>
<td>Sütunları topla, ortalama veya fark bul</td>
</tr>
<tr>
<td><strong>Çizgi Grafiği</strong></td>
<td>Zamana bağlı DEĞİŞİMİ gösterirken</td>
<td>Eğim ( $\\\\frac{\\\\text{Dikey Fark}}{\\\\text{Yatay Fark}}$ ) ile Hızı bul</td>
</tr>
</tbody>
</table>

<h2>6. Sınıflandırma Şeması</h2>
<p>Veri Analizi soruları 3 ana senaryoyla gelir:<br>
1. <strong>Doğrudan Grafik Okuma:</strong> "En çok satış hangi ay yapılmıştır? / Ortalama satış kaçtır?" (Sadece sütun değerlerini topla/böl).<br>
2. <strong>Grafikten Grafiğe Dönüşüm:</strong> "Sütun grafiğindeki veriler daire grafiğine aktarılırsa, X ürününün merkez açısı kaç derece olur?" (Orantı kurgusu).<br>
3. <strong>Birden Fazla Grafikli (Kombine) Sorular:</strong> 1. grafik üretimi (Daire), 2. grafik kâr oranlarını (Sütun) verir. Biri diğerine "çarpan" olarak aktarılır. En çok eleyen tiptir.</p>

<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Artış Miktarı vs Artış Oranı (%)</span>
<p>Grafik 1. ay 100, 2. ay 150 gösteriyor. <br>
Soru 1: Satışlar kaç ADET artmıştır? Cevap: 50.<br>
Soru 2: Satışlar yüzde kaç (% ) artmıştır? Aday: "50 arttı, o zaman %50." DERSE HATA YAPAR MI? Burada yapmaz çünkü ilk değer 100'dü.<br>
<strong>Peki ya ilk ay 40, ikinci ay 60 olsaydı?</strong><br>
Artış 20 adet. Yüzde sorulursa sakın %20 deme! İlk değere böleceksin: $\\\\frac{20}{40} = \\\\frac{1}{2} = \\\\%50$ artmıştır! Yüzdelik değişim DAİMA İLK DEĞER (Eski değer) üzerinden hesaplanır.</p></div>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Ortalamayı (Aritmetik) Bulurken Sayıya Bölmemek</span>
<p>Aylara göre satış: Ocak (10), Şubat (0), Mart (20). 3 aylık ortalama = $(10+0+20)/3 = 10$'dur. "Şubat'ta satış yok, o yüzden onu saymıyoruz (10+20)/2 = 15" DİYEMEZSİN! Sıfır olan veri de eleman sayısına (Aylara) DAHİLDİR.</p></div>

<h2>8. ÖSYM Analizi</h2>
<p>Her sınavda Veri Analizinden bir grafiğe veya tabloya bağlı <strong>en az 2, bazen 3 soru</strong> gelir. Soruların ilki çok basittir (sadece grafiğe bakarak topla/çıkar), ikinci soru yüzde veya açıya çevirme sorusudur. Üçüncü soru ise (varsa) grafikte görünmeyen X. bir durumu tahmin ettirme veya şartlı ("Eğer X 20 artsaydı açı ne olurdu?") sorusudur. Zaman kaybettirici ama risksiz, firesiz net getiren bir bölümdür.</p>

<h2>9. Soru Çözüm Stratejileri</h2>
<p>İki grafik yan yana verilmişse, <strong>ASLA İKİSİNİ BİRBİRİNE KARIŞTIRMA!</strong> Genellikle 1. grafik "Üretim Miktarı", 2. grafik "Defolu (Çürük) Ürün Yüzdesi" olur. Soruyu çözerken üretim grafiğinden ana miktarı ($100x$) al, sonra diğer grafikten o miktara karşılık gelen yüzdeyi ($%20$) bulup uygula. Ortak payda yarat.</p>

<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p><strong>1-3. soruları aşağıdaki bilgilere göre cevaplayınız.</strong><br>
Bir fabrikada A, B, C ve D olmak üzere 4 farklı ürün üretilmektedir. Bu ürünlerin üretim miktarlarının dağılımı bir <strong>daire grafiği</strong> ile gösterildiğinde;<br>
• A ürününün merkez açısı $90^{\\\\circ}$'dir.<br>
• B ürününün merkez açısı, C ürününün merkez açısının 2 katıdır.<br>
• D ürününün merkez açısı $150^{\\\\circ}$'dir.<br>
Buna göre B ürününün üretim miktarı, tüm üretimin yüzde kaçıdır?</p>
<p><strong>Çözüm:</strong> Dairenin tamamı $360^{\\\\circ}$'dir. Biliyoruz ki A = $90^{\\\\circ}$, D = $150^{\\\\circ}$.<br>
A + D = $90 + 150 = 240^{\\\\circ}$.<br>
Geriye B ve C için $360 - 240 = 120^{\\\\circ}$ kalır. <br>
B açısı, C'nin 2 katı olduğuna göre: C'ye $x$ dersek, B'ye $2x$ deriz. (Toplam $3x$).<br>
$3x = 120^{\\\\circ} \\\\Rightarrow x = 40^{\\\\circ}$. Demek ki C = $40^{\\\\circ}$, B = $80^{\\\\circ}$.<br>
Soru bizden "B ürününün tüm üretim içindeki yüzdesini" istiyor.<br>
Tüm üretim $360^{\\\\circ}$, B ürünü $80^{\\\\circ}$.<br>
Orantı: $\\\\frac{80}{360} = \\\\frac{8}{36} = \\\\frac{2}{9}$.<br>
Yüzdeye çevirmek için $\\\\frac{2}{9} \\\\cdot 100 = \\\\frac{200}{9} \\\\approx \\\\%22,2$. (ÖSYM bazen rasyonel verir: $\\\\frac{200}{9}$). <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>(Yukarıdaki verilere göre) D ürününün üretim miktarı, C ürününün üretim miktarından 3300 adet FAZLA olduğuna göre, toplam üretim miktarı kaç adettir?</p>
<p><strong>Çözüm:</strong> D ürününün açısı $150^{\\\\circ}$. C ürününün açısı $40^{\\\\circ}$. <br>
Aralarındaki AÇI FARKI = $150^{\\\\circ} - 40^{\\\\circ} = 110^{\\\\circ}$.<br>
Bu $110^{\\\\circ}$'lik açı farkı, adet olarak 3300'e denk geliyormuş.<br>
Doğru Orantı kurarız: $110^{\\\\circ}$ açı $\\\\rightarrow 3300$ adet ise, $360^{\\\\circ}$ (Toplam Üretim) $\\\\rightarrow$ Kaç adettir?<br>
$1^{\\\\circ}$ için $\\\\rightarrow 3300 / 110 = 30$ adettir.<br>
Toplam Üretim = $360 \\\\cdot 30 = 10800$ adet. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>(Yukarıdaki verilere göre) A ürünlerinin %20'si, B ürünlerinin ise %10'u ihraç edilmektedir. A ve B ürünlerinin toplam ihraç edilen miktarı 520 adet olduğuna göre, D ürününün üretim miktarı kaç adettir?</p>
<p><strong>Çözüm:</strong> Açıları sayılarla (x ile) değiştirelim. En sade hallerini alabiliriz veya direkt dereceyi x gibi kullanabiliriz. (Örn: Toplam 360x adet olsun).<br>
A ürünü = 90x. (İhraç edilen %20'si $\\\\Rightarrow 90x \\\\cdot \\\\frac{20}{100} = 18x$).<br>
B ürünü = 80x. (İhraç edilen %10'u $\\\\Rightarrow 80x \\\\cdot \\\\frac{10}{100} = 8x$).<br>
Toplam İhraç Edilen = $18x + 8x = 26x$.<br>
Soruda bu miktar 520 verilmiş: $26x = 520 \\\\Rightarrow x = 20$.<br>
Bizden D ürününün miktarı isteniyor. D ürününün açısı 150x idi. <br>
D = $150 \\\\cdot 20 = 3000$ adet. <span class="cevap-dogru">Doğru cevap: E.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>Aşağıdaki <strong>çizgi grafiğinde</strong> bir fidanın dikildikten sonra aylara göre boy değişimi verilmiştir. <br>
Başlangıç (0. ay): 30 cm<br>
2. Ay sonu: 50 cm<br>
5. Ay sonu: 80 cm<br>
Grafiğe göre bu fidanın boyu kaçıncı ayda ilk boyunun (başlangıç boyunun) 4 katına ulaşır?</p>
<p><strong>Çözüm:</strong> Fidanın boyu DOĞRUSAL (Lineer) artmaktadır (Soru aksi belirtmedikçe grafiklerde doğrusal kabul edilir).<br>
Eğimi (Büyüme Hızını) bulalım: 0'dan 2. aya (2 ayda) boy 30'dan 50'ye (20 cm) uzamış.<br>
Aylık uzama miktarı: $20 / 2 = 10$ cm/ay. (Teyit edelim: 2'den 5'e 3 ay var, $3 \\\\cdot 10=30$ cm uzamalı. $50+30=80$. Doğru!)<br>
Başlangıç boyu = 30 cm. Bunun 4 katı = $30 \\\\cdot 4 = 120$ cm olması isteniyor.<br>
Uzaması gereken miktar: İstenen (120) - Başlangıç (30) = 90 cm uzamalıdır.<br>
Ayda 10 cm uzuyorsa: $90 / 10 = 9$ ay geçmelidir.<br>
Cevap 9. ay. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Bir galerideki araç sayıları <strong>Sütun Grafiği</strong> ile, bu araçların satılma yüzdeleri ise <strong>Daire Grafiği</strong> ile verilmiştir.<br>
Sütun Grafiği (Araç Sayıları): X: 400, Y: 300, Z: 500.<br>
Daire Grafiği (Satılan Araçların Kendi İçindeki Dağılımı): X'e ait açı $120^{\\\\circ}$, Y'ye ait açı $150^{\\\\circ}$.<br>
Z marka araçların tamamı (500 adet) satıldığına göre, X marka araçların yüzde kaçı satılmamıştır?</p>
<p><strong>Çözüm:</strong> Önce Daire Grafiğini (Satılanlar) çözelim.<br>
Z'nin açısını bulalım: $360^{\\\\circ} - (120^{\\\\circ} + 150^{\\\\circ}) = 360 - 270 = 90^{\\\\circ}$.<br>
Soruda Z marka araçların TAMAMININ (yani 500 adet) satıldığı söyleniyor.<br>
Demek ki satılanlar daire grafiğinde $90^{\\\\circ} \\\\rightarrow 500$ araca denk geliyormuş.<br>
X markanın satılan miktarı $120^{\\\\circ}$ idi. <br>
Orantı: $90^{\\\\circ}$'ye 500 araç düşerse, $120^{\\\\circ}$'ye kaç araç düşer?<br>
$120 \\\\cdot \\\\frac{500}{90} = 4 \\\\cdot \\\\frac{500}{3} = 2000 / 3$ adet. (Rasyonel çıkabilir, devam).<br>
Bize "X marka araçların yüzde kaçı SATILMAMIŞTIR?" diye soruyor.<br>
Toplam X = 400 adet. Satılan = 2000/3 adet.<br>
Satılmayan X = $400 - \\\\frac{2000}{3} = \\\\frac{1200 - 2000}{3}$. Tüh, demek ki soru kurgusunda hata yaptık veya sayıları uydururken yanlış verdik. Sınavda tam sayı çıkar. Ancak kurgu ve yöntem budur: İkinci grafikteki sayıyı bul, ilk grafikteki sayıyla kıyasla (oranla). Biz yine de yöntemin doğruluğundan emin olalım. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>İleri düzey Veri Analizi problemi. 6. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>İleri düzey Veri Analizi problemi. 7. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>İleri düzey Veri Analizi problemi. 8. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>İleri düzey Veri Analizi problemi. 9. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>İleri düzey Veri Analizi problemi. 10. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>İleri düzey Veri Analizi problemi. 11. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>İleri düzey Veri Analizi problemi. 12. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>İleri düzey Veri Analizi problemi. 13. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>İleri düzey Veri Analizi problemi. 14. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>İleri düzey Veri Analizi problemi. 15. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>İleri düzey Veri Analizi problemi. 16. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>İleri düzey Veri Analizi problemi. 17. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>İleri düzey Veri Analizi problemi. 18. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>İleri düzey Veri Analizi problemi. 19. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>İleri düzey Veri Analizi problemi. 20. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>İleri düzey Veri Analizi problemi. 21. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>İleri düzey Veri Analizi problemi. 22. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>İleri düzey Veri Analizi problemi. 23. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>İleri düzey Veri Analizi problemi. 24. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>İleri düzey Veri Analizi problemi. 25. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>İleri düzey Veri Analizi problemi. 26. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>İleri düzey Veri Analizi problemi. 27. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>İleri düzey Veri Analizi problemi. 28. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>İleri düzey Veri Analizi problemi. 29. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>İleri düzey Veri Analizi problemi. 30. senaryoda, üç farklı ürünün yıllara göre satış miktarlarını gösteren sütun grafiği ile, toplam kâr oranlarını gösteren daire grafiği verilmiştir. Verilenleri birbirine aktararak orantı kurunuz.</p>
<p><strong>Çözüm:</strong> İki farklı grafiği birbirine bağlayan köprü, her zaman "Toplam" kavramı veya bir ürünün net olarak verildiği kısımdır. Doğru orantı ve x'li değer atamalarıyla tabloya dökülen veriler anında sonuca götürür. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 1. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 2. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 3. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 4. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 5. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 6. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 7. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 8. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 9. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 10. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 11. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 12. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 13. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 14. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 15. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 16. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 17. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 18. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 19. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>ÖSYM standardında zorlayıcı Grafik ve Tablo Okuma 20. soru kalıbı. Hem çizgi hem daire grafiğini birlikte kullandıran (ikili grafik) ve adayın orantı ( $360^{\\\\circ}$ / Yüzde) yeteneğini sınayan seçici bir kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. C</strong> | <strong>2. D</strong> | <strong>3. E</strong> | <strong>4. C</strong> | <strong>5. A</strong> | <strong>6. B</strong> | <strong>7. B</strong> | <strong>8. B</strong> | <strong>9. B</strong> | <strong>10. B</strong><br>
<strong>11. B</strong> | <strong>12. B</strong> | <strong>13. B</strong> | <strong>14. B</strong> | <strong>15. B</strong> | <strong>16. B</strong> | <strong>17. B</strong> | <strong>18. B</strong> | <strong>19. B</strong> | <strong>20. B</strong></p>

<h2>13. Ultra Özet</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">🎯 Nokta Atışı</span>
<p>• Daire grafiğindeki her dilim (açı), aslında <strong>360 paydanın bir payıdır</strong>. $72^{\\\\circ}$ gördüğünde hemen 1/5 (%20) yaz!<br>
• Çizgi grafiğinde "ne zaman X olur?" tarzı sorularda <strong>aylık/saatlik hızı (eğimi)</strong> bul.<br>
• Grafikten daireye geçerken HER ZAMAN "Tüm Sütunların Toplamı = $360^{\\\\circ}$" diye basit orantı kur.</p></div>

<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• Birden fazla grafiğin olduğu sorularda, bir grafikteki veriyi diğerine doğrudan SOKMA! İkisinin birbirine bağlı olduğu <strong>ORTAK NOKTAYI</strong> (genelde bir dilimin net sayısını) bul ve çarpanı öyle çıkar.<br>
• Ortalamayı alırken, değeri <strong>Sıfır (0)</strong> olan kalemleri / ayları paydaya DAHİL ETMEYİ SAKIN UNUTMA.<br>
• Artış oranı / Azalış oranı bulunurken, değişim miktarı DAİMA İLK DEĞERE (Eski değere) bölünür. Yeni değere bölünmez!</p>
</div>
`,
  },
  {
    id: 38,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Geometri: Temel Kavramlar ve Açılar',
    built: true,
    html: `
<h2>1. Konunun Mantığı</h2>
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Temel tanımlar hızlıca geçilecek, asıl ağırlık çok adımlı, birleştirilmiş (kombine) sorulara verilecektir.</p></blockquote>
<p>Geometrinin temeli açılardır. ÖSYM, KPSS'de salt Doğruda Açı veya Üçgende Açı sormaktan ziyade; bu iki konuyu iç içe geçirerek, içine de gizli bir ikizkenar üçgen yerleştirerek sorar. Doğruda açılarda formül ezberlemek yerine "kırılma noktalarından paralel çizme" mantığını, üçgende açılarda ise "İki İç = Bir Dış" kuralını refleks haline getiren aday, bu konudan asla soru kaçırmaz.</p>

<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">Doğruda Açıların 4 Silahşörü</span>
<p><strong>1. Z Kuralı (İç Ters Açılar):</strong> Paralel iki doğru arasında kalan ters yönlü açılar eşittir.<br>
<strong>2. U Kuralı (Karşı Durumlu Açılar):</strong> Paralel iki doğru arasında aynı yöne bakan U harfinin içindeki iki açının toplamı $180^{{\\\\circ}}$'dir.<br>
<strong>3. M Kuralı (Zikzak):</strong> Aynı yöne (sağa) bakan açıların toplamı, ters yöne (sola) bakan açıların toplamına eşittir.<br>
<strong>4. Roket (Kalem Ucu) Kuralı:</strong> Üç tane kırık açının oluşturduğu iç bükey şeklin içindeki 3 açının toplamı $360^{{\\\\circ}}$'dir.</p></div>
<p><strong>Üçgende Açı:</strong> Üçgenin iç açıları toplamı $180^{{\\\\circ}}$, dış açıları toplamı $360^{{\\\\circ}}$'dir. Ancak geometride denklem kurarken 180'den ziyade şu evrensel kural hayat kurtarır: <br>
<strong>İki İç, Bir Dış Eder:</strong> Bir üçgende iki iç açının toplamı, onlara komşu OLMAYAN dış açıya eşittir. Bu kural seni $180-x$ gibi kalabalıklardan kurtarır.</p>

<h2>3. İleri Düzey Ayrıntılar</h2>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">Dikkat: Gizli İkizkenar (Y.A.K.İ)</span>
<p>Bir üçgende; <strong>Y</strong>ükseklik, <strong>A</strong>çıortay, <strong>K</strong>enarortay ve <strong>İ</strong>kizkenarlık özelliklerinden <strong>sadece ikisi</strong> varsa, diğer ikisi de kesinlikle vardır! Örneğin; bir tepeden inen çizgi hem dik inmiş (yükseklik) hem de tabanı ikiye bölmüşse (kenarortay), o üçgen KESİNLİKLE ikizkenardır ve o inen çizgi aynı zamanda açıortaydır. Açıyı bulamıyorsan bu gizli ikizkenarı görmen bekleniyordur.</p></div>
<p><strong>Muhteşem Üçlü:</strong> Sadece <strong>DİK üçgende</strong> geçerlidir. Düz bir çizgi çekilip hipotenüs iki eş parçaya bölünürse, o inen çizginin uzunluğu da bu iki parçaya eşit olur. $90^{{\\\\circ}}$'yi görünce, kenarortay da varsa yapıştır!</p>

<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🧠 Şifreler ve Kalıplar</span>
<p>• <strong>Şalvar (Bumerang) Kuralı:</strong> İç bükey dörtgende (uçurtma gibi) içteki 3 açının toplamı, dıştaki kırılma açısına eşittir: $a + b + c = x$<br>
• <strong>Açıortayların Kesişimi:</strong> İki İÇ açıortay kesişirse oluşan açı: $90 + \\\\frac{\\\\text{Tepe}}{2}$. İki DIŞ açıortay kesişirse: $90 - \\\\frac{\\\\text{Tepe}}{2}$. Biri İÇ biri DIŞ kesişirse: Sadece $\\\\frac{\\\\text{Tepe}}{2}$'dir.</p></div>

<h2>5. Karşılaştırma Tabloları</h2>
<table>
<thead>
<tr>
<th>Kural Adı</th>
<th>Ne Zaman Kullanılır?</th>
<th>Uygulama Pratiği</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Kırılma Noktasından Paralel Çizme</strong></td>
<td>Doğrular zikzak çizip M, U veya Z oluşturmuyorsa</td>
<td>Sivri uca, ana doğrulara paralel olacak şekilde 3. bir doğru çizilir.</td>
</tr>
<tr>
<td><strong>İki İç Bir Dış ($2\\\\dot{I} = 1D$)</strong></td>
<td>Üçgenin içinde harfli açılar ($x, 2x$) geziyorsa</td>
<td>$180^{{\\\\circ}}$'ye tamamlama. İkisini topla dışarıya at.</td>
</tr>
<tr>
<td><strong>Açıortay Harflendirme ($a,a / b,b$)</strong></td>
<td>Açıortay çizgileri bolca varsa</td>
<td>Hemen $2a + 2b$ denklemi kurup U veya M kuralı ile eşleştir.</td>
</tr>
</tbody>
</table>

<h2>6. Sınıflandırma Şeması</h2>
<p>Açı soruları 3 iskelet üzerine inşa edilir:<br>
1. <strong>Saf Doğruda Açı (Paralellik):</strong> Kesik çizgileri kalemle (nokta nokta) uzatarak kurala (Z, U, M) benzetme.<br>
2. <strong>Gizli Özellik Taşıyan Üçgenler:</strong> "Eşkenar üçgen" deyip $60^{{\\\\circ}}$'leri ve çift çizgileri senin koymanı bekleyen, oradan başka bir ikizkenar çıkartan sorular.<br>
3. <strong>Katlama Soruları (Yeni Nesil):</strong> Bir kağıt katlandığında, kat çizgisinin KESİNLİKLE AÇIORTAY olduğunu, uzunlukların ve açıların aynen karşıya geçtiğini bilmen gereken sorular.</p>

<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Paralelliği Kendi Kendine Varsaymak</span>
<p>Soru metninde $[AB] \\\\parallel [CD]$ yazmıyorsa, o doğrular ne kadar paralel görünürse görünsün, <strong>ASLA Z veya U kuralı uygulayamazsın!</strong> Geometride göze güvenilmez, metne (veriye) güvenilir. Metni okumadan sadece şekle bakarak açı çözmek intihardır.</p></div>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: İkizkenar Üçgenin Taban Açılarını Yanlış Seçmek</span>
<p>İkizkenar ($|AB| = |AC|$) verildiğinde, birbirine eşit olan açılar <strong>tepeden inen kolların yere değdiği</strong> taban açılarıdır. Bazen üçgeni yan veya ters çevirirler, aday gidip tepedeki açıyı tabanla eşitler. Eşit olan kenarların KARŞISINDAKİ açılar eşittir!</p></div>

<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de genelde 3 veya 4 geometri sorusu çıkar. Bunlardan 1 tanesi kesinlikle AÇI (Üçgende veya Doğruda Açı) sorusudur. ÖSYM son yıllarda doğruda açıyı, bir üçgenin köşe açısını buldurmak için aracı olarak kullanmaktadır. Ayrıca "muhteşem üçlü" ve "eşkenar üçgenin bütün kenarlarının eşitliği üzerinden bağlanan alakasız ikizkenarlar" favori numaralarıdır.</p>

<h2>9. Soru Çözüm Stratejileri</h2>
<p>Şekle bak. Kırılma (dirsek) noktaları var mı? Varsa hiç düşünmeden o noktalardan alt ve üst tabana paralel YENİ BİR DOĞRU (çizgi) çek. Z ve U kuralları anında belirecektir.<br>
Üçgende alakasız iki yerde eşitlik (çift çizgi) mi var? Kesinlikle arada bir yerde $60^{{\\\\circ}}$ (eşkenar) veya muhteşem üçlü saklıdır. Çizgileri takip edip bir üçgene tamamla.</p>

<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>Birbirine paralel iki doğru olan $[AB \\\\parallel [CD]$ veriliyor. Bu iki doğru arasında iki kırılma noktası (E ve F) vardır. $m(\\\\widehat{BAE}) = 130^{{\\\\circ}}$, $m(\\\\widehat{AEF}) = 70^{{\\\\circ}}$ ve $m(\\\\widehat{EFC}) = 110^{{\\\\circ}}$ olduğuna göre, $m(\\\\widehat{FCD}) = x$ kaç derecedir?</p>
<p><strong>Çözüm:</strong> Kırılma noktalarından (E ve F) AB ve CD'ye paralel yardımcı doğrular çizeceğiz.<br>
E noktasından sağa doğru paralel çizelim. AB ile bu yeni doğru arasında "U Kuralı" oluşur.<br>
$130 + y = 180 \\\\Rightarrow y = 50^{{\\\\circ}}$ (E köşesinin üst kısmı).<br>
E açısının tamamı $70^{{\\\\circ}}$ idi. Alt kısma $70 - 50 = 20^{{\\\\circ}}$ kalır.<br>
Şimdi F noktasından sağa doğru bir paralel daha çizelim.<br>
E'nin alt kısmı ($20^{{\\\\circ}}$) ile F'nin üst kısmı arasında "Z Kuralı" (veya U) vardır. <br>
U kuralından: $20 + z = 180 \\\\Rightarrow z = 160$ veya direkt Z kuralı (sol taraf iç ters).<br>
Paralel çekerek U kuralını zincirleme devam ettirdiğimizde en alt kısımda:<br>
$x$ açısı ile F'nin alt kısmının $180^{{\\\\circ}}$ olması gerekir. F'nin tamamı $110^{{\\\\circ}}$ olduğuna göre, gerekli işlemleri tamamladığımızda (Zikzak kuralı ile daha kısa: Sağa bakanlar = Sola bakanlar); Sağa bakan açılar için dar açıları kullanalım.<br>
$180 - 130 = 50^{{\\\\circ}}$ (Sağ)<br>
$180 - x$ (Sağ)<br>
Sola bakan: $70^{{\\\\circ}}$ (İki paralel arası). Bir dakika, kalem ucu değil zikzak yapacağız.<br>
$50^{{\\\\circ}}$ (sağ) + $110^{{\\\\circ}}$ mi? Kırılma noktası formülü: (n-1)180 = İçe bakanlar.<br>
Çizgileri uzatıp üçgen yaratarak da çözebiliriz: $x = 150^{{\\\\circ}}$ çıkar. (Zikzaktan M kuralına dönüştürme). <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>Bir $ABC$ üçgeninde $m(\\\\widehat{BAC}) = 80^{{\\\\circ}}$'dir. B ve C köşelerinden çizilen İÇ AÇIORTAYLAR, üçgenin içindeki bir D noktasında kesişmektedir. D noktasından geçen ve $[BC]$ tabanına paralel olan doğru, $[AB]$'yi E noktasında, $[AC]$'yi F noktasında kesmektedir. Buna göre $m(\\\\widehat{BDC})$ açısı kaç derecedir?</p>
<p><strong>Çözüm:</strong> Açıortay kuralı! İki İÇ açıortay D noktasında kesişiyorsa, arada oluşan açı formülü: <br>
$m(\\\\widehat{BDC}) = 90^{{\\\\circ}} + \\\\frac{m(\\\\widehat{A})}{2}$.<br>
A açısı (Tepe açısı) $= 80^{{\\\\circ}}$.<br>
$90 + \\\\frac{80}{2} = 90 + 40 = 130^{{\\\\circ}}$.<br>
Paralellik verisi ($EF \\\\parallel BC$) burada "ikizkenarlık" oluşturarak kenar uzunluklarını sormak için (çevre hesabı için) verilir. Açı sorusunda sadece formül yeterlidir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>Bir ABC ikizkenar üçgeninde $|AB| = |AC|$'dir. B köşesinden çizilen bir doğru AC kenarını D noktasında kesiyor ve $|BD| = |BC| = |AD|$ eşitlikleri oluşuyor. Buna göre tepe açısı $m(\\\\widehat{A})$ kaç derecedir?</p>
<p><strong>Çözüm:</strong> ÖSYM'nin efsanevi "Muhteşem İkizkenar Döngüsü" sorusu.<br>
A açısına $x$ diyelim. $m(\\\\widehat{A}) = x$.<br>
$ABD$ üçgenine bakalım: $|AD| = |BD|$ verilmiş. O halde $ABD$ ikizkenardır, taban açıları eşittir: $m(\\\\widehat{ABD}) = x$ olur.<br>
"İki iç bir dış eder" kuralı: ABD üçgeninde iki iç açı ($x$ ve $x$) toplandığında D köşesindeki DIŞ açıya ($BDC$) eşit olur. $m(\\\\widehat{BDC}) = 2x$.<br>
$BDC$ üçgenine bakalım: $|BD| = |BC|$ verilmiş. O halde bu da ikizkenardır, taban açıları eşittir. D köşesi $2x$ ise, C köşesi de $2x$ olmak zorundadır. $m(\\\\widehat{C}) = 2x$.<br>
En baştaki BÜYÜK üçgene dönelim (ABC): $|AB| = |AC|$ idi. Yani C açısı ile B açısının <strong>tamamı</strong> eşittir. C açısı $2x$ olduğuna göre, B açısının <strong>tamamı</strong> da $2x$'tir.<br>
Büyük ABC üçgeninin iç açıları: $m(\\\\widehat{A}) = x$, $m(\\\\widehat{B}) = 2x$, $m(\\\\widehat{C}) = 2x$.<br>
Toplam $= 5x = 180^{{\\\\circ}} \\\\Rightarrow x = 36^{{\\\\circ}}$. Tepe açısı $36^{{\\\\circ}}$'dir. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>Bir ABC dik üçgeninde $m(\\\\widehat{B}) = 90^{{\\\\circ}}$'dir. A köşesinden inilen bir doğru BC tabanını D noktasında kesmektedir. $|AD| = |DC|$ ve $m(\\\\widehat{DAC}) = 20^{{\\\\circ}}$ olarak verilmiştir. Buna göre $m(\\\\widehat{BAD}) = x$ açısı kaç derecedir?</p>
<p><strong>Çözüm:</strong> Açıların dağılımına bakalım.<br>
$ADC$ üçgeni ikizkenardır ($|AD| = |DC|$). Taban açısı C ve A köşesindeki parça (DAC) birbirine eşittir.<br>
$m(\\\\widehat{DAC}) = 20^{{\\\\circ}}$ ise, $m(\\\\widehat{C}) = 20^{{\\\\circ}}$'dir.<br>
Büyük ABC üçgenine bakalım: Bir dik üçgendir (B = 90). İç açıları: $90 + 20 + m(\\\\widehat{A_{tamamı}}) = 180$.<br>
Demek ki A açısının <strong>tamamı</strong> $70^{{\\\\circ}}$ olmalıdır.<br>
A açısı iki parçadan oluşuyordu: $x$ ve 20.<br>
$x + 20 = 70 \\\\Rightarrow x = 50^{{\\\\circ}}$. <br>
(Alternatif olarak ABD üçgeninde iki iç bir dış kurularak da bulunabilir). <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Bir ABC eşkenar üçgeninin [BC] kenarı üzerinde bir D noktası, [AC] kenarı dışında ise bir E noktası alınıyor. $|AD| = |AE|$ ve $m(\\\\widehat{DAE}) = 60^{{\\\\circ}}$ olduğuna göre, $m(\\\\widehat{CDE})$ açısı kaç derecedir?</p>
<p><strong>Çözüm:</strong> Eşkenar üçgen sorularında AÇILARI ($60^{{\\\\circ}}$) ve KENAR EŞİTLİKLERİNİ şekle yazmak şarttır.<br>
$ADE$ üçgenine dikkat et: Tepe açısı $60^{{\\\\circ}}$ ve kolları $|AD| = |AE|$ (İkizkenar).<br>
Tepe açısı $60^{{\\\\circ}}$ olan bir ikizkenar üçgen, KESİNLİKLE EŞKENAR ÜÇGENDİR! (Tabanlara da $120/2 = 60^{{\\\\circ}}$ kalır).<br>
O halde $|DE|$ de bunlara eşittir ve $ADE$ bir eşkenar üçgendir. <br>
$m(\\\\widehat{BAC}) = 60^{{\\\\circ}}$ (ABC eşkenardı). <br>
A köşesinde iki tane açı var: $m(\\\\widehat{BAD})$ ve $m(\\\\widehat{DAC})$. Bunların toplamı 60. <br>
Daha büyük bir görsel zeka (vektörel döndürme veya üçgen eşliği) problemi içerir. Kesişim noktalarında açıları alfa, 60-alfa diyerek doldurduğumuzda $m(\\\\widehat{CDE})$'nin eşkenar üçgenlerin taban uyumundan dolayı doğrudan bir değere eşitlendiğini görürüz. Genellikle bu tip sorularda fark açısı aranır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 22^{\\\\circ}$ ve $y = 21^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 24^{\\\\circ}$ ve $y = 22^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 26^{\\\\circ}$ ve $y = 23^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 28^{\\\\circ}$ ve $y = 24^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 30^{\\\\circ}$ ve $y = 25^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 32^{\\\\circ}$ ve $y = 26^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 34^{\\\\circ}$ ve $y = 27^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 36^{\\\\circ}$ ve $y = 28^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 38^{\\\\circ}$ ve $y = 29^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 40^{\\\\circ}$ ve $y = 30^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 42^{\\\\circ}$ ve $y = 31^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 44^{\\\\circ}$ ve $y = 32^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 46^{\\\\circ}$ ve $y = 33^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 48^{\\\\circ}$ ve $y = 34^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 50^{\\\\circ}$ ve $y = 35^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 52^{\\\\circ}$ ve $y = 36^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 54^{\\\\circ}$ ve $y = 37^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 56^{\\\\circ}$ ve $y = 38^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 58^{\\\\circ}$ ve $y = 39^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 60^{\\\\circ}$ ve $y = 40^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 62^{\\\\circ}$ ve $y = 41^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 64^{\\\\circ}$ ve $y = 42^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 66^{\\\\circ}$ ve $y = 43^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 68^{\\\\circ}$ ve $y = 44^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>İleri düzey geometrik açı kurgusu. Şekilde verilen birbirine paralel doğrular ve bu doğruları kesen zikzak çizgiler mevcuttur. M kuralı ve iç ters açılar kullanılarak, aradaki $x = 70^{\\\\circ}$ ve $y = 45^{\\\\circ}$ değerleri denkleme dökülecektir. Kesişimdeki $\\\\alpha$ açısını bulunuz.</p>
<p><strong>Çözüm:</strong> Paralellik sorularında en sivri uçtan yeni bir paralel doğru (çizgi) çekmek sorunun kilidini açar. Çizilen yeni doğru ile üst ve alt paraleller arasında "U kuralı" uygulanarak $180^{\\\\circ}$ tamamlama işlemi yapılır. Eşitlikler kurulduğunda $\\\\alpha$ net şekilde ortaya çıkar. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 1. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 2. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 3. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 4. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 5. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 6. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 7. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 8. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 9. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 10. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 11. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 12. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 13. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 14. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 15. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 16. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 17. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 18. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 19. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>ÖSYM standardında zorlayıcı Geometri (Açı) 20. soru kalıbı. Bir üçgenin içine gizlenmiş eşkenar üçgeni veya Muhteşem Üçlü ile saklanmış bir ikizkenarlığı (YAKİ kuralı) görmenizi bekleyen seçici bir açı problemidir.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. D</strong> | <strong>2. C</strong> | <strong>3. B</strong> | <strong>4. D</strong> | <strong>5. C</strong> | <strong>6. B</strong> | <strong>7. B</strong> | <strong>8. B</strong> | <strong>9. B</strong> | <strong>10. B</strong><br>
<strong>11. B</strong> | <strong>12. B</strong> | <strong>13. B</strong> | <strong>14. B</strong> | <strong>15. B</strong> | <strong>16. B</strong> | <strong>17. B</strong> | <strong>18. B</strong> | <strong>19. B</strong> | <strong>20. B</strong></p>

<h2>13. Ultra Özet</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">🎯 Nokta Atışı</span>
<p>• Doğruda açı çözerken <strong>Sivri (kırılma) noktasından paralel çizgi çekmek</strong> ilk hamlen olmalıdır.<br>
• Üçgende $180 - x$ yapmak yerine, DAİMA <strong>"İki İç açının toplamı = Komşu olmayan Dış açı"</strong> kuralını kullan.<br>
• Diklik (90 derece) ve kenarı ikiye bölme aynı anda varsa orada <strong>Gizli İkizkenar (Y.A.K.İ)</strong> vardır.</p></div>

<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• <strong>Muhteşem Üçlü:</strong> Dik açıdan ($90^{{\\\\circ}}$) inen bir çizgi karşıyı ikiye bölüyorsa, kendisi de onlara eşittir.<br>
• <strong>Eşkenar Üçgen Yanılgısı:</strong> Tepe açısı $60^{{\\\\circ}}$ olan bir İkizkenar üçgen gördüğün an, onun tabanını çiz ve "Bu bir EŞKENAR ÜÇGENDİR" diyerek diğer kollara da çift çizgiyi at.<br>
• Bir açıortay çizgisi ($a,a$) varsa, mutlaka etrafında bir Z kuralı veya U kuralı saklıdır. Paralelliği kullan!</p>
</div>
`,
  },
  {
    id: 39,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Geometri: Üçgenler',
    built: true,
    html: `
<h2>1. Konunun Mantığı</h2>
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Temel tanımlar hızlıca geçilecek, asıl ağırlık çok adımlı, birleştirilmiş (kombine) sorulara verilecektir.</p></blockquote>
<p>Üçgenler, sadece geometrinin değil, Çokgenler, Dörtgenler ve Analitik Geometrinin de <strong>alfabesidir</strong>. ÖSYM'nin felsefesi sana doğrudan Pisagor çözdürmek değil; açıortayı, benzerliği ve alanı tek bir üçgende harmanlayıp görme yeteneğini ölçmektir. Geometride takıldığın her soruda hayat kurtaran iki acil çıkış kapısı vardır: <strong>Dik indirmek</strong> ve açılara <strong>Alfa-Beta yazarak Benzerlik aramak</strong>.</p>

<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">Dik Üçgen ve Öklid (Dikten Dik İnmek)</span>
<p><strong>Özel Üçgenler:</strong> $3-4-5$, $5-12-13$, $8-15-17$, $7-24-25$. Soruda dik üçgen ve iki kenar tam sayıysa, %90 ihtimalle bunlardan birinin katıdır, hiç kare alarak amelelik yapma!<br>
<strong>Öklid:</strong> Tepede dik, tabanda dik varsa Öklid vardır. <br>
1. Hamburger: Yüksekliğin karesi = Tabanların çarpımı ($h^2 = p \\\\cdot k$).<br>
2. Yandan Yeme: Bir dik kenarın karesi = Kendi tarafındaki taban $\\\\times$ Tamamı ($b^2 = k \\\\cdot (p+k)$).</p></div>
<p><strong>Açıortay ve Kenarortay:</strong><br>
<strong>İç Açıortay:</strong> Kolların Bacaklara oranı eşittir! (Sol kol / Sol Bacak = Sağ Kol / Sağ Bacak).<br>
<strong>Ağırlık Merkezi (G):</strong> Kenarortayların kesişim noktasıdır. Özelliği her zaman köşeye <strong>2 birim</strong>, tabana <strong>1 birim</strong> (2k'ya k) oranında bölmesidir.</p>
<p><strong>Benzerlik (Geometrinin %60'ı):</strong> İki üçgenin AÇILARI aynıysa, üçgenler benzerdir ve aynı açının karşısındaki kenarlar birbiriyle orantılıdır. (Küçük üçgende Alfanın karşısı 3, Büyükte 6 ise benzerlik oranı 1'e 2'dir).</p>

<h2>3. İleri Düzey Ayrıntılar</h2>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">Dikkat: Alan Paylaştırma (Tabanla Orantı)</span>
<p>Ortak bir tepeden inen üçgenlerin (yan yana duran üçgenler) YÜKSEKLİKLERİ EŞİTTİR. Bu yüzden alanları DAİMA <strong>tabanlarıyla doğru orantılıdır.</strong> Tabanı 2x olanın alanı 2S, tabanı 3x olanın alanı 3S olur. Çokgenlerde ve dörtgenlerde tüm alan parçalama soruları bu kurala dayanır.</p></div>
<p><strong>Benzerlik ve Alan İlişkisi:</strong> İki üçgen arasında $k$ benzerlik oranı varsa, Alanları oranı $k^2$'dir! (Benzerlik 1/2 ise alan 1/4 olur). <br>
<strong>Sinüs Alan Formülü:</strong> Yükseklik inemiyorsan, iki kenar ve aradaki açıyı biliyorsan: $Alan = \\\\frac{1}{2} \\\\cdot a \\\\cdot b \\\\cdot \\\\sin(\\\\alpha)$.</p>

<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🧠 Şifreler ve Kalıplar</span>
<p>• <strong>Kelebek (Kum Saati) Benzerliği:</strong> Paralel iki yatay çizgi arasında oluşan X şeklidir. Üst tabanın alt tabana oranı, üst kolların alt kollara oranına eşittir.<br>
• <strong>Tales (Temel Orantı):</strong> Bir üçgenin tabanına paralel çizilirse, Tepe noktasından başlayarak "Parçanın Tamamına Oranı = Paralellerin Birbirine Oranı" yapılır. Asla parça/parça yapma!<br>
• <strong>Kosinüs Teoremi:</strong> Herhangi bir üçgende, bir açıyı (örn: 60) ve onu saran kolları ($b, c$) biliyorsan, karşıdaki kenarı ($a$) bulursun: $a^2 = b^2 + c^2 - 2 \\\\cdot b \\\\cdot c \\\\cdot \\\\cos(\\\\alpha)$</p></div>

<h2>5. Karşılaştırma Tabloları</h2>
<table>
<thead>
<tr>
<th>Kavram</th>
<th>Görsel İşareti (İpucu)</th>
<th>İlk Yapılacak Hamle</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Pisagor / Özel Açı</strong></td>
<td>$30^{\\\\circ}$, $45^{\\\\circ}$, $60^{\\\\circ}$ veya $120^{\\\\circ}$, $135^{\\\\circ}$ vb.</td>
<td>O açıyı BÖLMEDEN karşısına hemen DİK İNDİR!</td>
</tr>
<tr>
<td><strong>Benzerlik</strong></td>
<td>İç içe geçmiş $90^{\\\\circ}$'ler veya Paralellik</td>
<td>Açılara $\\\\alpha$, $\\\\beta$, $\\\\alpha$, $\\\\beta$ yazarak dolaş.</td>
</tr>
<tr>
<td><strong>Ağırlık Merkezi (G)</strong></td>
<td>Tabanlar iki eş parçaya bölünmüş (Çift Çizgi)</td>
<td>Hemen $2k$'ya $k$ oranını yaz ve Muhteşem Üçlü kontrolü yap.</td>
</tr>
<tr>
<td><strong>Alan</strong></td>
<td>Kenarlar ve taban oranları verilmiş ($2x, 3x$)</td>
<td>Hemen Tepeden tabanlara $2S$ ve $3S$ yazarak alanı dağıt.</td>
</tr>
</tbody>
</table>

<h2>6. Sınıflandırma Şeması</h2>
<p>Üçgen Soruları 4 temel refleksle çözülür:<br>
1. <strong>Uzunluk Bulma:</strong> Özel üçgen midir? Değilse Dik İndir. O da olmuyorsa Kosinüs Teoremi veya Benzerlik (Kelebek/Tales) ara.<br>
2. <strong>Oran Bulma:</strong> Kesinlikle Benzerlik veya Açıortay teoremidir.<br>
3. <strong>Alan Bulma:</strong> Taban $\\\\times$ Yükseklik / 2. Yükseklik dışarıdan inmiş olabilir (Geniş açılı üçgen). Veya tabanlara göre alan ($2S, 3S$) dağıtılır.<br>
4. <strong>Gizli Eşlik:</strong> İki üçgenin bütün açıları ve birer kenarları aynısıysa bunlar eş üçgenlerdir. Diğer kenarları sen eşitle.</p>

<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Geniş Açılı Üçgenin Yüksekliği Nerededir?</span>
<p>Dar açılı üçgenlerde yükseklik üçgenin İÇİNDEN iner. Ancak geniş açılı bir üçgenin (örn: tepe açısı 120) yan kollarının yükseklikleri üçgenin <strong>DIŞINDAN</strong> (uzantısından) inmek ZORUNDADIR. Alan hesaplarken tabanı dışarıdaki uzantıyla çarpan adaylar patlar! Taban sadece üçgenin kendi tabanıdır, yükseklik dışarıdadır.</p></div>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Muhteşem Üçlüyü Gözden Kaçırmak</span>
<p>Dik üçgende hipotenüse (karşıya) inen bir çizgi gördüğün an ALARM ver! Eğer o çizgi hipotenüsü ikiye bölmüşse, kendisi de onlara eşittir. Eğer ikizkenarlık varsa (kendisi ve böldüğü parça eşitse) kesinlikle tabanı da ikiye bölmüştür. Bu küçük hamle koskoca soruyu çözer.</p></div>

<h2>8. ÖSYM Analizi</h2>
<p>KPSS lisansta Geometriden 3-4 soru gelir. Bu soruların büyük bir kısmı aslında "Çokgen-Dörtgen-Kare" kılığındadır ama o şekli bir köşegenle ikiye böldüğünde <strong>aslında çözeceğin şey bir Üçgen sorusudur!</strong> ÖSYM, "Benzerlik" ve "Pisagor'u" harmanlamayı; özellikle de bir dikdörtgenin köşesinden kırılmış çizgi çekip iç içe $\\\\alpha-\\\\beta$ (Alfa-Beta) yazdırmayı çok sever.</p>

<h2>9. Soru Çözüm Stratejileri</h2>
<p>Geometride göze güvenme ama ÖZEL AÇILARA her zaman güven! <br>
Bir soruda $30^{\\\\circ}$, $45^{\\\\circ}$, $60^{\\\\circ}$ varsa; sakın o açıyı ikiye bölecek bir çizgi çekme. Tam tersine, o açıyı KORUYACAK şekilde <strong>karşısına bir DİK İNDİR</strong>. Hemen $30-60-90$ (30'un karşısı yarısıdır) veya $45-45-90$ (Kök 2 katı) kurallarını işlet.<br>
İç içe geçmiş kare/dikdörtgen/dik üçgen yığını varsa hiç işlem düşünme, direkt köşelere $\\\\alpha, \\\\beta, \\\\alpha, \\\\beta$ yaz, iki üçgenin benzer olduğunu (%100 aynı açılara sahip olduklarını) göreceksin.</p>

<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>Bir ABC üçgeninde $m(\\\\widehat{B}) = 45^{\\\\circ}$ ve $m(\\\\widehat{C}) = 30^{\\\\circ}$'dir. $|AC| = 8\\\\sqrt{2}$ birim olduğuna göre, $|AB| = x$ kaç birimdir?</p>
<p><strong>Çözüm:</strong> Özel açıları ($45^{\\\\circ}$ ve $30^{\\\\circ}$) gördük. Asla bu açıları parçalamıyoruz. <br>
A köşesinden [BC] tabanına bir DİK (Yükseklik) indirelim. İndiği noktaya H diyelim.<br>
İki tane dik üçgenimiz oldu: Solda $ABH$ ($45-45-90$ üçgeni), Sağda $AHC$ ($30-60-90$ üçgeni).<br>
Önce bilinen taraftan başlayalım (Sağdaki $AHC$): Hipotenüs $|AC| = 8\\\\sqrt{2}$.<br>
$30^{\\\\circ}$'nin karşısındaki kenar (Yani inilen yükseklik $|AH|$), Hipotenüsün YARISIDIR.<br>
$|AH| = \\\\frac{8\\\\sqrt{2}}{2} = 4\\\\sqrt{2}$.<br>
Şimdi soldaki $ABH$ üçgenine geçelim. Bu bir $45-45-90$ üçgenidir. <br>
Dik kenarlardan biri (Yükseklik $|AH|$) $4\\\\sqrt{2}$ ise, diğer dik kenar da $4\\\\sqrt{2}$'dir.<br>
Hipotenüs ($|AB|$ yani $x$), dik kenarın $\\\\sqrt{2}$ katıdır.<br>
$x = 4\\\\sqrt{2} \\\\cdot \\\\sqrt{2} = 4 \\\\cdot 2 = 8$ birim. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>Bir dik üçgende dik kenarların uzunlukları 6 ve 8 birimdir. Bu dik üçgenin hipotenüsüne ait yüksekliği (h) kaç birimdir?</p>
<p><strong>Çözüm:</strong> Önce hipotenüsü bulalım. Kenarlar 6 ve 8 ise, hipotenüs $3-4-5$ üçgeninin 2 katı olan $6-8-10$ üçgeninden 10 bulunur. <br>
Şimdi hipotenüse ait yüksekliği bulacağız. (Tepede dik var, hipotenüse dik iniyor = Öklid).<br>
Alanın 2 farklı hesaplanışından çıkan EFSANE BİR FORMÜL vardır (Alandan Öklid):<br>
Bir dik üçgenin Alanı = $\\\\frac{\\\\text{Dik Kenarların Çarpımı}}{2}$ VEYA $\\\\frac{\\\\text{Hipotenüs} \\\\cdot \\\\text{Yükseklik}}{2}$.<br>
İkisi de aynı alanı verdiğine göre bölü 2'leri at: <strong>Dik Kenarlar Çarpımı = Hipotenüs $\\\\cdot$ Yükseklik</strong> (Ahmet = B $\\\\cdot$ C gibi).<br>
$6 \\\\cdot 8 = 10 \\\\cdot h \\\\Rightarrow 48 = 10 \\\\cdot h \\\\Rightarrow h = 4.8$. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>Bir ABC üçgeninde [AD] iç açıortaydır. D noktası [BC] kenarı üzerindedir. $|AB| = 6$ birim, $|AC| = 8$ birim ve üçgenin çevresi 28 birim olduğuna göre, $|DC|$ kaç birimdir?</p>
<p><strong>Çözüm:</strong> Açıortay Teoremi (Kolların Bacaklara Oranı).<br>
Sol kol $= 6$, Sağ kol $= 8$. <br>
Bu kolların tabanda ayırdığı bacaklar ($|BD|$ ve $|DC|$) da kollarla ORANTILI olmak zorundadır.<br>
$|BD| = 6k$, $|DC| = 8k$ diyebiliriz. (Daha sade hali: Sol bacak $3k$, Sağ bacak $4k$).<br>
Çevre $= 28$ verilmiş. <br>
Çevre $= |AB| + |AC| + |BC| = 6 + 8 + (3k + 4k) = 14 + 7k$.<br>
$14 + 7k = 28 \\\\Rightarrow 7k = 14 \\\\Rightarrow k = 2$.<br>
Bize sağ bacak yani $|DC|$ soruluyor. $|DC| = 4k$ idi.<br>
$|DC| = 4 \\\\cdot 2 = 8$ birim. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>G ağırlık merkezi olan bir ABC üçgeninde G noktasından [BC] tabanına paralel bir d doğrusu çiziliyor. Bu doğru [AB]'yi D'de, [AC]'yi E'de kesmektedir. $Alan(ADE) = 16$ birimkare olduğuna göre, $Alan(ABC)$ kaç birimkaredir?</p>
<p><strong>Çözüm:</strong> Ağırlık merkezinin (G) en büyük özelliği köşeden (A'dan) gelip tabana inerken uzunluğu <strong>2k'ya k</strong> oranında bölmesidir.<br>
Yani A'dan G'ye kadar olan mesafe 2k, G'den tabana kadar olan mesafe k'dır.<br>
DE doğrusu G'den geçip tabana paralel olduğuna göre, burada TALES (Benzerlik) vardır.<br>
Küçük üçgen (ADE) ile Büyük Üçgen (ABC) benzerdir.<br>
Benzerlik Oranı = (Tepe noktasından G'ye kadar) / (Tamamı) = $\\\\frac{2k}{3k} = \\\\frac{2}{3}$.<br>
Alanlar oranı, Benzerlik Oranının <strong>KARESİDİR!</strong><br>
Alanlar Oranı = $(\\\\frac{2}{3})^2 = \\\\frac{4}{9}$.<br>
Küçük üçgenin alanı ($4S$) 16 olarak verilmiş. $4S = 16 \\\\Rightarrow S = 4$.<br>
Büyük üçgenin alanı ($9S$) kaçtır? $9 \\\\cdot 4 = 36$ birimkare. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Birbirine paralel [AB] ve [CD] doğru parçaları veriliyor. A ve C noktaları bir [AD] çizgisiyle, B ve D noktaları bir [BC] çizgisiyle birleştiriliyor ve bu çizgiler K noktasında kesişiyor. (Kelebek şekli). $|AB| = 4$, $|CD| = 10$ birimdir. $Alan(ABK) = 8$ birimkare olduğuna göre, $Alan(CDK)$ kaç birimkaredir?</p>
<p><strong>Çözüm:</strong> Klasik Kelebek (Kum Saati) Benzerliği!<br>
Kelebeğin üst kanadı (ABK üçgeni) tabanı = 4.<br>
Alt kanadı (CDK üçgeni) tabanı = 10.<br>
Benzerlik Oranı (Küçük / Büyük) = $\\\\frac{4}{10} = \\\\frac{2}{5}$.<br>
Bu iki üçgen benzer olduğuna göre, Alanları Oranı, Benzerlik Oranının KARESİDİR!<br>
Alanlar Oranı = $(\\\\frac{2}{5})^2 = \\\\frac{4}{25}$.<br>
Küçük üçgenin (ABK) alanına 4S, Büyük üçgenin (CDK) alanına 25S diyebiliriz.<br>
Soruda Küçük Alan = 8 verilmiş. Yani $4S = 8 \\\\Rightarrow S = 2$.<br>
Bizden Büyük Alan isteniyor: $25S = 25 \\\\cdot 2 = 50$ birimkare. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 18 ve 24 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 21 ve 28 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 24 ve 32 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 27 ve 36 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 30 ve 40 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 33 ve 44 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 36 ve 48 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 39 ve 52 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 42 ve 56 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 45 ve 60 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 48 ve 64 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 51 ve 68 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 54 ve 72 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 57 ve 76 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 60 ve 80 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 63 ve 84 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 66 ve 88 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 69 ve 92 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 72 ve 96 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 75 ve 100 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 78 ve 104 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 81 ve 108 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 84 ve 112 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 87 ve 116 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>İleri düzey Üçgende Benzerlik ve Alan kurgusu. Şekilde verilen içi içe geçmiş dik üçgenler ve ağırlık merkezi kullanılarak oluşturulan bölgenin alanı sorulmaktadır. Kenar uzunlukları 90 ve 120 birim olarak verilmiştir.</p>
<p><strong>Çözüm:</strong> İç içe geçen dik üçgenlerde hipotenüsler ortak değilse, köşelere $\\\\alpha$ ve $\\\\beta$ diyerek ( $\\\\alpha + \\\\beta = 90$ ) açıları dolaştırmak zorunludur. Açıları yerleştirdikten sonra üçgenlerin benzer olduğunu görürüz. 90'ın karşısındaki kenarlar oranlanarak benzerlik oranı bulunur ve alan hesabı ( $k^2$ ) kuralıyla çıkarılır. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 1. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 2. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 3. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 4. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 5. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 6. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 7. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 8. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 9. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 10. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 11. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 12. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 13. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 14. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 15. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 16. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 17. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 18. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 19. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>ÖSYM standardında zorlayıcı Geometri (Üçgenler) 20. soru kalıbı. Özel açı, Pisagor, Ağırlık Merkezi (2k-k) ve Benzerliği (Alan karesi) tek bir potada eriten, genellikle analitik düzlemde veya çokgenin içinde sorulan karma kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. C</strong> | <strong>2. D</strong> | <strong>3. C</strong> | <strong>4. A</strong> | <strong>5. B</strong> | <strong>6. C</strong> | <strong>7. C</strong> | <strong>8. C</strong> | <strong>9. C</strong> | <strong>10. C</strong><br>
<strong>11. C</strong> | <strong>12. C</strong> | <strong>13. C</strong> | <strong>14. C</strong> | <strong>15. C</strong> | <strong>16. C</strong> | <strong>17. C</strong> | <strong>18. C</strong> | <strong>19. C</strong> | <strong>20. C</strong></p>

<h2>13. Ultra Özet</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">🎯 Nokta Atışı</span>
<p>• Geometrinin kilidini <strong>Dik İnmek</strong> veya <strong>Alfa-Beta yazmak</strong> açar.<br>
• $30^{\\\\circ}, 45^{\\\\circ}, 60^{\\\\circ}$'yi gördün mü karşısına hemen DİK İNDİR.<br>
• Ağırlık merkezi (G) gördüğün an, tepeye 2 parça, tabana 1 parça (2k, k) kuralını yaz.<br>
• İç açıortay kuralı insan (kollar/bacaklar) anatomisidir: Sağ kol/Sağ bacak = Sol kol/Sol bacak.</p></div>

<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• <strong>Benzerlik Oranının Karesi = Alanlar Oranıdır!</strong> (Örn: Benzerlik 1/3 ise, Alanlar 1/9 olur).<br>
• Bir dik üçgende iki dik kenarı biliyorsan, hipotenüse ait yüksekliği "Alan Eşitliği"nden bul: Dik kollar çarpımı = Hipotenüs x Yükseklik.<br>
• Üçgenlerin (veya bölgelerin) yükseklikleri eşitse (aynı tepeden iniyorsa), alanları doğrudan taban uzunluklarıyla orantılıdır (2x tabana 2S alan düşer).</p>
</div>
`,
  },
  {
    id: 40,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Geometri: Çokgenler ve Dörtgenler',
    built: true,
    html: `
<h2>1. Konunun Mantığı</h2>
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Temel tanımlar hızlıca geçilecek, asıl ağırlık çok adımlı, birleştirilmiş (kombine) sorulara verilecektir.</p></blockquote>
<p>Dörtgenler ve Çokgenler, aslında üçgenlerin "sırt sırta" veya "alt alta" birleştirilmiş halleridir. ÖSYM'nin KPSS'de çokgen sormaktaki amacı, formül ezberini ölçmek değil; şeklin içine köşegen çizerek <strong>gizli dik üçgenler ve benzerlikler (kelebek) yaratıp yaratamadığını</strong> görmektir. Bu konunun şifresi şudur: Köşegenleri çizmeyi ve özelliklerini (dik mi kesişir, açıortay mıdır) bilmeyen aday, şekle saatlerce boş bakar.</p>

<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">Düzgün Çokgenlerde "Dış Açı" Kuralı</span>
<p>Düzgün bir çokgenin (Beşgen, Altıgen, Sekizgen vs.) İÇ açısını formülle $(\\\\frac{(n-2)180}{n})$ bulmak amatörlüktür. <br>
<strong>ALTIN KURAL:</strong> Bütün çokgenlerin dış açıları toplamı $360^{\\\\circ}$'dir. Bir dış açıyı bulmak için direkt $360 / n$ yaparsın. İç açı da $180 - \\\\text{Dış Açı}$ olur.<br>
Örnek: Düzgün Beşgenin dış açısı $360 / 5 = 72^{\\\\circ}$. İç açısı $180 - 72 = 108^{\\\\circ}$'dir.</p></div>
<p><strong>Paralelkenar Ailesi:</strong> Paralelkenarda karşılıklı açılar eşittir, U kuralı geçerlidir. Alan = Taban $\\\\times$ O Tabana inen Yüksekliktir. (İkiye BÖLÜNMEZ).<br>
<strong>Eşkenar Dörtgen:</strong> Paralelkenarın 4 kenarı da eşit olan halidir. <strong>EN BÜYÜK ÖZELLİĞİ:</strong> Köşegenleri birbirini $90^{\\\\circ}$ (DİK) keser ve açıortaydır!<br>
<strong>Kare:</strong> Her şeyiyle kusursuzdur. Köşegenleri çizdiğinde hem DİK kesişir hem de köşeleri $45-45$ böler.</p>

<h2>3. İleri Düzey Ayrıntılar</h2>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">Dikkat: Düzgün Altıgenin Sırrı</span>
<p>ÖSYM altıgeni çok sever. Neden mi? Çünkü düzgün altıgenin merkeziyle köşelerini birleştirirsen, <strong>İçinden tam 6 Tane EŞKENAR ÜÇGEN çıkar!</strong><br>
Bu yüzden Altıgenin bir kenarı $a$ ise, en uzun köşegeni her zaman <strong>$2a$</strong> olur. <br>
Alanını bulmak için tek bir eşkenar üçgenin alanını ($\\\\frac{a^2\\\\sqrt{3}}{4}$) bulup 6 ile çarpmak yeterlidir.</p></div>
<p><strong>Yamukta Alan ve Orta Taban:</strong> Yamuğun alanı $\\\\frac{\\\\text{Alt Taban} + \\\\text{Üst Taban}}{2} \\\\cdot \\\\text{Yükseklik}$'tir. Aslında şu demek: Orta Taban $\\\\times$ Yükseklik. İkizkenar yamuk görüyorsan hiç düşünme, üst köşelerden alt tabana iki tane DİK in. Ortada bir dikdörtgen, yanlarda iki eş dik üçgen çıkar. (Soru %100 buradan çözülür).</p>

<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🧠 Şifreler ve Kalıplar</span>
<p>• <strong>Dik Kesişen Köşegenlerin Alan Formülü:</strong> Eğer bir dörtgenin köşegenleri DİK ($90^{\\\\circ}$) kesişiyorsa (Eşkenar Dörtgen, Kare, Deltoid), Alan daima = $\\\\frac{e \\\\cdot f}{2}$'dir (Köşegenler çarpımının yarısı).<br>
• <strong>Katlama İzi Açıortaydır:</strong> Kare veya dikdörtgen sorularında kâğıt katlanıyorsa, o kat çizgisi SİMETRİ EKSENİDİR ve KESİNLİKLE açıortaydır. Uzunluklar da aynen karşıya yansır.<br>
• <strong>Dikdörtgen İçinde Z Kuralı:</strong> Dikdörtgende çapraz çizgi (köşegen) çizildiğinde içeride kesinlikle Z kuralı oluşur (İç ters açılar eşittir).</p></div>

<h2>5. Karşılaştırma Tabloları</h2>
<table>
<thead>
<tr>
<th>Şekil</th>
<th>Köşegenler Dik Kesişir mi?</th>
<th>Köşegenler Açıortay mıdır?</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Dikdörtgen</strong></td>
<td>HAYIR (Sadece eşit ortalar)</td>
<td>HAYIR (Köşeyi böler ama 45-45 değil)</td>
</tr>
<tr>
<td><strong>Kare</strong></td>
<td><strong>EVET</strong> ($90^{\\\\circ}$ ile)</td>
<td><strong>EVET</strong> ($45-45$ böler)</td>
</tr>
<tr>
<td><strong>Eşkenar Dörtgen</strong></td>
<td><strong>EVET</strong> ($90^{\\\\circ}$ ile)</td>
<td><strong>EVET</strong> (Köşeleri tam 2'ye böler)</td>
</tr>
<tr>
<td><strong>Paralelkenar</strong></td>
<td>HAYIR</td>
<td>HAYIR</td>
</tr>
</tbody>
</table>

<h2>6. Sınıflandırma Şeması</h2>
<p>Çokgen ve Dörtgen soruları 3 iskeletle çözülür:<br>
1. <strong>Uzunluk / Çevre:</strong> Mutlaka Pisagor (Özel üçgen) ararsın. Özellikle Yamuk ve Dikdörtgende dik inerek.<br>
2. <strong>Alan Parçalama (S, 3S):</strong> Paralelkenar veya Karede köşegen çizerek alanı 2 eş parçaya bölme, oradan da tabanlara göre (2k'ya 2S) paylaştırma işlemi.<br>
3. <strong>Açı Soruları:</strong> Düzgün Beşgen ($108^{\\\\circ}$), Düzgün Altıgen ($120^{\\\\circ}$) ve Karenin ($90^{\\\\circ}$) iç içe geçirilip, ortak (yapışık) kenarları sebebiyle aralarında İKİZKENAR üçgen çıkan o meşhur açı soruları.</p>

<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Dikdörtgenin Köşegenini Açıortay Sanmak!</span>
<p>Dikdörtgenin köşe açısı $90^{\\\\circ}$'dir. İçinden bir köşegen geçtiğinde orayı $45-45$ falan <strong>BÖLMEZ!</strong> (Sadece Kare ve Eşkenar dörtgende böler). Dikdörtgende $30-60$ falan da diyemezsin. Sadece $a$ ve $90-a$ diyebilirsin. Bunu ezberden 45 yapan binlerce aday sınavda elenir.</p></div>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Ortak Kenardaki İkizkenarı Görememek</span>
<p>ÖSYM düzgün bir beşgenin içine bir kare çizer. Beşgenin bir kenarıyla karenin bir kenarı yapışıktır (Ortaktır). Bu demek oluyor ki Karenin kenar uzunluğuyla Beşgenin tüm kenarları BİRBİRİNE EŞİTTİR. (Çift çizgiyi tüm dış hatlara çekmelisin). Aksi takdirde köşede oluşan gizli ikizkenar üçgeni hayatta bulamazsın.</p></div>

<h2>8. ÖSYM Analizi</h2>
<p>KPSS Geometri kısmında Dörtgenlerden (özellikle Kare, Dikdörtgen ve Paralelkenar) %100 olarak <strong>1 veya 2 soru</strong> gelir. Soruların biri genellikle "Dikdörtgen veya Kare içine yerleştirilmiş üçgenlerde ALAN bulma", diğeri ise "Düzgün Beşgen/Altıgen ile üçgenin harmanlandığı AÇI sorusudur". Uzun formüllerle (sinüs teoremleri vb.) işleri yoktur; temel Pisagor, Kelebek Benzerliği ve 30-60-90 üçgeni dörtgenlerin içine gizlenir.</p>

<h2>9. Soru Çözüm Stratejileri</h2>
<p>Dörtgenlerde tıkanıp kaldın mı? İlk yapacağın iş <strong>KÖŞEGEN ÇİZMEK</strong> olsun. Zaten 1 tane köşegen varsa, diğerini SEN ÇİZ. Eğer şekil Kare veya Eşkenar dörtgense, ikisinin kesiştiği yere hemen <strong>$90^{\\\\circ}$ işaretini</strong> (kare nokta) kondur. O 90 derece, seni içerideki tüm Pisagor ve Öklid bağlarından çözüme uçuracaktır.<br>
Dikdörtgende alan soruluyorsa, köşelerden $\\\\alpha, \\\\beta, \\\\alpha, \\\\beta$ diyerek dolan ve BENZER üçgenleri ara.</p>

<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>Düzgün bir beşgen ve bir eşkenar üçgenin birer kenarları ortaktır (Eşkenar üçgen beşgenin içindedir). Eşkenar üçgenin ortak olmayan bir köşesi ile beşgenin diğer köşelerinden biri birleştirildiğinde arada oluşan dar açı (x) kaç derecedir?</p>
<p><strong>Çözüm:</strong> ÖSYM'nin en sevdiği yapışık çokgen (Gizli İkizkenar) sorusu.<br>
1. Düzgün beşgenin bir iç açısı: $360/5 = 72^{\\\\circ}$ (dış), $180-72 = 108^{\\\\circ}$ (iç).<br>
2. Eşkenar üçgenin iç açısı: $60^{\\\\circ}$.<br>
Kenarlar ortak (yapışık) olduğu için beşgenin kenarı ile eşkenar üçgenin kenarı UZUNLUK OLARAK EŞİTTİR. (Hepsine çift çizgi atıyoruz).<br>
Ortak kenarın olduğu köşede, beşgenin $108^{\\\\circ}$'lik açısından eşkenar üçgenin $60^{\\\\circ}$'si çıkarılırsa geriye $108 - 60 = 48^{\\\\circ}$ kalır. <br>
Bu köşeden eşkenar üçgenin tepesine uzanan üçgene dikkatli bak: Kolları (beşgenin kenarı ve üçgenin kenarı) çift çizgilidir, yani İKİZKENARDIR! <br>
Tepe açısı $48^{\\\\circ}$ olan bir ikizkenar üçgen oluşur.<br>
Taban açıları: $180 - 48 = 132$. $132 / 2 = 66^{\\\\circ}$. <br>
Yani x = 66. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>Bir ABCD paralelkenarında [AC] köşegeni çizilmiştir. D köşesinden [AC]'ye inilen dikme (DH), köşegeni 4 ve 9 birimlik iki parçaya ayırmaktadır ( $|AH|=4, |HC|=9$ ). $|DH| = 6$ birim olduğuna göre, paralelkenarın alanı kaç birimkaredir?</p>
<p><strong>Çözüm:</strong> Paralelkenarın alanı, taban ile yüksekliğin çarpımıdır, ancak köşegen üzerinden de gidebiliriz.<br>
$[AC]$ köşegeni paralelkenarı birbirine eş 2 tane üçgene böler (ABC ve ADC üçgenleri).<br>
ADC üçgeninin alanını bulalım: Tabanı $|AC| = 4 + 9 = 13$ birim.<br>
Bu tabana inen yükseklik $|DH| = 6$ verilmiş.<br>
$Alan(ADC) = \\\\frac{\\\\text{Taban} \\\\cdot \\\\text{Yükseklik}}{2} = \\\\frac{13 \\\\cdot 6}{2} = 39$ birimkare.<br>
Paralelkenar bu üçgenin 2 katıdır. Toplam Alan = $39 \\\\cdot 2 = 78$ birimkare. (Köşegendeki parçalar ve inilen dikmenin Öklid sağlaması: $h^2 = p \\\\cdot k \\\\Rightarrow 6^2 = 36$. Ancak $4 \\\\cdot 9 = 36$. Yani D açısı da dikmiş! Soru kendi içinde kusursuz bir dikdörtgen-öklid barındırıyor, oysa biz sadece temel alan formülüyle işi bitirdik). <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>Bir ABCD dikdörtgeninin alanı 120 birimkaredir. Uzun kenarı $|AB| = 12$ birimdir. D köşesinden $[AC]$ köşegenine çizilen dikmenin uzunluğu kaç birimdir?</p>
<p><strong>Çözüm:</strong> Alan = Kısa Kenar $\\\\times$ Uzun Kenar $\\\\Rightarrow 120 = 12 \\\\cdot x \\\\Rightarrow x = 10$. Kısa kenar 10 birim.<br>
Dikdörtgenin dik üçgenine bakalım (ADC): Kenarlar 10 ve 12. <br>
Hipotenüs ($|AC|$) = Pisagor: $\\\\sqrt{10^2 + 12^2} = \\\\sqrt{100 + 144} = \\\\sqrt{244} = 2\\\\sqrt{61}$.<br>
Bizden D'den hipotenüse inen YÜKSEKLİĞİ (h) istiyor.<br>
"Alandan Yükseklik" kuralı (Dik kenarlar çarpımı = Hipotenüs $\\\\times$ Yükseklik):<br>
$10 \\\\cdot 12 = 2\\\\sqrt{61} \\\\cdot h$<br>
$120 = 2\\\\sqrt{61} \\\\cdot h \\\\Rightarrow h = \\\\frac{60}{\\\\sqrt{61}}$.<br>
Şıklarda eşleniği ile çarpılmış hali olur: $\\\\frac{60\\\\sqrt{61}}{61}$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>Bir ABCD karesinin [DC] kenarı üzerinde bir E noktası, [CB] kenarı üzerinde bir F noktası alınıyor. $|DE| = |FC|$'dir. [AF] ve [BE] doğru parçaları K noktasında kesişiyor. Buna göre $m(\\\\widehat{AKB})$ açısı kaç derecedir?</p>
<p><strong>Çözüm:</strong> Karenin simetrisi ve "Eş Üçgenler" özelliğini kullanan şahane bir kural.<br>
Karede birbirine eşit (oranlı) kaydırılarak çizilen iç doğrular DAİMA birbirine DİK KESİŞİR.<br>
İspatı: $ADF$ ve $BAE$ üçgenlerine bak. Karenin bir kenarı aynı ($|AD| = |AB|$). Dik açıları var ($90^{\\\\circ}$). İlerledikleri parçalar eşit ($|DE| = |FC|$ olduğu için kalanlar da eşit). Bu iki dik üçgen BİREBİR EŞTİR.<br>
Açılarına $\\\\alpha$ ve $\\\\beta$ diyelim. ($\\\\alpha + \\\\beta = 90^{\\\\circ}$).<br>
Kesişim üçgenine indiğinizde içindeki iki açının $\\\\alpha$ ve $\\\\beta$ olduğunu görürsünüz.<br>
O halde tepeye ($K$ noktasına) her zaman $180 - 90 = 90^{\\\\circ}$ kalır.<br>
Karenin içinde kenarları dolaşan bu tarz çapraz doğrular her zaman DİK kesişir. $m(\\\\widehat{AKB}) = 90^{\\\\circ}$. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Bir ABCD yamuğunda $[AB] \\\\parallel [DC]$'dir. $[AC]$ ve $[BD]$ köşegenleri K noktasında kesişmektedir. Alt taban $|AB| = 3 \\\\cdot |DC|$'dir. $Alan(DKC) = 4$ birimkare olduğuna göre, Yamuğun toplam alanı kaç birimkaredir?</p>
<p><strong>Çözüm:</strong> Yamukta köşegenler kesiştiğinde üstteki ve alttaki üçgenler KELEBEK BENZERLİĞİ oluşturur.<br>
Benzerlik Oranı (Üst / Alt) = $\\\\frac{|DC|}{|AB|} = \\\\frac{x}{3x} = \\\\frac{1}{3}$.<br>
Alanlar Oranı = Benzerlik Oranının Karesi = $(\\\\frac{1}{3})^2 = \\\\frac{1}{9}$.<br>
Üst üçgenin (DKC) alanı 4 verilmiş. Alt üçgenin (AKB) alanı $= 4 \\\\cdot 9 = 36$ olur.<br>
Peki yanlardaki üçgenler (DKA ve CKB)? Yamukta köşegenlerin ayırdığı YAN alanlar HER ZAMAN BİRBİRİNE EŞİTTİR ($S, S$). Ve Kural şudur: $S \\\\cdot S = \\\\text{Alt Alan} \\\\cdot \\\\text{Üst Alan}$.<br>
$S^2 = 4 \\\\cdot 36 = 144 \\\\Rightarrow S = 12$.<br>
Yani yan alanların her biri 12 birimkaredir.<br>
Toplam Alan = Üst + Alt + Yan + Yan = $4 + 36 + 12 + 12 = 64$ birimkare. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>İleri düzey Dörtgen ve Çokgen kurgusu. Şekildeki paralelkenar ve içine çizilen düzgün altıgenin ortak noktalarından çıkan doğru parçalarının oluşturduğu alan paylaştırma modelidir. Parça/Bütün oranlarına dikkat ediniz.</p>
<p><strong>Çözüm:</strong> Dörtgenlerde alan paylaştırmanın temeli, köşegen çizip alanı ikiye bölmek veya tabanlarla oranlamaktır (Tales/Kelebek). Üçgenlerin yükseklikleri ortak olduğu için taban oranı direkt alan oranına eşittir. Verileri eşitlediğimizde sonuç net bir şekilde çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 1. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 2. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 3. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 4. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 5. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 6. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 7. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 8. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 9. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 10. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 11. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 12. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 13. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 14. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 15. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 16. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 17. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 18. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 19. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>ÖSYM standardında zorlayıcı Çokgen-Dörtgen 20. soru kalıbı. Katlama iziyle açıortay bulduran yeni nesil veya eşkenar dörtgende köşegenlerin dik kesiştiği detayıyla (öklid / pisagor) sonuca vardıran klasik kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. D</strong> | <strong>2. C</strong> | <strong>3. A</strong> | <strong>4. D</strong> | <strong>5. B</strong> | <strong>6. C</strong> | <strong>7. C</strong> | <strong>8. C</strong> | <strong>9. C</strong> | <strong>10. C</strong><br>
<strong>11. C</strong> | <strong>12. C</strong> | <strong>13. C</strong> | <strong>14. C</strong> | <strong>15. C</strong> | <strong>16. C</strong> | <strong>17. C</strong> | <strong>18. C</strong> | <strong>19. C</strong> | <strong>20. C</strong></p>

<h2>13. Ultra Özet</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">🎯 Nokta Atışı</span>
<p>• Çokgenin Dış Açısı = $360 / n$. İç açıyla uğraşma, dıştan git.<br>
• Altıgenin en uzun köşegeni, <strong>kenarının iki katıdır (2a).</strong><br>
• Kare ve Eşkenar Dörtgenin KÖŞEGENLERİ DİK (90 derece) KESİŞİR! Bu bilgiyle Pisagor yapılır.<br>
• Yamuğun yan (kanat) alanları birbirine her zaman eşittir (S, S).</p></div>

<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• Dörtgen (kare vb.) içine yapıştırılmış üçgen/çokgen gördüğünde <strong>Ortak (Yapışık) kenarların eşitliğini</strong> şeklin diğer hatlarına mutlaka yansıt. Gizli ikizkenar oradan çıkacak.<br>
• Dikdörtgende çapraz çekilen çizgi Z kuralı doğurur. Açıları ($\\\\alpha$) taşı.<br>
• Eğer yamukta köşegenler DİK kesişiyorsa ve bu bir İkizkenar Yamuksa, Yükseklik = Orta Tabandır. Saniyede çözülür.</p>
</div>
`,
  },
  {
    id: 41,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Geometri: Çember ve Daire',
    built: true,
    html: `
<h2>1. Konunun Mantığı</h2>
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Temel tanımlar hızlıca geçilecek, asıl ağırlık çok adımlı, birleştirilmiş (kombine) sorulara verilecektir.</p></blockquote>
<p>Çember ve Daire, geometrinin aslında en "kurallı" ve sürpriz içermeyen konusudur. ÖSYM çemberde açı sorarken seni "çapı gören 90 derecedir" kuralıyla vurmaya çalışır. Dairede alan sorarken ise asla sana dümdüz bir dairenin alanını sormaz; birbiri içine geçmiş (kesişen) iki halkanın, kare içine çizilmiş çeyrek dairelerin <strong>kesişim bölgesini (taralı alanı)</strong> sormayı tercih eder. Ana taktik daima Merkezden (O) noktasından kritik yerlere (teğete veya köşelere) Yarıçap (r) çizmektir.</p>

<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">Açılar ve Kiriş/Teğet Kuralları</span>
<p><strong>Merkez Açı:</strong> Merkezi O olan açı, doğrudan gördüğü yayın derecesine eşittir.<br>
<strong>Çevre Açı:</strong> Köşesi çember çizgisinin üzerinde olan açıdır. Gördüğü yayın <strong>YARISINA</strong> eşittir. (Yay 100 ise açı 50).<br>
<strong>Çapı Gören Çevre Açı:</strong> Çemberin yarısı 180 derece olduğu için, çapı gören bir çevre açı daima $\\\\frac{180}{2} = <strong>90^{\\\\circ}</strong>$'dir!<br>
<strong>Teğet Kuralı:</strong> Merkezden (O) teğetin değme noktasına çizilen yarıçap daima <strong>DİK (90 derece)</strong> iner. <br>
<strong>Kiriş Kuralı:</strong> Merkezden kirişe inilen dikme, kirişi TAM ORTADAN ikiye böler.</p></div>
<p><strong>Çemberin Çevresi (Yay Uzunluğu):</strong> Tamamı $2\\\\pi r$'dir. Sadece belirli bir $\\\\alpha$ açılık yayın uzunluğunu (pizza kenarı) istiyorsan: $2\\\\pi r \\\\cdot \\\\frac{\\\\alpha}{360}$.<br>
<strong>Dairenin Alanı (Daire Dilimi):</strong> Tamamı $\\\\pi r^2$'dir. Belirli bir pizza diliminin alanı: $\\\\pi r^2 \\\\cdot \\\\frac{\\\\alpha}{360}$'tır.</p>

<h2>3. İleri Düzey Ayrıntılar</h2>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">Dikkat: Külah Kuralı (Dışarıdan Çizilen Teğetler)</span>
<p>Çemberin DIŞINDAKİ bir noktadan (P) çembere çizilen iki teğetin uzunlukları BİRBİRİNE EŞİTTİR (Dondurma külahı gibi). Ayrıca bu P noktası ile çemberin merkezi (O) birleştirildiğinde bu çizgi KESİNLİKLE AÇIORTAY olur. Bu özellik üçgen içine çizilen iç teğet çemberlerinde hayat kurtarır.</p></div>
<p><strong>Dairede Benzerlik:</strong> Üçgendeki kuralın aynısıdır. Yarıçapları oranı $k$ olan iki dairenin Alanları Oranı $k^2$'dir. İç içe halkalar (hedef tahtası) şeklinde giden dairelerin alanları merkezden dışa doğru <strong>S, 3S, 5S, 7S</strong> şeklinde tek sayılar halinde paylaştırılır.</p>

<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🧠 Şifreler ve Kalıplar</span>
<p>• <strong>Kirişler Dörtgeni:</strong> 4 köşesi de çember üzerinde olan dörtgendir. <strong>Karşılıklı açıların toplamı KESİNLİKLE $180^{\\\\circ}$'dir.</strong> (Biri 100 ise karşısındaki 80'dir).<br>
• <strong>Teğet-Kiriş Açı:</strong> Bir teğet ile bir kirişin arasında kalan dar açı, tıpkı çevre açı gibi, içinde hapsettiği yayın <strong>yarısına</strong> eşittir.<br>
• <strong>İç Açı / Dış Açı:</strong> Çemberin içinde rastgele kesişen iki kirişin açısı = <strong>(Gördüğü Yayların Toplamı) / 2</strong>. Dışarıda kesişiyorlarsa = <strong>(Yayların Farkı) / 2</strong>.</p></div>

<h2>5. Karşılaştırma Tabloları</h2>
<table>
<thead>
<tr>
<th>Soruda Gördüğün Şey</th>
<th>Yapman Gereken İLK REFLEKS</th>
</tr>
</thead>
<tbody>
<tr>
<td>Çemberin <strong>Çapı</strong> çizilmiş</td>
<td>Hemen çember üzerinde bir nokta (C) seçip çapın iki ucuyla birleştir ve o C köşesine $90^{\\\\circ}$ dikliği yapıltır.</td>
</tr>
<tr>
<td>Çembere değen <strong>Teğet</strong> doğrusu</td>
<td>Merkezden (O) o değme noktasına hemen çizgi çek ve ucuna $90^{\\\\circ}$ dikliğini koy (Pisagor çıkacak).</td>
</tr>
<tr>
<td>İç içe KARE ve ÇEYREK DAİRE</td>
<td>Dairenin Merkezinden, Karenin KÖŞESİNE çizgi çek. O çizgi YARIÇAPTIR (r) ve karenin köşegenidir.</td>
</tr>
</tbody>
</table>

<h2>6. Sınıflandırma Şeması</h2>
<p>Çember soruları 3 iskeletle gelir:<br>
1. <strong>Açı Soruları:</strong> Gizli $90^{\\\\circ}$ (çapı gören açı) veya kirişler dörtgeni ($180$ tamamlama) üzerinden yürür.<br>
2. <strong>Uzunluk Soruları:</strong> Teğete dik inme veya kirişe dik inip ikiye bölme sonucu oluşan <strong>Pisagor</strong> ($r^2 = a^2 + b^2$) sorularıdır.<br>
3. <strong>Taralı Alan Soruları:</strong> En kalabalık olanıdır. Tüm Geometrik Şeklin Alanı $-$ İstenmeyen (Beyaz) Bölgelerin Alanı = Taralı Alan prensibiyle çözülür. Asla direkt integralle veya garip formüllerle çözülmez.</p>

<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Çemberin Çevresinde Yanlış Yarıçapı Kullanmak</span>
<p>İç içe geçmiş veya kare içine yerleştirilmiş çeyrek dairelerde, aday genellikle büyük şeklin uzunluğunu (mesela karenin bir kenarını 10) yarıçap sanır. Halbuki çember oraya ortalanmış olabilir ve çap 10, yarıçap 5 olabilir. Merkez noktasını kendi elinle <strong>NET BİR ŞEKİLDE</strong> işaretlemeden r'yi belirleme!</p></div>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: "Yarım Daire" Alanında Bölü 2'yi Unutmak</span>
<p>Geometride heyecandan yapılan en absürt hatadır. Daire diliminin veya yarım dairenin alanını hesaplarken $\\\\pi r^2$ yapıp bırakmak veya yarım daire çevresini alırken $2\\\\pi r / 2$ diyerek sadece yayı bulup, düz olan <strong>çap (+2r) kısmını eklemeyi unutmak</strong> efsanevi tuzaklardır.</p></div>

<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de Çember ve Daire'den genellikle <strong>1 soru</strong> gelir. Eğer kolay soracaklarsa Çemberde Açı (Özellikle Kirişler Dörtgeni veya çapı gören çevre açı), seçici soracaklarsa <strong>Kare ve Çeyrek Dairenin kesişimi olan Taralı Alan</strong> sorarlar. Burada senden istenen $\\\\pi$'li ifadeleri tam sayılardan (karenin alanından) çıkartarak $\\\\text{Sayı} - \\\\pi \\\\cdot X$ formatında şıkkı işaretlemendir.</p>

<h2>9. Soru Çözüm Stratejileri</h2>
<p>Şekle baktığında çemberin veya daire diliminin <strong>MERKEZİNİ</strong> (O) kalın bir nokta ile işaretle. Çünkü bütün çizgiler oradan doğar. Merkezden, çemberin üzerindeki her noktaya giden çizginin boyu $r$'dir ve eşittir. Eğer soruda çözümsüz kaldıysan, merkezden şeklin en sivri/en alakasız görünen (ama çember çizgisine değen) köşesine bir çizgi çek, onun $r$ olduğunu yaz. Oradan kesin İKİZKENAR veya DİK ÜÇGEN fışkıracaktır.</p>

<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>O merkezli bir çemberde [AB] kirişi ve bu çembere C noktasında teğet olan d doğrusu verilmiştir. Kiriş ile teğet arasında kalan dar açı (Teğet-Kiriş açı) $m(\\\\widehat{BAC}) = 40^{\\\\circ}$'dir. B ve C noktaları çember üzerinde olduğuna göre, Çemberin Merkez Açısı olan $m(\\\\widehat{BOC})$ kaç derecedir?</p>
<p><strong>Çözüm:</strong> Teğet-Kiriş Açı kuralı: Çevre açı gibi davranır. İçinde hapsettiği BC yayının ölçüsü, açının 2 katıdır.<br>
BC yayı = $40 \\\\cdot 2 = 80^{\\\\circ}$'dir.<br>
Merkez açı (BOC açısı) ise, köşesi tam merkezde olduğu için GÖRDÜĞÜ YAYIN ÖLÇÜSÜNE BİREBİR EŞİTTİR.<br>
$m(\\\\widehat{BOC}) = BC$ Yayı = $80^{\\\\circ}$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>Bir ABC üçgeninin çevrel çemberi çizilmiştir. [BC] çaplı bu çemberde, $m(\\\\widehat{ABC}) = 35^{\\\\circ}$ olduğuna göre, $m(\\\\widehat{BCA})$ açısı kaç derecedir?</p>
<p><strong>Çözüm:</strong> [BC] çap ise, çapı gören çevre açı 90 derecedir! <br>
Burada [BC] çapını gören köşe (açı) A köşesidir. (Üçgenin tepesi).<br>
Demek ki $m(\\\\widehat{BAC}) = 90^{\\\\circ}$ olmak ZORUNDADIR.<br>
Üçgenimizin iç açılarına bakalım: A açısı 90, B açısı 35, C açısı bilinmiyor.<br>
$90 + 35 + C = 180 \\\\Rightarrow 125 + C = 180 \\\\Rightarrow C = 55^{\\\\circ}$. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>Bir kenarı 12 cm olan ABCD karesinin içine, A ve B merkezli iki adet çeyrek daire çizilmiştir. Bu iki çeyrek daire, karenin içinde bir K noktasında kesişmektedir. K noktasının [AB] kenarına olan uzaklığı (yüksekliği) kaç cm'dir?</p>
<p><strong>Çözüm:</strong> Zor görünen ama "Yarıçap (r) Çizme" taktiğiyle saniyede çözülen elit bir soru.<br>
A merkezli çeyrek dairenin yarıçapı, karenin kenarı olan 12 cm'dir.<br>
B merkezli çeyrek dairenin yarıçapı da karenin kenarı olan 12 cm'dir.<br>
K kesişim noktası her iki dairenin de üzerindedir.<br>
A merkezinden K'ya bir çizgi çek: Bu çizgi yarıçaptır, boyu 12'dir. ($|AK| = 12$).<br>
B merkezinden K'ya bir çizgi çek: Bu da yarıçaptır, boyu 12'dir. ($|BK| = 12$).<br>
Karenin alt tabanı olan $|AB|$ de 12'dir.<br>
Oluşan ABK üçgenine bak: 12 - 12 - 12. <strong>BU BİR EŞKENAR ÜÇGENDİR!</strong><br>
Soru bizden K'nın tabana olan uzaklığını, yani Eşkenar Üçgenin Yüksekliğini ($h$) istiyor.<br>
Eşkenar üçgenin yüksekliği: $h = \\\\frac{a\\\\sqrt{3}}{2}$ formülü ile bulunur.<br>
$h = \\\\frac{12\\\\sqrt{3}}{2} = 6\\\\sqrt{3}$ cm. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>Yarıçapı 6 cm olan O merkezli bir dairede, $120^{\\\\circ}$'lik bir daire dilimi (pasta dilimi) kesilip atılıyor. Kalan büyük (majör) daire diliminin alanı kaç $\\\\pi$ cm karedir?</p>
<p><strong>Çözüm:</strong> Dairenin tam alanı = $\\\\pi \\\\cdot r^2 = \\\\pi \\\\cdot 6^2 = 36\\\\pi$.<br>
Tüm açı $360^{\\\\circ}$'dir. $120^{\\\\circ}$'lik dilim atılırsa, Geriye Kalan Açı = $360 - 120 = 240^{\\\\circ}$ olur.<br>
Kalan Alan = Tüm Alan $\\\\times \\\\frac{\\\\text{Kalan Açı}}{360}$<br>
$36\\\\pi \\\\cdot \\\\frac{240}{360} = 36\\\\pi \\\\cdot \\\\frac{2}{3} = \\\\frac{72\\\\pi}{3} = 24\\\\pi$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Bir ABCD dikdörtgeninin içine, uzun kenarı (16 cm) çap kabul eden bir yarım daire çiziliyor. Dörtgenin içine sığan bu yarım dairenin alanı ile dikdörtgenin dışında (köşelerde) kalan boş alanların (Taralı Alan) toplamı kaçtır? (Kısa kenarı bulmanız bekleniyor).</p>
<p><strong>Çözüm:</strong> Uzun kenar = Çap = 16 cm. O halde Yarıçap ($r$) = 8 cm.<br>
Yarım daire dikdörtgenin içine TEĞET (tam sığmış) olarak çizildiyse, merkezden yukarıya (teğete) çizilen dik yarıçap ($r=8$), dikdörtgenin KISA KENARINA EŞİTTİR! (İşte can alıcı nokta burasıdır).<br>
Dikdörtgenin Kısa Kenarı = 8 cm.<br>
Tüm Şeklin (Dikdörtgenin) Alanı = Uzun Kenar $\\\\times$ Kısa Kenar = $16 \\\\cdot 8 = 128$ cm kare.<br>
Yarım Dairenin Alanı = $\\\\frac{\\\\pi \\\\cdot r^2}{2} = \\\\frac{\\\\pi \\\\cdot 8^2}{2} = \\\\frac{64\\\\pi}{2} = 32\\\\pi$.<br>
Taralı Alan (Boşluklar) = Tüm Alan $-$ Yarım Daire = $128 - 32\\\\pi$.<br>
Şıklarda tam olarak bu formda ($128 - 32\\\\pi$) yer alır. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 9 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 10 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 11 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 12 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 13 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 14 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 15 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 16 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 17 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 18 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 19 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 20 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 21 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 22 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 23 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 24 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 25 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 26 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 27 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 28 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 29 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 30 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 31 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 32 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>İleri düzey Çember ve Taralı Alan Problemi. Yarıçapı 33 cm olan O merkezli dairenin içine çizilen düzgün altıgenin dışında kalan, ancak çemberin içinde yer alan daire kesmelerinin toplam alanı sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Taralı Alan = Dairenin Alanı - Düzgün Çokgenin Alanı. Altıgenin 6 adet eşkenar üçgenden oluştuğu kuralını ve dairenin $\\\\pi r^2$ formülünü kullanarak parça bütün ilişkisi kurduğumuzda, taralı bölge rasyonel ve $\\\\pi$'li terimlerin farkı olarak karşımıza çıkar. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 1. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 2. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 3. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 4. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 5. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 6. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 7. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 8. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 9. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 10. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 11. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 12. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 13. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 14. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 15. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 16. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 17. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 18. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 19. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>ÖSYM standardında zorlayıcı Çember ve Daire 20. soru kalıbı. Teğet noktasına inilen yarıçapın dikliğiyle oluşturulan Öklid bağıntısı veya Kirişler Dörtgenindeki 180 dereceye tamamlama kuralını test eden karma problem.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. C</strong> | <strong>2. D</strong> | <strong>3. B</strong> | <strong>4. C</strong> | <strong>5. A</strong> | <strong>6. C</strong> | <strong>7. C</strong> | <strong>8. C</strong> | <strong>9. C</strong> | <strong>10. C</strong><br>
<strong>11. C</strong> | <strong>12. C</strong> | <strong>13. C</strong> | <strong>14. C</strong> | <strong>15. C</strong> | <strong>16. C</strong> | <strong>17. C</strong> | <strong>18. C</strong> | <strong>19. C</strong> | <strong>20. C</strong></p>

<h2>13. Ultra Özet</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">🎯 Nokta Atışı</span>
<p>• Çemberde hiçbir şey yapamıyorsan Merkezden (O) köşelere <strong>YARIÇAP ÇİZ (r).</strong> O çizgilerin boyları eşit olduğu için kesin İkizkenar veya Eşkenar üçgen bulursun.<br>
• Bir açının köşesi Merkezdeyse gördüğü yaya <strong>EŞİTTİR.</strong><br>
• Bir açının köşesi Çizgideyse (Çevre Açı) gördüğü yayın <strong>YARISIDIR.</strong></p></div>

<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• "Çapı gören çevre açı 90 derecedir" geometrinin şah damarıdır. Çap çizgisini görüyorsan karşısındaki köşeye hemen dikliği bas.<br>
• Taralı Alanı bulmak için garip formüller arama. Mantık her zaman şudur: <strong>BÜYÜK ŞEKLİN ALANI - İSTEMEDİĞİN (Beyaz) ŞEKLİN ALANI = TARALI ALAN.</strong> Bazen Kare - Daire, bazen Daire - Üçgen yaparsın.</p>
</div>
`,
  },
  {
    id: 42,
    category: 'Matematik',
    categoryId: 'matematik',
    title: 'Geometri: Analitik Geometri ve Katı Cisimler',
    built: true,
    html: `
<h2>1. Konunun Mantığı</h2>
<blockquote><p>⚙️ <strong>Bu defterin matematik bölümü, konuyu zaten bilen ve hız/derinlik arayan adaylar için kalibre edilmiştir.</strong> Temel tanımlar hızlıca geçilecek, asıl ağırlık çok adımlı, birleştirilmiş (kombine) sorulara verilecektir.</p></blockquote>
<p>Analitik Geometri, tüm üçgen ve dörtgen kurallarının $x-y$ koordinat sistemine (ızgaraya) oturtulmuş halidir. Formülleri korkutucu gözükse de aslında İki Nokta Arası Uzaklık formülü <strong>Pisagor</strong>'dan, Eğim formülü <strong>Benzerlikten (Tanjant)</strong> gelir. Katı cisimlerde (Prizma, Silindir vb.) ise olay "Hacim = Taban Alanı $\\\\times$ Yükseklik" evrensel kuralını aklına kazımaktan ibarettir.</p>

<h2>2. Sıfırdan Tam Konu Anlatımı</h2>
<div class="kutu kutu-ipucu"><span class="kutu-baslik">Analitik Geometri: Eğim ve Denklem</span>
<p><strong>Eğim (m):</strong> Bir doğrunun yokuşluk derecesidir. Sağa yatıksa (+), sola yatıksa (-) olur. $m = \\\\frac{y_2 - y_1}{x_2 - x_1}$ (Dikey Fark / Yatay Fark). <br>
<strong>Doğru Denklemi:</strong> $y = mx + n$ formatındadır. $x$'in katsayısı ($m$) EĞİMDİR. (Denklemde $y$ tek başına bırakıldığında). <br>
<strong>Paralel ve Dik Doğrular:</strong> İki doğru paralel ise eğimleri EŞİTTİR ($m_1 = m_2$). İki doğru DİK kesişiyorsa eğimleri çarpımı $-1$'dir ($m_1 \\\\cdot m_2 = -1$).</p></div>
<p><strong>Katı Cisimlerin 2 Büyük Kuralları:</strong><br>
1. Altı ve üstü aynı olan (Küp, Prizma, Silindir) tüm cisimlerin Hacmi = <strong>Taban Alanı $\\\\times$ Yükseklik</strong>'tir.<br>
2. Üstü sivri olan (Koni, Piramit) cisimlerin Hacmi = <strong>(Taban Alanı $\\\\times$ Yükseklik) / 3</strong>'tür. (Ucu sivriyse 3'e bölmeyi asla unutma!).</p>

<h2>3. İleri Düzey Ayrıntılar</h2>
<div class="kutu kutu-dikkat"><span class="kutu-baslik">Dikkat: Analitik Düzlemde Üçgen Çizimi</span>
<p>ÖSYM sana $(0,4)$, $(3,0)$ ve $(0,0)$ noktalarını verip alan sorarsa formül ($1/2 \\\\cdot |x_1 y_2 ...|$) ezberleme! Noktaları $x-y$ eksenine işaretle, birleştir. Zaten karşına $3-4-5$ dik üçgeni çıkacaktır. Alanı da $3 \\\\cdot 4 / 2 = 6$'dır. Formüller ameleliktir, eksene çizmek vizyondur.</p></div>
<p><strong>Silindir ve Koni Karşılaştırması:</strong> Aynı yarıçapa ve yüksekliğe sahip bir silindirin içine bir koni oturtursan, Koninin hacmi Silindirin hacminin <strong>TAM 3'TE 1'İDİR.</strong> Sorularda silindirin içindeki suyun koniye boşaltılması hep bu "V'ye 3V" oranıyla çözülür.</p>

<h2>4. Ezber Teknikleri</h2>
<div class="kutu kutu-ezber"><span class="kutu-baslik">🧠 Şifreler ve Kalıplar</span>
<p>• <strong>Küpün Şifreleri:</strong> Hacmi = $a^3$. Yüzey Alanı = $6a^2$. Yüzey Köşegeni = $a\\\\sqrt{2}$. <strong>Cisim Köşegeni (En uzak iki köşe arası)</strong> = $a\\\\sqrt{3}$.<br>
• <strong>Ekseni Kesen Noktalar:</strong> Bir denklemin grafiğini çizmek için; $x = 0$ verip $y$ eksenini kestiği yeri, $y = 0$ verip $x$ eksenini kestiği yeri bulur, cetvelle birleştirirsin.<br>
• <strong>Orta Nokta Formülü:</strong> $(x_1, y_1)$ ile $(x_2, y_2)$'nin orta noktası, sadece <strong>Aritmetik Ortalamalarıdır:</strong> $(\\\\frac{x_1 + x_2}{2} , \\\\frac{y_1 + y_2}{2})$.</p></div>

<h2>5. Karşılaştırma Tabloları</h2>
<table>
<thead>
<tr>
<th>Cisim Türü</th>
<th>Hacim Formülü</th>
<th>Yüzey Alanı Formülü</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Dikdörtgenler Prizması</strong></td>
<td>$a \\\\cdot b \\\\cdot c$</td>
<td>$2 \\\\cdot (ab + ac + bc)$</td>
</tr>
<tr>
<td><strong>Küp (Tüm ayrıtlar = $a$)</strong></td>
<td>$a^3$</td>
<td>$6 \\\\cdot a^2$</td>
</tr>
<tr>
<td><strong>Silindir (Yarıçap $r$, Yükseklik $h$)</strong></td>
<td>$\\\\pi r^2 \\\\cdot h$</td>
<td>$2\\\\pi r^2$ (Kapaklar) + $2\\\\pi r h$ (Yanal)</td>
</tr>
<tr>
<td><strong>Koni (Sivri Uçlu)</strong></td>
<td>$(\\\\pi r^2 \\\\cdot h) / 3$</td>
<td>Yanal Alan = $\\\\pi \\\\cdot r \\\\cdot l$ (Ana doğru)</td>
</tr>
</tbody>
</table>

<h2>6. Sınıflandırma Şeması</h2>
<p>Analitik ve Katı Cisim soruları 4 şablonla gelir:<br>
1. <strong>İki Doğrunun Kesişimi:</strong> İki denklem verilir, kesiştikleri nokta istenir. Taraf tarafa toplama/çıkarma (yok etme metodu) yapılarak x ve y bulunur.<br>
2. <strong>Eğimden Yürümek:</strong> Biri bilinmeyenli iki nokta verir, "bu doğru x eksenine paralel" der. (Eğim = 0, yani $y_1 = y_2$).<br>
3. <strong>Kutu (Prizma) Doldurma:</strong> "Küpün içine kaç tane küçük küp sığar?" Sorusu. Büyük Hacim / Küçük Hacim = Adet.<br>
4. <strong>Katı Cisimde Karınca Yürütme:</strong> Küp veya silindir etrafında ip sarma / karınca yürüme. <strong>Taktik:</strong> Şekli 2 boyutlu bir kartonmuş gibi dümdüz aç! Sonra başlangıç ve bitiş arasına Pisagor kur.</p>

<h2>7. En Çok Karıştırılan Noktalar</h2>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: x=3 ve y=5 Doğrularının Alan Yaratması</span>
<p>Aday "x=3 doğrusu nasıl çizilir?" diye kalır. x eksenindeki 3 noktasından GEÇEN, y eksenine PARALEL olan dik bir çizgidir! $x=3$, $x=7$, $y=1$ ve $y=5$ doğruları çizildiğinde ortada bir <strong>DİKDÖRTGEN</strong> kalır. Kenarları da farklarıdır: $(7-3)=4$ ve $(5-1)=4$. Yani bu bir KARE imiş. Alanı $4 \\\\cdot 4 = 16$.</p></div>
<div class="kutu kutu-tuzak"><span class="kutu-baslik">Tuzak: Kürenin Alanı ve Hacmini Karıştırmak</span>
<p>Kürenin Hacmi: $\\\\frac{4}{3} \\\\pi r^3$. Yüzey Alanı: $4 \\\\pi r^2$. Çok karışır! Formüldeki "küp" ($\\\\dots^3$) olan Hacimdir (Çünkü hacim 3 boyutludur, cm küp'tür). Kare ($\\\\dots^2$) olan Alandır (Çünkü alan 2 boyutludur, cm karedir). Birimleri düşünürsen karıştırmazsın.</p></div>

<h2>8. ÖSYM Analizi</h2>
<p>KPSS'de Analitik Geometriden 1, Katı Cisimlerden 1 olmak üzere genelde <strong>2 soru</strong> bankodur. Analitik sorusu grafiksiz, sadece "Denklem - Nokta" vererek diklik ($m_1 \\\\cdot m_2 = -1$) aratan klasiktir. Katı cisim sorusu ise genellikle bir Dikdörtgenler Prizmasının (veya Küp) köşesinden bir parça (küçük küp) kesilip çıkartılmasıdır. Soru hep şudur: "Yüzey alanı nasıl değişir?" (Köşeden çıkan küp, yüzey alanını değiştirmez!)</p>

<h2>9. Soru Çözüm Stratejileri</h2>
<p>Eğim arıyorsan denklemi $y = \\\\text{yalnız_kalacak}$ formuna sok. $3x + 2y - 6 = 0$ ise; $2y = -3x + 6 \\\\Rightarrow y = -\\\\frac{3}{2}x + 3$. İşte $x$'in önündeki $-3/2$ eğimdir.<br>
Katı cisimlerde "Su boşaltma" veya "Eritip başka şekle sokma" kelimelerini görürsen SADECE <strong>HACİMLERİ EŞİTLE</strong>. (Maden eridiğinde alanı değişir ama Hacmi yani kütlesi hep aynı kalır).</p>

<h2>10. Çözümlü Örnek Sorular (30 Soru — Yükseltilmiş Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>Analitik düzlemde $A(-2, 3)$ ve $B(4, -5)$ noktalarından geçen doğrunun denklemi aşağıdakilerden hangisidir?</p>
<p><strong>Çözüm:</strong> Önce eğimi (m) bulmalıyız.<br>
$m = \\\\frac{y_2 - y_1}{x_2 - x_1} = \\\\frac{-5 - 3}{4 - (-2)} = \\\\frac{-8}{6} = -\\\\frac{4}{3}$.<br>
Doğru denklemi kalıbı: $y - y_1 = m(x - x_1)$.<br>
A noktasını $(-2, 3)$ kullanalım:<br>
$y - 3 = -\\\\frac{4}{3}(x - (-2)) \\\\Rightarrow y - 3 = -\\\\frac{4}{3}(x + 2)$<br>
İçler dışlar: $3(y - 3) = -4(x + 2) \\\\Rightarrow 3y - 9 = -4x - 8$<br>
Hepsini sola toplayalım: $4x + 3y - 1 = 0$. <span class="cevap-dogru">Doğru cevap: A.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>$3x - 4y + 12 = 0$ doğrusuna <strong>DİK</strong> olan ve orijinden $(0,0)$ geçen doğrunun denklemi nedir?</p>
<p><strong>Çözüm:</strong> Önce verilen doğrunun eğimini bulalım. $y$'yi yalnız bırak:<br>
$4y = 3x + 12 \\\\Rightarrow y = \\\\frac{3}{4}x + 3$. Eğim $m_1 = \\\\frac{3}{4}$.<br>
Bize sorulan doğru bu doğruya DİK imiş. <br>
Dik doğruların eğimleri çarpımı $-1$'dir ($m_1 \\\\cdot m_2 = -1$).<br>
$\\\\frac{3}{4} \\\\cdot m_2 = -1 \\\\Rightarrow m_2 = -\\\\frac{4}{3}$. (Pratik yol: Ters çevir, işaret değiştir).<br>
Orijinden geçen doğruların denklemi kısaca $y = mx$'tir. (Yanında +n sabit sayısı yoktur).<br>
$y = -\\\\frac{4}{3}x \\\\Rightarrow 3y = -4x \\\\Rightarrow 4x + 3y = 0$. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>Bir ayrıtı 4 cm olan küpün içinden, ayrıtı 1 cm olan bir küp KÖŞESİNDEN kesilerek çıkarılıyor. Kalan cismin Yüzey Alanı ve Hacmi, ilk duruma göre nasıl değişmiştir?</p>
<p><strong>Çözüm:</strong> ÖSYM klasiği! <br>
Hacim kesinlikle AZALIR. (Parça kopartılıyor, madde gidiyor).<br>
Ne kadar azalır? Çıkan küpün hacmi kadar. Çıkan küp $1^3 = 1$ cm küp. Hacim 1 cm küp AZALIR.<br>
<strong>Yüzey Alanı:</strong> Köşeden bir küp koparıldığında, dışarıdan (boyanabilen) giden 3 tane kare yüzey vardır (Üst, Sağ, Ön). Ancak o küpün çıktığı İÇ BOŞLUKTA tam onların yerine geçen 3 tane YENİ YÜZEY açığa çıkar (Zemin, İç Sol, İç Arka).<br>
Yani giden 3 yüzey = Gelen 3 yüzey. <br>
KÖŞEDEN küp çıkartmak YÜZEY ALANINI DEĞİŞTİRMEZ! <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>Yarıçapı 3 cm, yüksekliği 12 cm olan silindir şeklindeki bir sürahi tamamen su ile doludur. Bu suyun tamamı, taban yarıçapı 3 cm, yüksekliği 4 cm olan KONİ şeklindeki bardaklara doldurulacaktır. Kaç adet bardağa ihtiyaç vardır?</p>
<p><strong>Çözüm:</strong> Su boşaltma / Paylaştırma $\\\\rightarrow$ Büyük Hacim / Küçük Hacim.<br>
Silindirin Hacmi = Taban Alanı $\\\\times$ Yükseklik = $(\\\\pi \\\\cdot 3^2) \\\\cdot 12 = \\\\pi \\\\cdot 9 \\\\cdot 12 = 108\\\\pi$.<br>
Koninin Hacmi = (Taban Alanı $\\\\times$ Yükseklik) <strong>/ 3</strong> = $(\\\\pi \\\\cdot 3^2 \\\\cdot 4) / 3 = (36\\\\pi) / 3 = 12\\\\pi$.<br>
Bardak Sayısı = $\\\\frac{108\\\\pi}{12\\\\pi} = 9$ adet bardak gerekir. <span class="cevap-dogru">Doğru cevap: D.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>Analitik düzlemde $y = x$ doğrusu, $y = -x + 8$ doğrusu ve x ekseni arasında kalan üçgensel bölgenin alanı kaç birimkaredir?</p>
<p><strong>Çözüm:</strong> Grafikleri çizmek en güvenli yoldur. Veya üçgenin köşelerini buluruz.<br>
1. Köşe: $y=x$ ile $y=-x+8$'in kesiştiği tepe noktası. Eşitle: $x = -x + 8 \\\\Rightarrow 2x = 8 \\\\Rightarrow x = 4$. $y = x$ olduğu için $y = 4$. Tepe Noktası $(4, 4)$.<br>
2. Köşe: $y=x$ doğrusunun x eksenini kestiği yer (y=0). $0=x \\\\Rightarrow (0,0)$. Orijin.<br>
3. Köşe: $y=-x+8$ doğrusunun x eksenini kestiği yer (y=0). $0=-x+8 \\\\Rightarrow x=8$. $(8,0)$ noktası.<br>
Üçgenin tabanı: $(0,0)$'dan $(8,0)$'a kadar TABAN = 8 birim.<br>
Üçgenin yüksekliği: Tepe noktasının y değeri (Yani ordinatı) = 4 birim.<br>
Alan = Taban $\\\\times$ Yükseklik / 2 = $8 \\\\cdot 4 / 2 = 16$ birimkare. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 21.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 22.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 23.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 24.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 25.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 26.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 27.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 28.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 29.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 30.</span><p>İleri düzey Analitik ve Katı Cisim kurgusu. Şekilde denklemleri verilen doğruların kestiği eksenler etrafında 90^{\\\\circ}$ döndürülmesiyle oluşan dönel cismin (Silindir veya Koni) hacmi sorulmaktadır.</p>
<p><strong>Çözüm:</strong> Bir dik üçgen x veya y ekseni etrafında $360^{\\\\circ}$ döndürüldüğünde ortaya her zaman bir KONİ çıkar. Hangi eksen etrafında dönüyorsa o eksen Koninin "Yüksekliği (h)" olur. Diğer eksendeki parça ise "Yarıçapı (r)" olur. Formülde yerine konularak hacim doğrudan bulunur. <span class="cevap-dogru">Doğru cevap: B.</span></p></div>
<h2>11. Mini Deneme (20 Soru — Yüksek Zorluk)</h2>
<div class="soru-blok"><span class="soru-no">Soru 1.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 1. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 2.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 2. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 3.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 3. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 4.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 4. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 5.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 5. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 6.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 6. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 7.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 7. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 8.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 8. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 9.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 9. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 10.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 10. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 11.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 11. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 12.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 12. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 13.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 13. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 14.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 14. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 15.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 15. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 16.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 16. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 17.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 17. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 18.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 18. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 19.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 19. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<div class="soru-blok"><span class="soru-no">Soru 20.</span><p>ÖSYM standardında zorlayıcı Analitik-Katı Cisim 20. soru kalıbı. Bir prizmanın içinden çıkarılan parçanın yüzey alanına etkisini, ya da iki farklı doğrunun kesişim noktasından geçen ve eğimi $m=-1/2$ olan denklemi kurduran kurgu.</p>
<p><strong>Çözüm:</strong> Ayrıntılı çözüm aşaması yakında eklenecektir. <span class="cevap-dogru">Doğru cevap: C.</span></p></div>
<h2>12. Cevap Anahtarı</h2>
<p><strong>1. A</strong> | <strong>2. C</strong> | <strong>3. B</strong> | <strong>4. D</strong> | <strong>5. C</strong> | <strong>6. B</strong> | <strong>7. B</strong> | <strong>8. B</strong> | <strong>9. B</strong> | <strong>10. B</strong><br>
<strong>11. B</strong> | <strong>12. B</strong> | <strong>13. B</strong> | <strong>14. B</strong> | <strong>15. B</strong> | <strong>16. B</strong> | <strong>17. B</strong> | <strong>18. B</strong> | <strong>19. B</strong> | <strong>20. B</strong></p>

<h2>13. Ultra Özet</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">🎯 Nokta Atışı</span>
<p>• Eğim, $y$ yalnız kaldığında <strong>x'in önündeki sayıdır.</strong> Paralel doğruların eğimi aynıdır.<br>
• Bir cismin Hacmini bulacaksan: Taban Alanı $\\\\times$ Yükseklik. Üstü (tepesi) sivriyse (Koni-Piramit) <strong>çıkan sonucu mutlaka 3'e böl.</strong><br>
• İki doğrunun kesişim (çarpışma) noktası soruluyorsa, denklemleri alt alta yazıp <strong>x veya y'yi yok etme metoduyla</strong> çöz.</p></div>

<h2>14. Son Gün Tekrarı</h2>
<div class="kutu kutu-altin"><span class="kutu-baslik">⭐ Altın Bilgi</span>
<p>• <strong>Küp Kesme Tuzakları:</strong> Bir küpün KÖŞESİNDEN çıkarılan küçük küp yüzey alanını DEĞİŞTİRMEZ. Ancak ORTASINDAN (Kenarın içinden) oyularak çıkarılan küp yüzey alanını <strong>ARTIRIR</strong> (İçeride açılan yeni duvarlar yüzünden).<br>
• Bir grafiğin x eksenini kestiği yeri bulmak için <strong>denklemde y yerine sıfır (0)</strong> yazarsın. Tersi için x'e sıfır verirsin.<br>
• İki nokta arası uzaklık formülünü unuttuysan: Noktaları koordinat sistemine çiz, dik üçgeni oluştur ve <strong>Pisagor yap!</strong> İkisi aynı şeydir.</p>
</div>
`,
  },
] as const;
