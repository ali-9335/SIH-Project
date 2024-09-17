import Card from "./Card";

const announcements = [
    {
        image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=631,h=344,fit=crop/YrD10DDb64swxBMM/yinyoco-global-agrotech-solutions-low-resolution-color-logo-mxBjkB1KZ3t02g6g.png', // Replace with actual image URLs
        title: 'AgroTech Solutions: Launch of New Organic Fertilizer',
        text: 'AgroTech Solutions introduces a new range of organic fertilizers to improve soil health and boost crop yields. Eco-friendly and reduces dependency on chemical fertilizers.',
        link: 'https://www.agrotechsolutions.com/organic-fertilizer'
    },
    {
        image: 'https://organicandnatural.com/wp-content/uploads/2024/06/vision.jpg', // Replace with actual image URLs
        title: 'FarmTech Innovations: Partnership for Precision Agriculture',
        text: 'FarmTech Innovations partners with local farmers to implement precision agriculture technologies to optimize water usage and crop management.',
        link: 'https://www.farmtechinnovations.com/precision-agriculture'
    },
    {
        image: 'https://www.livemint.com/lm-img/img/2024/08/11/1600x900/PM_Modi-Seeds_1723372840769_1723372851911.jpg', // Replace with actual image URLs
        title: 'GreenFields Ltd.: Launch of High-Yield Seed Varieties',
        text: 'GreenFields Ltd. releases new seed varieties with higher yields and better disease resistance, suitable for various crops.',
        link: 'https://www.greenfields.com/high-yield-seeds'
    },
    {
        image: 'https://solisworld.com/blog/wp-content/uploads/2023/06/Achieve-Higher-Yields-Banner.jpg', // Replace with actual image URLs
        title: 'AgriEquip Industries: Affordable Tractors and Equipment',
        text: 'AgriEquip Industries offers affordable tractors and farming equipment to make modern agricultural tools accessible to small and medium-sized farms.',
        link: 'https://www.agriequipindustries.com/affordable-equipment'
    },
    {
        image: 'https://khetigaadi.com/blog/wp-content/uploads/2021/05/Crop-Insurance-1.jpg', // Replace with actual image URLs
        title: 'FarmCare Solutions: New Crop Insurance Plans',
        text: 'FarmCare Solutions introduces new crop insurance plans for smallholder farmers, providing coverage against weather-related losses and other risks.',
        link: 'https://www.farmcaresolutions.com/crop-insurance'
    },
    {
        image: 'https://media.licdn.com/dms/image/D5612AQG-iedHV795yQ/article-cover_image-shrink_600_2000/0/1698748910460?e=2147483647&v=beta&t=-q-hLsTZ-3S5X6EmQe8ijmWgzZ3zVPeSqWykWbQWVDA', // Replace with actual image URLs
        title: 'EcoAgri Technologies: Solar-Powered Irrigation Systems',
        text: 'EcoAgri Technologies launches solar-powered irrigation systems to reduce water usage and energy costs, ideal for regions with limited electricity access.',
        link: 'https://www.ecoagritechnologies.com/solar-irrigation'
    }
];


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
                {announcements.map((announcement, index) => (
                <Card
                    key={index}
                    image={announcement.image}
                    title={announcement.title}
                    text={announcement.text}
                    link={announcement.link}
                />
            ))}
            </div>
        </div>
    </>
}