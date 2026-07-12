function generateQR(){

    const childName=document.getElementById("childName").value;
    const parentName=document.getElementById("parentName").value;
    const motherNumber=document.getElementById("motherNumber").value;
    const fatherNumber=document.getElementById("fatherNumber").value;
    const emergencyNumber=document.getElementById("emergencyNumber").value;
    const address=document.getElementById("address").value;
    const language=document.getElementById("language").value;

    if(
        childName==="" ||
        parentName==="" ||
        motherNumber==="" ||
        emergencyNumber===""
    ){
        alert("Please fill all required fields");
        return;
    }if(
    childName==="" ||
    parentName==="" ||
    motherNumber==="" ||
    emergencyNumber===""
){
    alert("Please fill all required fields");
    return;
}
const namePattern = /^[A-Za-z ]+$/;
const phonePattern = /^[0-9]{10}$/;

if(!namePattern.test(childName)){
    alert("Please enter a valid child name");
    return;
}

if(!namePattern.test(parentName)){
    alert("Please enter a valid parent name");
    return;
}

if(!phonePattern.test(motherNumber)){
    alert("Please enter a valid 10-digit mother number");
    return;
}

if(fatherNumber !== "" && !phonePattern.test(fatherNumber)){
    alert("Please enter a valid 10-digit father number");
    return;
}

if(!phonePattern.test(emergencyNumber)){
    alert("Please enter a valid 10-digit emergency number");
    return;
}
    let labels = {};

if(language === "Telugu"){
    labels = {
        child: "పిల్ల పేరు",
        parent: "తల్లిదండ్రుల పేరు",
        mother: "తల్లి ఫోన్ నంబర్",
        father: "తండ్రి ఫోన్ నంబర్",
        emergency: "అత్యవసర నంబర్",
        address: "చిరునామా"
    };
}
else if(language === "Hindi"){
    labels = {
        child: "बच्चे का नाम",
        parent: "माता-पिता का नाम",
        mother: "माँ का नंबर",
        father: "पिता का नंबर",
        emergency: "आपातकालीन नंबर",
        address: "पता"
    };
}
else{
    labels = {
        child: "Child Name",
        parent: "Parent Name",
        mother: "Mother Number",
        father: "Father Number",
        emergency: "Emergency Number",
        address: "Address"
    };
}
let qrData = `
Name:${childName}
Parent:${parentName}
Mom:${motherNumber}
Dad:${fatherNumber}
Emergency:${emergencyNumber}
Address:${address}
`;
document.getElementById("qrcode").innerHTML = "";

new QRCode(document.getElementById("qrcode"), {
    text: qrData,
    width: 200,
    height: 200
});

    document.getElementById("details").innerHTML = `
    <h3>Child Information</h3>
    <p><b>${labels.child}:</b> ${childName}</p>
    <p><b>${labels.parent}:</b> ${parentName}</p>
    <p><b>${labels.mother}:</b> ${motherNumber}</p>
    <p><b>${labels.father}:</b> ${fatherNumber}</p>
    <p><b>${labels.emergency}:</b> ${emergencyNumber}</p>
    <p><b>${labels.address}:</b> ${address}</p>
    `;
}