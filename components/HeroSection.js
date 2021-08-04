
const HeroSection = ({title, description}) => {
    return (
        <div>
            <section class="hero is-info is-medium is-bold">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title is-1">{title}</h1>
                        <p className="sub-title">
                        {description}
                        </p>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection
