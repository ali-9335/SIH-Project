import Card from "./Card";

const schemes = [
    {
        image: 'https://sscnr.net.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-11-at-21.08.07-1024x680.jpg', // Replace with actual image URLs
        title: 'PM-KISAN Scheme',
        text: 'Provides income support of ₹6,000 per year to farmers, distributed in three installments.',
        link: 'https://www.pmkisan.gov.in/'
    },
    {
        image: 'https://i.filecdn.in/755esias/image-20240615091547-1-1718423148964.png', // Replace with actual image URLs
        title: 'PMAY (Pradhan Mantri Awas Yojana)',
        text: 'Aims to provide affordable housing to the urban poor with subsidies and financial assistance.',
        link: 'https://pmaymis.gov.in/'
    },
    {
        image: 'https://nagalandtribune.in/wp-content/uploads/2023/09/Longleng-District-Level-Social-Audit-Public-Hearing-MGNREGA-Scheme-for-2023-24.png', // Replace with actual image URLs
        title: 'MGNREGA',
        text: 'Guarantees 100 days of wage employment per year to rural households, enhancing livelihood security.',
        link: 'https://www.nrega.net/'
    },
    {
        image: 'https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2021/03/Untitled-1-copy-1.jpg', // Replace with actual image URLs
        title: 'Swachh Bharat Mission',
        text: 'Aims to improve sanitation and hygiene, eliminate open defecation, and promote cleanliness.',
        link: 'https://swachhbharatmission.gov.in/'
    },
    {
        image: 'https://dashboard.swarajdigital.in/storage/app/uploads/public/66e/2c1/d70/66e2c1d700d56069825446.jpg', // Replace with actual image URLs
        title: 'Ayushman Bharat',
        text: 'Provides health insurance coverage of up to ₹5 lakh per family for secondary and tertiary hospitalization.',
        link: 'https://www.pmjay.gov.in/'
    },
    {
        image: 'https://www.sscadda.com/wp-content/uploads/multisite/sites/2/2022/08/16191127/Sukanya-Samriddhi-Yojana-01-1.png', // Replace with actual image URLs
        title: 'Sukanya Samriddhi Yojana',
        text: 'A savings scheme for the girl child offering high-interest rates for education and marriage savings.',
        link: 'https://www.sbi.co.in/web/personal-banking/investments-deposits/sukanya-samriddhi-yojana'
    }
];

export default function Scheme(){
    return <>
        <div style={{padding:"50px",
             background: "radial-gradient(328px at 2.9% 15%, rgb(191, 224, 251) 0%, rgb(232, 233, 251) 25.8%, rgb(252, 239, 250) 50.8%, rgb(234, 251, 251) 77.6%, rgb(240, 251, 244) 100.7%)",
             borderTop:"2px solid grey"
        }}>
            <h1 style={{textAlign:"center",fontSize:"3rem"}}>Government Schemes</h1>
            <div style={{display:"flex",
                gap:"30px",
                padding:"50px",
                flexShrink:1
            }}>
            {schemes.map((scheme, index) => (
                <Card
                    key={index}
                    image={scheme.image}
                    title={scheme.title}
                    text={scheme.text}
                    link={scheme.link}
                />
            ))}
            </div>
        </div>
    </>
}