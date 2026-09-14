# NatDee Design System (Single Source of Truth)

กฎเหล็ก: ห้ามสร้าง Palette สีใหม่, ห้ามเปลี่ยน Font Family, และห้ามคิดสไตล์ Component นอกเหนือจากที่ระบุไว้ในเอกสารนี้เด็ดขาด

---

## 1. Typography & Font Family

- **Font Family:** `'Prompt', 'Noto Sans Thai', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  - ใช้ฟอนต์ไทยไร้หัวสไตล์โมเดิร์นที่มีความโค้งมน เข้ากับรูปทรงขอบมนของ Card และ Button
- **Heading (หัวข้อ):** `text-lg` ถึง `text-xl` | `font-bold` | สี `#2D3748`
- **Body (เนื้อหาทั่วไป):** `text-sm` | `font-normal` | สี `#4A5568`
- **Caption / Meta (คำอธิบายรอง):** `text-xs` | `font-medium` | สี `#A0AEC0`

---

## 2. Color Palette (สีประจำแบรนด์)

- **Primary Green:** `#4A5D4E` (เขียวมะกอกเข้ม สุภาพ เป็นธรรมชาติ)
- **LINE Accent Green:** `#06C755` (ใช้เฉพาะจุดที่เน้นเชื่อมโยง LINE หรือสถานะสมบูรณ์)
- **Cream Background:** `#FAF7F2` หรือ `#F8F6F0` (ครีมอ่อน สบายตา ไม่ใช้สีขาวจ้า `#FFFFFF` ทั้งจอ)
- **Surface / Card Background:** `#FFFFFF` (พื้นหลังการ์ด ขาวสะอาดตัดกับพื้นครีม)
- **Orange Accent:** `#E67E22` หรือ `#EA580C` (สีเน้น/แจ้งเตือนสำคัญ)
- **Danger / Error Red:** `#E11D48` (แดงนุ่มนวล ไม่แสบตา)

---

## 3. Category Badges (ชุดสีพาสเทลประจำ 5 หมวดหมู่)

- **ทั่วไป (General):** พื้นหลัง `#FEF3C7` | ตัวหนังสือ `#92400E` (เหลืองอำพันพาสเทล)
- **การเรียน (Study):** พื้นหลัง `#E2E8F0` | ตัวหนังสือ `#475569` (เทาฟ้าสุขุม คลีนตา)
- **สุขภาพ (Health):** พื้นหลัง `#DCFCE7` | ตัวหนังสือ `#166534` (เขียวมินต์สดชื่น)
- **สังสรรค์ (Social):** พื้นหลัง `#FCE7F3` | ตัวหนังสือ `#9D174D` (ชมพูพาสเทลนุ่มนวล)
- **การทำงาน (Work):** พื้นหลัง `#E0E7FF` | ตัวหนังสือ `#3730A3` (ครามอ่อน สุภาพ)

---

## 4. Components Spec

- **Cards:**
  - Background: `#FFFFFF`
  - Border: `border border-stone-200`
  - Radius: `rounded-2xl`
  - Shadow: `shadow-sm` (ห้ามใช้เงาดำฟุ้งเด็ดขาด)
- **Buttons:**
  - Radius: `rounded-xl`
  - Padding: `px-4 py-2.5`
  - Primary: พื้นหลัง `#4A5D4E` ตัวหนังสือสีขาว
  - Secondary / Refresh: ขอบ `#4A5D4E` ตัวหนังสือเขียวมะกอก
- **Badges / Tags:**
  - Radius: `rounded-full`
  - Padding: `px-2.5 py-0.5`
  - Text: `text-xs font-semibold`
- **Status Indicators:**
  - รอดำเนินการ: โทน Orange Accent
  - เสร็จสิ้นแล้ว: โทน Green
  - ยกเลิก/เลยกำหนด: โทน Red

---

## 5. Spacing & Layout

- **Max Width:** `max-w-md` (กึ่งกลางจอ `mx-auto` เสมอ)
- **Spacing:** `space-y-3` หรือ `gap-3`
- **Container Padding:** `p-4`
