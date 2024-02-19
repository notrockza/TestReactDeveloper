import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// นำเข้าไฟล์ภาษา
import translationEN from './locales/en.json';
import translationTH from './locales/th.json';

// กำหนดค่าเริ่มต้นและโหลดข้อมูลภาษา
const resources = {
  en: {
    translation: translationEN
  },
  th: {
    translation: translationTH
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'th', // ภาษาเริ่มต้น
    fallbackLng: 'th', // ภาษาที่ใช้เป็นค่าเริ่มต้นหากไม่พบภาษา
    interpolation: {
      escapeValue: false // ไม่ต้องการการแปลงหรือการหลีกเลี่ยงสตริงใน React
    }
  });

export default i18n;
