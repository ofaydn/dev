---
title: "Wireguard VPN Kurulumu"
status: "Active"
tech: [Wazuh]
description: "wireguard kurulumunda yaşadığım tecrübeler"
---
Şirketimizde geliştirme yaparken github'ı kullanıyoruz. Fakat son yaşanan gelişmeler olsun hem de verinin kontrolünü de kendi kontrolümüz altına almayı isteidğimiz için açık kaynak kodlu bir alternatif arayışına çıktım. BU esnada Gitea'yı keşfettim bunun için daha sonra detaylı bir açıklama yapacağım.  
Normalde krulumlarımda tailscale kullanırım ama ne olduysa bir türlü tailscale üzerinden hiçbir veri alışverişi yapamadım. en son wireguard kurmaya karar verdim, hem kernelde çalışan çok hafif bir vpn hem de kurulumu kolay. bu aşamada nasıl yaptığımı kısaca anlatacağım. bu kurulumda wireguard sunucusu ve kişisel bilgisayarım linux tabanlı kurulumlar ona göre.
Sunucuda wireguard kurulumunu yapın, public ve private keyler oluşturun


**apt install wireguard**  
**wg genkey | tee /etc/wireguard/server_private.key | wg pubkey > /etc/wireguard/server_public.key**  
**chmod 600 /etc/wireguard/server_private.key**


Daha sonra sunucudaki konfigürasyon dosyasına VPN sunucusunun ayarlarını girin:

__nano /etc/wireguard/wg0.conf__

Ve aşağıdaki gibi bir konfigürasyon yapın  

**[Interface]**  
**Address    = 10.0.0.1/24 #Burasını istediğiniz aralıkta yapabilirsiniz**       
**ListenPort = 51820**  
**PrivateKey = <server_private.key içeriği>**  

**PostUp   = iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE**  
**PostDown = iptables -D FORWARD -i wg0 -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE**  

Eğer ufw kullanıyorsanız 51820 portunu açmanız lazım:  
**ufw allow 51820/udp**  

Ve servisi aktif hale getirin  
**systemctl enable --now wg-quick@wg0**  

SOnrasında kendi cihazınızda (benimki fedora) wireguard kurulumunu yapın ve anahtarları oluşturun
**sudo dnf install wireguard-tools** 
**wg genkey | tee fedora_private.key | wg pubkey > fedora_public.key**  

Sunucudaki konfigürasyon içerisine oluşturduğunuz client public keyi girin:  
**nano /etc/wireguard/wg0.conf**  

  

**[Peer]**  
**PublicKey  = <fedora_public.key> #burayı public key içeriği ile dğeiştirin**  
**AllowedIPs = 10.0.0.2/32**  

Ve servisi yeniden başlatın  
**systemctl restart wg-quick@wg0**  

Client bilgisayarda da aynı yoldkai konfigürasyon dosyasını düzenleyin  
  
**[Interface]**  
**Address    = 10.0.0.2/32**  
**PrivateKey = <fedora_private.key>**  

**[Peer]**  
**PublicKey  = <server_public.key>**  
**Endpoint   = <SUNUCU_IP_ADRESI>:51820**  
**AllowedIPs = 10.0.0.1/32**  
**PersistentKeepalive = 25**  

Ve yeniden başlatın
**sudo systemctl enable --now wg-quick@wg0**  

CLient bilgisayardan sunucuyu pingleyip test edin:
**ping 10.0.0.1**  

Çalışıyorsa harika.
Servislerinizi internete açmadan, sadece vpn üzerinden gelecek bağlantılara açmak istiyorsanız aşağıdaki ufw konfigürasyonunu uygulayın:

**ufw allow in on wg0 to any port 3000**  
**ufw reload**  

Böylelikle servislerinizi dışarı açmadan uzaktan yönetebilirsiniz!