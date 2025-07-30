# 🧠 React Native: Redux Toolkit ile Global State Yönetimi

Bu proje, React Native'de Redux Toolkit kullanarak temel bir global state yönetimi nasıl yapılır konusunu öğretir. Uygulama, basit bir sayaç örneği üzerinden Redux mantığını anlamanı sağlar.

---

## 🧱 Proje Özeti

Uygulamada bir sayaç değeri global state’te saklanır. Kullanıcı:

- Sayacı artırabilir,
- Azaltabilir,
- Tekrar sıfırlayabilir.

Redux Toolkit ile oluşturulan slice yapısı ve configureStore kullanımı detaylı olarak gösterilmiştir.

Kullanılan özellikler:
- `createSlice`
- `configureStore`
- `useDispatch`
- `useSelector`

Bu proje, Redux Toolkit ile React Native üzerinde state yönetiminin nasıl entegre edileceğini pratikle öğrenmek isteyenler için idealdir.

---

## 📹 Video ile Eşleşme

📌 Bu örnek, [devArdo/React Native Dersleri - Redux Toolkit Uyg](https://www.youtube.com/watch?v=8q7gVo5SR0A&list=PLkcIcaxfjelbSrGLKY4bKh4ppHC7IusKI&index=60) videosuna karşılık gelmektedir.

---

## 🎉Sizlerle Tanışmak İsterim

### [linkedin.com/yunusemreköklü](https://www.linkedin.com/in/yunusemrek%C3%B6kl%C3%BC/)(▀̿Ĺ̯▀̿ ̿)

### (⌐■_■)[instagram.com/yunus.emrekoklu](https://www.instagram.com/yunus.emrekoklu/)

---

## 🚀 Başlangıç

Projeyi çalıştırmak için aşağıdaki adımları takip edebilirsin:

### 1. Yeni bir proje oluştur (Expo kullanarak)

> **_Terminale sırasıyla yazılacaklar_**

    npx create-expo-app my-app --template blank

### 2. Projeyi başlat

    cd my-app
    npx expo start

> Not: Bu proje Expo ile hazırlanmıştır. Redux Toolkit ve react-redux bağımlılıklarının projeye eklenmiş olması gerekir.

---

## 🧠 Öğrenilen Konular

- Redux Toolkit ile state yönetimi
- `createSlice` ile reducer ve action oluşturma
- `useSelector` ve `useDispatch` kullanımı
- Global state’ten veri okuma ve güncelleme

---

## 📁 Klasör Yapısı

    📁 redux_toolkitapp
    ├── App.js
    ├── redux
    │ ├── counterSlice.js
    │ └── store.js
    ├── screens
    │ └── Home.js
    ├── assets
    ├── package.json
    └── ...
    
---

## 📬 Katkı

Geliştirme önerilerin varsa veya katkı sunmak istersen PR gönderebilirsin 🙌
