import IconColumns from "../components/common/IconColumns";
import Header from "../components/header/Header";



export default function Homepage(){
    return (
        <div>
            <Header />
            <section className="home_banner">
                <h1>
                    A DIGITAL AGENCY.
                </h1>
                <div className="row">
                    <IconColumns 
                        icon="star" 
                        title="Business Stratagy"
                        content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                    />
                    <IconColumns 
                        icon="box" 
                        title="Website Development"
                        content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                    />
                    <IconColumns 
                        icon="mouse" 
                        title="Marketing & Reporting"
                        content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                    />
                </div>
            </section>
            Hello
        </div>
    )
}
