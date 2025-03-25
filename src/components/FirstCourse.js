import React, { useState } from "react";
import { 
  Box, Card, CardContent, TextField, Button, Grid, Typography, Container,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from "@mui/material";

import MapComponent from "../components/MapComponent.js";





const Course = () => {
  const [showAnswers, setShowAnswers] = useState({});
const [studentAnswers, setStudentAnswers] = useState({
  reason1: "",
  reason2: "",
  reason3: "",
  reason4: "",
  reason5: "",
  reason6: "",
  solution1: "",
  solution2: "",
  solution3: "",
  solution4: "",
});

const correctAnswers = {
  reason1: "صغر المساحات الفلاحية",
  reason2: "قلة الموارد المائية",
  reason3: "العزوف عن النشاط الفلاحي",
  reason4: "الاعتماد على وسائل تقليدية",
  reason5: "عدم انتظام الأمطار ومحدوديتها",
  reason6: "عدم انتظام الأمطار ومحدوديتها",
  solution1: "استكشاف المياه الجوفية",
  solution2: "توسيع المناطق الفلاحية",
  solution3: "تنويع المنتوج الفلاحي",
  solution4: "ترشيد استهلاك المياه (النهر الصناعي بليبيا)",
};

// Toggle correct answers for a specific question
const showCorrectAnswers = (questionId) => {
  setShowAnswers((prev) => ({
    ...prev,
    [questionId]: !prev[questionId],
  }));
};

// Reset inputs for a specific question
const resetInputs = (questionId) => {
  setStudentAnswers((prev) => ({
    ...prev,
    [questionId]: "",
  }));
  setShowAnswers((prev) => ({
    ...prev,
    [questionId]: false,
  }));
};

// Toggle visibility of all answers
const toggleAllAnswers = () => {
  setShowAnswers((prev) => !prev);
};

// Reset all inputs and hide answers
const resetAllInputs = () => {
  setStudentAnswers({
    reason1: "",
    reason2: "",
    reason3: "",
    reason4: "",
    reason5: "",
    reason6: "",
    solution1: "",
    solution2: "",
    solution3: "",
    solution4: "",
  });
  setShowAnswers(false);
};



  
  const toggleAnswers = (questionId) => {
    setShowAnswers((prev) => ({
        ...prev,
        [questionId]: !prev[questionId], // Toggle only the specific question
    }));
};






//third quest//
const [fosfatAnswers, setFosfatAnswers] = useState([
  { country: "تونس", amount: "7566 ألف طن", rank: "الثانية" },
  { country: "المغرب", amount: "23028 ألف طن", rank: "الأولى" },
]);

const [naftAnswers, setNaftAnswers] = useState([
  { country: "الجزائر", amount: "79000 ألف طن", rank: "الأولى" },
  { country: "ليبيا", amount: "70000 ألف طن", rank: "الثانية" },
  { country: "تونس", amount: "3100 ألف طن", rank: "الثالثة" },
]);

const [hadidAnswers, setHadidAnswers] = useState([
  { country: "موريتانيا", amount: "6760 ألف طن", rank: "الأولى" },
  { country: "تونس", amount: "130 ألف طن", rank: "الثانية" },
]);

const [gazAnswers, setGazAnswers] = useState([
  { country: "الجزائر", amount: "82400 مليون م مكعب", rank: "الأولى" },
  { country: "ليبيا", amount: "8400 مليون م مكعب", rank: "الثانية" },
  { country: "تونس", amount: "239 مليون م مكعب", rank: "الثالثة" },
]);



const updateFosfat = (index, field, value) => {
  const updatedAnswers = [...fosfatAnswers];
  updatedAnswers[index][field] = value;
  setFosfatAnswers(updatedAnswers);
};

const updateNaft = (index, field, value) => {
  const updatedAnswers = [...naftAnswers];
  updatedAnswers[index][field] = value;
  setNaftAnswers(updatedAnswers);
};

const updateHadid = (index, field, value) => {
  const updatedAnswers = [...hadidAnswers];
  updatedAnswers[index][field] = value;
  setHadidAnswers(updatedAnswers);
};

const updateGaz = (index, field, value) => {
  const updatedAnswers = [...gazAnswers];
  updatedAnswers[index][field] = value;
  setGazAnswers(updatedAnswers);
};





  const questions = [
    {
      text: "بماذا تتميّز الموارد الطبيعية في المغرب العربي ؟ أذكر أنواعه",
      answer: (
        <>
          تتميز الموارد الطبيعية بالتنوع والاختلاف وتنقسم الى موارد منجميّة وأخرى طاقية:
          <br />
          <b>الموارد المنجمية:</b>
          <br />
          - <b>فسفاط:</b> تونس / المغرب
          <br />
          - <b>حديد:</b> موريطانيا
          <br />
          <b>الموارد الطاقية:</b>
          <br />
          - <b>نفط:</b> ليبيا / تونس / الجزائر / المغرب
          <br />
          - <b>غاز طبيعي:</b> ليبيا / تونس
        </>
      ),
      name: "question1",
    },




    {
    text: "نشاط 1: أذكر أسماء أهم مناجم وحقول الموارد الطبيعية بالمغرب العربي",
      name: "question2",
      answerTable: [
        ["الموارد", "ليبيا", "تونس", "الجزائر", "المغرب", "موريتانيا"],
        ["نفط", "السرير", "جبل العتقة", "حاسي مسعود العجيلية", "خريبكة الصويرة", ""],
        ["غاز طبيعي", "الواحة", "البرمة", "حاسي الرمل", "صويرة خريبكة", ""],
        ["فسفاط", "", "الرديف", "بن كبير خريبكة بوكراع", "كهيدي برقي", ""],
        ["حديد", "", "", "", "الزويرات فيديريك", ""]
      ]
    },
    
    {
      text: "أكمل الجدول التالي بمعلومات عن إنتاج الموارد الطبيعية في المغرب العربي:",
      name: "question3",
      type: "tableInput", // Add a type to differentiate this question
    },


  ];




  const [tableAnswers, setTableAnswers] = useState({
    row1: ["", "", "", "", ""],
    row2: ["", "", "", "", ""],
    row3: ["", "", "", "", ""],
    row4: ["", "", "", "", ""],
  });
  
  
  const correctTableAnswers = {
    row1: ["السرير", "جبل العتقة", "حاسي مسعود العجيلية", "خريبكة الصويرة", ""],
    row2: ["الواحة", "البرمة", "حاسي الرمل", "صويرة خريبكة", ""],
    row3: ["", "الرديف", "", "بن كبير خريبكة بوكراع", "كهيدي برقي"],
    row4: ["", "", "", "", "الزويرات فيديريك"],
  };
  

  const handleTableChange = (rowKey, index, value) => {
    setTableAnswers((prev) => ({
      ...prev,
      [rowKey]: prev[rowKey].map((cell, i) => (i === index ? value : cell)),
    }));
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentAnswers((prev) => ({
      ...prev,
      [name]: value, // Update the specific question's answer
    }));
  };
  

  

 
  const [fillInTheBlanks, setFillInTheBlanks] = useState({
    blank1: "",
    blank2: "",
    blank3: "",
    blank4: "",
    blank5: "",
    blank6: "",
    blank7: "",
    blank8: "",
  });
  
  const correctFillInTheBlanks = {
    blank1: "متنوّعة",
    blank2: "منجميّة وطاقيّة",
    blank3: "متفاوتة",
    blank4: "باختلاف الأقطار.",
    blank5: "المغرب الأقصى وتونس",
    blank6: "بموريطانيا وتونس",
    blank7: "الموارد الطّاقيّة",
    blank8: "الجزائر وليبيا",
  };

  const handleFillChange = (event, key) => {
    setFillInTheBlanks((prev) => ({ ...prev, [key]: event.target.value }));
  };
  


  const [trueFalseAnswers, setTrueFalseAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
  });
  
  const correctTrueFalseAnswers = {
    q1: "←صواب",
    q2: "←خطأ، : لا تتمتّع موريطانيا باحتياطي هام من الموارد الطاقيّة مقارنة بليبيا والجزائر/ تمتلك موريطانيا احتياطي هام من الحديد",
    q3: "← خطأ: الجزائر هي أكبر منتج للنّفط في المغرب العربي أمّا موريطانيا فهي أكبر منتج للحديد في المغرب العربي. ",
    q4: "←صواب",
  };
  
  const handleTrueFalseChange = (event, key) => {
    setTrueFalseAnswers((prev) => ({ ...prev, [key]: event.target.value }));
  };


  return (

    
    <Container 
    maxWidth="lg" 
    sx={{
  
      backgroundColor: "transparent", // No extra background
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      padding: "20px 80px", // Adjust to fit inside the white space
      overflowY: "auto", // Ensures scrolling within the white area
    }}


  >
      {<header style={{
        width: "100%", backgroundColor: "#F0F0F0",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "16px", display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        <h2 style={{ fontSize: "20px", fontWeight: "600" }}>الدرس الاول:  درس خريطة الموارد الطاقية و المنجمية بالمغرب العربي</h2>
      </header> }

    
      {/* Title */}
      <Typography variant="h4" gutterBottom textAlign="center">
      </Typography>

      {/* First Instruction (Before Image) */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mb: 2,
          marginRight:"30px"
        }}
      >
       : أكمل الخارطة الذهنية التالية
      </Typography>

      {/* Image with Overlay */}
      <Box
    sx={{
      position: "relative",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      width: "65%",
      marginLeft: "auto",
    }}
  >
    <img
      src="/assets/firstcourse/kharita_dhehneya_blank.png"
      alt="العجز الغذائي بالمغرب العربي"
      style={{ width: "100%", height: "auto" }}
    />

    {Object.keys(correctAnswers).map((key, index) => {
   const positions = {
    reason1: { top: "9.9%", right: "22%" },
    reason2: { top: "29%", right: "32.8%" },
    reason3: { top: "33%", right: "9%" },
    reason4: { top: "64%", right: "7%" },
    reason5: { top: "88%", right: "9%" },
    reason6: { top: "83%", right: "31%" },
    solution1: { top: "27%", right: "71.5%" },
    solution2: { top: "34%", right: "90%" },
    solution3: { top: "67%", right: "90%" },
    solution4: { top: "89%", right: "73%" },
  };

      return (
        <Box key={index}  sx={{
          position: "absolute",
          top: positions[key].top,
          right: positions[key].right,
          transform: "translate(50%, -50%)",
          color: "green",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
          maxWidth: "120px",
          lineHeight: "1.4",

        }}
>
          {showAnswers ? (
            <Typography
              sx={{
                color: "green",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
                maxWidth: "120px",
                lineHeight: "1.4",
              }}
            >
              {correctAnswers[key]}
            </Typography>
          ) : (
            <TextField
              name={key}
              variant="standard"
              placeholder="............."
              value={studentAnswers[key]}
              onChange={(e) =>
                setStudentAnswers({ ...studentAnswers, [key]: e.target.value })
              }
              InputProps={{
                disableUnderline: true,
              }}
              inputProps={{
                style: { textAlign: "right" },
                dir: "rtl",
              }}
              sx={{
                width: "90px",
                height: "40px",
                textAlign: "right",
              }}
            />
          )}
        </Box>
      );
    })}
  </Box>

  {/* Single Buttons for the Entire Exercise */}
  <Box sx={{ display: "flex", gap: 3, mt: 2, marginLeft: "700px", textAlign: "right" }}>
    <Button
      sx={{ fontSize: "17px", padding: "12px 24px", backgroundColor: "#F6D339" }}
      variant="contained"
      onClick={resetAllInputs}
    >
      إعادة المحاولة
    </Button>
    <Button
      sx={{ fontSize: "18px", padding: "12px 24px", backgroundColor: "#60B463" }}
      variant="contained"
      onClick={toggleAllAnswers}
    >
      الإصلاح
    </Button>
  </Box>


      {/* Second Instruction (After Image) */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight:"30px"
        }}
      >
         :الاستكشاف 
      </Typography>

      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight:"30px"
        }}
      >
      :أتأمل الخريطة التفاعلية التالية وأبدي ملاحظاتي
      </Typography>




      <Box sx={{ display: "flex", justifyContent: "center", mt: 3,marginBottom:"20px" }}>
  <Box sx={{ width: "90%", height: "60%", border: "2px solid #333", borderRadius: "8px", overflow: "hidden" }}>
    <MapComponent />
  </Box>
</Box>


<Typography
        variant="h5"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight:"32px"
        }}
      >
        تأمل عنوان الخريطة ومفتاحها. ماذا تلاحظ ؟
      </Typography>


      <div style={{ padding: "12px", width: "90%", direction: "rtl", marginRight: "20px", marginLeft: "70px" }}>
  {questions.map((q, index) => (
    <Card key={index} style={{ marginBottom: "16px", padding: "16px", textAlign: "right" }}>
      <CardContent>
        <Grid container spacing={2} direction="column" alignItems="flex-end">
          <Grid item xs={12} style={{ width: "100%" }}>
            <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "bold", textAlign: "right" }}>
              {q.text}
            </Typography>
          </Grid>

          
          
 


         {/* Buttons for Each Question */}
         <Grid item xs={12} style={{ width: "100%", textAlign: "left" }}>
          <Button
            sx={{ fontSize: "17px", padding: "12px 24px", backgroundColor: "#F6D339" }}
            variant="contained"
            onClick={resetAllInputs}
            >
            إعادة المحاولة
          </Button>
          <Button
            sx={{ fontSize: "18px", padding: "12px 24px", backgroundColor: "#60B463", marginLeft: "10px" }}
            variant="contained"
            onClick={toggleAllAnswers}
            >
            {showAnswers[q.name] ? "إخفاء الإصلاح" : "الإصلاح"}
          </Button>
        </Grid>

       

          <Grid item xs={12} style={{ width: "100%" }}>
            {q.answerTable ? (
              <TableContainer component={Paper} sx={{ mt: 2, border: "2px solid #ddd", borderRadius: "8px", overflow: "hidden" }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#004080" }}>
                      <TableCell rowSpan={2} sx={{ color: "white", fontSize:"18px",fontWeight: "bold", textAlign: "right" }}>الموارد</TableCell>
                      <TableCell rowSpan={2} sx={{ color: "white",fontSize:"18px" ,fontWeight: "bold", textAlign: "right" }}>القطاع</TableCell>
                      {['ليبيا', 'تونس', 'الجزائر', 'المغرب', 'موريتانيا'].map((header, idx) => (
                        <TableCell key={idx} sx={{fontSize:"18px", fontWeight: "bold", textAlign: "center", color: "white", padding: "12px" }}>{header}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[{ sector: "منجمية", label: "نفط", key: "row1" },
                      { sector: "منجمية", label: "غاز طبيعي", key: "row2" },
                      { sector: "طاقية", label: "فسفاط", key: "row3" },
                      { sector: "طاقية", label: "حديد", key: "row4" }].map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                          {rowIndex === 0 || rowIndex === 2 ? (
                            <TableCell
                              rowSpan={2}
                              sx={{
                                fontSize:"18px",
                                fontWeight: "bold",
                                textAlign: "center",
                                backgroundColor: row.sector === "منجمية" ? "#ffe4b2" : "#d0f0c0",
                                border: "1px solid #ddd",
                              }}>
                              {row.sector}
                            </TableCell>
                          ) : null}
                          <TableCell sx={{ fontSize:"17px",fontWeight: "bold", textAlign: "center", border: "1px solid #ddd" }}>
                            {row.label}
                          </TableCell>
                          {tableAnswers[row.key].map((cell, cellIndex) => (
                            <TableCell key={cellIndex} sx={{ fontSize:"17px",textAlign: "center", border: "1px solid #ddd", padding: "8px" }}>
                              {showAnswers ? (
                                <Typography sx={{ color: "green", fontWeight: "bold" }}>
                                  {correctTableAnswers[row.key][cellIndex]}
                                </Typography>
                              ) : (
                                ((rowIndex === 0 && cellIndex < 4) || // First row except last column
                                  (rowIndex === 1 && cellIndex < 4) || // Second row except last column
                                  (rowIndex === 2 && [1, 3, 4].includes(cellIndex)) || // Third row (only 2nd, 3rd, 4th columns)
                                  (rowIndex === 3 && cellIndex === 4)) ? ( // Last row only last column
                                  <TextField
                                    fullWidth
                                    variant="outlined"
                                    value={cell}
                                    onChange={(e) => handleTableChange(row.key, cellIndex, e.target.value)}
                                    placeholder="..."
                                    sx={{ textAlign: "right" }}
                                  />
                                ) : null
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : q.type === "tableInput" ? (
              <div>
                {[
                  { title: "فسفاط", answers: fosfatAnswers, updateFunc: updateFosfat },
                  { title: "نفط", answers: naftAnswers, updateFunc: updateNaft },
                  { title: "حديد", answers: hadidAnswers, updateFunc: updateHadid },
                  { title: "الغاز الطبيعي", answers: gazAnswers, updateFunc: updateGaz }
                ].map((section, index) => (
                  <div key={index}>
                    <h3>{section.title}:</h3>
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                      {section.answers.map((item, idx) => (
                        <div key={idx} className="box" style={{ 
                            border: "2px solid #4B6587", 
                            padding: "12px", 
                            borderRadius: "8px", 
                            textAlign: "right", 
                            minWidth: "200px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                          }}>
                          <div style={{ marginBottom: "8px" }}>
                            <span>البلد:</span>
                            {showAnswers ? (
                              <span style={{ color: "green", fontWeight: "bold", marginRight: "8px" }}>{item.country}</span>
                            ) : (
                              <TextField
                                onChange={(e) => section.updateFunc(idx, "country", e.target.value)}
                                variant="standard"
                                placeholder="........."

                                sx={{ marginRight:" 10px", textAlign: "right" }}
                                />
                            )}
                          </div>
            
                          <div style={{ marginBottom: "8px" }}>
                            <span>الكمية المنتجة:</span>
                            {showAnswers ? (
                              <span style={{ color: "green", fontWeight: "bold", marginRight: "8px" }}>{item.amount}</span>
                            ) : (
                              <TextField
                                onChange={(e) => section.updateFunc(idx, "amount", e.target.value)}
                                variant="standard"

                                 placeholder="........."

                                sx={{marginRight:" 10px", textAlign: "right" }}
                              />
                            )}
                          </div>
            
                          <div>
                            <span>الرتبة:</span>
                            {showAnswers ? (
                              <span style={{ color: "green", fontWeight: "bold", marginRight: "8px" }}>{item.rank}</span>
                            ) : (
                              <TextField
                                
                              
                                onChange={(e) => section.updateFunc(idx, "rank", e.target.value)}
                                variant="standard"
                                placeholder="........."

                                sx={{ marginRight:" 10px",textAlign: "right" }}
                              />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : showAnswers ? (
              <Typography sx={{ color: "green", fontSize: "18px", fontWeight: "bold", textAlign: "right" }}>
                {q.answer}
              </Typography>
            ) : (
              <TextField
                fullWidth
                variant="outlined"
                name={q.name}
                value={studentAnswers[q.name] || ""}
                onChange={handleChange}
                placeholder="اكتب إجابتك هنا..."
                InputProps={{ style: { textAlign: "right", fontSize: "18px" } }}
              />
            )
            }
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  ))}




<Card style={{ marginBottom: "16px", padding: "16px", textAlign: "center" }}>
  <CardContent>
    <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "bold", textAlign: "right" }}>
      الاستنتاج: أكمل الفراغات بما يناسب استنادا الى ما تعرضت له خلال الدرس:
    </Typography>
    
    <Typography sx={{ textAlign: "right", marginTop: "10px", fontSize: "18px" }}>
      يملك المغرب العربي موارد طبيعيّة{" "}
      <span>
        {showAnswers ? (
          <span style={{ color: "green", fontWeight: "bold" }}>{correctFillInTheBlanks.blank1}</span>
        ) : (
          <TextField
            variant="standard"
            placeholder="....................................."
            value={fillInTheBlanks.blank1}
            onChange={(e) => handleFillChange(e, "blank1")}
            InputProps={{
              disableUnderline: true, // Removes the underline
            }}
          />
        )}
      </span>{" "}
      بين{" "}
      <span>
        {showAnswers ? (
          <span style={{ color: "green", fontWeight: "bold" }}>{correctFillInTheBlanks.blank2}</span>
        ) : (
          <TextField
            variant="standard"
            placeholder="....................................."
            value={fillInTheBlanks.blank2}
            onChange={(e) => handleFillChange(e, "blank2")}
            InputProps={{
              disableUnderline: true, // Removes the underline
            }}
          />
        )}
      </span>{" "}
      بكميات{" "}
      <span>
        {showAnswers ? (
          <span style={{ color: "green", fontWeight: "bold" }}>{correctFillInTheBlanks.blank3}</span>
        ) : (
          <TextField
            variant="standard"
            placeholder="....................................."
            value={fillInTheBlanks.blank3}
            onChange={(e) => handleFillChange(e, "blank3")}
            InputProps={{
              disableUnderline: true, // Removes the underline
            }}
          />
        )}
      </span>{" "}
      تختلف{" "}
      <span>
        {showAnswers ? (
          <span style={{ color: "green", fontWeight: "bold" }}>{correctFillInTheBlanks.blank4}</span>
        ) : (
          <TextField
            variant="standard"
            placeholder="....................................."
            value={fillInTheBlanks.blank4}
            onChange={(e) => handleFillChange(e, "blank4")}
            InputProps={{
              disableUnderline: true, // Removes the underline
            }}
          />
        )}
      </span>
      <br />
      حيث ينتج كل من{" "}
      <span>
        {showAnswers ? (
          <span style={{ color: "green", fontWeight: "bold" }}>{correctFillInTheBlanks.blank5}</span>
        ) : (
          <TextField
            variant="standard"
            placeholder="....................................."
            value={fillInTheBlanks.blank5}
            onChange={(e) => handleFillChange(e, "blank5")}
            InputProps={{
              disableUnderline: true, // Removes the underline
            }}
          />
        )}
      </span>{" "}
      %70 من الإنتاج العام للفسفاط ويتركّز انتاج الحديد خاصّة{" "}
      <span>
        {showAnswers ? (
          <span style={{ color: "green", fontWeight: "bold" }}>{correctFillInTheBlanks.blank6}</span>
        ) : (
          <TextField
            variant="standard"
            placeholder="....................................."
            value={fillInTheBlanks.blank6}
            onChange={(e) => handleFillChange(e, "blank6")}
            InputProps={{
              disableUnderline: true, // Removes the underline
            }}
          />
        )}
      </span>
      .<br />
      كما يتمتّع المغرب العربي باحتياطي هائل من{" "}
      <span>
        {showAnswers ? (
          <span style={{ color: "green", fontWeight: "bold" }}>{correctFillInTheBlanks.blank7}</span>
        ) : (
          <TextField
            variant="standard"
            placeholder="....................................."
            value={fillInTheBlanks.blank7}
            onChange={(e) => handleFillChange(e, "blank7")}
            InputProps={{
              disableUnderline: true, // Removes the underline
            }}
          />
        )}
      </span>{" "}
      حيث يتركّز انتاج كلّ من النّفط والغاز الطبيعي خاصّة في{" "}
      <span>
        {showAnswers ? (
          <span style={{ color: "green", fontWeight: "bold" }}>{correctFillInTheBlanks.blank8}</span>
        ) : (
          <TextField
            variant="standard"
            placeholder="....................................."
            value={fillInTheBlanks.blank8}
            onChange={(e) => handleFillChange(e, "blank8")}
            InputProps={{
              disableUnderline: true, // Removes the underline
            }}
          />
        )}
      </span>
    </Typography>


{/* Buttons for الاستنتاج Section */}
<div style={{ display: "flex", justifyContent: "flex-end", gap: "16px", marginTop: "16px" }}>
      <Button
        sx={{ fontSize: "17px", padding: "12px 24px", backgroundColor: "#F6D339" }}
        variant="contained"
        onClick={resetAllInputs}
        >
        إعادة المحاولة
      </Button>
      <Button
        sx={{ fontSize: "18px", padding: "12px 24px", backgroundColor: "#60B463", marginLeft: "10px" }}
        variant="contained"
        onClick={toggleAllAnswers}
        >
        {showAnswers["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
      </Button>
    </div>

  </CardContent>

  
</Card>



<Card style={{ marginBottom: "16px", padding: "16px", textAlign: "center" }}>
  <CardContent>
    <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "bold", textAlign: "right" }}>
      تمرين تقييمي: أجيب بصواب أو خطأ أصلح الخطأ ان وجد:
    </Typography>

    <Typography sx={{ textAlign: "right", marginTop: "10px", fontSize: "18px" }}>
      <div>
        يستحوذ المغرب الأقصى وتونس على أكثر من 70% من انتاج الفسفاط في العالم
        <div>
          {showAnswers ? (
            <span style={{ color: "green", fontWeight: "bold" }}>{correctTrueFalseAnswers.q1}</span>
          ) : (
            <TextField
              variant="standard"
              placeholder="صواب / خطأ"
              value={trueFalseAnswers.q1}
              onChange={(e) => handleTrueFalseChange(e, "q1")}
              InputProps={{
                disableUnderline: true,
              }}
            />
          )}
        </div>
      </div>
      <div>
        تمتلك موريطانيا احتياطي هام من الموارد الطّاقيّة
        <div>
          {showAnswers ? (
            <span style={{ color: "green", fontWeight: "bold" }}>{correctTrueFalseAnswers.q2}</span>
          ) : (
            <TextField
              variant="standard"
              placeholder="صواب / خطأ"
              value={trueFalseAnswers.q2}
              onChange={(e) => handleTrueFalseChange(e, "q2")}
              InputProps={{
                disableUnderline: true,
              }}
            />
          )}
        </div>
      </div>
      <div>
        موريطانيا هي أكبر منتج للنفط في المغرب العربي
        <div>
          {showAnswers ? (
            <span style={{ color: "green", fontWeight: "bold" }}>{correctTrueFalseAnswers.q3}</span>
          ) : (
            <TextField
              variant="standard"
              placeholder="صواب / خطأ"
              value={trueFalseAnswers.q3}
              onChange={(e) => handleTrueFalseChange(e, "q3")}
              InputProps={{
                disableUnderline: true,
              }}
            />
          )}
        </div>
      </div>
      <div>
        الجزائر وليبيا هما الدّولتان الرّئيسيان في انتاج الغاز الطّبيعي في المغرب العربي
        <div>
          {showAnswers ? (
            <span style={{ color: "green", fontWeight: "bold" }}>{correctTrueFalseAnswers.q4}</span>
          ) : (
            <TextField
              variant="standard"
              placeholder="صواب / خطأ"
              value={trueFalseAnswers.q4}
              onChange={(e) => handleTrueFalseChange(e, "q4")}
              InputProps={{
                disableUnderline: true,
              }}
            />
          )}
        </div>
      </div>
    </Typography>
  </CardContent>




  <div style={{ display: "flex", justifyContent: "flex-end", gap: "16px", marginTop: "16px" }}>
    <Button onClick={resetAllInputs} variant="contained" style={{ fontSize:"17px",backgroundColor: "#F6D339", color: "white", fontSize: "16px" }}>
      إعادة المحاولة
    </Button>
    <Button       onClick={toggleAllAnswers}
 variant="contained" style={{fontSize:"17px", backgroundColor: "#60B463", color: "white", fontSize: "16px" }}>
      {showAnswers ? "إخفاء الإصلاح" : "الإصلاح"}
    </Button>
  </div>


  
</Card>




</div>






      
    </Container>
    
  );
};

export default Course;