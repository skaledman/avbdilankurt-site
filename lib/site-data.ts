import type { LucideIcon } from "lucide-react";
import {
  Bell,
  BookOpen,
  Briefcase,
  FileCheck,
  Gavel,
  Heart,
  Home,
  LayoutDashboard,
  Scale,
  Shield,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";

export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  detailParagraphs: string[];
  bullets: string[];
  icon: LucideIcon;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string[];
  tags: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type CourtDecision = {
  slug: string;
  title: string;
  date: string;
  court: string;
  category: string;
  summary: string;
  excerpt: string;
  content: string[];
};

export type WhyChooseUsItem = {
  key: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Testimonial = {
  id: string;
  quote: string;
  serviceArea: string;
};

export type ProcessStep = {
  key: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type TrustIndicator = {
  key: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SITE_INFO = {
  name: "Av. Betül Dilan Kurt",
  shortName: "BDK",
  phoneDisplay: "+90 546 578 16 62",
  phoneHref: "tel:+905465781662",
  whatsappHref: "https://wa.me/905465781662",
  email: "info@avbdilankurt.com",
  address: "Reşatbey, Beş Ocak Cd. Nevin Hanım Apartmanı Kat:3 Daire:5 01120 Seyhan/Adana",
  city: "Adana",
  instagram: "https://www.instagram.com/av.bdilankurt",
  linkedin: "https://tr.linkedin.com/in/avbdilankurt",
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "aile-hukuku",
    title: "Aile Hukuku",
    shortDescription:
      "Boşanma, velayet, nafaka ve mal paylaşımı süreçlerinde gizlilik odaklı hukuki destek sunulur.",
    heroDescription:
      "Aile ilişkilerinden doğan uyuşmazlıklarda hassasiyet, strateji ve etkili temsil bir arada yürütülür.",
    detailParagraphs: [
      "Aile hukuku; boşanma davaları, anlaşmalı ve çekişmeli boşanma süreçleri, velayet, iştirak nafakası, yoksulluk nafakası ve maddi-manevi tazminat taleplerini kapsayan geniş bir alandır. Bu süreçlerde yalnızca hukuki hakların korunması değil, tarafların özel hayatlarının ve çocukların üstün yararının gözetilmesi de büyük önem taşır.",
      "Boşanma sürecinin başından itibaren delillerin doğru hazırlanması, taleplerin hukuki zemine oturtulması ve dava stratejisinin sağlıklı kurulması, sonucun niteliğini doğrudan etkiler. Özellikle velayet ve kişisel ilişki kurulmasına dair uyuşmazlıklarda mahkemenin değerlendirdiği unsurlar dikkatle ele alınmalıdır.",
      "Mal rejiminin tasfiyesi, ziynet alacağı, aile konutu şerhi ve aile içi şiddet nedeniyle koruma tedbirleri gibi konular da aile hukukunun önemli başlıkları arasındadır. Her dosya kendi koşulları içinde değerlendirilerek hem hukuki hem insani yönü güçlü bir yaklaşım benimsenir.",
      "Sürecin her aşamasında müvekkilin düzenli bilgilendirilmesi, olası risklerin önceden açıklanması ve çözüm yollarının şeffaf biçimde paylaşılması esas alınır. Amaç, yıpratıcı olabilen aile hukuku süreçlerini mümkün olan en dikkatli ve güvenli şekilde yürütmektir.",
    ],
    bullets: ["Boşanma davaları", "Velayet ve nafaka", "Mal paylaşımı", "Koruma tedbirleri"],
    icon: Heart,
  },
  {
    slug: "ceza-hukuku",
    title: "Ceza Hukuku",
    shortDescription:
      "Soruşturma ve kovuşturma aşamalarında etkin savunma ve hızlı hukuki müdahale sağlanır.",
    heroDescription:
      "Ceza yargılamasında hak kaybını önlemek için her aşamada dikkatli ve kararlı savunma yürütülür.",
    detailParagraphs: [
      "Ceza hukuku, kişinin özgürlüğünü doğrudan etkileyen sonuçlar doğurabildiği için en dikkatli yürütülmesi gereken alanlardan biridir. Gözaltı, ifade alma, tutuklama, adli kontrol ve dava aşamalarında yapılacak her işlem son derece önemlidir.",
      "Soruşturma evresinde dosyanın içeriğinin incelenmesi, delillerin değerlendirilmesi ve ifade stratejisinin belirlenmesi; ilerleyen süreçte doğabilecek hak kayıplarını önlemede belirleyici rol oynar. Kovuşturma aşamasında ise savunmanın doğru kurulması, tanık beyanlarının ve bilirkişi raporlarının etkili analizi gerekir.",
      "Müvekkilin mağdur ya da şüpheli/sanık sıfatıyla yer aldığı dosyalarda, usule ilişkin güvencelerin korunması ve sürecin mevzuata uygun yürütülmesi titizlikle takip edilir. Özellikle tutuklama tedbirleri ve itiraz süreçleri zaman yönetimi açısından kritik önemdedir.",
      "Ceza hukukunda temel hedef; hukuki güvenceleri etkin şekilde kullanmak, müvekkilin savunma hakkını en güçlü biçimde ortaya koymak ve süreci şeffaf bir iletişimle yönetmektir.",
    ],
    bullets: ["Soruşturma aşaması", "Tutukluluğa itiraz", "Ceza davası savunması", "Mağdur vekilliği"],
    icon: Shield,
  },
  {
    slug: "is-hukuku",
    title: "İş Hukuku",
    shortDescription:
      "İşçi ve işveren uyuşmazlıklarında tazminat, işe iade ve fesih süreçleri profesyonel şekilde takip edilir.",
    heroDescription:
      "İş yaşamından doğan hak kayıplarına karşı dengeli, hızlı ve mevzuata uygun çözümler sunulur.",
    detailParagraphs: [
      "İş hukuku; işçi ile işveren arasındaki ilişkinin kurulmasından sona ermesine kadar pek çok önemli başlığı içerir. Kıdem ve ihbar tazminatı, fazla mesai alacakları, yıllık izin ücretleri, mobbing iddiaları ve işe iade davaları en sık karşılaşılan uyuşmazlıklar arasındadır.",
      "İş sözleşmesinin feshi sırasında haklı nedenin bulunup bulunmadığı, fesih bildirimlerinin usule uygun yapılıp yapılmadığı ve arabuluculuk başvurusunun zamanında gerçekleştirilip gerçekleştirilmediği büyük önem taşır. Eksik ya da gecikmiş işlemler, maddi hak kaybına yol açabilir.",
      "İşverenler bakımından ise personel sözleşmelerinin hazırlanması, iç prosedürlerin hukuka uygun kurulması ve uyuşmazlık doğmadan önce risklerin azaltılması önemli bir ihtiyaçtır. Önleyici hukuk yaklaşımı, ileride açılabilecek davaların önüne geçebilir.",
      "İş hukuku dosyalarında amaç; tarafların yasal konumunu netleştirerek mümkün olan en etkili çözüm yolunu belirlemek, süreci hızlı ve doğru şekilde yönetmektir.",
    ],
    bullets: ["İşe iade davaları", "Kıdem ve ihbar tazminatı", "İşçilik alacakları", "Arabuluculuk süreci"],
    icon: Briefcase,
  },
  {
    slug: "gayrimenkul-hukuku",
    title: "Gayrimenkul Hukuku",
    shortDescription:
      "Tapu, kira, ortaklığın giderilmesi ve mülkiyet uyuşmazlıklarında stratejik hukuki çözümler geliştirilir.",
    heroDescription:
      "Taşınmazlarla ilgili uyuşmazlıklarda hakların korunması için dikkatli belge ve süreç yönetimi sağlanır.",
    detailParagraphs: [
      "Gayrimenkul hukuku; kira ilişkileri, tahliye davaları, tapu iptal ve tescil davaları, ortaklığın giderilmesi, kat mülkiyeti uyuşmazlıkları ve taşınmaz satış sözleşmelerinden doğan sorunları kapsar. Bu alanda atılacak adımların büyük kısmı resmi kayıtlar ve belgeler üzerinden şekillenir.",
      "Kira hukukunda özellikle tahliye şartları, kira tespit davaları ve kira alacakları bakımından kanunun öngördüğü usullere uygun hareket edilmesi gerekir. Tapu uyuşmazlıklarında ise taşınmazın hukuki geçmişi, kayıt zinciri ve tarafların iddiaları ayrıntılı incelenmelidir.",
      "Arsa payı, kat karşılığı inşaat sözleşmeleri veya ortaklığın giderilmesi davaları gibi daha teknik nitelikteki dosyalarda, hukuki değerlendirmenin ekonomik sonuçları da göz önünde bulundurulur. Böylece yalnızca dava değil, sürecin toplam etkisi ele alınır.",
      "Gayrimenkul işlemlerinde önleyici danışmanlık da en az dava takibi kadar önemlidir. Sözleşme öncesi inceleme ve risk analizi, ileride doğabilecek büyük ihtilafların önüne geçebilir.",
    ],
    bullets: ["Kira ve tahliye", "Tapu davaları", "Ortaklığın giderilmesi", "Sözleşme inceleme"],
    icon: Home,
  },
  {
    slug: "ticaret-hukuku",
    title: "Ticaret Hukuku",
    shortDescription:
      "Şirketler ve tacirler için sözleşme, alacak ve kurumsal yapı süreçlerinde hukuki danışmanlık verilir.",
    heroDescription:
      "Ticari hayatta riskleri azaltan ve sürdürülebilirliği güçlendiren hukuki çözümler üretilir.",
    detailParagraphs: [
      "Ticaret hukuku; şirket kuruluşu, pay devri, ortaklık ilişkileri, ticari sözleşmeler, haksız rekabet ve ticari alacakların tahsili gibi birçok başlığı içerir. İş dünyasında alınan kararların hukuki altyapısının sağlam kurulması, uzun vadede büyük avantaj sağlar.",
      "Özellikle sözleşmelerin açık, dengeli ve uygulanabilir şekilde hazırlanması; taraflar arasındaki iş ilişkisinin daha güvenli sürmesini sağlar. Belirsiz ya da eksik hükümler ise ileride ciddi uyuşmazlıklara neden olabilir.",
      "Şirket içi uyuşmazlıklarda ortakların hak ve yükümlülükleri, ana sözleşme hükümleri ve ticari teamüller birlikte değerlendirilir. Ticari alacak takibinde ise hızlı aksiyon ve doğru usul seçimi önemlidir.",
      "Ticari faaliyet gösteren müvekkiller için yalnızca mevcut uyuşmazlıkların çözümü değil, gelecekteki risklerin öngörülmesi ve kurumsal yapının buna göre güçlendirilmesi de hedeflenir.",
    ],
    bullets: ["Şirket danışmanlığı", "Ticari sözleşmeler", "Ortaklık uyuşmazlıkları", "Ticari alacak takibi"],
    icon: TrendingUp,
  },
  {
    slug: "miras-hukuku",
    title: "Miras Hukuku",
    shortDescription:
      "Miras paylaşımı, tenkis, vasiyetname ve mirasçılık uyuşmazlıklarında titiz hukuki destek sunulur.",
    heroDescription:
      "Miras süreçlerinde aile dengelerini gözeten, hak kaybını önleyen ve planlı bir hukuki yaklaşım benimsenir.",
    detailParagraphs: [
      "Miras hukuku; mirasın paylaşılması, mirasçılık belgesi, vasiyetnamenin hazırlanması veya iptali, tenkis davaları ve muris muvazaası gibi birçok uyuşmazlığı kapsar. Bu dosyalarda hem hukuki hem de ailevi hassasiyetlerin birlikte değerlendirilmesi gerekir.",
      "Miras bırakanın tasarruflarının yasal sınırlar içinde olup olmadığı, saklı pay sahibi mirasçıların haklarının zedelenip zedelenmediği ve terekenin kapsamı dikkatle incelenmelidir. Özellikle taşınmaz devri veya bağış işlemleri miras uyuşmazlıklarının merkezinde yer alabilir.",
      "Paylaşım aşamasında terekeye dahil malvarlığının tespiti, borçların belirlenmesi ve mirasçıların yasal konumlarının netleştirilmesi önemlidir. Bu çerçevede dava öncesi uzlaşma ihtimalleri de değerlendirilir.",
      "Miras hukukunda amaç; aile içi gerilimi artırmadan, hukuki hakları koruyarak ve süreci anlaşılır hale getirerek etkili sonuç almaktır.",
    ],
    bullets: ["Miras paylaşımı", "Saklı pay ve tenkis", "Vasiyetname işlemleri", "Muris muvazaası"],
    icon: BookOpen,
  },
  {
    slug: "icra-iflas",
    title: "İcra ve İflas Hukuku",
    shortDescription:
      "Alacakların tahsili, icra takipleri ve borç ilişkilerinde hızlı ve etkin hukuki takip yürütülür.",
    heroDescription:
      "İcra ve iflas süreçlerinde zamanında işlem yapılarak alacakların korunması ve hak kaybının önlenmesi hedeflenir.",
    detailParagraphs: [
      "İcra ve iflas hukuku; para alacaklarının tahsili, ilamlı veya ilamsız icra takipleri, haciz işlemleri, menfi tespit ve istirdat davaları ile iflas süreçlerini kapsar. Bu alanda hız ve usule uygunluk doğrudan sonuç üzerinde etkilidir.",
      "Alacaklının doğru takip yolunu seçmesi, borçlu bakımından ise sürelere uygun itiraz ve başvuruların yapılması gerekir. İcra dosyalarında kaçırılan kısa süreler önemli hak kayıplarına yol açabilir.",
      "Ticari borçlar, kira alacakları, senet ve çek kaynaklı takipler ya da mahkeme kararına dayalı tahsil işlemleri, dosyanın niteliğine göre farklı stratejiler gerektirir. Her dosya ayrı bir planlama ile ele alınır.",
      "Hedef; alacağın en etkili şekilde tahsil edilmesi veya borçlu taraf açısından hukuka aykırı işlemlere karşı gerekli korumanın sağlanmasıdır.",
    ],
    bullets: ["İlamlı / ilamsız takip", "Haciz işlemleri", "İtiraz süreçleri", "Borç yapılandırma değerlendirmesi"],
    icon: Scale,
  },
  {
    slug: "genel-hukuk",
    title: "Genel Hukuk Danışmanlığı",
    shortDescription:
      "Farklı hukuk alanlarına ilişkin genel uyuşmazlıklarda yol gösterici ve çözüm odaklı danışmanlık sağlanır.",
    heroDescription:
      "Her hukuki sorunda ilk adımın doğru atılması için kapsamlı ön değerlendirme ve yönlendirme yapılır.",
    detailParagraphs: [
      "Genel hukuk danışmanlığı, tek bir uzmanlık alanı ile sınırlı kalmayan ve farklı mevzuat başlıklarına temas eden uyuşmazlıklarda ilk değerlendirme yapılmasını sağlar. Bu hizmet, kişilerin veya işletmelerin karşılaştığı hukuki sorunun çerçevesini netleştirmek bakımından önemlidir.",
      "Bir hukuki uyuşmazlığın dava konusu yapılmasından önce başvuru yolları, delil durumu, olası riskler ve alternatif çözüm yöntemleri değerlendirilir. Böylece gereksiz yargılama maliyetlerinin önüne geçilebilir.",
      "Sözleşmelerin genel incelemesi, ihtarnamelerin hazırlanması, resmi başvuruların yönlendirilmesi ve farklı hukuk alanlarıyla kesişen meselelerde strateji belirlenmesi bu kapsamda ele alınabilir.",
      "Amaç, müvekkilin mevcut sorunu en doğru şekilde anlamasını sağlamak ve gerekirse ilgili uzmanlık alanına hızlı ve sağlıklı geçiş yapabilmektir.",
    ],
    bullets: ["Ön hukuki değerlendirme", "İhtarname ve başvurular", "Sözleşme ön inceleme", "Uyuşmazlık stratejisi"],
    icon: Gavel,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "bosanma-davasi-sureci-bilinmesi-gerekenler",
    title: "Boşanma Davası Süreci: Bilinmesi Gerekenler",
    date: "11 Mart 2026",
    category: "Aile Hukuku",
    summary:
      "Boşanma davasına başlamadan önce usul, delil ve hak talepleri bakımından dikkat edilmesi gereken temel noktalar.",
    content: [
      "Boşanma davası açılmadan önce hangi taleplerin ileri sürüleceğinin netleştirilmesi gerekir. Velayet, nafaka, maddi ve manevi tazminat ile mal paylaşımına ilişkin başlıklar çoğu zaman birbiriyle bağlantılıdır. Bu nedenle davanın yalnızca boşanma talebi üzerinden değil, bütün sonuçlarıyla birlikte değerlendirilmesi önem taşır.",
      "Anlaşmalı boşanma ile çekişmeli boşanma arasındaki fark, sürenin ve ispat yükünün niteliğini doğrudan etkiler. Çekişmeli boşanma davalarında tanık anlatımları, yazılı belgeler, mesaj kayıtları ve diğer deliller sürecin en önemli parçalarıdır. Eksik hazırlık, davanın uzamasına veya hak kaybına neden olabilir.",
      "Boşanma sürecinde çocukların üstün yararı mahkemeler tarafından öncelikli olarak gözetilir. Velayet ve kişisel ilişki kurulmasına dair değerlendirmeler yapılırken yalnızca ebeveynlerin beyanları değil, sosyal inceleme raporları ve çocuğun koşulları da dikkate alınır.",
      "Sürece başlamadan önce uzman bir değerlendirme alınması; dava stratejisinin, olası sonuçların ve risklerin netleştirilmesi açısından fayda sağlar. Böylece duygusal yönü ağır basan bu süreç daha kontrollü ve planlı biçimde yürütülebilir.",
    ],
    tags: ["boşanma davası", "anlaşmalı boşanma", "çekişmeli boşanma", "velayet", "nafaka"],
  },
  {
    slug: "is-sozlesmesi-feshinde-haklariniz",
    title: "İş Sözleşmesi Feshinde Haklarınız",
    date: "7 Mart 2026",
    category: "İş Hukuku",
    summary:
      "İş sözleşmesinin sona erdirilmesi halinde işçi ve işveren açısından doğan temel haklar ve dikkat edilmesi gereken süreler.",
    content: [
      "İş sözleşmesinin feshi, sadece çalışma ilişkisinin sona ermesi anlamına gelmez; aynı zamanda tazminat, izin, ücret ve dava hakkı gibi birçok hukuki sonucu beraberinde getirir. Bu nedenle fesih işleminin nedenine ve şekline göre hangi hakların doğduğu dikkatle incelenmelidir.",
      "İşveren tarafından yapılan fesihte, haklı neden bulunup bulunmadığı ve yazılı bildirimin usule uygun yapılıp yapılmadığı büyük önem taşır. İşçi bakımından ise fesih sonrası arabuluculuk başvurusunun süresi içinde yapılması, işe iade veya alacak taleplerinin korunması açısından kritiktir.",
      "Kıdem tazminatı, ihbar tazminatı, fazla mesai, ulusal bayram ve genel tatil ücretleri ile yıllık izin alacakları en sık gündeme gelen kalemlerdir. Ancak her çalışan için hakların kapsamı aynı değildir; çalışma süresi, ücret yapısı ve fesih nedeni sonuca etki eder.",
      "Fesih sonrasında imzalanan belgelerin içeriği de ayrıca önemlidir. İbraname ya da çıkış belgeleri bilinmeden imzalandığında hak kayıpları yaşanabilir. Bu nedenle süreç baştan sona hukuki değerlendirme ile yürütülmelidir.",
    ],
    tags: ["iş hukuku", "işten çıkarılma", "kıdem tazminatı", "ihbar tazminatı", "işe iade"],
  },
  {
    slug: "miras-hukukunda-sakli-pay-nedir",
    title: "Miras Hukukunda Saklı Pay Nedir?",
    date: "2 Mart 2026",
    category: "Miras Hukuku",
    summary:
      "Saklı pay kavramı, hangi mirasçılar için geçerli olduğu ve miras bırakanın tasarruf özgürlüğünü nasıl sınırlandırdığı hakkında kısa bir rehber.",
    content: [
      "Saklı pay, miras bırakanın bazı yakın mirasçılar aleyhine tamamen ortadan kaldıramayacağı yasal miras payını ifade eder. Türk Medeni Kanunu uyarınca altsoy, ana-baba ve sağ kalan eş belirli koşullarda saklı paylı mirasçı olarak korunur.",
      "Miras bırakan vasiyetname veya bağış yoluyla malvarlığı üzerinde tasarrufta bulunabilir; ancak bu tasarruflar saklı paylı mirasçıların yasal korunan paylarını ihlal edemez. Aksi durumda tenkis davası gündeme gelebilir.",
      "Saklı pay hesabı yapılırken terekenin aktif ve pasifleri, sağlığında yapılan bazı kazandırmalar ve mirasçıların yasal pay oranları dikkate alınır. Bu nedenle hesaplama çoğu zaman teknik bir inceleme gerektirir.",
      "Özellikle aile içi taşınmaz devirleri ve bağış işlemlerinde, görünürde satış gibi yapılan bazı işlemlerin gerçekte mirastan mal kaçırma amacı taşıyıp taşımadığı ayrıca değerlendirilebilir. Bu da muris muvazaası ve tenkis davalarının önemini artırır.",
    ],
    tags: ["miras hukuku", "saklı pay", "tenkis davası", "vasiyetname", "muris muvazaası"],
  },
  {
    slug: "bosanma-davasi-ne-kadar-surer",
    title: "Boşanma Davası Ne Kadar Sürer?",
    date: "5 Mart 2026",
    category: "Aile Hukuku",
    summary:
      "Anlaşmalı ve çekişmeli boşanma davalarında süreler farklılık gösterir. Ortalama yargılama süreleri ve süreyi etkileyen faktörler hakkında bilgi.",
    content: [
      "Boşanma davasının süresi, anlaşmalı veya çekişmeli olmasına, taleplerin kapsamına ve mahkemenin iş yoğunluğuna göre değişir. Anlaşmalı boşanmada taraflar boşanma ve fer'i sonuçlar üzerinde anlaşmışsa, tek veya birkaç duruşmada sonuç alınabilir.",
      "Çekişmeli boşanma davalarında delil toplama, bilirkişi incelemeleri, sosyal inceleme raporu ve çocuk varsa velayet değerlendirmesi gibi aşamalar süreyi uzatabilir. Bu nedenle çekişmeli davalarda birkaç ay ile birkaç yıl arasında değişen süreler söz konusu olabilir.",
      "Süreci etkileyen diğer unsurlar arasında tarafların işbirliği, delillerin hazırlanma hızı ve mahkeme takvimi yer alır. Hukuki süreç hakkında ön bilgi almak için avukatlık hizmeti ve danışmanlık desteği almanız faydalı olur.",
    ],
    tags: ["boşanma davası", "anlaşmalı boşanma", "çekişmeli boşanma", "dava süresi", "aile hukuku"],
  },
  {
    slug: "nafaka-nasil-belirlenir",
    title: "Nafaka Nasıl Belirlenir?",
    date: "28 Şubat 2026",
    category: "Aile Hukuku",
    summary:
      "İştirak nafakası ve yoksulluk nafakasının belirlenmesinde mahkemelerin dikkate aldığı kriterler ve hesaplama yaklaşımları.",
    content: [
      "İştirak nafakası, velayet kendisine verilmeyen ebeveynin çocuğun giderlerine katkı amacıyla ödediği aylık ödemedir. Mahkemeler çocuğun ihtiyaçları, tarafların gelir ve malvarlığı ile yaşam standartlarını dikkate alarak miktarı belirler.",
      "Yoksulluk nafakası ise boşanma sonrasında ekonomik yönden güçsüz kalan eş lehine talep edilebilir. Süre ve miktar somut olaya göre değerlendirilir; kusur oranı da bazı durumlarda etkili olabilir.",
      "Nafaka miktarına itiraz, artış veya indirim talepleri belirli koşullarda gündeme gelebilir. Bu süreçlerde hukuki danışmanlık alarak haklarınızı ve yükümlülüklerinizi netleştirmeniz önem taşır.",
    ],
    tags: ["nafaka", "iştirak nafakası", "yoksulluk nafakası", "aile hukuku", "velayet"],
  },
  {
    slug: "isten-cikarilan-iscinin-haklari",
    title: "İşten Çıkarılan İşçinin Hakları Nelerdir?",
    date: "20 Şubat 2026",
    category: "İş Hukuku",
    summary:
      "İş sözleşmesi feshedilen işçinin kıdem, ihbar tazminatı, alacaklar ve işe iade gibi hakları hakkında özet bilgi.",
    content: [
      "İşveren tarafından fesih halinde işçinin hakları, fesih nedenine ve süresine göre değişir. Haklı nedenle fesih yoksa kıdem tazminatı, ihbar tazminatı, kullanılmayan yıllık izin ücreti ve varsa diğer alacaklar talep edilebilir.",
      "Belirli sayıdaki işçi çalıştıran işyerlerinde feshe itiraz için önce arabulucuya başvuru yapılması gerekebilir. Süreler kaçırılmadan hareket edilmesi, işe iade ve alacak davaları açısından kritiktir.",
      "Fazla mesai, ulusal bayram ve genel tatil ücretleri gibi alacaklar da ayrıca değerlendirilir. İş hukuku alanında avukatlık hizmeti ve danışmanlık ile haklarınızı netleştirebilirsiniz.",
    ],
    tags: ["iş hukuku", "işten çıkarılma", "kıdem tazminatı", "ihbar tazminatı", "işe iade"],
  },
  {
    slug: "miras-paylasimi-nasil-yapilir",
    title: "Miras Paylaşımı Nasıl Yapılır?",
    date: "14 Şubat 2026",
    category: "Miras Hukuku",
    summary:
      "Mirasçılık belgesi, tereke tespiti ve miras paylaşımı süreçlerinin temel adımları hakkında bilgi.",
    content: [
      "Miras bırakanın vefatından sonra yasal mirasçılar mirasçılık belgesi alarak yasal haklarını belgeler. Bu belge noter veya sulh hukuk mahkemesinden temin edilebilir.",
      "Terekenin tespiti, borçların düşülmesi ve mirasçıların pay oranları Medeni Kanun hükümlerine göre belirlenir. Anlaşmalı paylaşım mümkün olduğu gibi, anlaşmazlık halinde ortaklığın giderilmesi davası açılabilir.",
      "Saklı paylı mirasçılar tenkis davası açabilir; muris muvazaası iddiaları da miras paylaşımı sürecinde gündeme gelebilir. Miras hukuku konusunda hukuki danışmanlık almak sürecin sağlıklı yürütülmesine katkı sağlar.",
    ],
    tags: ["miras paylaşımı", "mirasçılık belgesi", "tereke", "tenkis", "miras hukuku"],
  },
  {
    slug: "ceza-sorusturmasinda-ilk-asamada-ne-yapilmali",
    title: "Ceza Soruşturmasında İlk Aşamada Ne Yapılmalı?",
    date: "8 Şubat 2026",
    category: "Ceza Hukuku",
    summary:
      "Soruşturma evresinde şüpheli veya mağdur sıfatıyla yapılacak başvurular ve avukat desteğinin önemi.",
    content: [
      "Ceza soruşturmasında gözaltı, ifade alma veya adli kontrol gibi tedbirler söz konusu olabilir. Bu aşamada susma hakkı, avukat bulundurma hakkı ve ifade vermeden önce hukuki destek almak son derece önemlidir.",
      "Şüpheli veya sanık sıfatıyla savunma stratejisi, delillerin değerlendirilmesi ve usule ilişkin hakların kullanılması titizlikle planlanmalıdır. Mağdur tarafında ise şikâyet, suç duyurusu ve müdahil olma süreçleri hukuki danışmanlık ile yürütülebilir.",
      "Soruşturma aşamasında yapılan hatalar kovuşturma ve sonuç üzerinde etkili olabileceğinden, ilk andan itibaren ceza hukuku alanında avukatlık hizmeti almak haklarınızın korunması açısından faydalıdır.",
    ],
    tags: ["ceza hukuku", "soruşturma", "gözaltı", "savunma", "avukat"],
  },
  {
    slug: "kira-uyusmazliklarinda-hukuki-yol",
    title: "Kira Uyuşmazlıklarında Hukuki Yol Nedir?",
    date: "1 Şubat 2026",
    category: "Gayrimenkul Hukuku",
    summary:
      "Kira sözleşmesi, tahliye, kira tespit davası ve kira alacakları konusunda başvurulabilecek hukuki yollar.",
    content: [
      "Kira uyuşmazlıklarında tarafların konumu (kiracı veya kiraya veren), sözleşme türü ve uyuşmazlığın niteliği hangi yollara başvurulacağını belirler. Tahliye davası, kira tespit davası veya kira alacağı takibi gündeme gelebilir.",
      "6098 sayılı Türk Borçlar Kanunu ve ilgili mevzuat kira ilişkisinin kurulması, süresi ve sona ermesi bakımından özel hükümler içerir. Sürelere ve bildirim şartlarına uyulması önem taşır.",
      "Gayrimenkul hukuku kapsamında kira uyuşmazlıklarında hukuki danışmanlık ve dava takibi için avukatlık hizmeti alarak sürecin doğru yönetilmesini sağlayabilirsiniz.",
    ],
    tags: ["kira", "tahliye", "gayrimenkul hukuku", "kira tespit", "tahliye davası"],
  },
  {
    slug: "velayet-davasi-nasil-acilir",
    title: "Velayet Davası Nasıl Açılır?",
    date: "10 Mart 2026",
    category: "Aile Hukuku",
    summary:
      "Velayet taleplerinde mahkemelerin gözettiği ölçütler ve sürecin nasıl işlediğine ilişkin genel bilgi.",
    content: [
      "Velayete ilişkin uyuşmazlıklarda mahkemeler, çocuğun üstün yararını her şeyin önünde tutar. Ebeveynlerin ekonomik durumu, yaşam koşulları, çocukla kurulan ilişki ve günlük bakım kapasitesi bu değerlendirmenin temel unsurlarıdır.",
      "Velayet davası boşanma davasıyla birlikte ya da ayrı olarak açılabilir. Daha önce verilmiş bir velayet kararının değiştirilmesi de mümkündür; bunun için koşulların esaslı biçimde değişmiş olması aranır.",
      "Sosyal inceleme raporları, tanık beyanları ve çocuğun yaşına göre kendi görüşü de süreci etkileyebilir. Bu nedenle taleplerin başından itibaren doğru hazırlanması büyük önem taşır.",
      "Velayet süreçleri hem hukuki hem duygusal açıdan yoğun olabilir. Sürecin sağlıklı yönetilebilmesi için hukuki danışmanlık alınması önerilir.",
    ],
    tags: ["velayet", "aile hukuku", "boşanma", "çocuk velayeti"],
  },
  {
    slug: "trafik-kazasinda-tazminat-hakki",
    title: "Trafik Kazasında Tazminat Hakkı",
    date: "3 Mart 2026",
    category: "Genel Hukuk",
    summary:
      "Trafik kazası sonrasında maddi ve manevi tazminat taleplerinde dikkat edilmesi gereken temel noktalar.",
    content: [
      "Trafik kazasından kaynaklanan tazminat talepleri; kusur oranları, sigorta kapsamı ve zararın niteliğine göre farklı hukuki yollarla takip edilebilir. Zorunlu trafik sigortası (ZMMS) ve ihtiyari kasko poliçelerinin kapsamı, talep sürecini doğrudan etkiler.",
      "Maddi tazminat; araç hasarı, tedavi giderleri, iş göremezlik ve kazanç kaybını kapsayabilir. Manevi tazminat ise olayın yarattığı elem ve üzüntü gözetilerek mahkemelerce takdir edilir.",
      "Tazminat taleplerinde zamanaşımı sürelerine dikkat edilmesi gerekir. Kaza tespit tutanağı, sağlık raporları ve sigorta poliçesi gibi belgelerin eksiksiz muhafaza edilmesi sürecin sağlıklı yürütülmesi açısından önemlidir.",
      "Trafik kazası sonrasında hakların doğru değerlendirilebilmesi için hukuki danışmanlık alınması önerilir.",
    ],
    tags: ["trafik kazası", "tazminat", "sigorta", "maddi manevi tazminat"],
  },
  {
    slug: "bosanmada-mal-paylasimi",
    title: "Boşanmada Mal Paylaşımı Nasıl Olur?",
    date: "18 Şubat 2026",
    category: "Aile Hukuku",
    summary:
      "Boşanma sürecinde edinilmiş mallara katılma rejimi ve mal paylaşımının nasıl gerçekleştiğine dair genel bilgi.",
    content: [
      "Türk Medeni Kanunu'nda yasal mal rejimi olarak edinilmiş mallara katılma rejimi benimsenmiştir. Bu rejim kapsamında evlilik süresince edinilen mallar, kural olarak eşler arasında eşit biçimde paylaşılır.",
      "Kişisel mallar bu paylaşımın dışında tutulur. Miras yoluyla veya evlilik öncesinde edinilen mallar ile kişisel kullanıma özgü eşyalar kişisel mal sayılır. Hangi malın hangi kategoriye girdiği somut koşullara göre değerlendirilir.",
      "Taraflar, evlilik öncesinde veya evlilik süresince mal rejimi sözleşmesi yaparak farklı bir rejim seçebilir. Bu sözleşmelerin geçerliliği ve kapsamı hukuki açıdan titizlikle incelenmelidir.",
      "Mal paylaşımı uyuşmazlıkları çoğunlukla teknik ve belgeye dayalı bir süreç gerektirir. Hak kaybı yaşanmaması için hukuki danışmanlık alınması önerilir.",
    ],
    tags: ["mal paylaşımı", "boşanma", "edinilmiş mal", "aile hukuku"],
  },
  {
    slug: "is-kazasinda-iscinin-haklari",
    title: "İş Kazasında İşçinin Hakları Nelerdir?",
    date: "25 Şubat 2026",
    category: "İş Hukuku",
    summary:
      "İş kazası geçiren işçinin SGK, tazminat ve dava hakları hakkında genel bilgi.",
    content: [
      "İş kazası; işyerinde, işin yürütümü sırasında veya işveren tarafından görevlendirilen bir faaliyette meydana gelen ve işçinin bedensel ya da ruhsal zarara uğramasına yol açan olaydır. Kazanın iş kazası sayılabilmesi için yasal koşulların sağlanması ve süresinde SGK'ya bildirilmesi gerekir.",
      "İş kazası geçiren işçi; geçici iş göremezlik ödeneği, sürekli iş göremezlik geliri ve destekten yoksun kalma tazminatı gibi haklardan yararlanabilir. İşverenin kusuru oranında maddi ve manevi tazminat talep edilmesi de mümkündür.",
      "İşverenin iş güvenliği tedbirlerini alıp almadığı, kazanın oluşumundaki kusur dağılımı ve SGK'nın yaptığı tespit, tazminat miktarını belirleyen başlıca unsurlardır.",
      "İş kazası süreçleri hem idari hem yargısal boyut içerdiğinden süreler ve başvuru yolları açısından hukuki danışmanlık alınması önerilir.",
    ],
    tags: ["iş kazası", "işçi hakları", "SGK", "tazminat", "iş hukuku"],
  },
  {
    slug: "miras-reddi-nasil-yapilir",
    title: "Miras Reddi Nasıl Yapılır?",
    date: "21 Şubat 2026",
    category: "Miras Hukuku",
    summary:
      "Mirasın reddinde yasal süre, başvuru yolu ve borçlu terekelerde dikkat edilmesi gereken hususlar.",
    content: [
      "Miras reddi, yasal mirasçının miras bırakanın ölümünü öğrenmesinden itibaren üç aylık süre içinde sulh hukuk mahkemesine yazılı veya sözlü başvurusuyla yapılır. Bu sürenin kaçırılması halinde miras kayıtsız şartsız kabul edilmiş sayılır.",
      "Terekenin borca batık olduğunun açıkça belli olduğu durumlarda mirasçılar mirası reddedebilir. Borca batıklık şüphesi varsa mahkemeden terekenin tespiti talep edilmesi, karar vermeden önce değerlendirilebilir.",
      "Mirasın reddedilmesi halinde miras, diğer yasal mirasçılara geçer. Tüm mirasçıların mirası reddetmesi durumunda tereke, mahkeme tarafından iflas hükümlerine göre tasfiye edilir.",
      "Miras reddi, sonuçları itibariyle kalıcı bir karar olduğundan tereke hakkında yeterli bilgi edinildikten sonra ve gerektiğinde hukuki danışmanlık alınarak değerlendirilmesi önerilir.",
    ],
    tags: ["miras reddi", "tereke", "miras hukuku", "borçlu tereke"],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "İlk danışma ücretli mi?",
    answer:
      "İlk görüşmenin kapsamı, dosyanın niteliğine ve talep edilen inceleme düzeyine göre değişebilir. Net bilgi verilebilmesi için randevu öncesinde konu başlığı ve beklenen değerlendirme çerçevesi birlikte belirlenir.",
  },
  {
    question: "Boşanma davası ne kadar sürer?",
    answer:
      "Anlaşmalı ve çekişmeli boşanma davalarında süreler farklıdır. Mahkemenin iş yoğunluğu, delil durumu ve taleplerin kapsamı süreyi etkilediğinden her dosya özelinde gerçekçi bir zaman planı yapılması gerekir.",
  },
  {
    question: "Nafaka nasıl belirlenir?",
    answer:
      "Nafaka miktarı; tarafların ekonomik durumu, çocuğun ihtiyaçları, yaşam koşulları ve dosyadaki deliller birlikte değerlendirilerek belirlenir. Talebin doğru hazırlanması, miktarın sağlıklı değerlendirilmesi açısından önem taşır.",
  },
  {
    question: "Ceza soruşturmasında ilk adım ne olmalı?",
    answer:
      "İfade verilmeden veya resmi işlem yapılmadan önce dosyanın niteliğine uygun hukuki destek alınması önemlidir. Özellikle gözaltı, ifade ve koruma tedbirleri söz konusuysa ilk aşama sürecin tamamını etkileyebilir.",
  },
  {
    question: "İşten çıkarılan çalışan ne yapmalı?",
    answer:
      "Fesih bildirimi, çalışma belgeleri ve ücret kayıtları gecikmeden incelenmelidir. Arabuluculuk ve dava süreleri hak kaybına yol açabileceği için mümkün olan en kısa sürede hukuki değerlendirme alınması tavsiye edilir.",
  },
  {
    question: "Miras paylaşımı davası nasıl açılır?",
    answer:
      "Öncelikle mirasçılık durumu ve terekeye ilişkin belgeler değerlendirilir. Uyuşmazlığın niteliğine göre ortaklığın giderilmesi, tenkis veya muris muvazaası gibi uygun dava yolu belirlenerek süreç başlatılır.",
  },
  {
    question: "Tapu / ortaklığın giderilmesi davası ne kadar sürer?",
    answer:
      "Taşınmazın niteliği, taraf sayısı, keşif ve bilirkişi ihtiyacı gibi unsurlar davanın süresini doğrudan etkiler. Süre konusunda sağlıklı öngörü için tapu kayıtları ve uyuşmazlık konusu birlikte incelenmelidir.",
  },
  {
    question: "Avukatla görüşmeden önce hangi belgeler hazırlanmalı?",
    answer:
      "Kimlik bilgileriyle birlikte uyuşmazlıkla ilgili sözleşme, dava evrakı, tapu kaydı, bordro, ihtarname, mesaj veya e-posta çıktıları gibi temel belgelerin hazırlanması ilk değerlendirmeyi kolaylaştırır. Belgeler eksik olsa da olayın kronolojisi önemlidir.",
  },
  {
    question: "Dava açmadan önce arabuluculuk zorunlu olabilir mi?",
    answer:
      "Evet. Özellikle iş hukuku ve ticari uyuşmazlıklarda dava şartı arabuluculuk gündeme gelebilir. Uyuşmazlığın niteliğine göre dava öncesi başvuru yollarının önceden kontrol edilmesi gerekir.",
  },
  {
    question: "Paylaşılan bilgiler gizli tutulur mu?",
    answer:
      "Evet. Paylaşılan bilgi ve belgeler avukatlık mesleğinin gizlilik ve özen yükümlülüğü çerçevesinde değerlendirilir. İnternet sitesi üzerinden iletilen bilgiler de yalnızca iletişim ve ön değerlendirme amacıyla kullanılır.",
  },
];

export const COURT_DECISIONS: CourtDecision[] = [
  {
    slug: "anlasmali-bosanmada-anlasma-bozulursa-dava-cekismeli-bosanma-olarak-devam-eder",
    title: "Anlaşmalı Boşanmada Anlaşma Bozulursa Dava Çekişmeli Boşanma Olarak Devam Eder",
    date: "19 Şubat 2026",
    court: "Yargıtay 2. Hukuk Dairesi E. 2014/16819 K. 2015/3251 T. 2.3.2015",
    category: "Yargıtay",
    summary:
      "Anlaşmalı boşanma yönünde oluşan karar kesinleşinceye kadar, tarafların anlaşmadan dönmesi halinde davanın çekişmeli boşanma olarak sürdürülmesi gerekir.",
    excerpt:
      "Anlaşmalı boşanma yönünde oluşan karar kesinleşinceye kadar eşlerin bu yöndeki iradelerini geri almaları hâlinde, boşanmanın mali sonuçları ve çocukların durumu bakımından uyuşmazlık çekişmeli esaslara göre değerlendirilir.",
    content: [
      "İncelenen Yargıtay kararında temel uyuşmazlık, tarafların ilk derece mahkemesi önünde anlaşmalı boşanma iradesi ortaya koymalarına rağmen, hüküm kesinleşmeden önce bu ortak iradenin devam edip etmediği noktasında toplanmaktadır. Türk Medeni Kanunu'nun 166/3. maddesi uyarınca anlaşmalı boşanma kararı verilebilmesi için yalnızca dava açılmış olması yeterli değildir; tarafların duruşmadaki beyanlarının serbest iradeye dayanması, boşanmanın mali sonuçları ile çocukların durumuna ilişkin düzenlemeyi mahkemenin uygun bulması ve en önemlisi bu iradenin karar aşamasında da korunması gerekir. Yargıtay, anlaşmalı boşanmanın şekli bir protokol mekanizması olmadığını, devam eden ve denetlenebilir bir irade birliği gerektirdiğini özellikle vurgulamaktadır.",
      "Kararda belirtildiği üzere, boşanma hükmü kesinleşinceye kadar taraflardan herhangi biri anlaşmadan dönebilir. Bu ihtimalde mahkemenin, önceki anlaşma metnini esas alarak kararını sürdürmesi usul ve yasaya uygun kabul edilmez. Çünkü anlaşmalı boşanmanın özü, tarafların aynı anda ve aynı kapsamda boşanmayı kabul etmiş olmalarıdır. Taraflardan birinin özellikle nafaka, tazminat, velayet veya kişisel ilişki gibi fer'i sonuçlar bakımından iradesini geri çekmesi hâlinde artık çekişmesiz yargılama zemini ortadan kalkar. Böyle bir durumda davanın çekişmeli boşanma hükümlerine göre görülmesi, delillerin toplanması ve kusur değerlendirmesinin genel usul çerçevesinde yapılması gerekir.",
      "Bu içtihat uygulamada özellikle protokol hazırlanması ve duruşma stratejisi bakımından önem taşımaktadır. Zira tarafların kısa süreli uzlaşma iradesi ile hazırlanan bir protokol, hüküm kesinleşmeden önce bozulabilir. Mahkemelerin burada yapması gereken, taraf beyanlarının devamlılığını ve gerçekliğini gözetmek; anlaşmanın sadece imzalanmış olmasına değil, hüküm kurulurken halen geçerli bulunmasına dikkat etmektir. Aksi bir yaklaşım, irade serbestisini zedeleyeceği gibi, tarafları istemedikleri mali ve şahsi sonuçlarla bağlı kılabilir. Yargıtay'ın yaklaşımı, aile hukukunda kişiye sıkı sıkıya bağlı hakların niteliğine uygun bir koruma sağlamaktadır.",
      "Sonuç olarak karar, anlaşmalı boşanmanın statik değil dinamik bir irade uyuşması olduğunu açık biçimde ortaya koymaktadır. Uygulamada avukatların, müvekkillerini hüküm kesinleşinceye kadar anlaşmadan dönme ihtimali ve bunun hukuki etkileri konusunda açık şekilde bilgilendirmesi gerekir. Özellikle çocukların velayeti, iştirak nafakası, maddi ve manevi tazminat kalemleri ile mal rejimine ilişkin talepler bakımından sonradan ortaya çıkabilecek çekişmeler, dosyanın niteliğini tamamen değiştirebilir. Bu nedenle karar, hem mahkemelere hem de uygulayıcılara, anlaşmalı boşanma protokolünü salt evrak olarak değil, sürdürülen ortak iradenin yargısal yansıması olarak ele alma yükümlülüğü yüklemektedir."
    ],
  },
  {
    slug: "bosanma-davasinda-yeniden-birlikte-yasamaya-devam-etmenin-affetme-sayilmasi",
    title: "Boşanma Davasında Yeniden Birlikte Yaşamaya Devam Etmenin Affetme Sayılması",
    date: "1 Eylül 2025",
    court: "Yargıtay 2. Hukuk Dairesi 2016/12660 E., 2016/13926 K.",
    category: "Yargıtay",
    summary:
      "Eşlerin dava konusu olaylardan sonra birlikte yaşamaya devam etmesi, bazı hâllerde önceki olayların affedildiği veya hoşgörüyle karşılandığı şeklinde değerlendirilebilir.",
    excerpt:
      "Yerel mahkemenin erkeği ağır kusurlu bulup boşanmaya ve kadın lehine maddi-manevi tazminata hükmettiği karar incelenmiş; tarafların boşanma sebeplerinde eşit kusurlu olup olmadıkları yeniden değerlendirilmiştir.",
    content: [
      "Bu Yargıtay kararının merkezinde, eşler arasında daha önce yaşandığı ileri sürülen boşanma sebeplerinin, tarafların sonradan birlikte yaşamaya devam etmeleri nedeniyle affedilmiş veya en azından hoşgörü ile karşılanmış sayılıp sayılamayacağı sorunu yer almaktadır. Boşanma hukukunda kusur değerlendirmesi yapılırken yalnızca olayların varlığı değil, bu olayların taraflar arasındaki ilişki üzerindeki hukuki etkisinin sürüp sürmediği de önem taşır. Yargıtay'ın yerleşik yaklaşımına göre, eşlerden birinin bildiği bir davranışa rağmen evlilik birliğini fiilen sürdürmesi, önceki olayların boşanma sebebi olarak ileri sürülmesini bazı durumlarda zayıflatabilir veya tamamen ortadan kaldırabilir.",
      "Kararda dikkat çekilen esas nokta, affetme olgusunun soyut bir varsayımdan değil, somut davranışlardan çıkarılması gerektiğidir. Tarafların aynı konutta yaşamaya devam etmeleri, birlikte sosyal hayat sürdürmeleri, evlilik ilişkisinin olağan akışını yeniden kurmaları veya olaylardan sonra uzun süre sessiz kalmaları, mahkemece affetme yahut hoşgörü göstergesi olarak değerlendirilebilir. Ne var ki bu değerlendirme otomatik değildir; birlikte yaşamanın zorunluluktan mı, ekonomik bağımlılıktan mı yoksa gerçekten evlilik birliğini sürdürme iradesinden mi kaynaklandığı ayrıca incelenmelidir. Yargıtay bu nedenle yerel mahkemelerin kusur tespitini yaparken zaman çizelgesini ve taraf davranışlarının devamlılığını ayrıntılı ele almasını aramaktadır.",
      "Kararın uygulamadaki en önemli yansıması, özellikle çekişmeli boşanma davalarında delil stratejisini doğrudan etkilemesidir. Taraflardan biri geçmişte yaşanan olaylara dayanıyorsa, bu olaylardan sonra birlikteliğin nasıl sürdürüldüğünü de açıklamak zorundadır. Aksi hâlde karşı taraf, affetme savunması ile kusur ağırlığını azaltabilir veya tazminat taleplerine karşı etkili bir itiraz geliştirebilir. Özellikle maddi-manevi tazminat ile yoksulluk nafakası taleplerinde kusur oranı önem taşıdığından, affetme değerlendirmesi davanın ekonomik sonuçlarını da belirleyebilmektedir. Bu yönüyle karar, olayların kronolojik bağlam içinde okunmasının zorunlu olduğunu göstermektedir.",
      "Son kertede içtihat, evlilik birliği içindeki davranışların sadece meydana geldikleri anda değil, sonrasında taraflarca nasıl karşılandığı ölçüsünde hukuki değer kazanacağını ortaya koymaktadır. Uygulayıcılar bakımından bu karar, tanık beyanlarının, mesaj kayıtlarının, ayrı yaşama tarihinin ve ortak yaşamın yeniden kurulup kurulmadığına ilişkin tüm verilerin birlikte değerlendirilmesi gerektiğini hatırlatır. Mahkemelerin de affetme kurumunu dar veya geniş yorumlarken somut olaydaki psikolojik, ekonomik ve sosyal gerçekliği gözden kaçırmaması gerekir. Böylece boşanma yargılamasında hakkaniyete daha yakın, daha isabetli kusur tespiti yapılması mümkün olur."
    ],
  },
  {
    slug: "isci-alacaklarinda-arabuluculuk-dava-sarti",
    title: "İşçi Alacakları Davalarında Arabuluculuk Dava Şartıdır",
    date: "14 Ocak 2026",
    court: "Adana Bölge Adliye Mahkemesi 9. Hukuk Dairesi",
    category: "Bölge Adliye Mahkemesi",
    summary:
      "İşe iade ve işçilik alacağı taleplerinde, kanunda öngörülen uyuşmazlıklarda arabulucuya başvurulmadan açılan davalar usulden reddedilebilir.",
    excerpt:
      "Başvuru şartının yerine getirilmemesi, esas incelemesine geçilmeden usulden ret sonucunu doğurabilir. Bu nedenle fesih sonrası başvuru sürecinin dikkatle yürütülmesi gerekir.",
    content: [
      "Bölge Adliye Mahkemesi kararında, işçi alacakları ve işe iade talepleri bakımından arabuluculuğun dava şartı niteliği taşımasının usul hukuku bakımından doğurduğu sonuçlar ayrıntılı biçimde ele alınmaktadır. 7036 sayılı İş Mahkemeleri Kanunu ile bazı iş uyuşmazlıklarında dava açmadan önce arabulucuya başvurma zorunluluğu getirilmiştir. Bu zorunluluk, sadece tamamlanması gereken şekli bir formalite değil; dava açılabilirliğinin ön koşulu niteliğindedir. Dolayısıyla arabuluculuk başvurusu yapılmadan doğrudan mahkemeye gidilmesi hâlinde, mahkemenin uyuşmazlığın esasına girmeden usulden ret kararı vermesi gündeme gelir.",
      "Karar, dava şartının kamu düzenine ilişkin niteliğine de işaret etmektedir. Mahkeme, taraflar ileri sürmese dahi arabuluculuğa başvurulup başvurulmadığını kendiliğinden denetlemek zorundadır. Başvuru yapılmış olsa bile son tutanağın dosyaya sunulması, uyuşmazlık konusunun arabuluculuğa elverişli kalemlerle uyumlu olması ve başvurunun yasal süreler gözetilerek gerçekleştirilmesi önem taşır. Özellikle işe iade davalarında fesih bildiriminin tebliğinden itibaren bir ay içinde arabulucuya başvuru yapılması gerektiği düşünüldüğünde, kısa sürelerin kaçırılması ciddi hak kaybına yol açmaktadır.",
      "Uygulamada işçiler bakımından en sık hata, fesih sonrasında doğrudan dava açılabileceği yönündeki yanlış kanaattir. Oysa arabuluculuk süreci tamamlanmadan açılan dava, haklılık durumu ne kadar güçlü olursa olsun usulden reddedilebilir ve bu da zamanaşımı, hak düşürücü süre ve yargılama giderleri bakımından yeni riskler doğurur. İşverenler açısından ise bu mekanizma, dava öncesinde uyuşmazlığın sulh yoluyla çözülebilmesine imkân tanırken aynı zamanda usule aykırı açılan davalara karşı etkili bir savunma zemini sunar. Karar, tarafların usul yükümlülüklerini maddi hak taleplerinden bağımsız düşünmemesi gerektiğini açıkça göstermektedir.",
      "Sonuç itibarıyla bu içtihat, iş uyuşmazlıklarında usul kurallarının sonuca etkisini güçlü biçimde hatırlatmaktadır. Arabuluculuk dava şartı, yargılamayı gereksiz yere uzatan bir engel değil; uyuşmazlığın daha hızlı çözümünü hedefleyen zorunlu bir aşamadır. Ancak bu aşamanın eksik veya yanlış işletilmesi, esas incelemesine geçilememesi sonucunu doğurur. Bu nedenle hem işçi hem işveren vekillerinin, fesih tarihi, talep kalemleri, son tutanak düzeni ve başvuru süreleri bakımından dosyayı en baştan dikkatle planlaması gerekir. Karar, iş hukuku pratiğinde usul kurallarının stratejik önemini ortaya koyan öğretici bir örnektir."
    ],
  },
  {
    slug: "idari-islemde-gerekce-zorunlulugu",
    title: "İdari İşlemlerde Gerekçe Gösterilmesi Hukuki Güvencenin Parçasıdır",
    date: "22 Aralık 2025",
    court: "Danıştay 10. Dairesi",
    category: "Danıştay",
    summary:
      "İdarenin tesis ettiği bireysel işlemlerde yeterli ve denetlenebilir gerekçe bulunması, hukuk devleti ilkesinin ve savunma hakkının bir gereğidir.",
    excerpt:
      "Gerekçesiz veya soyut gerekçeli işlemler, ilgilinin hangi nedenle işlem tesis edildiğini anlamasını engellediğinden yargısal denetime de elverişli görülmeyebilir.",
    content: [
      "Danıştay'ın bu kararında, idarenin bireysel işlem tesis ederken gerekçe gösterme yükümlülüğünün yalnızca biçimsel bir zorunluluk olmadığı, hukuk devleti ilkesinin özüne ilişkin anayasal bir güvence olduğu vurgulanmaktadır. İdari işlemin gerekçesi, ilgilinin hangi maddi vakıalara ve hangi hukuki sebeplere dayanılarak işlem tesis edildiğini anlayabilmesini sağlar. Bu sayede kişi hem idare karşısında savunma imkanını etkili kullanabilir hem de gerekiyorsa yargı yoluna başvurarak işlemin hukuka uygunluğunu denetletebilir. Gerekçe yoksa ya da soyut ifadelerle sınırlıysa, işlem keyfilik şüphesi doğurur ve yargısal inceleme bakımından da ciddi eksiklik yaratır.",
      "Kararda özellikle, idarenin takdir yetkisi bulunan alanlarda gerekçe zorunluluğunun daha da önemli hale geldiği kabul edilmektedir. Takdir yetkisi, sebepsiz veya sınırsız karar verme serbestisi anlamına gelmez. İdare, kamu yararı ve hizmet gerekleri doğrultusunda hangi nedenle belli bir sonuca ulaştığını göstermek zorundadır. Bu zorunluluk, işlemde dayanılan bilgi ve belgelerin, değerlendirme ölçütlerinin ve somut olayla kurulan bağın anlaşılabilir biçimde ortaya konulmasını gerektirir. Aksi halde işlem, görünürde hukuki bir çerçeveye dayanıyor olsa bile maddi ve hukuki denetimden kaçırılmış olur.",
      "Uygulamada sıkça karşılaşılan sorun, karar metinlerinde kanun maddelerinin genel olarak sıralanması fakat somut kişi bakımından neden o sonuca ulaşıldığının açıklanmamasıdır. Danıştay'ın yaklaşımı, standart veya kalıp gerekçelerin yeterli kabul edilemeyeceğini ortaya koymaktadır. Özellikle disiplin işlemleri, ruhsat iptalleri, kamu görevine ilişkin tasarruflar ve idari yaptırımlarda, ilgilinin durumuna özgü değerlendirme yapılmaksızın tesis edilen işlemler, savunma hakkını zedeleyebilir. Bu içtihat, idarenin işlem tesis ederken somutlaştırılmış gerekçe kurma yükümlülüğünü güçlendirmekte ve idari şeffaflığa katkı sunmaktadır.",
      "Netice itibarıyla karar, gerekçenin sadece karar metnini tamamlayan yardımcı bir unsur değil, işlemin hukuka uygunluk denetiminin temel bileşeni olduğunu göstermektedir. İdare hukukunda meşruiyet, yalnızca yetki ve şekil unsurlarının varlığıyla değil; işlem sebebinin açıklanabilir, denetlenebilir ve ilgili kişi tarafından anlaşılabilir olmasıyla da sağlanır. Bu nedenle idari işlem tesis eden makamların, kararlarını somut olgu-hukuki neden ilişkisi içinde temellendirmesi zorunludur. Karar, bireylerin idare karşısında korunması ve yargısal denetimin etkinliği bakımından son derece yol gösterici niteliktedir."
    ],
  },
  {
    slug: "ifade-ozgurlugunde-olcululuk-incelemesi",
    title: "İfade Özgürlüğüne Müdahalede Ölçülülük İncelemesi Zorunludur",
    date: "9 Kasım 2025",
    court: "Anayasa Mahkemesi Bireysel Başvuru Kararı",
    category: "Anayasa Mahkemesi",
    summary:
      "Temel haklara müdahale niteliğindeki işlemlerde, müdahalenin demokratik toplum düzeninin gereklerine uygun ve ölçülü olup olmadığı ayrıntılı biçimde incelenmelidir.",
    excerpt:
      "Kamu gücü kullanan makamların ifade özgürlüğüne yönelik sınırlamalarda ilgili ve yeterli gerekçe ortaya koymaları, anayasal güvence sisteminin zorunlu unsurudur.",
    content: [
      "Anayasa Mahkemesi'nin bireysel başvuru kapsamında verdiği bu karar, ifade özgürlüğüne yapılan müdahalelerde ölçülülük incelemesinin zorunlu olduğunu ve müdahalenin yalnızca yasal bir dayanağa sahip olmasının yeterli kabul edilemeyeceğini ortaya koymaktadır. İfade özgürlüğü, demokratik toplum düzeninin temel taşı niteliğindedir ve sadece toplumca kabul gören düşünceleri değil; sarsıcı, rahatsız edici veya eleştirel nitelikteki açıklamaları da korur. Bu nedenle kamu makamlarının sınırlama getirirken çok katmanlı bir anayasal test uygulaması gerekir: müdahalenin kanuni dayanağı bulunmalı, meşru amaç gütmeli, demokratik toplumda zorunlu olmalı ve kullanılan araç ile ulaşılmak istenen amaç arasında makul denge kurulmalıdır.",
      "Kararda özellikle ilgili ve yeterli gerekçe zorunluluğu öne çıkmaktadır. Kamu gücünü kullanan makamların, hangi ifadenin neden sakıncalı görüldüğünü, bu ifadenin somut olarak hangi kamu yararını ihlal ettiğini ve daha hafif bir müdahale ile aynı sonucun elde edilip edilemeyeceğini açıklaması gerekir. Aksi hâlde verilen idari veya yargısal kararlar, soyut güvenlik, kamu düzeni veya kamu otoritesinin saygınlığı gibi genel gerekçelere dayanmış olur ki bu tür açıklamalar anayasal denetim bakımından yeterli sayılmaz. Anayasa Mahkemesi, temel haklara müdahale eden kararların kalıp ifadelerle değil, olayın bağlamına uygun somut değerlendirmelerle gerekçelendirilmesini aramaktadır.",
      "Ölçülülük incelemesinin bir diğer boyutu, yaptırımın ağırlığı ile korunmak istenen hukuki değer arasındaki dengedir. Bir açıklama nedeniyle verilen disiplin cezası, erişim engeli, para cezası ya da mahkumiyet hükmü, ifade özgürlüğü üzerinde caydırıcı etki doğurabilir. Bu sebeple mahkemelerin ve idari makamların, müdahalenin zorunlu bir toplumsal ihtiyaca karşılık gelip gelmediğini, daha hafif araçların neden yetersiz kaldığını ve yaptırımın başvurucu üzerinde aşırı külfet yaratıp yaratmadığını ortaya koyması gerekir. Karar, özellikle dijital mecralarda yapılan paylaşımlar ve kamusal tartışmalar bakımından, ifade özgürlüğü lehine hassas bir denge kurulmasının önemini vurgulamaktadır.",
      "Bu içtihadın uygulamadaki değeri, temel hak incelemesinin otomatik veya formel bir denetimden ibaret olmadığını açık biçimde göstermesidir. Anayasal koruma sistemi, derece mahkemelerinin ve idarenin gerekçeli, somut, denetlenebilir ve hak eksenli değerlendirme yapmasını zorunlu kılar. İfade açıklamasının bağlamı, muhatabı, kamusal tartışmaya katkısı, kullanılan dilin niteliği ve müdahalenin ağırlığı birlikte değerlendirilmeden verilen kararlar, bireysel başvuru denetiminden dönme riski taşır. Dolayısıyla bu karar, hem ifade özgürlüğü alanında çalışan uygulayıcılar hem de kamu otoriteleri için ölçülülük analizinin vazgeçilmezliğini gösteren temel nitelikte bir anayasal rehberdir."
    ],
  },
  {
    slug: "whatsapp-yazismalari-delil-niteligi-tasir",
    title: "WhatsApp Yazışmaları Delil Niteliği Taşır",
    date: "2020",
    court: "Yargıtay 13. Hukuk Dairesi",
    category: "Yargıtay",
    summary:
      "Alacak davalarında WhatsApp ve benzeri elektronik ortamdaki yazışmalar belge ve delil niteliğindedir.",
    excerpt:
      "Elektronik iletişim araçlarıyla yapılan yazışmalar, usulüne uygun şekilde toplandığı takdirde alacak davalarında delil olarak kullanılabilir.",
    content: [
      "Yargıtay 13. Hukuk Dairesi'nin 2017/1014 E., 2020/4488 K. sayılı kararında, alacak davalarında WhatsApp ve benzeri elektronik ortamlarda gerçekleşen yazışmaların belge ve delil niteliği taşıdığı kabul edilmiştir. Elektronik iletişim kanalları günlük hayatta yaygın kullanıldığından, taraflar arasındaki borç-alacak ilişkisini veya anlaşmaları yansıtan bu tür kayıtlar, usulüne uygun şekilde mahkemeye sunulduğunda delil olarak değerlendirilebilir.",
      "Karar, özellikle sözleşme ilişkileri, alacak iddiaları ve iş davalarında elektronik yazışmaların ispat gücünü ortaya koymaktadır. Bu içtihat uygulamada, ilgili yazışmaların hangi koşullarda delil sayılacağı ve nasıl sunulması gerektiği konusunda hukuki danışmanlık alınması faydalı olabilir."
    ],
  },
  {
    slug: "whatsapp-yazismalari-kisisel-veri-niteliginde-olup-delil-olarak-kullanilamaz",
    title: "WhatsApp Yazışmaları Kişisel Veri Niteliğinde Olup Delil Olarak Kullanılamaz",
    date: "2019",
    court: "Yargıtay 9. Hukuk Dairesi",
    category: "Yargıtay",
    summary:
      "WhatsApp konuşmaları gizlilik içeren kişisel veri niteliğinde olduğundan, salt nasıl temin edildiği anlaşılamayan bu yazışmalara dayanılarak iş akdinin feshi haksız olup kıdem ve ihbar tazminatı taleplerinin kabulü yerine reddi hatalıdır.",
    excerpt:
      "Kişisel veri niteliğindeki yazışmaların hukuka uygun biçimde temin edilmediği durumlarda, buna dayalı fesih haksız sayılabilir.",
    content: [
      "Yargıtay 9. Hukuk Dairesi 2018/10718 E., 2019/559 K. sayılı kararında, WhatsApp konuşmalarının gizlilik içeren kişisel veri niteliğinde olduğu vurgulanmıştır. Yazışmaların nasıl temin edildiği açıklığa kavuşturulmadan ve hukuka uygunluk sağlanmadan iş akdinin feshi için dayanak yapılması hâlinde fesih haksız kabul edilmiş; kıdem ve ihbar tazminatı taleplerinin reddi yerine kabulü gerektiği belirtilmiştir.",
      "Bu karar, kişisel verilerin korunması ile iş hukuku uyuşmazlıklarının kesişiminde önemli bir içtihat oluşturmaktadır. İşverenin disiplin veya fesih süreçlerinde elektronik yazışmalara dayanması durumunda, verilerin elde ediliş biçiminin mevzuata uygunluğunun değerlendirilmesi gerekir. Somut olayınızda haklarınızın korunması için hukuki danışmanlık alınması önerilir."
    ],
  },
  {
    slug: "iscinin-yalnizlastirilmasi-ve-gorev-tanimi-disinda-is-verilmesi-manevi-tazminat-gerektirir",
    title: "İşçinin Yalnızlaştırılması ve Görev Tanımı Dışında İş Verilmesi Manevi Tazminat Gerektirir",
    date: "2022",
    court: "Ankara Bölge Adliye Mahkemesi 7. Hukuk Dairesi",
    category: "Bölge Adliye Mahkemesi",
    summary:
      "İşçinin yalnızlaştırılması ve görev tanımı dışında iş verilerek işten ayrılmaya zorlanması manevi tazminat gerektirir.",
    excerpt:
      "İşverenin mobbing niteliğindeki davranışları ve görev tanımı dışında iş verme suretiyle işçiyi ayrılmaya zorlaması manevi tazminat yükümlülüğü doğurur.",
    content: [
      "Ankara Bölge Adliye Mahkemesi 7. Hukuk Dairesi'nin 2022/2005 E., 2022/2166 K. sayılı kararında, işçinin işyerinde yalnızlaştırılması ve görev tanımı dışında iş verilerek işten ayrılmaya zorlanmasının manevi tazminat gerektirdiği kabul edilmiştir. Bu tür davranışlar, işçinin kişilik haklarının ihlali ve mobbing kapsamında değerlendirilebilmektedir.",
      "Karar, işverenin dürüstlük ve eşit davranma borcu çerçevesinde işçiye uygun iş vermesi ve psikolojik taciz oluşturan tutumlardan kaçınması gerektiğini ortaya koymaktadır. Benzer bir durumda haklarınızı değerlendirmek için iş hukuku alanında hukuki danışmanlık almanız önerilir."
    ],
  },
  {
    slug: "defter-ve-belgelerin-baska-mahkemede-bulunmasi-mucbir-sebep-sayilir",
    title: "Defter ve Belgelerin Başka Mahkemede Bulunması Mücbir Sebep Sayılır",
    date: "2015",
    court: "Danıştay 3. Vergi Dava Dairesi",
    category: "Danıştay",
    summary:
      "Defter ve belgelerin başka bir mahkemede bulunması mücbir sebep hali olarak kabul edilmelidir. Bu nedenle cezalı tarhiyatın iptali gerekir.",
    excerpt:
      "Mükellefin elinde olmayan ve başka bir yargı mercisinde bulunan defter ve belgeler nedeniyle cezalı tarhiyat yapılması mücbir sebep kapsamında değerlendirilir.",
    content: [
      "Danıştay 3. Vergi Dava Dairesi'nin 2015/4634 K. sayılı kararında, defter ve belgelerin başka bir mahkemede bulunmasının mücbir sebep hali olarak kabul edilmesi gerektiği belirtilmiştir. Bu nedenle söz konusu koşullarda yapılan cezalı tarhiyatın iptali gerekir.",
      "Karar, vergi uyuşmazlıklarında mükellefin iradesi dışındaki nedenlerle belge ve defterlere ulaşamaması durumunda cezai uygulamanın hakkaniyete uygun olmadığını ortaya koymaktadır. Vergi hukuku süreçlerinde hukuki danışmanlık alınması faydalı olabilir."
    ],
  },
  {
    slug: "sahte-fatura-kullanimi-sebebiyle-ozel-usulsuzluk-cezasi-kesilemez",
    title: "Sahte Fatura Kullanımı Sebebiyle Özel Usulsüzlük Cezası Kesilemez",
    date: "04.04.2022",
    court: "Danıştay 3. Dairesi",
    category: "Danıştay",
    summary:
      "Harcamaların sahte veya muhteviyatı itibarıyla yanıltıcı faturalarla belgelendirilmesi, 213 sayılı Kanun'un 353/1. maddesinde özel usulsüzlük cezası kesilmesi gereken eylemler arasında gösterilmediğinden kesilen özel usulsüzlük cezası maddenin öngörülüş amacına uygun düşmediği gerekçesiyle kaldırılmıştır.",
    excerpt:
      "213 sayılı Kanun'un 353/1. maddesi kapsamında sahte veya yanıltıcı fatura kullanımı özel usulsüzlük cezası gerektiren haller arasında sayılmadığından ceza kaldırılmıştır.",
    content: [
      "Danıştay 3. Dairesi 2021/3892 E., 2022/1507 K. sayılı kararında, harcamaların sahte veya muhteviyatı itibarıyla yanıltıcı faturalarla belgelendirilmesinin 213 sayılı Vergi Usul Kanunu'nun 353/1. maddesinde özel usulsüzlük cezası kesilmesi gereken eylemler arasında sayılmadığı kabul edilmiş; bu nedenle kesilen özel usulsüzlük cezasının maddenin öngörülüş amacına uygun düşmediği gerekçesiyle kaldırılmasına hükmedilmiştir.",
      "İçtihat, vergi ceza hukukunda kanuni düzenlemenin lafzı ve amacı çerçevesinde ceza uygulanması gerektiğini vurgulamaktadır. Vergi uyuşmazlıklarında hukuki danışmanlık alınması önerilir."
    ],
  },
  {
    slug: "vergi-borcundan-dolayi-esin-gayrimenkulune-haciz-uygulanamaz",
    title: "Vergi Borcundan Dolayı Eşin Gayrimenkulüne Haciz Uygulanamaz",
    date: "2003",
    court: "Danıştay 4. Dairesi",
    category: "Danıştay",
    summary:
      "Vergi mükellefi olan davacının vergi borcundan dolayı eşinin adına kayıtlı gayrimenkul üzerine haciz uygulanamaz.",
    excerpt:
      "Mükellefin vergi borcundan dolayı eşine ait taşınmazlara haciz konulması hukuka aykırıdır.",
    content: [
      "Danıştay 4. Dairesi 2003/1733 E., 2003/2369 K. sayılı kararında, vergi mükellefi olan davacının vergi borcundan dolayı eşinin adına kayıtlı gayrimenkul üzerine haciz uygulanamayacağı kabul edilmiştir. Vergi alacağının tahsili için haciz uygulanacak malvarlığı, mükellefin kendisine ait olanlarla sınırlıdır; eşe ait mallar bu kapsamın dışındadır.",
      "Karar, vergi icra hukukunda mükellef ile üçüncü kişilerin malvarlığının ayrımını net biçimde ortaya koymaktadır. Vergi borcu ve haciz uyuşmazlıklarında hukuki danışmanlık alınması faydalı olabilir."
    ],
  },
];

/** Neden Biz / Neden Av. Betül Dilan Kurt? – güven unsurları */
export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    key: "transparent",
    title: "Şeffaf Süreç Yönetimi",
    description:
      "Hukuki süreçlerin her aşamasında ne yapıldığı, hangi adımların atılacağı ve olası sonuçlar açık biçimde paylaşılır. Avukatlık hizmeti alırken belirsizlik yerine net bilgilendirme hedeflenir.",
    icon: LayoutDashboard,
  },
  {
    key: "updates",
    title: "Düzenli Bilgilendirme",
    description:
      "Dosya takibi ve duruşma süreçleri hakkında düzenli geri bildirim verilir. Müvekkilin süreci takip etmesi ve kendini güvende hissetmesi önemsenir.",
    icon: Bell,
  },
  {
    key: "personal",
    title: "Kişiye Özel Hukuki Yaklaşım",
    description:
      "Her dosya kendi koşulları içinde değerlendirilir; benzer davalardan farklılaşan yönler dikkate alınır. Kişiye özel strateji ile hukuki danışmanlık sunulur.",
    icon: UserCheck,
  },
  {
    key: "diligence",
    title: "Titiz Dosya Takibi",
    description:
      "Sürelere uyum, gerekli başvuruların zamanında yapılması ve belgelerin eksiksiz hazırlanması titizlikle takip edilir. Dava takibi ve ön değerlendirme süreçleri düzenli yürütülür.",
    icon: FileCheck,
  },
  {
    key: "confidentiality",
    title: "Güven ve Gizlilik",
    description:
      "Paylaşılan bilgi ve belgeler meslek sırrı ve gizlilik ilkeleri çerçevesinde korunur. Müvekkil ile kurulan ilişkide güven esas alınır.",
    icon: ShieldCheck,
  },
  {
    key: "solution",
    title: "Çözüm Odaklı Danışmanlık",
    description:
      "Uyuşmazlığın çözümü için uygun hukuki yollar değerlendirilir; dava öncesi uzlaşma veya alternatif çözüm seçenekleri de sunulur.",
    icon: Target,
  },
];

/** Müvekkil görüşleri – kimlik ifşa etmeyen, profesyonel yorumlar */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Süreç boyunca düzenli bilgilendirme yapıldı. Her aşamada ne yapılacağı net şekilde anlatıldı.",
    serviceArea: "Aile Hukuku",
  },
  {
    id: "t2",
    quote:
      "İş hukuku konusunda hızlı ve profesyonel destek aldık. Süreçlerin takibi titizlikle yürütüldü.",
    serviceArea: "İş Hukuku",
  },
  {
    id: "t3",
    quote:
      "Boşanma sürecinde titiz ve güven veren bir yaklaşım gördük. Hukuki süreçler anlaşılır biçimde aktarıldı.",
    serviceArea: "Aile Hukuku",
  },
  {
    id: "t4",
    quote:
      "Miras paylaşımı konusunda yol gösterici danışmanlık aldım. Belgelerin hazırlanması ve takibi düzenli yapıldı.",
    serviceArea: "Miras Hukuku",
  },
  {
    id: "t5",
    quote:
      "Ceza hukuku sürecinde her aşamada bilgilendirildim. Savunma stratejisi net ve anlaşılır şekilde anlatıldı.",
    serviceArea: "Ceza Hukuku",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    key: "initial-review",
    title: "İlk Değerlendirme",
    description:
      "Uyuşmazlığın hukuki çerçevesi, acil riskler ve öncelikli ihtiyaçlar ilk görüşmede netleştirilir.",
    icon: Scale,
  },
  {
    key: "document-review",
    title: "Belge İnceleme",
    description:
      "Dosyaya ilişkin sözleşme, kayıt, yazışma ve resmi evraklar dikkatle incelenerek somut zemin oluşturulur.",
    icon: FileCheck,
  },
  {
    key: "roadmap",
    title: "Hukuki Yol Haritası",
    description:
      "Dava, başvuru, arabuluculuk veya önleyici danışmanlık seçenekleri açık ve anlaşılır şekilde planlanır.",
    icon: Target,
  },
  {
    key: "updates-process",
    title: "Düzenli Bilgilendirme",
    description:
      "Sürecin önemli aşamalarında dosyanın durumu, olası gelişmeler ve atılacak adımlar düzenli olarak paylaşılır.",
    icon: Bell,
  },
  {
    key: "confidentiality-care",
    title: "Gizlilik ve Mesleki Özen",
    description:
      "Paylaşılan bilgiler gizlilik yükümlülüğü çerçevesinde korunur; süreç mesleki dikkat ve sorumlulukla yürütülür.",
    icon: ShieldCheck,
  },
  {
    key: "representation",
    title: "Süreç Boyunca Temsil",
    description:
      "İhtiyaca göre müzakere, başvuru, dava ve duruşma aşamalarında etkin temsil ve danışmanlık sağlanır.",
    icon: Users,
  },
];

/** Güven göstergeleri – sayısal iddia yok, prestij kartları */
export const TRUST_INDICATORS: TrustIndicator[] = [
  {
    key: "individual",
    title: "Bireysel Müvekkil Desteği",
    description: "Bireysel hukuki sorunlarda özenli değerlendirme ve süreç yönetimi.",
    icon: Users,
  },
  {
    key: "corporate",
    title: "Kurumsal Danışmanlık",
    description: "İşletmeler için sözleşme, uyuşmazlık ve uyum süreçlerinde hukuki destek.",
    icon: Briefcase,
  },
  {
    key: "transparent",
    title: "Şeffaf Süreç Yönetimi",
    description: "Düzenli bilgilendirme ve müvekkilin süreci takip edebilmesi önceliklidir.",
    icon: LayoutDashboard,
  },
  {
    key: "diligence",
    title: "Titiz Dosya Takibi",
    description: "Sürelere uyum ve belgelerin eksiksiz hazırlanması titizlikle takip edilir.",
    icon: FileCheck,
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getCourtDecisionBySlug(slug: string) {
  return COURT_DECISIONS.find((decision) => decision.slug === slug);
}

/** İlgili blog yazıları (aynı kategori, mevcut yazı hariç, en fazla 3) */
export function getRelatedBlogPosts(category: string, excludeSlug: string, limit = 3): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category && p.slug !== excludeSlug).slice(0, limit);
}

/** Kategori adına göre ilgili hizmet slug'ı (örn. "Aile Hukuku" -> aile-hukuku) */
export function getServiceSlugByCategory(category: string): string | null {
  const service = SERVICES.find(
    (s) => s.title.toLowerCase() === category.toLowerCase()
  );
  return service ? service.slug : null;
}

/** Hizmet sayfası için ilgili blog yazıları (hizmet başlığı = kategori) */
export function getBlogPostsForService(serviceTitle: string, limit = 3): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === serviceTitle).slice(0, limit);
}

/** Blog kategori sayfaları (SEO: /blog/aile-hukuku vb.) */
export const BLOG_CATEGORIES = [
  { slug: "aile-hukuku", title: "Aile Hukuku" },
  { slug: "is-hukuku", title: "İş Hukuku" },
  { slug: "miras-hukuku", title: "Miras Hukuku" },
  { slug: "ceza-hukuku", title: "Ceza Hukuku" },
  { slug: "gayrimenkul-hukuku", title: "Gayrimenkul Hukuku" },
  { slug: "genel-hukuk", title: "Genel Hukuk" },
] as const;

export function getCategoryBySlug(slug: string): { slug: string; title: string } | null {
  return BLOG_CATEGORIES.find((c) => c.slug === slug) ?? null;
}

export function getPostsByCategorySlug(categorySlug: string): BlogPost[] {
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return [];
  return BLOG_POSTS.filter((p) => p.category === cat.title);
}