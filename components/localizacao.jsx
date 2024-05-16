const Local = () => {
    return ( 
        <div className="mt-5">
            <h3 className="flex justify-center font-bold mb-5">Localização</h3>
            <div class="map-container mt-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8877380460544!2d-59.999910574129565!3d-3.1243778403996822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c0515e15a7173%3A0x43bee4460b62e78a!2sOficina%20Manauara%20Diesel!5e0!3m2!1spt-BR!2sbr!4v1715801770874!5m2!1spt-BR!2sbr"  allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="h-[450px] w-full"></iframe>
            </div>
        </div>
    );
}

export default Local;