import React, { useState } from "react";

const layouts = {
  chess: {
    label: "التخطيط الشطرنجي",
    images: [
      "/assets/seventhcourse/chess1.png",
      "/assets/seventhcourse/chess2.png",
    ],
    description:
      "المساحات المبنية في شكل رقعة شطرنجية تقسمها شوارع و أنهج مستقيمة و متعامدة",
  },
  radial: {
    label: "التخطيط الدائري",
    images: ["/assets/seventhcourse/radial1.png"],
    description:
      "تنطلق للشوارع من مركز المدينة و تتقاطع مع شوارع دائرية: تتكون المدينة من أحزمة أحياء تحيط بالمركز.",
  },
  linear: {
    label: "التصميم الخطي",
    images: [
      "/assets/seventhcourse/linear1.png",
      "/assets/seventhcourse/linear2.png",
    ],
    description: "تتراصف المباني على طول الشارع الرئيسي",
  },
  irregular: {
    label: "التصميم غير هندسي",
    images: [
      "/assets/seventhcourse/irregular1.png",
      "/assets/seventhcourse/irregular2.jpg",
    ],
    description: "أنهج غير مستقيمة ، ضيقة ومتعرجة",
  },
};

export default function DesignLayout() {
  const [selected, setSelected] = useState(null);
  const current = layouts[selected];

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    direction: "rtl",
    backgroundColor: "#f5f5f5",
    padding: "40px", // Augmenté de 20px à 40px
    maxWidth: "2000px",
    margin: "auto",
  };

  const contentStyle = {
    display: "flex",
    border: "2px solid #333",
    padding: "30px", // Augmenté de 20px à 30px
    backgroundColor: "#fff",
    minHeight: "600px", // Augmenté de 400px à 600px
  };

  const visualStyle = {
    flex: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: "30px", // Augmenté de 20px à 30px
  };

  const imageContainerStyle = {
    display: "flex",
    gap: "30px", // Augmenté de 20px à 30px
    justifyContent: "center",
    alignItems: "center",
    height: "400px", // Augmenté de 250px à 400px
  };

  const imageBoxStyle = {
    width: "400px", // Augmenté de 250px à 400px
    height: "100%",
    border: "1px solid #ddd",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px", // Augmenté de 16px à 18px
    fontWeight: "bold",
    color: "#666",
  };

  const imageStyle = {
    maxHeight: "100%",
    width: "100%",
    objectFit: "contain",
    padding: "10px", // Augmenté de 5px à 10px
  };

  const descriptionStyle = {
    marginTop: "30px", // Augmenté de 20px à 30px
    padding: "20px", // Augmenté de 15px à 20px
    backgroundColor: "#ffe082",
    fontSize: "20px", // Augmenté de 18px à 20px
    textAlign: "center",
    borderRadius: "8px",
    fontWeight: "bold",
    minHeight: "80px", // Augmenté de 60px à 80px
  };

  const buttonsStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px", // Augmenté de 16px à 20px
    justifyContent: "center",
    marginLeft: "30px", // Augmenté de 20px à 30px
  };

  const buttonBaseStyle = {
    padding: "15px", // Augmenté de 12px à 15px
    border: "none",
    cursor: "pointer",
    fontSize: "18px", // Augmenté de 16px à 18px
    fontWeight: "bold",
    borderRadius: "8px",
    transition: "all 0.2s ease",
    color: "white",
  };

  const colors = ["#f44336", "#ffa726", "#42a5f5", "#ab47bc"];

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Right part with buttons */}
        <div style={buttonsStyle}>
          {Object.entries(layouts).map(([key, layout], index) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              style={{
                ...buttonBaseStyle,
                backgroundColor: colors[index],
                outline: selected === key ? "3px solid #333" : "none",
              }}
            >
              {layout.label}
            </button>
          ))}
        </div>

        {/* Left part with images + description */}
        <div style={visualStyle}>
          <div style={imageContainerStyle}>
            {current ? (
              <>
                {current.images.map((src, i) => (
                  <div key={i} style={imageBoxStyle}>
                    <img src={src} alt="تصميم" style={imageStyle} />
                  </div>
                ))}
                {/* Si une seule image, afficher un 2ème cadre vide */}
                {current.images.length === 1 && (
                  <div style={imageBoxStyle}>عرض الصور الموافقة لكل تصميم</div>
                )}
              </>
            ) : (
              <>
                <div style={imageBoxStyle}>عرض الصور الموافقة لكل تصميم</div>
                <div style={imageBoxStyle}>عرض الصور الموافقة لكل تصميم</div>
              </>
            )}
          </div>
          <div style={descriptionStyle}>
            {current ? current.description : "تعريف لكل تصميم"}
          </div>
        </div>
      </div>
    </div>
  );
}
