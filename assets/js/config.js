/*
 * MİSTAŞ — SİTE AYARLARI
 * ------------------------------------------------------------------
 * İşletmeye ait tüm iletişim bilgileri bu dosyadan yönetilir.
 * Değeri değiştirdiğinizde sitedeki tüm sayfalar otomatik güncellenir.
 * "TODO" ile işaretli alanlar gerçek bilgilerle değiştirilmelidir.
 */
window.SITE = {
  firma: "Mistaş",
  unvan: "Mistaş Çevre Düzenleme Taşları", // TODO: resmi ticari unvan
  slogan: "Kaldırımdan bahçeye, dış mekanın her metrekaresi",

  // Telefon: ekranda görünen biçim ve arama için kullanılan biçim
  telefon: "+90 538 486 26 61",
  telefonLink: "+905384862661",
  gsm: "+90 538 486 26 61",
  // WhatsApp numarası: ülke kodu ile, başında + olmadan
  whatsapp: "905384862661",
  eposta: "info@mistas.com.tr",     // TODO: gerçek e-posta adresi

  adres: "Shell Benzinlik Karşısı, Seymen, İstanbul Yolu Üzeri No: 173/1, 59850 Çorlu/Tekirdağ",
  // Konum: 41.100206095437336, 27.950081271164475
  haritaEmbed: "https://www.google.com/maps?q=41.100206095437336,27.950081271164475&z=16&hl=tr&output=embed",
  haritaLink: "https://www.google.com/maps/search/?api=1&query=41.100206095437336,27.950081271164475",

  calismaSaatleri: [
    ["Pazartesi – Cumartesi", "08:00 – 19:00"], // TODO
    ["Pazar", "Kapalı"]
  ],

  // Rakamlar (ana sayfadaki sayaçlar) — gerçek değerlerle güncelleyin
  rakamlar: [
    { deger: 20, ek: "+", etiket: "Yıllık tecrübe" },         // TODO
    { deger: 1500, ek: "+", etiket: "Tamamlanan proje" },      // TODO
    { deger: 250, ek: "+", etiket: "Ürün çeşidi" },           // TODO
    { deger: 100, ek: "%", etiket: "Zamanında teslimat hedefi" }
  ],

  sosyal: {
    instagram: "", // örn. "https://instagram.com/mistas"
    facebook: "",
    youtube: ""
  }
};
