/**
 * config.js — การตั้งค่าส่วนกลางของแอปพลิเคชัน NatDee LINE LIFF
 *
 * วิธีใช้งาน:
 *   1. คัดลอกไฟล์นี้จาก config.example.js
 *   2. แทนที่ค่า Placeholder ด้านล่างด้วยค่าจริงของโปรเจกต์คุณ
 *   3. ไฟล์นี้ถูก deploy พร้อมกับโปรเจกต์บน GitHub Pages
 *      (ไม่มี Secret ระดับ Private Key หรือ Database Password ใดๆ)
 *
 * ความปลอดภัย: ระบบตรวจสอบตัวตนผ่าน idToken ที่ Backend (n8n) ทำให้
 *               โค้ด Frontend ปลอดภัยในการเปิดเผย URL เหล่านี้ได้
 */

const CONFIG = Object.freeze({
  /**
   * LIFF IDs — กำหนดแยกตามแต่ละหน้า เพื่อความยืดหยุ่นสูงสุด
   * หากโปรเจกต์ใช้ LIFF ID เดียว ให้ใส่ค่าเดียวกันทุก Key
   *
   * วิธีดู LIFF ID: LINE Developers Console → Your Channel → LIFF tab
   */
  LIFF: {
    INDEX: "2011350023-6ASKwrct", // index.html
    APPOINTMENTS: "2011350023-z3qS09LJ", // appointments.html
    STATS: "2011350023-6ASKwrct", // stats.html
    HOWTO: "2011350023-m6M2rxLv",
    SETTINGS: "2011350023-ClQmQbIq", // settings.html
  },

  /**
   * API Endpoints — URL ของ n8n Webhook แต่ละ Workflow
   * ตัวอย่าง: https://<tunnel>.trycloudflare.com/webhook/<uuid>
   */
  API: {
    APPOINTMENTS:
      "https://mug-nil-sen-protection.trycloudflare.com/webhook/a3083faa-b717-4e24-b053-ce1bc7563a50",
    STATS:
      "https://mug-nil-sen-protection.trycloudflare.com/webhook/72fb0b75-69ec-4a82-9f8b-1f895eea30f2",
  },
});
