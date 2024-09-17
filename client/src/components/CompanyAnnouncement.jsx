import Card from "./Card";
export default function CompanyAnnouncement(){
    return <>
        <div style={{padding:"50px",
             background: "radial-gradient(328px at 2.9% 15%, rgb(191, 224, 251) 0%, rgb(232, 233, 251) 25.8%, rgb(252, 239, 250) 50.8%, rgb(234, 251, 251) 77.6%, rgb(240, 251, 244) 100.7%)",
             borderTop:"2px solid grey"
        }}>
            <h1 style={{textAlign:"center",fontSize:"3rem"}}>Company Announcements</h1>
            <div style={{display:"flex",
                gap:"30px",
                padding:"50px",
                flexShrink:1
            }}>
                <Card/>
                <Card/>
            </div>
        </div>
    </>
}