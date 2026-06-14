---
title: "Aselsan 4031 Telsiz Programlama"
date: 2026-06-14
tags:
 - aselsan
 - 4031
 - telsiz
description: "aselsan 4031 sabit telsizi programladım"
---

bugünkü yazımda aselsan 4031 sabit cihazı nasıl programladığıma değineceğim. aselsan 4031'i bilmeyenler için açıklayayım, aselsanın üretmiş olduğu sabit istasyon telsizidir. bu bir profesyonel cihazdır yani elle frekans girmeye müsait değildir ve zamanında kamu kurumlarında kullanılmıştır. 20W'lık çıkış gücü vardır. ikinci el aldığım bu telsiz kendi hoparlörlü güç ünitesi ile beraber geldi.  
programlaması diğer telsizlere göre biraz daha zahmetli oldu çünkü bir kaç aşamadan oluşuyor ve kendi adaptörünüzü yapmanız gerekiyor.    
  
ihtiyacınız olanlar:  
Windows 7-8-10-11 Bilgisayar  
RS232 to USB Dönüştürücü ve rj45'e ile ethernet kablosunu kullanarak bağlayacağınız rs232 kutusu: [Hepsiburada listesi](https://app.hb.biz/mUmX0UlQz5wl)  
Bir tane RJ45 uçlu ethernet kablosu.  
[T4000 ve P4000 programları.(İçerisinde P4000 WİN7-8-10 olan Windows11 ile uyumlu çalışmaktadır.)](https://drive.google.com/file/d/1xeOWxCKuYmvh4KijIh8dzd5q7WTeDjPX/view?usp=sharing)  
  
İlk olarak programlama kablosunu yapın:

![aselsan4031 programlama kablosu](/assets/aselsan4031-programlama/rs232rj45.png)

Burada dikkat etmeniz gereken bir şey var. Satın aldığınız rs232 konnektöründe numaralandırma sağ üstten başlıyor, yani fotoğrafta görünen 1. pin konnektöre baktığınızda 5. pinde gibi gözüküyor. Bu kafanızı karıştırmasın fotoğrafta rs232 için dediği 5. pini, kart üzerinde 5 yazılı pin olarak değerlendirin. Ben burada bayağı vakit kaybettim TA2PRN (Recep N.) sağolsun bu konuda beni bilgilendirdi.

**USB Sürücü Kurulumu**    

1. RS232 dönüştürücüyü bilgisayarınıza taktıksan sonra aygıt yöneticisine girin.  
2. Orada  **Bağlantı noktaları (COM ve LPT)** menüsüne tıklayın ve altında cihazın hangi comda olduğunu göreceksiniz. eğer hali hazırda **Prolific PL2303GT Usb Serial COM Port** diye yazmıyor ise sürücü yüklü değildir.  
3. Cihaza sağ tıklayın ve **Sürücüyü güncelleştir**i seçin.  
4. **Bilgisayarımdaki sürücülere göz at**  
5. **Bilgisayarımdaki kullanılabilir sürücülerin bir listesinden seçmeme izin ver**  
6. Karşınıza çıkan menüde **Prolific PL2303GT Usb Serial COM Port** maddesi bulunuyor ise seçin, yoksa sürücüyü internetten indirip yükleyin.

![aygıt yöneticisi ekranı](/assets/aselsan4031-programlama/aygityoneticisi.png)  
Bir diğer aşama olan telsizi amatör banda uygun hale getirme için T4000'i kullanmanız gerekiyor. Ben telsizi aldığımda bu sıfırlama yapılmıştı o yüzden T4000'in nasıl kullanılacağı konusunda bir fikrim yok. Bu yüzden P4000 kullanımına geçiyorum

rj45'i telsize takıp rs232 dönüştürücüsünü de bilgisayarımıza taktıktan sonra P4000 programını açıyoruz

![p4000 ekranı](/assets/aselsan4031-programlama/p4000.png)  
Üstte gördüğünüz telsizden bilgisayara işareti ile telsizden veri okuyabilir, diğeri ile de telsize veri yazabilirsiniz. en sağdaki tablo seçeneklerinden de diğer sayfalar arasında gezinebilir ve çeşitli ayarları konfigüre edebilirsiniz.  

Frekans yüklerken küsüratlar olmadan yüklemeniz gerekiyor. ayrıca eğer yüksek güç yani 20W'ın tamamını kullanmak isterseniz Y.Güç ayarını aktif hale getirebilirsiniz. tavsiyem röleler için düşük güçle çıkmanız, simplex frekanslar için ise hem düşük hem yüksek güçlü 2 ayrı kanal tanımlamanızdır.  

Bu yazıda uzun zamandır vakit bulamadığım ama bir o kadar da içimi kemiren aselsan 4031'e birlikte frekans yükledik. Umarım yardımcı olabilmişimdir. Diğer ayarları da karıştırdıktan sonra faydalı olabilecek özellikler için başka bir yazı paylaşabilirim, sorunuz olursa  
**ta2ydn [at] gmail.com**  
adresinden ulabilirsiniz, *TA2YDN* 73!



* **donanım:** RS232 Dönüştürücü, RS232 Adaptör, Ethernet Kablosu
* **yazılım:** P4000, T4000 programları, RS232 Sürücüsü