import React, { useState } from 'react';
import './App.css';

function App() {
  const [tagDetails, setTagDetails] = useState('');
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const detailsText = {
    a: 'ใช้สำหรับการสร้างลิงก์ที่เชื่อมโยงไปยังหน้าอื่นหรือแหล่งข้อมูลภายนอก',
    div: 'ใช้สำหรับจัดกลุ่มเนื้อหาภายในบล็อก เพื่อการจัดระเบียบและการจัดสไตล์',
    p: 'ใช้สำหรับแสดงข้อความในย่อหน้า',
    h1: 'ใช้สำหรับหัวข้อหลักในเอกสาร HTML',
    h2: 'ใช้สำหรับหัวข้อย่อยในเอกสาร HTML',
    h3: 'ใช้สำหรับหัวข้อย่อยระดับ 3',
    h4: 'ใช้สำหรับหัวข้อย่อยระดับ 4',
    h5: 'ใช้สำหรับหัวข้อย่อยระดับ 5',
    h6: 'ใช้สำหรับหัวข้อย่อยระดับ 6',
    ul: 'ใช้สำหรับรายการที่ไม่มีลำดับ (unordered list)',
    ol: 'ใช้สำหรับรายการที่มีลำดับ (ordered list)',
    li: 'ใช้สำหรับแต่ละรายการในรายการ',
    img: 'ใช้สำหรับแสดงภาพในเอกสาร HTML',
    table: 'ใช้สำหรับสร้างตารางในเอกสาร HTML',
    tr: 'ใช้สำหรับแถวในตาราง',
    td: 'ใช้สำหรับเซลล์ในตาราง',
    th: 'ใช้สำหรับหัวข้อของเซลล์ในตาราง',
    form: 'ใช้สำหรับสร้างฟอร์มสำหรับรับข้อมูลจากผู้ใช้',
    input: 'ใช้สำหรับช่องกรอกข้อมูลในฟอร์ม',
    textarea: 'ใช้สำหรับช่องกรอกข้อมูลหลายบรรทัดในฟอร์ม',
    button: 'ใช้สำหรับสร้างปุ่มที่สามารถกดได้',
    br: 'ใช้สำหรับการเพิ่มบรรทัดใหม่',
    hr: 'ใช้สำหรับการเพิ่มเส้นขีดกลาง',
    span: 'ใช้สำหรับจัดกลุ่มข้อความในบรรทัดเดียว',
    strong: 'ใช้สำหรับเน้นข้อความ (ทำให้ตัวหนา)',
    em: 'ใช้สำหรับเน้นข้อความ (ทำให้เป็นตัวเอียง)',
    code: 'ใช้สำหรับแสดงข้อความที่เป็นโค้ด',
    pre: 'ใช้สำหรับแสดงข้อความที่มีการจัดรูปแบบล่วงหน้า',
    mark: 'ใช้สำหรับเน้นข้อความที่สำคัญ',
    section: 'ใช้สำหรับแยกเนื้อหาออกเป็นส่วนๆ',
    header: 'ใช้สำหรับส่วนหัวของเอกสารหรือส่วนอื่นๆ',
    footer: 'ใช้สำหรับส่วนท้ายของเอกสารหรือส่วนอื่นๆ',
    article: 'ใช้สำหรับเนื้อหาที่สามารถแยกออกเป็นบทความ',
    aside: 'ใช้สำหรับเนื้อหาที่ไม่สำคัญหรืออาจอยู่ข้างๆเนื้อหา',
    nav: 'ใช้สำหรับสร้างเมนูนำทาง',
    main: 'ใช้สำหรับเนื้อหาหลักของเอกสาร',
    link: 'ใช้สำหรับการเชื่อมโยงไปยังไฟล์ CSS ภายนอก',
    meta: 'ใช้สำหรับการเก็บข้อมูลเมตาเกี่ยวกับเอกสาร'
  };

  const handleTagClick = (tag) => {
    setTagDetails(detailsText[tag]);
    setIsDetailsVisible(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsVisible(false);
  };

  return (
    <div className="App">
      <header>
        <h1>แท็ก HTML</h1>
      </header>

      <section id="tags">
        <h2>รายการแท็กทั้งหมดของ HTML</h2>
        <div className="tag-buttons">
          {Object.keys(detailsText).map((tag) => (
            <button
              key={tag}
              className="tag-btn"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {isDetailsVisible && (
        <div id="tag-details" className="tag-details">
          <div id="details-box">
            <h3>รายละเอียดของแท็ก</h3>
            <p id="details-text">{tagDetails}</p>
            <button onClick={handleCloseDetails}>ปิด</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
