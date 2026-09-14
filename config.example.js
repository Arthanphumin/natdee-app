/**
 * config.example.js — Template สำหรับการตั้งค่าแอปพลิเคชัน NatDee LINE LIFF
 *
 * ไฟล์นี้คือ "ตัวอย่าง" ที่ปลอดภัยสำหรับ commit เข้า Git Repository
 * ค่าทั้งหมดเป็น Placeholder — ห้ามนำไปใช้งานจริงโดยตรง
 *
 * วิธีใช้งาน:
 *   1. คัดลอกไฟล์นี้แล้วเปลี่ยนชื่อเป็น config.js
 *   2. แทนที่ Placeholder ทุกค่าด้วยค่าจริงจาก LINE Developers Console และ n8n
 *   3. Deploy config.js พร้อมกับโปรเจกต์
 */

const CONFIG = Object.freeze({
  /**
   * LIFF IDs — กำหนดแยกตามแต่ละหน้า เพื่อความยืดหยุ่นสูงสุด
   * หากโปรเจกต์ใช้ LIFF ID เดียว ให้ใส่ค่าเดียวกันทุก Key
   *
   * วิธีดู LIFF ID: LINE Developers Console → Your Channel → LIFF tab
   */
  LIFF: {
    INDEX: "YOUR_LIFF_ID_INDEX", // index.html
    APPOINTMENTS: "YOUR_LIFF_ID_APPOINTMENTS", // appointments.html
    STATS: "YOUR_LIFF_ID_STATS", // stats.html
    HOWTO: "YOUR_LIFF_ID_HOWTO", // howto.html
  },

  /**
   * API Endpoints — URL ของ n8n Webhook แต่ละ Workflow
   * ตัวอย่าง: https://<tunnel>.trycloudflare.com/webhook/<uuid>
   */
  API: {
    APPOINTMENTS: "YOUR_WEBHOOK_URL_APPOINTMENTS",
    STATS: "YOUR_WEBHOOK_URL_STATS",
  },
});
