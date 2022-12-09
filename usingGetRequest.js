let studentData = async () =>{
    let response = await axios("http://localhost:7000/admissionDatas");
    return response.data;
}


app.get("/allstudent", async (req, res) => {
    var data = await studentData()
    res.render("components/allStudent", {studentData: data});
    console.log(data);
    
})
